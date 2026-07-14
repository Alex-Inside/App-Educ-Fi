// Moteur adaptatif FinPath — le cerveau local de la personnalisation.
// Il exploite les résultats de quiz pour construire un score de maîtrise par
// sous-module, planifier des révisions espacées, recommander la prochaine
// étape avec une raison explicite, et ouvrir le fast-track (valider un
// sous-module en réussissant directement son quiz).
// Tout est heuristique locale et transparente : l'appel Claude pourra
// l'enrichir, jamais la remplacer (l'app doit rester utile hors ligne).

import { MODULES, getModule, getSousModule } from '../data/curriculum.js'

// ---------- Maîtrise ----------

// Score 0..100 : part de bonnes réponses du premier coup, pondérée par les
// tentatives. Une révision réussie remonte le score (on garde le meilleur).
export function computeMastery({ firstTry, total }) {
  if (!total) return null
  return Math.round((firstTry / total) * 100)
}

export function masteryOf(quizStats, subId) {
  const stats = quizStats[subId]
  return stats ? computeMastery(stats) : null
}

export function recordQuizResult(quizStats, subId, { firstTry, total }) {
  const prev = quizStats[subId]
  const now = new Date().toISOString()
  const next = { firstTry, total, completedAt: prev?.completedAt ?? now, reviewedAt: now }
  // Une révision ne peut pas dégrader la maîtrise affichée : on garde le
  // meilleur passage (l'objectif est d'encourager la révision, pas de punir).
  if (prev && computeMastery(prev) > computeMastery(next)) {
    next.firstTry = prev.firstTry
    next.total = prev.total
  }
  return { ...quizStats, [subId]: next }
}

export function globalMastery(quizStats) {
  const scores = Object.keys(quizStats)
    .map((subId) => masteryOf(quizStats, subId))
    .filter((s) => s !== null)
  if (!scores.length) return null
  return Math.round(scores.reduce((a, b) => a + b, 0) / scores.length)
}

// ---------- Révisions espacées ----------

// Plus la maîtrise est fragile, plus la révision revient vite.
const REVIEW_DELAYS_DAYS = [
  { below: 60, days: 2 },
  { below: 85, days: 7 },
]

function daysSince(iso, now) {
  return (now - new Date(iso).getTime()) / 86_400_000
}

// Sous-modules complétés dont la maîtrise mérite un rafraîchissement.
export function getReviewQueue(completedSubs, quizStats, now = Date.now()) {
  const due = []
  for (const subId of completedSubs) {
    const stats = quizStats[subId]
    if (!stats) continue
    const mastery = computeMastery(stats)
    const rule = REVIEW_DELAYS_DAYS.find((r) => mastery < r.below)
    if (!rule) continue
    const since = daysSince(stats.reviewedAt ?? stats.completedAt, now)
    if (since >= rule.days) {
      due.push({ subId, mastery, overdueDays: Math.floor(since - rule.days) })
    }
  }
  // Les plus fragiles d'abord, puis les plus anciennes.
  return due.sort((a, b) => a.mastery - b.mastery || b.overdueDays - a.overdueDays)
}

// ---------- Recommandation motivée ----------

const OBJECTIF_LABELS = {
  stop_decouvert: 'ton objectif : sortir du découvert',
  epargner: 'ton objectif : commencer à épargner',
  investir: 'ton objectif : investir tes premiers euros',
  projet: 'ton objectif : financer un projet',
}

// La prochaine étape conseillée + la raison, en français explicite.
// Priorité : révision fragile due > suite du module en cours > module
// aligné sur l'objectif > suite du parcours dans l'ordre.
export function getRecommendation(profile, completedSubs, quizStats, now = Date.now()) {
  const review = getReviewQueue(completedSubs, quizStats, now)[0]
  if (review) {
    const { module, sousModule } = getSousModule(review.subId)
    return {
      kind: 'revision',
      module,
      sousModule,
      reason: `Quiz réussi à ${review.mastery} % — une révision rapide va ancrer ce sujet.`,
    }
  }

  // Module entamé mais pas fini : on encourage à le terminer.
  const inProgress = MODULES.find((m) => {
    const done = m.sousModules.filter((s) => completedSubs.includes(s.id)).length
    return done > 0 && done < m.sousModules.length
  })
  if (inProgress) {
    const next = inProgress.sousModules.find((s) => !completedSubs.includes(s.id))
    return {
      kind: 'continue',
      module: inProgress,
      sousModule: next,
      reason: `Tu as bien avancé sur « ${inProgress.titre} » — encore ${
        inProgress.sousModules.filter((s) => !completedSubs.includes(s.id)).length
      } étape(s) pour boucler le module.`,
    }
  }

  // Sinon : le module recommandé (objectif de l'onboarding), puis l'ordre du parcours.
  const ordered = [
    getModule(profile.premier_module),
    ...MODULES.filter((m) => m.id !== profile.premier_module),
  ]
  for (const module of ordered) {
    const next = module.sousModules.find((s) => !completedSubs.includes(s.id))
    if (next) {
      const isObjective = module.id === profile.premier_module && profile.objectif
      return {
        kind: 'next',
        module,
        sousModule: next,
        reason: isObjective
          ? `Choisi pour ${OBJECTIF_LABELS[profile.objectif] ?? 'ton objectif'}.`
          : `La suite logique de ton parcours.`,
      }
    }
  }
  return null
}

// ---------- Fast-track ----------

// Valider un sous-module en passant directement le quiz : proposé aux profils
// avancés, aux intermédiaires sur les fondamentaux, et à toute personne qui a
// prouvé sa maîtrise (≥ 85 % de moyenne sur au moins 4 quiz).
export function isFastTrackEligible(profile, moduleId, quizStats) {
  if (profile.profil === 'avance') return true
  if (profile.profil === 'intermediaire' && moduleId <= 2) return true
  const scores = Object.keys(quizStats)
  return scores.length >= 4 && globalMastery(quizStats) >= 85
}

// ---------- Activité / série de jours ----------

function dayKey(date) {
  const d = new Date(date)
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(
    d.getDate()
  ).padStart(2, '0')}`
}

export function touchActivity(activeDays, now = Date.now()) {
  const key = dayKey(now)
  return activeDays.includes(key) ? activeDays : [...activeDays, key]
}

// Série de jours consécutifs se terminant aujourd'hui ou hier (une série ne
// casse pas parce qu'on regarde son tableau de bord le matin).
export function getStreak(activeDays, now = Date.now()) {
  if (!activeDays.length) return 0
  const days = new Set(activeDays)
  let cursor = now
  if (!days.has(dayKey(cursor))) {
    cursor -= 86_400_000
    if (!days.has(dayKey(cursor))) return 0
  }
  let streak = 0
  while (days.has(dayKey(cursor))) {
    streak += 1
    cursor -= 86_400_000
  }
  return streak
}
