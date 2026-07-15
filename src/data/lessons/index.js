// Registre des leçons au format long (« Kapi » : 5 pages + quiz 5 questions).
// Progressif : seuls les sous-modules présents ici passent au format long ;
// les autres gardent le format court (src/data/content). Adapte les questions
// {q,opts,good,explain} au format attendu par QuizStep.

import { MODULE1_LESSONS } from './module1.js'
import { MODULE2_LESSONS } from './module2.js'
import { MODULE3_LESSONS } from './module3.js'
import { MODULE5_LESSONS } from './module5.js'
import { MODULE7_LESSONS } from './module7.js'
import { MODULE8_LESSONS } from './module8.js'
import { MODULE9_LESSONS } from './module9.js'

// Modules au format long. On étend module par module.
// (Le module « S'assurer » — ex-module 4 — a été retiré du parcours.)
const RAW = {
  ...MODULE1_LESSONS,
  ...MODULE2_LESSONS,
  ...MODULE3_LESSONS,
  ...MODULE5_LESSONS,
  ...MODULE7_LESSONS,
  ...MODULE8_LESSONS,
  ...MODULE9_LESSONS,
}

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
