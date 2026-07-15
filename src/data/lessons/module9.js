// Contenu long du module 9 « Niveau expert » — 5 pages × 3-4 blocs
// + quiz de 5 questions. Sous-modules : 9.1 à 9.4.
// Contenu strictement pédagogique : ces produits sont complexes et risqués ;
// l'objectif est de comprendre et de savoir pourquoi la prudence s'impose,
// jamais d'inciter à s'y exposer.

export const MODULE9_LESSONS = {
  '9.1': {
    title: 'Les produits dérivés',
    goal: `À la fin, tu comprendras ce qu'est un produit dérivé (option, future), la différence entre s'en servir pour se couvrir et pour spéculer, et pourquoi ils sont réservés aux avertis.`,
    badge: 'Dérivés démystifiés',
    pages: [
      { tag: 'PAGE 1 · UN CONTRAT SUR AUTRE CHOSE', title: 'La valeur "dérive" d’un actif', blocks: [
        { label: 'La définition', text: `Un produit dérivé est un contrat dont la valeur "dérive" de celle d'un autre actif (une action, une matière première, un indice, une devise), appelé sous-jacent. Tu ne détiens pas l'actif : tu détiens un pari ou un droit lié à son prix.` },
        { label: 'L’idée d’origine', text: `Les dérivés ont été inventés pour se protéger. Un agriculteur qui fixe aujourd'hui le prix de vente de sa récolte future se couvre contre une baisse. À l'origine, c'est un outil d'assurance, pas de jeu.` },
        { label: 'Le glissement', text: `Mais comme leur valeur bouge fortement avec le sous-jacent, les dérivés sont vite devenus des instruments de spéculation. Le même contrat peut servir à se protéger… ou à parier gros. Tout dépend de l'intention.` },
      ] },
      { tag: 'PAGE 2 · OPTIONS ET FUTURES', title: 'Deux grandes familles', blocks: [
        { label: 'Le future (contrat à terme)', text: `Un future est un engagement d'acheter ou de vendre un actif à un prix fixé, à une date future. Les deux parties sont obligées d'honorer le contrat. C'est un engagement ferme, pas une simple possibilité.` },
        { label: 'L’option', text: `Une option donne le droit (pas l'obligation) d'acheter (call) ou de vendre (put) un actif à un prix fixé, jusqu'à une échéance. On paie une "prime" pour ce droit. Si ça tourne mal, on peut renoncer et ne perdre que la prime.` },
        { label: 'La complexité', text: `Le prix d'une option dépend de plusieurs facteurs (cours du sous-jacent, temps restant, volatilité…). Comprendre et valoriser ces produits demande de vraies connaissances : ce n'est pas un placement "presse-bouton".` },
      ] },
      { tag: 'PAGE 3 · COUVERTURE VS SPÉCULATION', title: 'Le même outil, deux usages opposés', blocks: [
        { label: 'Se couvrir', text: `Un professionnel qui détient un actif peut utiliser un dérivé comme une assurance : si le prix chute, le dérivé compense la perte. Ici, le dérivé réduit le risque global. C'est son usage originel et vertueux.` },
        { label: 'Spéculer', text: `À l'inverse, acheter un dérivé sans détenir le sous-jacent, juste pour parier sur le sens du prix, augmente le risque. On peut gagner beaucoup… ou tout perdre très vite. Ici, le dérivé est un amplificateur de risque.` },
        { label: 'La bascule', text: `Le produit est le même : c'est l'usage qui change tout. Pour un particulier non professionnel, l'usage spéculatif domine largement — et c'est précisément le plus dangereux.` },
      ] },
      { tag: 'PAGE 4 · POURQUOI RESTER PRUDENT', title: 'Réservés aux avertis', blocks: [
        { label: 'L’effet de levier', text: `La plupart des dérivés intègrent un effet de levier : une petite mise contrôle une grosse position. Le levier multiplie les gains… et les pertes, à l'identique. Une variation modeste du sous-jacent peut effacer toute la mise.` },
        { label: 'La perte peut dépasser la mise', text: `Sur certains dérivés, tu peux perdre plus que ce que tu as investi au départ (appels de marge). Contrairement à une action, la perte n'est pas toujours plafonnée à ta mise. C'est un risque d'une autre nature.` },
        { label: 'Le bon réflexe', text: `Pour un investisseur qui débute, les dérivés ne sont pas nécessaires : on peut construire un patrimoine solide toute sa vie sans jamais y toucher. Comprendre qu'ils existent suffit ; s'y exposer sans expertise est une erreur.` },
      ] },
      { tag: 'PAGE 5 · LE RÉFLEXE KAPI', title: 'Comprendre n’est pas s’exposer', blocks: [
        { label: 'Pourquoi ce module existe', text: `Le but n'est pas de t'inciter à utiliser des dérivés, mais de te les faire comprendre : pour ne pas être impressionné par le jargon, et pour repérer quand une "opportunité" repose en fait sur ces produits risqués.` },
        { label: 'À garder en tête', items: ['Un dérivé tire sa valeur d’un autre actif (le sous-jacent)', 'Même outil : couverture (réduit le risque) ou spéculation (l’augmente)', 'Le levier peut faire perdre plus que la mise : réservé aux avertis'] },
        { label: 'Le principe', text: `On peut réussir toute une vie d'épargnant sans dérivés. Les connaître protège du jargon et des vendeurs ; ne pas s'y exposer sans expertise protège le portefeuille.` },
      ] },
    ],
    questions: [
      { q: 'Un produit dérivé tire sa valeur…', opts: ['De rien, il est autonome', 'D’un autre actif appelé sous-jacent', 'D’un livret réglementé'], good: 1, explain: `La valeur d'un dérivé "dérive" de celle d'un sous-jacent (action, matière première, indice, devise).` },
      { q: 'À l’origine, les dérivés ont été créés pour…', opts: ['Spéculer', 'Se protéger (se couvrir) contre des variations de prix', 'Épargner sans risque'], good: 1, explain: `Ex. l'agriculteur qui fixe à l'avance le prix de sa récolte : à l'origine, c'est une assurance, pas un jeu.` },
      { q: 'La différence entre une option et un future :', opts: ['L’option donne un droit, le future est un engagement ferme', 'Ils sont identiques', 'L’option est sans risque'], good: 0, explain: `Le future oblige les deux parties ; l'option donne un droit (contre une prime), sans obligation d'exercer.` },
      { q: 'L’effet de levier des dérivés…', opts: ['Réduit toujours le risque', 'Multiplie les gains ET les pertes', 'Garantit un gain'], good: 1, explain: `Une petite mise contrôle une grosse position : le levier amplifie les deux sens, y compris les pertes.` },
      { q: 'Pour un investisseur débutant, les dérivés sont…', opts: ['Indispensables', 'Non nécessaires : on peut bâtir un patrimoine sans y toucher', 'Sans aucun risque'], good: 1, explain: `On peut réussir toute une vie d'épargnant sans dérivés ; s'y exposer sans expertise est une erreur.` },
    ],
  },

  '9.2': {
    title: 'CFD, turbos et produits structurés',
    goal: `À la fin, tu sauras ce que sont les CFD, turbos et produits structurés, pourquoi une large majorité de particuliers y perdent, et comment reconnaître un produit "trop beau".`,
    badge: 'Pièges à levier repérés',
    pages: [
      { tag: 'PAGE 1 · LES CFD', title: 'Le pari à levier sur écran', blocks: [
        { label: 'Ce que c’est', text: `Un CFD ("Contract For Difference") est un produit qui permet de parier sur la hausse ou la baisse d'un actif, avec un fort effet de levier, sans posséder l'actif. On mise sur la différence de prix entre l'ouverture et la fermeture de la position.` },
        { label: 'Le chiffre qui doit alerter', text: `Les études des régulateurs (dont l'AMF) montrent qu'environ 75 à 90 % des particuliers PERDENT de l'argent sur les CFD. Ce n'est pas de la malchance : c'est structurel. Le produit est conçu pour un usage professionnel très encadré.` },
        { label: 'Pourquoi on perd', text: `Le levier fait que de petites variations suffisent à liquider ta position. Ajoute les frais, l'écart de prix (spread), et les émotions : le particulier joue contre des acteurs mieux armés, avec un produit qui amplifie ses erreurs.` },
      ] },
      { tag: 'PAGE 2 · TURBOS ET WARRANTS', title: 'Le levier "packagé"', blocks: [
        { label: 'Ce que c’est', text: `Turbos, warrants, "leveraged products" : ce sont des produits cotés qui offrent un effet de levier sur un sous-jacent. Simples d'accès (achetables comme une action), ils masquent une complexité et un risque élevés.` },
        { label: 'La barrière désactivante', text: `Beaucoup de turbos ont une "barrière" : si le cours la touche, le produit est désactivé et peut ne plus rien valoir, instantanément. La perte peut être totale et brutale, sans possibilité de "se refaire".` },
        { label: 'L’illusion de la simplicité', text: `Le danger vient justement de leur facilité d'achat : quelques clics suffisent, comme pour une action ordinaire. Mais le comportement du produit n'a rien d'ordinaire. Accessible ne veut pas dire adapté.` },
      ] },
      { tag: 'PAGE 3 · LES PRODUITS STRUCTURÉS', title: 'La boîte noire "sur mesure"', blocks: [
        { label: 'Ce que c’est', text: `Un produit structuré est un montage combinant plusieurs briques (souvent une obligation + des dérivés) avec une formule de rendement conditionnelle : "vous gagnez X % si l'indice fait Y, sinon…". Vendu comme un compromis entre sécurité et performance.` },
        { label: 'Les zones d’ombre', text: `La formule peut être séduisante en apparence mais complexe, avec des conditions défavorables cachées, des frais élevés et souvent une faible liquidité (difficile de sortir avant l'échéance). Ce que tu ne comprends pas peut jouer contre toi.` },
        { label: 'La question à poser', text: `Avant tout produit structuré : "dans quel scénario est-ce que je perds, et combien ?" Si le vendeur insiste sur les gains sans détailler clairement les pertes possibles, c'est un signal d'alerte majeur.` },
      ] },
      { tag: 'PAGE 4 · REPÉRER LE "TROP BEAU"', title: 'La grille de lecture', blocks: [
        { label: 'Complexité = prudence', text: `Règle simple : plus un produit est complexe, plus la prudence s'impose. La complexité sert souvent à masquer des frais ou un risque. "Si je ne peux pas l'expliquer simplement, je ne l'achète pas."` },
        { label: 'Qui gagne à te le vendre', text: `Ces produits rapportent souvent beaucoup à qui les distribue (commissions, marges). Un enthousiasme commercial marqué pour un produit compliqué doit éveiller ta vigilance : à qui profite la vente ?` },
        { label: 'Le retour aux fondamentaux', text: `Face à un produit "miracle", reviens aux bases des modules 5-7 : diversification, frais bas, horizon long, enveloppes claires. Ces fondamentaux battent la quasi-totalité des produits compliqués sur la durée.` },
      ] },
      { tag: 'PAGE 5 · LE RÉFLEXE KAPI', title: 'Le simple bat le compliqué', blocks: [
        { label: 'Pourquoi', text: `Ces produits ciblent parfois des débutants séduits par la promesse de gains rapides. Les connaître, c'est refuser en connaissance de cause plutôt que par ignorance — et ne pas confondre "accessible en un clic" avec "fait pour moi".` },
        { label: 'Les réflexes', items: ['~75-90 % des particuliers perdent sur les CFD : ce n’est pas de la malchance', 'Turbos : une barrière touchée peut tout effacer d’un coup', 'Produit structuré : toujours demander "dans quel cas je perds, et combien ?"'] },
        { label: 'À retenir', items: ['Facile à acheter ≠ adapté ni sûr', 'Plus c’est complexe, plus la prudence s’impose', 'Les fondamentaux (diversification, frais bas, long terme) battent le "miracle"'] },
      ] },
    ],
    questions: [
      { q: 'Sur les CFD, la proportion de particuliers qui perdent est d’environ…', opts: ['5 %', '75 à 90 %', '0 %'], good: 1, explain: `Les études des régulateurs montrent que ~75 à 90 % des particuliers perdent : c'est structurel, pas de la malchance.` },
      { q: 'Un turbo avec "barrière" peut…', opts: ['Ne jamais perdre de valeur', 'Être désactivé et ne plus rien valoir si le cours touche la barrière', 'Garantir le capital'], good: 1, explain: `Si le cours atteint la barrière, le produit est désactivé : la perte peut être totale et instantanée.` },
      { q: 'La bonne question devant un produit structuré est…', opts: ['"Combien je gagne au mieux ?"', '"Dans quel scénario je perds, et combien ?"', '"Est-ce à la mode ?"'], good: 1, explain: `Si le vendeur détaille les gains mais reste flou sur les pertes possibles, c'est un signal d'alerte majeur.` },
      { q: 'Face à un produit financier très complexe, la règle est…', opts: ['La complexité prouve la performance', 'Plus c’est complexe, plus la prudence s’impose', 'Acheter vite avant les autres'], good: 1, explain: `La complexité masque souvent frais et risques : "si je ne peux pas l'expliquer simplement, je ne l'achète pas".` },
      { q: 'Le fait qu’un produit à levier soit "achetable en un clic" signifie…', opts: ['Qu’il est sûr et adapté à tous', 'Que l’accès facile ne dit rien de son adéquation ni de son risque', 'Qu’il est garanti'], good: 1, explain: `Accessible ne veut pas dire adapté : le comportement de ces produits n'a rien d'ordinaire malgré la facilité d'achat.` },
    ],
  },

  '9.3': {
    title: 'Private equity et non-coté',
    goal: `À la fin, tu comprendras ce qu'est l'investissement non coté (private equity, crowdfunding, FCPI/FIP), l'enjeu majeur de l'illiquidité, et pourquoi ça se réserve à une petite part du patrimoine.`,
    badge: 'Non-coté cadré',
    pages: [
      { tag: 'PAGE 1 · HORS DE LA BOURSE', title: 'Investir dans le non-coté', blocks: [
        { label: 'Ce que c’est', text: `Le private equity, c'est investir dans des entreprises non cotées en Bourse : des sociétés qu'on ne peut pas acheter ni revendre en un clic. On finance leur développement en espérant profiter de leur croissance à long terme.` },
        { label: 'Les formes accessibles', text: `Pour un particulier, cela passe souvent par le crowdfunding (financement participatif d'entreprises ou de projets), ou des fonds spécialisés (FCPI, FIP) qui regroupent l'argent de plusieurs investisseurs pour financer des PME.` },
        { label: 'L’attrait', text: `L'argument de vente : un potentiel de rendement élevé, une utilité concrète (financer l'économie réelle, des PME locales, l'innovation), et parfois des avantages fiscaux. Un attrait réel — mais qui a une contrepartie lourde.` },
      ] },
      { tag: 'PAGE 2 · L’ILLIQUIDITÉ', title: 'Le risque qu’on sous-estime le plus', blocks: [
        { label: 'Argent bloqué longtemps', text: `Le point crucial : ton argent est immobilisé plusieurs années (souvent 5 à 10 ans, parfois plus), sans possibilité de récupérer facilement. Il n'y a pas de "bouton vendre" comme en Bourse. C'est l'illiquidité.` },
        { label: 'Pourquoi c’est un vrai risque', text: `Si un imprévu survient (perte d'emploi, urgence), cet argent reste inaccessible. C'est pourquoi on n'y met que de l'argent dont on est certain de ne pas avoir besoin avant l'échéance — jamais l'épargne de précaution.` },
        { label: 'Le risque de perte totale', text: `Une entreprise non cotée peut échouer : la perte peut être totale sur une ligne donnée. Le non-coté cumule donc illiquidité ET risque élevé sur le capital. Deux risques, pas un.` },
      ] },
      { tag: 'PAGE 3 · FCPI, FIP ET FISCALITÉ', title: 'L’avantage fiscal, un piège fréquent', blocks: [
        { label: 'La carotte fiscale', text: `Les FCPI et FIP offrent souvent une réduction d'impôt à l'entrée, en contrepartie d'un blocage de plusieurs années. Cet avantage fiscal est le principal argument commercial. Mais il ne doit jamais être la seule raison d'investir.` },
        { label: 'L’erreur classique', text: `Beaucoup souscrivent "pour défiscaliser" sans regarder la qualité du placement ni les frais (souvent élevés). Une réduction d'impôt qui s'accompagne d'une perte en capital supérieure n'a rien fait gagner. L'impôt économisé ne doit pas masquer le risque.` },
        { label: 'La bonne logique', text: `On juge d'abord un placement sur ses mérites (risque, frais, durée, perspective), puis l'avantage fiscal vient comme un bonus éventuel. Jamais l'inverse. "Défiscaliser" n'est pas une stratégie d'investissement.` },
      ] },
      { tag: 'PAGE 4 · LA PLACE DANS UN PATRIMOINE', title: 'Une petite part, en dernier', blocks: [
        { label: 'Après les fondations', text: `Le non-coté ne se envisage qu'une fois les fondations posées : budget, précaution, dettes chères éteintes, et un socle d'investissement diversifié et liquide (modules 5-7). C'est un étage tout en haut de la pyramide, pas la base.` },
        { label: 'La règle de la petite poche', text: `Même pour qui peut se le permettre, le non-coté reste une part limitée du patrimoine (une "petite poche"), précisément parce qu'il est illiquide et risqué. On ne bâtit pas l'essentiel de son avenir sur de l'argent bloqué et incertain.` },
        { label: 'Diversifier même là', text: `Mettre tout son non-coté sur une seule entreprise de crowdfunding, c'est le pire des deux mondes. Si l'on y va, on répartit sur plusieurs lignes — tout en gardant cette poche petite face au reste.` },
      ] },
      { tag: 'PAGE 5 · LE RÉFLEXE KAPI', title: 'Séduisant, mais à sa juste place', blocks: [
        { label: 'Pourquoi', text: `Le non-coté est souvent proposé avec un discours flatteur ("investir comme les grands", "soutenir l'économie", "défiscaliser"). Comprendre l'illiquidité et le risque réel te permet d'y aller (ou pas) en connaissance de cause.` },
        { label: 'Les vérifications', items: ['Ai-je mes fondations (précaution, dettes, socle liquide diversifié) en place ?', 'Suis-je sûr de ne pas avoir besoin de cet argent pendant 5-10 ans ?', 'Est-ce que je juge le placement sur ses mérites, pas seulement sur l’impôt ?'] },
        { label: 'À retenir', items: ['Non-coté = illiquidité (argent bloqué des années) + risque de perte élevé', 'Ne jamais investir pour la seule réduction d’impôt', 'Une petite poche du patrimoine, jamais l’épargne de précaution'] },
      ] },
    ],
    questions: [
      { q: 'Le private equity consiste à investir dans…', opts: ['Des entreprises cotées en Bourse', 'Des entreprises non cotées, non revendables en un clic', 'Des livrets réglementés'], good: 1, explain: `On finance des sociétés non cotées : pas de "bouton vendre" comme en Bourse, d'où l'illiquidité.` },
      { q: 'Le risque le plus sous-estimé du non-coté est…', opts: ['L’illiquidité (argent bloqué plusieurs années)', 'Les frais de virement', 'Le taux du Livret A'], good: 0, explain: `L'argent est immobilisé souvent 5 à 10 ans, inaccessible en cas d'imprévu : un vrai risque, en plus du risque de perte.` },
      { q: 'Souscrire un FCPI/FIP uniquement "pour défiscaliser" est…', opts: ['Une stratégie gagnante', 'Une erreur : l’avantage fiscal ne doit pas masquer le risque', 'Sans aucun risque'], good: 1, explain: `Une réduction d'impôt accompagnée d'une perte en capital supérieure ne fait rien gagner : on juge d'abord le placement.` },
      { q: 'Dans un patrimoine, le non-coté doit représenter…', opts: ['La totalité', 'Une petite poche, une fois les fondations posées', 'L’épargne de précaution'], good: 1, explain: `Illiquide et risqué, il se réserve à une part limitée, tout en haut de la pyramide, jamais le socle de sécurité.` },
      { q: 'Une entreprise non cotée financée peut…', opts: ['Ne jamais faire perdre d’argent', 'Échouer, avec une perte potentiellement totale sur la ligne', 'Garantir le capital'], good: 1, explain: `Le non-coté cumule illiquidité et risque élevé : la perte peut être totale sur une ligne donnée.` },
    ],
  },

  '9.4': {
    title: 'Levier et gestion du risque',
    goal: `À la fin, tu comprendras ce qu'est l'effet de levier (dont le SRD et la vente à découvert), et surtout les principes de gestion du risque qui distinguent les pros des joueurs.`,
    badge: 'Discipline de pro',
    pages: [
      { tag: 'PAGE 1 · L’EFFET DE LEVIER', title: 'Amplifier, dans les deux sens', blocks: [
        { label: 'Le principe', text: `Le levier consiste à investir avec de l'argent emprunté (ou une exposition supérieure à sa mise) pour amplifier les résultats. Avec un levier x5, une hausse de 10 % devient +50 %… mais une baisse de 10 % devient −50 %.` },
        { label: 'La symétrie impitoyable', text: `Le levier ne rend pas plus intelligent : il multiplie exactement ce qui arrive, gains comme pertes. Ce qui rend riche vite peut ruiner encore plus vite. La plupart des explosions de comptes viennent de là.` },
        { label: 'Le SRD', text: `Le SRD (Service de Règlement Différé) permet, en Bourse, d'acheter avec un effet de levier et de différer le paiement. C'est un outil à levier : puissant, mais qui expose à des pertes supérieures à la mise si le marché tourne mal.` },
      ] },
      { tag: 'PAGE 2 · LA VENTE À DÉCOUVERT', title: 'Parier sur la baisse', blocks: [
        { label: 'Le principe', text: `Vendre à découvert ("short"), c'est parier sur la baisse d'un actif : on vend un titre qu'on ne possède pas (emprunté) pour le racheter moins cher plus tard. Si le prix baisse, on gagne la différence.` },
        { label: 'Le risque asymétrique', text: `Danger particulier : une action ne peut pas descendre sous zéro (perte limitée à l'achat), mais elle peut monter sans limite. Sur un short, la perte est donc théoriquement illimitée. C'est un risque d'une nature redoutable.` },
        { label: 'Pas pour débuter', text: `La vente à découvert, souvent combinée au levier, est une opération d'acteurs avertis. Pour un particulier qui apprend, elle cumule complexité, coûts et un profil de risque très défavorable. À connaître, pas à pratiquer sans expertise.` },
      ] },
      { tag: 'PAGE 3 · LA GESTION DU RISQUE', title: 'Ce qui sépare les pros des joueurs', blocks: [
        { label: 'Le "position sizing"', text: `Les pros ne se demandent pas d'abord "combien je peux gagner ?" mais "combien je peux perdre sans que ça me détruise ?". Ils dimensionnent chaque position pour qu'une erreur reste absorbable. La survie passe avant le gain.` },
        { label: 'Ne jamais risquer gros sur un coup', text: `Une règle répandue : ne pas exposer plus qu'une petite fraction de son capital sur une seule opération. Ainsi, même une série de pertes ne met pas hors-jeu. Le débutant, lui, mise gros "pour se refaire" — et disparaît.` },
        { label: 'Accepter d’avoir tort', text: `Les pros coupent leurs pertes vite et sans ego ; les amateurs s'accrochent en espérant "que ça revienne". Savoir accepter une petite perte pour éviter une grande est le cœur du métier. La discipline bat l'orgueil.` },
      ] },
      { tag: 'PAGE 4 · LA VRAIE LEÇON', title: 'Le risque zéro n’existe pas, mais…', blocks: [
        { label: 'Gérer, pas fuir', text: `Investir, c'est accepter du risque : le supprimer totalement est impossible (même ne rien faire expose à l'inflation). L'enjeu n'est pas de fuir le risque, mais de le comprendre, le mesurer et le dimensionner.` },
        { label: 'Le levier n’est pas un raccourci', text: `La grande tentation du débutant est de voir dans le levier un moyen d'aller plus vite avec peu. C'est l'inverse : le levier est ce qui transforme le plus sûrement une erreur normale en catastrophe. La lenteur est une alliée.` },
        { label: 'Le vrai "niveau expert"', text: `Paradoxe final : le vrai niveau expert n'est pas d'utiliser les produits les plus compliqués, mais de savoir lesquels éviter, et de rester discipliné avec des principes simples. La sophistication, c'est la maîtrise du risque, pas la complexité.` },
      ] },
      { tag: 'PAGE 5 · LE RÉFLEXE KAPI', title: 'La survie d’abord', blocks: [
        { label: 'Pourquoi ce module clôt le parcours', text: `Après avoir tout vu — du budget aux produits les plus complexes — la conclusion est apaisante : bien gérer son argent tient à quelques principes solides, pas à des outils exotiques. Le risque se gère, il ne se subit pas.` },
        { label: 'Les principes de gestion du risque', items: ['Le levier amplifie gains ET pertes ; il peut faire perdre plus que la mise', 'Ne jamais risquer gros sur une seule opération (position sizing)', 'Couper une petite perte vaut mieux que subir une grande', 'Le risque zéro n’existe pas : on le mesure et on le dimensionne'] },
        { label: 'Le mot de la fin', text: `Le vrai niveau expert, c'est la discipline : comprendre les produits risqués pour mieux savoir lesquels éviter, et bâtir patiemment sur des fondations simples. Bravo — tu as désormais la carte complète.` },
      ] },
    ],
    questions: [
      { q: 'Avec un effet de levier x5, une baisse de 10 % du sous-jacent devient…', opts: ['−2 %', '−50 %', '+50 %'], good: 1, explain: `Le levier amplifie dans les deux sens : x5 transforme une baisse de 10 % en une perte de 50 %.` },
      { q: 'La vente à découvert ("short") présente ce risque particulier :', opts: ['La perte est plafonnée', 'La perte est théoriquement illimitée (le cours peut monter sans limite)', 'Aucun risque'], good: 1, explain: `Une action peut monter sans plafond : sur un short, la perte potentielle est donc théoriquement illimitée.` },
      { q: 'Le "position sizing" (dimensionnement) consiste à…', opts: ['Miser le maximum sur chaque coup', 'Limiter ce qu’on risque sur une opération pour rester dans le jeu', 'Ignorer le risque'], good: 1, explain: `Les pros dimensionnent chaque position pour qu'une erreur reste absorbable : la survie passe avant le gain.` },
      { q: 'Face à une perte, la discipline du pro est de…', opts: ['S’accrocher en espérant que ça revienne', 'Couper une petite perte pour éviter une grande', 'Doubler la mise'], good: 1, explain: `Couper vite et sans ego évite qu'une petite perte devienne une grande : la discipline bat l'orgueil.` },
      { q: 'Le vrai "niveau expert" en investissement, c’est surtout…', opts: ['Utiliser les produits les plus compliqués', 'Savoir lesquels éviter et rester discipliné sur des principes simples', 'Prendre le maximum de levier'], good: 1, explain: `La sophistication, c'est la maîtrise du risque, pas la complexité : bâtir sur des fondations simples et rester discipliné.` },
    ],
  },
}
