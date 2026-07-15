// Contenu long du module 7 « Se projeter » — 5 pages × 3-4 blocs
// + quiz de 5 questions. Sous-modules : 7.1 à 7.4.
// Contenu strictement pédagogique : aucune recommandation de produit,
// d'établissement ni de conseil en investissement personnalisé.

export const MODULE7_LESSONS = {
  '7.1': {
    title: 'La retraite, déjà ?',
    goal: `À la fin, tu comprendras comment fonctionne la retraite par répartition, pourquoi tes premiers jobs comptent déjà, comment suivre tes droits, et ce qu'est le PER.`,
    badge: 'Trimestres en vue',
    pages: [
      { tag: 'PAGE 1 · POURQUOI SI TÔT', title: 'La retraite se prépare jeune', blocks: [
        { label: 'Le paradoxe du temps', text: `À 20 ou 25 ans, la retraite semble à des années-lumière. C'est justement pour ça qu'en parler tôt a du sens : c'est le seul moment où le temps (et les intérêts composés vus au module 5) peut vraiment jouer en ta faveur.` },
        { label: 'Deux choses différentes', text: `Il y a la retraite « obligatoire » (celle que l'État organise, financée par tes cotisations) et l'épargne retraite « volontaire » (ce que tu mets de côté en plus, si tu le souhaites). Comprendre la première avant de penser à la seconde.` },
        { label: 'Rien à décider maintenant', text: `Ce sous-module n'est pas un appel à bloquer ton argent. C'est un repérage : savoir comment ça marche pour faire de bons choix quand ce sera pertinent, pas avant.` },
      ] },
      { tag: 'PAGE 2 · LA RÉPARTITION', title: 'Comment marche la retraite obligatoire', blocks: [
        { label: 'Le principe', text: `Le système français fonctionne par répartition : les cotisations prélevées sur les salaires d'aujourd'hui paient les pensions des retraités d'aujourd'hui. Quand tu cotises, tu n'alimentes pas une cagnotte à ton nom : tu finances la solidarité entre générations.` },
        { label: 'Ce que tu acquières', text: `En échange de tes cotisations, tu accumules des droits (trimestres, points selon les régimes) qui détermineront ta future pension. Plus tu cotises longtemps, plus ces droits s'accumulent.` },
        { label: 'La différence avec l’épargne', text: `Contrairement à un livret, tu ne « récupères » pas directement l'argent versé : tu obtiens une promesse de pension future. C'est pour cela que l'épargne personnelle peut venir en complément, pas en remplacement.` },
      ] },
      { tag: 'PAGE 3 · LES TRIMESTRES', title: 'Tes premiers jobs comptent déjà', blocks: [
        { label: 'Ce qu’est un trimestre', text: `Le trimestre est l'unité de base de la retraite : il faut en valider un certain nombre pour une retraite à taux plein. On en valide en travaillant — et il suffit d'un certain montant de salaire, pas d'un trimestre entier de présence.` },
        { label: 'Jobs d’été et alternance', text: `Bonne nouvelle : tes jobs d'été, stages rémunérés et alternances peuvent déjà te faire valider des trimestres. Des droits se construisent sans que tu t'en rendes compte, dès tes premiers bulletins de paie.` },
        { label: 'Suivre ses droits', text: `Le site officiel info-retraite.fr regroupe tous tes régimes en un seul endroit : tu peux y voir tes trimestres validés et repérer d'éventuelles erreurs. Un relevé à vérifier de temps en temps, gratuitement.` },
      ] },
      { tag: 'PAGE 4 · LE PER', title: 'L’épargne retraite volontaire', blocks: [
        { label: 'Ce que c’est', text: `Le PER (Plan d'Épargne Retraite) est une enveloppe pour épargner en vue de la retraite. Son atout : les versements peuvent se déduire de ton revenu imposable, ce qui réduit ton impôt l'année du versement.` },
        { label: 'La contrepartie', text: `En échange de cet avantage, l'argent est en principe bloqué jusqu'à la retraite (sauf cas de déblocage anticipé, comme l'achat de la résidence principale). C'est un engagement de très long terme.` },
        { label: 'Pour qui, quand', text: `L'avantage fiscal du PER profite surtout à ceux qui paient beaucoup d'impôts. Pour un jeune peu ou pas imposé, bloquer son argent des décennies est rarement prioritaire : mieux vaut souvent garder de la souplesse. (Information générale, pas un conseil personnalisé.)` },
      ] },
      { tag: 'PAGE 5 · LE RÉFLEXE KAPI', title: 'Repérer sans se précipiter', blocks: [
        { label: 'Pourquoi', text: `Comprendre la retraite tôt, c'est éviter deux erreurs opposées : croire qu'on n'a « rien à faire » (alors que suivre ses trimestres est utile), et bloquer trop tôt son argent dans un PER par peur.` },
        { label: 'Les bons gestes', items: ['Créer ou consulter son compte sur info-retraite.fr pour voir ses trimestres', 'Vérifier que jobs d’été et alternances ont bien été pris en compte', 'Retenir que le PER a un intérêt surtout quand on est fortement imposé'] },
        { label: 'À retenir', items: ['La retraite obligatoire fonctionne par répartition : les actifs paient les retraités', 'Trimestres validés dès les premiers jobs : tes droits se construisent déjà', 'PER = avantage fiscal contre blocage long ; rarement prioritaire quand on est jeune'] },
      ] },
    ],
    questions: [
      { q: 'La retraite obligatoire française fonctionne par…', opts: ['Capitalisation individuelle', 'Répartition entre générations', 'Tirage au sort'], good: 1, explain: `Les cotisations d'aujourd'hui financent les pensions d'aujourd'hui : c'est la répartition, un système de solidarité entre générations.` },
      { q: 'Tes jobs d’été et alternances…', opts: ['Ne comptent jamais pour la retraite', 'Peuvent déjà valider des trimestres', 'Font perdre des droits'], good: 1, explain: `Il suffit d'un certain montant de salaire pour valider un trimestre : des droits se construisent dès tes premiers bulletins.` },
      { q: 'Pour suivre tes droits à la retraite, le site officiel est…', opts: ['info-retraite.fr', 'un site de trading', 'ta banque uniquement'], good: 0, explain: `info-retraite.fr regroupe tous tes régimes : tu peux y vérifier tes trimestres validés gratuitement.` },
      { q: 'Le PER offre un avantage fiscal en échange de…', opts: ['Aucune contrainte', 'Un blocage de l’argent jusqu’à la retraite (en principe)', 'Un rendement garanti'], good: 1, explain: `Les versements se déduisent des impôts, mais l'argent est en principe bloqué jusqu'à la retraite : un engagement long.` },
      { q: 'Le PER est surtout intéressant pour…', opts: ['Les personnes fortement imposées', 'Les jeunes non imposés', 'Tout le monde immédiatement'], good: 0, explain: `L'avantage étant une déduction d'impôt, il profite surtout à ceux qui paient beaucoup d'impôts ; pour un jeune peu imposé, la souplesse prime souvent.` },
    ],
  },

  '7.2': {
    title: 'Premier achat immobilier',
    goal: `À la fin, tu sauras ce qu'est l'apport, comment se calcule la capacité d'emprunt, ce qui fait un bon dossier, et les frais à ne pas oublier — sans conseil d'achat personnalisé.`,
    badge: 'Dossier solide',
    pages: [
      { tag: 'PAGE 1 · LOUER OU ACHETER', title: 'Pas une évidence universelle', blocks: [
        { label: 'Le faux débat', text: `« Louer, c'est jeter de l'argent par les fenêtres » est un raccourci. Acheter a du sens dans certaines situations (stabilité, durée longue), moins dans d'autres (mobilité, court terme). Ça dépend de ta vie, pas d'une règle générale.` },
        { label: 'Le seuil de rentabilité', text: `Acheter implique des frais importants au départ (frais de notaire, garantie…). Il faut généralement rester plusieurs années dans le bien pour que l'achat devienne plus avantageux que la location. En dessous, la location peut être plus maligne.` },
        { label: 'La bonne question', text: `Plutôt que « faut-il acheter ? », demande-toi « suis-je stable pour plusieurs années ici, et mon dossier est-il prêt ? ». C'est ça qui détermine si le projet tient la route.` },
      ] },
      { tag: 'PAGE 2 · L’APPORT', title: 'La mise de départ', blocks: [
        { label: 'Ce que c’est', text: `L'apport est la somme que tu mets toi-même dans le projet, en plus du crédit. Les banques attendent souvent un apport couvrant au moins les frais annexes (~10 % du prix), parfois davantage.` },
        { label: 'Pourquoi il rassure', text: `Un apport montre à la banque ta capacité à épargner et réduit le montant à prêter, donc son risque. Un bon apport peut améliorer les conditions proposées. Mais un dossier sans apport n'est pas forcément recalé.` },
        { label: 'D’où il vient', text: `L'apport se constitue par l'épargne (livrets, épargne projet vue au module 2), parfois complétée par un don familial ou certains prêts aidés. Le construire est justement le rôle de l'épargne de projet.` },
      ] },
      { tag: 'PAGE 3 · LA CAPACITÉ D’EMPRUNT', title: 'Combien la banque peut te prêter', blocks: [
        { label: 'La règle des ~35 %', text: `La banque veille à ce que l'ensemble de tes mensualités de crédit (assurance comprise) ne dépasse pas environ 35 % de tes revenus nets. C'est le « taux d'endettement » : une protection contre le surendettement.` },
        { label: 'Le rôle de la durée', text: `Allonger la durée du prêt baisse la mensualité (donc augmente la capacité d'emprunt affichée), mais gonfle le coût total en intérêts. Comme pour tout crédit : mensualité douce ne veut pas dire crédit bon marché.` },
        { label: 'Le reste à vivre', text: `Au-delà du pourcentage, la banque regarde ce qu'il te reste pour vivre une fois la mensualité payée. Deux personnes au même taux d'endettement n'ont pas le même « reste à vivre » selon leurs charges.` },
      ] },
      { tag: 'PAGE 4 · LE DOSSIER ET LES FRAIS', title: 'Ce qui fait passer un dossier', blocks: [
        { label: 'Tes 3 derniers relevés', text: `La banque examine la tenue de tes comptes sur les derniers mois : des découverts répétés, des jeux d'argent ou des incidents peuvent bloquer un dossier. Trois mois de comptes « propres » avant de déposer, c'est un vrai atout.` },
        { label: 'Les frais souvent oubliés', text: `Au prix du bien s'ajoutent les frais de notaire (~7-8 % dans l'ancien), les frais de garantie, parfois de dossier et d'agence. Un budget d'achat réaliste les intègre dès le départ, pas comme mauvaise surprise.` },
        { label: 'L’assurance emprunteur', text: `Le crédit immo s'accompagne d'une assurance (vue au module 3). Grâce à la loi Lemoine, tu peux en changer à tout moment pour payer moins cher : sur la durée du prêt, l'économie peut atteindre plusieurs milliers d'euros.` },
      ] },
      { tag: 'PAGE 5 · LE RÉFLEXE KAPI', title: 'Préparer avant de visiter', blocks: [
        { label: 'Pourquoi', text: `Un achat immobilier se gagne autant avant qu'après : un dossier propre, un apport prêt et un budget réaliste évitent les déceptions et les mauvaises conditions.` },
        { label: 'La checklist', items: ['Vérifier ta capacité d’emprunt (mensualités ≤ ~35 % des revenus nets)', 'Soigner tes comptes sur les 3 mois avant de déposer un dossier', 'Intégrer TOUS les frais (notaire, garantie, agence) dans le budget'] },
        { label: 'À retenir', items: ['Acheter n’a de sens que sur une durée suffisante pour absorber les frais', 'Apport ≈ au moins les frais (~10 %) : il rassure et améliore les conditions', 'Le TAEG et l’assurance emprunteur pèsent autant que le prix du bien'] },
      ] },
    ],
    questions: [
      { q: 'Le taux d’endettement à ne pas dépasser tourne autour de…', opts: ['15 %', '35 % des revenus nets, assurance comprise', '70 %'], good: 1, explain: `Au-delà d'environ 35 %, la banque considère le risque de surendettement trop élevé. C'est une protection, pas une punition.` },
      { q: 'L’apport sert notamment à…', opts: ['Payer la totalité du bien', 'Couvrir au moins les frais et rassurer la banque', 'Remplacer le crédit'], good: 1, explain: `Un apport (souvent ~10 %) couvre les frais annexes, réduit le risque de la banque et peut améliorer les conditions.` },
      { q: 'Allonger la durée d’un prêt immobilier…', opts: ['Baisse la mensualité mais augmente le coût total', 'Réduit le coût total', 'N’a aucun effet'], good: 0, explain: `Comme tout crédit, étaler baisse la mensualité mais fait payer des intérêts plus longtemps : le coût final grimpe.` },
      { q: 'Avant de déposer un dossier, la banque regarde surtout…', opts: ['Ton signe astrologique', 'La tenue de tes comptes sur les derniers mois', 'Le nombre de tes abonnements'], good: 1, explain: `Des découverts répétés ou incidents récents peuvent bloquer un dossier : 3 mois de comptes propres sont un vrai atout.` },
      { q: 'Les frais de notaire dans l’ancien représentent environ…', opts: ['1 %', '7-8 % du prix', '25 %'], good: 1, explain: `Ils tournent autour de 7-8 % dans l'ancien : à intégrer dès le budget, avec la garantie et d'éventuels frais d'agence.` },
    ],
  },

  '7.3': {
    title: 'L’assurance-vie',
    goal: `À la fin, tu comprendras pourquoi l'assurance-vie est un « couteau suisse » de l'épargne : ses supports (fonds euros / unités de compte), l'intérêt des 8 ans, et son rôle de transmission.`,
    badge: 'Couteau suisse en main',
    pages: [
      { tag: 'PAGE 1 · MALGRÉ SON NOM', title: 'Ce n’est pas une assurance décès', blocks: [
        { label: 'Le malentendu', text: `Contrairement à ce que le nom laisse croire, l'assurance-vie n'est pas d'abord une assurance contre le décès : c'est une enveloppe pour placer et faire fructifier son argent, avec des avantages spécifiques.` },
        { label: 'Une enveloppe souple', text: `Comme le PEA ou le compte-titres, c'est un « contenant » : à l'intérieur, tu choisis où va ton argent. Sa grande souplesse (versements libres, retraits possibles à tout moment) en fait un outil polyvalent.` },
        { label: 'Le mythe de l’argent bloqué', text: `On entend souvent « l'argent est bloqué 8 ans » : c'est faux. Tu peux retirer quand tu veux. Les 8 ans concernent seulement un avantage fiscal, pas la disponibilité (voir page 3).` },
      ] },
      { tag: 'PAGE 2 · LES DEUX MOTEURS', title: 'Fonds euros et unités de compte', blocks: [
        { label: 'Le fonds euros', text: `C'est le support sécurisé : le capital est garanti, le rendement est modeste (souvent ~2-3 % par an). Idéal pour la partie de l'épargne qu'on ne veut pas voir baisser. Investi surtout en obligations.` },
        { label: 'Les unités de compte (UC)', text: `Ce sont les supports investis (actions, ETF, immobilier…) : plus de potentiel de rendement, mais le capital n'est pas garanti — la valeur peut monter et descendre. C'est le moteur de performance long terme.` },
        { label: 'Le dosage', text: `Un contrat mêle en général les deux : plus de fonds euros pour la sécurité, plus d'UC pour viser du rendement sur le long terme. Le bon dosage dépend de ton horizon et de ta tolérance au risque, pas d'une recette unique.` },
      ] },
      { tag: 'PAGE 3 · LES 8 ANS', title: 'L’avantage fiscal qui récompense la durée', blocks: [
        { label: 'Ce qui change à 8 ans', text: `Après 8 ans de détention du contrat, les gains retirés bénéficient d'un abattement fiscal annuel (4 600 € pour une personne seule, 9 200 € pour un couple). En dessous de cet abattement, les retraits de gains sont peu ou pas imposés.` },
        { label: 'Prendre date tôt', text: `Comme pour le PEA, c'est la date d'ouverture qui lance le compteur. Beaucoup ouvrent un contrat tôt avec une petite somme pour « prendre date », même sans investir beaucoup au début. (Information générale, pas une recommandation d'agir.)` },
        { label: 'Avant 8 ans', text: `Avant 8 ans, les retraits restent possibles, mais les gains sont taxés plus normalement (souvent la flat tax). Encore une fois : la disponibilité est totale, seul l'avantage fiscal dépend de la durée.` },
      ] },
      { tag: 'PAGE 4 · LA TRANSMISSION', title: 'Un outil pour transmettre', blocks: [
        { label: 'La clause bénéficiaire', text: `L'assurance-vie permet de désigner, via une « clause bénéficiaire », qui recevra le capital à ton décès. Cet argent est en grande partie transmis hors des règles classiques de succession, avec une fiscalité allégée.` },
        { label: 'Pourquoi ça compte', text: `C'est ce qui en fait un outil de transmission puissant (on le reverra au module « succession » côté moments de vie) : elle permet de protéger un proche en lui transmettant un capital dans de bonnes conditions.` },
        { label: 'Le couteau suisse', text: `Épargner, faire fructifier, garder l'argent disponible, préparer un projet, transmettre : cette polyvalence explique le surnom de « couteau suisse » de l'épargne des Français.` },
      ] },
      { tag: 'PAGE 5 · LE RÉFLEXE KAPI', title: 'Lire un contrat avant de signer', blocks: [
        { label: 'Pourquoi', text: `Tous les contrats d'assurance-vie ne se valent pas : les frais varient énormément d'un contrat à l'autre, et ils grignotent le rendement chaque année. Savoir les repérer évite de payer trop cher pour la même chose.` },
        { label: 'Les points à vérifier', items: ['Les frais : frais sur versement (idéalement 0), frais de gestion annuels, frais d’arbitrage', 'La qualité et le choix des supports (fonds euros, UC, ETF disponibles)', 'La souplesse : versements et retraits libres, sans pénalité'] },
        { label: 'À retenir', items: ['L’assurance-vie est une enveloppe d’épargne, pas une assurance décès', 'Fonds euros = sécurité ; unités de compte = potentiel mais capital non garanti', 'Les 8 ans donnent un avantage fiscal ; l’argent reste disponible avant'] },
      ] },
    ],
    questions: [
      { q: 'L’assurance-vie est avant tout…', opts: ['Une assurance contre le décès', 'Une enveloppe pour placer et faire fructifier son argent', 'Un crédit'], good: 1, explain: `Malgré son nom, c'est un contenant d'épargne souple, avec des avantages fiscaux et de transmission.` },
      { q: 'Dans une assurance-vie, le fonds euros…', opts: ['Garantit le capital pour un rendement modeste', 'Offre le plus fort potentiel mais sans garantie', 'Est un crédit'], good: 0, explain: `Le fonds euros sécurise le capital (rendement ~2-3 %) ; ce sont les unités de compte qui visent plus, sans garantie.` },
      { q: 'Le cap des 8 ans en assurance-vie concerne…', opts: ['La disponibilité de l’argent', 'Un avantage fiscal (abattement sur les gains)', 'Une pénalité de sortie'], good: 1, explain: `L'argent reste disponible avant 8 ans ; c'est l'abattement fiscal sur les gains retirés qui s'active après 8 ans.` },
      { q: 'L’unité de compte (UC) se caractérise par…', opts: ['Un capital garanti', 'Un potentiel supérieur mais un capital non garanti', 'Un taux fixe'], good: 1, explain: `Les UC sont investies (actions, ETF, immo…) : plus de rendement possible, mais la valeur peut baisser.` },
      { q: 'Un point clé à comparer entre deux contrats est…', opts: ['La couleur de l’appli', 'Les frais (versement, gestion, arbitrage)', 'Le nom du contrat'], good: 1, explain: `Les frais varient énormément et rognent le rendement chaque année : ce sont eux qu'il faut scruter en priorité.` },
    ],
  },

  '7.4': {
    title: 'Ta stratégie globale',
    goal: `À la fin, tu sauras relier objectifs et horizons de temps, associer chaque objectif au bon type d'enveloppe, et penser ton argent comme un ensemble cohérent plutôt qu'en produits isolés.`,
    badge: 'Vue d’ensemble',
    pages: [
      { tag: 'PAGE 1 · LA PYRAMIDE', title: 'Un ordre logique, du sol au sommet', blocks: [
        { label: 'La base : la sécurité', text: `Tout part du socle : un budget maîtrisé (module 1) et une épargne de précaution disponible (module 2). Sans cette base, tout le reste s'écroule au premier imprévu. On ne construit rien sur du sable.` },
        { label: 'L’étage : les projets', text: `Au-dessus viennent les projets datés (module 2) : voiture, apport immobilier, voyage. Argent qu'on placera de façon prudente car son échéance est connue et pas si lointaine.` },
        { label: 'Le sommet : le long terme', text: `Tout en haut, l'investissement de long terme (modules 5-6) : la part qu'on peut oublier des années et qu'on laisse travailler avec le temps et les intérêts composés. Chaque étage a sa fonction.` },
      ] },
      { tag: 'PAGE 2 · HORIZON = OUTIL', title: 'À chaque échéance son support', blocks: [
        { label: 'Court terme (0-3 ans)', text: `Pour l'argent utile bientôt : supports sûrs et disponibles (livrets). Le rendement passe après la disponibilité et la sécurité. Pas de Bourse pour ce qui sert demain.` },
        { label: 'Moyen terme (3-8 ans)', text: `Pour un projet à horizon moyen : un mélange prudent, parfois via un fonds euros d'assurance-vie ou une épargne dédiée. On accepte un peu de risque, mais mesuré.` },
        { label: 'Long terme (8 ans et +)', text: `Pour la retraite ou un patrimoine : là, l'investissement diversifié (ETF via PEA ou assurance-vie) prend tout son sens, car le temps absorbe les variations. L'horizon commande le support.` },
      ] },
      { tag: 'PAGE 3 · UNE ENVELOPPE PAR OBJECTIF', title: 'Relier le contenant au but', blocks: [
        { label: 'Le principe de cohérence', text: `Plutôt que d'accumuler des produits au hasard, on associe chaque objectif à l'enveloppe la plus adaptée : livret pour la précaution, épargne projet pour un achat daté, PEA/assurance-vie pour le long terme.` },
        { label: 'Éviter les doublons et les trous', text: `Penser « par objectif » évite deux erreurs : empiler cinq livrets qui font la même chose, ou n'avoir aucune épargne disponible parce que tout est bloqué. Chaque euro doit savoir pourquoi il est là.` },
        { label: 'La simplicité gagne', text: `Une stratégie efficace est souvent simple : quelques enveloppes claires, chacune avec un rôle. La complexité n'est pas un signe de sophistication, c'est souvent une source de frais et de confusion.` },
      ] },
      { tag: 'PAGE 4 · REVOIR SANS S’AGITER', title: 'Ajuster, pas remuer sans cesse', blocks: [
        { label: 'Le point annuel', text: `Une fois par an suffit pour faire le point : mes objectifs ont-ils changé ? Mon épargne de précaution est-elle toujours au niveau ? Mes versements réguliers tiennent-ils ? Pas besoin de surveiller les cours chaque jour.` },
        { label: 'Le rééquilibrage', text: `Avec le temps, la répartition dérive (la part investie grossit quand ça monte). Un rééquilibrage occasionnel remet les curseurs là où tu les voulais. Rare et calme, pas nerveux.` },
        { label: 'Le piège de l’activité', text: `Bouger sans cesse donne l'impression d'agir, mais multiplie frais et erreurs. En stratégie de long terme, « ne rien faire » est souvent la meilleure décision. La discipline bat l'agitation.` },
      ] },
      { tag: 'PAGE 5 · LE RÉFLEXE KAPI', title: 'Ton argent comme un tout', blocks: [
        { label: 'Pourquoi', text: `Beaucoup possèdent des produits sans vision d'ensemble : un vieux livret ici, une assurance-vie oubliée là. Penser global, par objectifs et par horizons, transforme un tas de produits en une vraie stratégie.` },
        { label: 'Le plan en 4 questions', items: ['Ma base (budget + précaution) est-elle solide ?', 'Chaque projet daté a-t-il une épargne dédiée et prudente ?', 'Mon long terme est-il investi de façon diversifiée et régulière ?', 'Est-ce simple, sans doublons ni frais inutiles ?'] },
        { label: 'À retenir', items: ['Sécurité d’abord, projets ensuite, long terme au sommet', 'L’horizon de temps détermine le support, pas la mode', 'Simple et cohérent bat compliqué ; on ajuste une fois par an, sans s’agiter'] },
      ] },
    ],
    questions: [
      { q: 'La base de toute stratégie financière est…', opts: ['L’investissement en actions', 'Un budget maîtrisé + une épargne de précaution', 'Un crédit renouvelable'], good: 1, explain: `Sans budget maîtrisé et coussin de sécurité disponible, tout le reste s'effondre au premier imprévu.` },
      { q: 'De l’argent nécessaire dans 1 à 3 ans se place plutôt…', opts: ['En Bourse pour maximiser le rendement', 'Sur des supports sûrs et disponibles', 'En cryptomonnaies'], good: 1, explain: `Pour le court terme, la disponibilité et la sécurité priment : on évite les placements volatils.` },
      { q: 'Associer une enveloppe à chaque objectif permet surtout…', opts: ['De multiplier les frais', 'De garder une stratégie cohérente, sans doublons ni trous', 'De compliquer inutilement'], good: 1, explain: `Chaque euro « sait pourquoi il est là » : on évite d'empiler des produits identiques ou de tout bloquer par erreur.` },
      { q: 'Pour une stratégie de long terme, revoir ses placements…', opts: ['Chaque jour', 'Environ une fois par an suffit', 'Jamais, on oublie tout'], good: 1, explain: `Un point annuel et un rééquilibrage occasionnel suffisent : bouger sans cesse multiplie frais et erreurs.` },
      { q: 'En investissement long terme, « ne rien faire »…', opts: ['Est toujours une erreur', 'Est souvent la meilleure décision', 'Fait perdre de l’argent à coup sûr'], good: 1, explain: `L'agitation multiplie frais et mauvaises décisions émotionnelles ; la discipline et la patience gagnent sur la durée.` },
    ],
  },
}
