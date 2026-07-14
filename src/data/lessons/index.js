// Registre des leçons au format long (« Kapi » : 5 pages + quiz 5 questions).
// Progressif : seuls les sous-modules présents ici passent au format long ;
// les autres gardent le format court (src/data/content). Adapte les questions
// {q,opts,good,explain} au format attendu par QuizStep.

import { MODULE1_LESSONS } from './module1.js'

// 1.5 (aides) retiré du parcours Pas à pas — on ne l'expose plus comme leçon.
const { '1.5': _removed, ...MODULE1 } = MODULE1_LESSONS
const RAW = { ...MODULE1 }

function adaptQuiz(questions) {
  return questions.map((q) => ({
    question: q.q,
    options: q.opts,
    correct: q.good,
    explication: q.explain,
    explicationAlt: q.explain,
  }))
}

// Renvoie la leçon longue normalisée pour subId, ou null si non disponible.
export function getRichLesson(subId) {
  const l = RAW[subId]
  if (!l) return null
  return {
    title: l.title,
    goal: l.goal,
    badge: l.badge,
    pages: l.pages,
    quiz: adaptQuiz(l.questions),
  }
}

export function hasRichLesson(subId) {
  return !!RAW[subId]
}
