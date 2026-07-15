import { useState } from 'react'
import { getModule, getModuleNumber } from '../data/curriculum.js'
import { isModuleComplete } from '../lib/progression.js'
import { masteryOf } from '../lib/adaptive.js'
import { BRAND } from '../brand.js'
import KapiMascot from './KapiMascot.jsx'

// Attestation de complétion d'un module, imprimable (PDF via l'impression
// navigateur). Pas de compte : le nom est saisi par l'apprenant avant impression.
// Vocation : livrable concret côté salarié (fierté) et côté employeur (preuve
// de suivi), sans jamais exposer de donnée personnelle en ligne.
const MOIS = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre']

function formatDate(d) {
  return `${d.getDate()} ${MOIS[d.getMonth()]} ${d.getFullYear()}`
}

export default function Certificate({ moduleId, completedSubs, quizStats = {}, onBack }) {
  const module = getModule(moduleId)
  const [nom, setNom] = useState('')

  if (!module) {
    return (
      <div className="module-header">
        <button className="back-link" onClick={onBack}>← Retour</button>
        <p>Module introuvable.</p>
      </div>
    )
  }

  const complete = isModuleComplete(moduleId, completedSubs)
  const num = getModuleNumber(moduleId)
  const date = formatDate(new Date())

  const masteries = module.sousModules
    .map((s) => masteryOf(quizStats, s.id))
    .filter((m) => m !== null)
  const mastery = masteries.length
    ? Math.round(masteries.reduce((a, b) => a + b, 0) / masteries.length)
    : null

  return (
    <div className="certif-screen">
      <div className="module-header no-print">
        <button className="back-link" onClick={onBack}>← Retour</button>
        <span className="module-header-title">🎓 Attestation</span>
      </div>

      {!complete && (
        <p className="certif-warning no-print">
          Ce module n’est pas encore terminé — l’attestation reflétera ta progression du jour.
        </p>
      )}

      <div className="no-print certif-name-field">
        <label htmlFor="certif-nom">Ton nom (pour personnaliser l’attestation)</label>
        <input
          id="certif-nom"
          type="text"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
          placeholder="Prénom Nom"
          maxLength={60}
        />
      </div>

      <div className="certificate" role="document">
        <div className="certificate-inner">
          <div className="certif-brand">
            <KapiMascot size={44} />
            <span className="certif-brand-name">{BRAND.name}</span>
          </div>
          <div className="certif-kicker">Attestation de suivi</div>
          <h2 className="certif-title">Module {num} — {module.titre}</h2>
          <p className="certif-body">
            {BRAND.name} atteste que
          </p>
          <div className="certif-nom">{nom.trim() || '.....................................'}</div>
          <p className="certif-body">
            a suivi le module d’éducation financière «&nbsp;{module.titre}&nbsp;», soit{' '}
            {module.sousModules.length} leçons&nbsp;:
          </p>
          <ul className="certif-lessons">
            {module.sousModules.map((s) => (
              <li key={s.id}>{completedSubs.includes(s.id) ? '✓' : '•'} {s.titre}</li>
            ))}
          </ul>
          {mastery != null && (
            <p className="certif-mastery">Score de maîtrise moyen aux quiz : <b>{mastery}&nbsp;%</b></p>
          )}
          <div className="certif-footer">
            <div className="certif-date">Délivrée le {date}</div>
            <div className="certif-sign">
              <div className="certif-sign-mascot"><KapiMascot size={30} /></div>
              <div className="certif-sign-name">{BRAND.mascot}, coach {BRAND.name}</div>
            </div>
          </div>
          <p className="certif-disclaimer">
            Attestation de suivi d’un contenu pédagogique. Elle ne constitue ni un diplôme,
            ni une certification professionnelle, ni un conseil en investissement.
          </p>
        </div>
      </div>

      <div className="question-footer no-print">
        <button className="btn btn-primary" onClick={() => window.print()}>
          🖨️ Imprimer / enregistrer en PDF
        </button>
      </div>
    </div>
  )
}
