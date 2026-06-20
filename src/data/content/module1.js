// Module 1 — Gérer son budget
// Contenu pédagogique FinPath : prise de connaissance, cas concret, synthèse, quiz.

export const CONTENT = {
  "1.1": {
    decouverte: [
      "Sur ta fiche de paie, deux chiffres sautent aux yeux : le brut et le net. Le brut, c'est ce que ton employeur s'engage à payer pour ton travail. Le net, c'est ce qui arrive vraiment sur ton compte. Entre les deux, une partie de ton salaire part en cotisations sociales : environ 22 % du brut pour un salarié du privé. Ce n'est pas de l'argent perdu, c'est de l'argent qui te protège.",
      "Ces cotisations financent trois choses très concrètes : ta santé (remboursements de soins, arrêts maladie), ton assurance chômage (un revenu si tu perds ton emploi) et ta retraite. Oui, dès ton premier salaire, tu commences déjà à valider des trimestres et à accumuler des points pour ta future retraite. Chaque mois travaillé compte, même un job étudiant ou une alternance.",
      "Dernière subtilité : depuis le prélèvement à la source, l'impôt sur le revenu est retiré directement de ta paie. Le chiffre qui compte vraiment pour ton budget, c'est donc le « net à payer après impôt », tout en bas de la fiche. C'est lui, et lui seul, que tu dois utiliser pour construire ton budget du mois.",
    ],
    casConcret: [
      "Lina vient de signer son premier CDI à 2 000 € brut par mois. En découvrant sa première fiche de paie, elle voit un net d'environ 1 560 €, puis un net après impôt d'environ 1 540 €. Sur le coup, elle est déçue : « il manque 460 € ! » Puis elle regarde le détail : environ 150 € pour la santé, et le reste surtout pour sa retraite et le chômage.",
      "Quelques mois plus tard, Lina se casse le poignet au foot. Arrêt maladie de trois semaines, indemnités journalières, soins remboursés : elle comprend que ces 460 € mensuels n'étaient pas envolés. Ils étaient sa protection. Et son budget, elle le construit désormais sur 1 540 €, jamais sur 2 000 €.",
    ],
    synthese: [
      "Le brut, c'est avant cotisations ; le net après impôt, c'est ce que tu touches vraiment.",
      "Environ 22 % du brut part en cotisations dans le privé.",
      "Ces cotisations financent ta santé, ton chômage et ta future retraite.",
      "Dès ton premier salaire, tu cotises déjà pour ta retraite.",
      "Construis toujours ton budget sur le net à payer après impôt.",
    ],
    quiz: [
      {
        question: "Tu signes un contrat à 1 800 € brut. Quel montant dois-tu utiliser pour construire ton budget ?",
        options: [
          "1 800 €, c'est ce qui est écrit sur le contrat",
          "Le net à payer après impôt, en bas de la fiche de paie",
          "Le brut moins l'impôt sur le revenu",
          "La moyenne entre le brut et le net",
        ],
        correct: 1,
        explication: "Seul le net à payer après impôt arrive réellement sur ton compte. Le brut inclut les cotisations sociales et, depuis le prélèvement à la source, l'impôt est aussi retiré avant le virement. C'est donc le dernier chiffre de la fiche qui compte pour ton budget.",
        explicationAlt: "Imagine une pizza : le brut, c'est la pizza entière, mais des parts partent pour ta santé, ton chômage, ta retraite et ton impôt. Ce qui reste dans la boîte quand elle arrive chez toi, c'est le net après impôt. Tu ne peux manger que ce qui est dans la boîte.",
      },
      {
        question: "À quoi servent principalement les cotisations sociales prélevées sur ton salaire ?",
        options: [
          "À payer les frais de gestion de ta banque",
          "À financer uniquement les routes et les écoles",
          "À rembourser la dette de ton employeur",
          "À financer ta santé, ton assurance chômage et ta retraite",
        ],
        correct: 3,
        explication: "Les cotisations sociales sont une protection collective : elles financent l'assurance maladie, l'assurance chômage et les régimes de retraite. Dès ton premier mois travaillé, tu acquiers des droits, notamment des trimestres pour ta future retraite.",
        explicationAlt: "Vois les cotisations comme un abonnement de protection automatique : si tu tombes malade, si tu perds ton emploi ou quand tu seras à la retraite, ce que tu as versé chaque mois te revient sous forme de droits. Ce n'est pas de l'argent perdu, c'est de l'argent mis en commun pour te couvrir.",
      },
    ],
  },

  "1.2": {
    decouverte: [
      "La règle 50/30/20, c'est la méthode la plus simple pour organiser ton argent sans tableur compliqué. Tu découpes ton revenu net en trois enveloppes : 50 % pour les besoins (loyer, courses, transport, abonnements indispensables), 30 % pour les envies (sorties, restos, fringues, jeux) et 20 % pour l'épargne. Trois chiffres, et tu sais immédiatement si ton mois tient la route.",
      "L'intérêt, ce n'est pas la précision au centime, c'est l'équilibre. Si ton loyer dévore 60 % de tes revenus, tu sais que quelque chose coince. Et la règle s'adapte : dans une grande ville chère, beaucoup de jeunes passent en 60/20/20, voire 70/20/10 au début. L'important, c'est de garder une part d'épargne, même petite, et de la traiter comme une dépense obligatoire.",
      "Pourquoi 20 % d'épargne quand on débute ? Parce que c'est elle qui t'évite le découvert au premier imprévu et qui finance tes futurs projets. Si 20 % est impossible aujourd'hui, commence à 5 ou 10 %. Une habitude modeste mais régulière vaut mieux qu'un objectif parfait jamais tenu.",
    ],
    casConcret: [
      "Mehdi est alternant à Lyon et touche environ 1 100 € net par mois. En appliquant 50/30/20 strict, il devrait limiter ses besoins à 550 €. Impossible : son loyer seul fait 480 €, plus 65 € de transport et environ 180 € de courses. Ses besoins réels tournent autour de 725 €, soit 66 % de son revenu.",
      "Plutôt que d'abandonner, Mehdi adapte : il passe en 65/25/10. Concrètement, 725 € de besoins, environ 275 € d'envies et 110 € d'épargne par virement automatique. En un an, il met de côté plus de 1 300 €, de quoi absorber une réparation de scooter à 350 € sans toucher au découvert.",
    ],
    synthese: [
      "50 % besoins, 30 % envies, 20 % épargne : trois enveloppes, un budget clair.",
      "Les besoins, c'est ce que tu dois payer ; les envies, ce qui te fait plaisir.",
      "En zone chère, adapte : 60/20/20 ou 65/25/10 fonctionnent très bien.",
      "L'épargne se traite comme une facture obligatoire, pas comme un reste.",
      "Mieux vaut épargner 5 % chaque mois que viser 20 % et abandonner.",
    ],
    quiz: [
      {
        question: "Avec 1 400 € net par mois et la règle 50/30/20, combien mets-tu de côté chaque mois ?",
        options: [
          "280 €",
          "700 €",
          "420 €",
          "140 €",
        ],
        correct: 0,
        explication: "20 % de 1 400 €, c'est 280 €. Dans la règle 50/30/20, l'épargne représente la troisième enveloppe : 700 € iraient aux besoins (50 %) et 420 € aux envies (30 %). L'épargne se verse en premier, comme une facture.",
        explicationAlt: "Pour trouver 20 %, divise par 10 puis multiplie par 2 : 1 400 € donne 140 €, fois deux égale 280 €. Imagine trois bocaux : le grand bocal des besoins reçoit 700 €, le bocal plaisir 420 €, et le bocal épargne 280 €.",
      },
      {
        question: "Ton loyer en région parisienne fait exploser tes 50 % de besoins. Quelle est la meilleure réaction ?",
        options: [
          "Abandonner toute méthode de budget, elle ne marche pas pour toi",
          "Supprimer complètement l'enveloppe épargne",
          "Adapter les pourcentages, par exemple 60/20/20, en gardant une part d'épargne",
          "Prendre un crédit à la consommation pour combler la différence",
        ],
        correct: 2,
        explication: "La règle 50/30/20 est un repère, pas une loi. Dans les zones chères, on ajuste les proportions, souvent en réduisant l'enveloppe envies. L'essentiel est de conserver une épargne régulière, même réduite, car c'est elle qui te protège des imprévus.",
        explicationAlt: "Pense à une recette de cuisine : si tu n'as pas tous les ingrédients exacts, tu ajustes les doses, tu ne jettes pas le plat. Ton budget, c'est pareil : tu modifies les proportions selon ta ville et ta situation, mais tu gardes toujours une pincée d'épargne.",
      },
    ],
  },

  "1.3": {
    decouverte: [
      "Le découvert, c'est quand ton compte passe en négatif : la banque t'avance de l'argent, mais elle se paie pour ça. D'abord avec les agios, des intérêts calculés sur le montant et la durée du découvert, à des taux souvent compris entre 7 et 16 % par an. Ramené à ce que coûte un livret d'épargne (environ 2 à 3 %), c'est énorme.",
      "Le vrai piège, ce sont les commissions d'intervention : environ 8 € facturés à chaque opération qui passe alors que tu es déjà au-delà de ton découvert autorisé. Un café à 3 €, un abonnement à 10 €, une course à 15 € : trois opérations, et la banque prélève environ 24 € de frais. Heureusement, la loi plafonne ces commissions, souvent autour de 80 € par mois (moins pour les clients fragiles).",
      "Pour en sortir durablement, il faut casser le cycle : repérer la dépense qui te fait basculer chaque mois, négocier avec ta banque (suppression de frais, autorisation adaptée), et surtout reconstruire un petit matelas. Un découvert chronique, c'est un budget qui démarre chaque mois avec un handicap.",
    ],
    casConcret: [
      "Thomas, étudiant à Bordeaux, finit chaque mois à environ −150 €. Il pense que ce n'est « pas grave, tout le monde fait ça ». Puis il additionne sur ses relevés de l'année : environ 35 € d'agios, mais surtout 14 commissions d'intervention à 8 €, soit 112 €. Au total, son découvert lui a coûté près de 150 € en un an, l'équivalent d'un mois de courses.",
      "Il appelle sa banque, obtient le remboursement de deux commissions et décale le prélèvement de son loyer après la date de son APL. En trois mois, en réduisant temporairement ses sorties de 50 € par mois, il repasse durablement dans le vert. Ces 150 € de frais annuels, il les met désormais sur son livret.",
    ],
    synthese: [
      "Le découvert est un crédit, et l'un des plus chers : agios de 7 à 16 % par an.",
      "Commission d'intervention : environ 8 € par opération au-delà du découvert autorisé.",
      "Ces commissions sont plafonnées par la loi, souvent autour de 80 € par mois.",
      "Un découvert chronique se négocie : appelle ta banque, demande des gestes.",
      "Pour en sortir : repérer la cause, décaler les prélèvements, reconstruire un matelas.",
    ],
    quiz: [
      {
        question: "Tu es au-delà de ton découvert autorisé et trois paiements passent quand même. Que facture souvent la banque, en plus des agios ?",
        options: [
          "Rien, la banque ne peut pas facturer de frais supplémentaires",
          "Une amende fixe de 100 € versée à l'État",
          "Environ 8 € de commission d'intervention par opération, soit environ 24 €",
          "Le blocage immédiat et définitif de ta carte bancaire",
        ],
        correct: 2,
        explication: "La commission d'intervention, environ 8 € par opération, est facturée chaque fois qu'un paiement passe au-delà de ton découvert autorisé. Trois opérations, même minuscules, coûtent donc environ 24 €. Ces frais sont heureusement plafonnés par mois.",
        explicationAlt: "Imagine un péage de 8 € à chaque fois que tu franchis la ligne rouge, même pour acheter un café à 3 €. Le café te coûte alors 11 €. C'est pour ça que les petites dépenses en zone rouge sont les plus toxiques pour ton budget.",
      },
      {
        question: "Pourquoi dit-on que le découvert est l'un des crédits les plus chers ?",
        options: [
          "Parce que les agios atteignent souvent 7 à 16 % par an, plus des frais fixes par opération",
          "Parce qu'il faut rembourser le double de la somme empruntée",
          "Parce qu'il est interdit par la loi française",
          "Parce qu'il bloque automatiquement ton épargne",
        ],
        correct: 0,
        explication: "Les taux du découvert sont parmi les plus élevés du marché, souvent entre 7 et 16 % par an, auxquels s'ajoutent les commissions d'intervention. À titre de comparaison, un prêt personnel classique coûte souvent deux à trois fois moins cher en taux.",
        explicationAlt: "Compare avec ton livret : ton épargne te rapporte environ 2 à 3 % par an, mais ton découvert te coûte jusqu'à 16 %, plus des frais fixes. C'est comme louer de l'argent au prix fort alors que le tien est payé au tarif de base. Le déséquilibre joue toujours contre toi.",
      },
    ],
  },

  "1.4": {
    decouverte: [
      "Le secret des gens qui épargnent sans effort tient en une phrase : « se payer en premier ». Concrètement, tu programmes un virement automatique vers ton épargne le lendemain de la paie, avant toute dépense. Si tu attends la fin du mois pour épargner « ce qui reste », il ne reste presque jamais rien. En inversant l'ordre, l'épargne devient invisible et indolore.",
      "Deuxième outil : les comptes séparés. Un compte courant pour les dépenses fixes (loyer, factures), un livret pour l'épargne, et idéalement un troisième espace pour le plaisir (sorties, shopping). Quand ton enveloppe plaisir est vide, tu le vois tout de suite, sans risquer de manger ton loyer. C'est la version moderne des enveloppes de billets de nos grands-parents.",
      "Enfin, les applis de suivi (celle de ta banque ou des applis dédiées) catégorisent automatiquement tes dépenses : courses, transport, sorties. Dix minutes par semaine suffisent pour repérer les fuites, comme cet abonnement oublié à 12 € par mois qui coûte 144 € par an. Piloter son budget, ce n'est pas se priver, c'est savoir où va son argent.",
    ],
    casConcret: [
      "Sofia démarre comme freelance en design avec des revenus irréguliers, entre 1 200 € et 2 200 € par mois. Elle ouvre trois espaces : un compte pro qui reçoit tout, un compte courant perso où elle se verse un « salaire » fixe de 1 300 € le 1er du mois, et un livret. Les bons mois, le surplus reste sur le compte pro en réserve.",
      "Le 2 de chaque mois, un virement automatique de 130 € part vers son livret : elle se paie en premier. Son appli bancaire lui révèle aussi 31 € d'abonnements dormants (streaming et appli de sport oubliés), qu'elle résilie. Résultat après un an : environ 1 900 € de côté, sans jamais avoir eu l'impression de se serrer la ceinture.",
    ],
    synthese: [
      "Se payer en premier : virement automatique vers l'épargne dès le lendemain de la paie.",
      "Épargner « ce qui reste » ne marche pas : il ne reste jamais rien.",
      "Sépare tes comptes : courant pour les fixes, livret pour l'épargne, enveloppe plaisir.",
      "Dix minutes par semaine sur ton appli suffisent pour repérer les fuites.",
      "Traque les abonnements oubliés : 12 € par mois, c'est 144 € par an.",
    ],
    quiz: [
      {
        question: "Que signifie concrètement « se payer en premier » ?",
        options: [
          "Dépenser d'abord pour ses plaisirs, puis payer les factures",
          "Demander à être payé avant ses collègues",
          "Garder tout son argent en liquide chez soi",
          "Programmer un virement automatique vers son épargne juste après la paie",
        ],
        correct: 3,
        explication: "Se payer en premier, c'est mettre l'épargne en tête de file : un virement automatique part vers ton livret dès le lendemain de la paie, avant toute dépense. Tu vis ensuite naturellement avec le reste, sans effort de volonté chaque mois.",
        explicationAlt: "Imagine que ton « toi du futur » est un créancier prioritaire, servi avant Netflix, avant les restos, avant tout le monde. Comme le virement est automatique, tu n'as même pas à y penser : l'épargne se construit pendant que tu vis ta vie.",
      },
      {
        question: "Pourquoi séparer compte courant, épargne et budget plaisir est-il efficace ?",
        options: [
          "Parce que la banque offre des cadeaux quand on a plusieurs comptes",
          "Parce que chaque enveloppe a un rôle clair : on voit où on en est sans risquer son loyer",
          "Parce que c'est obligatoire à partir de 18 ans",
          "Parce que ça supprime tous les frais bancaires",
        ],
        correct: 1,
        explication: "Avec des espaces séparés, chaque euro a une mission : payer les fixes, se constituer en réserve, ou financer les plaisirs. Quand l'enveloppe plaisir est vide, tu le vois immédiatement, et l'argent du loyer reste intouchable. C'est un garde-fou visuel et automatique.",
        explicationAlt: "C'est le principe des enveloppes de billets de nos grands-parents, version numérique : une enveloppe loyer, une enveloppe épargne, une enveloppe sorties. Personne ne pioche dans l'enveloppe loyer pour un resto, parce qu'elle est physiquement ailleurs. La séparation fait le travail de discipline à ta place.",
      },
    ],
  },

  "1.5": {
    decouverte: [
      "Chaque année en France, plusieurs milliards d'euros d'aides sociales ne sont pas réclamés, souvent parce que les gens ignorent qu'ils y ont droit. Et les jeunes sont les premiers concernés. L'APL, versée par la CAF, peut réduire ton loyer de plusieurs dizaines, parfois plus d'une centaine d'euros par mois, même pour une chambre étudiante ou une coloc.",
      "Si tu es étudiant, la bourse du CROUS dépend des revenus de tes parents et peut atteindre plusieurs centaines d'euros par mois, avec en bonus l'exonération des frais d'inscription. Si tu travailles, même en alternance ou à temps partiel, la prime d'activité peut compléter ton salaire dès tes premiers revenus, souvent de 50 à 200 € par mois selon ta situation.",
      "Ajoute les aides régionales (transport, équipement, permis), les tarifs jeunes pour la culture et le sport, et les aides d'Action Logement pour la caution ou le dépôt de garantie. Le réflexe à adopter : passer 15 minutes sur le simulateur officiel mesdroitssociaux.gouv.fr. C'est gratuit, anonyme au départ, et ça liste tout ce que tu peux demander.",
    ],
    casConcret: [
      "Camille, 22 ans, vient de décrocher son premier CDI à 1 500 € net à Nantes et loue un studio à 520 €. Persuadée que « les aides, c'est pour les étudiants », elle n'a jamais rien demandé. Un soir, elle fait la simulation sur mesdroitssociaux.gouv.fr : surprise, elle a droit à environ 100 € d'APL et environ 120 € de prime d'activité par mois.",
      "Deux dossiers en ligne et trois semaines plus tard, ce sont environ 220 € qui tombent chaque mois, soit plus de 2 600 € par an. L'équivalent de presque deux mois de salaire qu'elle laissait dormir. Elle en profite pour basculer 100 € par mois vers son livret, sans toucher à son train de vie.",
    ],
    synthese: [
      "Plusieurs milliards d'euros d'aides ne sont pas réclamés chaque année en France.",
      "APL (CAF) : ton loyer peut baisser, même en coloc ou en résidence étudiante.",
      "Prime d'activité : possible dès le premier salaire, alternants inclus.",
      "Bourses CROUS, aides régionales, transport, culture : pense aussi au local.",
      "Réflexe : 15 minutes sur mesdroitssociaux.gouv.fr pour tout simuler gratuitement.",
    ],
    quiz: [
      {
        question: "Tu viens de signer ton premier contrat et tu touches un salaire modeste. Quelle aide peux-tu potentiellement demander ?",
        options: [
          "Aucune : les aides sont réservées aux personnes sans emploi",
          "La prime d'activité, qui complète les salaires modestes dès le premier emploi",
          "Uniquement la bourse du CROUS",
          "Le RSA, automatiquement versé à tous les salariés",
        ],
        correct: 1,
        explication: "La prime d'activité est justement conçue pour compléter les revenus des travailleurs modestes, y compris les jeunes en premier emploi ou en alternance. Elle se demande à la CAF et représente souvent entre 50 et 200 € par mois selon la situation.",
        explicationAlt: "Beaucoup croient qu'aide sociale égale absence d'emploi : c'est l'inverse pour la prime d'activité, qui récompense le fait de travailler avec un salaire modeste. Vois-la comme un bonus d'État sur ta paie : si tu ne le demandes pas, personne ne te le versera à ta place.",
      },
      {
        question: "Quel est le meilleur réflexe pour savoir à quelles aides tu as droit ?",
        options: [
          "Attendre que la CAF te contacte spontanément",
          "Demander à ta banque de faire le calcul",
          "Supposer que tu n'y as pas droit si tu travailles",
          "Faire une simulation sur le site officiel mesdroitssociaux.gouv.fr",
        ],
        correct: 3,
        explication: "Le simulateur officiel mesdroitssociaux.gouv.fr passe en revue les principales aides nationales en une quinzaine de minutes : APL, prime d'activité, bourses et bien d'autres. Les aides ne sont presque jamais versées automatiquement : c'est à toi de faire la démarche.",
        explicationAlt: "Les aides fonctionnent comme un lot que personne ne t'apporte : il faut aller le réclamer au guichet. Le simulateur officiel, c'est le plan qui t'indique tous les guichets ouverts pour ta situation. Quinze minutes de clics peuvent valoir des centaines d'euros par an.",
      },
    ],
  },

  "1.6": {
    decouverte: [
      "Ton pire ennemi budgétaire n'est ni ta banque ni l'inflation : c'est ton propre cerveau. Il adore les récompenses immédiates et déteste attendre. Les sites marchands le savent et conçoivent tout pour l'achat impulsif : paiement en un clic, comptes à rebours, « plus que 2 en stock ». Résultat : on achète sous le coup de l'émotion, et on regrette souvent dès le lendemain.",
      "Le paiement fractionné, ou BNPL (« buy now, pay later », achète maintenant, paie plus tard), est un piège mental redoutable : 240 € deviennent « 4 fois 60 € », et ton cerveau ne retient que le petit chiffre. Multiplie les achats fractionnés et tu te retrouves avec des dizaines d'euros de prélèvements qui s'empilent chaque mois, parfois avec des frais en cas de retard.",
      "Ajoute la pression sociale : les sorties qu'on n'ose pas refuser, les réseaux qui exhibent des vies de rêve, le FOMO (la peur de rater quelque chose). Une parade simple existe : la règle des 48 heures. Pour tout achat plaisir non prévu, attends deux jours. Si l'envie est toujours là, achète sereinement. Dans la majorité des cas, elle s'est envolée.",
    ],
    casConcret: [
      "Un soir de novembre, Hugo, étudiant en BTS, craque pendant le Black Friday : sneakers à 140 € en 4 fois, casque audio à 180 € en 4 fois, et une veste à 90 €. Sur le moment, il n'a « payé » que 35 € + 45 € + 90 €, soit 170 €. Mais janvier et février arrivent avec 80 € de prélèvements mensuels qu'il avait oubliés, en plein mois de partiels.",
      "Son compte frôle le découvert, et il revend finalement le casque, quasi neuf, 100 € sur une plateforme d'occasion : 80 € de perte sèche. Depuis, Hugo applique la règle des 48 heures : il met l'article dans le panier, ferme l'appli, et y revient deux jours plus tard. Sur ses dix dernières envies, il n'en a finalement acheté que trois.",
    ],
    synthese: [
      "Ton cerveau préfère le plaisir immédiat : les sites marchands exploitent ce réflexe.",
      "Paiement fractionné : « 4 fois 60 € », c'est toujours 240 € à payer.",
      "Les petits prélèvements BNPL s'empilent et peuvent provoquer un découvert.",
      "FOMO et pression sociale : compare ta vie réelle, pas les vitrines des réseaux.",
      "Règle des 48 h : attends deux jours avant tout achat plaisir non prévu.",
    ],
    quiz: [
      {
        question: "Pourquoi le paiement fractionné (BNPL) est-il un piège mental ?",
        options: [
          "Parce qu'il est interdit aux moins de 25 ans",
          "Parce que le cerveau retient « 4 fois 60 € » et oublie le vrai total de 240 €",
          "Parce qu'il oblige à payer en liquide",
          "Parce qu'il double automatiquement le prix de l'article",
        ],
        correct: 1,
        explication: "Le fractionnement réduit la douleur du paiement : on ne « voit » que la petite mensualité, pas le coût total. En multipliant les achats fractionnés, on accumule des prélèvements futurs qu'on oublie, jusqu'au mois où ils tombent tous en même temps.",
        explicationAlt: "C'est comme manger un paquet de gâteaux « un seul à la fois » : chaque gâteau semble anodin, mais le paquet finit vide. Chaque mensualité BNPL paraît indolore, mais leur addition peut vider ton compte le mois suivant, surtout si plusieurs achats se superposent.",
      },
      {
        question: "En quoi consiste la règle des 48 heures ?",
        options: [
          "Attendre deux jours avant un achat plaisir non prévu, pour vérifier si l'envie persiste",
          "Rendre tout achat sous 48 heures pour être remboursé",
          "Ne jamais faire de shopping le week-end",
          "Bloquer sa carte bancaire pendant deux jours chaque mois",
        ],
        correct: 0,
        explication: "La règle des 48 heures introduit un délai entre l'impulsion et l'achat : tu notes l'envie, tu attends deux jours, et tu n'achètes que si elle est toujours là. La plupart des envies impulsives retombent d'elles-mêmes, et tu gardes ton argent pour ce qui compte vraiment.",
        explicationAlt: "Vois l'envie d'achat comme une vague : énorme sur le moment, elle redescend presque toujours toute seule. Les 48 heures servent juste à laisser passer la vague. Si après deux jours tu veux encore l'objet, c'est sans doute un vrai désir, et tu peux l'acheter sans culpabiliser.",
      },
    ],
  },
}
