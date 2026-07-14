import { MODULES } from '../data/curriculum.js'
import { getModuleProgress, getNextSousModule } from '../lib/progression.js'
import KapiMascot from './KapiMascot.jsx'

// Parcours « Pas à pas » — un chemin vertical sinueux façon Duolingo.
// Chaque module est une « unité » (bandeau coloré) suivie de ses leçons posées
// en zigzag sur un sentier. Rien n'est verrouillé (accès libre) : les états
// sont purement visuels — fait / en cours / à venir. Kapi marque l'étape
// conseillée.

const OFFSETS = [50, 68, 78, 68, 50, 32, 22, 32] // position horizontale en %
const PAD = 44
const DY = 82

export default function PathView({ profile, completedSubs, onOpenSub }) {
  const nextSub = getNextSousModule(profile, completedSubs)?.sousModule?.id ?? null

  return (
    <div className="path-view">
      {MODULES.map((module) => {
        const { done, total } = getModuleProgress(module.id, completedSubs)
        const subs = module.sousModules
        const n = subs.length
        const H = PAD * 2 + (n - 1) * DY
        const x = (i) => OFFSETS[i % OFFSETS.length]
        const y = (i) => PAD + i * DY

        // Sentier de fond (tous les nœuds) + sentier « fait » (jusqu'à done).
        const seg = (a, b) =>
          `C ${x(a)} ${y(a) + DY / 2} ${x(b)} ${y(b) - DY / 2} ${x(b)} ${y(b)}`
        let bg = `M ${x(0)} ${y(0)}`
        for (let i = 1; i < n; i++) bg += ' ' + seg(i - 1, i)
        let fg = ''
        if (done >= 1) {
          fg = `M ${x(0)} ${y(0)}`
          for (let i = 1; i <= Math.min(done, n - 1); i++) fg += ' ' + seg(i - 1, i)
        }

        return (
          <section key={module.id} className="unit" aria-label={`Module ${module.id} : ${module.titre}`}>
            <div className={`unit-head ${done === total ? 'done' : ''}`}>
              <span className="unit-emoji" aria-hidden="true">{module.emoji}</span>
              <div className="unit-info">
                <span className="unit-kicker">Module {module.id}</span>
                <span className="unit-title">{module.titre}</span>
              </div>
              <span className="unit-count">{done === total ? '✓' : `${done}/${total}`}</span>
            </div>

            <div className="path" style={{ height: `${H}px` }}>
              <svg
                className="path-trail"
                viewBox={`0 0 100 ${H}`}
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path d={bg} className="trail-bg" vectorEffect="non-scaling-stroke" />
                {fg && <path d={fg} className="trail-fg" vectorEffect="non-scaling-stroke" />}
              </svg>

              {subs.map((sub, i) => {
                const isDone = completedSubs.includes(sub.id)
                const isCurrent = sub.id === nextSub
                const state = isDone ? 'done' : isCurrent ? 'current' : 'todo'
                const onRight = x(i) >= 50
                return (
                  <div key={sub.id}>
                    <button
                      className={`path-node ${state}`}
                      style={{ left: `${x(i)}%`, top: `${y(i)}px` }}
                      onClick={() => onOpenSub(sub.id)}
                      aria-label={`Leçon ${sub.id} : ${sub.titre}${isDone ? ' (faite)' : isCurrent ? ' (à faire)' : ''}`}
                    >
                      {isDone ? '✓' : i + 1}
                    </button>
                    {isCurrent && (
                      <div
                        className="path-here"
                        style={{ left: `${x(i)}%`, top: `${y(i) - 46}px` }}
                        aria-hidden="true"
                      >
                        <KapiMascot size={38} bob />
                      </div>
                    )}
                    <span
                      className={`path-label ${onRight ? 'left' : 'right'} ${state}`}
                      style={{ top: `${y(i)}px`, [onRight ? 'right' : 'left']: 'calc(50% + 42px)' }}
                    >
                      {sub.titre}
                    </span>
                  </div>
                )
              })}
            </div>
          </section>
        )
      })}
    </div>
  )
}
