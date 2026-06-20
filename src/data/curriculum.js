// Le programme FinPath : 9 modules, 38 sous-modules, tous accessibles.
// Le profil détecté à l'onboarding ne verrouille rien : il recommande un point
// de départ et adapte le ton du coach.
// Chaque sous-module suit 4 étapes : Prise de connaissance → Cas concret →
// Synthèse / Vulgarisation → Quiz de compréhension.

export const MODULES = [
  {
    id: 1,
    emoji: '💸',
    titre: 'Gérer son budget',
    niveau: 'Fondamental',
    description: 'Fiche de paie, 50/30/20, découvert, aides, achats impulsifs',
    sousModules: [
      { id: '1.1', titre: 'Tes revenus : lire sa fiche de paie', resume: 'Net, brut, cotisations — où part la différence' },
      { id: '1.2', titre: 'La règle 50/30/20', resume: 'Construire son budget en 3 enveloppes' },
      { id: '1.3', titre: 'Le découvert et les frais bancaires', resume: 'Agios, commissions — comprendre et en sortir' },
      { id: '1.4', titre: 'Piloter au quotidien', resume: 'Se payer en premier, comptes séparés, applis' },
      { id: '1.5', titre: 'Les aides que tu ne réclames pas', resume: 'APL, bourses, prime d’activité, aides locales' },
      { id: '1.6', titre: 'Ton cerveau et l’argent', resume: 'Achats impulsifs, paiement fractionné, pression sociale' },
    ],
  },
  {
    id: 2,
    emoji: '🐷',
    titre: 'Épargner',
    niveau: 'Essentiel',
    description: 'Précaution, livrets, intérêts composés, projets',
    sousModules: [
      { id: '2.1', titre: 'L’épargne de précaution', resume: 'Pourquoi, combien, où la mettre' },
      { id: '2.2', titre: 'Les livrets réglementés', resume: 'Livret A, LDDS, LEP : plafonds, taux, zéro impôt' },
      { id: '2.3', titre: 'Les intérêts composés', resume: 'L’effet boule de neige, pourquoi la durée bat le taux' },
      { id: '2.4', titre: 'Épargner pour un projet', resume: 'Objectif daté, épargne programmée, le cas PEL' },
    ],
  },
  {
    id: 3,
    emoji: '💳',
    titre: 'Comprendre le crédit',
    niveau: 'Pratique',
    description: 'TAEG, types de crédit, pièges, fichage, assurance',
    sousModules: [
      { id: '3.1', titre: 'Les bases du crédit', resume: 'Capital, intérêts, mensualité — et le TAEG' },
      { id: '3.2', titre: 'Les types de crédit', resume: 'Conso, auto, étudiant, immo, paiement fractionné' },
      { id: '3.3', titre: 'Les pièges et le fichage', resume: 'Renouvelable, surendettement, FICP / FCC' },
      { id: '3.4', titre: 'L’assurance emprunteur', resume: 'Ce qu’elle coûte, la loi Lemoine, la délégation' },
    ],
  },
  {
    id: 4,
    emoji: '🧯',
    titre: 'S’assurer au quotidien',
    niveau: 'Pratique',
    description: 'Mutuelle, habitation, responsabilité civile, auto',
    sousModules: [
      { id: '4.1', titre: 'La mutuelle santé', resume: 'Fin du rattachement parental, choisir sa complémentaire' },
      { id: '4.2', titre: 'Habitation et responsabilité civile', resume: 'Obligatoire en location, la coloc, ce que ça couvre' },
      { id: '4.3', titre: 'L’assurance auto jeune conducteur', resume: 'Tiers ou tous risques, surprime, bonus-malus' },
      { id: '4.4', titre: 'Choisir, comparer, résilier', resume: 'Doublons, franchises, exclusions, loi Hamon' },
    ],
  },
  {
    id: 5,
    emoji: '📊',
    titre: 'Investir : premiers pas',
    niveau: 'Intermédiaire',
    description: 'Inflation, actions, ETF, PEA, méthode DCA',
    sousModules: [
      { id: '5.1', titre: 'Pourquoi investir', resume: 'Inflation, couple risque / rendement' },
      { id: '5.2', titre: 'Actions, indices et ETF', resume: 'La diversification, les ETF comme panier tout-en-un' },
      { id: '5.3', titre: 'PEA, CTO et fiscalité', resume: 'Les enveloppes, les 5 ans du PEA, la flat tax' },
      { id: '5.4', titre: 'La méthode qui marche', resume: 'DCA, long terme, les erreurs classiques de débutant' },
    ],
  },
  {
    id: 6,
    emoji: '🧺',
    titre: 'Diversifier ses placements',
    niveau: 'Intermédiaire',
    description: 'Obligations, SCPI, or, cryptomonnaies',
    sousModules: [
      { id: '6.1', titre: 'Les obligations', resume: 'Prêter plutôt que posséder : coupons, fonds euros' },
      { id: '6.2', titre: 'Les SCPI', resume: 'L’immobilier sans acheter : la pierre-papier' },
      { id: '6.3', titre: 'L’or et les valeurs refuges', resume: 'Protéger plutôt que faire fructifier' },
      { id: '6.4', titre: 'Les cryptomonnaies', resume: 'Comprendre avant de toucher : volatilité, sécurité' },
    ],
  },
  {
    id: 7,
    emoji: '🏡',
    titre: 'Se projeter',
    niveau: 'Avancé',
    description: 'Retraite, premier achat immobilier, assurance-vie, stratégie',
    sousModules: [
      { id: '7.1', titre: 'La retraite, déjà ?', resume: 'La répartition, info-retraite.fr, le PER' },
      { id: '7.2', titre: 'Premier achat immobilier', resume: 'Apport, capacité d’emprunt, dossier qui passe' },
      { id: '7.3', titre: 'L’assurance-vie', resume: 'Le couteau suisse : multi-supports, les 8 ans' },
      { id: '7.4', titre: 'Ta stratégie globale', resume: 'Quelle enveloppe pour quel objectif, par horizon' },
    ],
  },
  {
    id: 8,
    emoji: '🛡️',
    titre: 'Déjouer les arnaques',
    niveau: 'Essentiel',
    description: 'Signaux d’alerte, finfluenceurs, phishing, réagir',
    sousModules: [
      { id: '8.1', titre: 'Reconnaître une arnaque', resume: 'Les 5 signaux qui doivent te faire fuir' },
      { id: '8.2', titre: 'Finfluenceurs et formations miracle', resume: 'Trading, dropshipping, systèmes pyramidaux' },
      { id: '8.3', titre: 'Sécuriser ses comptes', resume: 'Faux conseiller, phishing, double authentification' },
      { id: '8.4', titre: 'Réagir si c’est trop tard', resume: 'Opposition, signalement AMF / ACPR, plainte' },
    ],
  },
  {
    id: 9,
    emoji: '🎓',
    titre: 'Niveau expert',
    niveau: 'Expert',
    description: 'Dérivés, CFD, produits structurés, private equity, levier',
    sousModules: [
      { id: '9.1', titre: 'Les produits dérivés', resume: 'Options, futures : couverture vs spéculation' },
      { id: '9.2', titre: 'CFD, turbos et produits structurés', resume: 'Pourquoi ~75 % des particuliers perdent' },
      { id: '9.3', titre: 'Private equity et non-coté', resume: 'Crowdfunding, FCPI / FIP, illiquidité' },
      { id: '9.4', titre: 'Levier et gestion du risque', resume: 'SRD, short, position sizing : la discipline des pros' },
    ],
  },
]

export const TOTAL_SOUS_MODULES = MODULES.reduce((n, m) => n + m.sousModules.length, 0)

export function getModule(moduleId) {
  return MODULES.find((m) => m.id === moduleId)
}

export function getSousModule(subId) {
  const moduleId = Number(subId.split('.')[0])
  const module = getModule(moduleId)
  return { module, sousModule: module?.sousModules.find((s) => s.id === subId) }
}
