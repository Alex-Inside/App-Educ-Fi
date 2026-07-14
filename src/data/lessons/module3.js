// Contenu long du module 3 « Comprendre le crédit » — 5 pages × 3-4 blocs
// + quiz de 5 questions. Sous-modules : 3.1 à 3.4.

export const MODULE3_LESSONS = {
  '3.1': {
    title: 'Les bases du crédit et le TAEG',
    goal: `À la fin, tu sauras lire un crédit (capital, intérêts, mensualité), comparer deux offres avec le seul chiffre qui compte — le TAEG — et calculer son coût réel.`,
    badge: 'Crédit décodé',
    pages: [
      { tag: 'PAGE 1 · C’EST QUOI UN CRÉDIT', title: 'Emprunter, c’est acheter du temps', blocks: [
        { label: 'Les trois ingrédients', text: `Un crédit, c'est un capital (la somme prêtée), des intérêts (le prix que tu paies pour l'emprunter), et une durée (le nombre de mensualités). Tu rembourses un peu de capital + un peu d'intérêts chaque mois.` },
        { label: 'Le coût, c\'est le temps', text: `Emprunter n'est pas gratuit : tu paies pour disposer de l'argent tout de suite. Plus tu étales le remboursement, plus tu paies d'intérêts au total — même si la mensualité paraît plus douce.` },
        { label: 'Bon ou mauvais crédit', text: `Un crédit peut être utile (acheter un logement qui prend de la valeur, un outil de travail) ou toxique (financer des dépenses de consommation qui, elles, perdent de la valeur). La question n'est pas « puis-je payer la mensualité ? » mais « ce que j'achète vaut-il son coût total ? ».` },
      ] },
      { tag: 'PAGE 2 · LE TAEG', title: 'Le seul chiffre pour comparer', blocks: [
        { label: 'Ce qu\'il contient', text: `Le TAEG (Taux Annuel Effectif Global) regroupe TOUT le coût du crédit : les intérêts, les frais de dossier, l'assurance obligatoire, les frais annexes. C'est le seul chiffre qui permet de comparer deux offres à armes égales.` },
        { label: 'Pas le taux de la pub', text: `Le taux affiché en gros (« 0,9 % ! ») cache souvent des frais. Le TAEG, lui, ne ment pas : c'est le prix « tout compris ». Le prêteur a l'obligation légale de te le communiquer par écrit.` },
        { label: 'Le réflexe', text: `Deux crédits ? Compare leurs TAEG, jamais leurs taux nominaux ni leurs mensualités. Le plus petit TAEG gagne — toutes choses égales par ailleurs (même montant, même durée).` },
      ] },
      { tag: 'PAGE 3 · LE COÛT RÉEL', title: 'Fais toujours le calcul total', blocks: [
        { label: 'Mensualité × nombre de mois', text: `Le vrai coût d'un crédit se calcule en une multiplication : mensualité × nombre de mensualités. Compare le résultat au prix comptant : l'écart, c'est ce que le crédit t'a coûté.` },
        { label: 'Un exemple qui pique', text: `Un téléphone à 850 € financé « 29 €/mois pendant 36 mois » : 29 × 36 = 1 044 €. Soit 194 € de plus — presque 23 % du prix — pour l'avoir tout de suite.` },
        { label: 'La durée piège', text: `Allonger la durée baisse la mensualité mais gonfle le coût total. « Payer moins par mois » veut souvent dire « payer beaucoup plus au final ».` },
      ] },
      { tag: 'PAGE 4 · TES DROITS', title: 'Ce que la loi t’accorde', blocks: [
        { label: 'L\'information précontractuelle', text: `Avant de signer, le prêteur doit te remettre une fiche standardisée (la « FISE » pour l'immo, une fiche d'information pour le conso) qui récapitule montant, TAEG, coût total et mensualités. Lis-la, compare-la.` },
        { label: 'Le délai de rétractation', text: `Pour un crédit à la consommation, tu disposes de 14 jours calendaires pour te rétracter après signature, sans avoir à te justifier. Un délai qui laisse le temps à la raison de revenir.` },
        { label: 'Le remboursement anticipé', text: `Tu peux rembourser ton crédit en avance, en totalité ou en partie. Des indemnités peuvent s'appliquer (encadrées et souvent modestes sur le conso), mais tu économises les intérêts restants.` },
      ] },
      { tag: 'PAGE 5 · LE RÉFLEXE KAPI', title: 'Avant de signer quoi que ce soit', blocks: [
        { label: 'Pourquoi c\'est crucial', text: `Un crédit t'engage pour des mois ou des années. Cinq minutes de vérification avant de signer peuvent t'épargner des centaines d'euros et beaucoup de stress.` },
        { label: 'Le réflexe en 3 gestes', items: ['Demande le TAEG par écrit et compare-le à une autre offre', 'Calcule le coût total : mensualité × nombre de mois, versus le prix comptant', 'Vérifie que la mensualité + tes autres crédits restent raisonnables face à tes revenus'] },
        { label: 'Face à un vendeur', items: ['Ne signe jamais sous pression le jour même — tu as le droit de réfléchir', 'Méfie-toi du « paiement en X fois » présenté comme neutre : c\'est un crédit', 'Souviens-toi des 14 jours de rétractation sur le conso : tu peux revenir en arrière'] },
      ] },
    ],
    questions: [
      { q: 'Pour comparer deux crédits, le seul bon chiffre est…', opts: ['Le taux affiché dans la pub', 'La mensualité', 'Le TAEG'], good: 2, explain: `Le TAEG inclut intérêts, frais de dossier et assurance : c'est le prix « tout compris », le seul comparable d'une offre à l'autre.` },
      { q: 'Un téléphone à 850 € payé 29 €/mois pendant 36 mois te coûte…', opts: ['850 €', '1 044 €', '900 €'], good: 1, explain: `29 × 36 = 1 044 €, soit 194 € de plus que le prix comptant. Toujours faire mensualité × nombre de mois.` },
      { q: 'Allonger la durée d\'un crédit…', opts: ['Baisse la mensualité mais augmente le coût total', 'Réduit le coût total', 'N\'a aucun effet'], good: 0, explain: `Étaler baisse la mensualité mais fait payer des intérêts plus longtemps : le coût final grimpe.` },
      { q: 'Après avoir signé un crédit conso, tu disposes de…', opts: ['Aucun recours', '14 jours pour te rétracter sans justification', '48 heures seulement'], good: 1, explain: `Le crédit à la consommation ouvre un délai légal de rétractation de 14 jours calendaires.` },
      { q: 'Le TAEG t\'est communiqué…', opts: ['Seulement si tu insistes beaucoup', 'Obligatoirement, par écrit, avant signature', 'Uniquement après la signature'], good: 1, explain: `Le prêteur a l'obligation légale de te fournir le TAEG par écrit avant l'engagement, via une fiche d'information standardisée.` },
    ],
  },

  '3.2': {
    title: 'Les types de crédit et leur bon usage',
    goal: `À la fin, tu sauras distinguer crédit affecté, personnel, renouvelable, paiement fractionné et crédit immobilier — et reconnaître lesquels servent, lesquels piègent.`,
    badge: 'Bon crédit, bon usage',
    pages: [
      { tag: 'PAGE 1 · AFFECTÉ VS PERSONNEL', title: 'Deux façons d’emprunter pour consommer', blocks: [
        { label: 'Le crédit affecté', text: `Il finance un achat précis (une voiture, des travaux) et lui est lié : si la vente est annulée, le crédit l'est aussi. Plus protecteur, car les deux contrats sont solidaires.` },
        { label: 'Le prêt personnel', text: `Une somme versée sans justification d'usage, remboursée par mensualités fixes. Plus souple, mais aucune protection liée à l'achat. Taux souvent plus intéressant que le renouvelable.` },
        { label: 'Le bon usage', text: `Pour un besoin ponctuel et identifié, un crédit affecté ou un prêt personnel à TAEG raisonnable peut se justifier — à condition d'avoir fait le calcul du coût total.` },
      ] },
      { tag: 'PAGE 2 · LE RENOUVELABLE', title: 'Le plus cher de tous', blocks: [
        { label: 'Comment ça marche', text: `Le crédit renouvelable (ou « revolving », « réserve d'argent ») est une réserve dans laquelle tu pioches et qui se reconstitue à mesure que tu rembourses. Souvent adossé à une carte de magasin.` },
        { label: 'Pourquoi c\'est piégeux', text: `Son taux est très élevé (souvent 15 à 21 %), et comme la réserve se recharge, on peut rembourser pendant des années sans jamais en sortir. Les petites mensualités masquent un coût énorme.` },
        { label: 'Le réflexe', text: `À éviter par défaut. Si on t'en propose un en caisse « pour avoir -10 % aujourd'hui », le rabais est presque toujours ridicule face au coût du crédit. Décline poliment.` },
      ] },
      { tag: 'PAGE 3 · LE PAIEMENT FRACTIONNÉ', title: 'Le « 4 fois » est un crédit', blocks: [
        { label: 'Ce que c\'est vraiment', text: `Le paiement en 3 ou 4 fois (BNPL, « Buy Now Pay Later ») est un crédit à la consommation, même s'il ne dit pas son nom. Il paraît indolore parce qu'il découpe la somme.` },
        { label: 'Les risques', text: `On cumule plusieurs « petits » fractionnements sur des achats différents, et les mensualités s'empilent le mois suivant. Un retard entraîne des pénalités, et un impayé peut mener au fichage.` },
        { label: 'Le bon réflexe', text: `Avant d'accepter un « X fois », demande-toi : « est-ce que je pourrais payer comptant ? » Si non, c'est que l'achat n'est pas dans ton budget — pas que tu as besoin de le fractionner.` },
      ] },
      { tag: 'PAGE 4 · LE CRÉDIT IMMOBILIER', title: 'Le « bon » crédit', blocks: [
        { label: 'Pourquoi il est différent', text: `Le crédit immobilier finance un bien qui, en général, conserve ou prend de la valeur, et remplace un loyer par de la constitution de patrimoine. Ses taux sont bien plus bas que le conso, sur de longues durées.` },
        { label: 'Le taux d\'endettement', text: `Les banques veillent à ce que tes mensualités de crédit (immo + autres) ne dépassent pas ~35 % de tes revenus nets, assurance comprise. C'est une protection contre le surendettement, pas une punition.` },
        { label: 'Ce qui compte pour l\'obtenir', text: `Un apport (souvent ~10 % + frais), des revenus stables, et surtout la bonne tenue de tes comptes sur les 3 derniers mois : un découvert récurrent peut faire capoter un dossier. Ton historique bancaire est ton CV financier.` },
      ] },
      { tag: 'PAGE 5 · LE RÉFLEXE KAPI', title: 'Nommer le crédit qu’on te propose', blocks: [
        { label: 'Pourquoi', text: `Savoir quel type de crédit on te propose te dit immédiatement s'il faut fuir (renouvelable), réfléchir (conso) ou s'organiser (immo).` },
        { label: 'Le tri en 3 questions', items: ['Est-ce un renouvelable / une « réserve d\'argent » ? → décline par défaut', 'Est-ce un « paiement en X fois » ? → c\'est un crédit, calcule le coût et ta capacité', 'Est-ce pour un bien qui prend de la valeur (immo) ? → là, le crédit peut te servir'] },
        { label: 'Toujours', items: ['Compare les TAEG, jamais les mensualités', 'Vérifie que l\'ensemble de tes crédits reste sous ~35 % de tes revenus', 'En cas de doute, dors dessus : un bon crédit attend 24 heures'] },
      ] },
    ],
    questions: [
      { q: 'Le crédit le plus cher et le plus piégeux est généralement…', opts: ['Le crédit immobilier', 'Le crédit renouvelable', 'Le prêt personnel'], good: 1, explain: `Le renouvelable a un taux très élevé et se recharge : on peut rembourser des années sans en sortir.` },
      { q: 'Le paiement en 4 fois est…', opts: ['Un simple facilité de caisse gratuite', 'Un crédit à la consommation', 'Une réduction'], good: 1, explain: `C'est un crédit, avec pénalités en cas de retard et fichage possible en cas d'impayé — même s'il ne le dit pas.` },
      { q: 'Le taux d\'endettement à ne pas dépasser tourne autour de…', opts: ['15 % des revenus', '35 % des revenus nets, assurance comprise', '60 % des revenus'], good: 1, explain: `Au-delà d'environ 35 %, le risque de surendettement grimpe : les banques s'y tiennent pour te protéger comme pour se protéger.` },
      { q: 'Ce qui distingue le crédit immobilier des autres, c\'est…', opts: ['Il finance un bien qui garde/prend de la valeur, à taux bas', 'Il est toujours gratuit', 'Il n\'a pas de TAEG'], good: 0, explain: `Il construit du patrimoine (au lieu d'un loyer perdu), avec des taux bien plus bas que le conso.` },
      { q: 'On te propose un renouvelable en caisse pour « -10 % aujourd\'hui ». Tu…', opts: ['Acceptes, -10 % c\'est toujours ça', 'Déclines : le coût du crédit dépasse presque toujours le rabais', 'Prends-en deux'], good: 1, explain: `Le petit rabais immédiat est dérisoire face au coût d'un crédit renouvelable. Décline par défaut.` },
    ],
  },

  '3.3': {
    title: 'Les pièges du crédit et le fichage',
    goal: `À la fin, tu sauras repérer la spirale du surendettement, comprendre le fichage FICP/FCC, et connaître les recours gratuits pour t'en sortir.`,
    badge: 'Pièges déjoués',
    pages: [
      { tag: 'PAGE 1 · LA SPIRALE', title: 'Comment on bascule sans s’en rendre compte', blocks: [
        { label: 'L\'accumulation', text: `Rarement un seul gros crédit : plutôt plusieurs « petits » (un renouvelable, deux paiements fractionnés, un découvert permanent) qui, ensemble, pèsent lourd. Chacun paraît gérable ; le total ne l'est plus.` },
        { label: 'Le crédit pour rembourser le crédit', text: `Le signal d'alerte majeur : emprunter (ou piocher dans un renouvelable) pour honorer une autre échéance. C'est le début de la spirale — la dette qui nourrit la dette.` },
        { label: 'Les signaux', text: `Découvert chronique, mensualités qui dépassent le tiers des revenus, appels de créanciers, incapacité à faire face à un imprévu : autant de voyants qui doivent alerter tôt.` },
      ] },
      { tag: 'PAGE 2 · LE SURENDETTEMENT', title: 'Un statut, pas une fatalité', blocks: [
        { label: 'La définition', text: `Le surendettement, c'est l'impossibilité manifeste de faire face à l'ensemble de ses dettes non professionnelles. Ce n'est pas une honte : c'est une situation reconnue, avec une procédure pour en sortir.` },
        { label: 'La commission de surendettement', text: `Gérée par la Banque de France, gratuite, elle examine ton dossier et peut geler les dettes, rééchelonner, réduire les taux, voire effacer une partie des dettes selon ta situation.` },
        { label: 'Agir tôt', text: `Plus on saisit tôt, plus les solutions sont douces. Attendre l'accumulation des incidents réduit les options et aggrave le fichage.` },
      ] },
      { tag: 'PAGE 3 · LE FICHAGE', title: 'FICP et FCC, deux fichiers à connaître', blocks: [
        { label: 'Le FICP', text: `Fichier des Incidents de remboursement des Crédits aux Particuliers : on y est inscrit après des mensualités impayées ou un dossier de surendettement. Conséquence : accès au crédit quasi bloqué, pour une durée pouvant aller jusqu'à 5 ans (7 pour le surendettement).` },
        { label: 'Le FCC', text: `Fichier Central des Chèques : inscription en cas de chèque sans provision non régularisé (interdiction bancaire, plus de chéquier) ou de retrait de carte pour usage abusif.` },
        { label: 'Ce que ça change', text: `Fiché, tu peux garder un compte (droit au compte garanti) mais tu n'obtiens plus de crédit. D'où l'importance d'éviter le premier incident — ou de régulariser vite.` },
      ] },
      { tag: 'PAGE 4 · S’EN SORTIR', title: 'Des aides gratuites existent', blocks: [
        { label: 'Les Points Conseil Budget', text: `Les PCB sont des structures gratuites, partout en France, qui t'aident à faire le point, négocier avec les créanciers et monter un dossier. Un accompagnement neutre, sans jugement.` },
        { label: 'Parler à ses créanciers', text: `Avant l'incident, contacte tes créanciers : un report d'échéance ou un rééchelonnement s'obtient souvent, et vaut toujours mieux qu'un impayé qui déclenche frais et fichage.` },
        { label: 'L\'offre clientèle fragile', text: `Ta banque doit proposer, aux clients en difficulté, une offre spécifique plafonnant les frais d'incident (autour de 20 €/mois). Demande-la : elle stoppe l'hémorragie des frais.` },
      ] },
      { tag: 'PAGE 5 · LE RÉFLEXE KAPI', title: 'Reprendre la main avant qu’il soit tard', blocks: [
        { label: 'Le principe', text: `Face aux dettes, le pire réflexe est le silence. Le bon réflexe : faire l'inventaire, prioriser, et demander de l'aide tôt — c'est gratuit et ça change tout.` },
        { label: 'Si ça se tend', items: ['Liste toutes tes dettes : montant restant, mensualité, taux', 'Contacte tes créanciers AVANT l\'incident pour négocier un report', 'Demande l\'offre « clientèle fragile » à ta banque'] },
        { label: 'Si c\'est déjà lourd', items: ['Prends rendez-vous avec un Point Conseil Budget (gratuit)', 'Envisage un dossier de surendettement à la Banque de France — c\'est un droit', 'Ne prends jamais un nouveau crédit pour en rembourser un autre'] },
      ] },
    ],
    questions: [
      { q: 'Le signal d\'alerte majeur du surendettement, c\'est…', opts: ['Avoir un seul crédit immobilier', 'Emprunter pour rembourser un autre crédit', 'Épargner chaque mois'], good: 1, explain: `Utiliser du crédit pour honorer une échéance, c'est la dette qui nourrit la dette : le début de la spirale.` },
      { q: 'La commission de surendettement de la Banque de France est…', opts: ['Payante et réservée aux entreprises', 'Gratuite et peut rééchelonner ou effacer une partie des dettes', 'Un organisme de crédit'], good: 1, explain: `Gratuite, elle examine ton dossier et peut geler, rééchelonner, réduire les taux, voire effacer selon ta situation.` },
      { q: 'Être inscrit au FICP signifie…', opts: ['Que tu ne peux plus avoir de compte bancaire', 'Que l\'accès au crédit est quasi bloqué (jusqu\'à 5 ans)', 'Que tu paies moins d\'impôts'], good: 1, explain: `Le FICP fiche les incidents de remboursement : le crédit devient quasi inaccessible, mais tu gardes le droit à un compte.` },
      { q: 'Pour se faire aider gratuitement face aux dettes, on peut aller…', opts: ['Chez un organisme de crédit', 'À un Point Conseil Budget', 'Nulle part, il faut se débrouiller'], good: 1, explain: `Les Points Conseil Budget, gratuits et partout en France, aident à faire le point et à négocier — sans jugement.` },
      { q: 'Le pire réflexe face à des dettes qui s\'accumulent ?', opts: ['Prendre un nouveau crédit pour rembourser les autres', 'Contacter ses créanciers', 'Faire l\'inventaire de ses dettes'], good: 0, explain: `Empiler un crédit de plus aggrave la spirale. Inventaire, dialogue avec les créanciers et aide gratuite sont les bons réflexes.` },
    ],
  },

  '3.4': {
    title: 'L’assurance emprunteur',
    goal: `À la fin, tu sauras ce que couvre l'assurance emprunteur, pourquoi elle pèse si lourd dans le coût d'un crédit, et comment la changer pour économiser (loi Lemoine, délégation).`,
    badge: 'Assurance maîtrisée',
    pages: [
      { tag: 'PAGE 1 · C’EST QUOI', title: 'Le filet de sécurité du crédit', blocks: [
        { label: 'Son rôle', text: `L'assurance emprunteur rembourse tout ou partie de ton crédit si un accident de la vie t'empêche de payer. Elle protège à la fois la banque et tes proches, qui n'héritent pas de la dette.` },
        { label: 'Les garanties', text: `Principales garanties : décès, PTIA (perte totale et irréversible d'autonomie), invalidité, et souvent l'ITT (incapacité temporaire de travail). Ce sont elles qui prennent le relais des mensualités le cas échéant.` },
        { label: 'Obligatoire en pratique', text: `La loi ne l'impose pas, mais aucune banque ne prête sans elle pour un crédit immobilier. Elle est donc incontournable — d'où l'intérêt de bien la choisir.` },
      ] },
      { tag: 'PAGE 2 · CE QUE ÇA COÛTE', title: 'Souvent un tiers du coût du crédit', blocks: [
        { label: 'Un poids énorme', text: `Sur un crédit immobilier, l'assurance peut représenter jusqu'à un tiers du coût total du crédit. Sur un prêt de 200 000 €, cela se chiffre en milliers, voire dizaines de milliers d'euros.` },
        { label: 'Elle est dans le TAEG', text: `Bonne nouvelle : l'assurance obligatoire est incluse dans le TAEG (revois la leçon 3.1). C'est donc en comparant les TAEG « tout compris » que tu vois vraiment l'impact de l'assurance.` },
        { label: 'Le levier d\'économie n°1', text: `Comme la banque propose son assurance « maison » (souvent chère), c'est là que se cache la plus grosse économie possible sur un crédit immobilier — à garanties équivalentes.` },
      ] },
      { tag: 'PAGE 3 · LA DÉLÉGATION', title: 'Tu n’es pas obligé de prendre celle de la banque', blocks: [
        { label: 'Le principe', text: `La délégation d'assurance, c'est le droit de choisir un autre assureur que ta banque pour couvrir ton prêt. La banque ne peut pas refuser, tant que les garanties sont au moins équivalentes aux siennes.` },
        { label: 'L\'équivalence des garanties', text: `Le seul critère que la banque peut exiger : que le contrat externe offre un niveau de garanties équivalent. Elle te fournit une fiche des garanties minimales à respecter — compare sur cette base.` },
        { label: 'Combien ça rapporte', text: `Pour un jeune emprunteur en bonne santé, une délégation peut diviser le coût de l'assurance par deux ou trois par rapport au contrat groupe de la banque. Des milliers d'euros sur la durée.` },
      ] },
      { tag: 'PAGE 4 · LA LOI LEMOINE', title: 'Changer à tout moment', blocks: [
        { label: 'Ce qu\'elle a changé', text: `Depuis la loi Lemoine (2022), tu peux résilier et changer ton assurance emprunteur À TOUT MOMENT, sans frais ni pénalité, à garanties équivalentes. Fini l'obligation d'attendre une date anniversaire.` },
        { label: 'Le questionnaire de santé', text: `La loi Lemoine a aussi supprimé le questionnaire médical pour les prêts immobiliers modestes remboursés avant 60 ans (sous un plafond de capital assuré) : un vrai progrès d'accès pour les jeunes emprunteurs.` },
        { label: 'Le geste concret', text: `Même avec un crédit déjà en cours, tu peux faire jouer la concurrence dès aujourd'hui. Une simulation en ligne, un devis équivalent moins cher, et tu demandes la substitution : la banque doit répondre sous 10 jours ouvrés.` },
      ] },
      { tag: 'PAGE 5 · LE RÉFLEXE KAPI', title: 'Ne jamais signer l’assurance par défaut', blocks: [
        { label: 'Pourquoi', text: `Accepter machinalement l'assurance de la banque, c'est souvent laisser filer l'économie la plus facile de tout ton crédit. Cinq minutes de comparaison peuvent valoir plusieurs milliers d'euros.` },
        { label: 'Au moment du prêt', items: ['Demande la fiche des garanties minimales exigées par la banque', 'Fais chiffrer une délégation externe à garanties équivalentes', 'Compare les TAEG « tout compris », pas seulement le taux du prêt'] },
        { label: 'Même après (loi Lemoine)', items: ['Crédit déjà en cours ? Compare et change à tout moment, sans frais', 'Vérifie que les garanties restent équivalentes avant de substituer', 'Parle-en autour de toi : beaucoup paient trop sans le savoir'] },
      ] },
    ],
    questions: [
      { q: 'L\'assurance emprunteur sert à…', opts: ['Rembourser le crédit en cas d\'accident de la vie (décès, invalidité…)', 'Payer les frais de dossier', 'Réduire le prix du bien'], good: 0, explain: `Elle prend le relais des mensualités en cas de décès, invalidité ou incapacité — et évite que tes proches héritent de la dette.` },
      { q: 'Sur un crédit immobilier, l\'assurance peut représenter…', opts: ['Un montant négligeable', 'Jusqu\'à un tiers du coût total du crédit', 'Toujours moins de 1 %'], good: 1, explain: `C'est un poste majeur — d'où l'intérêt de le comparer : c'est souvent la plus grosse économie possible sur un crédit.` },
      { q: 'La « délégation d\'assurance », c\'est…', opts: ['Laisser la banque choisir pour toi', 'Choisir un autre assureur que la banque, à garanties équivalentes', 'Ne pas s\'assurer du tout'], good: 1, explain: `Tu as le droit de prendre une assurance externe ; la banque ne peut refuser tant que les garanties sont au moins équivalentes.` },
      { q: 'Depuis la loi Lemoine (2022), tu peux changer d\'assurance emprunteur…', opts: ['Seulement à la date anniversaire', 'À tout moment, sans frais, à garanties équivalentes', 'Jamais une fois signé'], good: 1, explain: `La loi Lemoine permet la résiliation et le changement à tout moment, sans frais — un levier d'économie puissant.` },
      { q: 'Le bon réflexe face à l\'assurance proposée par la banque ?', opts: ['La signer par défaut, c\'est plus simple', 'La comparer avec une délégation à garanties équivalentes', 'La refuser totalement pour ne rien payer'], good: 1, explain: `Ne jamais signer par défaut : comparer avec une délégation équivalente peut diviser le coût par deux ou trois.` },
    ],
  },
}
