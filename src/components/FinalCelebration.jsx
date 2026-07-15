import { MODULES, getModuleNumber, TOTAL_SOUS_MODULES } from '../data/curriculum.js'
import { isModuleComplete } from '../lib/progression.js'
import { globalMastery, getStreak } from '../lib/adaptive.js'
import { levelInfo } from '../lib/gamification.js'
import { BRAND } from '../brand.js'
import KapiMascot from './KapiMascot.jsx'

// Écran de célébration de fin de parcours : affiché quand la dernière leçon
// est validée (routé depuis App), et re-consultable depuis l'accueil.
// Débouche sur les attestations par module (livrable concret).
export default function FinalCelebration({ completedSubs, quizStats, gam, activeDays = [], onOpenCertificate, onBack }) {
  const mastery = globalMastery(quizStats)
  const lvl = levelInfo(gam?.xp ?? 0)
  const streak = getStreak(activeDays)
  const doneModules = MODULES.filter((m) => isModuleComplete(m.id, completedSubs))

  return (
    <div className="celebrate">
      <div className="celebrate-confetti" aria-hidden="true">🎉🎊✨🏆✨🎊🎉</div>
      <KapiMascot size={96} bob className="celebrate-mascot" />
      <h1 className="celebrate-title">Bravo, parcours terminé !</h1>
      <p className="celebrate-sub">
        Tu as bouclé les <b>{TOTAL_SOUS_MODULES} leçons</b> d’{BRAND.name}. De la fiche
        de paie aux placements avancés — tu as maintenant la carte complète en main. 💪
      </p>

      <div className="celebrate-stats">
        <div className="stat-card">
          <span className="stat-value">{lvl.level}</span>
          <span className="stat-label">niveau</span>
        </div>
        <div className="stat-card">
          <span className="stat-value">{mastery != null ? `${mastery} %` : '—'}</span>
          <span className="stat-label">maîtrise</span>
        </div>
        <div className="stat-card">
          <span className="stat-value">{streak > 0 ? `${streak} 🔥` : `${doneModules.length}`}</span>
          <span className="stat-label">{streak > 0 ? 'jours de suite' : 'modules'}</span>
        </div>
      </div>

      <div className="celebrate-certs">
        <div className="map-title">🎓 Tes attestations par module</div>
        <p className="celebrate-certs-note">
          Télécharge une attestation de suivi pour chaque module — utile pour garder une
          trace ou la transmettre à ton employeur.
        </p>
        <div className="celebrate-cert-list">
          {doneModules.map((m) => (
            <button key={m.id} className="celebrate-cert-btn" onClick={() => onOpenCertificate(m.id)}>
              <span className="celebrate-cert-emoji" aria-hidden="true">{m.emoji}</span>
              <span className="celebrate-cert-text">
                <b>Module {getModuleNumber(m.id)} · {m.titre}</b>
                <small>Obtenir l’attestation →</small>
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="question-footer">
        <button className="btn btn-primary" onClick={onBack}>Retour à l’accueil</button>
      </div>
    </div>
  )
}
