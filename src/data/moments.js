// Étapes de vie — les 6 parcours transverses de la maquette Kapi.
// Chaque étape est une séquence de leçons « piochées » dans les modules, avec
// leur provenance. `subId` relie l'étape à une leçon existante du curriculum ;
// `subId: null` = contenu dédié encore à rédiger (affiché « en préparation »).
// Rien n'est dupliqué : ouvrir une leçon depuis une étape compte partout.

export const MOMENTS = [
  {
    id: 'paie',
    emoji: '💶',
    titre: 'Gérer ma première paie',
    sub: '3 leçons · 20 min',
    desc: 'Tu viens de recevoir ta première fiche de paie ? Voici l’essentiel pour la comprendre et bien démarrer.',
    steps: [
      { t: 'Décoder ta fiche de paie', from: 'Module 1 · Budget', subId: '1.1' },
      { t: 'La règle du 50/30/20', from: 'Module 1 · Budget', subId: '1.2' },
      { t: 'Ouvrir ton épargne de précaution', from: 'Module 2 · Épargner', subId: '2.1' },
    ],
  },
  {
    id: 'immo',
    emoji: '🏡',
    titre: 'Acheter mon premier logement',
    sub: '9 étapes · de A à Z',
    desc: 'Le parcours complet, de la recherche du bien jusqu’à la signature chez le notaire : frais, intermédiaires, impératifs — rien n’est laissé de côté.',
    steps: [
      { t: 'Constituer ton apport', from: 'Module 2 · Épargner', subId: '2.3' },
      { t: 'Combien peux-tu emprunter ? Le taux d’endettement', from: 'Module 7 · Se projeter', subId: '7.2' },
      { t: 'Trouver le bien : visites, agences, points de vigilance', from: 'Parcours immobilier', subId: null },
      { t: 'L’offre d’achat et le compromis de vente', from: 'Parcours immobilier', subId: null },
      { t: 'Comprendre le TAEG et comparer les prêts', from: 'Module 3 · Crédit', subId: '3.1' },
      { t: 'L’assurance emprunteur (et comment la négocier)', from: 'Module 3 · Crédit', subId: '3.4' },
      { t: 'Courtier, notaire, agent : qui fait quoi, qui paie quoi', from: 'Parcours immobilier', subId: null },
      { t: 'Frais de notaire, garantie, frais cachés', from: 'Parcours immobilier', subId: null },
      { t: 'La signature chez le notaire, étape par étape', from: 'Parcours immobilier', subId: null },
    ],
  },
  {
    id: 'invest',
    emoji: '📈',
    titre: 'Réaliser mes premiers investissements',
    sub: '6 leçons · 45 min',
    desc: 'D’abord le matelas de sécurité, ensuite l’investissement — sans te faire piéger.',
    steps: [
      { t: 'Ton épargne de précaution : le prérequis', from: 'Module 2 · Épargner', subId: '2.1' },
      { t: 'L’inflation, ennemie de ton livret', from: 'Module 5 · Investir', subId: '5.1' },
      { t: 'Actions, indices et ETF', from: 'Module 5 · Investir', subId: '5.2' },
      { t: 'Ouvrir un PEA (et sa fiscalité)', from: 'Module 5 · Investir', subId: '5.3' },
      { t: 'La méthode DCA', from: 'Module 5 · Investir', subId: '5.4' },
      { t: 'Repérer les arnaques à l’investissement', from: 'Module 8 · Arnaques', subId: '8.1' },
    ],
  },
  {
    id: 'enfant',
    emoji: '👶',
    titre: 'Ma famille s’agrandit',
    sub: '4 leçons · 30 min',
    desc: 'Un enfant arrive : budget, aides, épargne pour lui et protection de la famille.',
    steps: [
      { t: 'Refaire ton budget familial', from: 'Module 1 · Budget', subId: '1.2' },
      { t: 'Les aides famille (CAF, PAJE)', from: 'Parcours famille', subId: null },
      { t: 'Épargner pour ton enfant', from: 'Module 2 · Épargner', subId: '2.3' },
      { t: 'Assurance-vie & clause bénéficiaire', from: 'Module 7 · Se projeter', subId: '7.3' },
    ],
  },
  {
    id: 'retraite',
    emoji: '🌴',
    titre: 'Préparer ma retraite',
    sub: '5 leçons · 40 min',
    desc: 'Plus tu commences tôt, moins ça coûte. PER, assurance-vie, intérêts composés : ton plan.',
    steps: [
      { t: 'Comprendre ta future pension', from: 'Module 7 · Se projeter', subId: '7.1' },
      { t: 'PEE & PERCOL : l’argent gratuit', from: 'Parcours retraite', subId: null },
      { t: 'L’assurance-vie long terme', from: 'Module 7 · Se projeter', subId: '7.3' },
      { t: 'Les intérêts composés', from: 'Module 5 · Investir', subId: '5.5' },
      { t: 'Ta stratégie par décennie', from: 'Module 7 · Se projeter', subId: '7.4' },
    ],
  },
  {
    id: 'succession',
    emoji: '🕊️',
    titre: 'Anticiper ma succession',
    sub: '5 leçons · 35 min',
    desc: 'Transmettre sans y laisser la moitié : donations, assurance-vie, testament et droits de succession expliqués simplement.',
    steps: [
      { t: 'Qui hérite de quoi ? Les règles de base', from: 'Parcours succession', subId: null },
      { t: 'Les droits de succession et les abattements', from: 'Parcours succession', subId: null },
      { t: 'Donner de ton vivant : donations & présents d’usage', from: 'Parcours succession', subId: null },
      { t: 'L’assurance-vie, l’outil roi de la transmission', from: 'Module 7 · Se projeter', subId: '7.3' },
      { t: 'Testament & clause bénéficiaire : mettre tout au clair', from: 'Parcours succession', subId: null },
    ],
  },
]

export function getMoment(momentId) {
  return MOMENTS.find((m) => m.id === momentId)
}

// Progression = leçons reliées et complétées / leçons reliées disponibles.
export function getMomentProgress(moment, completedSubs) {
  const linked = moment.steps.filter((s) => s.subId)
  const done = linked.filter((s) => completedSubs.includes(s.subId)).length
  return { done, total: linked.length }
}
