import { useEffect, useRef, useState } from 'react'
import { getModule, getSousModule } from '../data/curriculum.js'
import { getCoachGreeting, getCoachReply, getCoachSuggestions } from '../lib/coach.js'

// Panneau de chat flottant, contextuel au module actif (spec <CoachDrawer>).
// L'historique vit dans App (persisté) ; la génération des réponses est
// déléguée à lib/coach.js, remplaçable par l'appel Claude.
// v2 : suggestions cliquables, lien « approfondir » vers un sous-module,
// fermeture clavier (Échap), rôles ARIA.
export default function CoachDrawer({ profile, moduleId, history, setHistory, onOpenSub }) {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const scrollRef = useRef(null)
  const inputRef = useRef(null)

  const module = moduleId ? getModule(moduleId) : null

  useEffect(() => {
    if (open && history.length === 0) {
      setHistory([{ role: 'coach', text: getCoachGreeting({ profile, moduleId }) }])
    }
    if (open) inputRef.current?.focus()
  }, [open]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' })
  }, [history, typing, open])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const ask = (text) => {
    if (!text || typing) return
    setInput('')
    setHistory((h) => [...h, { role: 'user', text }])
    setTyping(true)
    // Petit délai pour le rythme conversationnel — l'appel API le remplacera
    setTimeout(() => {
      const { text: reply, sub } = getCoachReply({ text, profile, moduleId })
      setHistory((h) => [...h, { role: 'coach', text: reply, sub }])
      setTyping(false)
    }, 600)
  }

  const send = () => ask(input.trim())

  // Suggestions affichées tant que la conversation démarre à peine.
  const showSuggestions = history.filter((m) => m.role === 'user').length === 0

  return (
    <>
      {!open && (
        <button className="coach-fab" onClick={() => setOpen(true)} aria-label="Ouvrir le coach">
          💬
        </button>
      )}

      {open && (
        <div className="coach-overlay" onClick={() => setOpen(false)}>
          <div
            className="coach-drawer"
            role="dialog"
            aria-label="Coach FinPath"
            onClick={(e) => e.stopPropagation()}
          >
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

            <div className="coach-messages" ref={scrollRef} aria-live="polite">
              {history.map((msg, i) => (
                <div key={i} className={`bubble ${msg.role}`}>
                  {msg.text}
                  {msg.sub && onOpenSub && <DeepenLink sub={msg.sub} onOpenSub={(id) => { setOpen(false); onOpenSub(id) }} />}
                </div>
              ))}
              {typing && <div className="bubble coach typing">…</div>}
            </div>

            {showSuggestions && !typing && (
              <div className="coach-suggestions">
                {getCoachSuggestions(moduleId).map((s) => (
                  <button key={s} className="coach-suggestion" onClick={() => ask(s)}>
                    {s}
                  </button>
                ))}
              </div>
            )}

            <div className="coach-input">
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && send()}
                placeholder="Ta question sur l'argent…"
                aria-label="Ta question au coach"
              />
              <button className="coach-send" onClick={send} disabled={!input.trim() || typing} aria-label="Envoyer">
                ➤
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

function DeepenLink({ sub, onOpenSub }) {
  const { sousModule } = getSousModule(sub)
  if (!sousModule) return null
  return (
    <button className="bubble-link" onClick={() => onOpenSub(sub)}>
      📚 Approfondir : {sub} {sousModule.titre} →
    </button>
  )
}
