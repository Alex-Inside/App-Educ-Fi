// Module 3 — Comprendre le crédit
// Contenu pédagogique FinPath : prise de connaissance, cas concret, synthèse, quiz.

export const CONTENT = {
  "3.1": {
    decouverte: [
      "Un crédit, c'est simple sur le papier : on te prête un capital, tu le rembourses par mensualités pendant une durée donnée, et tu paies un supplément pour ce service — les intérêts. Plus la durée est longue, plus la mensualité baisse… mais plus le coût total grimpe. C'est le premier réflexe à avoir : toujours regarder ce que le crédit coûte au total, pas seulement ce qu'il coûte par mois.",
      "Le piège, c'est que chaque offre affiche son taux à sa façon. Le seul chiffre qui permet de comparer honnêtement deux crédits s'appelle le TAEG : le taux annuel effectif global. Il inclut tout — les intérêts, les frais de dossier et l'assurance obligatoire. Le « taux nominal » écrit en gros sur la pub est toujours plus flatteur, parce qu'il ne contient pas le reste.",
      "Bonne nouvelle : la loi oblige le prêteur à te communiquer le TAEG et le coût total du crédit par écrit avant de signer. Si quelqu'un rechigne à te les donner clairement, c'est déjà une réponse en soi.",
    ],
    casConcret: [
      "Sofiane veut financer 10 000 € pour aménager son studio. Sa banque propose 4,9 % nominal sur 5 ans, l'organisme du magasin affiche « 3,9 % » en vitrine. Avant de signer, il demande les deux TAEG : 5,4 % chez sa banque (frais de dossier inclus)… et 7,2 % au magasin, une fois ajoutés l'assurance et les frais cachés derrière l'astérisque.",
      "Il fait le calcul complet : mensualité × nombre de mois. Offre banque : 190 € × 60 = 11 400 €. Offre magasin : 199 € × 60 = 11 940 €. Le « petit 3,9 % » lui aurait coûté 540 € de plus. Neuf euros par mois d'écart, presque invisibles — mais bien réels à l'arrivée.",
    ],
    synthese: [
      "Un crédit = capital + intérêts, remboursé par mensualités sur une durée.",
      "Durée plus longue = mensualité plus douce mais coût total plus élevé.",
      "Le TAEG est le SEUL taux qui permet de comparer deux offres.",
      "Coût réel = mensualité × nombre de mois, à calculer avant de signer.",
      "Le prêteur a l'obligation légale de te donner le TAEG par écrit.",
    ],
    quiz: [
      {
        question: "Deux offres de crédit pour le même montant. Laquelle est la moins chère ?",
        options: [
          "Celle avec la mensualité la plus basse",
          "Celle avec le taux nominal affiché le plus bas",
          "Celle avec le TAEG le plus bas",
          "Celle de la banque la plus connue",
        ],
        correct: 2,
        explication: "Le TAEG intègre les intérêts, les frais de dossier et l'assurance obligatoire : c'est le coût complet exprimé en taux annuel. Une mensualité basse peut cacher une durée plus longue, et un taux nominal séduisant peut cacher des frais.",
        explicationAlt: "Compare ça à deux billets d'avion : l'un affiche 50 € mais ajoute bagage, siège et frais de dossier au moment de payer ; l'autre affiche 80 € tout compris. Le TAEG, c'est le prix « tout compris » du crédit — c'est lui qu'on compare.",
      },
      {
        question: "Tu allonges la durée de ton crédit de 4 à 6 ans. Que se passe-t-il ?",
        options: [
          "La mensualité baisse et le coût total baisse aussi",
          "La mensualité baisse mais le coût total augmente",
          "Rien ne change tant que le taux est identique",
          "La mensualité augmente mais le crédit finit plus tôt",
        ],
        correct: 1,
        explication: "En étalant le remboursement, chaque mensualité diminue, mais tu paies des intérêts pendant plus longtemps : le coût total du crédit augmente. C'est l'argument classique des vendeurs — « pour quelques euros de moins par mois » — qui coûte cher à l'arrivée.",
        explicationAlt: "Imagine une location : moins cher par mois si tu loues plus longtemps, mais au bout du compte tu auras versé davantage. Le crédit fonctionne pareil — le temps, c'est exactement ce que le prêteur te facture.",
      },
    ],
  },

  "3.2": {
    decouverte: [
      "Tous les crédits ne se valent pas, et chacun répond à un besoin précis. Le prêt personnel finance ce que tu veux, sans justificatif d'achat : souple, mais taux moyen (souvent 4 à 8 %). Le crédit affecté (auto, travaux) est lié à un achat précis : si la voiture n'est pas livrée, le crédit s'annule — une vraie protection, souvent avec un meilleur taux.",
      "Le prêt étudiant garanti par l'État mérite d'être connu : jusqu'à 20 000 € sans caution parentale ni condition de ressources, avec remboursement différé après les études. Pour financer un master ou une école, c'est presque toujours plus sain qu'un crédit conso classique. Le crédit immobilier, lui, joue dans une autre cour : des taux plus bas, des durées de 20-25 ans, et un vrai dossier à monter.",
      "Et puis il y a le paiement fractionné — le fameux « 3x 4x sans frais » et ses cousins BNPL (buy now, pay later). Pratique, mais c'est juridiquement un crédit, et il est redoutable : il rend la dépense indolore, s'empile facilement, et les pénalités tombent vite en cas de retard. À réserver aux achats prévus, jamais aux achats d'impulsion.",
    ],
    casConcret: [
      "Emma, 21 ans, doit financer sa 3e année d'école de commerce : 9 500 €. Une enseigne en ligne lui propose un crédit conso à 6,9 % à rembourser tout de suite. Sa conseillère lui parle du prêt étudiant garanti par l'État : 3,2 %, et surtout un différé total — elle ne commencera à rembourser que deux ans après son diplôme, une fois en poste.",
      "Sur la même somme, le différé change tout : pendant ses études, Emma vit avec son alternance à 950 € par mois sans mensualité à sortir. Son amie Jade, elle, a empilé quatre paiements fractionnés (téléphone, billets d'avion, vêtements…) : 184 € de mensualités cumulées qu'elle n'avait jamais « décidées » comme un vrai crédit.",
    ],
    synthese: [
      "À chaque besoin son crédit : personnel (libre), affecté (protégé), étudiant (différé), immobilier (long terme).",
      "Le prêt étudiant garanti par l'État : jusqu'à 20 000 € sans caution parentale.",
      "Crédit affecté : si l'achat tombe à l'eau, le crédit s'annule.",
      "Le paiement fractionné EST un crédit, même « sans frais ».",
      "Les petites mensualités s'empilent vite : fais le total avant d'en ajouter une.",
    ],
    quiz: [
      {
        question: "Quel est le grand avantage du prêt étudiant garanti par l'État ?",
        options: [
          "Il est totalement gratuit, sans intérêts",
          "Sans caution parentale et remboursable après les études",
          "Il est réservé aux boursiers",
          "Il est automatiquement effacé si on ne trouve pas d'emploi",
        ],
        correct: 1,
        explication: "L'État se porte garant à la place de tes parents, ce qui ouvre le crédit à ceux qui n'ont pas de caution familiale, et le remboursement peut être différé jusqu'à la fin des études. Il a un taux, certes, mais généralement bien plus doux qu'un crédit conso.",
        explicationAlt: "Pense-le comme un crédit avec l'État en « garant de coloc » : la banque prête parce que l'État s'engage derrière toi. Et le compteur de remboursement ne démarre vraiment qu'une fois ton diplôme en poche et un salaire qui tombe.",
      },
      {
        question: "Le « paiement en 4x sans frais » d'un site de vêtements, c'est…",
        options: [
          "Un crédit, avec les risques d'empilement que ça implique",
          "Une simple facilité de caisse sans aucun risque",
          "Une remise déguisée de 25 % par mois",
          "Un service gratuit sans condition ni pénalité",
        ],
        correct: 0,
        explication: "Le paiement fractionné est juridiquement un crédit : tu dépenses de l'argent que tu n'as pas encore. « Sans frais » vaut seulement si tout se passe bien — les pénalités de retard arrivent vite, et surtout les 4x s'empilent jusqu'à former une vraie mensualité invisible.",
        explicationAlt: "Chaque 4x est une petite dette qui ne dit pas son nom. Une seule, ça va. Mais quatre achats fractionnés en même temps, c'est l'équivalent d'un crédit conso que tu n'as jamais eu l'impression de souscrire — c'est exactement ça, le danger.",
      },
    ],
  },

  "3.3": {
    decouverte: [
      "Certains crédits sont conçus pour que tu n'en sortes jamais. Le champion toutes catégories : le crédit renouvelable (ou « revolving »), cette réserve d'argent proposée par les magasins et les cartes de fidélité. Son TAEG dépasse souvent 20 %, et comme la réserve se reconstitue à mesure que tu rembourses, la tentation de repiocher est permanente. Méfie-toi aussi du « rachat de crédits miracle » qui promet une mensualité divisée par deux : il rallonge simplement la durée, et la facture totale explose.",
      "Quand les remboursements dérapent, il y a le fichage. Deux fichiers tenus par la Banque de France : le FICP (incidents de remboursement de crédits, dès deux mensualités impayées) et le FCC (chèques sans provision, carte retirée). Concrètement, être fiché ferme l'accès au crédit, parfois pendant 5 ans, et complique tout : crédit immobilier, parfois même la location d'un logement via les vérifications.",
      "Si la situation est vraiment bloquée, la procédure de surendettement de la Banque de France existe : gratuite, confidentielle, elle peut rééchelonner voire effacer des dettes. Ce n'est pas une honte, c'est une issue de secours prévue par la loi — et plus on s'y prend tôt, mieux ça se passe.",
    ],
    casConcret: [
      "Théo, 23 ans, accepte la carte du magasin d'électroménager « pour les 10 % de bienvenue ». Elle cache un crédit renouvelable à 21 % de TAEG. Une console à 540 €, un canapé à 690 €, quelques retards… Deux ans plus tard, il a remboursé 1 460 € et doit encore 410 €. À titre de comparaison, un prêt personnel à 5,5 % lui aurait coûté environ 1 300 € tout compris.",
      "Après deux mensualités manquées, Théo reçoit un courrier : inscription au FICP. Sa demande de crédit auto est refusée net. Il s'en sort en négociant un échéancier avec l'organisme et en soldant la dette — la radiation du fichier suit le remboursement. Il a depuis un principe simple : jamais de carte de magasin, quel que soit le cadeau de bienvenue.",
    ],
    synthese: [
      "Crédit renouvelable : TAEG souvent > 20 %, conçu pour durer — à éviter.",
      "Rachat de crédits « miracle » = durée rallongée = coût total qui explose.",
      "FICP et FCC : les fichiers Banque de France qui ferment l'accès au crédit.",
      "Deux mensualités impayées suffisent pour être fiché, parfois 5 ans.",
      "La procédure de surendettement est gratuite et confidentielle : une issue, pas une honte.",
    ],
    quiz: [
      {
        question: "Pourquoi le crédit renouvelable est-il considéré comme le plus dangereux ?",
        options: [
          "Parce qu'il est réservé aux gros revenus",
          "Parce qu'il oblige à rembourser en une seule fois",
          "Parce que son taux est très élevé et la réserve incite à repiocher sans fin",
          "Parce qu'il est interdit en France depuis 2010",
        ],
        correct: 2,
        explication: "Avec un TAEG souvent supérieur à 20 % et une réserve qui se reconstitue au fil des remboursements, le crédit renouvelable est conçu pour s'éterniser : on rembourse beaucoup d'intérêts et peu de capital, et la tentation de repiocher est permanente.",
        explicationAlt: "Imagine un seau percé que tu remplis chaque mois : tant que tu repioches dedans, le niveau ne monte jamais. Le renouvelable fonctionne pareil — il n'est pas fait pour être soldé, il est fait pour durer. C'est son modèle économique.",
      },
      {
        question: "Être inscrit au FICP, concrètement, ça veut dire quoi ?",
        options: [
          "Ton salaire est saisi automatiquement chaque mois",
          "L'accès au crédit t'est quasiment fermé, parfois pendant 5 ans",
          "Ton compte bancaire est définitivement clôturé",
          "Tu ne peux plus avoir de carte de paiement à vie",
        ],
        correct: 1,
        explication: "Le FICP recense les incidents de remboursement : les prêteurs le consultent systématiquement et refusent en général tout nouveau crédit à une personne fichée. L'inscription dure jusqu'à régularisation, avec un maximum de 5 ans.",
        explicationAlt: "Vois le FICP comme un signal rouge visible par toutes les banques : tant qu'il est allumé, la porte du crédit reste fermée. Le bon réflexe, c'est de régulariser au plus vite — la radiation suit le remboursement, pas besoin d'attendre les 5 ans.",
      },
    ],
  },

  "3.4": {
    decouverte: [
      "Quand tu empruntes une grosse somme — typiquement pour un logement — la banque exige une assurance emprunteur. Son rôle : prendre le relais des mensualités en cas de coup dur (décès, invalidité, parfois perte d'emploi). C'est une vraie protection, pour toi comme pour tes proches. Mais c'est aussi un poste de coût énorme : sur un crédit immobilier, l'assurance peut représenter le quart, voire le tiers du coût total.",
      "Ce que peu de gens savent : tu n'es pas obligé de prendre l'assurance « maison » de ta banque. C'est ce qu'on appelle la délégation d'assurance — choisir un assureur externe, souvent deux à trois fois moins cher pour un jeune en bonne santé, à condition de présenter des garanties équivalentes.",
      "Et depuis la loi Lemoine de 2022, tu peux changer d'assurance emprunteur à tout moment, sans frais, même après la signature. Pour les prêts de moins de 200 000 €, plus besoin de questionnaire médical. Autrement dit : même un crédit déjà en cours peut être optimisé, et l'économie se chiffre souvent en milliers d'euros.",
    ],
    casConcret: [
      "Camille, 26 ans, infirmière, emprunte 180 000 € sur 25 ans pour son premier appartement. Sa banque propose son assurance groupe à 0,34 % du capital : environ 51 € par mois, soit 15 300 € sur la durée du prêt. Elle compare avec une délégation : 0,11 % pour les mêmes garanties, soit 17 € par mois.",
      "Économie totale : environ 10 200 € — davantage que ce qu'elle avait gagné en négociant son taux de 0,15 point. Six mois après la signature, son courtier lui signale une offre encore moins chère : grâce à la loi Lemoine, elle change en quelques semaines, sans frais ni pénalité. La banque ne peut pas s'y opposer si les garanties sont équivalentes.",
    ],
    synthese: [
      "L'assurance emprunteur rembourse le prêt en cas de décès ou d'invalidité.",
      "Elle peut peser jusqu'à un tiers du coût total d'un crédit immobilier.",
      "Délégation : tu peux choisir un assureur externe, souvent 2-3 fois moins cher.",
      "Loi Lemoine : changement possible À TOUT MOMENT, sans frais.",
      "Seule condition : des garanties équivalentes à celles exigées par la banque.",
    ],
    quiz: [
      {
        question: "Que permet la loi Lemoine depuis 2022 ?",
        options: [
          "Emprunter sans aucune assurance",
          "Changer d'assurance emprunteur à tout moment, sans frais",
          "Obliger la banque à offrir l'assurance la première année",
          "Supprimer l'assurance après 10 ans de remboursement",
        ],
        correct: 1,
        explication: "La loi Lemoine autorise la résiliation et le remplacement de l'assurance emprunteur à n'importe quel moment de la vie du prêt, sans frais ni pénalité, dès lors que le nouveau contrat présente des garanties équivalentes. La banque ne peut pas s'y opposer.",
        explicationAlt: "C'est devenu comme un forfait mobile : tu trouves moins cher ailleurs avec les mêmes services, tu changes quand tu veux. Avant 2022, il fallait attendre la date anniversaire du contrat ; maintenant, le compteur est ouvert en permanence.",
      },
      {
        question: "Sur un crédit immobilier, l'assurance emprunteur représente souvent…",
        options: [
          "Un coût négligeable, autour de 1 % du total",
          "Un coût fixe de 10 € par mois quel que soit le prêt",
          "Jusqu'à un quart, voire un tiers du coût total du crédit",
          "Plus que le prix du bien lui-même",
        ],
        correct: 2,
        explication: "Calculée en pourcentage du capital sur toute la durée du prêt, l'assurance pèse très lourd : souvent autant, voire plus, que ce qu'une négociation de taux peut faire gagner. C'est pour ça que la délégation est le levier d'économie numéro un.",
        explicationAlt: "Sur un prêt de 25 ans, quelques dizaines d'euros d'assurance par mois deviennent des dizaines de milliers d'euros cumulés. En clair : on se bat pour 0,1 % sur le taux en oubliant les 0,2 % gagnables sur l'assurance — alors que c'est souvent là que dort la plus grosse économie.",
      },
    ],
  },
}
