// Persistance locale de la progression (localStorage, zéro backend).
// On reste 100 % côté client : profil, progression, résultats de quiz,
// activité (série de jours), préférences. Export / import JSON pour que
// chacun reste propriétaire de ses données, sans compte.

const KEY = 'finpath.v2'
const LEGACY_KEY = 'finpath.v1'

const EMPTY = {
  profile: null,
  completedSubs: [],
  coachHistory: [],
  // quizStats[subId] = { firstTry, total, attempts, completedAt, reviewedAt }
  quizStats: {},
  // activeDays = jours (AAAA-MM-JJ) avec au moins un sous-module travaillé
  activeDays: [],
  // actionsDone = sous-modules dont l'action du Plan d'action est cochée
  actionsDone: [],
  // gamification : XP/pièces cumulés + suivi hebdo/jour (coffre, défi, ligue)
  gam: { xp: 0, coins: 0, weekKey: null, weekXP: 0, lastChallenge: null, lastChestWeek: null },
  settings: { theme: 'auto' },
}

function normalize(data) {
  return {
    profile: data.profile ?? null,
    completedSubs: Array.isArray(data.completedSubs) ? data.completedSubs : [],
    coachHistory: Array.isArray(data.coachHistory) ? data.coachHistory : [],
    quizStats: data.quizStats && typeof data.quizStats === 'object' ? data.quizStats : {},
    activeDays: Array.isArray(data.activeDays) ? data.activeDays : [],
    actionsDone: Array.isArray(data.actionsDone) ? data.actionsDone : [],
    gam: { ...EMPTY.gam, ...(data.gam ?? {}) },
    settings: { ...EMPTY.settings, ...(data.settings ?? {}) },
  }
}

export function loadState() {
  try {
    const raw = localStorage.getItem(KEY)
    if (raw) return normalize(JSON.parse(raw))

    // Migration depuis la v1 : on conserve profil et progression.
    const legacy = localStorage.getItem(LEGACY_KEY)
    if (legacy) {
      const migrated = normalize(JSON.parse(legacy))
      localStorage.setItem(KEY, JSON.stringify(migrated))
      localStorage.removeItem(LEGACY_KEY)
      return migrated
    }
    return null
  } catch {
    return null
  }
}

export function saveState(state) {
  try {
    localStorage.setItem(KEY, JSON.stringify(state))
  } catch {
    // stockage indisponible (navigation privée…) : l'app fonctionne en session
  }
}

export function clearState() {
  try {
    localStorage.removeItem(KEY)
    localStorage.removeItem(LEGACY_KEY)
  } catch {
    /* ignore */
  }
}

// ---------- Export / import : tes données t'appartiennent ----------

export function exportState(state) {
  const payload = { app: 'finpath', version: 2, exportedAt: new Date().toISOString(), data: state }
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'finpath-progression.json'
  a.click()
  URL.revokeObjectURL(url)
}

// Retourne l'état importé, ou null si le fichier n'est pas un export FinPath.
export function parseImportedState(text) {
  try {
    const payload = JSON.parse(text)
    if (payload.app !== 'finpath' || !payload.data) return null
    return normalize(payload.data)
  } catch {
    return null
  }
}
