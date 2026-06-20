// Module 8 — Déjouer les arnaques
// Contenu pédagogique FinPath : prise de connaissance, cas concret, synthèse, quiz.

export const CONTENT = {
  "8.1": {
    decouverte: [
      "Les arnaques financières changent de costume en permanence — crypto, livrets « boostés », parkings d'aéroport, vin, whisky… — mais le scénario, lui, ne change jamais. Apprends à reconnaître le scénario, et tu seras protégé contre des arnaques qui n'existent même pas encore.",
      "Les 5 signaux qui doivent te faire fuir : un rendement élevé présenté comme « garanti » (au-delà de 4-5 % sans risque, c'est un mensonge — toujours) ; l'urgence artificielle (« offre réservée, plus que 24 h ») ; la demande de discrétion (« n'en parle pas à ta banque ») ; le canal inhabituel (DM Instagram, WhatsApp, Telegram — aucun vrai conseiller ne prospecte là) ; et le paiement bizarre (crypto, carte cadeau, virement vers un compte de particulier ou à l'étranger).",
      "Avant de verser le moindre euro, deux vérifications gratuites : la liste noire de l'AMF (les sites signalés y sont recensés) et le registre ORIAS (tout intermédiaire financier légal en France y est inscrit). Deux minutes de recherche qui sauvent des années d'économies.",
    ],
    casConcret: [
      "Adam, 24 ans, reçoit un DM Instagram d'une « gestionnaire de patrimoine » : un livret épargne à 9 % garanti, « partenariat exclusif avec une grande banque européenne », souscription avant vendredi. Le site est propre, avec logo officiel et avis 5 étoiles. Adam compte les signaux : rendement garanti irréaliste, urgence, contact par DM. Trois sur cinq.",
      "Il vérifie : le « livret » figure sur la liste noire de l'AMF depuis deux mois, et la société n'existe pas à l'ORIAS. Il bloque, signale le compte… et apprend qu'un ami d'ami y a laissé 4 200 €. Le faux site reproduisait à l'identique la charte graphique d'une vraie banque — seule l'adresse web différait d'une lettre.",
    ],
    synthese: [
      "Plus de 4-5 % « garanti sans risque » = mensonge, sans exception.",
      "Urgence + secret + DM = le trio signature des arnaqueurs.",
      "Paiement en crypto, carte cadeau ou vers un particulier : fuis.",
      "Réflexe 2 minutes : liste noire AMF + registre ORIAS.",
      "Les arnaques changent de costume, jamais de scénario.",
    ],
    quiz: [
      {
        question: "On te propose un placement à 8 % par an « garanti, zéro risque ». Tu en conclus…",
        options: [
          "Que c'est une bonne affaire à saisir vite",
          "Que c'est forcément une arnaque : ce couple rendement/garantie n'existe pas",
          "Que c'est fiable si le site a des avis 5 étoiles",
          "Que c'est légal si la personne a beaucoup d'abonnés",
        ],
        correct: 1,
        explication: "Le rendement rémunère le risque : c'est la loi de base de la finance. Un placement réellement sans risque rapporte autour de 2-3 % (livrets, fonds euros). Promettre le double ou le triple « garanti », c'est promettre quelque chose que même les meilleures banques du monde ne savent pas faire.",
        explicationAlt: "Si quelqu'un détenait vraiment un placement à 8 % sans risque, il emprunterait à 3 % pour y placer des milliards en silence — il ne le proposerait pas à des inconnus en DM. Le simple fait qu'on te le propose prouve que ça n'existe pas.",
      },
      {
        question: "Quel réflexe AVANT de verser de l'argent à un intermédiaire financier ?",
        options: [
          "Vérifier ses avis Google et son nombre d'abonnés",
          "Lui demander une preuve de ses propres gains",
          "Consulter la liste noire AMF et le registre ORIAS",
          "Tester avec un petit montant pour voir",
        ],
        correct: 2,
        explication: "Tout intermédiaire légal en France est inscrit à l'ORIAS, et l'AMF tient une liste noire publique des sites frauduleux signalés. Ces deux vérifications sont gratuites et prennent deux minutes. Les avis en ligne, eux, s'achètent par paquets de mille.",
        explicationAlt: "« Tester avec un petit montant » est exactement ce que l'arnaqueur attend : les premiers « gains » s'affichent, parfois on te laisse même retirer une fois — c'est l'appât pour le gros versement. La seule vérification qui compte se fait AVANT le premier euro, dans les registres officiels.",
      },
    ],
  },

  "8.2": {
    decouverte: [
      "« J'ai quitté le salariat à 23 ans grâce au trading, et je t'apprends comment » : si tu as un réseau social, tu connais ce pitch par cœur. Pose-toi LA question : d'où vient vraiment leur argent ? Réponse, dans l'immense majorité des cas : de la vente de la formation et des commissions de parrainage — pas du trading. Leur business, c'est toi.",
      "Les signaux classiques : captures d'écran de gains (infalsifiables ? non : un faux compte de démonstration suffit), voitures de luxe louées à la journée, mode de vie mis en scène, et la promesse de « liberté financière » accessible à tous. Derrière, souvent, des systèmes pyramidaux déguisés : les « gains » des premiers inscrits sont payés par les dépôts des suivants — jusqu'à l'effondrement, mathématiquement inévitable.",
      "Le produit le plus poussé par ces canaux : le trading CFD, dont on reparlera au module expert. Retiens juste ce chiffre, issu des études de l'AMF : environ 75 % des particuliers y perdent de l'argent. Quand quelqu'un te vend la méthode pour faire partie des 25 % restants, demande-toi pourquoi il a besoin de tes 497 € si sa méthode marche.",
    ],
    casConcret: [
      "Lucas, 20 ans, étudiant, craque pour une formation trading à 497 € promue par un influenceur aux 800 000 abonnés : « rentabilisée en une semaine ». La formation : trois PDF génériques et un groupe Telegram de « signaux ». Pour « débloquer son potentiel », on le pousse à déposer 1 000 € chez un courtier CFD partenaire — dont l'influenceur touche une commission sur chaque dépôt.",
      "Trois semaines plus tard, le compte de Lucas est à 320 €. Le groupe Telegram, lui, célèbre les rares trades gagnants et efface les autres. Coût total de l'aventure : près de 1 200 €. Il comprend le modèle en voyant l'influenceur promouvoir, le mois suivant, un courtier différent — l'ancien ayant été placé sur liste noire.",
    ],
    synthese: [
      "Le vrai revenu du finfluenceur : ta formation et ses commissions, pas son trading.",
      "Captures de gains et voitures de luxe : un décor, pas une preuve.",
      "Pyramide/Ponzi : les gains des premiers payés par les dépôts des suivants.",
      "~75 % des particuliers perdent sur les CFD (études AMF).",
      "Si la méthode marchait, il n'aurait pas besoin de te la vendre.",
    ],
    quiz: [
      {
        question: "Comment gagne réellement sa vie un « finfluenceur trading » typique ?",
        options: [
          "Grâce à ses performances de trading exceptionnelles",
          "Par la vente de formations et les commissions de parrainage",
          "Grâce à un salaire versé par la Bourse de Paris",
          "Par les dividendes de ses abonnés",
        ],
        correct: 1,
        explication: "Le modèle économique repose sur la vente de formations et sur les commissions versées par les courtiers partenaires pour chaque client apporté — souvent proportionnelles aux dépôts ou aux pertes du filleul. Les performances de trading affichées sont invérifiables et souvent simulées.",
        explicationAlt: "Pendant la ruée vers l'or, ceux qui se sont enrichis à coup sûr vendaient des pelles. La formation à 497 € et le lien de parrainage, ce sont les pelles d'aujourd'hui — et toi, tu es le chercheur d'or qui paie.",
      },
      {
        question: "Qu'est-ce qui caractérise un système de Ponzi (pyramide) ?",
        options: [
          "Des frais de gestion légèrement trop élevés",
          "Un placement réservé aux investisseurs institutionnels",
          "Les « gains » des premiers sont payés avec l'argent des nouveaux entrants",
          "Un fonds qui investit uniquement dans l'immobilier",
        ],
        correct: 2,
        explication: "Dans un Ponzi, aucune richesse n'est créée : l'argent des nouveaux déposants sert à payer les « rendements » des anciens, ce qui crédibilise le système et attire encore plus de monde. Quand les entrées ralentissent, tout s'effondre — mathématiquement, sans exception.",
        explicationAlt: "Imagine une fontaine sans arrivée d'eau, alimentée seulement par des seaux qu'on verse en haut : tant que les seaux arrivent, l'eau coule et tout le monde s'émerveille. Le jour où les porteurs de seaux se raréfient, la fontaine s'arrête net — et ceux d'en bas repartent à sec.",
      },
    ],
  },

  "8.3": {
    decouverte: [
      "L'arnaque qui fait le plus de dégâts en France en ce moment ne vise pas tes placements : elle vise ton compte courant. C'est le faux conseiller bancaire. Tu reçois un appel — le numéro affiché est parfois CELUI de ta vraie banque, grâce à l'usurpation de numéro — d'un « conseiller du service fraude » : des opérations suspectes ont été détectées, il faut « sécuriser ton compte » en validant des opérations ou en donnant des codes. Tout est faux. En validant, c'est toi qui autorises les virements des escrocs.",
      "Grave ça en lettres capitales : ta banque ne te demandera JAMAIS un code reçu par SMS, ton mot de passe, ou de valider une opération « de sécurisation » par téléphone. Jamais. Le bon réflexe en cas d'appel pressant : raccrocher, attendre quelques minutes, et rappeler toi-même le numéro officiel au dos de ta carte.",
      "L'autre grande famille, c'est le phishing : SMS ou mails imitant La Poste (« votre colis est bloqué »), le CPF, l'Assurance Maladie, les impôts… avec un lien vers un faux site qui aspire tes identifiants ou tes données de carte. Les contre-mesures de base : double authentification partout, mots de passe uniques (un gestionnaire de mots de passe aide), et ne JAMAIS cliquer sur un lien reçu par SMS pour « régulariser » quoi que ce soit.",
    ],
    casConcret: [
      "Chloé, 23 ans, reçoit un appel affichant le numéro de sa banque. Un « conseiller anti-fraude » très professionnel : trois paiements suspects en Espagne, il faut agir vite. Il lui demande de valider des « opérations d'annulation » dans son appli. Stressée, elle valide la première — 800 €. À la deuxième demande, un détail la frappe : la pression. Son vrai conseiller ne l'a jamais pressée.",
      "Elle raccroche et rappelle elle-même l'agence au numéro du dos de sa carte : aucun service fraude ne l'a contactée. Opposition immédiate sur la carte, signalement, dépôt de plainte. Les 800 € validés « par elle » seront les plus durs à récupérer — c'est exactement pour ça que les escrocs te font valider toi-même les opérations.",
    ],
    synthese: [
      "Ta banque ne demande JAMAIS un code, un mot de passe ou une validation par téléphone.",
      "Appel pressant = raccrocher, puis rappeler soi-même le numéro officiel.",
      "L'usurpation de numéro existe : l'affichage ne prouve rien.",
      "Jamais de clic sur un lien SMS pour « régulariser » ou « débloquer ».",
      "Double authentification + mots de passe uniques, partout.",
    ],
    quiz: [
      {
        question: "Un « conseiller » t'appelle : fraude détectée, il faut valider des opérations de sécurisation. Tu fais quoi ?",
        options: [
          "Tu valides vite : chaque minute compte en cas de fraude",
          "Tu donnes le code SMS puisqu'il appelle du numéro de ta banque",
          "Tu raccroches et tu rappelles toi-même le numéro officiel de ta banque",
          "Tu lui demandes son prénom pour vérifier",
        ],
        correct: 2,
        explication: "Le numéro affiché peut être usurpé et un prénom ne prouve rien : la seule vérification fiable, c'est un appel que TU passes vers le numéro officiel (dos de ta carte, appli bancaire). Une vraie banque ne fait jamais valider d'opérations par téléphone — c'est précisément le mécanisme de l'arnaque.",
        explicationAlt: "Principe simple : ne fais jamais confiance à un appel entrant, fais confiance à l'appel sortant que tu composes toi-même. C'est comme vérifier l'identité de quelqu'un en allant frapper à sa porte plutôt qu'en croyant celui qui se présente sur ton paillasson.",
      },
      {
        question: "Pourquoi les escrocs veulent-ils que ce soit TOI qui valides les opérations dans ton appli ?",
        options: [
          "Parce qu'ils n'ont pas le droit de le faire eux-mêmes",
          "Une opération validée par le client est bien plus dure à faire rembourser",
          "Parce que ça va plus vite que de pirater la banque",
          "Pour te faire gagner du temps",
        ],
        correct: 1,
        explication: "La banque doit rembourser les opérations non autorisées, sauf « négligence grave » du client. Une opération validée par toi, avec ta propre authentification forte, peut être qualifiée d'autorisée — c'est tout l'enjeu juridique, et c'est pour ça que toute l'arnaque vise à obtenir TA validation.",
        explicationAlt: "C'est la différence entre un cambrioleur qui force ta porte et un escroc qui te convainc de lui ouvrir : dans le second cas, prouver l'effraction devient compliqué. Ta validation dans l'appli, c'est toi qui ouvres la porte — voilà pourquoi ils la veulent absolument.",
      },
    ],
  },

  "8.4": {
    decouverte: [
      "Tu t'es fait avoir, ou tu penses que c'est en cours ? D'abord : ce n'est pas une honte. Ces arnaques sont industrialisées, scénarisées par des professionnels, et touchent tous les profils — y compris des banquiers. Ce qui compte maintenant, c'est la vitesse. Chaque heure gagnée augmente les chances de bloquer ou récupérer des fonds.",
      "La séquence d'urgence : opposition immédiate sur la carte ou le compte (le numéro d'opposition est au dos de ta carte et dans ton appli), changement de tous les mots de passe liés, et contact avec ta banque pour contester les opérations. Bon à savoir : la banque doit rembourser les opérations non autorisées, sauf négligence grave de ta part — ne déclare jamais spontanément avoir « donné ton code », raconte précisément comment on t'a manipulé.",
      "Ensuite, les signalements : plainte en ligne via THESEE pour les e-arnaques (sans se déplacer), signalement à l'AMF ou l'ACPR si c'est un faux placement, SignalConso pour les pratiques commerciales trompeuses. Et un dernier piège à connaître : la « sur-arnaque ». Des faux « services de récupération de fonds » contactent les victimes recensées en promettant de récupérer l'argent perdu… contre des frais d'avance. C'est la même équipe qui repasse à la caisse.",
    ],
    casConcret: [
      "Sarah, 25 ans, a versé 3 000 € sur une fausse plateforme de trading. Le jour où elle veut retirer, on lui réclame des « frais de déblocage » de 900 € — c'est le signal qui lui ouvre les yeux. Elle ne paie pas, fait opposition, dépose plainte sur THESEE le soir même et signale la plateforme à l'AMF. Sa banque, contactée sous 48 h, parvient à rappeler un virement pas encore exécuté : 1 000 € sauvés.",
      "Trois semaines plus tard, un « cabinet de recouvrement international » l'appelle : ils ont « localisé ses fonds » et peuvent tout récupérer moyennant 450 € de frais de dossier. Sarah reconnaît la sur-arnaque — les escrocs revendent les fichiers de victimes — raccroche et ajoute ce numéro à sa plainte. Bilan final : 2 000 € perdus, mais 1 000 € sauvés et zéro euro de plus engloutis.",
    ],
    synthese: [
      "Vitesse avant tout : opposition immédiate, mots de passe changés, banque contactée.",
      "Opérations non autorisées : remboursement dû, sauf négligence grave avérée.",
      "Plainte en ligne THESEE, signalements AMF / ACPR / SignalConso.",
      "Des « frais pour débloquer tes gains » ? C'est la confirmation de l'arnaque.",
      "Les services de « récupération de fonds » sont la 2e vague de la même arnaque.",
    ],
    quiz: [
      {
        question: "Une plateforme exige des « frais de déblocage » pour te laisser retirer tes gains. C'est…",
        options: [
          "La confirmation que c'est une arnaque : ne paie jamais",
          "Une pratique normale des courtiers en ligne",
          "Un impôt anticipé prélevé pour l'État",
          "Acceptable si les frais sont inférieurs à 5 %",
        ],
        correct: 0,
        explication: "Aucun intermédiaire légitime ne conditionne un retrait au paiement préalable de frais par virement séparé. C'est le mécanisme final de l'arnaque : tes « gains » n'existent pas, et chaque paiement de « frais » en appellera un nouveau, jusqu'à ce que tu arrêtes.",
        explicationAlt: "Réfléchis à la logique : s'ils détenaient vraiment tes gains, ils pourraient déduire les frais directement du montant. S'ils exigent un paiement séparé, c'est que le compteur affiché n'est qu'une image sur un écran — et que le seul argent réel qui circule, c'est le tien, vers eux.",
      },
      {
        question: "Après une fraude, on te contacte pour « récupérer tes fonds » contre des frais d'avance. Tu en déduis…",
        options: [
          "Que la justice a retrouvé ton argent",
          "Que c'est une seconde arnaque visant les victimes de la première",
          "Que ta banque sous-traite le recouvrement",
          "Que c'est fiable si le cabinet a un site web professionnel",
        ],
        correct: 1,
        explication: "Les fichiers de victimes se revendent entre réseaux d'escrocs, et la « récupération de fonds contre frais d'avance » est une arnaque documentée par l'AMF. Aucun service légitime — ni la police, ni ta banque — ne réclame de frais d'avance pour récupérer des fonds volés.",
        explicationAlt: "Mets-toi à la place de l'escroc : qui est le client idéal ? Quelqu'un qui a déjà prouvé qu'il pouvait verser de l'argent sous le coup de l'émotion. La victime d'hier est la cible prioritaire d'aujourd'hui — c'est cynique, et c'est exactement comme ça que ça marche.",
      },
    ],
  },
}
