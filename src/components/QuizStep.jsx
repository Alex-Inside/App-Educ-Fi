import { useState } from 'react'

// QCM avec feedback immédiat. En cas d'erreur répétée sur la même question,
// on bascule sur l'explication alternative (reformulation différente).
// v2 : chaque question remonte son résultat (bonne réponse du premier coup ?)
// au moteur adaptatif via onDone — c'est lui qui nourrit la maîtrise et les
// révisions espacées.
export default function QuizStep({ question, index, total, isLast, onDone }) {
  const [selected, setSelected] = useState(null)
  const [attempts, setAttempts] = useState(0)

  const answered = selected !== null
  const isCorrect = answered && selected === question.correct

  const choose = (i) => {
    if (answered) return
    setSelected(i)
    if (i !== question.correct) setAttempts(attempts + 1)
  }

  const retry = () => setSelected(null)

  const next = () => {
    const firstTry = attempts === 0 && isCorrect
    setSelected(null)
    setAttempts(0)
    onDone({ firstTry })
  }

  return (
    <>
      <div className="quiz-count">
        Quiz — question {index + 1} sur {total}
      </div>
      <div className="question">
        <h2>{question.question}</h2>
        <div className="options quiz-options">
          {question.options.map((option, i) => {
            let cls = 'option'
            if (answered && i === selected) cls += isCorrect ? ' correct' : ' wrong'
            if (answered && !isCorrect && i === question.correct && attempts >= 2)
              cls += ' reveal'
            return (
              <button key={i} className={cls} onClick={() => choose(i)} disabled={answered}>
                {option}
              </button>
            )
          })}
        </div>

        {answered && (
          <div className={`feedback ${isCorrect ? 'good' : 'bad'}`} role="status">
            <strong>{isCorrect ? '✓ Bien vu !' : '✗ Pas tout à fait…'}</strong>
            <p>
              {isCorrect || attempts < 2 ? question.explication : question.explicationAlt}
            </p>
            {!isCorrect && attempts >= 2 && (
              <p className="feedback-hint">💡 Autre façon de le voir 👆 — la bonne réponse est entourée.</p>
            )}
          </div>
        )}
      </div>

      {answered && (
        <div className="question-footer">
          {isCorrect ? (
            <button className="btn btn-primary" onClick={next}>
              {isLast ? 'Terminer ✓' : 'Question suivante →'}
            </button>
          ) : attempts >= 2 ? (
            <button className="btn btn-primary" onClick={next}>
              {isLast ? 'Terminer' : "J'ai compris, on continue →"}
            </button>
          ) : (
            <button className="btn btn-primary" onClick={retry}>
              Réessayer
            </button>
          )}
        </div>
      )}
    </>
  )
}
