import { useState } from 'react'
import { getSousModule } from '../data/curriculum.js'
import { SUBMODULE_CONTENT } from '../data/content/index.js'
import { isModuleComplete } from '../lib/progression.js'
import QuizStep from './QuizStep.jsx'

// Un sous-module = les 4 étapes de la spec :
// Prise de connaissance → Cas concret → Synthèse / Vulgarisation → Quiz.
export default function SubModuleScreen({ subId, completedSubs, onComplete, onBack }) {
  const { module, sousModule } = getSousModule(subId)
  const content = SUBMODULE_CONTENT[subId]
  const quiz = content.quiz
  const CONTENT_STEPS = 3
  const totalSteps = CONTENT_STEPS + quiz.length

  const [step, setStep] = useState(0)
  const done = step >= totalSteps
  const inQuiz = !done && step >= CONTENT_STEPS

  if (done) {
    const moduleDone = isModuleComplete(
      module.id,
      [...new Set([...completedSubs, subId])]
    )
    return (
      <>
        <div className="result-header module-done">
          <div className="check">{moduleDone ? '🏆' : '🎉'}</div>
          <h2>{moduleDone ? 'Module complété !' : 'Sous-module complété !'}</h2>
          <span className="profile-badge">
            {sousModule.id} · {sousModule.titre}
          </span>
          {moduleDone ? (
            <p>
              Tu as terminé tout le module {module.emoji} {module.titre}. Chapeau !
            </p>
          ) : (
            <p>Encore un pas de plus vers la maîtrise de « {module.titre} ».</p>
          )}
        </div>
        <div className="question-footer">
          <button className="btn btn-primary" onClick={() => onComplete(subId)}>
            Continuer →
          </button>
        </div>
      </>
    )
  }

  const stepDefs = [
    {
      tag: '📖 Prise de connaissance',
      body: content.decouverte.map((p, i) => (
        <p key={i} className="content-text">
          {p}
        </p>
      )),
      cta: 'Voir un cas concret →',
    },
    {
      tag: '🎬 Cas concret',
      body: content.casConcret.map((p, i) => (
        <p key={i} className="content-text">
          {p}
        </p>
      )),
      cta: 'La synthèse →',
    },
    {
      tag: '💡 Synthèse — à retenir',
      body: (
        <ul className="content-points">
          {content.synthese.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      ),
      cta: 'Vérifier que j’ai compris →',
    },
  ]

  return (
    <>
      <div className="module-header">
        <button className="back-link" onClick={onBack}>
          ← Module {module.id} · {module.titre}
        </button>
        <span className="module-header-title">
          {sousModule.id} {sousModule.titre}
        </span>
      </div>

      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${(step / totalSteps) * 100}%` }} />
      </div>

      {inQuiz ? (
        <QuizStep
          key={step}
          question={quiz[step - CONTENT_STEPS]}
          index={step - CONTENT_STEPS}
          total={quiz.length}
          isLast={step === totalSteps - 1}
          onCorrect={() => setStep(step + 1)}
        />
      ) : (
        <>
          <div className="content-card">
            <span className="content-tag">{stepDefs[step].tag}</span>
            {stepDefs[step].body}
          </div>
          <div className="question-footer">
            <button className="btn btn-primary" onClick={() => setStep(step + 1)}>
              {stepDefs[step].cta}
            </button>
          </div>
        </>
      )}
    </>
  )
}
