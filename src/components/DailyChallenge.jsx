import { useState } from 'react'
import QuizStep from './QuizStep.jsx'
import KapiMascot from './KapiMascot.jsx'
import { REWARD } from '../lib/gamification.js'

// Défi du jour — 3 questions éclair tirées du corpus, +20 XP une fois par jour.
export default function DailyChallenge({ questions, alreadyDone, onFinish, onBack }) {
  const [step, setStep] = useState(0)
  const [correct, setCorrect] = useState(0)
  const [claimed, setClaimed] = useState(false)

  const header = (
    <div className="module-header">
      <button className="back-link" onClick={onBack}>← Accueil</button>
      <span className="module-header-title">⚡ Défi du jour</span>
    </div>
  )

  if (alreadyDone) {
    return (
      <>
        {header}
        <div className="result-header module-done">
          <KapiMascot size={72} className="center-mascot" />
          <h2>Défi déjà relevé !</h2>
          <p>Reviens demain pour un nouveau défi et +{REWARD.challenge.xp} XP.</p>
        </div>
        <div className="question-footer">
          <button className="btn btn-primary" onClick={onBack}>Retour</button>
        </div>
      </>
    )
  }

  const done = step >= questions.length

  if (done) {
    return (
      <>
        {header}
        <div className="result-header module-done">
          <div className="check">{correct === questions.length ? '🌟' : '⚡'}</div>
          <h2>Défi terminé !</h2>
          <p className="quiz-score">{correct}/{questions.length} bonnes réponses</p>
          <p>+{REWARD.challenge.xp} XP ajoutés à ta semaine.</p>
        </div>
        <div className="question-footer">
          <button
            className="btn btn-primary"
            onClick={() => {
              if (!claimed) { onFinish(); setClaimed(true) }
              onBack()
            }}
          >
            Récupérer mes +{REWARD.challenge.xp} XP →
          </button>
        </div>
      </>
    )
  }

  const q = questions[step]
  return (
    <>
      {header}
      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${(step / questions.length) * 100}%` }} />
      </div>
      <QuizStep
        key={step}
        question={{ ...q, explicationAlt: q.explicationAlt || q.explication }}
        index={step}
        total={questions.length}
        isLast={step === questions.length - 1}
        onDone={({ firstTry }) => {
          if (firstTry) setCorrect((c) => c + 1)
          setStep((s) => s + 1)
        }}
      />
    </>
  )
}
