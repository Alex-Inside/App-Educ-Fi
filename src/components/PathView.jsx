import { MODULES } from '../data/curriculum.js'
import { getModuleProgress } from '../lib/progression.js'
import KapiMascot from './KapiMascot.jsx'

// Parcours « Pas à pas » — fidèle à la maquette Kapi :
// bannière du module en cours, leçon courante mise en avant (gros nœud +
// Kapi + barre de progression), leçons faites cochées, modules suivants en
// style « à débloquer » (pointillés). Accès libre conservé : tout reste
// cliquable, le verrouillage est seulement visuel.
function Lock() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="5" y="10" width="14" height="10" rx="2.5" fill="var(--text-muted)" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" fill="none" stroke="var(--text-muted)" strokeWidth="2.4" />
    </svg>
  )
}

export default function PathView({ completedSubs, onOpenSub }) {
  // Module « en cours » = premier module non entièrement terminé.
  const currentModuleId =
    MODULES.find((m) => getModuleProgress(m.id, completedSubs).done < m.sousModules.length)?.id ??
    MODULES[MODULES.length - 1].id

  return (
    <div className="path2">
      <p className="path2-intro">De ton premier budget à ta retraite — les 9 modules dans l’ordre.</p>

      {MODULES.map((module) => {
        const { done, total } = getModuleProgress(module.id, completedSubs)
        const isDoneModule = done === total
        const isCurrent = module.id === currentModuleId
        const isUpcoming = module.id > currentModuleId

        // Module terminé : bannière compacte cochée.
        if (isDoneModule && !isCurrent) {
          return (
            <button
              key={module.id}
              className="unit2-banner done"
              onClick={() => onOpenSub(module.sousModules[0].id)}
            >
              <span className="unit2-node done"><span className="unit2-check">✓</span></span>
              <span className="unit2-banner-text">
                <b>Module {module.id} · {module.titre}</b>
                <small>Terminé — revoir</small>
              </span>
            </button>
          )
        }

        // Module à venir : rangée « à débloquer » (cliquable quand même).
        if (isUpcoming) {
          return (
            <div key={module.id} className="path2-locked-wrap">
              <div className="path2-connector" />
              <button className="unit2-locked" onClick={() => onOpenSub(module.sousModules[0].id)}>
                <span className="unit2-node locked"><Lock /></span>
                <span className="unit2-banner-text">
                  <b>{module.titre}</b>
                  <small>Module {module.id} · à débloquer</small>
                </span>
              </button>
            </div>
          )
        }

        // Module en cours : bannière + liste des leçons.
        const nextIdx = module.sousModules.findIndex((s) => !completedSubs.includes(s.id))
        return (
          <section key={module.id} className="unit2">
            <div className="unit2-chip">MODULE {module.id} · {module.titre.toUpperCase()} — EN COURS</div>
            {module.sousModules.map((sub, i) => {
              const subDone = completedSubs.includes(sub.id)
              const isNext = i === nextIdx
              return (
                <div key={sub.id}>
                  {i > 0 && <div className={`path2-connector ${i % 2 ? 'off1' : 'off2'}`} />}
                  <button
                    className={`lesson-row ${subDone ? 'done' : isNext ? 'current' : 'todo'}`}
                    onClick={() => onOpenSub(sub.id)}
                  >
                    <span className={`lesson-node ${subDone ? 'done' : isNext ? 'current' : 'todo'}`}>
                      {isNext ? (
                        <KapiMascot size={34} />
                      ) : subDone ? (
                        <span className="lesson-check">✓</span>
                      ) : (
                        <span className="lesson-num">{i + 1}</span>
                      )}
                    </span>
                    <span className="lesson-card">
                      <span className="lesson-card-title">{sub.titre}</span>
                      <span className="lesson-card-sub">
                        Leçon {i + 1} sur {total}
                        {subDone ? ' · terminée' : isNext ? ' · à faire' : ''}
                      </span>
                      {isNext && (
                        <span className="lesson-bar">
                          <span className="lesson-bar-fill" style={{ width: `${(done / total) * 100}%` }} />
                        </span>
                      )}
                    </span>
                  </button>
                </div>
              )
            })}
          </section>
        )
      })}
    </div>
  )
}
