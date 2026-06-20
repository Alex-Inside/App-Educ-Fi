import { MODULES, TOTAL_SOUS_MODULES, getModule } from '../data/curriculum.js'

// Progression sur les sous-modules. Tout est accessible librement ;
// ces helpers servent uniquement à afficher les états et suggérer la suite.

export function getModuleProgress(moduleId, completedSubs) {
  const module = getModule(moduleId)
  const done = module.sousModules.filter((s) => completedSubs.includes(s.id)).length
  return { done, total: module.sousModules.length }
}

export function isModuleComplete(moduleId, completedSubs) {
  const { done, total } = getModuleProgress(moduleId, completedSubs)
  return done === total
}

export function getGlobalProgress(completedSubs) {
  return { done: completedSubs.length, total: TOTAL_SOUS_MODULES }
}

// Prochain sous-module suggéré : le premier non complété du module conseillé,
// sinon le premier non complété du parcours dans l'ordre.
export function getNextSousModule(profile, completedSubs) {
  const ordered = [
    getModule(profile.premier_module),
    ...MODULES.filter((m) => m.id !== profile.premier_module),
  ]
  for (const module of ordered) {
    const next = module.sousModules.find((s) => !completedSubs.includes(s.id))
    if (next) return { module, sousModule: next }
  }
  return null
}

// Prochain sous-module non complété à l'intérieur d'un module donné.
export function getNextInModule(moduleId, completedSubs) {
  return getModule(moduleId).sousModules.find((s) => !completedSubs.includes(s.id)) ?? null
}
