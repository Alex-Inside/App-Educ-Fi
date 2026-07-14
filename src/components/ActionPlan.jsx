import { useState } from 'react'
import { ACTIONS, DISCLAIMER } from '../data/actions.js'
import { getSousModule } from '../data/curriculum.js'

// Le Plan d'action : toutes les recommandations de passage à l'action
// débloquées par les leçons complétées. Deux listes : à faire / faites.
// Chaque action est une démarche éducative (vérifier, simuler, sécuriser,
// réclamer ses droits) — jamais un conseil en investissement.
export default function ActionPlan({ completedSubs, actionsDone, onActionDone, onOpenSub, onOpenTools, onBack }) {
  const [showDone, setShowDone] = useState(false)

  const unlocked = completedSubs.filter((subId) => ACTIONS[subId])
  const pending = unlocked.filter((subId) => !actionsDone.includes(subId))
  const doneList = unlocked.filter((subId) => actionsDone.includes(subId))
  const list = showDone ? doneList : pending

  return (
    <>
      <div className="module-header">
        <button className="back-link" onClick={onBack}>
          ← Parcours
        </button>
        <span className="module-header-title">🎯 Mon plan d'action</span>
      </div>

      <p className="dash-intro">
        Chaque leçon terminée débloque une démarche concrète — vérifier, simuler,
        sécuriser, réclamer tes droits. C'est ici que l'app change vraiment quelque chose.
      </p>

      <div className="module-progress module-progress-lg">
        <div className="mini-track">
          <div
            className={`mini-fill ${unlocked.length > 0 && doneList.length === unlocked.length ? 'complete' : ''}`}
            style={{ width: `${unlocked.length ? (doneList.length / unlocked.length) * 100 : 0}%` }}
          />
        </div>
        <span className="mini-count">
          {doneList.length}/{unlocked.length}
        </span>
      </div>

      <div className="tools-tabs" role="tablist" aria-label="Filtrer les actions">
        <button role="tab" aria-selected={!showDone} className={`tools-tab ${!showDone ? 'active' : ''}`} onClick={() => setShowDone(false)}>
          À faire ({pending.length})
        </button>
        <button role="tab" aria-selected={showDone} className={`tools-tab ${showDone ? 'active' : ''}`} onClick={() => setShowDone(true)}>
          Faites ({doneList.length})
        </button>
      </div>

      <div className="action-list">
        {list.map((subId) => {
          const action = ACTIONS[subId]
          const { sousModule } = getSousModule(subId)
          const isDone = actionsDone.includes(subId)
          return (
            <div key={subId} className={`action-card ${isDone ? 'muted' : ''}`}>
              <div className="action-head">
                <button className="action-origin" onClick={() => onOpenSub(subId)}>
                  Leçon {subId} · {sousModule.titre}
                </button>
                <span className="action-duree">{action.duree}</span>
              </div>
              <div className="action-titre">{action.titre}</div>
              <p className="action-detail">{action.detail}</p>
              {action.lien && (
                <a className="action-link" href={action.lien} target="_blank" rel="noopener noreferrer">
                  {action.lienLabel} ↗
                </a>
              )}
              {action.type === 'outil' && (
                <button className="action-link" onClick={onOpenTools}>
                  🧰 Ouvrir les simulateurs →
                </button>
              )}
              {!isDone && (
                <button className="action-check" onClick={() => onActionDone(subId)}>
                  Je l'ai fait ✓
                </button>
              )}
            </div>
          )
        })}

        {!list.length && (
          <p className="glossaire-empty">
            {showDone
              ? 'Aucune action cochée pour l’instant — chaque petit pas comptera ici.'
              : unlocked.length
                ? 'Tout est fait. Sérieusement, chapeau. 👏'
                : 'Termine ta première leçon pour débloquer ta première action.'}
          </p>
        )}
      </div>

      <p className="action-disclaimer plan-disclaimer">{DISCLAIMER}</p>
    </>
  )
}
