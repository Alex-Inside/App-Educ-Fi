// Gamification Kapi — XP & niveaux, pièces, défi du jour, coffre hebdo, ligue.
// Tout est local et honnête : la « ligue » est une émulation motivante (pas de
// vrais autres joueurs, puisque l'app est sans compte et hors ligne).
// Aucune récompense en argent réel — uniquement des pièces symboliques.

import { SUBMODULE_CONTENT } from '../data/content/index.js'

export const XP_PER_LEVEL = 500

// Récompenses (alignées sur le handoff)
export const REWARD = {
  lesson: { xp: 50, coins: 30 }, // première complétion d'une leçon
  revision: { xp: 10, coins: 0 }, // repasser une leçon déjà faite
  perfectBonus: { xp: 20, coins: 10 }, // quiz sans faute
  challenge: { xp: 20, coins: 0 }, // défi du jour
}

const TITLES = [
  'Curieux·se des sous',
  'Apprenti·e du budget',
  'Épargnant·e en herbe',
  'Gestionnaire avisé·e',
  'Stratège du patrimoine',
  'Tête bien faite',
  'Maître des finances',
]

export function levelInfo(xp = 0) {
  const level = Math.floor(xp / XP_PER_LEVEL) + 1
  const into = xp % XP_PER_LEVEL
  return {
    level,
    into,
    toNext: XP_PER_LEVEL - into,
    pct: Math.round((into / XP_PER_LEVEL) * 100),
    title: TITLES[Math.min(level - 1, TITLES.length - 1)],
  }
}

// Récompense d'une leçon terminée. isRevision = leçon déjà complétée avant.
export function lessonReward({ firstTry = 0, total = 0, isRevision = false }) {
  const base = isRevision ? REWARD.revision : REWARD.lesson
  const perfect = total > 0 && firstTry === total
  return {
    xp: base.xp + (perfect ? REWARD.perfectBonus.xp : 0),
    coins: base.coins + (perfect ? REWARD.perfectBonus.coins : 0),
    perfect,
  }
}

// ---------- Clés de temps (jour / semaine ISO) ----------

export function dayKey(now = Date.now()) {
  const d = new Date(now)
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

export function weekKey(now = Date.now()) {
  const d = new Date(now)
  const t = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()))
  const day = t.getUTCDay() || 7
  t.setUTCDate(t.getUTCDate() + 4 - day)
  const yearStart = new Date(Date.UTC(t.getUTCFullYear(), 0, 1))
  const weekNo = Math.ceil(((t - yearStart) / 86400000 + 1) / 7)
  return `${t.getUTCFullYear()}-S${String(weekNo).padStart(2, '0')}`
}

// PRNG déterministe (mulberry32) à partir d'une graine entière.
function seeded(seedStr) {
  let h = 1779033703 ^ seedStr.length
  for (let i = 0; i < seedStr.length; i++) {
    h = Math.imul(h ^ seedStr.charCodeAt(i), 3432918353)
    h = (h << 13) | (h >>> 19)
  }
  let a = h >>> 0
  return () => {
    a |= 0
    a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

// ---------- Défi du jour : 3 questions tirées du corpus, stables sur la journée ----------

let POOL = null
function questionPool() {
  if (POOL) return POOL
  POOL = []
  for (const [subId, content] of Object.entries(SUBMODULE_CONTENT)) {
    ;(content.quiz ?? []).forEach((q, i) => POOL.push({ ...q, subId, key: `${subId}#${i}` }))
  }
  return POOL
}

export function getDailyChallenge(now = Date.now()) {
  const pool = questionPool()
  const rnd = seeded('defi-' + dayKey(now))
  const picked = []
  const used = new Set()
  while (picked.length < 3 && used.size < pool.length) {
    const i = Math.floor(rnd() * pool.length)
    if (used.has(i)) continue
    used.add(i)
    picked.push(pool[i])
  }
  return picked
}

// ---------- Coffre hebdo ----------
// Disponible une fois par semaine dès qu'on a gagné de l'XP cette semaine.
export function chestState({ weekXP = 0, lastChestWeek = null }, now = Date.now()) {
  const wk = weekKey(now)
  const available = weekXP > 0 && lastChestWeek !== wk
  const rnd = seeded('chest-' + wk)
  const coins = 40 + Math.floor(rnd() * 5) * 10 // 40..80, stable sur la semaine
  return { available, coins, week: wk }
}

// ---------- Boutique (dépense de pièces — jamais d'argent réel) ----------

export const SHOP = [
  { id: 'xpboost', emoji: '⚡', name: 'Double XP · 24 h', desc: 'Tous tes gains d’XP comptent double pendant 24 heures.', price: 120, kind: 'boost' },
  { id: 'joker', emoji: '🃏', name: 'Joker de quiz', desc: 'Élimine une mauvaise réponse pendant un quiz.', price: 80, kind: 'stack', field: 'jokers' },
  { id: 'freeze', emoji: '🧊', name: 'Gel de série', desc: 'Protège ta série si tu sautes un jour.', price: 100, kind: 'stack', field: 'freezes' },
  { id: 'ocean', emoji: '🌊', name: 'Thème Océan', desc: 'Habille l’app en bleu profond.', price: 200, kind: 'theme', accent: 'ocean' },
  { id: 'corail', emoji: '🪸', name: 'Thème Corail', desc: 'Une ambiance corail chaleureuse.', price: 200, kind: 'theme', accent: 'corail' },
  { id: 'violet', emoji: '🔮', name: 'Thème Améthyste', desc: 'Un violet doux et élégant.', price: 200, kind: 'theme', accent: 'violet' },
]

export function isXpBoostActive(gam, now = Date.now()) {
  return !!gam.xpBoostUntil && now < gam.xpBoostUntil
}

// Gel de série : comble un trou d'UN jour (hier manquant, avant-hier présent,
// aujourd'hui pas encore actif) si un gel est disponible. Retourne le jour à
// combler, ou null.
export function pendingFreeze(activeDays, freezes, now = Date.now()) {
  if (!freezes || freezes <= 0) return null
  const has = new Set(activeDays)
  const today = dayKey(now)
  const y = dayKey(now - 86400000)
  const dby = dayKey(now - 2 * 86400000)
  if (!has.has(today) && !has.has(y) && has.has(dby)) return y
  return null
}

// ---------- Ligue (émulation locale, motivationnelle) ----------
const PEERS = ['Naïm', 'Chloé', 'Yanis', 'Léa', 'Sacha', 'Inès', 'Tom', 'Maya', 'Hugo']

export function leagueBoard({ weekXP = 0 }, now = Date.now()) {
  const wk = weekKey(now)
  const rnd = seeded('ligue-' + wk)
  const rows = PEERS.map((name) => ({ name, xp: Math.floor(rnd() * 320) + 20, me: false }))
  rows.push({ name: 'Toi', xp: weekXP, me: true })
  rows.sort((a, b) => b.xp - a.xp)
  const rank = rows.findIndex((r) => r.me) + 1
  // Promotion si dans le top 3, relégation si dernier — purement indicatif.
  const tier = 'Argent'
  return { rows, rank, tier, total: rows.length }
}
