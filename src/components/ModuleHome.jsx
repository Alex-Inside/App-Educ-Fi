import { getModule, getModuleNumber } from '../data/curriculum.js'
import { getModuleProgress } from '../lib/progression.js'

// Page d'un module : ses sous-modules et leur état, navigation libre.
// Chaque sous-module suit les 4 étapes : Prise de connaissance → Cas concret
// → Synthèse → Quiz.
export default function ModuleHome({ moduleId, completedSubs, onOpenSub, onBack }) {
  const module = getModule(moduleId)
  const { done, total } = getModuleProgress(moduleId, completedSubs)
  const next = module.sousModules.find((s) => !completedSubs.includes(s.id))

  return (
    <>
      <div className="module-header">
        <button className="back-link" onClick={onBack}>
          ← Parcours
        </button>
        <span className="module-header-title">
          {module.emoji} Module {getModuleNumber(moduleId)} · {module.titre}
        </span>
        <span className="niveau-chip">{module.niveau}</span>
      </div>

      <div className="module-progress module-progress-lg">
        <div className="mini-track">
          <div
            className={`mini-fill ${done === total ? 'complete' : ''}`}
            style={{ width: `${(done / total) * 100}%` }}
          />
        </div>
        <span className="mini-count">
          {done}/{total}
        </span>
      </div>

      <div className="map-title">Sous-modules</div>
      <div className="module-list">
        {module.sousModules.map((sub) => {
          const isDone = completedSubs.includes(sub.id)
          const isNext = next?.id === sub.id
          return (
            <button
              key={sub.id}
              className={`module-card clickable ${isDone ? 'done' : isNext ? 'first' : 'active'}`}
              onClick={() => onOpenSub(sub.id)}
            >
              <span className={`sub-check ${isDone ? 'is-done' : ''}`}>
                {isDone ? '✓' : sub.id}
              </span>
              <div className="module-info">
                <div className="module-titre">{sub.titre}</div>
                <div className="module-desc">{sub.resume}</div>
              </div>
              <span className={`module-state ${isDone ? 'start' : 'unlocked'}`}>
                {isDone ? 'Complété' : isNext ? '▶' : ''}
              </span>
            </button>
          )
        })}
      </div>

      {next && (
        <button className="btn btn-primary" onClick={() => onOpenSub(next.id)}>
          {done === 0 ? 'Commencer' : 'Continuer'} : {next.titre} →
        </button>
      )}
      {done === total && (
        <div className="module-complete-note">🎉 Module complété, bravo !</div>
      )}
    </>
  )
}
