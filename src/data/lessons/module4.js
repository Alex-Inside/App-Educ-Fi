// Contenu long du module 4 « L'épargne salariale » — 5 pages × 3-4 blocs
// + quiz de 5 questions. Sous-modules : 4.1 à 4.5.
// Contenu strictement pédagogique : on explique des dispositifs d'entreprise
// (intéressement, participation, PEE, abondement, PER collectif) et leur
// fiscalité. Aucune recommandation de produit, d'établissement, ni conseil
// personnalisé. Les repères chiffrés sont indicatifs et peuvent évoluer.

export const MODULE4_LESSONS = {
  '4.1': {
    title: 'Intéressement et participation',
    goal: `À la fin, tu sauras distinguer l'intéressement de la participation, comprendre d'où vient cet argent, et le choix clé : le percevoir tout de suite ou le placer.`,
    badge: 'Prime décodée',
    pages: [
      { tag: 'PAGE 1 · DE L’ARGENT EN PLUS', title: 'Une part des résultats, pour toi', blocks: [
        { label: 'De quoi on parle', text: `L'épargne salariale, c'est un ensemble de dispositifs qui permettent à ton entreprise de te verser de l'argent EN PLUS de ton salaire, lié aux résultats collectifs. Deux briques de base : l'intéressement et la participation.` },
        { label: 'Pourquoi ça existe', text: `L'idée : associer les salariés à la réussite de l'entreprise. Quand elle va bien, une partie de la valeur créée est partagée. C'est un complément de rémunération, encouragé par l'État via des avantages fiscaux.` },
        { label: 'Ce que ça change pour toi', text: `Beaucoup de salariés touchent ces sommes sans bien comprendre les règles — et passent à côté d'avantages importants. Comprendre ces dispositifs, c'est parfois récupérer plusieurs centaines d'euros par an.` },
      ] },
      { tag: 'PAGE 2 · L’INTÉRESSEMENT', title: 'La prime liée à la performance', blocks: [
        { label: 'Ce que c’est', text: `L'intéressement est une prime collective liée à la performance de l'entreprise (résultats, objectifs atteints). Il est facultatif : l'entreprise le met en place via un accord, quelle que soit sa taille.` },
        { label: 'Comment il est calculé', text: `Le montant dépend d'une formule définie dans l'accord (souvent liée au bénéfice, au chiffre d'affaires ou à des objectifs). Il varie donc chaque année, et peut être nul si les objectifs ne sont pas atteints.` },
        { label: 'Pour qui', text: `Tous les salariés de l'entreprise en bénéficient (une condition d'ancienneté de 3 mois maximum peut s'appliquer). La répartition peut être uniforme, proportionnelle au salaire, au temps de présence, ou une combinaison.` },
      ] },
      { tag: 'PAGE 3 · LA PARTICIPATION', title: 'Le partage obligatoire du bénéfice', blocks: [
        { label: 'Ce que c’est', text: `La participation redistribue aux salariés une partie du bénéfice de l'entreprise. Elle est obligatoire dans les entreprises d'au moins 50 salariés, et facultative en dessous.` },
        { label: 'Une formule encadrée', text: `Contrairement à l'intéressement, son calcul suit une formule légale (la « réserve spéciale de participation »). L'entreprise ne fixe pas librement le montant : il découle du bénéfice réalisé.` },
        { label: 'La différence clé', text: `Retiens la nuance : participation = partage du bénéfice, obligatoire dès 50 salariés, formule légale. Intéressement = prime de performance, facultatif, formule libre définie par accord. Les deux peuvent coexister.` },
      ] },
      { tag: 'PAGE 4 · LE CHOIX QUI COMPTE', title: 'Percevoir ou placer ?', blocks: [
        { label: 'La décision', text: `Quand tu reçois de l'intéressement ou de la participation, tu as un choix, dans un délai limité (souvent 15 jours) : soit percevoir la somme immédiatement, soit la placer sur un plan d'épargne salariale (PEE ou PER, voir sous-modules suivants).` },
        { label: 'L’enjeu fiscal', text: `Ce choix a une conséquence directe : perçue immédiatement, la somme est soumise à l'impôt sur le revenu. Placée sur un plan, elle en est exonérée (seuls les prélèvements sociaux, ~9,7 %, s'appliquent). Placer peut donc rapporter plus… mais bloque l'argent.` },
        { label: 'Pas de réponse unique', text: `Percevoir dépanne si tu as besoin de liquidités ; placer optimise la fiscalité et prépare l'avenir, au prix d'un blocage. Le bon choix dépend de ta situation — c'est justement l'objet du dernier sous-module.` },
      ] },
      { tag: 'PAGE 5 · LE RÉFLEXE KAPI', title: 'Savoir ce à quoi tu as droit', blocks: [
        { label: 'Pourquoi c’est crucial', text: `Ces sommes t'appartiennent, mais les règles sont mal connues, donc mal utilisées. Le premier pas n'est pas de décider, c'est de savoir ce que ton entreprise propose.` },
        { label: 'Les bons réflexes', items: ['Chercher si ton entreprise a un accord d’intéressement et/ou de participation', 'Repérer chaque année le délai pour choisir entre percevoir et placer', 'Comprendre que placer exonère d’impôt sur le revenu, mais bloque l’argent'] },
        { label: 'À retenir', items: ['Intéressement = prime de performance, facultative, formule libre', 'Participation = partage du bénéfice, obligatoire dès 50 salariés', 'Perçu = imposable ; placé = exonéré d’impôt sur le revenu (mais bloqué)'] },
      ] },
    ],
    questions: [
      { q: 'La participation est obligatoire dans les entreprises…', opts: ['De toutes tailles', 'D’au moins 50 salariés', 'De moins de 10 salariés'], good: 1, explain: `La participation (partage du bénéfice) est obligatoire à partir de 50 salariés ; en dessous, elle est facultative.` },
      { q: 'L’intéressement est…', opts: ['Une prime de performance facultative, définie par accord', 'Un partage obligatoire du bénéfice', 'Une cotisation retraite'], good: 0, explain: `L'intéressement est facultatif et lié à la performance, selon une formule définie librement par accord d'entreprise.` },
      { q: 'Si tu perçois immédiatement ton intéressement (au lieu de le placer)…', opts: ['Il est exonéré de tout', 'Il devient soumis à l’impôt sur le revenu', 'Il est bloqué 5 ans'], good: 1, explain: `Perçue immédiatement, la somme entre dans ton revenu imposable ; placée sur un plan, elle échappe à l'impôt sur le revenu.` },
      { q: 'La grande différence entre participation et intéressement, c’est…', opts: ['Participation = formule légale et obligatoire dès 50 salariés ; intéressement = facultatif, formule libre', 'Il n’y en a aucune', 'L’intéressement est réservé aux cadres'], good: 0, explain: `Participation : partage du bénéfice, obligatoire dès 50 salariés, formule légale. Intéressement : prime de performance facultative, formule libre.` },
      { q: 'Placer sa prime sur un plan d’épargne salariale plutôt que la percevoir…', opts: ['N’a aucun effet', 'Exonère d’impôt sur le revenu mais bloque l’argent', 'Garantit un doublement'], good: 1, explain: `Le placement exonère d'impôt sur le revenu (hors prélèvements sociaux) mais l'argent devient indisponible un temps.` },
    ],
  },

  '4.2': {
    title: 'Le Plan d’Épargne Entreprise (PEE)',
    goal: `À la fin, tu comprendras ce qu'est le PEE, comment il investit ton argent, le blocage de 5 ans et ses exceptions, et l'avantage fiscal sur les gains.`,
    badge: 'PEE en main',
    pages: [
      { tag: 'PAGE 1 · UN RÉCEPTACLE', title: 'L’enveloppe de l’épargne salariale', blocks: [
        { label: 'Ce que c’est', text: `Le PEE (Plan d'Épargne Entreprise) est une enveloppe mise à disposition par ton employeur pour y placer ton épargne salariale : intéressement, participation, tes versements volontaires, et l'abondement (voir sous-module suivant).` },
        { label: 'Contenant, pas contenu', text: `Comme le PEA ou l'assurance-vie vus ailleurs, le PEE est un « contenant ». À l'intérieur, l'argent est investi dans des supports : des FCPE (fonds communs de placement d'entreprise), parfois des actions de ton entreprise.` },
        { label: 'Qui le met en place', text: `C'est l'entreprise qui ouvre le dispositif ; tu n'as pas à le créer. Ton rôle est de comprendre comment il fonctionne pour bien t'en servir — ou décider de ne pas l'alimenter.` },
      ] },
      { tag: 'PAGE 2 · COMMENT C’EST INVESTI', title: 'Les FCPE', blocks: [
        { label: 'Les fonds proposés', text: `Ton épargne est placée dans un ou plusieurs FCPE au choix, avec des profils de risque différents : plus prudents (monétaires, obligataires) ou plus dynamiques (actions). Tu répartis selon ton horizon et ta tolérance au risque.` },
        { label: 'Le risque existe', text: `Sauf fonds à capital garanti, la valeur de tes parts peut monter et descendre : le PEE n'est pas un livret. Les principes des modules « investir » s'appliquent : diversification, horizon long, frais à surveiller.` },
        { label: 'L’actionnariat salarié', text: `Certains PEE proposent d'investir en actions de ta propre entreprise, parfois avec une décote. Attention : concentrer épargne ET salaire sur le même employeur augmente le risque (si l'entreprise va mal, tu es doublement exposé).` },
      ] },
      { tag: 'PAGE 3 · LE BLOCAGE DE 5 ANS', title: 'Indisponible, mais pas piégé', blocks: [
        { label: 'La règle', text: `L'argent placé sur un PEE est en principe bloqué 5 ans à compter de chaque versement. C'est la contrepartie de l'avantage fiscal. Ce n'est pas de l'argent pour le quotidien : c'est de l'épargne à moyen terme.` },
        { label: 'Les déblocages anticipés', text: `De nombreux cas permettent de récupérer l'argent avant 5 ans, sans perdre l'avantage : mariage ou PACS, naissance/adoption d'un 3e enfant, achat de la résidence principale, rupture du contrat de travail, invalidité, surendettement, entre autres.` },
        { label: 'Le bon réflexe', text: `Avant de placer, vérifie que tu n'auras pas besoin de cette somme à court terme — sauf si un cas de déblocage prévu (achat de résidence principale, par exemple) correspond justement à ton projet.` },
      ] },
      { tag: 'PAGE 4 · L’AVANTAGE FISCAL', title: 'Pourquoi le blocage est récompensé', blocks: [
        { label: 'Sur les sommes versées', text: `L'intéressement et la participation placés sur le PEE sont exonérés d'impôt sur le revenu (dans la limite de plafonds). Seuls les prélèvements sociaux (~9,7 %) s'appliquent à l'entrée.` },
        { label: 'Sur les gains', text: `Les plus-values réalisées dans le PEE sont, elles aussi, exonérées d'impôt sur le revenu à la sortie. Restent les prélèvements sociaux (17,2 %) sur les gains. C'est fiscalement très favorable comparé à un placement ordinaire.` },
        { label: 'Le cumul gagnant', text: `Exonération à l'entrée + exonération des gains + éventuel abondement de l'employeur : le PEE est souvent l'un des placements au meilleur rapport rendement/fiscalité accessibles à un salarié. D'où l'intérêt de bien le connaître.` },
      ] },
      { tag: 'PAGE 5 · LE RÉFLEXE KAPI', title: 'Lire le règlement de son PEE', blocks: [
        { label: 'Pourquoi', text: `Deux PEE ne se valent pas : fonds proposés, frais, abondement varient. Savoir lire le règlement de TON PEE, c'est en tirer le meilleur au lieu de subir des choix par défaut.` },
        { label: 'Les points à repérer', items: ['Les FCPE disponibles et leur profil de risque (prudent → dynamique)', 'Les frais de gestion prélevés', 'La part éventuelle en actions de l’entreprise (risque de concentration)'] },
        { label: 'À retenir', items: ['Le PEE est une enveloppe investie en FCPE, bloquée 5 ans', 'De nombreux cas de déblocage anticipé existent (dont l’achat de résidence principale)', 'Exonération d’impôt sur le revenu à l’entrée ET sur les gains : très avantageux'] },
      ] },
    ],
    questions: [
      { q: 'Le PEE est…', opts: ['Un livret à capital garanti', 'Une enveloppe investie (FCPE), bloquée 5 ans en principe', 'Un crédit d’entreprise'], good: 1, explain: `Le PEE est un contenant investi dans des FCPE, avec un blocage de principe de 5 ans par versement.` },
      { q: 'L’argent d’un PEE peut être débloqué avant 5 ans notamment pour…', opts: ['S’offrir des vacances', 'L’achat de la résidence principale', 'Aucun cas'], good: 1, explain: `Plusieurs cas de déblocage anticipé existent : mariage/PACS, 3e enfant, achat de résidence principale, rupture du contrat, etc.` },
      { q: 'Les gains réalisés dans un PEE sont…', opts: ['Imposés au barème plein', 'Exonérés d’impôt sur le revenu (restent les prélèvements sociaux)', 'Toujours perdus'], good: 1, explain: `Les plus-values du PEE échappent à l'impôt sur le revenu ; seuls les prélèvements sociaux (17,2 %) s'appliquent sur les gains.` },
      { q: 'Investir tout son PEE en actions de sa propre entreprise…', opts: ['Supprime tout risque', 'Concentre le risque (épargne + salaire sur le même employeur)', 'Est obligatoire'], good: 1, explain: `Si l'entreprise va mal, tu perds sur ton épargne ET ton emploi : la concentration augmente le risque, la diversification l'atténue.` },
      { q: 'À l’intérieur d’un PEE, ton argent est investi dans…', opts: ['Des FCPE (fonds), au profil de risque variable', 'Un compte courant', 'De l’or physique uniquement'], good: 0, explain: `Le PEE propose des FCPE, du plus prudent au plus dynamique : la valeur des parts peut donc varier.` },
    ],
  },

  '4.3': {
    title: 'L’abondement',
    goal: `À la fin, tu comprendras l'abondement — l'argent que l'employeur ajoute à tes versements — pourquoi c'est souvent « l'argent le plus rentable » d'un salarié, et ses plafonds.`,
    badge: 'Abondement capté',
    pages: [
      { tag: 'PAGE 1 · DE L’ARGENT AJOUTÉ', title: 'L’employeur complète ta mise', blocks: [
        { label: 'Ce que c’est', text: `L'abondement est une somme que ton employeur verse EN PLUS de ton propre versement sur un plan d'épargne salariale (PEE ou PER collectif). Tu mets de l'argent, l'entreprise en ajoute : c'est un coup de pouce direct.` },
        { label: 'Un exemple simple', text: `Si l'accord prévoit un abondement de 100 %, chaque euro que tu verses est complété d'un euro par l'employeur : tu verses 500 €, tu te retrouves avec 1 000 € sur ton plan. Ton épargne double instantanément, avant même le moindre rendement.` },
        { label: 'Facultatif mais fréquent', text: `L'abondement n'est pas obligatoire : toutes les entreprises n'en proposent pas, et les taux varient. Mais quand il existe, c'est l'un des avantages les plus puissants — et les plus souvent négligés.` },
      ] },
      { tag: 'PAGE 2 · « L’ARGENT GRATUIT »', title: 'Le meilleur rendement qui existe', blocks: [
        { label: 'Un rendement immédiat', text: `Aucun placement ne garantit +50 % ou +100 % en un instant… sauf l'abondement. S'il est de 50 %, verser déclenche un gain immédiat de 50 % sur la somme abondée. C'est pour ça qu'on parle d'« argent presque gratuit ».` },
        { label: 'Ne pas le laisser sur la table', text: `Ne pas utiliser un abondement disponible, c'est refuser une augmentation déguisée. Beaucoup de salariés ignorent qu'ils y ont droit, ou ne versent pas assez pour capter l'abondement maximal.` },
        { label: 'La nuance blocage', text: `Comme il transite par le PEE ou le PER, l'argent abondé est bloqué (5 ans pour le PEE, jusqu'à la retraite pour le PER, sauf cas de déblocage). Le gain est réel, mais il faut accepter l'indisponibilité.` },
      ] },
      { tag: 'PAGE 3 · LES PLAFONDS', title: 'Un avantage encadré', blocks: [
        { label: 'Plafond par rapport à ton versement', text: `L'abondement ne peut pas dépasser le triple de ce que tu verses toi-même (300 %). Autrement dit, l'employeur ne peut pas verser sans que tu verses : il complète, il ne fait pas à ta place.` },
        { label: 'Plafond annuel absolu', text: `Il existe aussi un plafond annuel exprimé en pourcentage du plafond de la Sécurité sociale (PASS) : de l'ordre de 8 % du PASS pour un PEE, davantage pour un PER collectif. Au-delà, l'employeur ne peut plus abonder cette année-là.` },
        { label: 'Repère pratique', text: `Ces plafonds évoluent chaque année : les chiffres exacts figurent dans le règlement de ton plan et sur les sites officiels. L'idée à retenir : l'abondement est plafonné, donc il y a un montant « optimal » à verser pour le capter au maximum sans gaspiller.` },
      ] },
      { tag: 'PAGE 4 · CAPTER LE MAXIMUM', title: 'Verser juste ce qu’il faut', blocks: [
        { label: 'Trouver le point optimal', text: `Si l'employeur abonde à 100 % jusqu'à 500 € versés, verser 500 € rapporte 500 € d'abondement ; verser 800 € rapporte toujours 500 € (le plafond est atteint). Le « point optimal » est le versement qui capte tout l'abondement, sans excédent inutilement bloqué.` },
        { label: 'D’où vient l’argent versé', text: `Tu peux alimenter le plan avec ton intéressement, ta participation, ou des versements volontaires depuis ton compte. Orienter sa prime vers le plan pour déclencher l'abondement est une façon fréquente de le capter.` },
        { label: 'Toujours après les fondations', text: `L'abondement est très attractif, mais l'argent reste bloqué. On ne vide pas son épargne de précaution pour le capter : on l'utilise avec de l'argent dont on n'a pas besoin à court terme. La hiérarchie budget → précaution → placements reste valable.` },
      ] },
      { tag: 'PAGE 5 · LE RÉFLEXE KAPI', title: 'Réclamer ce qui te revient', blocks: [
        { label: 'Pourquoi', text: `L'abondement est de l'argent auquel tu as droit et que beaucoup laissent filer par méconnaissance. Le simple fait de poser la question à ton employeur peut valoir plusieurs centaines d'euros par an.` },
        { label: 'Les bons réflexes', items: ['Demander à ton employeur / RH s’il existe un abondement, et à quel taux', 'Identifier le versement qui capte l’abondement maximal (le « point optimal »)', 'Vérifier le blocage associé (PEE 5 ans, PER retraite) avant de verser'] },
        { label: 'À retenir', items: ['Abondement = argent ajouté par l’employeur à tes versements', 'C’est un gain immédiat, souvent imbattable — à ne pas laisser sur la table', 'Plafonné (max 300 % de ton versement + plafond annuel) : il y a un montant optimal'] },
      ] },
    ],
    questions: [
      { q: 'L’abondement, c’est…', opts: ['Une taxe sur l’épargne', 'De l’argent que l’employeur ajoute à tes versements', 'Un crédit à rembourser'], good: 1, explain: `L'employeur complète ton propre versement sur le plan : tu mets de l'argent, il en ajoute.` },
      { q: 'Pourquoi parle-t-on d’« argent presque gratuit » ?', opts: ['Parce que c’est un prêt à 0 %', 'Parce que verser déclenche un gain immédiat (ex. +50 % ou +100 %)', 'Parce que c’est fictif'], good: 1, explain: `Un abondement de 100 % double instantanément la somme versée : aucun placement classique n'offre ça.` },
      { q: 'L’abondement de l’employeur est plafonné à…', opts: ['Le triple (300 %) de ton propre versement, avec un plafond annuel', '10 fois ton salaire', 'Rien, il est illimité'], good: 0, explain: `Il ne peut dépasser 300 % de ton versement, avec en plus un plafond annuel lié au PASS. L'employeur complète, il ne verse pas à ta place.` },
      { q: 'L’argent abondé sur un PEE est…', opts: ['Disponible immédiatement', 'Bloqué (5 ans pour le PEE), sauf cas de déblocage', 'Perdu au bout d’un an'], good: 1, explain: `L'abondement transite par le plan : il suit ses règles de blocage (5 ans pour le PEE, retraite pour le PER).` },
      { q: 'Le « point optimal » de versement est…', opts: ['Le maximum possible, toujours', 'Le versement qui capte tout l’abondement, sans excédent inutilement bloqué', 'Zéro'], good: 1, explain: `Au-delà du plafond d'abondement, verser plus ne rapporte plus d'abondement : l'optimal capte tout l'abondement sans bloquer d'argent en trop.` },
    ],
  },

  '4.4': {
    title: 'Le PER collectif',
    goal: `À la fin, tu comprendras le PER d'entreprise collectif : préparer sa retraite via son employeur, ce qui l'alimente, son blocage jusqu'à la retraite et ses exceptions.`,
    badge: 'Retraite d’entreprise',
    pages: [
      { tag: 'PAGE 1 · L’AUTRE PLAN', title: 'Un plan tourné vers la retraite', blocks: [
        { label: 'Ce que c’est', text: `À côté du PEE (moyen terme, 5 ans), l'entreprise peut proposer un PER collectif (Plan d'Épargne Retraite d'entreprise collectif), qui a succédé au PERCO. Son objectif : t'aider à te constituer un complément de retraite.` },
        { label: 'La grande différence', text: `Là où le PEE se débloque à 5 ans, le PER collectif est en principe bloqué jusqu'à ton départ à la retraite. C'est un horizon bien plus long : logique, puisque c'est son but.` },
        { label: 'Facultatif d’adhésion', text: `L'adhésion se fait souvent automatiquement mais tu peux la refuser. L'important est de comprendre ce que tu y mets et pourquoi : bloquer de l'argent des décennies ne se décide pas à la légère.` },
      ] },
      { tag: 'PAGE 2 · CE QUI L’ALIMENTE', title: 'Plusieurs sources', blocks: [
        { label: 'Les mêmes briques', text: `Le PER collectif peut être alimenté par ton intéressement, ta participation, l'abondement de l'employeur, et tes versements volontaires. Souvent, les jours de congés non pris (via un compte épargne-temps) peuvent aussi y être versés.` },
        { label: 'L’abondement s’y applique', text: `Comme pour le PEE, l'employeur peut abonder tes versements sur le PER collectif — parfois avec un plafond plus élevé. Le même réflexe s'applique : capter l'abondement disponible, c'est de l'argent en plus pour ta retraite.` },
        { label: 'La gestion pilotée', text: `Par défaut, l'épargne est souvent en « gestion pilotée par horizon » : dynamique (plus d'actions) quand la retraite est loin, puis sécurisée progressivement à l'approche de l'échéance. Un pilotage automatique cohérent avec l'horizon long.` },
      ] },
      { tag: 'PAGE 3 · LE BLOCAGE RETRAITE', title: 'Long, avec des portes de sortie', blocks: [
        { label: 'La règle', text: `L'argent est bloqué jusqu'à la retraite. C'est un engagement de très long terme : à ne remplir qu'avec de l'argent dont tu es sûr de ne pas avoir besoin avant, ou via des sommes que tu n'aurais de toute façon pas perçues (abondement, participation placée).` },
        { label: 'Les déblocages anticipés', text: `Des exceptions existent : l'achat de la résidence principale, et les « accidents de la vie » (invalidité, décès du conjoint, surendettement, fin de droits au chômage, cessation d'activité non salariée). En dehors de ces cas, l'argent attend la retraite.` },
        { label: 'La sortie', text: `À la retraite, tu peux en général récupérer l'épargne en capital (en une ou plusieurs fois) ou en rente (un revenu régulier à vie), selon ce que permet le plan. Ce choix se prépare à l'approche de l'échéance.` },
      ] },
      { tag: 'PAGE 4 · POUR QUI, QUAND', title: 'Un outil puissant mais engageant', blocks: [
        { label: 'L’atout du temps', text: `Sur un horizon retraite (20, 30, 40 ans), les intérêts composés (module « investir ») jouent à plein. Un PER collectif alimenté tôt, surtout avec abondement, peut bâtir un complément de retraite conséquent.` },
        { label: 'La contrepartie', text: `Mais bloquer son argent des décennies quand on est jeune et qu'on a d'autres projets (études, logement, imprévus) n'est pas toujours prioritaire. La souplesse a aussi de la valeur.` },
        { label: 'La logique raisonnable', text: `Beaucoup y orientent surtout l'argent « déjà là » et fiscalement avantagé (participation, abondement), plutôt que de bloquer de gros versements volontaires trop tôt. Comme toujours : après les fondations (budget, précaution, projets proches). Information générale, pas un conseil personnalisé.` },
      ] },
      { tag: 'PAGE 5 · LE RÉFLEXE KAPI', title: 'Faire l’inventaire de ses plans', blocks: [
        { label: 'Pourquoi', text: `Beaucoup de salariés ont un PER collectif « quelque part » sans savoir combien il contient ni comment il est investi. Un avoir oublié est un avoir mal piloté.` },
        { label: 'Les bons réflexes', items: ['Vérifier si ton entreprise propose un PER collectif et si tu y as des avoirs', 'Regarder comment ton épargne est investie (gestion pilotée par horizon ?)', 'Capter l’abondement éventuel, tout en gardant à l’esprit le blocage retraite'] },
        { label: 'À retenir', items: ['PER collectif = épargne retraite d’entreprise, bloquée jusqu’à la retraite', 'Alimenté par intéressement, participation, abondement, versements volontaires', 'Déblocages anticipés : achat de résidence principale et accidents de la vie'] },
      ] },
    ],
    questions: [
      { q: 'Le PER collectif est bloqué en principe jusqu’à…', opts: ['5 ans', 'La retraite', '1 an'], good: 1, explain: `Contrairement au PEE (5 ans), le PER collectif vise la retraite : l'argent y est bloqué jusque-là, sauf cas particuliers.` },
      { q: 'Le PER collectif peut être alimenté par…', opts: ['Uniquement l’employeur', 'Intéressement, participation, abondement et versements volontaires', 'Uniquement un crédit'], good: 1, explain: `Plusieurs sources l'alimentent : primes d'épargne salariale, abondement, versements volontaires, parfois jours de congés non pris.` },
      { q: 'Un cas de déblocage anticipé du PER collectif est…', opts: ['L’achat de la résidence principale', 'Un week-end prolongé', 'Aucun'], good: 0, explain: `L'achat de la résidence principale et les accidents de la vie (invalidité, décès du conjoint, surendettement…) permettent un déblocage anticipé.` },
      { q: 'La « gestion pilotée par horizon » consiste à…', opts: ['Tout mettre en actions à vie', 'Être dynamique quand la retraite est loin, puis sécuriser en approchant', 'Ne jamais investir'], good: 1, explain: `Elle réduit progressivement le risque à l'approche de la retraite : cohérent avec l'horizon qui se raccourcit.` },
      { q: 'À la retraite, l’épargne d’un PER collectif se récupère…', opts: ['Toujours obligatoirement en une seule fois', 'En capital et/ou en rente, selon le plan', 'Jamais'], good: 1, explain: `Selon le plan, on peut sortir en capital (une ou plusieurs fois) et/ou en rente viagère.` },
    ],
  },

  '4.5': {
    title: 'Percevoir ou placer : bien choisir',
    goal: `À la fin, tu sauras arbitrer entre percevoir ta prime tout de suite ou la placer, en pesant fiscalité, abondement, blocage et ta situation personnelle.`,
    badge: 'Choix éclairé',
    pages: [
      { tag: 'PAGE 1 · LA VRAIE QUESTION', title: 'Le même euro, deux destins', blocks: [
        { label: 'Le carrefour', text: `Chaque année, face à ton intéressement ou ta participation, tu tranches : percevoir (l'argent arrive sur ton compte) ou placer (sur PEE ou PER). Le même euro n'aura pas le même sort selon ton choix.` },
        { label: 'Trois curseurs', text: `Trois éléments pèsent dans la balance : la fiscalité (perçu = imposable ; placé = exonéré d'impôt sur le revenu), l'abondement (placer peut déclencher un complément de l'employeur), et le blocage (placé = indisponible un temps).` },
        { label: 'Pas de bonne réponse universelle', text: `Le meilleur choix dépend de ta situation du moment : tes besoins de liquidités, ton taux d'imposition, l'existence d'un abondement, tes projets. Ce sous-module te donne la grille, pas une consigne.` },
      ] },
      { tag: 'PAGE 2 · L’ARGUMENT FISCAL', title: 'Ce que l’impôt change', blocks: [
        { label: 'Perçu', text: `Si tu perçois, la somme s'ajoute à ton revenu imposable de l'année. Plus ta tranche d'imposition est élevée, plus l'impôt réduit ce que tu gardes réellement.` },
        { label: 'Placé', text: `Si tu places, la somme échappe à l'impôt sur le revenu (seuls les prélèvements sociaux ~9,7 % s'appliquent), et ses gains futurs seront aussi exonérés d'impôt sur le revenu. L'avantage fiscal est net.` },
        { label: 'La nuance', text: `L'avantage fiscal du placement est d'autant plus intéressant que tu es imposé. Pour quelqu'un de peu ou pas imposable, l'écart fiscal est faible : percevoir (donc garder la liquidité) devient plus défendable.` },
      ] },
      { tag: 'PAGE 3 · L’ARGUMENT ABONDEMENT', title: 'Le facteur qui peut tout changer', blocks: [
        { label: 'L’effet démultiplicateur', text: `S'il existe un abondement, placer ne se contente pas d'économiser l'impôt : ça déclenche de l'argent en plus de l'employeur. Un abondement de 50 ou 100 % surpasse presque toujours l'avantage de percevoir.` },
        { label: 'La hiérarchie', text: `Règle simple : là où il y a un abondement disponible non capté, placer (au moins jusqu'au plafond d'abondement) est presque toujours le choix le plus rentable, même en tenant compte du blocage.` },
        { label: 'Au-delà de l’abondement', text: `Une fois l'abondement maximal capté, l'euro supplémentaire placé ne bénéficie plus que de l'avantage fiscal et du blocage : l'arbitrage redevient une affaire de fiscalité et de besoin de liquidités.` },
      ] },
      { tag: 'PAGE 4 · L’ARGUMENT LIQUIDITÉ', title: 'Le blocage a un coût', blocks: [
        { label: 'L’argent immobilisé', text: `Placer, c'est renoncer à disposer de la somme (5 ans pour le PEE, la retraite pour le PER, sauf déblocages). Si tu risques d'en avoir besoin — projet proche, budget tendu, pas d'épargne de précaution — cette contrainte pèse lourd.` },
        { label: 'La précaution d’abord', text: `On ne place jamais au point de se retrouver sans matelas de sécurité disponible. Le blocage n'est acceptable que sur de l'argent dont tu n'as pas besoin à court terme. La hiérarchie des modules précédents reste la boussole.` },
        { label: 'Le cas du projet', text: `Si un cas de déblocage anticipé colle à ton projet (achat de résidence principale, par exemple), le blocage devient beaucoup moins gênant : l'argent sortira justement quand tu en auras besoin, avantage fiscal conservé.` },
      ] },
      { tag: 'PAGE 5 · LE RÉFLEXE KAPI', title: 'Ta grille de décision', blocks: [
        { label: 'Pourquoi', text: `Ce choix revient chaque année et se fait souvent par défaut, faute de méthode. Une grille claire te permet de décider en connaissance de cause, selon TA situation — sans que quiconque décide à ta place.` },
        { label: 'La grille en 4 questions', items: ['Y a-t-il un abondement à capter ? → placer au moins jusqu’au plafond est souvent gagnant', 'Ai-je besoin de cet argent à court terme (ou pas d’épargne de précaution) ? → percevoir se défend', 'Suis-je fortement imposé ? → l’avantage fiscal du placement pèse plus lourd', 'Un cas de déblocage colle-t-il à un projet (résidence principale) ? → le blocage gêne moins'] },
        { label: 'À retenir', items: ['Trois curseurs : fiscalité, abondement, blocage', 'L’abondement disponible fait souvent pencher vers « placer »', 'Aucune règle universelle : la bonne réponse dépend de ta situation'] },
      ] },
    ],
    questions: [
      { q: 'Face à une prime, les trois éléments à peser sont…', opts: ['La météo, l’humeur, le jour', 'La fiscalité, l’abondement et le blocage', 'Uniquement le montant'], good: 1, explain: `Fiscalité (perçu imposable / placé exonéré), abondement (gain employeur) et blocage (indisponibilité) : les trois curseurs de la décision.` },
      { q: 'S’il existe un abondement non capté, placer est…', opts: ['Toujours une mauvaise idée', 'souvent le choix le plus rentable, au moins jusqu’au plafond d’abondement', 'Interdit'], good: 1, explain: `L'abondement ajoute de l'argent de l'employeur : il surpasse généralement l'intérêt de percevoir, malgré le blocage.` },
      { q: 'L’avantage fiscal de placer est d’autant plus fort que…', opts: ['Tu es peu imposé', 'Tu es fortement imposé', 'Tu n’as pas de salaire'], good: 1, explain: `Plus ta tranche est élevée, plus l'exonération d'impôt sur le revenu du placement te fait gagner.` },
      { q: 'Percevoir (plutôt que placer) se défend surtout quand…', opts: ['Tu as besoin de liquidités ou pas d’épargne de précaution', 'Tu veux bloquer ton argent', 'Il y a un gros abondement'], good: 0, explain: `Si tu risques d'avoir besoin de la somme ou que ton coussin de sécurité n'est pas constitué, garder la liquidité prime.` },
      { q: 'Si un cas de déblocage anticipé colle à ton projet (ex. résidence principale)…', opts: ['Le blocage devient beaucoup moins gênant', 'Tu perds l’avantage fiscal', 'Le plan est annulé'], good: 0, explain: `L'argent sortira justement au moment du projet, en conservant l'avantage fiscal : le blocage pèse alors beaucoup moins.` },
    ],
  },
}
