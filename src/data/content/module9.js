// Module 9 — Niveau expert
// Contenu pédagogique FinPath : prise de connaissance, cas concret, synthèse, quiz.

export const CONTENT = {
  "9.1": {
    decouverte: [
      "Un produit dérivé, c'est un contrat dont la valeur « dérive » d'un autre actif — une action, un indice, une matière première — qu'on appelle le sous-jacent. Tu n'achètes pas la chose elle-même : tu achètes un droit ou un engagement qui porte sur elle. Les deux grands classiques : les options et les futures.",
      "Une option, c'est un droit (pas une obligation) d'acheter — un call — ou de vendre — un put — à un prix fixé d'avance, jusqu'à une date donnée. Tu paies ce droit (la prime), et ta perte maximale est connue d'avance : la prime, justement. Un future, c'est plus engageant : un contrat ferme où les deux parties DEVRONT exécuter la transaction à l'échéance, quoi qu'il arrive au prix.",
      "Les dérivés ont deux visages. Chez les professionnels, ils servent d'assurance : une compagnie aérienne fige le prix de son kérosène, un gérant protège son portefeuille contre un krach — c'est la couverture. Chez les particuliers, ils servent surtout à spéculer avec effet de levier : contrôler une grosse position avec une petite mise. Et le levier est parfaitement symétrique — il multiplie les gains ET les pertes à l'identique.",
    ],
    casConcret: [
      "Romain, 27 ans, en CDI dans la tech, veut « dynamiser » son épargne. Avec 500 €, il achète des calls sur une action à effet de levier 10 : si l'action prend 5 %, sa position gagne environ 50 %, soit 250 €. Séduisant. Mais l'action perd 6 % en deux semaines — et ses options, rongées aussi par le temps qui passe, expirent sans valeur : les 500 € sont intégralement perdus.",
      "Son erreur n'était pas d'avoir eu tort sur la direction — ça arrive aux meilleurs — mais de n'avoir pas compris qu'avec une option, on peut avoir raison trop tard : le temps joue contre l'acheteur. À titre de comparaison, les mêmes 500 € sur son ETF Monde auraient perdu environ 30 € sur la même période… et tout récupéré au rebond suivant.",
    ],
    synthese: [
      "Un dérivé tire sa valeur d'un sous-jacent : on n'achète pas la chose, mais un contrat dessus.",
      "Option = droit (perte max : la prime) ; future = engagement ferme.",
      "Usage pro : la couverture (une assurance). Usage particulier : trop souvent la spéculation.",
      "Le levier multiplie gains ET pertes, exactement dans les mêmes proportions.",
      "Avec les options, le temps qui passe joue contre l'acheteur.",
    ],
    quiz: [
      {
        question: "Quelle est la différence fondamentale entre une option et un future ?",
        options: [
          "L'option est gratuite, le future est payant",
          "L'option donne un droit sans obligation, le future engage fermement les deux parties",
          "L'option est réservée aux banques, le future aux particuliers",
          "Il n'y en a pas, ce sont deux noms du même produit",
        ],
        correct: 1,
        explication: "L'acheteur d'une option paie une prime pour obtenir un droit qu'il exercera seulement si c'est avantageux : sa perte maximale est la prime. Le future, lui, est un engagement ferme et symétrique : à l'échéance, les deux parties doivent exécuter, quel que soit le prix du sous-jacent.",
        explicationAlt: "L'option, c'est des arrhes sur une maison : si tu changes d'avis, tu perds les arrhes, point. Le future, c'est un compromis de vente signé sans condition : le jour J, tu DOIS acheter au prix convenu, même si le quartier s'est effondré entre-temps.",
      },
      {
        question: "Avec un levier de 10, ton sous-jacent baisse de 8 %. Ta position fait…",
        options: [
          "−8 %, le levier ne joue qu'à la hausse",
          "−18 %, le levier ajoute 10 points",
          "Environ −80 %, le levier multiplie aussi les pertes",
          "0 %, le levier protège le capital",
        ],
        correct: 2,
        explication: "Le levier est un multiplicateur symétrique : ×10 sur les gains comme sur les pertes. Une variation adverse de 8 % devient une perte d'environ 80 %, et à −10 % la position est intégralement liquidée. C'est l'arithmétique que beaucoup découvrent trop tard.",
        explicationAlt: "Le levier, c'est conduire à 200 km/h : tu arrives plus vite quand la route est droite, et le moindre virage mal négocié est fatal. La route des marchés n'est jamais droite très longtemps — voilà tout le problème.",
      },
    ],
  },

  "9.2": {
    decouverte: [
      "Le CFD (contract for difference) est le produit le plus agressivement marketé auprès des jeunes : tu paries sur la variation d'un cours — hausse ou baisse — sans jamais détenir l'actif, avec un levier élevé. La réalité mesurée par l'AMF est brutale : environ 75 % des comptes de particuliers y perdent de l'argent. Entre le spread (l'écart prélevé à chaque ordre), les frais overnight qui s'accumulent et le levier qui liquide les positions au moindre soubresaut, le jeu est structurellement défavorable.",
      "Les turbos et warrants ajoutent un piège supplémentaire : la barrière désactivante. Si le sous-jacent touche un certain seuil — même une seconde, même en pleine nuit — le produit est détruit et ta mise est perdue, définitivement. Pas de rebond possible : tu peux avoir raison sur la tendance et tout perdre sur un pic de volatilité.",
      "Les produits structurés, eux, portent costume et cravate : vendus en agence comme des « fonds à formule » au capital « protégé ». Lis les conditions : la protection saute souvent si l'indice baisse de plus de X %, le rendement est plafonné, et la complexité de la formule cache surtout des frais. Un réflexe les désarme tous : exiger et lire le DIC — le document d'informations clés, obligatoire — qui affiche noir sur blanc le niveau de risque (de 1 à 7) et les scénarios de performance, y compris défavorables.",
    ],
    casConcret: [
      "Mélissa, 24 ans, ouvre un compte CFD après une pub prometteuse : 800 € de dépôt, levier 20 sur l'or et le Nasdaq. Premier mois : +210 €, l'euphorie. Deuxième mois : deux nuits agitées sur les marchés américains et des appels de marge successifs liquident ses positions une à une. Solde final : 64 €. Sur le relevé, elle découvre l'ampleur des frais : 9 € de spread et de frais overnight par position et par semaine en moyenne.",
      "Au même moment, son conseiller bancaire propose à son frère un produit structuré « capital protégé, objectif 6 %/an ». Le DIC, exigé sur l'insistance de Mélissa, révèle : risque 5/7, protection annulée si l'indice perd plus de 30 %, gains plafonnés à 6 % même si le marché fait +20 %, et 3,2 % de frais d'entrée. Il décline — l'ETF sans formule restait imbattable.",
    ],
    synthese: [
      "CFD : ~75 % des particuliers perdants (études AMF) — le jeu est structurellement défavorable.",
      "Spread + frais overnight + levier : l'érosion est permanente, même sans se tromper.",
      "Turbos/warrants : une barrière touchée une seconde = mise détruite, définitivement.",
      "Produit structuré : « capital protégé » a presque toujours des conditions — lis-les.",
      "Réflexe universel : exiger le DIC et son échelle de risque de 1 à 7.",
    ],
    quiz: [
      {
        question: "Que disent les études de l'AMF sur les particuliers qui tradent des CFD ?",
        options: [
          "Environ 75 % d'entre eux perdent de l'argent",
          "La majorité devient rentable au bout d'un an",
          "Les gains moyens dépassent ceux des ETF",
          "Seuls 10 % perdent, les autres gagnent peu",
        ],
        correct: 0,
        explication: "Les études successives de l'AMF (et les avertissements obligatoires des courtiers eux-mêmes) convergent : environ trois quarts des comptes de particuliers perdent de l'argent sur les CFD. Spread, frais overnight et levier construisent un jeu où la durée joue contre le joueur.",
        explicationAlt: "Regarde le bandeau réglementaire affiché sur les sites de CFD eux-mêmes : « 74-78 % des comptes d'investisseurs particuliers perdent de l'argent ». Quand le casino est obligé d'afficher que la maison gagne, le plus rationnel est de ne pas s'asseoir à la table.",
      },
      {
        question: "La « barrière désactivante » d'un turbo, c'est…",
        options: [
          "Un mécanisme qui bloque les pertes à -10 %",
          "Une option de sécurité activable par l'investisseur",
          "Une commission prélevée à la revente",
          "Un seuil qui, s'il est touché ne serait-ce qu'une seconde, détruit le produit et ta mise",
        ],
        correct: 3,
        explication: "Si le sous-jacent touche la barrière — même brièvement, même hors des heures où tu regardes — le turbo est désactivé et sa valeur tombe à zéro (ou presque). Tu peux avoir raison sur la tendance de fond et tout perdre sur une simple secousse intrajournalière.",
        explicationAlt: "C'est une course où frôler le rail une seule fois te disqualifie définitivement — même si tu étais en tête et que la ligne d'arrivée était à 100 mètres. Les marchés frôlent les rails en permanence : c'est précisément sur ça que ces produits sont construits.",
      },
    ],
  },

  "9.3": {
    decouverte: [
      "Le private equity — capital-investissement en français — consiste à investir dans des entreprises non cotées en bourse : startups, PME en croissance, sociétés à transmettre. C'est le terrain de chasse historique des institutionnels et des grandes fortunes, avec des rendements potentiels élevés… et des contreparties que la pub oublie : l'argent est bloqué 5 à 10 ans (illiquidité totale), et la perte sèche fait partie du jeu normal.",
      "Pour un particulier, trois portes d'entrée. Le crowdfunding equity : dès 100 €, tu deviens actionnaire d'une startup via une plateforme — sachant que la majorité des jeunes entreprises échouent, la règle est d'en financer plusieurs ou pas du tout. Les FCPI/FIP : des fonds fiscaux offrant 18 à 25 % de réduction d'impôt à l'entrée, mais aux frais lourds et aux performances historiquement décevantes en moyenne — la carotte fiscale ne doit jamais être le seul argument. Et, de plus en plus, des fonds de private equity logés en assurance-vie, plus accessibles et un peu plus liquides.",
      "La place du non-coté dans un patrimoine de jeune investisseur ? Une petite poche — moins de 5 à 10 % — et seulement quand tout le reste est déjà en place : précaution, assurances, PEA alimenté. C'est la cerise, jamais le gâteau.",
    ],
    casConcret: [
      "Victor, 28 ans, freelance bien installé, a déjà 30 000 € répartis entre livrets, PEA et assurance-vie. Il consacre 1 500 € — 5 % de son patrimoine — au crowdfunding equity, répartis sur cinq startups à 300 € chacune. Quatre ans plus tard : deux liquidées (600 € envolés), deux qui végètent, une revendue lors d'une levée de fonds pour 1 380 €. Bilan global : presque à l'équilibre, et il le savait possible dès le départ.",
      "Sa comptable lui avait aussi proposé un FIP « 25 % de réduction d'impôt immédiate ». En creusant : 4 % de frais d'entrée, près de 4 % de frais annuels, capital bloqué 8 ans, et des performances moyennes historiques négatives sur la catégorie une fois les frais déduits. La réduction d'impôt de 375 € ne compensait pas le risque sur les 1 500 € — il a décliné.",
    ],
    synthese: [
      "Private equity = entreprises non cotées : potentiel élevé, illiquidité totale 5-10 ans.",
      "Crowdfunding equity dès 100 € : diversifier sur plusieurs projets ou s'abstenir.",
      "FCPI/FIP : la réduction d'impôt ne doit JAMAIS être le seul argument.",
      "La perte sèche fait partie du jeu normal du non-coté.",
      "Petite poche (< 5-10 %), et seulement quand tout le reste est en place.",
    ],
    quiz: [
      {
        question: "Quelle est la contrainte numéro un du private equity pour un particulier ?",
        options: [
          "Les frais de bourse à chaque revente quotidienne",
          "L'illiquidité : l'argent est bloqué 5 à 10 ans, sans porte de sortie",
          "L'obligation de siéger au conseil d'administration",
          "Un ticket d'entrée minimum d'un million d'euros",
        ],
        correct: 1,
        explication: "Contrairement à une action cotée vendable en un clic, une part d'entreprise non cotée ne se revend que lors d'événements rares : levée de fonds, rachat, introduction en bourse. Entre-temps, l'argent est indisponible — quels que soient tes besoins ou les performances.",
        explicationAlt: "Investir en non-coté, c'est sceller son argent dans une bouteille jetée à la mer : elle reviendra peut-être chargée de trésors, peut-être vide, peut-être jamais — mais dans tous les cas, impossible de la rappeler en cours de route. On n'y met que ce dont on est sûr de ne pas avoir besoin.",
      },
      {
        question: "Un FIP offre 25 % de réduction d'impôt. Quel est le bon réflexe ?",
        options: [
          "Souscrire vite : une réduction d'impôt ne se refuse pas",
          "Souscrire le maximum autorisé pour maximiser la niche",
          "Évaluer le placement SANS l'avantage fiscal : frais, perfs historiques, blocage",
          "Vérifier seulement que la banque est connue",
        ],
        correct: 2,
        explication: "L'avantage fiscal est un bonus, pas un placement : si le produit sous-jacent perd 30 % avec 8 % de frais cumulés, les 25 % de réduction n'y changent rien. Un investissement doit se tenir debout tout seul — l'historique de la catégorie FCPI/FIP, frais déduits, invite à une grande prudence.",
        explicationAlt: "Achèterais-tu un manteau moche et trop petit parce qu'il est à -25 % ? La réduction d'impôt, c'est la même mécanique commerciale : elle attire l'œil vers des produits qui, sans elle, ne trouveraient pas preneur. Juge d'abord le manteau, ensuite la remise.",
      },
    ],
  },

  "9.4": {
    decouverte: [
      "Acheter des actions avec de l'argent emprunté (le SRD, service de règlement différé, version boursière française) ou parier sur la baisse d'un titre en vendant des actions qu'on ne possède pas encore (la vente à découvert) : voilà l'outillage avancé. Et une asymétrie à graver dans le marbre : à l'achat, ta perte maximale est ta mise ; à découvert, une action peut monter sans limite — la perte potentielle est donc théoriquement illimitée.",
      "Ce qui sépare réellement les professionnels des amateurs, ce n'est pas la qualité des prédictions — les pros se trompent aussi, souvent. C'est la gestion du risque : le position sizing (ne jamais risquer plus de 1 à 2 % de son capital sur une seule position), les stop-loss définis AVANT d'entrer en position, et le journal de trading où chaque décision est notée puis relue à froid. L'amateur cherche à avoir raison ; le pro organise sa survie les jours où il a tort.",
      "Et la conclusion honnête de tout ce module expert : après frais, impôts et erreurs, le DCA sur un ETF diversifié reste statistiquement imbattable pour l'écrasante majorité des particuliers — y compris ceux qui ont tout compris aux dérivés. Comprendre ces produits te protège ; t'en servir est presque toujours optionnel. Le levier sans méthode, lui, reste le chemin le plus court vers zéro.",
    ],
    casConcret: [
      "Deux amis, même envie de « trader sérieusement ». Karim se fixe un cadre : compte dédié de 2 000 € (5 % de son patrimoine, qu'il accepte de perdre), jamais plus de 2 % du compte risqués par position — soit 40 € —, stop-loss systématique, journal tenu chaque soir. Après un an : −7 %, 140 € de frais d'apprentissage, et une certitude chiffrée — son PEA en DCA a fait mieux, sans y passer dix heures par semaine.",
      "Bilal, lui, vend à découvert pour 3 000 € d'une biotech « surévaluée »… qui annonce un résultat d'essai clinique positif : +85 % en une séance. Sa perte dépasse sa mise initiale, son courtier liquide et réclame le solde. Avoir « presque raison » — le titre retombera des mois plus tard — ne l'a pas sauvé : sans gestion du risque, le marché n'attend pas que tu aies raison.",
    ],
    synthese: [
      "À l'achat, la perte max = ta mise ; à découvert, elle est théoriquement illimitée.",
      "Règle des pros : jamais plus de 1-2 % du capital risqués par position.",
      "Stop-loss décidé AVANT d'entrer, journal de trading relu à froid.",
      "Le pro n'organise pas ses gains : il organise sa survie quand il a tort.",
      "Après frais et impôts, le DCA sur ETF reste imbattable pour 99 % des particuliers.",
    ],
    quiz: [
      {
        question: "Pourquoi la vente à découvert est-elle plus dangereuse qu'un achat classique ?",
        options: [
          "Parce qu'elle est interdite aux particuliers en Europe",
          "Parce qu'elle coûte plus cher en frais de courtage",
          "Parce que la perte potentielle est théoriquement illimitée",
          "Parce qu'elle oblige à détenir l'action pendant 10 ans",
        ],
        correct: 2,
        explication: "Quand tu achètes à 100 €, le pire scénario est zéro : perte limitée à 100 €. Quand tu vends à découvert à 100 €, le titre peut monter à 200, 500, 1 000 € — chaque euro de hausse est une perte supplémentaire, sans plafond. C'est l'asymétrie fondamentale du short.",
        explicationAlt: "À l'achat, tu peux au pire tomber au rez-de-chaussée. À découvert, tu paries que l'ascenseur descend — mais s'il monte, il n'y a pas de dernier étage. Les rachats forcés de positions vendeuses (short squeeze) ont ruiné des professionnels aguerris exactement comme ça.",
      },
      {
        question: "Quelle habitude distingue le mieux un trader discipliné d'un amateur ?",
        options: [
          "Il trouve des informations que personne d'autre n'a",
          "Il risque au max 1-2 % du capital par position, stop-loss décidé à l'avance",
          "Il double sa mise après chaque perte pour se refaire",
          "Il suit les positions des meilleurs influenceurs",
        ],
        correct: 1,
        explication: "La gestion du risque est le seul facteur contrôlable : en limitant chaque position à 1-2 % du capital avec un stop-loss prédéfini, une série de pertes — inévitable, même pour les meilleurs — reste survivable. Doubler après une perte (martingale) produit l'effet exactement inverse : la ruine accélérée.",
        explicationAlt: "Un pilote de ligne n'est pas meilleur parce qu'il vole plus vite, mais parce que ses procédures rendent le crash improbable même quand tout va mal. Le 1-2 % par position et le stop-loss, ce sont les checklists du trading — sans elles, la question n'est pas si tu vas au tapis, mais quand.",
      },
    ],
  },
}
