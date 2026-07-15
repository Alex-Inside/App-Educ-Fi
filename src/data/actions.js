// Le Plan d'action FinPath — une recommandation de passage à l'action par leçon.
//
// LIGNE ROUGE (conformité) : FinPath est un outil ÉDUCATIF. Les actions sont
// des démarches de vérification, d'information, de sécurité, d'organisation ou
// de réclamation de droits. On ne recommande JAMAIS de souscrire, d'ouvrir,
// d'acheter ou de verser sur un produit financier, ni aucun établissement.
// Verbes autorisés : vérifier, retrouver, simuler, calculer, lire, noter,
// activer (sécurité), réclamer (droits). Verbes interdits : ouvrir, souscrire,
// investir, acheter, verser, placer.
//
// `lien` : uniquement des sites publics ou d'autorités (gouv.fr, AMF, ORIAS…).
// `outil` : renvoie vers un simulateur interne de l'app.

export const DISCLAIMER =
  'Édufi est un outil éducatif : ceci est une piste de démarche, jamais un conseil en investissement ni une recommandation de produit ou d’établissement.'

export const ACTIONS = {
  // ---------- Module 1 · Gérer son budget ----------
  '1.1': {
    titre: 'Retrouve ta dernière fiche de paie',
    detail: 'Repère le « net à payer après impôt » tout en bas : c’est le seul chiffre à utiliser pour ton budget. Note-le.',
    duree: '5 min',
    type: 'perso',
  },
  '1.2': {
    titre: 'Passe TON revenu au simulateur budget',
    detail: 'Le simulateur de l’app applique la règle 50/30/20 (et l’adapte si ton loyer pèse lourd) avec tes vrais chiffres.',
    duree: '3 min',
    type: 'outil',
    outil: 'budget',
  },
  '1.3': {
    titre: 'Vérifie ton autorisation de découvert',
    detail: 'Dans l’app de ta banque ou ta convention de compte : quel montant autorisé, et à quel taux ? Beaucoup le découvrent le jour où ça coûte.',
    duree: '10 min',
    type: 'perso',
  },
  '1.4': {
    titre: 'Repère le virement programmé dans ton app bancaire',
    detail: 'Trouve où se crée un virement automatique. Si tu te sens prêt, programme le tien vers ton livret le lendemain de la paie — le montant n’a pas d’importance, l’habitude si.',
    duree: '5 min',
    type: 'perso',
  },
  '1.5': {
    titre: 'Instaure ta règle des 24 heures',
    detail: 'Prochaine envie d’achat : mets l’article au panier, ferme l’appli, décide demain. Note ce que ça change au bout d’une semaine.',
    duree: 'habitude',
    type: 'perso',
  },

  // ---------- Module 2 · Épargner ----------
  '2.1': {
    titre: 'Calcule ton objectif de matelas de sécurité',
    detail: 'Additionne tes dépenses essentielles d’un mois (loyer, courses, transport, abonnements), multiplie par 2 ou 3 : c’est ton objectif de précaution. Note-le.',
    duree: '10 min',
    type: 'perso',
  },
  '2.2': {
    titre: 'Vérifie ton éligibilité au LEP',
    detail: 'Le Livret d’épargne populaire est le livret le mieux rémunéré, réservé aux revenus modestes — beaucoup y ont droit sans le savoir. La fiche officielle donne les plafonds.',
    duree: '5 min',
    type: 'externe',
    lien: 'https://www.service-public.fr/particuliers/vosdroits/F2367',
    lienLabel: 'service-public.fr — fiche LEP',
  },
  '2.3': {
    titre: 'Chiffre ton prochain projet',
    detail: 'Permis, ordi, dépôt de garantie, voyage : passe-le au simulateur « Mon projet » pour connaître l’effort mensuel réaliste.',
    duree: '3 min',
    type: 'outil',
    outil: 'goal',
  },

  '5.5': {
    titre: 'Lance la boule de neige avec TES chiffres',
    detail: 'Prends ce que tu pourrais mettre de côté par mois, et regarde la courbe à 10, 20, 30 ans dans le simulateur. C’est ta courbe, pas un exemple.',
    duree: '3 min',
    type: 'outil',
    outil: 'compound',
  },

  // ---------- Module 3 · Comprendre le crédit ----------
  '3.1': {
    titre: 'Traque un TAEG dans la vraie vie',
    detail: 'Prochaine pub pour un crédit (auto, conso…) : cherche le TAEG en petits caractères et calcule le coût total (mensualité × nombre de mois). Compare avec le prix comptant.',
    duree: '10 min',
    type: 'perso',
  },
  '3.2': {
    titre: 'Fais l’inventaire de tes crédits en cours',
    detail: 'Paiements fractionnés compris ! Liste : montant restant, mensualité, taux. Beaucoup découvrent qu’ils ont 3 « petits » crédits qui en font un gros.',
    duree: '15 min',
    type: 'perso',
  },
  '3.3': {
    titre: 'Calcule le vrai coût d’un paiement en plusieurs fois',
    detail: 'Retrouve un achat payé en 3, 4 ou 10 fois (le tien ou celui d’un proche) : mensualité × nombre d’échéances − prix affiché = le coût caché.',
    duree: '5 min',
    type: 'perso',
  },
  '3.4': {
    titre: 'Parle de la loi Lemoine à un proche qui a un crédit immo',
    detail: 'Depuis 2022, l’assurance emprunteur se change à tout moment — souvent plusieurs milliers d’euros d’économie. Transmettre, c’est réviser.',
    duree: '5 min',
    type: 'perso',
  },

  // ---------- Module 5 · Investir : premiers pas ----------
  '5.1': {
    titre: 'Note ton horizon de placement',
    detail: 'Aucune décision à prendre : écris juste de quelle somme tu es sûr de ne PAS avoir besoin dans les 5 prochaines années. C’est elle qui définit ce que « long terme » veut dire pour toi.',
    duree: '5 min',
    type: 'perso',
  },
  '5.2': {
    titre: 'Regarde ce qu’il y a dans un indice mondial',
    detail: 'Cherche la composition de l’indice MSCI World (pays, secteurs, premières entreprises) sur le site de son fournisseur. Juste pour voir ce que « diversifié » veut dire — rien à acheter.',
    duree: '10 min',
    type: 'perso',
  },
  '5.3': {
    titre: 'Lis la fiche officielle du PEA',
    detail: 'Plafonds, règle des 5 ans, retraits : la fiche service-public.fr dit tout, sans rien vendre. Comprendre l’enveloppe avant de croiser un vendeur.',
    duree: '10 min',
    type: 'externe',
    lien: 'https://www.service-public.fr/particuliers/vosdroits/F2385',
    lienLabel: 'service-public.fr — fiche PEA',
  },
  '5.4': {
    titre: 'Écris ta règle d’investisseur — avant d’investir',
    detail: 'Trois lignes : quel % de ton épargne irait au long terme, à quelle fréquence, et ce que tu feras (rien) le jour où ça baisse de 20 %. La règle écrite avant protège des émotions pendant.',
    duree: '10 min',
    type: 'perso',
  },

  // ---------- Module 6 · Diversifier ----------
  '6.1': {
    titre: 'Compare le rendement fonds euros vs Livret A',
    detail: 'Cherche le taux moyen servi par les fonds euros l’an dernier (presse éco) et compare-le au taux du Livret A. Un chiffre à connaître, aucune souscription à la clé.',
    duree: '5 min',
    type: 'perso',
  },
  '6.2': {
    titre: 'Apprends à vérifier une société de gestion',
    detail: 'Avant toute SCPI (un jour, peut-être) : le réflexe est de vérifier l’agrément de la société de gestion auprès de l’AMF. Va repérer où ça se cherche — c’est gratuit et public.',
    duree: '5 min',
    type: 'externe',
    lien: 'https://www.amf-france.org',
    lienLabel: 'amf-france.org',
  },
  '6.3': {
    titre: 'Calcule ta « poche refuge » théorique',
    detail: '5 à 10 % de ton épargne totale, c’est le maximum raisonnable pour l’or et les valeurs refuges. Fais le calcul avec tes chiffres — juste pour fixer l’ordre de grandeur.',
    duree: '2 min',
    type: 'perso',
  },
  '6.4': {
    titre: 'Vérifie le registre PSAN de l’AMF',
    detail: 'Toute plateforme crypto sérieuse en France doit être enregistrée PSAN. Cherche une plateforme connue dans le registre officiel : le réflexe qui évite 90 % des arnaques crypto.',
    duree: '5 min',
    type: 'externe',
    lien: 'https://www.amf-france.org/fr/espace-professionnels/fintech/mes-relations-avec-lamf/obtenir-un-enregistrement-un-agrement-psan',
    lienLabel: 'AMF — registre PSAN',
  },

  // ---------- Module 7 · Se projeter ----------
  '7.1': {
    titre: 'Crée ton compte info-retraite.fr',
    detail: 'Le site officiel de tous les régimes : tu y verras tes trimestres déjà validés — jobs d’été et alternance compris. Étonnamment motivant.',
    duree: '10 min',
    type: 'externe',
    lien: 'https://www.info-retraite.fr',
    lienLabel: 'info-retraite.fr',
  },
  '7.2': {
    titre: 'Estime ta capacité d’emprunt théorique',
    detail: 'Règle des 35 % : tes revenus nets × 0,35 − tes crédits en cours = mensualité max. Note le chiffre : c’est le point de départ de tout projet immobilier, même lointain.',
    duree: '5 min',
    type: 'perso',
  },
  '7.3': {
    titre: 'Retrouve les frais d’un contrat d’assurance-vie',
    detail: 'Si tu en as un (ou un proche) : cherche les frais de versement et de gestion dans les conditions générales. C’est LE critère que les vendeurs évitent — savoir le trouver te protège.',
    duree: '10 min',
    type: 'perso',
  },
  '7.4': {
    titre: 'Dessine ta pyramide patrimoniale',
    detail: 'Trois étages sur une feuille : précaution (livret), projets (< 5 ans), long terme. Répartis tes montants actuels — le simple fait de la dessiner révèle les déséquilibres.',
    duree: '10 min',
    type: 'perso',
  },

  // ---------- Module 8 · Déjouer les arnaques ----------
  '8.1': {
    titre: 'Mets les listes noires AMF en favori',
    detail: 'Le réflexe une-fois-pour-toutes : la page officielle des sites frauduleux identifiés, à consulter avant TOUT versement à un inconnu.',
    duree: '2 min',
    type: 'externe',
    lien: 'https://www.amf-france.org/fr/espace-epargnants/proteger-son-epargne/listes-noires-et-mises-en-garde',
    lienLabel: 'AMF — listes noires',
  },
  '8.2': {
    titre: 'Passe un finfluenceur au crible des 5 signaux',
    detail: 'Choisis un compte finance que tu suis : rendement promis ? urgence ? DM ? formation payante ? train de vie exhibé ? Compte les signaux — l’exercice est édifiant.',
    duree: '10 min',
    type: 'perso',
  },
  '8.3': {
    titre: 'Active la double authentification partout',
    detail: 'App bancaire d’abord, puis boîte mail (celle qui permet de réinitialiser tout le reste). Le geste de sécurité au meilleur rapport temps/protection.',
    duree: '10 min',
    type: 'externe',
    lien: 'https://www.cybermalveillance.gouv.fr',
    lienLabel: 'cybermalveillance.gouv.fr',
  },
  '8.4': {
    titre: 'Enregistre le numéro d’opposition de ta banque',
    detail: 'Dans tes contacts, maintenant — pas le jour où ta carte disparaît. Ajoute aussi le 33700 (signalement SMS frauduleux).',
    duree: '3 min',
    type: 'perso',
  },

  // ---------- Module 9 · Niveau expert ----------
  '9.1': {
    titre: 'Lis une mise en garde AMF sur le levier',
    detail: 'L’AMF publie régulièrement des mises en garde sur les produits à effet de levier. En lire une vraie vaut tous les résumés.',
    duree: '10 min',
    type: 'externe',
    lien: 'https://www.amf-france.org/fr/espace-epargnants/proteger-son-epargne/listes-noires-et-mises-en-garde',
    lienLabel: 'AMF — mises en garde',
  },
  '9.2': {
    titre: 'Trouve le % de comptes perdants affiché par un courtier CFD',
    detail: 'Les plateformes CFD ont l’obligation légale d’afficher la part de clients particuliers qui perdent. Va lire ce chiffre en bas de la page d’accueil d’un courtier connu : c’est instructif.',
    duree: '5 min',
    type: 'perso',
  },
  '9.3': {
    titre: 'Vérifie un intermédiaire sur l’ORIAS',
    detail: 'Le registre public des intermédiaires financiers autorisés en France. Cherche n’importe quel conseiller ou plateforme de crowdfunding : le réflexe avant de confier un euro.',
    duree: '5 min',
    type: 'externe',
    lien: 'https://www.orias.fr',
    lienLabel: 'orias.fr',
  },
  '9.4': {
    titre: 'Écris ta règle de risque maximum',
    detail: 'Une phrase, à froid : « je ne risque jamais plus de X % sur une seule position ». Les professionnels l’écrivent avant d’en avoir besoin — c’est ce qui les distingue.',
    duree: '5 min',
    type: 'perso',
  },
}

export const TOTAL_ACTIONS = Object.keys(ACTIONS).length

export function getAction(subId) {
  return ACTIONS[subId] ?? null
}
