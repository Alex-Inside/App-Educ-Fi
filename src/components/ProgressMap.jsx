import { MODULES } from '../data/curriculum.js'
import { getModuleProgress } from '../lib/progression.js'
import { masteryOf } from '../lib/adaptive.js'

// Vue des 9 modules — tous accessibles. Le profil ne verrouille rien :
// il marque simplement le point de départ conseillé.
// v2 : affiche la maîtrise moyenne des modules complétés.
export default function ProgressMap({ profile, completedSubs = [], quizStats = {}, onSelect }) {
  return (
    <div>
      <div className="map-title">Ton parcours — 8 modules en accès libre</div>
      <div className="module-list">
        {MODULES.map((module) => {
          const { done, total } = getModuleProgress(module.id, completedSubs)
          const isComplete = done === total
          const isStarted = done > 0 && !isComplete
          const isRecommended = module.id === profile.premier_module

          const masteries = module.sousModules
            .map((s) => masteryOf(quizStats, s.id))
            .filter((m) => m !== null)
          const mastery = masteries.length
            ? Math.round(masteries.reduce((a, b) => a + b, 0) / masteries.length)
            : null

          let cardClass = 'active'
          if (isComplete) cardClass = 'done'
          else if (isRecommended && !isStarted) cardClass = 'first'

          const Tag = onSelect ? 'button' : 'div'

          return (
            <Tag
              key={module.id}
              className={`module-card ${cardClass} ${onSelect ? 'clickable' : ''}`}
              onClick={onSelect ? () => onSelect(module.id) : undefined}
            >
              <span className="module-emoji" aria-hidden="true">{module.emoji}</span>
              <div className="module-info">
                <div className="module-titre">
                  {module.id}. {module.titre}
                  {isRecommended && !isComplete && (
                    <span className="reco-badge">⭐ Conseillé</span>
                  )}
                </div>
                <div className="module-desc">{module.description}</div>
                <div className="module-progress">
                  <div className="mini-track">
                    <div
                      className={`mini-fill ${isComplete ? 'complete' : ''}`}
                      style={{ width: `${(done / total) * 100}%` }}
                    />
                  </div>
                  <span className="mini-count">
                    {isComplete ? (mastery != null ? `✓ ${mastery} %` : '✓') : `${done}/${total}`}
                  </span>
                </div>
              </div>
            </Tag>
          )
        })}
      </div>
    </div>
  )
}
