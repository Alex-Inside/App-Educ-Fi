import { getStreak, globalMastery } from '../lib/adaptive.js'
import { getGlobalProgress } from '../lib/progression.js'

// Onglet Récompenses — version socle. La couche de gamification complète
// (XP, pièces, coffre hebdo, ligues, défi) est ajoutée à l'étape suivante ;
// cet écran affiche déjà les repères de progression réels.
export default function RewardsTab({ completedSubs, quizStats, activeDays }) {
  const streak = getStreak(activeDays)
  const mastery = globalMastery(quizStats)
  const { done, total } = getGlobalProgress(completedSubs)
  const pct = Math.round((done / total) * 100)

  return (
    <>
      <h2 className="tab-title">Tes récompenses</h2>

      <div className="reward-ring-card">
        <svg width="120" height="120" viewBox="0 0 120 120" aria-hidden="true">
          <circle cx="60" cy="60" r="50" fill="none" stroke="var(--border)" strokeWidth="12" />
          <circle
            cx="60" cy="60" r="50" fill="none" stroke="var(--accent)" strokeWidth="12"
            strokeLinecap="round" strokeDasharray={`${(pct / 100) * 314} 314`}
            transform="rotate(-90 60 60)"
          />
          <text x="60" y="66" textAnchor="middle" fontSize="26" fontWeight="900" fill="var(--text)">{pct}%</text>
        </svg>
        <div>
          <div className="reward-ring-title">Parcours global</div>
          <div className="reward-ring-sub">{done} leçons sur {total}</div>
        </div>
      </div>

      <div className="stats-row">
        <div className="stat-card">
          <span className="stat-value">{streak > 0 ? `${streak} 🔥` : '—'}</span>
          <span className="stat-label">{streak > 1 ? 'jours de suite' : 'série'}</span>
        </div>
        <div className="stat-card">
          <span className="stat-value">{mastery != null ? `${mastery}%` : '—'}</span>
          <span className="stat-label">maîtrise</span>
        </div>
        <div className="stat-card">
          <span className="stat-value">{done}</span>
          <span className="stat-label">leçons faites</span>
        </div>
      </div>

      <div className="reward-soon">
        <p>🎁 Bientôt : pièces à collectionner, coffre hebdomadaire, ligues et défi du jour.</p>
      </div>
    </>
  )
}
