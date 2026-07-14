// Coach FinPath simulé en local — tient le rôle du system prompt « coach »
// (services/claude.js) en attendant le branchement de l'API : réponses
// contextuelles au module en cours, recentrage doux hors scope.
// Le composant CoachDrawer ne connaît que getCoachReply() : remplacer son
// implémentation par un appel Claude suffira.
//
// v2 : recherche insensible aux accents, choix du MEILLEUR sujet (score de
// mots-clés) plutôt que du premier, lien « approfondir » vers le sous-module,
// suggestions contextuelles au module, ton adapté au profil.

import { getModule } from '../data/curriculum.js'

// Chaque sujet : mots-clés, réponse, et sous-module à approfondir.
const TOPICS = [
  {
    keywords: ['decouvert', 'agios', 'negatif', 'dans le rouge'],
    sub: '1.3',
    reply:
      "Le découvert, c'est quand ton compte passe en négatif : la banque avance la différence et te facture des agios (des intérêts, souvent 7 à 16 % par an) plus parfois 8 € de commission par opération. C'est le crédit le plus cher qui existe — le module 1 te donne la méthode pour t'en sortir durablement.",
  },
  {
    keywords: ['50/30/20', '50 30 20', 'budget', 'depense', 'fin de mois', 'enveloppe'],
    sub: '1.2',
    reply:
      "La règle 50/30/20 découpe ton revenu en 3 enveloppes : 50 % pour l'essentiel (loyer, courses, transport), 30 % pour le plaisir, 20 % que tu mets de côté dès que l'argent arrive. L'astuce qui change tout : un virement automatique vers l'épargne le lendemain de la paie. Le simulateur 🧰 fait le calcul avec tes chiffres.",
  },
  {
    keywords: ['livret a', 'livret', 'ldds', 'lep'],
    sub: '2.2',
    reply:
      "Le Livret A, c'est le coffre de secours idéal : zéro risque, argent disponible à tout moment, et les intérêts sont totalement défiscalisés. Son rôle, c'est l'épargne de précaution (2-3 mois de dépenses) — pas le long terme. Et vérifie si tu as droit au LEP : c'est le livret le mieux rémunéré de tous.",
  },
  {
    keywords: ['pel', 'plan epargne logement'],
    sub: '2.4',
    reply:
      "Le PEL sert un objectif précis : préparer un achat immobilier, avec un taux garanti à l'ouverture. En contrepartie l'argent est peu disponible, et le casser avant 2 ans fait perdre ses avantages. À n'ouvrir que si le projet est réel — sinon Livret A pour la précaution, et investissement long terme pour le reste.",
  },
  {
    keywords: ['interets composes', 'compose', 'boule de neige'],
    sub: '2.3',
    reply:
      "Les intérêts composés, c'est l'effet boule de neige : les intérêts gagnés produisent eux-mêmes des intérêts. 100 € à 10 % → 110 €, puis les 10 % se calculent sur 110 €… Le facteur le plus puissant n'est pas le taux, c'est la durée. Va jouer avec le simulateur 🧰 « Boule de neige » : voir SA courbe à 30 ans, ça change une vie.",
  },
  {
    keywords: ['precaution', 'urgence', 'imprevu', 'combien epargner', 'matelas'],
    sub: '2.1',
    reply:
      "L'épargne de précaution idéale, c'est 2 à 3 mois de dépenses, posée sur un Livret A. Assez pour absorber une panne, un souci de santé ou une période creuse sans découvert — pas trop pour ne pas laisser dormir de l'argent qui pourrait travailler ailleurs.",
  },
  {
    keywords: ['taeg', 'taux', 'credit', 'emprunt', 'pret'],
    sub: '3.1',
    reply:
      "Pour comparer deux crédits, un seul chiffre compte : le TAEG (taux annuel effectif global). Il inclut les intérêts, les frais de dossier ET l'assurance — contrairement au taux affiché en gros sur la pub. Le prêteur a l'obligation légale de te le donner par écrit. Réflexe bonus : calcule toujours le coût total (mensualité × nombre de mois).",
  },
  {
    keywords: ['assurance emprunteur', 'lemoine'],
    sub: '3.4',
    reply:
      "L'assurance emprunteur est souvent le levier d'économie n°1 d'un crédit immobilier : depuis la loi Lemoine (2022), tu peux en changer à tout moment pour une délégation moins chère à garanties équivalentes — souvent plusieurs milliers d'euros gagnés sur la durée du prêt.",
  },
  {
    keywords: ['plusieurs fois', '3 fois', '4 fois', '36 fois', 'renouvelable', 'paiement fractionne', 'klarna', 'alma'],
    sub: '3.3',
    reply:
      "Le paiement en plusieurs fois cache souvent un crédit renouvelable à taux très élevé (parfois plus de 20 %). Fais toujours le calcul inverse : mensualité × nombre de mois = coût réel. 29 € × 36 mois = 1 044 € pour un téléphone à 850 €… Les petites mensualités sont une illusion d'optique.",
  },
  {
    keywords: ['etf', 'tracker', 'msci', 'indice'],
    sub: '5.2',
    reply:
      "Un ETF, c'est un panier qui réplique tout un indice en une seule ligne : avec un ETF Monde (MSCI World), tu détiens ~1 400 entreprises de 23 pays d'un coup, pour des frais minimes (~0,2-0,4 %/an). Tu n'as pas à deviner les « bonnes » actions : tu achètes toute la course plutôt qu'un seul cheval.",
  },
  {
    keywords: ['pea', "plan d'epargne en actions", 'plan epargne actions'],
    sub: '5.3',
    reply:
      "Le PEA, c'est l'enveloppe fiscale idéale pour investir en actions : après 5 ans de détention, tes gains échappent à l'impôt sur le revenu (il reste 17,2 % de prélèvements sociaux, contre 30 % de flat tax ailleurs). Et c'est la date d'ouverture qui lance le chrono — l'ouvrir tôt, même avec 10 €, est déjà une optimisation.",
  },
  {
    keywords: ['bourse', 'investir', 'action', 'placement', 'dca'],
    sub: '5.4',
    reply:
      "Les deux règles d'or pour investir : 1) on n'y met que l'argent dont on n'aura pas besoin avant 5-10 ans (l'épargne de précaution reste sur le livret), 2) on verse la même somme chaque mois (le DCA) pour lisser les hauts et les bas du marché et neutraliser ses émotions. La méthode simple : versement programmé sur un ETF Monde via un PEA.",
  },
  {
    keywords: ['assurance-vie', 'assurance vie'],
    sub: '7.3',
    reply:
      "Malgré son nom, l'assurance-vie n'est pas une assurance décès : c'est une enveloppe souple où loger différents placements (fonds euros sécurisé + supports dynamiques). Après 8 ans de détention, tu bénéficies d'un abattement fiscal annuel sur les gains retirés. Comme le PEA : l'ouvrir tôt « prend date », même avec un petit montant.",
  },
  {
    keywords: ['retraite', 'per', 'pension', 'trimestre'],
    sub: '7.1',
    reply:
      "Penser retraite à ton âge, c'est un avantage, pas une angoisse : chaque euro investi maintenant a des décennies pour grossir. Premier pas concret : créer ton compte sur info-retraite.fr pour voir tes trimestres déjà validés (jobs d'été compris !). Le PER, lui, devient surtout intéressant quand ton taux d'imposition monte — rarement prioritaire avant 30 ans.",
  },
  {
    keywords: ['immobilier', 'apport', 'acheter', 'appartement', 'logement', 'maison'],
    sub: '7.2',
    reply:
      "Pour un premier achat immobilier, les banques regardent trois choses : ton apport (vise ~10 % du prix + les frais de notaire), la stabilité de tes revenus, et la tenue de ton compte sur les 3 derniers mois — un découvert récurrent peut faire échouer un dossier. Ton historique bancaire, c'est ton CV financier : il se construit dès maintenant.",
  },
  {
    keywords: ['fiche de paie', 'brut', 'salaire net', 'cotisation', 'salaire'],
    sub: '1.1',
    reply:
      "Sur ta fiche de paie : le brut, c'est avant cotisations ; le net après impôt (tout en bas), c'est ce qui arrive vraiment sur ton compte — environ 22 % du brut part en cotisations dans le privé. Ce n'est pas perdu : ça finance ta santé, ton chômage et déjà ta future retraite. Construis toujours ton budget sur le net après impôt.",
  },
  {
    keywords: ['aide', 'apl', 'caf', 'bourse crous', 'prime d’activite', "prime d'activite", 'crous', 'aides'],
    sub: '1.5',
    reply:
      "Des milliards d'euros d'aides ne sont pas réclamés chaque année, en grande partie par les jeunes ! APL pour le logement, bourses CROUS, prime d'activité dès tes premiers salaires, aides régionales transport/culture… Le réflexe : fais le tour en 10 minutes sur le simulateur officiel mesdroitssociaux.gouv.fr.",
  },
  {
    keywords: ['mutuelle', 'complementaire sante', 'secu', 'securite sociale'],
    sub: '4.1',
    reply:
      "La Sécu rembourse une partie de tes frais de santé, la mutuelle (complémentaire) prend le relais. À savoir : en CDI, ta mutuelle d'entreprise est obligatoire et payée au moins à 50 % par l'employeur. Étudiant ou jeune actif, choisis selon tes besoins réels (optique, dentaire) plutôt que la formule la plus chère.",
  },
  {
    keywords: ['assurance habitation', 'responsabilite civile', 'coloc', 'assurance auto', 'jeune conducteur', 'bonus', 'franchise'],
    sub: '4.2',
    reply:
      "L'assurance habitation est obligatoire pour tout locataire (attestation exigée à la signature) et inclut la responsabilité civile, qui couvre les dommages que tu causes aux autres. Côté auto : la surprime jeune conducteur peut doubler la facture la 1re année, mais elle fond vite (et la conduite accompagnée la réduit). Compare toujours garanties ET franchises, pas seulement le prix.",
  },
  {
    keywords: ['obligation', 'coupon', 'fonds euros', 'fonds en euros'],
    sub: '6.1',
    reply:
      "Une obligation, c'est un prêt : tu prêtes à un État ou une entreprise qui te verse un coupon régulier puis te rembourse. Moins spectaculaire que les actions, mais ça amortit les chocs. La porte d'entrée simple, c'est le fonds euros de l'assurance-vie : investi en grande partie en obligations, avec capital garanti (~2-3 %/an).",
  },
  {
    keywords: ['scpi', 'pierre-papier', 'pierre papier'],
    sub: '6.2',
    reply:
      "Les SCPI, c'est l'immobilier sans acheter : tu prends des parts d'un parc d'immeubles géré pour toi et tu touches des loyers mutualisés (~4-6 %/an), dès quelques centaines d'euros. Attention aux contreparties : frais d'entrée souvent de 8-12 %, revente parfois lente, loyers imposés comme revenus fonciers. Horizon 8-10 ans minimum.",
  },
  {
    keywords: ["l'or", ' or ', 'lingot', 'valeur refuge'],
    sub: '6.3',
    reply:
      "L'or ne verse ni intérêt ni dividende — il ne « rapporte » rien, mais il protège : sa valeur tient souvent quand les marchés ou les monnaies vacillent. C'est l'extincteur du portefeuille : utile en petite dose (0-10 % max), jamais le cœur. Et en pratique, un ETC or est bien plus simple à gérer que des pièces dans un tiroir.",
  },
  {
    keywords: ['crypto', 'bitcoin', 'ethereum', 'blockchain', 'token'],
    sub: '6.4',
    reply:
      "La règle d'or crypto : maximum 5-10 % de ton patrimoine, et uniquement ce que tu peux te permettre de perdre à 100 % — des chutes de -50 % sont déjà arrivées plusieurs fois. Passe par une plateforme enregistrée AMF (statut PSAN), active la double authentification, et fuis tout « rendement garanti » en crypto : c'est l'uniforme des arnaqueurs. Fiscalité : flat tax 30 % sur les plus-values.",
  },
  {
    keywords: ['arnaque', 'scam', 'finfluenceur', 'ponzi', 'pyramide', 'faux conseiller', 'phishing', 'fraude', 'piratage'],
    sub: '8.1',
    reply:
      "Les 5 signaux d'une arnaque : rendement « garanti » élevé, urgence artificielle, demande de secret, contact par DM, paiement bizarre (crypto, carte cadeau). Réflexe : liste noire AMF + registre ORIAS avant tout versement. Et grave ça : ta banque ne te demandera JAMAIS un code par téléphone — raccroche et rappelle toi-même le numéro officiel. Le module 8 t'arme contre tout ça.",
  },
  {
    keywords: ['derive', 'option', 'future', 'cfd', 'turbo', 'warrant', 'levier', 'short', 'vente a decouvert'],
    sub: '9.1',
    reply:
      "Terrain expert ! Retiens l'essentiel : le levier multiplie les gains ET les pertes à l'identique, ~75 % des particuliers perdent sur les CFD (études AMF), et les turbos peuvent être détruits par une barrière touchée une seconde. Comprendre ces produits te protège ; t'en servir est presque toujours optionnel — le module 9 fait le tour complet.",
  },
  {
    keywords: ['private equity', 'non cote', 'non-cote', 'crowdfunding', 'fcpi', 'fip', 'startup'],
    sub: '9.3',
    reply:
      "Le private equity, c'est investir dans des entreprises non cotées : potentiel élevé, mais argent bloqué 5-10 ans et perte sèche possible — ça fait partie du jeu. Crowdfunding dès 100 € (diversifie ou abstiens-toi), FCPI/FIP à manier avec prudence : la réduction d'impôt ne doit jamais être le seul argument. Petite poche (< 5-10 %), et seulement quand tout le reste est en place.",
  },
]

const OFF_TOPIC = [
  'foot', 'film', 'serie', 'meteo', 'recette', 'jeu video', 'jeux video',
  'musique', 'politique', 'blague', 'amour',
]

// Suggestions rapides, contextuelles au module actif.
const SUGGESTIONS = {
  1: ['Comment sortir du découvert ?', "C'est quoi la règle 50/30/20 ?", "Quelles aides je peux réclamer ?"],
  2: ['Combien mettre de côté chaque mois ?', "C'est quoi les intérêts composés ?", 'Livret A ou LEP ?'],
  3: ["C'est quoi le TAEG ?", 'Le paiement en 4 fois, piège ou pas ?', "L'assurance emprunteur, ça se négocie ?"],
  4: ['Une mutuelle, ça sert à quoi ?', "L'assurance habitation est obligatoire ?", 'Assurance auto jeune conducteur ?'],
  5: ["C'est quoi un ETF ?", 'PEA ou compte-titres ?', 'Comment débuter en bourse sans se planter ?'],
  6: ["C'est quoi une obligation ?", 'Les SCPI, bonne idée ?', 'Je peux mettre combien en crypto ?'],
  7: ['La retraite, je dois y penser maintenant ?', "Combien d'apport pour acheter ?", "L'assurance-vie, ça marche comment ?"],
  8: ['Comment reconnaître une arnaque ?', 'Un finfluenceur me propose une formation…', "On m'appelle de ma banque, je fais quoi ?"],
  9: ["C'est quoi le levier ?", 'Pourquoi tout le monde perd sur les CFD ?', "C'est quoi le private equity ?"],
  default: ['Comment sortir du découvert ?', 'Combien mettre de côté chaque mois ?', "C'est quoi un ETF ?"],
}

function stripAccents(s) {
  return s.normalize('NFD').replace(/[̀-ͯ]/g, '')
}

function moduleName(moduleId) {
  const m = getModule(moduleId)
  return m ? `${m.emoji} ${m.titre}` : null
}

export function getCoachSuggestions(moduleId) {
  return SUGGESTIONS[moduleId] ?? SUGGESTIONS.default
}

export function getCoachGreeting({ profile, moduleId }) {
  const ctx = moduleId
    ? `Je vois que tu es sur le module « ${moduleName(moduleId)} » — pose-moi tes questions dessus, ou sur n'importe quel sujet d'argent.`
    : 'Pose-moi n’importe quelle question sur ton argent : budget, épargne, crédit, investissement…'
  const ton =
    profile?.profil === 'debutant'
      ? ' Aucune question n\'est bête ici — surtout pas les tiennes.'
      : profile?.profil === 'avance'
        ? ' On peut aller dans le détail si tu veux.'
        : ''
  return `Salut ! 👋 Je suis ton coach FinPath. ${ctx}${ton}`
}

// Choisit le sujet au meilleur score : nombre de mots-clés présents, puis
// longueur du mot-clé le plus long (plus spécifique = plus pertinent).
function bestTopic(normalizedQuestion) {
  let best = null
  let bestScore = 0
  for (const topic of TOPICS) {
    const hits = topic.keywords.filter((k) => normalizedQuestion.includes(stripAccents(k)))
    if (!hits.length) continue
    const score = hits.length * 100 + Math.max(...hits.map((h) => h.length))
    if (score > bestScore) {
      best = topic
      bestScore = score
    }
  }
  return best
}

// Retourne { text, sub } — sub : sous-module à proposer en « approfondir ».
export function getCoachReply({ text, profile, moduleId }) {
  const q = stripAccents(text.toLowerCase())

  if (OFF_TOPIC.some((w) => q.includes(stripAccents(w)))) {
    return {
      text: "Ah, ça c'est pas mon rayon 😄 Moi je suis là pour tes questions d'argent — budget, épargne, crédit, investissement… Il y a un sujet qui te tracasse en ce moment côté finances ?",
      sub: null,
    }
  }

  const topic = bestTopic(q)
  if (topic) return { text: topic.reply, sub: topic.sub }

  const suggestion = moduleId
    ? `En attendant, le module « ${moduleName(moduleId)} » que tu suis devrait déjà t'éclairer — et n'hésite pas à me reposer la question autrement.`
    : 'Essaie de me la poser avec un mot-clé : découvert, Livret A, TAEG, ETF, PEA, assurance-vie… Le lexique 📖 peut aussi t\'aider.'
  return {
    text: `Bonne question ! Pour l'instant je tourne en mode démo (l'API Claude n'est pas encore branchée), donc je réponds surtout sur les grands sujets du parcours. ${suggestion}`,
    sub: null,
  }
}
