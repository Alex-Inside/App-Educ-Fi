import { useRef } from 'react'
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

// Tableau de bord v2 : stats d'apprentissage, recommandation motivée par le
// moteur adaptatif, révisions dues, carte des 9 modules, outils et lexique,
// export / import de progression (tes données t'appartiennent).
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
  onExport,
  onImport,
  onRestart,
}) {
  const { done, total } = getGlobalProgress(completedSubs)
  const reco = getRecommendation(profile, completedSubs, quizStats)
  const reviews = getReviewQueue(completedSubs, quizStats)
  const mastery = globalMastery(quizStats)
  const streak = getStreak(activeDays)
  const lvl = levelInfo(gam.xp)
  const fileRef = useRef(null)

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
          <div className="level-next">{lvl.into}/500 XP — plus que {lvl.toNext} XP</div>
        </div>
        <span className="level-coins">🪙 {gam.coins}</span>
      </div>

      {done === total ? (
        <div className="result-header">
          <div className="check">🏆</div>
          <h2>Parcours terminé !</h2>
          <p>Les {total} sous-modules sont complétés. Tes finances te disent merci.</p>
        </div>
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

      {!challengeDoneToday && (
        <button className="defi-card" onClick={onOpenChallenge}>
          <span className="defi-emoji" aria-hidden="true">⚡</span>
          <span className="defi-text">
            <b>Défi du jour</b>
            <small>3 questions éclair · +{REWARD.challenge.xp} XP</small>
          </span>
          <span aria-hidden="true">→</span>
        </button>
      )}

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

      <button className="parcours-cta" onClick={onOpenParcours}>
        <span className="parcours-cta-emoji" aria-hidden="true">🗺️</span>
        <span className="parcours-cta-text">
          <b>Voir tout mon parcours</b>
          <small>8 modules pas à pas, ou par étape de vie</small>
        </span>
        <span aria-hidden="true">→</span>
      </button>

      <div className="nav-cards nav-cards-3">
        <button className="nav-card" onClick={onOpenActions}>
          <span className="nav-card-emoji">🎯</span>
          <span className="nav-card-title">Plan d'action</span>
          <span className="nav-card-desc">
            {actionsPending > 0
              ? `${actionsPending} démarche${actionsPending > 1 ? 's' : ''} à faire`
              : actionsDone > 0
                ? `${actionsDone} faite${actionsDone > 1 ? 's' : ''} ✓`
                : 'Se débloque en apprenant'}
          </span>
        </button>
        <button className="nav-card" onClick={onOpenTools}>
          <span className="nav-card-emoji">🧰</span>
          <span className="nav-card-title">Simulateurs</span>
          <span className="nav-card-desc">Budget, intérêts, projet</span>
        </button>
        <button className="nav-card" onClick={onOpenGlossaire}>
          <span className="nav-card-emoji">📖</span>
          <span className="nav-card-title">Lexique</span>
          <span className="nav-card-desc">Le jargon, traduit</span>
        </button>
      </div>

      <div className="dash-footer">
        <button className="btn btn-ghost" onClick={onExport}>
          ⬇️ Exporter ma progression
        </button>
        <button className="btn btn-ghost" onClick={() => fileRef.current?.click()}>
          ⬆️ Importer une progression
        </button>
        <input
          ref={fileRef}
          type="file"
          accept="application/json"
          hidden
          onChange={(e) => {
            const file = e.target.files?.[0]
            if (file) onImport(file)
            e.target.value = ''
          }}
        />
        <button className="btn btn-ghost" onClick={onRestart}>
          Tout réinitialiser
        </button>
        <p className="privacy-note">
          🔒 Tout reste sur ton appareil : pas de compte, pas de pub, rien à vendre.
        </p>
      </div>
    </>
  )
}
