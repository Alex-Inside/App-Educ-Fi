// Contenu long du module 6 « Diversifier ses placements » — 5 pages × 3-4 blocs
// + quiz de 5 questions. Sous-modules : 6.1 à 6.4.
// Contenu strictement pédagogique : aucune recommandation de produit,
// d'établissement ni de conseil en investissement personnalisé.

export const MODULE6_LESSONS = {
  '6.1': {
    title: 'Les obligations',
    goal: `À la fin, tu sauras ce qu'est une obligation (prêter plutôt que posséder), pourquoi elle amortit un portefeuille, la relation prix/taux, et le rôle du fonds euros à capital garanti.`,
    badge: 'Prêteur avisé',
    pages: [
      { tag: 'PAGE 1 · PRÊTER, PAS POSSÉDER', title: 'L’autre grande famille de placements', blocks: [
        { label: 'Action vs obligation', text: `Avec une action, tu possèdes un morceau d'entreprise. Avec une obligation, tu fais autre chose : tu prêtes ton argent — à un État ou à une entreprise — qui s'engage à te verser un intérêt régulier puis à te rembourser. Posséder d'un côté, prêter de l'autre.` },
        { label: 'Le coupon', text: `L'intérêt versé s'appelle le coupon : un montant connu d'avance, versé à échéance régulière, jusqu'au remboursement du capital à la fin. Tant que l'émetteur peut payer, ton contrat ne change pas, que l'entreprise cartonne ou végète.` },
        { label: 'Créancier, pas propriétaire', text: `En prêtant, tu deviens créancier : tu ne profites pas de l'envolée des bénéfices comme un actionnaire, mais en cas de coup dur, les créanciers passent avant les actionnaires. Moins de potentiel, mais plus de prévisibilité.` },
      ] },
      { tag: 'PAGE 2 · L’AMORTISSEUR', title: 'Pourquoi en avoir dans un portefeuille', blocks: [
        { label: 'Elles bougent moins', text: `Les obligations varient en général moins violemment que les actions : c'est leur rôle d'amortisseur. Quand les actions dévissent, la poche obligataire tient mieux et stabilise l'ensemble.` },
        { label: 'Le rôle dans l’allocation', text: `Mélanger actions (moteur de rendement) et obligations (stabilité) permet d'adoucir les à-coups. Plus on approche d'un objectif daté, plus on tend à renforcer la part stable pour protéger ce qui est acquis.` },
        { label: 'Pas sans risque pour autant', text: `Une obligation n'est « sûre » que si l'émetteur peut rembourser : prêter à un État solide n'est pas prêter à une entreprise fragile. Et, on va le voir, leur prix peut varier avant l'échéance.` },
      ] },
      { tag: 'PAGE 3 · PRIX ET TAUX', title: 'La bascule à comprendre', blocks: [
        { label: 'Le sens inverse', text: `Point clé : le prix des obligations déjà émises évolue à l'inverse des taux d'intérêt. Quand les taux montent, les nouvelles obligations offrent de meilleurs coupons, donc les anciennes (moins généreuses) perdent de la valeur — et inversement.` },
        { label: 'Pourquoi ça compte', text: `Si tu gardes une obligation jusqu'à l'échéance, ces variations n'ont pas d'effet : tu récupères ton capital comme prévu. Elles comptent surtout si tu dois revendre avant, ou si tu passes par un fonds obligataire dont la valeur bouge au quotidien.` },
        { label: 'L’idée à retenir', text: `« Taux en hausse = prix des obligations existantes en baisse. » Ce n'est pas une anomalie, c'est la mécanique normale du marché obligataire. La connaître évite de paniquer en voyant un fonds obligataire baisser quand les taux montent.` },
      ] },
      { tag: 'PAGE 4 · LE FONDS EUROS', title: 'La porte d’entrée à capital garanti', blocks: [
        { label: 'Ce que c’est', text: `Le fonds euros de l'assurance-vie est un support investi en grande partie en obligations, avec une particularité précieuse : le capital est garanti. Les sommes versées (nettes de frais) ne peuvent pas baisser.` },
        { label: 'Le compromis', text: `Rendement modeste (souvent 2 à 3 % par an) en échange d'une sécurité quasi totale, et les intérêts annuels sont définitivement acquis. C'est la brique « sécurité » du patrimoine, pas son moteur.` },
        { label: 'À quoi il sert', text: `Idéal pour l'argent d'un projet à moyen terme (3-8 ans) qui doit absolument être là le jour J : mieux rémunéré qu'un compte courant, sans le risque de la Bourse. Il complète l'épargne de précaution (module 2) et le long terme investi (module 5).` },
      ] },
      { tag: 'PAGE 5 · LE RÉFLEXE KAPI', title: 'La brique stabilité', blocks: [
        { label: 'Pourquoi', text: `Comprendre les obligations, c'est cesser de croire qu'investir = actions uniquement. La stabilité a une valeur : elle permet de tenir dans les tempêtes et de ne pas vendre ses actions au pire moment.` },
        { label: 'Les repères', items: ['Action = posséder ; obligation = prêter contre un coupon', 'Les obligations amortissent : elles bougent moins que les actions', 'Prix des obligations et taux évoluent en sens inverse'] },
        { label: 'À retenir', items: ['Le fonds euros de l’assurance-vie : capital garanti, rendement modeste', 'Parfait pour un projet à moyen terme qui doit rester intact', 'C’est une brique de sécurité, jamais le moteur de performance'] },
      ] },
    ],
    questions: [
      { q: 'Quand tu achètes une obligation, tu…', opts: ['Deviens copropriétaire de l’entreprise', 'Prêtes ton argent contre un coupon régulier', 'Paries sur la baisse d’un cours'], good: 1, explain: `L'obligation est un prêt : l'émetteur te verse un intérêt (le coupon) puis rembourse le capital. Tu es créancier, pas propriétaire.` },
      { q: 'Dans un portefeuille, les obligations servent surtout à…', opts: ['Maximiser le rendement', 'Amortir les chocs (elles bougent moins que les actions)', 'Parier sur les cryptos'], good: 1, explain: `Elles varient moins violemment que les actions : c'est la brique de stabilité qui adoucit les à-coups.` },
      { q: 'Quand les taux d’intérêt montent, le prix des obligations déjà émises…', opts: ['Monte aussi', 'Baisse', 'Ne bouge jamais'], good: 1, explain: `Prix et taux évoluent en sens inverse : les anciennes obligations, moins généreuses, perdent de la valeur face aux nouvelles.` },
      { q: 'Le grand atout du fonds euros de l’assurance-vie est…', opts: ['Un rendement supérieur aux actions', 'Un capital garanti', 'Une exonération d’impôt immédiate'], good: 1, explain: `Le capital versé ne peut pas baisser et les intérêts sont acquis, en échange d'un rendement modeste (2-3 %).` },
      { q: 'Le fonds euros convient particulièrement à…', opts: ['L’argent d’un projet à moyen terme qui doit rester intact', 'Un pari spéculatif à court terme', 'Remplacer toute la Bourse'], good: 0, explain: `Pour un projet daté à 3-8 ans, il offre un peu de rendement sans le risque de perte de la Bourse : la brique sécurité.` },
    ],
  },

  '6.2': {
    title: 'Les SCPI',
    goal: `À la fin, tu comprendras la « pierre-papier » : investir dans l'immobilier sans acheter ni gérer, la mutualisation des loyers, et les vraies contreparties (frais d'entrée, liquidité, fiscalité).`,
    badge: 'Pierre-papier en poche',
    pages: [
      { tag: 'PAGE 1 · L’IMMO SANS L’ACHETER', title: 'L’idée de la pierre-papier', blocks: [
        { label: 'Le principe', text: `Investir dans l'immobilier sans acheter d'appartement, sans crédit et sans locataire à gérer : c'est l'idée des SCPI (sociétés civiles de placement immobilier). Tu achètes des parts d'une société qui possède des dizaines d'immeubles (bureaux, commerces, entrepôts…).` },
        { label: 'Des loyers mutualisés', text: `En échange, tu touches ta quote-part des loyers, généralement chaque trimestre. Un gestionnaire s'occupe de tout : achat des immeubles, location, travaux, encaissement. Toi, tu détiens des parts.` },
        { label: 'Accessible', text: `Le ticket d'entrée est bas : quelques centaines d'euros suffisent pour les premières parts. Pas besoin d'apport ni de dossier bancaire comme pour un achat immobilier classique.` },
      ] },
      { tag: 'PAGE 2 · LA MUTUALISATION', title: 'La vraie force du modèle', blocks: [
        { label: 'Le rendement courant', text: `Le rendement tourne souvent autour de 4 à 6 % par an (avant impôt), versé régulièrement. Rien n'est garanti : les loyers et la valeur des parts peuvent baisser selon le marché immobilier.` },
        { label: 'Un locataire qui part ne change rien', text: `Avec un studio, un locataire qui s'en va = 100 % des loyers en moins. Avec une SCPI, le risque est réparti sur des dizaines d'immeubles et des centaines de baux : un départ ou un impayé se dilue dans la masse.` },
        { label: 'L’image', text: `C'est la différence entre miser sur un seul cheval et posséder une petite part de toute l'écurie : aucune course perdue ne peut te ruiner. Ni gestion, ni travaux, ni assemblée de copropriété à gérer.` },
      ] },
      { tag: 'PAGE 3 · LES CONTREPARTIES', title: 'Ce qu’on ne dit pas assez', blocks: [
        { label: 'Frais d’entrée élevés', text: `La contrepartie est sérieuse : des frais de souscription souvent de 8 à 12 %, prélevés dès l'entrée. Concrètement, tes parts « valent » moins que ta mise le premier jour : il faut plusieurs années de loyers pour les amortir.` },
        { label: 'Liquidité limitée', text: `Contrairement à un ETF revendable en un clic, revendre ses parts de SCPI peut prendre des semaines ou des mois, selon la demande. Ce n'est pas de l'argent auquel on accède en urgence.` },
        { label: 'Fiscalité des loyers', text: `Les loyers perçus sont imposés comme des revenus fonciers : ils s'ajoutent à tes revenus et sont taxés selon ta tranche. Ça peut piquer quand ton taux d'imposition monte.` },
      ] },
      { tag: 'PAGE 4 · UN PLACEMENT DE LONG TERME', title: 'Le péage du début de l’autoroute', blocks: [
        { label: 'L’horizon minimal', text: `À cause des frais d'entrée et de la revente lente, la SCPI n'a de sens que sur le long terme : 8 à 10 ans minimum. En dessous, les frais mangent le rendement. Entrer, c'est comme passer un péage cher au début d'une longue autoroute — rentable seulement si tu vas loin.` },
        { label: 'Complément, pas cœur', text: `La pierre-papier se conçoit comme un complément de diversification, pas comme le cœur d'un patrimoine. On n'y met que de l'argent dont on est sûr de ne pas avoir besoin avant l'échéance longue.` },
        { label: 'Après les fondations', text: `Comme tout placement de ce module, elle vient après les fondations : budget, épargne de précaution, dettes chères éteintes, socle investi diversifié. La diversification est un étage, pas la base.` },
      ] },
      { tag: 'PAGE 5 · LE RÉFLEXE KAPI', title: 'Regarder les frais et l’horizon', blocks: [
        { label: 'Pourquoi', text: `Les SCPI sont souvent vendues sur leur rendement affiché, en passant vite sur les frais et l'illiquidité. Comprendre ces contreparties évite d'y mettre de l'argent dont on aura besoin trop tôt.` },
        { label: 'Les points à vérifier', items: ['Les frais d’entrée (souvent 8-12 %) et le temps nécessaire pour les amortir', 'La liquidité : combien de temps pour revendre ses parts ?', 'La fiscalité : loyers imposés comme revenus fonciers'] },
        { label: 'À retenir', items: ['SCPI = parts d’un parc immobilier géré, loyers mutualisés (~4-6 %)', 'Accessible dès quelques centaines d’euros, sans crédit ni gestion', 'Horizon 8-10 ans minimum : un complément, jamais le cœur du patrimoine'] },
      ] },
    ],
    questions: [
      { q: 'Une SCPI permet de…', opts: ['Acheter un appartement seul avec un crédit', 'Détenir des parts d’un parc immobilier géré, sans gestion', 'Spéculer à court terme sans frais'], good: 1, explain: `La « pierre-papier » : tu détiens des parts d'une société propriétaire de nombreux immeubles et touches ta part des loyers, sans rien gérer.` },
      { q: 'Le principal point de vigilance avant d’acheter des parts de SCPI est…', opts: ['Les frais d’entrée élevés et la liquidité limitée', 'L’obligation de gérer les locataires', 'L’interdiction de revendre avant 30 ans'], good: 0, explain: `Les frais (8-12 %) se paient dès l'entrée et la revente peut être lente : d'où l'horizon long.` },
      { q: 'La force des SCPI face à l’achat d’un studio, c’est…', opts: ['Un rendement toujours doublé', 'La mutualisation : le risque réparti sur des centaines de baux', 'L’absence totale d’impôt'], good: 1, explain: `Un locataire qui part se dilue dans la masse, au lieu de couper 100 % des loyers comme avec un seul studio.` },
      { q: 'Les loyers d’une SCPI sont imposés…', opts: ['Comme des revenus fonciers', 'Jamais', 'À un taux fixe de 5 %'], good: 0, explain: `Ils s'ajoutent à tes revenus et sont taxés selon ta tranche : la fiscalité pèse quand ton imposition monte.` },
      { q: 'L’horizon minimal recommandé pour une SCPI est d’environ…', opts: ['1 an', '8 à 10 ans', '6 mois'], good: 1, explain: `Frais d'entrée et revente lente imposent le long terme : en dessous, les frais mangent le rendement.` },
    ],
  },

  '6.3': {
    title: 'L’or et les valeurs refuges',
    goal: `À la fin, tu comprendras pourquoi l'or « protège » alors qu'il ne rapporte rien, les deux façons d'en détenir, et la dose raisonnable dans un patrimoine.`,
    badge: 'Refuge bien dosé',
    pages: [
      { tag: 'PAGE 1 · UN ACTIF À PART', title: 'Il ne produit rien', blocks: [
        { label: 'Ni coupon, ni loyer', text: `L'or a un statut à part : il ne verse ni intérêt, ni dividende, ni loyer. Un lingot posé dans un coffre pendant dix ans reste… un lingot. Contrairement à une action ou une obligation, il ne « travaille » pas.` },
        { label: 'Alors pourquoi en parle-t-on ?', text: `Parce que l'or joue un rôle que presque aucun autre actif ne joue : il rassure. Dans les crises, quand les marchés dévissent ou que l'inflation s'emballe, sa valeur a tendance à tenir, voire à monter.` },
        { label: 'La « valeur refuge »', text: `C'est ce qu'on appelle une valeur refuge : un actif vers lequel les investisseurs se réfugient quand ils ont peur. Sa force n'est pas de rapporter, mais de résister quand le reste chute.` },
      ] },
      { tag: 'PAGE 2 · DEUX FAÇONS D’EN DÉTENIR', title: 'Physique ou « papier »', blocks: [
        { label: 'L’or physique', text: `Pièces et lingots : tu possèdes le métal directement. Mais cela pose vite des questions de stockage (où le garder en sécurité ?), d'assurance, et de revente (les comptoirs prennent une marge à l'achat comme à la vente).` },
        { label: 'L’or « papier »', text: `Des produits adossés à de l'or (type ETC) s'achètent comme une action depuis un compte-titres, sans coffre-fort à la maison. Plus simple à acheter, revendre et conserver, sans les soucis logistiques du physique.` },
        { label: 'Le choix pratique', text: `Pour de petits montants et de la simplicité, la version cotée évite les marges des comptoirs et les problèmes de stockage. L'important reste la place qu'on donne à l'or, pas la forme choisie.` },
      ] },
      { tag: 'PAGE 3 · LA BONNE DOSE', title: 'Une petite poche, jamais le cœur', blocks: [
        { label: 'La vraie question', text: `La bonne question n'est pas « l'or va-t-il monter ? » (personne ne le sait) mais « quelle place lui donner ? ». La réponse des professionnels est constante : une petite poche.` },
        { label: 'Entre 0 et 10 %', text: `On parle généralement de 0 à 10 % du patrimoine, comme stabilisateur. Assez pour jouer son rôle d'amortisseur en cas de crise, pas assez pour plomber la croissance de long terme.` },
        { label: 'Le coût d’en mettre trop', text: `Un actif qui ne produit rien ne peut pas porter ton avenir financier. Si la moitié de ton patrimoine dort dans l'or, ce sont les intérêts composés de tout le reste que tu éteins. La protection a un coût d'opportunité : on la dose.` },
      ] },
      { tag: 'PAGE 4 · ASSURANCE, PAS MOTEUR', title: 'L’extincteur du portefeuille', blocks: [
        { label: 'Le rôle exact', text: `L'or est une assurance de portefeuille, pas un moteur de performance. Pense à un extincteur : il ne sert à rien 95 % du temps et ne « rapporte » jamais — mais le jour de l'incendie, tu es bien content de l'avoir.` },
        { label: 'Le comportement en crise', text: `Historiquement, quand les actions souffrent, l'or a souvent tenu ou progressé. Ce n'est pas une loi absolue, mais cette décorrélation partielle explique son intérêt comme stabilisateur.` },
        { label: 'Ne pas courir après', text: `Acheter de l'or en panique quand tout le monde en parle (donc quand il est déjà cher) est le piège classique. Comme le reste, sa place se décide à froid, dans une allocation, pas dans l'émotion du moment.` },
      ] },
      { tag: 'PAGE 5 · LE RÉFLEXE KAPI', title: 'Doser une assurance', blocks: [
        { label: 'Pourquoi', text: `L'or fascine et affole : sujet de tous les discours de crise. Comprendre son vrai rôle — stabiliser, pas enrichir — évite d'en mettre trop par peur ou d'y renoncer par principe.` },
        { label: 'Les repères', items: ['L’or ne produit rien : ni intérêt, ni dividende, ni loyer', 'Sa force : tenir quand le reste chute (valeur refuge)', 'Physique = stockage/revente compliqués ; version cotée = simple'] },
        { label: 'À retenir', items: ['Dose raisonnable : 0 à 10 % du patrimoine, jamais le cœur', 'C’est une assurance de portefeuille, pas un moteur de performance', 'Sa place se décide à froid, pas dans la panique'] },
      ] },
    ],
    questions: [
      { q: 'Pourquoi dit-on que l’or « protège » alors qu’il ne rapporte rien ?', opts: ['L’État garantit son prix', 'Sa valeur résiste souvent dans les crises et l’inflation', 'Il verse un coupon caché'], good: 1, explain: `L'or ne génère aucun revenu mais tend à conserver sa valeur quand les marchés paniquent : un rôle d'assurance, pas de moteur.` },
      { q: 'Un lingot ou une pièce d’or, sur dix ans dans un coffre…', opts: ['Verse des intérêts chaque année', 'Ne produit ni intérêt, ni dividende, ni loyer', 'Double automatiquement'], good: 1, explain: `L'or ne « travaille » pas : contrairement à une action ou une obligation, il ne génère aucun revenu.` },
      { q: 'La proportion d’or jugée raisonnable dans un patrimoine est…', opts: ['Au moins 50 %', 'Entre 0 et 10 %, comme poche de stabilité', '100 % en cas de crise'], good: 1, explain: `Une petite poche suffit à jouer l'amortisseur ; en mettre trop sacrifie la croissance des actifs productifs.` },
      { q: 'Détenir de l’or « papier » (type ETC) plutôt que physique permet…', opts: ['De garantir un gain', 'D’éviter les soucis de stockage et les marges des comptoirs', 'D’échapper à tout impôt'], good: 1, explain: `La version cotée s'achète et se revend comme une action, sans coffre-fort ni marges de comptoir.` },
      { q: 'Le meilleur moment pour décider de la place de l’or est…', opts: ['En pleine panique, quand tout le monde en achète', 'À froid, dans une allocation réfléchie', 'Jamais'], good: 1, explain: `Acheter dans la panique (donc au prix fort) est le piège classique : sa place se décide à froid, pas dans l'émotion.` },
    ],
  },

  '6.4': {
    title: 'Les cryptomonnaies',
    goal: `À la fin, tu comprendras ce qu'est la blockchain, la volatilité extrême des cryptos, la règle d'or du dimensionnement, et les précautions de sécurité et de fiscalité — sans conseil d'achat.`,
    badge: 'Crypto sous contrôle',
    pages: [
      { tag: 'PAGE 1 · LA BLOCKCHAIN', title: 'Comprendre avant de toucher', blocks: [
        { label: 'En deux phrases', text: `La blockchain, c'est un grand registre public, dupliqué sur des milliers d'ordinateurs, qui enregistre les transactions sans banque centrale ni intermédiaire. Le Bitcoin et l'Ethereum sont les deux locomotives de cet univers.` },
        { label: 'Des milliers de tokens', text: `Derrière ces locomotives, des milliers d'autres tokens dont l'immense majorité ne survivra pas. C'est une information capitale avant d'y mettre un euro : la plupart des projets disparaissent.` },
        { label: 'Comprendre d’abord', text: `Le titre du sujet le dit : comprendre avant de toucher. Investir dans quelque chose qu'on ne comprend pas, sur la seule foi d'un influenceur, est la première cause de pertes dans cet univers.` },
      ] },
      { tag: 'PAGE 2 · LA VOLATILITÉ', title: 'Rien ne bouge comme ça', blocks: [
        { label: 'Des chutes brutales', text: `Ce qu'il faut avoir vu pour comprendre : la volatilité. Des chutes de 50 % ou plus en quelques mois se sont déjà produites plusieurs fois, parfois suivies de rebonds spectaculaires. Aucun livret, aucune action du CAC 40 ne bouge ainsi.` },
        { label: 'Se préparer au -80 %', text: `La crypto peut avoir une place dans un patrimoine, mais une place calibrée pour survivre à un −80 %. Si un tel effondrement changerait ta vie, la position est trop grosse — quel que soit l'enthousiasme du moment.` },
        { label: 'Pas un placement de projet', text: `Cette volatilité disqualifie la crypto pour tout argent daté (loyer, apport, urgence). On ne place pas ici ce dont on aura besoin : uniquement de l'argent qu'on peut oublier — et perdre.` },
      ] },
      { tag: 'PAGE 3 · LA RÈGLE D’OR', title: 'Le dimensionnement, sans exception', blocks: [
        { label: 'Maximum 5 à 10 %', text: `La règle d'or, sans exception : au maximum 5 à 10 % de ton patrimoine, et uniquement de l'argent que tu peux te permettre de perdre à 100 %. La seule protection fiable contre la volatilité, c'est la taille de la position.` },
        { label: 'La question à se poser', text: `Avant d'acheter, une seule question : « si ça tombe à zéro demain matin, est-ce que ma vie change ? » Si la réponse est oui, la position est trop grosse, peu importe à quel point le projet semble prometteur.` },
        { label: 'Après les fondations', text: `Comme tout le module, la crypto vient tout en haut de la pyramide : après le budget, la précaution, les dettes éteintes et un socle diversifié. Jamais avant, jamais à la place.` },
      ] },
      { tag: 'PAGE 4 · SÉCURITÉ ET IMPÔTS', title: 'Les précautions concrètes', blocks: [
        { label: 'Plateforme enregistrée', text: `Côté pratique : passe par une plateforme enregistrée auprès de l'AMF (statut PSAN), dont la liste est publique. Absence de vérification d'identité et rendement « garanti » sont les deux drapeaux rouges classiques des plateformes frauduleuses.` },
        { label: 'Sécuriser son compte', text: `Active la double authentification (2FA), comme vu au module « arnaques ». Méfie-toi des promesses de rendement « garanti » en crypto (« staking à 18 % assuré ») : c'est l'uniforme préféré des escrocs.` },
        { label: 'La fiscalité', text: `Côté impôts, les plus-values réalisées lors d'une conversion en euros subissent la flat tax de 30 %. Tant que tu ne convertis pas en euros, il n'y a en général pas d'imposition : elle se déclenche à la sortie.` },
      ] },
      { tag: 'PAGE 5 · LE RÉFLEXE KAPI', title: 'Petite poche, yeux ouverts', blocks: [
        { label: 'Pourquoi', text: `La crypto est le terrain de jeu favori du battage médiatique et des arnaques. Comprendre la blockchain, la volatilité et la règle du dimensionnement transforme un pari aveugle en décision maîtrisée — ou en refus éclairé.` },
        { label: 'Les règles à graver', items: ['Comprendre avant de toucher : la majorité des tokens disparaissent', 'Max 5-10 % du patrimoine, et seulement ce qu’on peut perdre à 100 %', 'Plateforme enregistrée AMF (PSAN) + double authentification'] },
        { label: 'À retenir', items: ['Volatilité extrême : se préparer à un −80 %, pas d’argent daté ici', 'Rendement « garanti » en crypto = signal d’arnaque', 'Plus-values converties en euros : flat tax de 30 % à la sortie'] },
      ] },
    ],
    questions: [
      { q: 'La blockchain, c’est…', opts: ['Un compte d’épargne garanti par l’État', 'Un registre public sans banque ni intermédiaire', 'Un fonds euros'], good: 1, explain: `Un grand registre dupliqué sur des milliers d'ordinateurs, qui enregistre les transactions sans intermédiaire central.` },
      { q: 'La règle d’or avant d’investir en crypto est…', opts: ['Emprunter pour investir plus', 'Max 5-10 % du patrimoine, et seulement ce qu’on peut perdre à 100 %', 'Tout miser sur un petit token'], good: 1, explain: `La seule protection fiable contre la volatilité est le dimensionnement : une poche assez petite pour qu'un effondrement total ne change rien.` },
      { q: 'La volatilité des cryptos, c’est…', opts: ['Comparable à un Livret A', 'Des chutes de 50 % ou plus déjà vues plusieurs fois', 'Inexistante'], good: 1, explain: `Aucun livret ni action du CAC 40 ne bouge ainsi : il faut calibrer sa position pour survivre à un −80 %.` },
      { q: 'Avant d’ouvrir un compte sur une plateforme crypto, tu vérifies…', opts: ['Qu’elle est enregistrée auprès de l’AMF (PSAN)', 'Qu’elle promet 15 % garantis', 'Qu’elle n’exige aucune identité'], good: 0, explain: `Le statut PSAN impose sécurité et transparence ; rendement « garanti » et absence d'identité sont des drapeaux rouges.` },
      { q: 'Les plus-values crypto converties en euros sont soumises à…', opts: ['Aucune imposition', 'La flat tax de 30 %', 'Un taux de 75 %'], good: 1, explain: `La flat tax de 30 % s'applique à la conversion en euros ; tant qu'on ne convertit pas, il n'y a en général pas d'impôt.` },
    ],
  },
}
