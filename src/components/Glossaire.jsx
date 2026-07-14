import { useState } from 'react'
import { GLOSSAIRE } from '../data/glossaire.js'
import { getSousModule } from '../data/curriculum.js'

// Lexique searchable : le jargon financier traduit en français normal.
// Chaque terme renvoie vers le sous-module qui l'approfondit.

function normalize(s) {
  return s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()
}

export default function Glossaire({ onBack, onOpenSub }) {
  const [query, setQuery] = useState('')
  const q = normalize(query.trim())
  const results = q
    ? GLOSSAIRE.filter(
        (e) => normalize(e.terme).includes(q) || normalize(e.def).includes(q)
      )
    : GLOSSAIRE

  return (
    <>
      <div className="module-header">
        <button className="back-link" onClick={onBack}>
          ← Parcours
        </button>
        <span className="module-header-title">📖 Lexique</span>
      </div>

      <p className="dash-intro">
        {GLOSSAIRE.length} termes qui font peur, expliqués en français normal.
      </p>

      <input
        type="search"
        className="glossaire-search"
        placeholder="Chercher un terme… (TAEG, agios, ETF…)"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        aria-label="Chercher un terme du lexique"
      />

      <div className="glossaire-list">
        {results.map((entry) => {
          const { sousModule } = entry.sub ? getSousModule(entry.sub) : {}
          return (
            <div key={entry.terme} className="glossaire-item">
              <div className="glossaire-terme">{entry.terme}</div>
              <p className="glossaire-def">{entry.def}</p>
              {sousModule && (
                <button className="glossaire-link" onClick={() => onOpenSub(entry.sub)}>
                  Approfondir : {entry.sub} {sousModule.titre} →
                </button>
              )}
            </div>
          )
        })}
        {!results.length && (
          <p className="glossaire-empty">
            Aucun terme trouvé pour « {query} ». Pose la question au coach 💬 — il
            adore ça.
          </p>
        )}
      </div>
    </>
  )
}
