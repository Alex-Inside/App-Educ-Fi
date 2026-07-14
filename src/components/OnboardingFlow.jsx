import KapiMascot from './KapiMascot.jsx'
import { BRAND } from '../brand.js'
import { DEFAULT_PROFILE } from '../lib/scoring.js'

// Accueil de première ouverture — sans test de connaissance.
// On présente Kapi puis on entre directement dans l'app (profil par défaut,
// accès libre à tout le parcours).
export default function OnboardingFlow({ onFinished }) {
  return (
    <div className="welcome">
      <KapiMascot size={104} bob className="welcome-mascot" />
      <h1>{BRAND.name}</h1>
      <p className="welcome-tagline">{BRAND.tagline}</p>
      <p>
        Salut, moi c'est {BRAND.mascot} 👋 De « c'est quoi un découvert ? » à tes
        premiers placements — on avance ensemble, sans jargon, à ton rythme.
      </p>
      <div className="pills">
        <span className="pill">💸 Budget</span>
        <span className="pill">🐷 Épargne</span>
        <span className="pill">💳 Crédit</span>
        <span className="pill">📈 Investir</span>
        <span className="pill">🛡️ Arnaques</span>
      </div>
      <button className="btn btn-primary" onClick={() => onFinished(DEFAULT_PROFILE, null)}>
        C'est parti
      </button>
    </div>
  )
}
