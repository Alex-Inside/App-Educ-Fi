import { useState } from 'react'
import { getSousModule } from '../data/curriculum.js'
import { SUBMODULE_CONTENT } from '../data/content/index.js'
import { isModuleComplete } from '../lib/progression.js'
import { isFastTrackEligible, masteryOf } from '../lib/adaptive.js'
import QuizStep from './QuizStep.jsx'

// Un sous-module = les 4 étapes de la spec :
// Prise de connaissance → Cas concret → Synthèse / Vulgarisation → Quiz.
// v2 adaptatif :
// - fast-track : les profils qui maîtrisent peuvent valider en passant
//   directement le quiz (le contenu reste accessible, rien n'est verrouillé) ;
// - révision : rouvrir un sous-module complété propose de refaire le quiz ;
// - chaque passage de quiz remonte le résultat au moteur de maîtrise.
export default function SubModuleScreen({
  subId,
  profile,
  completedSubs,
  quizStats,
  onComplete,
  onBack,
}) {
  const { module, sousModule } = getSousModule(subId)
  const content = SUBMODULE_CONTENT[subId]
  const quiz = content.quiz
  const CONTENT_STEPS = 3
  const totalSteps = CONTENT_STEPS + quiz.length

  const alreadyDone = completedSubs.includes(subId)
  const fastTrack = !alreadyDone && isFastTrackEligible(profile, module.id, quizStats)
  const mastery = masteryOf(quizStats, subId)

  const [step, setStep] = useState(0)
  const [firstTryCount, setFirstTryCount] = useState(0)
  const [skippedToQuiz, setSkippedToQuiz] = useState(false)

  const done = step >= totalSteps
  const inQuiz = !done && step >= CONTENT_STEPS

  const finishQuestion = ({ firstTry }) => {
    if (firstTry) setFirstTryCount(firstTryCount + 1)
    setStep(step + 1)
  }

  if (done) {
    const finalFirstTry = firstTryCount
    const moduleDone = isModuleComplete(module.id, [...new Set([...completedSubs, subId])])
    const perfect = finalFirstTry === quiz.length
    return (
      <>
        <div className="result-header module-done">
          <div className="check">{moduleDone ? '🏆' : perfect ? '🌟' : '🎉'}</div>
          <h2>
            {alreadyDone
              ? 'Révision terminée !'
              : moduleDone
                ? 'Module complété !'
                : 'Sous-module complété !'}
          </h2>
          <span className="profile-badge">
            {sousModule.id} · {sousModule.titre}
          </span>
          <p className="quiz-score">
            Quiz : {finalFirstTry}/{quiz.length} du premier coup
            {perfect ? ' — sans faute 👏' : ''}
          </p>
          {moduleDone ? (
            <p>Tu as terminé tout le module {module.emoji} {module.titre}. Chapeau !</p>
          ) : perfect ? (
            <p>Ce sujet est solidement ancré.</p>
          ) : (
            <p>Le coach te reproposera une révision rapide dans quelques jours pour ancrer le sujet.</p>
          )}
        </div>
        <div className="question-footer">
          <button
            className="btn btn-primary"
            onClick={() => onComplete(subId, { firstTry: finalFirstTry, total: quiz.length })}
          >
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

      {step === 0 && !skippedToQuiz && (alreadyDone || fastTrack) && (
        <button
          className="fasttrack-banner"
          onClick={() => {
            setSkippedToQuiz(true)
            setStep(CONTENT_STEPS)
          }}
        >
          {alreadyDone
            ? `🔄 Mode révision — refaire directement le quiz${mastery != null ? ` (maîtrise actuelle : ${mastery} %)` : ''}`
            : '⚡ Tu connais déjà ? Valide ce sous-module en passant directement le quiz'}
        </button>
      )}

      {inQuiz ? (
        <QuizStep
          key={step}
          question={quiz[step - CONTENT_STEPS]}
          index={step - CONTENT_STEPS}
          total={quiz.length}
          isLast={step === totalSteps - 1}
          onDone={finishQuestion}
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
