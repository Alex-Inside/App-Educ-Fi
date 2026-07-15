import { getStreak, globalMastery } from '../lib/adaptive.js'
import { levelInfo, chestState, leagueBoard, REWARD } from '../lib/gamification.js'
import { getSousModule, MODULES, getModuleNumber } from '../data/curriculum.js'
import { getModuleProgress } from '../lib/progression.js'

// Onglet Récompenses — niveau & XP, pièces, série, défi du jour, coffre hebdo,
// tampons de validation des modules (→ attestation), ligue (émulée localement)
// et badges des leçons réussies sans faute.
export default function RewardsTab({
  completedSubs,
  quizStats,
  activeDays,
  gam,
  challengeDoneToday,
  onOpenChallenge,
  onClaimChest,
  onOpenShop,
  onOpenCertificate,
}) {
  const streak = getStreak(activeDays)
  const mastery = globalMastery(quizStats)
  const lvl = levelInfo(gam.xp)
  const chest = chestState(gam)
  const league = leagueBoard(gam)

  // Badges : leçons dont le quiz a été réussi entièrement du premier coup.
  const badges = Object.entries(quizStats)
    .filter(([, s]) => s.total > 0 && s.firstTry === s.total)
    .map(([subId]) => subId)

  const R = 54
  const C = 2 * Math.PI * R

  return (
    <>
      <h2 className="tab-title">Tes récompenses</h2>

      {/* Niveau + anneau d'XP */}
      <div className="level-card">
        <svg width="132" height="132" viewBox="0 0 132 132" aria-hidden="true">
          <circle cx="66" cy="66" r={R} fill="none" stroke="var(--chip)" strokeWidth="12" />
          <circle
            cx="66" cy="66" r={R} fill="none" stroke="var(--accent)" strokeWidth="12"
            strokeLinecap="round" strokeDasharray={`${(lvl.pct / 100) * C} ${C}`}
            transform="rotate(-90 66 66)"
          />
          <text x="66" y="60" textAnchor="middle" fontSize="13" fontWeight="800" fill="var(--text-muted)">NIV.</text>
          <text x="66" y="82" textAnchor="middle" fontSize="26" fontWeight="900" fill="var(--text)">{lvl.level}</text>
        </svg>
        <div className="level-info">
          <div className="level-title">{lvl.title}</div>
          <div className="level-xp">{lvl.into} / 500 XP</div>
          <div className="level-next">plus que {lvl.toNext} XP avant le niveau {lvl.level + 1}</div>
        </div>
      </div>

      <div className="stats-row">
        <div className="stat-card">
          <span className="stat-value">🪙 {gam.coins}</span>
          <span className="stat-label">pièces</span>
        </div>
        <div className="stat-card">
          <span className="stat-value">{streak > 0 ? `${streak} 🔥` : '—'}</span>
          <span className="stat-label">{streak > 1 ? 'jours de suite' : 'série'}</span>
        </div>
        <div className="stat-card">
          <span className="stat-value">{mastery != null ? `${mastery}%` : '—'}</span>
          <span className="stat-label">maîtrise</span>
        </div>
      </div>

      {/* Boutique */}
      <button className="shop-cta" onClick={onOpenShop}>
        <span className="shop-cta-emoji" aria-hidden="true">🛍️</span>
        <span className="shop-cta-text">
          <b>Boutique</b>
          <small>Dépense tes 🪙 {gam.coins} pièces</small>
        </span>
        <span aria-hidden="true">→</span>
      </button>

      {/* Défi du jour */}
      <button className={`defi-card ${challengeDoneToday ? 'done' : ''}`} onClick={onOpenChallenge} disabled={challengeDoneToday}>
        <span className="defi-emoji" aria-hidden="true">⚡</span>
        <span className="defi-text">
          <b>Défi du jour</b>
          <small>{challengeDoneToday ? 'Relevé ✓ — reviens demain' : `3 questions éclair · +${REWARD.challenge.xp} XP`}</small>
        </span>
        {!challengeDoneToday && <span aria-hidden="true">→</span>}
      </button>

      {/* Coffre hebdo */}
      <div className={`chest-card ${chest.available ? 'ready' : ''}`}>
        <span className="chest-emoji" aria-hidden="true">{chest.available ? '🎁' : '🔒'}</span>
        <div className="chest-text">
          <b>Coffre de la semaine</b>
          <small>
            {chest.available
              ? `Prêt à ouvrir — ${chest.coins} pièces à l'intérieur`
              : 'Reviens la semaine prochaine (gagne de l’XP pour le remplir)'}
          </small>
        </div>
        {chest.available && (
          <button className="chest-open" onClick={onClaimChest}>Ouvrir</button>
        )}
      </div>

      {/* Tampons de validation des modules */}
      <div className="map-title">Tampons de modules</div>
      <div className="stamp-grid">
        {MODULES.map((m) => {
          const { done, total } = getModuleProgress(m.id, completedSubs)
          const complete = done === total
          const started = done > 0 && !complete
          const num = getModuleNumber(m.id)
          return (
            <button
              key={m.id}
              className={`stamp ${complete ? 'done' : started ? 'started' : 'todo'}`}
              onClick={complete ? () => onOpenCertificate(m.id) : undefined}
              disabled={!complete}
              title={m.titre}
              aria-label={`Module ${num} · ${m.titre} : ${complete ? 'validé, voir l’attestation' : `${done} leçon(s) sur ${total}`}`}
            >
              {complete && <span className="stamp-seal" aria-hidden="true">VALIDÉ</span>}
              <span className="stamp-emoji" aria-hidden="true">{m.emoji}</span>
              <span className="stamp-num">Module {num}</span>
              <span className="stamp-title">{m.titre}</span>
              <span className="stamp-state">
                {complete ? '🎓 Attestation →' : `${done}/${total}`}
              </span>
            </button>
          )
        })}
      </div>

      {/* Ligue (émulation locale) */}
      <div className="map-title">Ligue {league.tier} · tu es {league.rank}<sup>e</sup></div>
      <div className="league">
        {(() => {
          const top = league.rows.slice(0, 5).map((r, i) => ({ ...r, rank: i + 1 }))
          if (!top.some((r) => r.me)) {
            const meIdx = league.rows.findIndex((r) => r.me)
            top.push({ ...league.rows[meIdx], rank: meIdx + 1 })
          }
          return top.map((r) => (
            <div key={r.name} className={`league-row ${r.me ? 'me' : ''} ${r.rank <= 3 ? 'top' : ''}`}>
              <span className="league-rank">{r.rank}</span>
              <span className="league-name">{r.name}</span>
              <span className="league-xp">{r.xp} XP</span>
            </div>
          ))
        })()}
        <p className="league-note">Ligue indicative pour se motiver — aucun autre joueur réel, tes données restent sur ton appareil.</p>
      </div>

      {/* Badges */}
      <div className="map-title">Badges — quiz réussis sans faute</div>
      {badges.length ? (
        <div className="badges">
          {badges.map((subId) => {
            const { sousModule } = getSousModule(subId)
            return (
              <div key={subId} className="badge" title={sousModule.titre}>
                <span className="badge-medal" aria-hidden="true">🏅</span>
                <span className="badge-label">{sousModule.titre}</span>
              </div>
            )
          })}
        </div>
      ) : (
        <p className="glossaire-empty">Réussis un quiz sans faute pour décrocher ton premier badge ✨</p>
      )}
    </>
  )
}
