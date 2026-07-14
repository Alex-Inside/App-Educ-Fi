// Contenu long du module 2 « Épargner » — 5 pages × 3-4 blocs + quiz de 5 Q.
// Les « intérêts composés » ont été déplacés vers le module 5 (Investir).
// Sous-modules : 2.1 précaution · 2.2 livrets · 2.3 projet.

export const MODULE2_LESSONS = {
  '2.1': {
    title: 'L’épargne de précaution : ton matelas de sécurité',
    goal: `À la fin, tu sauras combien mettre de côté pour les imprévus, où placer cet argent, et comment constituer ton matelas sans te priver.`,
    badge: 'Matelas posé',
    pages: [
      { tag: 'PAGE 1 · POURQUOI', title: 'Le coussin qui t’évite le découvert', blocks: [
        { label: 'L\'idée', text: `L'épargne de précaution, c'est de l'argent disponible immédiatement pour absorber les imprévus : panne de voiture, mois sans contrat, dentiste, remplacement d'un téléphone. Sans elle, le moindre coup dur se paie à crédit ou en découvert.` },
        { label: 'Ce n\'est pas de l\'investissement', text: `Ce matelas n'a pas vocation à rapporter : il a vocation à être là, tout de suite, sans risque. Sa mission, c'est la tranquillité — pas le rendement.` },
        { label: 'La règle d\'or', text: `On constitue son épargne de précaution AVANT de penser à investir. C'est la première brique : elle te permet d'investir ensuite l'esprit libre, sans devoir tout revendre au premier pépin.` },
      ] },
      { tag: 'PAGE 2 · COMBIEN', title: '2 à 3 mois de dépenses essentielles', blocks: [
        { label: 'Le bon montant', text: `Vise 2 à 3 mois de tes dépenses ESSENTIELLES (loyer, courses, transport, factures) — pas de ton salaire. Pour environ 1 200 € de dépenses vitales par mois, ton objectif est de 2 400 à 3 600 €.` },
        { label: 'Adapte à ta situation', text: `Revenus stables (CDI) : 2 mois peuvent suffire. Revenus irréguliers (freelance, intérim, CDD) : vise plutôt 3 à 6 mois, car les creux sont plus fréquents.` },
        { label: 'Ni trop peu, ni trop', text: `Trop peu : le premier imprévu te fait plonger. Trop : au-delà de 3-6 mois, l'argent dort et perd de la valeur avec l'inflation — ce surplus a sa place ailleurs (projets, investissement).` },
      ] },
      { tag: 'PAGE 3 · OÙ LE METTRE', title: 'Disponible, sans risque, défiscalisé', blocks: [
        { label: 'Le bon support', text: `Un livret réglementé : Livret A ou LDDS. Trois qualités indispensables réunies : argent disponible en 24-48 h, capital garanti (zéro risque de perte), et intérêts non imposés.` },
        { label: 'Surtout pas ici', text: `Pas sur un compte courant (ça ne rapporte rien et c'est trop tentant à dépenser), et surtout pas en bourse ou en crypto : ton matelas ne doit jamais pouvoir perdre de la valeur le jour où tu en as besoin.` },
        { label: 'Séparé de tout le reste', text: `Idéalement sur un livret dédié, distinct de ton compte courant et de ton épargne « projets ». Loin des yeux, loin de la carte : c'est ce qui l'empêche de fondre discrètement.` },
      ] },
      { tag: 'PAGE 4 · COMMENT LE CONSTITUER', title: 'Palier par palier, sans y penser', blocks: [
        { label: 'Commence par un palier accessible', text: `Ne vise pas 3 000 € tout de suite. Premier palier : 500 € (il couvre déjà la majorité des petits imprévus). Puis 1 mois de dépenses, puis 2, puis 3. Chaque palier atteint est une victoire.` },
        { label: 'Automatise', text: `Un virement automatique le lendemain de la paie (revois la leçon « piloter au quotidien »). Même 30 € par mois : l'important est la régularité, pas le montant.` },
        { label: 'Reconstitue après usage', text: `Tu as pioché dedans pour une vraie urgence ? Parfait, il a servi. Relance simplement les virements pour le reconstituer — sans culpabiliser, c'était son rôle.` },
      ] },
      { tag: 'PAGE 5 · LE RÉFLEXE KAPI', title: 'Pose ton matelas ce mois-ci', blocks: [
        { label: 'Pourquoi maintenant', text: `Tant que le matelas n'est pas là, chaque imprévu te fragilise. Une fois posé, tu changes de catégorie : les coups durs deviennent des désagréments, pas des catastrophes.` },
        { label: 'Cette semaine', items: ['Calcule tes dépenses essentielles d\'un mois, multiplie par 2 ou 3 : c\'est ton objectif', 'Ouvre ou identifie un livret A/LDDS dédié, séparé de ton compte courant', 'Programme un virement automatique, même modeste, le lendemain de ta paie'] },
        { label: 'Chaque mois', items: ['Vérifie que le palier progresse ; augmente le virement dès que tu peux', 'Ne touche au matelas que pour un vrai imprévu — pas pour une envie', 'Une fois les 2-3 mois atteints, redirige les virements vers tes projets ou l\'investissement'] },
      ] },
    ],
    questions: [
      { q: 'L\'épargne de précaution sert à…', opts: ['Faire fructifier ton argent en bourse', 'Absorber les imprévus sans crédit ni découvert', 'Préparer ta retraite dans 40 ans'], good: 1, explain: `C'est un coussin disponible et sans risque pour les coups durs. Le rendement n'est pas sa mission — la disponibilité, si.` },
      { q: 'Le bon montant, c\'est environ…', opts: ['2 à 3 mois de dépenses essentielles', '2 à 3 mois de salaire brut', 'Un an de loyer'], good: 0, explain: `On calcule sur les dépenses vitales (loyer, courses, transport, factures), pas sur le salaire. 2-3 mois suffisent pour la plupart des situations.` },
      { q: 'Où placer ce matelas ?', opts: ['En bourse pour qu\'il rapporte', 'Sur un livret A/LDDS, disponible et sans risque', 'En crypto, en petite partie'], good: 1, explain: `Il doit être disponible tout de suite et ne jamais pouvoir perdre de valeur. Le livret réglementé coche toutes les cases.` },
      { q: 'Pour un freelance aux revenus irréguliers, on vise plutôt…', opts: ['Moins de matelas, 1 mois suffit', '3 à 6 mois de dépenses', 'Aucun matelas, il investit tout'], good: 1, explain: `Revenus irréguliers = creux plus fréquents : un matelas plus épais (3 à 6 mois) protège des trous d'air.` },
      { q: 'Tu débutes avec un petit budget. La meilleure approche ?', opts: ['Attendre de pouvoir mettre 3 000 € d\'un coup', 'Constituer le matelas palier par palier avec des virements automatiques', 'Renoncer, c\'est réservé aux hauts salaires'], good: 1, explain: `Palier par palier (500 €, puis 1 mois, puis 2…) avec un virement régulier : c'est l'habitude qui compte, pas le montant de départ.` },
    ],
  },

  '2.2': {
    title: 'Les livrets réglementés : Livret A, LDDS, LEP',
    goal: `À la fin, tu sauras à quoi servent les livrets réglementés, leurs plafonds et leur fiscalité, et lequel ouvrir en priorité selon ta situation.`,
    badge: 'Livrets en poche',
    pages: [
      { tag: 'PAGE 1 · LE PRINCIPE', title: 'Simples, sûrs, défiscalisés', blocks: [
        { label: 'Ce qu\'ils ont en commun', text: `Les livrets réglementés (Livret A, LDDS, LEP) ont trois qualités fixées par l'État : capital garanti, argent disponible à tout moment, et intérêts totalement défiscalisés (ni impôt ni prélèvements sociaux).` },
        { label: 'Leur rôle', text: `Ce sont les outils de l'épargne de sécurité et de court terme : le matelas de précaution, une cagnotte pour un projet proche. Pas pour faire fructifier à long terme — leur taux reste modeste.` },
        { label: 'Un par personne', text: `Tu ne peux détenir qu'un seul Livret A, un seul LDDS, un seul LEP. Détenir un même livret dans deux banques est interdit — la Banque de France le vérifie.` },
      ] },
      { tag: 'PAGE 2 · LIVRET A & LDDS', title: 'Le duo de base', blocks: [
        { label: 'Le Livret A', text: `Le plus connu : plafond de 22 950 €, ouvrable dès la naissance, sans condition. Son taux est fixé par l'État et révisé régulièrement. C'est le réceptacle naturel de ton épargne de précaution.` },
        { label: 'Le LDDS', text: `Le Livret de Développement Durable et Solidaire : même taux que le Livret A, plafond de 12 000 €, réservé aux majeurs fiscalement domiciliés en France. Pratique comme second livret quand le Livret A est plein ou pour séparer tes cagnottes.` },
        { label: 'Bon à savoir', text: `Les intérêts sont calculés par quinzaine : un versement juste avant le 1er ou le 16 du mois commence à produire des intérêts plus tôt. Un petit réflexe de timing, sans importance sur de petites sommes.` },
      ] },
      { tag: 'PAGE 3 · LE LEP', title: 'Le mieux payé — vérifie si tu y as droit', blocks: [
        { label: 'Le champion caché', text: `Le Livret d'Épargne Populaire (LEP) est le livret le mieux rémunéré : son taux est nettement supérieur à celui du Livret A. Plafond de 10 000 €, même sécurité, même disponibilité, même défiscalisation.` },
        { label: 'Sous condition de revenus', text: `Il est réservé aux revenus modestes : ton revenu fiscal de référence ne doit pas dépasser un plafond (révisé chaque année). Une grande partie des Français éligibles n'en ont pas — souvent par simple méconnaissance.` },
        { label: 'La priorité absolue', text: `Si tu y as droit, le LEP passe avant le Livret A pour ton épargne de précaution : même sécurité, meilleur rendement. Vérifie ton éligibilité dans ton espace impots.gouv.fr ou demande à ta banque.` },
      ] },
      { tag: 'PAGE 4 · LES LIMITES', title: 'À quoi ils ne servent pas', blocks: [
        { label: 'Un taux modeste', text: `Les livrets protègent ton capital, mais leur taux dépasse rarement l'inflation de beaucoup. Sur 20 ans, laisser toute son épargne sur un livret, c'est perdre lentement du pouvoir d'achat.` },
        { label: 'La bonne dose', text: `Garde sur tes livrets ton épargne de précaution et tes projets à moins de 5 ans. Au-delà, l'argent dont tu n'auras pas besoin avant longtemps a sa place ailleurs (assurance-vie, PEA — modules suivants).` },
        { label: 'Le piège du « tout livret »', text: `Beaucoup laissent 15 000 € dormir sur un Livret A « pour être tranquilles ». La tranquillité au-delà du matelas a un coût invisible : le rendement qu'on ne va pas chercher.` },
      ] },
      { tag: 'PAGE 5 · LE RÉFLEXE KAPI', title: 'Mets tes livrets au bon endroit', blocks: [
        { label: 'La hiérarchie simple', text: `1) LEP si tu y as droit, 2) Livret A, 3) LDDS en complément. Tu remplis dans cet ordre pour ton épargne de sécurité et tes projets courts.` },
        { label: 'Ce mois-ci', items: ['Vérifie ton éligibilité au LEP (espace impots.gouv.fr ou ta banque)', 'Loge ton épargne de précaution sur le livret le mieux payé auquel tu as droit', 'N\'ouvre pas dix livrets : un pour la précaution, un pour les projets suffit'] },
        { label: 'À surveiller', items: ['Le taux du Livret A / LEP change : un coup d\'œil à chaque révision', 'Livret plein ? Fais déborder sur le LDDS, puis pense plus long terme', 'Au-delà de 5 ans d\'horizon, ne laisse pas tout dormir sur un livret'] },
      ] },
    ],
    questions: [
      { q: 'Le point commun des livrets réglementés, c\'est…', opts: ['Un rendement élevé', 'Capital garanti, argent disponible, intérêts défiscalisés', 'Un blocage sur 8 ans'], good: 1, explain: `Sécurité, disponibilité et zéro impôt sur les intérêts : c'est ce qui en fait l'outil idéal de l'épargne de précaution.` },
      { q: 'Le livret le mieux rémunéré (sous conditions de revenus) est…', opts: ['Le Livret A', 'Le LDDS', 'Le LEP'], good: 2, explain: `Le LEP offre le meilleur taux. Si ton revenu fiscal de référence est sous le plafond, il passe avant le Livret A.` },
      { q: 'Peux-tu avoir deux Livrets A dans deux banques différentes ?', opts: ['Oui, sans limite', 'Non, un seul par personne', 'Oui, jusqu\'à trois'], good: 1, explain: `Un seul Livret A par personne, tous établissements confondus. La Banque de France contrôle les doublons.` },
      { q: 'Pour de l\'argent dont tu n\'auras pas besoin avant 15 ans…', opts: ['Le Livret A est le meilleur choix', 'Un livret n\'est pas idéal : son taux suit à peine l\'inflation', 'Il faut tout garder en espèces'], good: 1, explain: `Les livrets protègent mais rapportent peu. Sur le très long terme, l'argent a sa place dans des enveloppes plus dynamiques (modules Investir / Se projeter).` },
      { q: 'Dans quel ordre remplir tes livrets d\'épargne de sécurité ?', opts: ['Livret A, puis LEP, puis LDDS', 'LEP (si éligible), puis Livret A, puis LDDS', 'LDDS d\'abord, toujours'], good: 1, explain: `Le LEP d'abord (meilleur taux) si tu y as droit, puis le Livret A, puis le LDDS en complément.` },
    ],
  },

  '2.3': {
    title: 'Épargner pour un projet',
    goal: `À la fin, tu sauras transformer un projet en plan d'épargne daté et automatique — et éviter de le financer à crédit.`,
    badge: 'Projet financé',
    pages: [
      { tag: 'PAGE 1 · UN OBJECTIF DATÉ', title: 'Du flou au compte à rebours', blocks: [
        { label: 'Pourquoi dater et chiffrer', text: `Épargner « pour plus tard », c'est flou, donc fragile. Épargner pour un projet daté et chiffré, c'est motivant : le permis (~1 300 à 1 800 €), un voyage (800 €), le dépôt de garantie d'un appart (souvent 400 à 700 €).` },
        { label: 'Un objectif = un montant + une date', text: `« Je veux 1 500 € pour le permis dans 15 mois. » Ces deux chiffres suffisent à transformer une envie vague en plan concret.` },
        { label: 'Séparé de la précaution', text: `L'épargne projet ne se mélange pas avec ton matelas de sécurité : ce sont deux poches distinctes, avec deux objectifs différents. Sinon, le premier imprévu mange ton permis.` },
      ] },
      { tag: 'PAGE 2 · LA MÉTHODE', title: 'Une simple division', blocks: [
        { label: 'Le calcul', text: `Montant cible ÷ nombre de mois = ton versement mensuel. 1 500 € pour le permis dans 15 mois → 100 €/mois. C'est tout.` },
        { label: 'Teste la faisabilité', text: `Si le versement dépasse ce que tu peux mettre, deux leviers : allonger le délai, ou revoir le montant. Mieux vaut un objectif tenu qu'un objectif abandonné — jamais un crédit conso pour combler.` },
        { label: 'Le simulateur', text: `L'app a un simulateur « Mon projet » : entre le montant et le délai, il te donne l'effort mensuel et un verdict honnête selon ta capacité d'épargne.` },
      ] },
      { tag: 'PAGE 3 · LE BON SUPPORT', title: 'Où loger ta cagnotte projet', blocks: [
        { label: 'Projet à moins de 5 ans', text: `Un livret réglementé (Livret A, LDDS) : disponible le jour J, sans risque de perte. Pour un projet daté et proche, on ne prend AUCUN risque sur le capital.` },
        { label: 'Le cas du PEL', text: `Le plan épargne logement garantit son taux à l'ouverture, ce qui rassure pour un achat immobilier à moyen terme. Mais l'argent y est peu disponible (un retrait ferme le plan) et les intérêts des plans récents sont imposés (flat tax 30 %).` },
        { label: 'Quand le PEL vaut le coup', text: `Uniquement pour un vrai projet immobilier à horizon de quelques années, et si son taux est compétitif au moment de l'ouverture. Sinon, un simple livret fait mieux le travail.` },
      ] },
      { tag: 'PAGE 4 · RESTER MOTIVÉ', title: 'Le secret, c’est l’automatisation', blocks: [
        { label: 'Programme le virement', text: `Un virement automatique dédié, le lendemain de la paie, vers un livret séparé. L'épargne projet se fait alors toute seule, sans arbitrage mensuel.` },
        { label: 'Nomme tes cagnottes', text: `Sur ton appli bancaire, nomme-les « Permis 🚗 », « Voyage ✈️ ». Voir la barre de progression se remplir motive plus que n'importe quelle bonne résolution.` },
        { label: 'Plusieurs projets ?', text: `Un virement par projet, chacun avec son montant. Tu vois exactement où tu en es sur chacun, sans tout mélanger.` },
      ] },
      { tag: 'PAGE 5 · LE RÉFLEXE KAPI', title: 'Lance ton premier projet ce soir', blocks: [
        { label: 'Pourquoi maintenant', text: `Le projet daté que tu mets en place aujourd'hui, c'est le crédit conso que tu n'auras pas à prendre demain. C'est de l'argent économisé en intérêts, et une pression en moins.` },
        { label: 'Ce soir — 10 minutes', items: ['Choisis UN projet, fixe son montant et sa date', 'Divise : montant ÷ mois = ton versement (ou passe-le au simulateur « Mon projet »)', 'Programme un virement automatique dédié vers un livret séparé'] },
        { label: 'Chaque mois', items: ['Regarde la cagnotte progresser — savoure la barre qui se remplit', 'Ajuste le délai plutôt que de piocher dans ton épargne de précaution', 'Projet atteint ? Redirige le virement vers le suivant, ou vers l\'investissement'] },
      ] },
    ],
    questions: [
      { q: 'Tu veux 1 200 € pour un voyage dans 12 mois. La meilleure méthode ?', opts: ['Mettre de côté ce qui reste en fin de mois', 'Programmer un virement automatique de 100 €/mois vers une cagnotte dédiée', 'Payer le voyage en 4 fois le moment venu'], good: 1, explain: `1 200 ÷ 12 = 100 €/mois. Un virement dédié rend l'effort régulier et garanti ; « ce qui reste » échoue presque toujours.` },
      { q: 'L\'épargne projet et l\'épargne de précaution doivent être…', opts: ['Sur le même livret pour simplifier', 'Dans deux poches séparées', 'En bourse toutes les deux'], good: 1, explain: `Deux objectifs différents = deux poches. Sinon le premier imprévu vient piocher dans ton projet.` },
      { q: 'Pour un projet daté à moins de 5 ans, tu places sur…', opts: ['Un livret réglementé, sans risque', 'Un ETF en bourse', 'Des cryptomonnaies'], good: 0, explain: `Argent nécessaire à une date précise = zéro risque sur le capital. Un livret disponible fait le travail.` },
      { q: 'Le PEL est pertinent surtout…', opts: ['Pour ranger son épargne de précaution', 'Pour un vrai projet immobilier à moyen terme, si son taux est compétitif', 'Pour payer ses courses'], good: 1, explain: `Il fige son taux à l'ouverture, utile pour préparer un achat immobilier — mais argent peu disponible et intérêts imposés.` },
      { q: 'Quel est le meilleur allié pour tenir un objectif d\'épargne ?', opts: ['La motivation seule', 'Le virement automatique dédié', 'Le paiement fractionné'], good: 1, explain: `L'automatisation retire la décision mensuelle : l'épargne part avant que tu puisses la dépenser. Nommer la cagnotte entretient la motivation.` },
    ],
  },
}
