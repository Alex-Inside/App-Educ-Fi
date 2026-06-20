import { getGlobalProgress, getNextSousModule } from '../lib/progression.js'
import ProgressMap from './ProgressMap.jsx'

// Tableau de bord : progression globale, carte des 9 modules, reprise rapide.
export default function Dashboard({ profile, completedSubs, onOpenModule, onOpenSub, onRestart }) {
  const { done, total } = getGlobalProgress(completedSubs)
  const next = getNextSousModule(profile, completedSubs)

  return (
    <>
      <div className="dash-header">
        <span className="dash-logo">🧭 FinPath</span>
        <span className="dash-profile">{profile.label}</span>
      </div>

      {next ? (
        <p className="dash-intro">
          {done === 0
            ? 'Ton parcours t’attend — tous les modules sont ouverts.'
            : `${done} sous-module${done > 1 ? 's' : ''} complété${done > 1 ? 's' : ''} sur ${total} — continue sur ta lancée !`}
        </p>
      ) : (
        <div className="result-header">
          <div className="check">🏆</div>
          <h2>Parcours terminé !</h2>
          <p>Les {total} sous-modules sont complétés. Tes finances te disent merci.</p>
        </div>
      )}

      <div className="module-progress module-progress-lg">
        <div className="mini-track">
          <div
            className={`mini-fill ${done === total ? 'complete' : ''}`}
            style={{ width: `${(done / total) * 100}%` }}
          />
        </div>
        <span className="mini-count">
          {done}/{total}
        </span>
      </div>

      <ProgressMap profile={profile} completedSubs={completedSubs} onSelect={onOpenModule} />

      {next && (
        <button className="btn btn-primary" onClick={() => onOpenSub(next.sousModule.id)}>
          {done === 0 ? 'Commencer' : 'Continuer'} : {next.sousModule.id}{' '}
          {next.sousModule.titre} →
        </button>
      )}
      <div className="question-footer">
        <button className="btn btn-ghost" onClick={onRestart}>
          Refaire le questionnaire
        </button>
      </div>
    </>
  )
}
