import { getGlobalProgress } from '../lib/progression.js'
import {
  getRecommendation,
  getReviewQueue,
  getStreak,
  globalMastery,
} from '../lib/adaptive.js'
import { getSousModule } from '../data/curriculum.js'
import { levelInfo, REWARD } from '../lib/gamification.js'
import KapiMascot from './KapiMascot.jsx'
import { BRAND } from '../brand.js'

const KIND_LABEL = {
  revision: '🔄 Révision conseillée',
  continue: '▶️ Reprendre',
  next: '⭐ Prochaine étape',
}

// Accueil — hiérarchie en 4 temps pour rester lisible :
// 1. où j'en suis (niveau + stats), 2. l'action du jour (reprendre + défi),
// 3. explorer (menu uniforme), 4. pied de page minimal (À propos).
// La gestion des données (export/import/réinitialisation) vit dans À propos.
export default function Dashboard({
  profile,
  completedSubs,
  quizStats,
  activeDays,
  gam,
  challengeDoneToday,
  actionsDone,
  actionsPending,
  theme,
  onCycleTheme,
  onOpenSub,
  onOpenParcours,
  onOpenChallenge,
  onOpenTools,
  onOpenGlossaire,
  onOpenActions,
  onOpenAbout,
  onOpenComplete,
}) {
  const { done, total } = getGlobalProgress(completedSubs)
  const reco = getRecommendation(profile, completedSubs, quizStats)
  const reviews = getReviewQueue(completedSubs, quizStats)
  const mastery = globalMastery(quizStats)
  const streak = getStreak(activeDays)
  const lvl = levelInfo(gam.xp)

  const themeIcon = theme === 'dark' ? '🌙' : theme === 'light' ? '☀️' : '🌗'

  return (
    <>
      <div className="dash-header">
        <span className="dash-logo">
          <KapiMascot size={30} /> {BRAND.name}
        </span>
        <div className="dash-header-right">
          <button
            className="theme-toggle"
            onClick={onCycleTheme}
            aria-label={`Thème : ${theme}. Changer de thème`}
            title={`Thème : ${theme}`}
          >
            {themeIcon}
          </button>
        </div>
      </div>

      {/* ---- 1. Où j'en suis ---- */}
      <div className="level-card compact">
        <svg width="72" height="72" viewBox="0 0 72 72" aria-hidden="true">
          <circle cx="36" cy="36" r="29" fill="none" stroke="var(--chip)" strokeWidth="8" />
          <circle
            cx="36" cy="36" r="29" fill="none" stroke="var(--accent)" strokeWidth="8"
            strokeLinecap="round" strokeDasharray={`${(lvl.pct / 100) * 182} 182`}
            transform="rotate(-90 36 36)"
          />
          <text x="36" y="41" textAnchor="middle" fontSize="18" fontWeight="900" fill="var(--text)">{lvl.level}</text>
        </svg>
        <div className="level-info">
          <div className="level-title">{lvl.title}</div>
          <div className="level-next">Niveau {lvl.level} · encore {lvl.toNext} XP</div>
        </div>
        <span className="level-coins">🪙 {gam.coins}</span>
      </div>

      {done === total ? (
        <button className="result-header result-header-btn" onClick={onOpenComplete}>
          <div className="check">🏆</div>
          <h2>Parcours terminé !</h2>
          <p>Les {total} sous-modules sont complétés. Voir mes attestations →</p>
        </button>
      ) : (
        <div className="stats-row">
          <div className="stat-card">
            <span className="stat-value">{done}<span className="stat-sub">/{total}</span></span>
            <span className="stat-label">leçons</span>
          </div>
          <div className="stat-card">
            <span className="stat-value">{mastery != null ? `${mastery} %` : '—'}</span>
            <span className="stat-label">maîtrise</span>
          </div>
          <div className="stat-card">
            <span className="stat-value">{streak > 0 ? `${streak} 🔥` : '—'}</span>
            <span className="stat-label">{streak > 1 ? 'jours de suite' : 'série'}</span>
          </div>
        </div>
      )}

      {/* ---- 2. L'action du jour ---- */}
      {reco && (
        <div className="reco-card">
          <span className="reco-kind">{KIND_LABEL[reco.kind]}</span>
          <div className="reco-title">
            {reco.sousModule.id} · {reco.sousModule.titre}
          </div>
          <p className="reco-reason">{reco.reason}</p>
          <button className="btn btn-primary" onClick={() => onOpenSub(reco.sousModule.id)}>
            {reco.kind === 'revision' ? 'Réviser (2 min) →' : done === 0 ? 'Commencer →' : 'Continuer →'}
          </button>
        </div>
      )}

      {!challengeDoneToday && (
        <button className="menu-row menu-row-defi" onClick={onOpenChallenge}>
          <span className="menu-row-emoji" aria-hidden="true">⚡</span>
          <span className="menu-row-text">
            <b>Défi du jour</b>
            <small>3 questions éclair · +{REWARD.challenge.xp} XP</small>
          </span>
          <span className="menu-row-chevron" aria-hidden="true">→</span>
        </button>
      )}

      {reviews.length > 1 && (
        <div className="review-strip">
          <span className="map-title">🔄 Aussi à réviser</span>
          {reviews.slice(1, 4).map((r) => {
            const { sousModule } = getSousModule(r.subId)
            return (
              <button key={r.subId} className="review-chip" onClick={() => onOpenSub(r.subId)}>
                {r.subId} {sousModule.titre} · {r.mastery} %
              </button>
            )
          })}
        </div>
      )}

      {/* ---- 3. Explorer ---- */}
      <div className="map-title">Explorer</div>
      <div className="menu-list">
        <button className="menu-row" onClick={onOpenParcours}>
          <span className="menu-row-emoji" aria-hidden="true">🗺️</span>
          <span className="menu-row-text">
            <b>Tout mon parcours</b>
            <small>9 modules pas à pas, ou par étape de vie</small>
          </span>
          <span className="menu-row-chevron" aria-hidden="true">→</span>
        </button>
        <button className="menu-row" onClick={onOpenActions}>
          <span className="menu-row-emoji" aria-hidden="true">🎯</span>
          <span className="menu-row-text">
            <b>Plan d'action</b>
            <small>
              {actionsPending > 0
                ? `${actionsPending} démarche${actionsPending > 1 ? 's' : ''} à faire`
                : actionsDone > 0
                  ? `${actionsDone} démarche${actionsDone > 1 ? 's' : ''} faite${actionsDone > 1 ? 's' : ''} ✓`
                  : 'Se débloque en apprenant'}
            </small>
          </span>
          {actionsPending > 0 && <span className="menu-row-badge">{actionsPending}</span>}
          <span className="menu-row-chevron" aria-hidden="true">→</span>
        </button>
        <button className="menu-row" onClick={onOpenTools}>
          <span className="menu-row-emoji" aria-hidden="true">🧰</span>
          <span className="menu-row-text">
            <b>Simulateurs</b>
            <small>Budget, boule de neige, projet…</small>
          </span>
          <span className="menu-row-chevron" aria-hidden="true">→</span>
        </button>
        <button className="menu-row" onClick={onOpenGlossaire}>
          <span className="menu-row-emoji" aria-hidden="true">📖</span>
          <span className="menu-row-text">
            <b>Lexique</b>
            <small>Le jargon, traduit en français normal</small>
          </span>
          <span className="menu-row-chevron" aria-hidden="true">→</span>
        </button>
      </div>

      {/* ---- 4. Pied de page minimal ---- */}
      <div className="dash-footer">
        <button className="btn btn-ghost" onClick={onOpenAbout}>
          ℹ️ À propos, données & mentions légales
        </button>
        <p className="privacy-note">
          🔒 Tout reste sur ton appareil : pas de compte, pas de pub, rien à vendre.
        </p>
      </div>
    </>
  )
}
