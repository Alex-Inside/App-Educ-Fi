// Contenu long du module 5 « Investir : premiers pas » — 5 pages × 3-4 blocs
// + quiz de 5 questions. Sous-modules : 5.1 à 5.5.
// Contenu strictement pédagogique : aucune recommandation de produit,
// d'établissement ni de conseil en investissement personnalisé.

export const MODULE5_LESSONS = {
  '5.1': {
    title: 'Pourquoi investir',
    goal: `À la fin, tu comprendras pourquoi l'argent qui dort perd de la valeur à cause de l'inflation, ce qu'est le couple risque / rendement, et pourquoi investir est d'abord une affaire de temps.`,
    badge: 'Cap sur le long terme',
    pages: [
      { tag: 'PAGE 1 · L’ENNEMI SILENCIEUX', title: 'L’inflation grignote ton argent', blocks: [
        { label: 'Ce qu’est l’inflation', text: `L'inflation, c'est la hausse générale des prix au fil du temps. Avec 2 % d'inflation par an, ce qui coûte 100 € aujourd'hui coûtera 102 € l'an prochain. Autrement dit, la même somme achète un peu moins chaque année.` },
        { label: 'L’argent qui dort recule', text: `Un billet gardé sous le matelas ne bouge pas, mais le monde autour de lui devient plus cher. À 2 % d'inflation, 1 000 € laissés dix ans sans rien faire ne valent plus que ~820 € de pouvoir d'achat. Ne rien faire, c'est déjà perdre lentement.` },
        { label: 'Le rôle de l’épargne investie', text: `Investir ne sert pas à « devenir riche vite » : ça sert d'abord à ce que ton argent suive au moins la hausse des prix, puis, avec le temps, à le faire progresser au-delà. C'est une protection avant d'être une ambition.` },
      ] },
      { tag: 'PAGE 2 · RISQUE ET RENDEMENT', title: 'Les deux vont toujours ensemble', blocks: [
        { label: 'La règle de base', text: `Il n'existe aucun placement qui rapporte beaucoup sans aucun risque. Rendement élevé espéré = risque élevé accepté. Quiconque te promet « beaucoup et sans risque » te ment : c'est le signal n° 1 d'une arnaque.` },
        { label: 'Le risque, c’est la variation', text: `Investir en actions, c'est accepter que la valeur monte et descende, parfois fortement à court terme. Ce n'est pas « perdre », tant que tu ne vends pas au creux : c'est le prix à payer pour un rendement supérieur sur le long terme.` },
        { label: 'Le vrai risque du débutant', text: `Le danger n° 1 n'est pas la Bourse : c'est de placer de l'argent dont on a besoin bientôt, puis d'être forcé de vendre au mauvais moment. On n'investit que ce dont on n'a pas besoin à court terme.` },
      ] },
      { tag: 'PAGE 3 · L’HORIZON DE TEMPS', title: 'Combien de temps peux-tu attendre ?', blocks: [
        { label: 'La question qui commande tout', text: `Avant « dans quoi j'investis ? », la vraie question est « pour quand ai-je besoin de cet argent ? ». Un projet à 2 ans et une épargne à 20 ans ne se placent pas de la même façon.` },
        { label: 'Court terme = sécurité', text: `L'argent dont tu auras besoin dans les 1 à 3 ans (loyer, projet daté, urgences) n'a rien à faire en Bourse : il reste sur des supports sûrs et disponibles. Le rendement passe après la disponibilité.` },
        { label: 'Long terme = temps pour absorber', text: `Plus l'horizon est long (8, 10, 20 ans), plus les variations de court terme ont le temps de se lisser. Le temps est l'allié n° 1 de l'investisseur : il transforme un pari risqué en une progression plus régulière.` },
      ] },
      { tag: 'PAGE 4 · L’ORDRE DES PRIORITÉS', title: 'Investir n’est pas la première marche', blocks: [
        { label: 'D’abord le coussin', text: `Avant d'investir, on met en place une épargne de précaution disponible (vue au module 2) : c'est elle qui évite d'avoir à vendre ses placements en catastrophe au premier imprévu.` },
        { label: 'Ensuite, les dettes chères', text: `Rembourser un crédit à 15 % ou un découvert, c'est un « rendement » garanti de 15 % : mieux que ce que rapporte la plupart des placements. On éteint les dettes coûteuses avant de chercher à faire fructifier.` },
        { label: 'Enfin, on investit le surplus', text: `On n'investit que l'argent « en trop » : celui qu'on peut oublier plusieurs années sans que ça déséquilibre le quotidien. Cet ordre — coussin, dettes, puis investissement — protège de la plupart des mauvaises surprises.` },
      ] },
      { tag: 'PAGE 5 · LE RÉFLEXE KAPI', title: 'Avant de placer le premier euro', blocks: [
        { label: 'Pourquoi c’est crucial', text: `Beaucoup de mauvaises expériences d'investissement viennent d'une seule erreur : placer trop tôt de l'argent dont on avait besoin. Poser le cadre évite l'essentiel des dégâts.` },
        { label: 'Les 3 vérifications', items: ['Mon épargne de précaution est-elle en place et disponible ?', 'Ai-je des dettes chères (renouvelable, découvert) à éteindre d’abord ?', 'De quelle somme suis-je sûr de ne PAS avoir besoin avant plusieurs années ?'] },
        { label: 'À retenir', items: ['L’argent qui dort perd du pouvoir d’achat à cause de l’inflation', 'Rendement élevé = risque élevé : « sans risque et très rentable » n’existe pas', 'Le temps est le principal moteur : on investit long, pas pour demain'] },
      ] },
    ],
    questions: [
      { q: 'À 2 % d’inflation par an, de l’argent laissé sans rien faire…', opts: ['Gagne du pouvoir d’achat', 'Perd du pouvoir d’achat', 'Reste identique en pouvoir d’achat'], good: 1, explain: `Les prix montent d'environ 2 % par an : la même somme achète un peu moins chaque année. Ne rien faire, c'est reculer lentement.` },
      { q: 'Un placement « très rentable et sans aucun risque », c’est…', opts: ['Une bonne affaire à saisir vite', 'Le signal n° 1 d’une arnaque', 'Le cas normal en Bourse'], good: 1, explain: `Rendement élevé et risque vont toujours de pair. La promesse du contraire est le premier signal d'une arnaque.` },
      { q: 'La toute première question avant d’investir est…', opts: ['Dans quel produit je mets l’argent ?', 'Pour quand ai-je besoin de cet argent ?', 'Quelle est la mode du moment ?'], good: 1, explain: `L'horizon de temps commande tout : un projet à 2 ans et une épargne à 20 ans ne se placent pas de la même manière.` },
      { q: 'Avant d’investir, l’ordre des priorités est…', opts: ['Investir, puis épargner, puis rembourser', 'Épargne de précaution, dettes chères, puis investir le surplus', 'Tout investir immédiatement'], good: 1, explain: `On sécurise d'abord un coussin disponible, on éteint les dettes coûteuses, puis on investit seulement l'argent en trop.` },
      { q: 'Sur le long terme, le temps…', opts: ['Aggrave le risque', 'Aide à lisser les variations de court terme', 'N’a aucun effet'], good: 1, explain: `Plus l'horizon est long, plus les hauts et les bas ont le temps de se compenser : le temps est l'allié de l'investisseur.` },
    ],
  },

  '5.2': {
    title: 'Actions, indices et ETF',
    goal: `À la fin, tu sauras ce qu'est une action, pourquoi la diversification protège, et comment un indice et un ETF permettent de détenir des centaines d'entreprises d'un coup, à frais réduits.`,
    badge: 'Panier bien garni',
    pages: [
      { tag: 'PAGE 1 · UNE ACTION', title: 'Posséder un bout d’entreprise', blocks: [
        { label: 'Ce que tu détiens', text: `Une action, c'est une petite part d'une entreprise. En l'achetant, tu deviens copropriétaire : si l'entreprise crée de la valeur sur le long terme, ta part peut en profiter (hausse du cours, dividendes).` },
        { label: 'Deux sources de gain', text: `Une action peut rapporter de deux façons : la hausse de son cours (tu revends plus cher qu'à l'achat) et le dividende (une partie des bénéfices reversée aux actionnaires). Rien n'est garanti : le cours peut aussi baisser.` },
        { label: 'Le risque d’une seule action', text: `Miser sur une seule entreprise, c'est jouer gros : si elle traverse une crise ou fait faillite, tu peux perdre une grande partie de ta mise. C'est là qu'intervient la diversification.` },
      ] },
      { tag: 'PAGE 2 · LA DIVERSIFICATION', title: 'Ne pas tout jouer sur un cheval', blocks: [
        { label: 'Le principe', text: `Diversifier, c'est répartir son argent entre beaucoup d'entreprises, de secteurs et de pays. Si l'une chute, les autres amortissent : le risque propre à une seule société se dilue.` },
        { label: 'Pourquoi ça marche', text: `Toutes les entreprises ne montent ni ne descendent en même temps. En en détenant des centaines, tu ne paries plus sur « la bonne action » mais sur la croissance de l'économie dans son ensemble — beaucoup plus régulier.` },
        { label: 'La limite', text: `La diversification réduit le risque lié à une entreprise, mais pas le risque du marché entier : en cas de crise générale, tout baisse ensemble. C'est là que l'horizon long reprend son rôle.` },
      ] },
      { tag: 'PAGE 3 · UN INDICE', title: 'La photo d’un marché', blocks: [
        { label: 'Ce qu’est un indice', text: `Un indice boursier (CAC 40, S&P 500, MSCI World…) mesure la performance moyenne d'un panier d'entreprises. Le CAC 40 suit 40 grandes sociétés françaises ; le MSCI World en suit environ 1 400 dans les pays développés.` },
        { label: 'Un thermomètre, pas un produit', text: `Un indice est un simple indicateur : tu ne peux pas « acheter le CAC 40 » directement. Il sert de référence pour dire si un marché monte ou descend, et pour comparer des placements.` },
        { label: 'Pourquoi les indices larges intéressent', text: `Un indice mondial regroupe tant d'entreprises et de pays qu'il représente, à lui seul, une énorme diversification. Suivre un indice large, c'est suivre l'économie mondiale plutôt qu'une poignée de sociétés.` },
      ] },
      { tag: 'PAGE 4 · L’ETF', title: 'Le panier qui réplique l’indice', blocks: [
        { label: 'Ce qu’est un ETF', text: `Un ETF (ou « tracker ») est un fonds coté en Bourse qui réplique automatiquement un indice. Acheter une part d'ETF Monde, c'est détenir d'un coup un petit morceau de ~1 400 entreprises, sans avoir à les choisir une par une.` },
        { label: 'L’avantage des frais', text: `Comme l'ETF se contente de suivre l'indice (aucun gérant qui « choisit » les actions), ses frais annuels sont très faibles — souvent une fraction de pourcent. Sur des décennies, des frais bas font une énorme différence.` },
        { label: 'Ce que ça ne fait pas', text: `Un ETF ne supprime pas le risque : si le marché baisse, l'ETF baisse avec lui. Il rend la diversification simple et bon marché, mais il faut toujours l'horizon long et le coussin de sécurité en place.` },
      ] },
      { tag: 'PAGE 5 · LE RÉFLEXE KAPI', title: 'Comprendre avant de choisir', blocks: [
        { label: 'Pourquoi', text: `Comprendre la logique action → diversification → indice → ETF te protège des placements « exotiques » vendus comme miraculeux : tu sais désormais reconnaître ce qui est simple, large et peu coûteux.` },
        { label: 'Les bons réflexes de lecture', items: ['Regarder ce que contient un indice (pays, secteurs, nombre d’entreprises) avant tout', 'Repérer les frais annuels d’un fonds : plus ils sont bas, mieux c’est sur le long terme', 'Se méfier de tout produit « unique » présenté comme battant le marché sans risque'] },
        { label: 'À retenir', items: ['Une seule action = risque concentré ; un panier large = risque dilué', 'Un indice mesure un marché ; un ETF permet de le suivre en une ligne', 'Frais bas + diversification large + horizon long = le trio des débuts sereins'] },
      ] },
    ],
    questions: [
      { q: 'Une action, c’est…', opts: ['Un prêt fait à une entreprise', 'Une part de propriété d’une entreprise', 'Un compte d’épargne garanti'], good: 1, explain: `Détenir une action, c'est posséder une petite part de l'entreprise, avec ses gains possibles (cours, dividendes) et ses risques.` },
      { q: 'Diversifier permet surtout de réduire…', opts: ['Le risque lié à une entreprise particulière', 'Le risque de crise mondiale', 'Les frais bancaires'], good: 0, explain: `Répartir sur des centaines d'entreprises dilue le risque propre à chacune ; le risque du marché entier, lui, subsiste.` },
      { q: 'Un indice comme le MSCI World est…', opts: ['Un produit qu’on achète directement', 'Une mesure de la performance d’un panier d’entreprises', 'Un livret réglementé'], good: 1, explain: `Un indice est un indicateur : il mesure un marché. Pour le suivre, on passe par un produit comme un ETF.` },
      { q: 'Un ETF (tracker) sert à…', opts: ['Battre le marché grâce à un gérant vedette', 'Répliquer un indice à frais réduits', 'Garantir un rendement fixe'], good: 1, explain: `L'ETF suit mécaniquement un indice, sans gérant, ce qui explique ses frais très faibles — mais il baisse aussi quand le marché baisse.` },
      { q: 'Sur le long terme, des frais annuels bas…', opts: ['N’ont aucune importance', 'Font une grosse différence sur le résultat final', 'Augmentent le risque'], good: 1, explain: `Les frais se paient chaque année : sur des décennies, quelques dixièmes de pourcent économisés changent nettement le résultat.` },
    ],
  },

  '5.3': {
    title: 'PEA, CTO et fiscalité',
    goal: `À la fin, tu sauras distinguer les principales enveloppes pour investir en actions (PEA, compte-titres), comprendre la règle des 5 ans du PEA et la « flat tax » — sans conseil personnalisé.`,
    badge: 'Enveloppes maîtrisées',
    pages: [
      { tag: 'PAGE 1 · L’ENVELOPPE', title: 'Le contenant compte autant que le contenu', blocks: [
        { label: 'Contenu vs contenant', text: `Ce dans quoi tu investis (actions, ETF) est le « contenu ». L'enveloppe (PEA, compte-titres, assurance-vie) est le « contenant » : un compte dans lequel tu loges tes placements. La même action peut vivre dans plusieurs enveloppes.` },
        { label: 'Pourquoi ça change tout', text: `L'enveloppe détermine surtout la fiscalité : combien l'État prélève sur tes gains, et à quelles conditions. À placement identique, le résultat net dans ta poche peut varier selon l'enveloppe choisie.` },
        { label: 'Le principe général', text: `Certaines enveloppes offrent un avantage fiscal en échange de contraintes (durée de détention, plafond). D'autres sont totalement libres mais sans avantage. Comprendre le compromis est la clé.` },
      ] },
      { tag: 'PAGE 2 · LE PEA', title: 'L’enveloppe actions à avantage fiscal', blocks: [
        { label: 'Ce que c’est', text: `Le PEA (Plan d'Épargne en Actions) est une enveloppe dédiée aux actions européennes et à certains fonds/ETF éligibles. Il a un plafond de versement (150 000 €) et vise le long terme.` },
        { label: 'La règle des 5 ans', text: `C'est son cœur : après 5 ans de détention du plan, les gains sont exonérés d'impôt sur le revenu (restent seulement les prélèvements sociaux). Avant 5 ans, un retrait entraîne en général la clôture et une fiscalité moins avantageuse.` },
        { label: 'L’astuce du chrono', text: `Puisque c'est la date d'ouverture qui lance le compteur des 5 ans, beaucoup ouvrent un PEA tôt avec une petite somme, juste pour « prendre date ». L'horloge tourne, même si on investit sérieusement plus tard. (Information générale, pas une recommandation d'agir.)` },
      ] },
      { tag: 'PAGE 3 · LE COMPTE-TITRES', title: 'La liberté totale, sans avantage', blocks: [
        { label: 'Ce que c’est', text: `Le compte-titres ordinaire (CTO) permet d'investir sans limite de montant et sans restriction géographique : actions du monde entier, produits variés. Aucun plafond, aucune durée minimale.` },
        { label: 'Sa fiscalité', text: `En contrepartie, il n'a aucun avantage fiscal : les gains (plus-values, dividendes) sont imposés, en général via la « flat tax » (voir page suivante). C'est la souplesse contre l'absence d'avantage.` },
        { label: 'Quand il se justifie', text: `Le CTO sert surtout quand on veut investir sur des supports non éligibles au PEA (hors Europe en direct, certains produits), ou au-delà du plafond du PEA. Les deux enveloppes sont complémentaires, pas concurrentes.` },
      ] },
      { tag: 'PAGE 4 · LA FLAT TAX', title: 'Comment sont taxés les gains', blocks: [
        { label: 'Le prélèvement forfaitaire', text: `Par défaut, les gains de placements (hors enveloppes avantagées) sont soumis à la « flat tax » de 30 % : 17,2 % de prélèvements sociaux + 12,8 % d'impôt sur le revenu. Un taux unique, simple à retenir.` },
        { label: 'On ne taxe que le gain', text: `L'impôt porte sur la plus-value (ce que tu as gagné), pas sur le capital que tu as investi. Et tant que tu ne vends pas, il n'y a en général pas d'impôt sur la plus-value latente : la fiscalité se déclenche à la sortie.` },
        { label: 'L’option barème', text: `On peut, sur option, choisir d'être imposé au barème progressif de l'impôt plutôt qu'à la flat tax — parfois avantageux pour les revenus faibles. C'est un choix technique : l'idée à retenir est surtout que l'enveloppe et la durée influencent fortement l'impôt final.` },
      ] },
      { tag: 'PAGE 5 · LE RÉFLEXE KAPI', title: 'Choisir le bon contenant', blocks: [
        { label: 'Pourquoi', text: `Deux personnes qui investissent dans le même ETF peuvent finir avec des résultats nets différents à cause de l'enveloppe. Comprendre le contenant, c'est éviter de laisser filer du rendement en impôts inutiles.` },
        { label: 'Les bons réflexes', items: ['Lire la fiche officielle d’une enveloppe (plafonds, durée, fiscalité) avant de l’ouvrir', 'Retenir que le PEA récompense la durée (5 ans) et le CTO offre la liberté sans avantage', 'Se souvenir que la fiscalité se déclenche surtout à la vente, sur le gain seulement'] },
        { label: 'À retenir', items: ['Contenu (les placements) ≠ contenant (l’enveloppe qui les fiscalise)', 'PEA : plafond + 5 ans pour l’avantage fiscal ; CTO : libre mais taxé', 'Flat tax = 30 % sur les gains, par défaut, à la sortie'] },
      ] },
    ],
    questions: [
      { q: 'L’enveloppe (PEA, CTO…) détermine surtout…', opts: ['Le rendement garanti', 'La fiscalité de tes gains', 'Le nombre d’actions détenues'], good: 1, explain: `À placement identique, l'enveloppe change ce que l'État prélève : c'est elle qui fixe le cadre fiscal.` },
      { q: 'L’avantage fiscal du PEA s’obtient…', opts: ['Immédiatement', 'Après 5 ans de détention du plan', 'Jamais'], good: 1, explain: `Après 5 ans, les gains échappent à l'impôt sur le revenu (restent les prélèvements sociaux). Avant, c'est moins avantageux.` },
      { q: 'Le compte-titres ordinaire (CTO)…', opts: ['A un plafond strict et un avantage fiscal', 'Est libre (montant, supports) mais sans avantage fiscal', 'Est réservé aux experts'], good: 1, explain: `Le CTO offre une liberté totale de montant et de supports, en échange de l'absence d'avantage fiscal.` },
      { q: 'La « flat tax » sur les gains de placements est de…', opts: ['30 % (17,2 % sociaux + 12,8 % impôt)', '50 %', '10 %'], good: 0, explain: `Le prélèvement forfaitaire unique s'élève à 30 % : 17,2 % de prélèvements sociaux et 12,8 % d'impôt sur le revenu.` },
      { q: 'L’impôt sur une plus-value se déclenche en général…', opts: ['Chaque année, même sans vendre', 'À la vente, sur le gain réalisé', 'À l’achat'], good: 1, explain: `Tant que tu ne vends pas, la plus-value est « latente » : la fiscalité intervient surtout à la sortie, sur le gain.` },
    ],
  },

  '5.4': {
    title: 'La méthode qui marche',
    goal: `À la fin, tu connaîtras la méthode des versements réguliers (DCA), pourquoi essayer de « timer » le marché échoue, et les erreurs classiques qui coûtent le plus cher aux débutants.`,
    badge: 'Régularité payante',
    pages: [
      { tag: 'PAGE 1 · LE DCA', title: 'Investir un peu, régulièrement', blocks: [
        { label: 'Le principe', text: `Le DCA (Dollar Cost Averaging), ou investissement programmé, consiste à placer la même somme à intervalle régulier (par exemple chaque mois), quoi qu'il arrive sur les marchés. Simple, automatique, sans se poser de question.` },
        { label: 'Pourquoi ça lisse', text: `Quand les prix sont hauts, ta somme fixe achète moins de parts ; quand ils sont bas, elle en achète plus. Sur la durée, tu obtiens un prix moyen, sans avoir à deviner le bon moment.` },
        { label: 'L’effet psychologique', text: `Le plus grand avantage du DCA est mental : il retire l'émotion de la décision. Tu n'as plus à te demander « est-ce le bon moment ? » chaque mois — c'est automatique, donc tu tiens dans la durée.` },
      ] },
      { tag: 'PAGE 2 · LE PIÈGE DU TIMING', title: 'Deviner le marché ne marche pas', blocks: [
        { label: 'L’illusion du bon moment', text: `Beaucoup rêvent d'acheter « au plus bas » et de vendre « au plus haut ». En pratique, même les professionnels y échouent : personne ne sait prédire les mouvements de court terme de façon fiable.` },
        { label: 'Le coût de l’attente', text: `« J'attends que ça baisse pour rentrer » finit souvent par « je regarde ça monter sans moi ». Le temps passé hors du marché coûte généralement plus cher que les baisses qu'on espérait éviter.` },
        { label: 'Time in, not timing', text: `L'adage des investisseurs : ce qui compte, c'est le temps passé investi (« time in the market »), pas le fait de deviner le bon moment (« timing the market »). La régularité bat la prédiction.` },
      ] },
      { tag: 'PAGE 3 · LES ÉMOTIONS', title: 'Ton pire ennemi, c’est toi', blocks: [
        { label: 'Vendre par peur', text: `Quand les marchés chutent, la panique pousse à tout vendre pour « limiter les pertes ». Mais vendre au creux transforme une baisse temporaire (sur le papier) en perte définitive (réelle).` },
        { label: 'Acheter par euphorie', text: `À l'inverse, quand tout monte et que tout le monde en parle, la tentation est d'y mettre plus, au plus haut. C'est souvent là qu'on paie le plus cher. Les émotions poussent à faire l'inverse du raisonnable.` },
        { label: 'La parade', text: `Un plan automatique et régulier (DCA) protège de ces deux réflexes : il continue d'acheter dans les creux (quand c'est « soldé ») et t'empêche de tout miser au sommet. La discipline remplace l'humeur.` },
      ] },
      { tag: 'PAGE 4 · LES ERREURS CLASSIQUES', title: 'Ce qui coûte le plus cher aux débutants', blocks: [
        { label: 'La sur-concentration', text: `Tout miser sur une seule action « coup de cœur », une seule crypto ou un seul secteur à la mode. Sans diversification, un accident suffit à effacer des années d'efforts.` },
        { label: 'Les frais qui grignotent', text: `Multiplier les allers-retours, choisir des produits chargés en frais, changer sans cesse de stratégie : chaque mouvement a un coût. Les frais répétés sont un des principaux destructeurs de rendement.` },
        { label: 'Suivre la foule et les modes', text: `Investir parce qu'un influenceur, un collègue ou une pub le dit, sans comprendre. Le « tout le monde le fait » n'a jamais été une analyse. Ce qui est très médiatisé est souvent déjà cher.` },
      ] },
      { tag: 'PAGE 5 · LE RÉFLEXE KAPI', title: 'La discipline plutôt que le flair', blocks: [
        { label: 'Pourquoi', text: `Sur le long terme, l'investisseur régulier et diversifié bat presque toujours celui qui croit deviner le marché. Ce module est ta meilleure protection contre tes propres émotions.` },
        { label: 'Les principes à garder', items: ['Verser régulièrement une somme raisonnable, automatiquement, plutôt que guetter le « bon moment »', 'Rester diversifié et surveiller les frais', 'Ne pas vendre dans la panique ni acheter dans l’euphorie'] },
        { label: 'À retenir', items: ['DCA : la même somme à intervalle régulier lisse le prix et neutralise l’émotion', '« Time in the market » bat « timing the market »', 'Les pires erreurs sont la concentration, les frais répétés et le suivisme'] },
      ] },
    ],
    questions: [
      { q: 'Le DCA (investissement programmé) consiste à…', opts: ['Placer une grosse somme au meilleur moment', 'Verser la même somme à intervalle régulier, quoi qu’il arrive', 'Vendre dès que ça baisse'], good: 1, explain: `Le DCA place une somme fixe régulièrement : on achète plus de parts quand c'est bas, moins quand c'est haut, sans deviner le moment.` },
      { q: 'Essayer de « timer » le marché…', opts: ['Est la stratégie la plus fiable', 'Échoue même pour les professionnels', 'Garantit d’acheter au plus bas'], good: 1, explain: `Prédire les mouvements de court terme est quasi impossible, même pour les pros. Le temps passé investi compte plus que le timing.` },
      { q: 'Vendre pendant une chute de marché…', opts: ['Transforme une baisse temporaire en perte définitive', 'Est toujours la bonne décision', 'N’a aucune conséquence'], good: 0, explain: `Vendre au creux réalise une perte qui n'était que « sur le papier ». La panique est l'ennemie de l'investisseur.` },
      { q: 'Parmi les erreurs les plus coûteuses du débutant :', opts: ['Diversifier et rester régulier', 'Tout miser sur un seul actif à la mode', 'Surveiller ses frais'], good: 1, explain: `La sur-concentration sur une seule action ou crypto expose à tout perdre sur un seul accident.` },
      { q: 'Le principal avantage psychologique du DCA est…', opts: ['De garantir un gain', 'De retirer l’émotion de la décision', 'D’éviter tout risque'], good: 1, explain: `En rendant l'investissement automatique, le DCA t'évite de te demander « est-ce le bon moment ? » et t'aide à tenir dans la durée.` },
    ],
  },

  '5.5': {
    title: 'Les intérêts composés',
    goal: `À la fin, tu comprendras l'effet « boule de neige » des intérêts composés, pourquoi la durée compte plus que le taux, et le prix réel d'attendre pour commencer.`,
    badge: 'Effet boule de neige',
    pages: [
      { tag: 'PAGE 1 · SIMPLE VS COMPOSÉ', title: 'Quand les intérêts font des petits', blocks: [
        { label: 'Intérêts simples', text: `Avec des intérêts simples, tu gagnes chaque année un pourcentage du capital de départ seulement. 1 000 € à 5 % rapportent 50 € par an, encore et toujours 50 €.` },
        { label: 'Intérêts composés', text: `Avec les intérêts composés, les intérêts s'ajoutent au capital et produisent à leur tour des intérêts. L'an 1 : +50 € (sur 1 000). L'an 2 : +52,50 € (sur 1 050). Chaque année, la base grossit — et les gains aussi.` },
        { label: 'La boule de neige', text: `C'est l'image clé : une boule qui roule ramasse de la neige, grossit, donc en ramasse encore plus. Au début c'est lent, presque invisible. Puis la croissance s'accélère toute seule.` },
      ] },
      { tag: 'PAGE 2 · LA DURÉE, REINE', title: 'Le temps bat le taux', blocks: [
        { label: 'Le facteur le plus puissant', text: `Contre-intuitif mais fondamental : sur le long terme, la durée pèse davantage que le taux. Quelques années de plus à laisser tourner la boule de neige peuvent compter plus qu'un ou deux points de rendement en plus.` },
        { label: 'La deuxième moitié explose', text: `L'essentiel de la croissance se produit dans les dernières années, quand la base est devenue énorme. C'est pour ça qu'abandonner trop tôt prive du meilleur : la partie la plus spectaculaire arrive à la fin.` },
        { label: 'Un ordre de grandeur', text: `À rendement moyen régulier, une somme placée peut mettre une quinzaine d'années à doubler, puis doubler de nouveau bien plus vite en valeur absolue. Le temps travaille pendant que tu dors. (Illustration pédagogique, pas une promesse de rendement.)` },
      ] },
      { tag: 'PAGE 3 · LE COÛT D’ATTENDRE', title: 'Commencer tôt, même petit', blocks: [
        { label: 'Chaque année compte double', text: `Les premières années versées sont celles qui composent le plus longtemps : ce sont les plus précieuses. Attendre 5 ans « le temps d'avoir plus d'argent » ampute justement les années les plus rentables.` },
        { label: 'Petit mais tôt', text: `Une petite somme régulière commencée jeune peut dépasser une grosse somme commencée bien plus tard : le temps supplémentaire fait plus que le montant. La régularité et la précocité battent l'ampleur.` },
        { label: 'Le message', text: `On n'a pas besoin de beaucoup pour démarrer. Le plus important n'est pas combien tu mets au début, mais depuis quand tu laisses le temps agir. Commencer, même modestement, vaut mieux qu'attendre le « bon montant ».` },
      ] },
      { tag: 'PAGE 4 · LES DEUX FACES', title: 'La boule de neige joue aussi contre toi', blocks: [
        { label: 'Composés = ton ami quand tu épargnes', text: `Quand tu investis, les intérêts composés travaillent pour toi : ton argent grossit tout seul, de plus en plus vite.` },
        { label: 'Composés = ton ennemi quand tu dois', text: `Le même mécanisme s'applique aux dettes : les intérêts d'un crédit renouvelable à 18 % composent contre toi. La dette grossit à la même vitesse qu'une épargne — mais dans le mauvais sens.` },
        { label: 'La conclusion pratique', text: `C'est pourquoi rembourser une dette chère est un « placement » imbattable : tu neutralises des intérêts composés qui jouaient contre toi. Éteindre le 18 % avant de chercher du 5 % ailleurs est mathématiquement gagnant.` },
      ] },
      { tag: 'PAGE 5 · LE RÉFLEXE KAPI', title: 'Laisse le temps travailler', blocks: [
        { label: 'Pourquoi', text: `Comprendre les intérêts composés change le rapport au temps : on cesse de voir l'épargne comme « de l'argent bloqué » et on la voit comme une graine qui grossit d'autant plus qu'on la plante tôt.` },
        { label: 'Les principes', items: ['Commencer tôt, même avec une petite somme régulière, plutôt que d’attendre', 'Ne pas interrompre sans raison : la meilleure partie arrive à la fin', 'Éteindre en priorité les dettes chères, où les composés jouent contre toi'] },
        { label: 'À retenir', items: ['Intérêts composés = les intérêts produisent eux-mêmes des intérêts (boule de neige)', 'La durée compte plus que le taux : le temps est le vrai moteur', 'Le même mécanisme fait grossir une épargne… ou une dette'] },
      ] },
    ],
    questions: [
      { q: 'Les intérêts composés, c’est…', opts: ['Toujours le même gain chaque année', 'Les intérêts qui produisent eux-mêmes des intérêts', 'Un impôt sur l’épargne'], good: 1, explain: `Les intérêts s'ajoutent au capital et génèrent à leur tour des intérêts : la base grossit chaque année, d'où l'effet boule de neige.` },
      { q: 'Sur le très long terme, ce qui pèse le plus est…', opts: ['La durée', 'Le taux exact', 'La somme du premier versement'], good: 0, explain: `Le temps est le facteur le plus puissant : quelques années de plus battent souvent un ou deux points de rendement supplémentaires.` },
      { q: 'Attendre 5 ans « le temps d’avoir plus » pour commencer…', opts: ['N’a aucun effet', 'Supprime les années qui composent le plus longtemps', 'Améliore le résultat'], good: 1, explain: `Les premières années sont les plus précieuses car elles composent le plus longtemps : attendre coûte cher.` },
      { q: 'L’essentiel de la croissance d’un placement composé arrive…', opts: ['Au tout début', 'Dans les dernières années', 'De façon parfaitement linéaire'], good: 1, explain: `Quand la base est devenue énorme, la croissance s'accélère : la plus grosse partie se joue vers la fin, d'où l'importance de ne pas abandonner tôt.` },
      { q: 'Les intérêts composés jouent CONTRE toi quand…', opts: ['Tu épargnes régulièrement', 'Tu as une dette chère non remboursée', 'Tu diversifies'], good: 1, explain: `Sur une dette (ex. renouvelable à 18 %), les intérêts composent contre toi : la rembourser neutralise ce mécanisme — un « rendement » garanti.` },
    ],
  },
}
