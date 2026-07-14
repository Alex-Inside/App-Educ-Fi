// Module 5 — Investir : premiers pas
// Contenu pédagogique FinPath (18-25 ans)

export const CONTENT = {
  "5.1": {
    decouverte: [
      "Ton argent qui dort sur un compte courant perd de la valeur sans que tu t'en rendes compte. La coupable s'appelle l'inflation : les prix montent un peu chaque année, donc avec la même somme, tu achètes de moins en moins. Avec une inflation d'environ 2 % par an, 1 000 € laissés sur un compte pendant 10 ans ne « valent » plus qu'environ 820 € en pouvoir d'achat.",
      "Investir, c'est mettre ton argent au travail pour qu'il rapporte plus que l'inflation. Mais il y a une règle d'or : rendement et risque vont toujours ensemble. Un livret rapporte peu mais ne baisse jamais ; les actions rapportent davantage sur le long terme (environ 7 % par an en moyenne historique pour les actions mondiales) mais peuvent fortement baisser à court terme.",
      "Sur 20 ans, la différence est énorme : 100 € par mois sur un livret à 2 % donnent environ 29 500 €, contre environ 52 000 € à 7 % en actions. Mais attention à l'ordre des étapes : on n'investit que l'argent dont on n'a pas besoin avant 5 à 10 ans, et seulement après avoir constitué son épargne de précaution.",
    ],
    casConcret: [
      "Yasmine, 23 ans, premier CDI à 1 900 € net, a déjà 3 000 € d'épargne de précaution sur son Livret A, soit environ deux mois de dépenses. Elle peut mettre 150 € de côté chaque mois. Elle décide d'en garder 50 € pour gonfler son livret et d'investir 100 € en actions mondiales, un argent dont elle sait qu'elle n'aura pas besoin avant ses 35 ans.",
      "Si la moyenne historique d'environ 7 % par an se maintient, ses 100 € mensuels pourraient représenter environ 17 000 € dans 10 ans, dont environ 5 000 € de gains. Sur son livret à 2 %, la même somme n'aurait produit qu'environ 1 300 € d'intérêts. Rien n'est garanti, mais le temps joue pour elle.",
    ],
    synthese: [
      "L'inflation grignote l'argent qui dort : il perd du pouvoir d'achat chaque année.",
      "Rendement et risque vont toujours ensemble : pas de miracle.",
      "Actions mondiales : environ 7 % par an en moyenne sur très longue période.",
      "On investit uniquement l'argent inutile avant 5 à 10 ans.",
      "D'abord l'épargne de précaution, ensuite l'investissement.",
    ],
    quiz: [
      {
        question: "Pourquoi laisser 5 000 € sur un compte courant pendant 10 ans est-il un problème ?",
        options: [
          "La banque peut confisquer l'argent au bout de 10 ans",
          "L'inflation fait perdre du pouvoir d'achat : la somme achète de moins en moins",
          "Le compte courant est interdit au-delà de 3 000 €",
          "Ce n'est pas un problème, l'argent y est parfaitement protégé",
        ],
        correct: 1,
        explication: "Avec une inflation d'environ 2 % par an, les prix montent pendant que ta somme reste figée. Au bout de 10 ans, tes 5 000 € achètent l'équivalent d'environ 4 100 € d'aujourd'hui. Le chiffre sur le compte ne bouge pas, mais sa valeur réelle fond.",
        explicationAlt: "Imagine un glaçon posé sur la table : il ne disparaît pas d'un coup, il fond doucement. L'inflation fait pareil avec ton argent immobile. Le montant affiché reste le même, mais ce que tu peux acheter avec rétrécit année après année.",
      },
      {
        question: "Tu as 2 000 € et zéro épargne de précaution. Tu veux investir en actions pour un projet dans 2 ans. Quel est le souci ?",
        options: [
          "Aucun, 2 ans suffisent largement pour investir en actions",
          "Le montant est trop faible pour investir",
          "Les actions sont réservées aux plus de 30 ans",
          "Double erreur : pas d'épargne de précaution, et un horizon trop court pour les actions",
        ],
        correct: 3,
        explication: "Les actions peuvent baisser fortement sur 2 ans, et sans matelas de sécurité, le moindre imprévu t'obligerait à vendre au pire moment. On constitue d'abord son épargne de précaution, puis on n'investit que l'argent inutile avant 5 à 10 ans.",
        explicationAlt: "C'est comme partir en randonnée en montagne sans eau et avec un orage annoncé dans deux heures : ce n'est pas la randonnée le problème, c'est le timing et l'absence de réserve. L'investissement en actions demande un horizon long et un filet de sécurité déjà en place.",
      },
    ],
  },
  "5.2": {
    decouverte: [
      "Une action, c'est tout simplement un petit morceau d'une entreprise. En acheter une, c'est devenir copropriétaire : si l'entreprise prospère, ta part prend de la valeur et tu peux toucher une partie des bénéfices, le dividende. Si elle va mal, ta part en perd. Détenir une seule action, c'est donc miser sur une seule entreprise : risqué.",
      "Pour mesurer la santé d'un marché entier, on utilise des indices : des paniers d'actions. Le CAC 40 regroupe 40 grandes entreprises françaises. Le MSCI World va beaucoup plus loin : environ 1 400 entreprises réparties dans 23 pays développés. Quand tu entends « la Bourse monte », c'est en général un indice qui monte.",
      "Et c'est là qu'arrive l'ETF, parfois appelé tracker : un fonds qui se contente de copier un indice, automatiquement. Un ETF MSCI World te rend copropriétaire d'environ 1 400 entreprises d'un coup, pour des frais minimes, souvent 0,2 à 0,4 % par an. Diversification maximale, sans avoir à deviner quelles seront les « bonnes » actions.",
    ],
    casConcret: [
      "Théo, 21 ans, alternant en informatique, hésite : mettre ses 1 000 € d'économies sur l'action d'une marque qu'il adore, ou sur un ETF MSCI World. Il fait le calcul du risque : avec l'action seule, son sort dépend d'une unique entreprise. Avec l'ETF, ses 1 000 € sont répartis sur environ 1 400 entreprises dans 23 pays, pour environ 3 € de frais par an.",
      "Deux ans plus tard, la marque qu'il adorait a perdu 35 % après un scandale, tandis que l'indice mondial a progressé. Son ETF a encaissé la chute de cette entreprise sans broncher : elle ne pesait qu'une fraction du panier. Théo a compris la force de la diversification.",
    ],
    synthese: [
      "Une action = un morceau d'entreprise, avec ses succès et ses échecs.",
      "Un indice = un panier qui mesure tout un marché, comme le CAC 40.",
      "Le MSCI World : environ 1 400 entreprises dans 23 pays développés.",
      "Un ETF copie un indice automatiquement, pour environ 0,2 à 0,4 % de frais par an.",
      "Diversifier, c'est ne jamais dépendre d'une seule entreprise.",
    ],
    quiz: [
      {
        question: "Qu'est-ce qu'un ETF qui réplique le MSCI World ?",
        options: [
          "Un fonds qui copie un indice d'environ 1 400 entreprises de 23 pays, pour des frais minimes",
          "Une action d'une grande entreprise américaine",
          "Un livret d'épargne international garanti par l'État",
          "Un panier des 40 plus grandes entreprises françaises",
        ],
        correct: 0,
        explication: "Un ETF se contente de répliquer un indice. Avec le MSCI World, un seul achat te rend copropriétaire d'environ 1 400 entreprises réparties dans 23 pays développés, pour des frais souvent compris entre 0,2 et 0,4 % par an. C'est la diversification en un clic.",
        explicationAlt: "Plutôt que d'acheter un fruit en espérant qu'il soit bon, tu achètes le panier entier du marché : si une pomme est pourrie, les 1 399 autres fruits compensent. L'ETF, c'est ce panier mondial, vendu presque à prix coûtant.",
      },
      {
        question: "Pourquoi un débutant a-t-il intérêt à préférer un ETF mondial plutôt que 2 ou 3 actions choisies lui-même ?",
        options: [
          "Parce que les actions individuelles sont interdites aux débutants",
          "Parce qu'un ETF garantit un gain chaque année",
          "Parce que l'ETF diversifie sur des centaines d'entreprises sans devoir deviner les gagnantes",
          "Parce que les ETF ne baissent jamais",
        ],
        correct: 2,
        explication: "Même les professionnels se trompent souvent en choisissant des actions. Avec 2 ou 3 titres, une seule mauvaise surprise plombe tout ton portefeuille. L'ETF répartit le risque sur des centaines d'entreprises : tu captes la performance moyenne du marché sans pari individuel.",
        explicationAlt: "Choisir 3 actions, c'est parier sur 3 chevaux dans une course de 1 400. L'ETF, c'est parier sur la course elle-même : peu importe quel cheval gagne, tu profites de la progression d'ensemble. Attention quand même : le panier peut baisser, rien n'est garanti.",
      },
    ],
  },
  "5.3": {
    decouverte: [
      "Quand tu investis en Bourse en France, deux enveloppes principales s'offrent à toi : le PEA (plan d'épargne en actions) et le CTO (compte-titres ordinaire). La différence majeure, c'est la fiscalité, autrement dit ce que tu paies à l'État sur tes gains.",
      "Sur un CTO, tes gains subissent la flat tax de 30 % : 12,8 % d'impôt plus 17,2 % de prélèvements sociaux. Sur un PEA de plus de 5 ans, l'impôt disparaît : il ne reste que les prélèvements sociaux de 17,2 %. Sur 10 000 € de gains, c'est environ 1 280 € d'économie. Le PEA est plafonné à 150 000 € de versements, largement suffisant pour démarrer.",
      "Le détail qui change tout : c'est la date d'ouverture du PEA qui lance le chrono des 5 ans, pas la date de tes versements. Ouvrir un PEA aujourd'hui avec 10 €, c'est faire tourner le compteur pendant que tu te formes. Le CTO, lui, sert pour ce qui n'est pas éligible au PEA, comme la plupart des actions américaines en direct.",
    ],
    casConcret: [
      "Clara, 20 ans, étudiante en licence, n'a presque rien à investir. Sur les conseils de sa cousine, elle ouvre quand même un PEA en ligne avec 10 €, sans frais d'ouverture. Le chrono fiscal démarre. Pendant ses études, elle n'y touche presque pas ; à 23 ans, en poste, elle commence à verser 150 € par mois sur un ETF mondial.",
      "À 27 ans, son PEA a déjà plus de 5 ans : si elle retire ses gains, elle ne paie que 17,2 % de prélèvements sociaux au lieu de 30 %. Son ami Hugo, qui a attendu son premier salaire à 24 ans pour ouvrir le sien, devra patienter jusqu'à 29 ans pour le même avantage. Les 10 € de Clara lui ont fait gagner 4 ans.",
    ],
    synthese: [
      "CTO : gains taxés à la flat tax de 30 %.",
      "PEA après 5 ans : seulement 17,2 % de prélèvements sociaux sur les gains.",
      "Plafond du PEA : 150 000 € de versements.",
      "C'est la date d'ouverture qui lance le chrono des 5 ans.",
      "Ouvre ton PEA tôt, même avec 10 €.",
    ],
    quiz: [
      {
        question: "Quel est l'avantage fiscal d'un PEA de plus de 5 ans par rapport à un CTO ?",
        options: [
          "Les gains sont totalement exonérés, zéro prélèvement",
          "Il n'y a aucun avantage, la fiscalité est identique",
          "Les gains ne supportent que 17,2 % de prélèvements sociaux, au lieu de la flat tax de 30 %",
          "L'avantage ne s'applique qu'au-delà de 150 000 € de gains",
        ],
        correct: 2,
        explication: "Après 5 ans, les gains retirés d'un PEA échappent à l'impôt sur le revenu : il ne reste que les prélèvements sociaux de 17,2 %. Sur un CTO, la flat tax de 30 % s'applique. Sur 10 000 € de gains, l'écart représente environ 1 280 €.",
        explicationAlt: "Imagine deux péages sur la même autoroute : le CTO te prend 30 € sur 100 € de gains, le PEA mûr seulement 17,20 €. Même trajet, même destination, mais presque 13 € économisés à chaque passage. Sur des années d'investissement, ça chiffre vite.",
      },
      {
        question: "Tu es étudiant avec seulement 10 € à investir. Concernant le PEA, quel est le bon réflexe ?",
        options: [
          "Attendre d'avoir au moins 1 000 € pour que ça vaille le coup",
          "L'ouvrir maintenant avec 10 € : la date d'ouverture lance le chrono fiscal des 5 ans",
          "Ouvrir plutôt un CTO, plus avantageux pour les petites sommes",
          "Attendre le premier CDI, le PEA est réservé aux salariés",
        ],
        correct: 1,
        explication: "Le compteur des 5 ans démarre à l'ouverture du PEA, pas au premier gros versement. En l'ouvrant aujourd'hui avec 10 €, ton avantage fiscal mûrit pendant tes études. Le PEA est accessible à tout majeur résident fiscal français, étudiant compris.",
        explicationAlt: "C'est comme planter un arbre : ce n'est pas la taille de la graine qui compte, c'est la date de plantation. Tes 10 € plantent l'arbre fiscal aujourd'hui ; dans 5 ans, il sera mûr exactement au moment où tu auras de vraies sommes à investir.",
      },
    ],
  },
  "5.4": {
    decouverte: [
      "La méthode la plus simple et la plus robuste pour investir s'appelle le DCA, pour « dollar cost averaging » : verser automatiquement le même montant chaque mois, par exemple 100 €, quoi qu'il arrive. Quand les marchés baissent, tes 100 € achètent plus de parts ; quand ils montent, moins. Résultat : tu lisses les hauts et les bas, et surtout tu neutralises tes émotions.",
      "Car l'ennemi numéro un de l'investisseur, c'est lui-même. La panique pousse à vendre quand ça baisse, l'euphorie à acheter quand tout est déjà cher. Retiens ceci : une baisse n'est une perte que si tu vends. Historiquement, les marchés mondiaux ont toujours fini par dépasser leurs sommets précédents, mais parfois après plusieurs années. D'où l'importance d'un horizon long.",
      "Les erreurs classiques du débutant : choisir soi-même quelques actions « prometteuses » (le stock-picking), essayer de deviner le bon moment pour acheter ou vendre (le market timing), payer des frais élevés qui rongent la performance, ou tout miser sur la mode du moment. La recette ennuyeuse mais efficace : un ETF mondial, un versement programmé, et du temps.",
    ],
    casConcret: [
      "Mehdi, 25 ans, développeur freelance, programme un virement automatique de 200 € par mois vers un ETF monde sur son PEA. Six mois plus tard, les marchés chutent d'environ 20 %. Son portefeuille affiche moins 800 €. Son réflexe : vendre tout. Il se souvient alors de la règle : une baisse n'est une perte que si on vend. Il ne touche à rien ; son virement continue et achète des parts soldées.",
      "Dix-huit mois plus tard, les marchés ont retrouvé puis dépassé leur niveau d'avant la chute. Les parts achetées pendant la baisse sont ses plus rentables : son portefeuille affiche environ +9 % au global. S'il avait vendu au plus bas, il aurait transformé une baisse passagère en perte définitive de 800 €.",
    ],
    synthese: [
      "DCA : le même montant investi automatiquement chaque mois.",
      "Le versement programmé lisse les hauts et les bas, et neutralise les émotions.",
      "Une baisse n'est une perte que si tu vends.",
      "Horizon long terme obligatoire : pense en années, pas en semaines.",
      "Évite stock-picking débutant, market timing, frais élevés et placements à la mode.",
    ],
    quiz: [
      {
        question: "En quoi consiste la méthode DCA (versement programmé) ?",
        options: [
          "Investir une grosse somme uniquement quand les marchés sont au plus bas",
          "Vendre dès que le portefeuille perd 10 %",
          "Changer d'ETF tous les mois selon l'actualité",
          "Investir automatiquement le même montant chaque mois, que les marchés montent ou baissent",
        ],
        correct: 3,
        explication: "Le DCA consiste à verser une somme fixe à intervalle régulier, sans se poser de question. Tu achètes mécaniquement plus de parts quand c'est bas et moins quand c'est haut, ce qui lisse ton prix d'achat. Surtout, tu retires l'émotion de l'équation.",
        explicationAlt: "C'est l'abonnement de salle de sport de l'investissement : tu n'attends pas d'être motivé pour y aller, c'est programmé. La régularité bat le talent. Le virement part tout seul chaque mois, et c'est précisément ce pilote automatique qui fait la performance sur la durée.",
      },
      {
        question: "Ton portefeuille d'ETF monde perd 25 % en trois mois et tu n'as pas besoin de cet argent avant 15 ans. Que faire ?",
        options: [
          "Tout vendre immédiatement pour limiter la casse",
          "Ne rien changer : continuer les versements, une baisse n'est une perte que si on vend",
          "Tout transférer sur un livret en attendant que ça remonte, puis racheter au bon moment",
          "Emprunter pour investir davantage et se refaire vite",
        ],
        correct: 1,
        explication: "Avec un horizon de 15 ans, une baisse est un épisode normal, pas une catastrophe. Vendre transformerait une moins-value temporaire en perte définitive. En continuant tes versements, tu achètes des parts moins chères. Attendre « le bon moment » pour racheter, c'est du market timing, et presque personne n'y arrive.",
        explicationAlt: "Imagine que le prix de ton appartement baisse de 25 % : tu ne le vendrais pas en panique, tu continuerais d'y vivre en attendant des jours meilleurs. Tes ETF, c'est pareil : la valeur affichée fluctue, mais seule compte la valeur le jour, lointain, où tu vendras.",
      },
    ],
  },

  "5.5": {
    decouverte: [
      "Les intérêts composés, c'est l'idée la plus puissante de toute la finance personnelle : tes intérêts produisent eux-mêmes des intérêts. Année 1, ton argent rapporte. Année 2, ton argent ET les intérêts de l'année 1 rapportent. Et ainsi de suite. Au début, c'est invisible. Sur la durée, c'est un effet boule de neige qui devient spectaculaire.",
      "Un exemple : 100 € par mois placés à 5 % par an. Au bout de 10 ans, tu as versé 12 000 € et tu détiens environ 15 500 €. Au bout de 30 ans, tu as versé 36 000 €… et tu détiens environ 83 000 €. Les intérêts ont généré plus que tes propres versements. La machine travaille pendant que tu dors.",
      "La grande leçon : la durée bat le taux. Commencer à 20 ans avec de petites sommes rapporte souvent plus que commencer à 35 ans avec de grosses. Pour estimer vite, utilise la règle des 72 : divise 72 par le taux annuel pour connaître le nombre d'années nécessaires pour doubler ton capital. À 6 %, ton argent double environ tous les 12 ans.",
    ],
    casConcret: [
      "Jade et Maxime ont 22 ans. Jade commence tout de suite : 80 € par mois sur un placement à environ 5 % par an. Maxime se dit qu'il commencera « plus tard, quand il gagnera mieux » et démarre à 32 ans avec 160 € par mois, soit le double, sur le même placement.",
      "À 62 ans, Jade a versé 38 400 € en 40 ans : son capital atteint environ 122 000 €. Maxime a versé 57 600 € en 30 ans, presque 20 000 € de plus que Jade… mais son capital plafonne autour de 133 000 €. Les dix années d'avance de Jade ont presque compensé un effort deux fois moindre. Chaque année de jeunesse vaut de l'or composé.",
    ],
    synthese: [
      "Intérêts composés : tes intérêts produisent eux-mêmes des intérêts, effet boule de neige.",
      "Au début c'est invisible ; sur 20-40 ans, c'est spectaculaire.",
      "La durée bat le taux : commencer tôt avec peu vaut mieux qu'attendre.",
      "Règle des 72 : 72 divisé par le taux donne les années pour doubler.",
      "La régularité (virement mensuel automatique) est ton meilleur allié.",
    ],
    quiz: [
      {
        question: "Selon la règle des 72, en combien de temps ton argent double-t-il environ à 6 % par an ?",
        options: ["Environ 12 ans", "Environ 6 ans", "Environ 24 ans", "Environ 72 ans"],
        correct: 0,
        explication: "La règle des 72 consiste à diviser 72 par le taux annuel : 72 divisé par 6 égale 12 ans pour doubler le capital. C'est une approximation très pratique pour comparer des placements de tête, sans calculatrice.",
        explicationAlt: "Retiens le réflexe : 72 divisé par le taux. À 6 %, ça donne 12 ans ; à 3 %, 24 ans ; à 9 %, 8 ans. Comme une recette mentale, ce raccourci te permet d'estimer en deux secondes la vitesse de la boule de neige selon le taux.",
      },
      {
        question: "Pourquoi dit-on que « la durée bat le taux » avec les intérêts composés ?",
        options: [
          "Parce que les taux baissent toujours avec le temps",
          "Parce que les banques récompensent la fidélité",
          "Parce que chaque année supplémentaire fait travailler les intérêts des intérêts : commencer tôt change tout",
          "Parce qu'après 10 ans l'épargne devient bloquée",
        ],
        correct: 2,
        explication: "Plus l'argent reste placé longtemps, plus les intérêts générés produisent eux-mêmes des intérêts, et la croissance s'accélère sur les dernières années. C'est pourquoi commencer à 20 ans avec de petites sommes bat souvent un démarrage tardif avec de grosses sommes.",
        explicationAlt: "Imagine une boule de neige qui descend une pente : ce qui compte le plus, ce n'est pas sa taille de départ, c'est la longueur de la pente. Une petite boule lancée tout en haut (épargner jeune) finit plus grosse qu'une grosse boule lancée à mi-pente (commencer tard).",
      },
    ],
  },
}
