import { getMoment, getMomentProgress } from '../data/moments.js'

// Détail d'une étape de vie : la séquence de leçons, avec provenance.
// Les étapes reliées à une leçon existante sont cliquables ; les autres
// (contenu dédié à venir) sont marquées « en préparation ».
export default function MomentScreen({ momentId, completedSubs, onOpenSub, onBack }) {
  const moment = getMoment(momentId)
  if (!moment) return null
  const { done, total } = getMomentProgress(moment, completedSubs)
  const nextStep = moment.steps.find((s) => s.subId && !completedSubs.includes(s.subId))

  return (
    <>
      <div className="module-header">
        <button className="back-link" onClick={onBack}>← Parcours</button>
        <span className="module-header-title">{moment.emoji} {moment.titre}</span>
      </div>

      <p className="dash-intro">{moment.desc}</p>

      <div className="module-progress module-progress-lg">
        <div className="mini-track">
          <div
            className={`mini-fill ${total > 0 && done === total ? 'complete' : ''}`}
            style={{ width: `${total ? (done / total) * 100 : 0}%` }}
          />
        </div>
        <span className="mini-count">{done}/{total}</span>
      </div>

      <div className="map-title">Ton programme ({moment.steps.length} étapes)</div>
      <div className="module-list">
        {moment.steps.map((step, i) => {
          const linked = !!step.subId
          const isDone = linked && completedSubs.includes(step.subId)
          const isNext = nextStep && step.subId === nextStep.subId
          const Tag = linked ? 'button' : 'div'
          return (
            <Tag
              key={i}
              className={`module-card ${linked ? 'clickable' : 'soon'} ${isDone ? 'done' : isNext ? 'first' : 'active'}`}
              onClick={linked ? () => onOpenSub(step.subId) : undefined}
            >
              <span className={`sub-check ${isDone ? 'is-done' : ''}`}>
                {isDone ? '✓' : i + 1}
              </span>
              <div className="module-info">
                <div className="module-titre">{step.t}</div>
                <div className="module-desc">
                  {step.from}
                  {!linked && <span className="soon-tag">en préparation</span>}
                </div>
              </div>
              <span className={`module-state ${isDone ? 'start' : 'unlocked'}`}>
                {isDone ? 'Vu' : isNext ? '▶' : ''}
              </span>
            </Tag>
          )
        })}
      </div>

      {nextStep ? (
        <button className="btn btn-primary" onClick={() => onOpenSub(nextStep.subId)}>
          {done === 0 ? 'Commencer cette étape →' : 'Continuer →'}
        </button>
      ) : total > 0 ? (
        <div className="module-complete-note">🎉 Toutes les leçons disponibles sont faites !</div>
      ) : (
        <div className="module-complete-note">✍️ Contenu dédié en préparation.</div>
      )}
    </>
  )
}
