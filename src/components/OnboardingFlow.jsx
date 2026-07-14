import { useState } from 'react'
import { QUESTIONS } from '../data/questions.js'
import { computeProfile } from '../lib/scoring.js'
import ProgressMap from './ProgressMap.jsx'
import KapiMascot from './KapiMascot.jsx'
import { BRAND } from '../brand.js'

// Onboarding complet : accueil → 5 questions → écran résultat avec parcours.
// onFinished(profile, moduleId) : moduleId = module à ouvrir directement,
// ou null pour arriver sur le tableau de bord.
export default function OnboardingFlow({ onFinished }) {
  const [step, setStep] = useState(-1) // -1 = accueil, 0..4 = questions
  const [answers, setAnswers] = useState({})
  const [result, setResult] = useState(null)

  if (result) {
    return (
      <ResultScreen
        profile={result}
        onStart={() => onFinished(result, result.premier_module)}
        onExplore={() => onFinished(result, null)}
      />
    )
  }

  if (step === -1) {
    return <WelcomeScreen onStart={() => setStep(0)} />
  }

  const question = QUESTIONS[step]
  const selected = answers[question.id]

  const selectOption = (value) => {
    const nextAnswers = { ...answers, [question.id]: value }
    setAnswers(nextAnswers)
    // Micro-pause pour laisser voir la sélection avant de passer à la suite
    setTimeout(() => {
      if (step < QUESTIONS.length - 1) {
        setStep(step + 1)
      } else {
        setResult(computeProfile(nextAnswers))
      }
    }, 250)
  }

  return (
    <>
      <div className="progress-track">
        <div
          className="progress-fill"
          style={{ width: `${((step + 1) / QUESTIONS.length) * 100}%` }}
        />
      </div>
      <div className="step-count">
        Question {step + 1} sur {QUESTIONS.length}
      </div>

      <div className="question">
        <span className="emoji">{question.emoji}</span>
        <h2>{question.title}</h2>
        <p className="subtitle">{question.subtitle}</p>
        <div className="options">
          {question.options.map((option) => (
            <button
              key={option.value}
              className={`option ${selected === option.value ? 'selected' : ''}`}
              onClick={() => selectOption(option.value)}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      {step > 0 && (
        <div className="question-footer">
          <button className="btn btn-ghost" onClick={() => setStep(step - 1)}>
            ← Question précédente
          </button>
        </div>
      )}
    </>
  )
}

function WelcomeScreen({ onStart }) {
  return (
    <div className="welcome">
      <KapiMascot size={104} bob className="welcome-mascot" />
      <h1>{BRAND.name}</h1>
      <p className="welcome-tagline">{BRAND.tagline}</p>
      <p>
        Salut, moi c'est {BRAND.mascot} 👋 De « c'est quoi un découvert ? » à tes
        premiers placements — on avance ensemble, sans jargon. 5 questions pour
        construire ton parcours sur mesure.
      </p>
      <div className="pills">
        <span className="pill">💸 Budget</span>
        <span className="pill">🐷 Épargne</span>
        <span className="pill">💳 Crédit</span>
        <span className="pill">📈 Investir</span>
        <span className="pill">🛡️ Arnaques</span>
      </div>
      <button className="btn btn-primary" onClick={onStart}>
        C'est parti — 2 minutes
      </button>
    </div>
  )
}

function ResultScreen({ profile, onStart, onExplore }) {
  return (
    <>
      <div className="result-header">
        <div className="check">✓</div>
        <h2>Ton profil est prêt !</h2>
        <span className="profile-badge">{profile.label}</span>
        <p>{profile.niveau}</p>
      </div>

      <ProgressMap profile={profile} />

      <button className="btn btn-primary" onClick={onStart}>
        Démarrer au module {profile.premier_module} (conseillé) →
      </button>
      <div className="question-footer">
        <button className="btn btn-ghost" onClick={onExplore}>
          Explorer librement les 9 modules
        </button>
      </div>
    </>
  )
}
