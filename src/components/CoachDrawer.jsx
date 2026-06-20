import { useEffect, useRef, useState } from 'react'
import { getModule } from '../data/curriculum.js'
import { getCoachGreeting, getCoachReply } from '../lib/coach.js'

// Panneau de chat flottant, contextuel au module actif (spec <CoachDrawer>).
// L'historique vit dans App (state de session) ; la génération des réponses
// est déléguée à lib/coach.js, remplaçable par l'appel Claude.
export default function CoachDrawer({ profile, moduleId, history, setHistory }) {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const scrollRef = useRef(null)

  const module = moduleId ? getModule(moduleId) : null

  useEffect(() => {
    if (open && history.length === 0) {
      setHistory([{ role: 'coach', text: getCoachGreeting({ profile, moduleId }) }])
    }
  }, [open]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' })
  }, [history, typing, open])

  const send = () => {
    const text = input.trim()
    if (!text || typing) return
    setInput('')
    setHistory((h) => [...h, { role: 'user', text }])
    setTyping(true)
    // Petit délai pour le rythme conversationnel — l'appel API le remplacera
    setTimeout(() => {
      const reply = getCoachReply({ text, profile, moduleId })
      setHistory((h) => [...h, { role: 'coach', text: reply }])
      setTyping(false)
    }, 800)
  }

  return (
    <>
      {!open && (
        <button className="coach-fab" onClick={() => setOpen(true)} aria-label="Ouvrir le coach">
          💬
        </button>
      )}

      {open && (
        <div className="coach-overlay" onClick={() => setOpen(false)}>
          <div className="coach-drawer" onClick={(e) => e.stopPropagation()}>
            <div className="coach-header">
              <div>
                <div className="coach-title">💬 Coach FinPath</div>
                <div className="coach-context">
                  {module ? `Contexte : module ${module.id} · ${module.titre}` : 'Coach libre'}
                </div>
              </div>
              <button className="coach-close" onClick={() => setOpen(false)} aria-label="Fermer">
                ✕
              </button>
            </div>

            <div className="coach-messages" ref={scrollRef}>
              {history.map((msg, i) => (
                <div key={i} className={`bubble ${msg.role}`}>
                  {msg.text}
                </div>
              ))}
              {typing && <div className="bubble coach typing">…</div>}
            </div>

            <div className="coach-input">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && send()}
                placeholder="Ta question sur l'argent…"
              />
              <button className="coach-send" onClick={send} disabled={!input.trim() || typing}>
                ➤
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
