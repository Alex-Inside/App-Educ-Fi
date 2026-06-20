// Les 5 questions de l'onboarding adaptatif.
// Chaque option porte un score ; le total détermine le profil (voir lib/scoring.js).
// Q5 ne note pas le niveau : elle capte l'objectif prioritaire pour orienter le premier module.

export const QUESTIONS = [
  {
    id: 'situation',
    emoji: '🎓',
    title: 'Quelle est ta situation actuelle ?',
    subtitle: 'Pour adapter les exemples à ta vie quotidienne',
    options: [
      { value: 'etudiant', label: 'Étudiant·e', score: 0 },
      { value: 'alternance', label: 'En alternance', score: 1 },
      { value: 'cdi', label: 'En CDI / CDD', score: 2 },
      { value: 'freelance', label: 'Freelance / indépendant·e', score: 2 },
    ],
  },
  {
    id: 'epargne',
    emoji: '🐷',
    title: "Côté épargne, tu te situes où ?",
    subtitle: 'Sois honnête, il n’y a pas de mauvaise réponse',
    options: [
      { value: 'rien', label: "Je n'y connais rien", score: 0 },
      { value: 'livret_a', label: "J'ai un Livret A, mais c'est tout", score: 1 },
      { value: 'compare', label: 'Je compare les placements (livrets, PEL…)', score: 2 },
      { value: 'etf_pea', label: 'Je connais ETF, PEA et compagnie', score: 3 },
    ],
  },
  {
    id: 'taux',
    emoji: '📈',
    title: "Un taux d'intérêt, ça te parle ?",
    subtitle: 'Par exemple : « Livret A à 3 % par an »',
    options: [
      { value: 'aucune_idee', label: 'Aucune idée de ce que ça veut dire', score: 0 },
      { value: 'vague', label: "J'ai une vague idée", score: 1 },
      { value: 'explique', label: 'Je sais l’expliquer à un ami', score: 2 },
      { value: 'composes', label: 'Je sais calculer des intérêts composés', score: 3 },
    ],
  },
  {
    id: 'decouvert',
    emoji: '🏦',
    title: 'Et le découvert bancaire ?',
    subtitle: 'Ta relation avec le rouge en fin de mois',
    options: [
      { value: 'souvent', label: 'Je suis souvent à découvert', score: 0 },
      { value: 'parfois', label: "Ça m'arrive certains mois", score: 1 },
      { value: 'rare', label: 'Rarement, je fais attention', score: 2 },
      { value: 'jamais', label: 'Jamais, je gère mon budget', score: 3 },
    ],
  },
  {
    id: 'objectif',
    emoji: '🎯',
    title: 'Ton objectif prioritaire ?',
    subtitle: 'On commencera par ce qui compte pour toi',
    scored: false,
    options: [
      { value: 'stop_decouvert', label: 'Arrêter le découvert', score: 0, moduleCible: 1 },
      { value: 'epargner', label: 'Commencer à épargner', score: 0, moduleCible: 2 },
      { value: 'investir', label: 'Investir mes premiers euros', score: 0, moduleCible: 5 },
      { value: 'projet', label: 'Financer un projet (permis, logement…)', score: 0, moduleCible: 7 },
    ],
  },
]
