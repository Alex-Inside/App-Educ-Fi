// Barre d'onglets basse — Accueil / Parcours / Récompenses.
// Visible uniquement sur les écrans racines (pas pendant une leçon).
const TABS = [
  { id: 'accueil', label: 'Accueil', icon: HomeIcon },
  { id: 'parcours', label: 'Parcours', icon: PathIcon },
  { id: 'recompenses', label: 'Récompenses', icon: TrophyIcon },
]

export default function TabBar({ active, onChange }) {
  return (
    <nav className="tabbar" aria-label="Navigation principale">
      {TABS.map((t) => {
        const Icon = t.icon
        const on = active === t.id
        return (
          <button
            key={t.id}
            className={`tabbar-btn ${on ? 'on' : ''}`}
            aria-current={on ? 'page' : undefined}
            onClick={() => onChange(t.id)}
          >
            <Icon />
            <span>{t.label}</span>
          </button>
        )
      })}
    </nav>
  )
}

function HomeIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 11l9-7 9 7" />
      <path d="M5 10v10h14V10" />
    </svg>
  )
}
function PathIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="6" cy="19" r="2" />
      <circle cx="18" cy="5" r="2" />
      <path d="M6 17V9a4 4 0 0 1 4-4h1M18 7v8a4 4 0 0 1-4 4h-1" />
    </svg>
  )
}
function TrophyIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 4h12v4a6 6 0 0 1-12 0V4z" />
      <path d="M6 6H3v2a3 3 0 0 0 3 3M18 6h3v2a3 3 0 0 1-3 3" />
      <path d="M9 20h6M12 14v6" />
    </svg>
  )
}
