// Les Moments de vie — la deuxième porte d'entrée dans le parcours.
// Les gens ne cherchent pas « le crédit » un mardi au hasard : ils cherchent
// au moment où la vie le leur demande. Chaque moment assemble un mini-parcours
// transverse à partir des 38 leçons existantes (rien n'est dupliqué : mêmes
// leçons, mêmes actions, même progression).

export const MOMENTS = [
  {
    id: 'premier-salaire',
    emoji: '💼',
    titre: 'Premier salaire',
    accroche: 'Ton premier virement mérite un plan — pas juste une soirée pour fêter ça.',
    pourquoi:
      'Dans l’ordre : comprendre ce qui tombe sur le compte, le répartir, automatiser, réclamer ce qui t’est dû, et poser le premier matelas.',
    subIds: ['1.1', '1.2', '1.4', '1.5', '4.1', '2.1'],
  },
  {
    id: 'appart',
    emoji: '🔑',
    titre: 'Je prends mon appart',
    accroche: 'Dépôt de garantie, assurance obligatoire, APL : tout ce qui se joue avant la remise des clés.',
    pourquoi:
      'Le budget d’abord (le loyer décide de tout), puis l’assurance exigée à la signature, les aides au logement, le financement du dépôt, et le découvert à éviter pendant la transition.',
    subIds: ['1.2', '4.2', '1.5', '2.4', '1.3'],
  },
  {
    id: 'voiture',
    emoji: '🚗',
    titre: 'Première voiture',
    accroche: 'Entre le crédit auto, la surprime jeune conducteur et l’entretien, le prix affiché n’est que le début.',
    pourquoi:
      'Épargner le maximum avant, comprendre le TAEG si crédit il y a, choisir le bon type de financement, et anticiper l’assurance qui peut doubler la facture.',
    subIds: ['2.4', '3.1', '3.2', '4.3'],
  },
  {
    id: 'etudiant',
    emoji: '🎓',
    titre: 'Étudiant / alternant',
    accroche: 'Petit budget ne veut pas dire pas de plan — surtout quand des aides t’attendent.',
    pourquoi:
      'Les aides non réclamées d’abord (c’est de l’argent immédiat), un budget qui tient avec peu, le découvert sous contrôle, le bon livret, et l’armure anti-finfluenceurs.',
    subIds: ['1.5', '1.2', '1.3', '2.2', '8.2'],
  },
  {
    id: 'freelance',
    emoji: '🚀',
    titre: 'Je me lance en freelance',
    accroche: 'Revenus irréguliers, protection à construire soi-même : l’indépendance se prépare.',
    pourquoi:
      'Comprendre ce qu’il reste vraiment (cotisations), un matelas plus épais que les salariés, piloter serré, la mutuelle à choisir seul, et la retraite qui ne se remplit plus toute seule.',
    subIds: ['1.1', '2.1', '1.4', '4.1', '7.1'],
  },
  {
    id: 'a-deux',
    emoji: '🏡',
    titre: 'On s’installe à deux',
    accroche: 'Compte commun ou pas, qui paie quoi, et ce projet d’achat qui pointe : l’argent à deux, ça se parle.',
    pourquoi:
      'Un budget commun clair, l’assurance habitation à deux noms, les projets communs chiffrés, et — si l’achat approche — la capacité d’emprunt.',
    subIds: ['1.2', '4.2', '2.4', '7.2'],
  },
  {
    id: 'epargne-dort',
    emoji: '📈',
    titre: 'J’ai de l’épargne qui dort',
    accroche: 'Le Livret A est plein et l’inflation grignote : il est temps de comprendre la suite.',
    pourquoi:
      'Pourquoi l’argent qui dort perd de la valeur, la boule de neige, la diversification, les bonnes enveloppes fiscales, la méthode — et la stratégie d’ensemble.',
    subIds: ['2.3', '5.1', '5.2', '5.3', '5.4', '7.4'],
  },
  {
    id: 'credit-propose',
    emoji: '💳',
    titre: 'On me propose un crédit',
    accroche: 'Paiement en 4 fois, crédit conso, offre « exceptionnelle » : les réflexes avant de signer.',
    pourquoi:
      'Le TAEG pour comparer, les pièges du renouvelable et du fractionné, les types de crédit pour nommer ce qu’on te vend, et ton cerveau face au vendeur.',
    subIds: ['3.1', '3.3', '3.2', '1.6'],
  },
  {
    id: 'arnaque',
    emoji: '🚨',
    titre: 'Je crois que c’est une arnaque',
    accroche: 'Un placement trop beau, un conseiller pressant, un SMS bizarre ? Vérifie avant, pas après.',
    pourquoi:
      'Les 5 signaux d’alerte tout de suite, le crible pour les promesses en ligne, la sécurisation de tes comptes, et quoi faire si c’est déjà trop tard.',
    subIds: ['8.1', '8.2', '8.3', '8.4'],
  },
]

export function getMoment(momentId) {
  return MOMENTS.find((m) => m.id === momentId)
}

export function getMomentProgress(moment, completedSubs) {
  const done = moment.subIds.filter((s) => completedSubs.includes(s)).length
  return { done, total: moment.subIds.length }
}
