// Module 7 — Se projeter : retraite, immobilier, assurance-vie, stratégie globale.
// Format : decouverte (prise de connaissance), casConcret, synthese, quiz (2 questions).

export const CONTENT = {
  "7.1": {
    decouverte: [
      "La retraite à 20 ans, ça paraît lointain, presque abstrait. Pourtant, le système français te concerne déjà : il fonctionne « par répartition ». Concrètement, les cotisations prélevées sur ton salaire aujourd'hui ne sont pas mises de côté pour toi : elles paient directement les pensions des retraités actuels. Quand ce sera ton tour, ce sont les actifs de demain qui paieront la tienne.",
      "Le problème, c'est la démographie : de moins en moins d'actifs pour de plus en plus de retraités. Résultat, le « taux de remplacement » (la part de ton dernier salaire que ta pension représentera) devrait baisser pour ta génération. D'où l'intérêt de compléter toi-même, sans paniquer. Premier réflexe gratuit : crée ton compte sur info-retraite.fr pour voir tes trimestres déjà validés — oui, même tes jobs d'été comptent.",
      "Pour compléter, il existe le PER (plan d'épargne retraite) : les sommes versées sont déductibles de ton revenu imposable, mais bloquées jusqu'à la retraite, sauf exception comme l'achat de ta résidence principale. Il devient surtout intéressant quand ton imposition monte. Et le vrai super-pouvoir de ton âge, c'est le temps : grâce aux intérêts composés, 1 € investi à 25 ans peut valoir environ 10 € à la retraite.",
    ],
    casConcret: [
      "Inès, 24 ans, vient de signer son premier CDI à 1 900 € net par mois. Par curiosité, elle se connecte sur info-retraite.fr et découvre que ses deux étés en job saisonnier lui ont déjà validé des trimestres. Elle décide de mettre 50 € par mois sur un investissement long terme : à environ 6 % par an en moyenne, ça pourrait représenter autour de 100 000 € à 65 ans, dont seulement 24 600 € sortis de sa poche.",
      "Son collègue Bastien, 35 ans, veut rattraper son retard avec 100 € par mois. Malgré un effort deux fois plus gros, il arrivera à un capital nettement plus faible : il lui manque dix ans d'intérêts composés. La leçon d'Inès : commencer petit mais tôt bat presque toujours commencer gros mais tard.",
    ],
    synthese: [
      "La retraite par répartition : tes cotisations paient les retraités d'aujourd'hui, pas ta future pension.",
      "Le taux de remplacement baissera pour ta génération : un complément personnel devient quasi indispensable.",
      "info-retraite.fr : vérifie gratuitement tes trimestres, jobs d'été inclus.",
      "Le PER déduit tes versements du revenu imposable, mais bloque l'argent jusqu'à la retraite.",
      "Commencer tôt change tout : 1 € à 25 ans vaut environ 10 € à la retraite.",
    ],
    quiz: [
      {
        question: "Dans le système de retraite français « par répartition », à quoi servent les cotisations prélevées sur ton salaire ce mois-ci ?",
        options: [
          "Elles sont placées en bourse pour toi par l'État",
          "Elles sont bloquées sur un compte à ton nom jusqu'à tes 64 ans",
          "Elles paient les pensions des retraités actuels",
          "Elles financent uniquement l'assurance maladie",
        ],
        correct: 2,
        explication: "Par répartition signifie que l'argent ne dort nulle part : tes cotisations d'aujourd'hui sont immédiatement reversées aux retraités d'aujourd'hui. Ta propre pension sera payée plus tard par les actifs de demain. C'est un système de solidarité entre générations, pas une épargne individuelle.",
        explicationAlt: "Imagine une chaîne humaine où chacun passe un seau d'eau à la personne devant lui : tu remplis le seau des retraités actuels, et tu comptes sur les jeunes de demain pour remplir le tien. Rien n'est stocké à ton nom : c'est tout l'enjeu quand il y a moins de monde derrière toi dans la chaîne.",
      },
      {
        question: "Pourquoi est-il si avantageux de commencer à épargner pour le long terme dès 25 ans plutôt qu'à 40 ans ?",
        options: [
          "Les intérêts composés ont plus de temps pour faire boule de neige",
          "Les banques offrent des taux réservés aux moins de 30 ans",
          "L'État double automatiquement les versements des jeunes",
          "Avant 30 ans, les gains ne sont jamais imposés",
        ],
        correct: 0,
        explication: "Le temps est ton meilleur allié : chaque année, tes gains génèrent eux-mêmes des gains, et l'effet s'accélère avec les décennies. C'est pour ça qu'on dit qu'1 € investi à 25 ans peut valoir environ 10 € à la retraite, alors qu'un départ tardif exige un effort bien plus gros pour un résultat moindre.",
        explicationAlt: "Pense à une boule de neige qu'on fait rouler du haut d'une montagne : plus la pente est longue, plus elle grossit vite à la fin. Commencer à 25 ans, c'est partir du sommet ; commencer à 40 ans, c'est partir à mi-pente. Même en poussant plus fort, la boule n'aura jamais le temps de devenir aussi grosse.",
      },
    ],
  },
  "7.2": {
    decouverte: [
      "Acheter un logement, c'est souvent le plus gros projet financier d'une vie. Première brique : l'apport, c'est-à-dire l'argent que tu amènes toi-même. Les banques demandent en général environ 10 % du prix du bien, plus les frais de notaire (autour de 7-8 % dans l'ancien). Pour un appartement à 200 000 €, prévois donc souvent 30 000 € à 35 000 € de côté avant de te lancer.",
      "Deuxième brique : ta capacité d'emprunt. La règle en France est stricte : tes mensualités de crédit, assurance emprunteur incluse, ne doivent pas dépasser 35 % de tes revenus nets, sur une durée maximale de 25 ans. Avec 2 000 € net par mois, ta mensualité plafonne donc autour de 700 €. C'est ce calcul qui détermine le prix maximum que tu peux viser, pas tes envies.",
      "Troisième brique : un dossier qui inspire confiance. La banque regarde des revenus stables, tes trois derniers relevés de compte sans aucun découvert, et une épargne régulière qui prouve ta discipline. Et au passage : louer n'est pas « jeter l'argent par les fenêtres ». Si ta vie professionnelle bouge encore, la location t'offre une mobilité précieuse que la propriété te ferait payer cher.",
    ],
    casConcret: [
      "Yanis, 26 ans, alternant devenu cadre junior à 2 300 € net, rêve d'un T2 à 180 000 € à Nantes. Il calcule : 35 % de 2 300 €, ça donne une mensualité maximale d'environ 800 €, assurance incluse. Avec son apport de 25 000 € (10 % du prix plus une partie des frais de notaire), son courtier confirme que le projet passe — à condition de présenter un dossier propre.",
      "Problème : il y a quatre mois, Yanis a eu deux découverts. Plutôt que de forcer, il reporte sa demande de six mois, programme un virement automatique de 300 € par mois vers son livret et garde ses relevés impeccables. Six mois plus tard, la banque voit un client discipliné : prêt accordé à un taux correct. Son amie Léa, elle, choisit de rester locataire : elle vise un poste à l'étranger dans deux ans, et acheter maintenant lui coûterait plus cher que ses loyers.",
    ],
    synthese: [
      "Apport conseillé : environ 10 % du prix, plus les frais de notaire (7-8 % dans l'ancien).",
      "Endettement maximum : 35 % de tes revenus nets, assurance incluse, sur 25 ans maximum.",
      "Dossier gagnant : revenus stables, trois derniers relevés sans découvert, épargne régulière visible.",
      "L'épargne automatique prouve ta discipline mieux que n'importe quel discours.",
      "Louer n'est pas jeter l'argent : c'est payer ta liberté de bouger.",
    ],
    quiz: [
      {
        question: "Avec 2 000 € de revenus nets mensuels, quelle mensualité de crédit immobilier maximale une banque française acceptera-t-elle en général ?",
        options: [
          "1 000 €, soit la moitié de tes revenus",
          "Environ 700 €, assurance emprunteur incluse",
          "Il n'y a pas de limite si l'apport est suffisant",
          "400 €, soit 20 % de tes revenus",
        ],
        correct: 1,
        explication: "La règle française plafonne le taux d'endettement à 35 % des revenus nets, assurance emprunteur incluse. Sur 2 000 € net, cela donne environ 700 € de mensualité maximum. Ce plafond s'applique quel que soit ton apport : il protège ton reste à vivre.",
        explicationAlt: "Vois ton salaire comme un gâteau : la banque n'autorise le crédit à croquer qu'une part d'environ un tiers (35 %), assurance comprise, pour qu'il te reste de quoi vivre, manger et faire face aux imprévus. Sur un gâteau de 2 000 €, la part crédit ne peut donc pas dépasser environ 700 €.",
      },
      {
        question: "Quel élément risque le plus de faire capoter une demande de prêt immobilier ?",
        options: [
          "Avoir un Livret A déjà bien rempli",
          "Être en CDI depuis deux ans",
          "Mettre en place un virement automatique d'épargne",
          "Des découverts répétés sur les trois derniers relevés de compte",
        ],
        correct: 3,
        explication: "Les banques épluchent systématiquement tes trois derniers relevés : des découverts répétés signalent une gestion fragile et font souvent refuser ou renchérir le prêt. À l'inverse, une épargne régulière et des comptes propres rassurent. Mieux vaut reporter sa demande de quelques mois pour présenter des relevés impeccables.",
        explicationAlt: "Demander un prêt, c'est comme passer un entretien d'embauche où tes relevés bancaires sont ton CV : trois mois de découverts, c'est arriver avec des taches sur la chemise. La banque ne juge pas tes intentions, elle juge les preuves. Donne-lui trois mois de comptes nickel et le même dossier devient convaincant.",
      },
    ],
  },
  "7.3": {
    decouverte: [
      "Malgré son nom trompeur, l'assurance-vie n'est pas une assurance en cas de décès : c'est une enveloppe d'épargne, l'une des préférées des Français. À l'intérieur, tu peux loger deux grandes familles de supports : le fonds euros, sécurisé, dont le capital est garanti, et les unités de compte, plus dynamiques (actions, immobilier…), qui peuvent rapporter plus mais sans garantie. Tu doses le mélange selon tes objectifs.",
      "Son gros atout, c'est la fiscalité qui s'améliore avec le temps : après 8 ans de détention, tu bénéficies chaque année d'un abattement de 4 600 € sur les gains retirés (pour une personne seule). D'où le conseil classique : « prendre date » tôt, c'est-à-dire ouvrir un contrat même avec 50 €, juste pour faire tourner le compteur des 8 ans pendant que ta vie avance.",
      "Dernier point, à connaître simplement : l'assurance-vie est aussi un outil de transmission. En cas de décès, chaque bénéficiaire que tu as désigné peut recevoir jusqu'à 152 500 € sans droits de succession, pour les versements effectués avant tes 70 ans. Pas ta priorité aujourd'hui, mais c'est une des raisons pour lesquelles tes parents ou grands-parents en ont sûrement une.",
    ],
    casConcret: [
      "Salomé, 22 ans, étudiante en master, ouvre une assurance-vie en ligne avec 50 €, sans frais d'entrée, puis y verse 30 € par mois. Son objectif n'est pas de devenir riche tout de suite : c'est de « prendre date ». À 30 ans, son contrat aura déjà 8 ans, et elle pourra retirer ses gains avec l'abattement annuel de 4 600 €, par exemple pour compléter un apport immobilier.",
      "Elle répartit prudemment : 70 % sur le fonds euros sécurisé, 30 % en unités de compte diversifiées. Sa cousine Margaux, qui ouvre le même contrat à 30 ans seulement, devra attendre ses 38 ans pour profiter de la même fiscalité douce. Huit ans d'écart pour 50 € de mise de départ : c'est probablement le meilleur rapport effort-bénéfice de toute l'épargne française.",
    ],
    synthese: [
      "L'assurance-vie n'assure pas un décès : c'est une enveloppe d'épargne souple et multi-supports.",
      "Fonds euros = capital garanti ; unités de compte = plus de potentiel, plus de risque.",
      "Après 8 ans : abattement annuel de 4 600 € sur les gains retirés.",
      "Prends date tôt, même avec 50 € : le compteur fiscal tourne pour toi.",
      "Transmission : jusqu'à 152 500 € par bénéficiaire hors succession (versements avant 70 ans).",
    ],
    quiz: [
      {
        question: "Pourquoi conseille-t-on souvent d'ouvrir une assurance-vie tôt, même avec seulement 50 € ?",
        options: [
          "Pour faire courir le délai de 8 ans qui débloque l'avantage fiscal",
          "Parce que les contrats sont réservés aux moins de 25 ans",
          "Parce que le capital double automatiquement au bout de 8 ans",
          "Parce que les versements sont obligatoires chaque mois",
        ],
        correct: 0,
        explication: "L'avantage fiscal majeur de l'assurance-vie (abattement annuel de 4 600 € sur les gains retirés) ne s'active qu'après 8 ans de détention du contrat. C'est l'âge du contrat qui compte, pas le montant. Ouvrir avec 50 € aujourd'hui, c'est s'offrir un contrat « mûr » fiscalement pour ses projets futurs.",
        explicationAlt: "C'est comme planter un arbre fruitier : peu importe qu'il soit minuscule au départ, ce qui compte, c'est la date de plantation, car il faut 8 ans avant de récolter les fruits sans impôt. Planter ton arbre à 22 ans avec 50 €, c'est garantir une récolte fiscalement douce dès tes 30 ans.",
      },
      {
        question: "Dans une assurance-vie, quelle est la différence entre le fonds euros et les unités de compte ?",
        options: [
          "Le fonds euros est réservé aux retraités, les unités de compte aux jeunes",
          "Les unités de compte sont garanties par l'État, pas le fonds euros",
          "Le fonds euros garantit le capital, les unités de compte sont plus dynamiques mais risquées",
          "Il n'y a aucune différence, ce sont deux noms du même produit",
        ],
        correct: 2,
        explication: "Le fonds euros offre une garantie du capital : tu ne peux pas perdre ce que tu as versé, en échange d'un rendement modéré. Les unités de compte (actions, immobilier…) visent une performance supérieure sur le long terme, mais leur valeur fluctue et rien n'est garanti. La bonne stratégie consiste souvent à mélanger les deux selon ton horizon.",
        explicationAlt: "Imagine deux véhicules dans la même enveloppe : le fonds euros est un train régional, lent mais qui arrive toujours à destination ; les unités de compte sont un vélo de course, plus rapide sur la durée mais avec des chutes possibles en chemin. Tu choisis combien de bagages tu mets dans chaque véhicule selon la longueur du voyage.",
      },
    ],
  },
  "7.4": {
    decouverte: [
      "Tu as maintenant toutes les briques : livrets, PEA, assurance-vie, PER, immobilier… La question n'est plus « quel est le meilleur placement ? » mais « le meilleur pour quel objectif et quel délai ? ». C'est le raisonnement par horizons : à court terme (moins de 2 ans), la sécurité prime, donc livrets. À moyen terme (2 à 8 ans), fonds euros et un peu de diversifié. Au-delà de 8 ans, actions et ETF via un PEA, voire de l'immobilier.",
      "La logique est simple : plus ton horizon est long, plus tu peux accepter les vagues du marché, car tu as le temps de voir les creux se combler. À l'inverse, l'argent de ta caution ou de tes vacances de l'été prochain n'a rien à faire en bourse. À chaque objectif son enveloppe : c'est ça, une stratégie, pas une collection de produits.",
      "Reste l'ordre des priorités, comme une pyramide qu'on construit par la base : d'abord un budget équilibré, ensuite ton épargne de précaution (environ 3 mois de dépenses), puis les assurances indispensables, ensuite seulement l'investissement long terme, et enfin la diversification vers des supports plus pointus. Sauter une étape, c'est construire le toit avant les fondations.",
    ],
    casConcret: [
      "Théo, 25 ans, développeur freelance, gagne environ 2 500 € net par mois en moyenne. Il pose sa stratégie sur une feuille : 4 500 € sur son Livret A comme précaution renforcée (ses revenus varient), un projet de voiture dans 3 ans alimenté à 150 € par mois sur le fonds euros de son assurance-vie, et 200 € par mois en ETF monde sur son PEA pour l'horizon retraite et liberté, à plus de 15 ans.",
      "Quand un ami lui vante une crypto « qui va faire fois dix », Théo sait répondre : sa pyramide est construite, et s'il veut jouer, ce sera avec une petite poche dédiée, jamais avec l'argent de la voiture ou de la précaution. Trois enveloppes, trois horizons, zéro stress : sa stratégie tient sur une feuille, et c'est exactement le but.",
    ],
    synthese: [
      "Court terme (moins de 2 ans) : livrets, sécurité absolue.",
      "Moyen terme (2-8 ans) : fonds euros et un peu de diversifié.",
      "Long terme (plus de 8 ans) : actions et ETF via PEA, immobilier.",
      "À chaque objectif son enveloppe : c'est ça, une vraie stratégie.",
      "Ordre des priorités : budget, précaution, assurances, long terme, diversification.",
    ],
    quiz: [
      {
        question: "Tu mets de côté pour un voyage dans 18 mois. Où placer cet argent en priorité ?",
        options: [
          "En actions via un PEA pour maximiser le gain",
          "Dans une crypto prometteuse, le délai est court mais ça peut monter vite",
          "En private equity pour diversifier",
          "Sur un livret sécurisé, car l'horizon est inférieur à 2 ans",
        ],
        correct: 3,
        explication: "À moins de 2 ans, ton horizon est trop court pour absorber une baisse des marchés : si la bourse chute de 20 % six mois avant ton départ, ton voyage saute. Pour le court terme, la règle est la sécurité et la disponibilité, donc les livrets, même si le rendement est modeste.",
        explicationAlt: "Investir en bourse de l'argent dont tu as besoin dans 18 mois, c'est comme prendre la mer juste avant une tempête annoncée en espérant passer entre les vagues : parfois ça passe, parfois tout coule. Le livret, c'est le port : moins excitant, mais ton bateau est intact le jour du départ.",
      },
      {
        question: "Dans l'ordre des priorités financières, que faut-il avoir AVANT de commencer à investir en bourse sur le long terme ?",
        options: [
          "Un budget équilibré, une épargne de précaution et les assurances essentielles",
          "Un crédit immobilier déjà signé",
          "Au moins 10 000 € de capital de départ",
          "Une formation payante en trading",
        ],
        correct: 0,
        explication: "La pyramide se construit par la base : un budget qui tient, environ 3 mois de dépenses en épargne de précaution, et les assurances indispensables. C'est ce socle qui t'évite de devoir vendre tes investissements au pire moment en cas de coup dur. La bourse vient après, jamais avant.",
        explicationAlt: "Investir sans précaution ni budget, c'est partir en randonnée en montagne sans eau ni chaussures, mais avec des jumelles haut de gamme : au premier imprévu, tu devras vendre les jumelles à perte pour acheter de l'eau. Le socle d'abord, l'équipement de performance ensuite.",
      },
    ],
  },
};
