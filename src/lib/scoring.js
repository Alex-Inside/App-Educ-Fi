import { QUESTIONS } from '../data/questions.js'

// Profils détectés à l'onboarding. Plus aucun verrouillage : le profil sert à
// recommander un point de départ et à adapter le ton (coach, futur appel Claude).
// Le format reste aligné sur le JSON du system prompt onboarding (services/claude.js).
const PROFILS = {
  debutant: {
    profil: 'debutant',
    label: 'Débutant',
    niveau: 'On part des bases, et c’est très bien comme ça',
    premier_module: 1,
    ton_adapte: 'très concret, zéro jargon',
  },
  intermediaire: {
    profil: 'intermediaire',
    label: 'Intermédiaire',
    niveau: 'Tu as les bases, on passe au concret',
    premier_module: 2,
    ton_adapte: 'jargon expliqué, exemples réels',
  },
  avance: {
    profil: 'avance',
    label: 'Avancé',
    niveau: 'Tu maîtrises, on attaque directement le solide',
    premier_module: 5,
    ton_adapte: 'jargon assumé, données chiffrées',
  },
}

// Score max : situation 2 + épargne 3 + taux 3 + découvert 3 = 11
const SEUIL_INTERMEDIAIRE = 4
const SEUIL_AVANCE = 8

export function computeScore(answers) {
  return QUESTIONS.reduce((total, question) => {
    if (question.scored === false) return total
    const option = question.options.find((o) => o.value === answers[question.id])
    return total + (option ? option.score : 0)
  }, 0)
}

export function computeProfile(answers) {
  const score = computeScore(answers)

  let base
  if (score >= SEUIL_AVANCE) base = PROFILS.avance
  else if (score >= SEUIL_INTERMEDIAIRE) base = PROFILS.intermediaire
  else base = PROFILS.debutant

  // L'objectif prioritaire (Q5) oriente le point de départ conseillé —
  // sauf pour un débutant, qui a toujours intérêt à poser les bases d'abord.
  const objectifQuestion = QUESTIONS.find((q) => q.id === 'objectif')
  const objectif = objectifQuestion.options.find((o) => o.value === answers.objectif)
  const premier_module =
    base.profil === 'debutant' || !objectif ? base.premier_module : objectif.moduleCible

  return { ...base, premier_module, score, objectif: objectif?.value ?? null }
}
