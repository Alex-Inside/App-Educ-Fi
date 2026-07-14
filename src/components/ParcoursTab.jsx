import { useState } from 'react'
import { MOMENTS, getMomentProgress } from '../data/moments.js'
import PathView from './PathView.jsx'

// Onglet Parcours à 2 modes (bascule segmentée) :
// - Pas à pas : le chemin vertical de tous les modules et leurs leçons.
// - Étapes de vie : les parcours transverses par événement de vie.
export default function ParcoursTab({ profile, completedSubs, onOpenSub, onOpenMoment }) {
  const [mode, setMode] = useState('pas')

  return (
    <>
      <div className="parcours-head">
        <h2 className="tab-title">Ton parcours</h2>
        <div className="seg" role="tablist" aria-label="Mode de parcours">
          <button role="tab" aria-selected={mode === 'pas'} className={`seg-btn ${mode === 'pas' ? 'on' : ''}`} onClick={() => setMode('pas')}>
            Pas à pas
          </button>
          <button role="tab" aria-selected={mode === 'vie'} className={`seg-btn ${mode === 'vie' ? 'on' : ''}`} onClick={() => setMode('vie')}>
            Étapes de vie
          </button>
        </div>
      </div>

      {mode === 'pas' ? (
        <PathView profile={profile} completedSubs={completedSubs} onOpenSub={onOpenSub} />
      ) : (
        <>
          <p className="dash-intro">Un programme sur mesure pour chaque moment. Les leçons faites comptent aussi dans ton parcours.</p>
          <div className="moments-grid">
            {MOMENTS.map((m) => {
              const { done, total } = getMomentProgress(m, completedSubs)
              return (
                <button key={m.id} className="moment-tile" onClick={() => onOpenMoment(m.id)}>
                  <span className="moment-tile-emoji" aria-hidden="true">{m.emoji}</span>
                  <span className="moment-tile-title">{m.titre}</span>
                  <span className={`moment-tile-count ${done === total ? 'complete' : ''}`}>
                    {done === total ? 'Terminé ✓' : `${done}/${total} leçons`}
                  </span>
                </button>
              )
            })}
          </div>
        </>
      )}
    </>
  )
}
