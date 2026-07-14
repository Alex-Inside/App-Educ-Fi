import { getMoment, getMomentProgress } from '../data/moments.js'
import { getSousModule } from '../data/curriculum.js'
import { getAction } from '../data/actions.js'

// Détail d'un Moment de vie : un mini-parcours transverse assemblé à partir
// des leçons existantes. Même progression, mêmes actions — juste réordonnées
// autour de l'événement que vit l'utilisateur.
export default function MomentScreen({ momentId, completedSubs, actionsDone, onOpenSub, onBack }) {
  const moment = getMoment(momentId)
  if (!moment) return null
  const { done, total } = getMomentProgress(moment, completedSubs)
  const next = moment.subIds.find((s) => !completedSubs.includes(s))

  return (
    <>
      <div className="module-header">
        <button className="back-link" onClick={onBack}>
          ← Parcours
        </button>
        <span className="module-header-title">
          {moment.emoji} {moment.titre}
        </span>
      </div>

      <p className="dash-intro">{moment.accroche}</p>

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

      <p className="moment-pourquoi">{moment.pourquoi}</p>

      <div className="map-title">Ton mini-parcours ({total} leçons)</div>
      <div className="module-list">
        {moment.subIds.map((subId, i) => {
          const { module, sousModule } = getSousModule(subId)
          const isDone = completedSubs.includes(subId)
          const isNext = next === subId
          const hasAction = !!getAction(subId)
          const actionOk = actionsDone.includes(subId)
          return (
            <button
              key={subId}
              className={`module-card clickable ${isDone ? 'done' : isNext ? 'first' : 'active'}`}
              onClick={() => onOpenSub(subId)}
            >
              <span className={`sub-check ${isDone ? 'is-done' : ''}`}>
                {isDone ? '✓' : i + 1}
              </span>
              <div className="module-info">
                <div className="module-titre">{sousModule.titre}</div>
                <div className="module-desc">
                  {module.emoji} Module {module.id} · {sousModule.resume}
                </div>
                {hasAction && isDone && (
                  <div className={`moment-action-state ${actionOk ? 'ok' : ''}`}>
                    {actionOk ? '🎯 Action faite ✓' : '🎯 Action à faire'}
                  </div>
                )}
              </div>
              <span className={`module-state ${isDone ? 'start' : 'unlocked'}`}>
                {isDone ? 'Vu' : isNext ? '▶' : ''}
              </span>
            </button>
          )
        })}
      </div>

      {next ? (
        <button className="btn btn-primary" onClick={() => onOpenSub(next)}>
          {done === 0 ? 'Commencer' : 'Continuer'} ce moment →
        </button>
      ) : (
        <div className="module-complete-note">
          🎉 Moment maîtrisé ! Les leçons comptent aussi dans ton parcours général.
        </div>
      )}
    </>
  )
}
