// Persistance locale de la progression (localStorage, zéro backend).
// On reste 100 % côté client : profil, sous-modules complétés, historique coach.

const KEY = 'finpath.v1'

export function loadState() {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return null
    const data = JSON.parse(raw)
    return {
      profile: data.profile ?? null,
      completedSubs: Array.isArray(data.completedSubs) ? data.completedSubs : [],
      coachHistory: Array.isArray(data.coachHistory) ? data.coachHistory : [],
    }
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
  } catch {
    /* ignore */
  }
}
