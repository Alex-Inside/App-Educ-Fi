// Contenu long du module 1 — format « Kapi » : 5 pages × 3-4 blocs + quiz de
// 5 questions avec explications. Rédigé et validé dans le design (Claude Design).
// Mappé sur les sous-modules du curriculum : 1.1, 1.2, 1.3, 1.5, 1.6.
// (1.4 « Piloter au quotidien » garde pour l'instant le format court.)
//
// Un bloc a soit `text` (paragraphe), soit `items` (liste à puces).

export const MODULE1_LESSONS = {
  '1.1': {
    title: 'Décoder ta fiche de paie',
    goal: 'À la fin, tu sauras lire ton brut, ton net, ton net imposable et le montant net social — et repérer une erreur de paie en 2 minutes.',
    badge: 'Fiche de paie décodée',
    pages: [
      { tag: 'PAGE 1 · BRUT VS NET', title: 'Pourquoi 2 000 € ne font pas 2 000 €', blocks: [
        { label: 'Le principe', text: `Ton salaire brut, c'est ce que ton employeur te verse avant les cotisations sociales. Ton salaire net, c'est ce qui arrive vraiment sur ton compte.` },
        { label: 'Cadre ou non-cadre ?', text: `Ton statut change le calcul dès la première ligne. Un non-cadre cotise environ 22 % de son brut ; un cadre environ 25 %, car il paie une retraite complémentaire plus élevée (tranche 2 de l'Agirc-Arrco) et la cotisation APEC. Pour 2 000 € brut : ≈ 1 560 € net en non-cadre, ≈ 1 500 € en cadre.` },
        { label: 'À retenir', text: `Une offre d'emploi annonce presque toujours du brut. Réflexe : brut × 0,78 ≈ net si tu es non-cadre, brut × 0,75 si tu es cadre.` },
      ] },
      { tag: 'PAGE 2 · LES COTISATIONS', title: 'Où partent les 440 € manquants ?', blocks: [
        { label: 'Ce qu\'elles financent', text: `Tes cotisations salariales paient ta protection : assurance maladie, retraite de base (Sécurité sociale) et complémentaire (Agirc-Arrco), et assurance chômage.` },
        { label: 'CSG-CRDS, ça veut dire quoi ?', text: `Contribution Sociale Généralisée et Contribution au Remboursement de la Dette Sociale. Ce sont deux impôts prélevés directement sur ton salaire : 9,2 % de CSG + 0,5 % de CRDS, calculés sur 98,25 % du brut. La CSG finance la protection sociale au sens large (santé, famille, retraite) ; la CRDS rembourse la dette de la Sécurité sociale.` },
        { label: 'Et les cotisations patronales ?', text: `Elles n'apparaissent pas dans ton net mais sur ta fiche : ton employeur verse EN PLUS de ton brut 25 à 42 % de cotisations patronales. Pour 2 000 € brut, ton travail lui coûte réellement 2 600 à 2 840 € : c'est le « coût total employeur », parfois appelé super brut.` },
      ] },
      { tag: 'PAGE 3 · LES 3 LIGNES CLÉS', title: 'Les seules lignes à vraiment repérer', blocks: [
        { label: 'Net à payer avant impôt', text: `Ce que tu toucherais sans le prélèvement à la source. C'est ta vraie base pour faire ton budget.` },
        { label: 'Net imposable — et le piège de la CSG', text: `C'est la base de calcul de ton impôt, et elle est PLUS élevée que ton net à payer. Sur les 9,2 % de CSG, seuls 6,8 % sont déductibles du revenu imposable. Les 2,4 % restants et les 0,5 % de CRDS sont considérés par le fisc comme du revenu « perçu »… alors qu'ils ne passent jamais sur ton compte. Tu paies donc de l'impôt sur de l'argent jamais touché.` },
        { label: 'Prélèvement à la source', text: `L'impôt retenu chaque mois selon ton taux personnalisé, appliqué au net imposable. Exemple : net à payer 1 560 €, taux 3,8 % → 59 € prélevés → 1 501 € versés.` },
      ] },
      { tag: 'PAGE 4 · EN BAS DE LA FICHE', title: 'Quatre lignes qui peuvent te rapporter gros', blocks: [
        { label: 'Montant net social', text: `Créée en 2023, cette ligne est LA référence pour la CAF : prime d'activité, RSA… Déclare CE montant, pas ton net à payer, sinon tes droits sont mal calculés — parfois de plusieurs dizaines d'euros par mois.` },
        { label: 'Cumul net imposable', text: `Le total depuis janvier. En avril, compare-le à ta déclaration pré-remplie : une prime comptée deux fois ou un mois oublié, et c'est toi qui paies la différence.` },
        { label: 'Congés payés & RTT restants', text: `Le compteur en bas de fiche fait foi. Des congés non posés avant la date limite peuvent être perdus : vérifie-le chaque trimestre, pas la veille.` },
        { label: 'Ta convention collective', text: `Obligatoirement mentionnée sur la fiche. C'est elle qui fixe tes minimas de salaire, primes d'ancienneté, 13e mois éventuel et préavis. Beaucoup passent à côté de droits faute de l'avoir lue.` },
      ] },
      { tag: 'PAGE 5 · LE RÉFLEXE KAPI', title: 'Tes deux rituels fiche de paie', blocks: [
        { label: 'Pourquoi c\'est important', text: `Les erreurs de paie sont fréquentes : heures sup oubliées, prime manquante, taux d'impôt pas à jour. Personne ne vérifiera à ta place.` },
        { label: 'Chaque mois — 2 minutes', items: ['Compare le net à payer au virement reçu sur ton compte', 'Vérifie heures supplémentaires, primes et remboursement transport', 'Jette un œil au taux de prélèvement à la source appliqué'] },
        { label: 'Chaque année — 15 minutes', items: ['En avril, compare le cumul net imposable à ta déclaration pré-remplie', 'Archive tes 12 fiches en numérique — elles prouvent tes trimestres retraite, garde-les à vie', 'Situation changée (mariage, enfant, baisse de revenus) ? Mets ton taux à jour sur impots.gouv.fr'] },
      ] },
    ],
    questions: [
      { q: 'Ton salaire net, c\'est…', opts: ['Le brut moins les impôts', 'Le brut moins les cotisations salariales', 'Le brut moins la mutuelle'], good: 1, explain: `Net = brut − cotisations salariales (maladie, retraite, chômage, CSG). L'impôt arrive ensuite, via le prélèvement à la source.` },
      { q: 'Pour 2 000 € brut dans le privé, ton net avant impôt est d\'environ…', opts: ['1 900 €', '1 200 €', '1 560 €'], good: 2, explain: `Les cotisations salariales pèsent environ 22 % du brut : 2 000 × 0,78 ≈ 1 560 €.` },
      { q: 'Le prélèvement à la source est calculé sur…', opts: ['Le net imposable', 'Le net à payer', 'Le salaire brut'], good: 0, explain: `L'impôt se calcule sur le net imposable, légèrement supérieur au net à payer (CSG partiellement non déductible).` },
      { q: 'Le « montant net social » sert à…', opts: ['Payer ta mutuelle', 'Calculer tes droits aux aides sociales', 'Calculer tes congés payés'], good: 1, explain: `C'est la référence officielle pour la prime d'activité, le RSA et les autres aides. Ne donne pas ton net à payer à la place !` },
      { q: 'Combien de temps garder tes fiches de paie ?', opts: ['1 an', '5 ans', 'Toute ta vie'], good: 2, explain: `Elles prouvent tes trimestres cotisés pour la retraite. Un scan bien rangé aujourd'hui = des mois de galère évités à 62 ans.` },
    ],
  },

  '1.2': {
    title: 'La règle du 50/30/20',
    goal: `À la fin, tu sauras répartir ton salaire en trois enveloppes claires, l'adapter à TA situation, et automatiser ton épargne sans y penser.`,
    badge: 'Budget réparti',
    pages: [
      { tag: 'PAGE 1 · LE PRINCIPE', title: 'Trois enveloppes, zéro tableur', blocks: [
        { label: 'L\'idée', text: `Popularisée par la sénatrice américaine Elizabeth Warren, la règle 50/30/20 découpe ton revenu NET en trois enveloppes : 50 % pour les besoins, 30 % pour les envies, 20 % pour l'épargne.` },
        { label: 'Pourquoi ça marche', text: `Pas besoin de noter chaque café. Tu ne suis que trois chiffres par mois — c'est la méthode la plus simple qui fonctionne vraiment sur la durée.` },
        { label: 'La base de calcul', text: `On part du net à payer qui arrive sur ton compte (après impôt). Si tu touches des aides régulières (APL, prime d'activité), ajoute-les : c'est ton revenu réel.` },
      ] },
      { tag: 'PAGE 2 · QUE MET-ON OÙ ?', title: 'Besoins, envies, épargne : le tri', blocks: [
        { label: '50 % — les besoins', text: `Tout ce que tu ne peux PAS couper sans conséquence : loyer et charges, courses, transport pour travailler, factures, assurances, mutuelle, remboursements minimums de crédit.` },
        { label: '30 % — les envies', text: `Ce qui rend la vie agréable : restos, sorties, streaming, shopping, vacances, sport. Le test : « si je le supprime, ma vie continue-t-elle normalement ? » Si oui, c'est une envie.` },
        { label: '20 % — l\'épargne', text: `D'abord ton épargne de précaution, puis tes projets, puis le remboursement anticipé de dettes coûteuses. Ce n'est pas « ce qui reste » : c'est une facture que tu te paies à toi-même.` },
      ] },
      { tag: 'PAGE 3 · EN CHIFFRES', title: 'Sur ta paie, ça donne quoi ?', blocks: [
        { label: 'Salaire de 1 500 € net', text: `750 € de besoins, 450 € d'envies, 300 € d'épargne. En un an : 3 600 € de côté sans effort particulier — de quoi couvrir un vrai imprévu.` },
        { label: 'Budget étudiant de 800 €', text: `La règle s'applique aussi : 400 € de besoins, 240 € d'envies, 160 € d'épargne. Même 50 € par mois créent l'habitude — et l'habitude vaut plus que le montant.` },
        { label: 'Le piège', text: `Ne triche pas sur le tri : ranger l'abonnement salle de sport ou la voiture « plaisir » dans les besoins fausse tout le calcul. Sois honnête, personne ne regarde.` },
      ] },
      { tag: 'PAGE 4 · ADAPTER LA RÈGLE', title: 'Et si mon loyer mange tout ?', blocks: [
        { label: 'Grandes villes', text: `À Paris ou Lyon, le loyer seul peut dépasser 40 % du revenu. Passe en 60/20/20 ou même 70/15/15 : le ratio exact importe peu, ce qui compte c'est de garder une part d'épargne NON négociable.` },
        { label: 'Se payer en premier', text: `Le vrai secret n'est pas le pourcentage, c'est l'ordre : l'épargne part LE JOUR de la paie, par virement automatique. Ce qui reste devient ton vrai budget — impossible d'« oublier » d'épargner.` },
        { label: 'Revenus irréguliers', text: `Freelance, intérim, pourboires ? Applique les pourcentages à chaque rentrée d'argent plutôt qu'au mois. Les bons mois épargnent plus, automatiquement.` },
      ] },
      { tag: 'PAGE 5 · LE RÉFLEXE KAPI', title: 'Mets ta règle en place ce soir', blocks: [
        { label: 'Pourquoi maintenant', text: `Un budget qu'on « fera plus tard » ne se fait jamais. La mise en place prend 20 minutes, une seule fois.` },
        { label: 'Ce soir — 20 minutes', items: ['Calcule tes trois enveloppes sur ton net réel (salaire + aides)', 'Vérifie que tes dépenses contraintes tiennent dans l\'enveloppe besoins', 'Programme un virement automatique vers ton livret le lendemain de ta paie'] },
        { label: 'Chaque fin de mois — 5 minutes', items: ['Compare chaque enveloppe au réel dépensé, sans culpabiliser', 'Ajuste les pourcentages si un poste déborde tous les mois', 'Augmente l\'épargne de 1 % à chaque augmentation de salaire'] },
      ] },
    ],
    questions: [
      { q: 'Dans la règle 50/30/20, les pourcentages s\'appliquent…', opts: ['Au salaire brut', 'Au revenu net réel (salaire + aides)', 'Au salaire net imposable'], good: 1, explain: `On budgète l'argent qui arrive vraiment sur ton compte : net à payer + aides régulières comme les APL.` },
      { q: 'Ton abonnement streaming, c\'est…', opts: ['Un besoin (50 %)', 'Une envie (30 %)', 'De l\'épargne (20 %)'], good: 1, explain: `Test : ta vie continue normalement sans lui. C'est donc une envie — agréable, mais coupable en cas de coup dur.` },
      { q: '« Se payer en premier », ça veut dire…', opts: ['Épargner ce qui reste en fin de mois', 'Virer l\'épargne automatiquement le jour de la paie', 'Se faire un cadeau à chaque paie'], good: 1, explain: `L'épargne part en premier, automatiquement. Ce qui reste devient ton budget — l'inverse ne marche presque jamais.` },
      { q: 'Ton loyer parisien mange 45 % de ton revenu. Que fais-tu ?', opts: ['J\'abandonne la méthode', 'Je passe en 60/20/20 en gardant une épargne fixe', 'Je classe le loyer dans les envies'], good: 1, explain: `Le ratio s'adapte à ta réalité. L'essentiel : garder une part d'épargne non négociable, même réduite.` },
      { q: 'Avec 1 500 € net, l\'enveloppe épargne recommandée est de…', opts: ['300 €', '150 €', '450 €'], good: 0, explain: `20 % de 1 500 € = 300 €. Soit 3 600 € par an — ton futur matelas de sécurité.` },
    ],
  },

  '1.3': {
    title: 'Le découvert : l\'ami qui te coûte cher',
    goal: `À la fin, tu sauras ce que coûte vraiment un découvert, la différence entre autorisé et non autorisé, et comment sortir de la spirale.`,
    badge: 'Compte dans le vert',
    pages: [
      { tag: 'PAGE 1 · C\'EST QUOI, VRAIMENT ?', title: 'Le découvert est un crédit déguisé', blocks: [
        { label: 'La définition', text: `Être à découvert, c'est dépenser de l'argent que tu n'as pas : ta banque te le prête, sans que tu aies rien signé ce jour-là. Et comme tout prêt, il se paie.` },
        { label: 'Autorisé vs non autorisé', text: `Le découvert AUTORISÉ est une ligne négociée avec ta banque (ex. 300 €) avec un taux connu. Le NON autorisé, c'est tout dépassement au-delà — et là, les frais explosent.` },
        { label: 'Le savais-tu ?', text: `Un découvert utilisé plus de 90 jours consécutifs doit légalement être transformé en vrai crédit à la consommation par ta banque. Si tu en es là, c'est un signal d'alerte sérieux.` },
      ] },
      { tag: 'PAGE 2 · LE VRAI COÛT', title: 'Agios, commissions : l\'addition', blocks: [
        { label: 'Les agios', text: `Ce sont les intérêts du découvert : souvent 15 à 21 % par an, calculés au jour le jour. 300 € de découvert pendant 15 jours ≈ 2 € d'agios. Peu ? Attends la suite.` },
        { label: 'Les commissions d\'intervention', text: `Le vrai poison : environ 8 € par opération qui passe en dépassement, plafonnés à 80 €/mois. Cinq paiements carte en dépassement = 40 € de frais pour quelques euros de découvert.` },
        { label: 'Les frais d\'incident', text: `Prélèvement rejeté : jusqu'à 20 €. Chèque rejeté : jusqu'à 30-50 €, avec risque d'interdiction bancaire. Un mois difficile peut coûter plus de 100 € de frais purs.` },
      ] },
      { tag: 'PAGE 3 · L\'ENGRENAGE', title: 'Pourquoi on n\'en sort pas seul', blocks: [
        { label: 'La spirale', text: `Les frais du mois 1 creusent le découvert du mois 2, qui génère encore plus de frais. La paie ne fait que remonter à zéro… avant de replonger.` },
        { label: 'Le fichage', text: `Un chèque rejeté non régularisé t'inscrit au FCC (interdit bancaire, plus de chéquier). Des mensualités de crédit impayées mènent au FICP : quasi impossible d'emprunter pendant 5 ans.` },
        { label: 'Cas concret', text: `Léa, 1 400 € net, finit chaque mois à −150 €. Frais moyens : 25 €/mois, soit 300 €/an — l'équivalent d'un 13e mois de frais bancaires sur 4 ans.` },
      ] },
      { tag: 'PAGE 4 · REPRENDRE LA MAIN', title: 'Négocier et paramétrer', blocks: [
        { label: 'Négocie ta ligne', text: `Un découvert autorisé adapté (ex. 300-500 €) coûte dix fois moins cher que des dépassements répétés. Demande-le par écrit à ton conseiller : c'est gratuit et souvent accordé.` },
        { label: 'Aligne tes prélèvements', text: `Fais tomber loyer, crédits et factures juste APRÈS ta date de paie, pas avant. Un simple décalage de dates évite la majorité des découverts de fin de mois.` },
        { label: 'Active les alertes', text: `Toutes les applis bancaires proposent une alerte sous un seuil (ex. 100 €). C'est ton radar : gratuit, immédiat, efficace.` },
      ] },
      { tag: 'PAGE 5 · LE RÉFLEXE KAPI', title: 'Ton plan de sortie', blocks: [
        { label: 'Si tu es à découvert chronique', text: `L'objectif n'est pas de tout régler en un mois : c'est de remonter d'un cran chaque mois, en commençant par stopper les frais.` },
        { label: 'Cette semaine', items: ['Vérifie ta ligne de découvert autorisé et demande son ajustement si besoin', 'Décale tes prélèvements après ta date de paie', 'Active une alerte de solde bas sur ton appli'] },
        { label: 'Si c\'est déjà grave', items: ['Parle à ton conseiller AVANT l\'incident : un report vaut mieux qu\'un rejet', 'Demande l\'offre « clientèle fragile » : frais d\'incident plafonnés à 20 €/mois et 200 €/an', 'Les Points Conseil Budget (gratuits, partout en France) t\'aident à restructurer'] },
      ] },
    ],
    questions: [
      { q: 'Le découvert bancaire, c\'est…', opts: ['Un service gratuit de la banque', 'Un crédit qui se paie', 'Une avance sur salaire'], good: 1, explain: `C'est un prêt de ta banque, facturé en agios (15-21 %/an) et potentiellement en commissions d'intervention.` },
      { q: 'Les commissions d\'intervention, c\'est environ…', opts: ['8 € par opération en dépassement, plafonné 80 €/mois', '1 € par jour de découvert', '50 € une fois par an'], good: 0, explain: `Chaque paiement qui passe en dépassement coûte ~8 €. C'est souvent bien plus cher que les agios eux-mêmes.` },
      { q: 'Un découvert permanent depuis plus de 90 jours…', opts: ['Est interdit et bloque ta carte', 'Doit être transformé en crédit conso par la banque', 'Devient gratuit'], good: 1, explain: `La loi impose à la banque de te proposer un vrai crédit. C'est aussi le signal qu'il faut restructurer ton budget.` },
      { q: 'Le meilleur moyen d\'éviter le découvert de fin de mois ?', opts: ['Payer tout en espèces', 'Décaler ses prélèvements juste après la paie', 'Fermer son compte'], good: 1, explain: `Aligner les gros prélèvements sur ta date de paie évite la zone rouge des derniers jours du mois.` },
      { q: 'L\'offre « clientèle fragile » plafonne les frais d\'incident à…', opts: ['20 €/mois et 200 €/an', '80 €/mois sans plafond annuel', 'Rien, elle supprime la carte'], good: 0, explain: `Cette offre légale, que la banque doit proposer aux clients en difficulté, divise les frais par quatre ou plus. Demande-la.` },
    ],
  },

  '1.5': {
    title: 'Les aides auxquelles tu as droit',
    goal: `À la fin, tu sauras quelles aides tu peux toucher (logement, revenus, santé, quotidien), et comment les demander sans te perdre.`,
    badge: 'Zéro euro laissé',
    pages: [
      { tag: 'PAGE 1 · LE NON-RECOURS', title: 'Des milliards non réclamés', blocks: [
        { label: 'Le constat', text: `Chaque année, environ 10 milliards d'euros d'aides sociales ne sont PAS réclamés en France. Environ un tiers des personnes éligibles à la prime d'activité ne la demandent jamais.` },
        { label: 'Pourquoi ?', text: `On croit ne pas y avoir droit (« c'est pour les autres »), on a peur de la paperasse, ou on ne connaît simplement pas l'aide. Résultat : de l'argent qui t'appartient reste dans les caisses.` },
        { label: 'Changer de regard', text: `Ces aides sont financées par les cotisations et impôts que tu paies (souviens-toi de ta fiche de paie). Les demander n'est pas de l'assistanat : c'est utiliser un droit.` },
      ] },
      { tag: 'PAGE 2 · LE LOGEMENT', title: 'APL : souvent la plus grosse aide', blocks: [
        { label: 'Qui y a droit', text: `Locataire, colocataire ou étudiant en résidence : l'APL dépend de ton loyer, ta ville et TES revenus (pas ceux de tes parents, sauf rattachement fiscal — à vérifier avant de demander).` },
        { label: 'Combien', text: `De quelques euros à plus de 250 €/mois. Le calcul se fait sur tes revenus des 12 derniers mois, actualisés tous les 3 mois : un changement de situation peut ouvrir des droits en cours d'année.` },
        { label: 'Comment', text: `Demande en ligne sur caf.fr, dès la signature du bail — l'aide n'est PAS rétroactive : chaque mois de retard est perdu. Il te faudra bail, RIB et justificatifs de revenus.` },
      ] },
      { tag: 'PAGE 3 · LES REVENUS', title: 'Prime d\'activité, RSA, bourses', blocks: [
        { label: 'La prime d\'activité', text: `Tu travailles et gagnes entre ~600 et ~1 900 € net ? Tu y as peut-être droit, même en CDI temps plein. Montant moyen : ~180 €/mois. Demande sur caf.fr avec ton « montant net social ».` },
        { label: 'Le RSA', text: `Sans activité et plus de 25 ans (ou jeune parent, ou 18-25 ans ayant travaillé 2 ans) : environ 640 €/mois pour une personne seule, avec accompagnement vers l'emploi.` },
        { label: 'Les bourses étudiantes', text: `La bourse CROUS (de ~1 500 à ~6 300 €/an selon l'échelon) se demande via le Dossier Social Étudiant entre mars et mai — même sans certitude d'éligibilité : la simulation est gratuite.` },
      ] },
      { tag: 'PAGE 4 · SANTÉ & QUOTIDIEN', title: 'Les aides qu\'on oublie toujours', blocks: [
        { label: 'La santé', text: `La Complémentaire Santé Solidaire (C2S) : une mutuelle gratuite ou à moins de 1 €/jour si tes revenus sont modestes. Demande via ameli.fr — beaucoup de jeunes y ont droit sans le savoir.` },
        { label: 'L\'énergie', text: `Le chèque énergie (jusqu'à ~280 €/an) est envoyé automatiquement… si ta déclaration d'impôts est à jour, même à revenu zéro. Déclarer ses revenus est donc rentable, même sans impôt à payer.` },
        { label: 'Les transports', text: `La plupart des régions offrent des tarifs réduits ou gratuits (jeunes, demandeurs d'emploi, bas revenus). Vérifie le site de ton réseau : souvent −50 % en 10 minutes.` },
      ] },
      { tag: 'PAGE 5 · LE RÉFLEXE KAPI', title: 'Ton audit d\'aides en 30 minutes', blocks: [
        { label: 'L\'outil officiel', text: `Le simulateur mesdroitssociaux.gouv.fr teste TOUTES les aides nationales en une seule saisie de 15 minutes. Gratuit, anonyme au début, sans engagement.` },
        { label: 'Ce week-end', items: ['Fais la simulation complète sur mesdroitssociaux.gouv.fr avec ta dernière fiche de paie (ligne « montant net social »)', 'Fais les demandes en ligne pour chaque aide détectée — commence par la plus grosse', 'Note les dates de renouvellement (la prime d\'activité se redéclare tous les 3 mois)'] },
        { label: 'À chaque changement de vie', items: ['Déménagement, perte d\'emploi, baisse de salaire, naissance : refais la simulation', 'Déclare vite tes changements à la CAF — dans les deux sens, pour éviter les trop-perçus à rembourser'] },
      ] },
    ],
    questions: [
      { q: 'Quelle part des éligibles ne demande jamais la prime d\'activité ?', opts: ['Environ 5 %', 'Environ un tiers', 'Quasiment personne'], good: 1, explain: `Le non-recours est massif : environ un tiers des éligibles passent à côté, souvent par simple méconnaissance.` },
      { q: 'L\'APL se demande…', opts: ['Dès la signature du bail, elle n\'est pas rétroactive', 'En fin d\'année, avec effet rétroactif', 'Uniquement si tes parents sont non imposables'], good: 0, explain: `Chaque mois de retard est perdu. Demande sur caf.fr dès que tu as bail et RIB.` },
      { q: 'Pour tes demandes CAF, tu utilises quelle ligne de ta fiche de paie ?', opts: ['Le net à payer', 'Le montant net social', 'Le salaire brut'], good: 1, explain: `Le montant net social est la référence officielle des aides — leçon 1, ça paie déjà !` },
      { q: 'La Complémentaire Santé Solidaire (C2S), c\'est…', opts: ['Une mutuelle gratuite ou à moins de 1 €/jour sous conditions', 'Une assurance auto pour jeunes', 'Un crédit santé'], good: 0, explain: `C'est une complémentaire santé complète pour revenus modestes. Beaucoup de jeunes actifs y ont droit sans le savoir.` },
      { q: 'Le meilleur point de départ pour connaître TOUS tes droits ?', opts: ['Demander à sa banque', 'mesdroitssociaux.gouv.fr', 'Attendre un courrier de la CAF'], good: 1, explain: `Le simulateur officiel teste toutes les aides nationales en une saisie. 15 minutes qui peuvent rapporter des centaines d'euros.` },
    ],
  },

  '1.6': {
    title: 'Achats impulsifs : reprendre la main',
    goal: `À la fin, tu sauras repérer les techniques qui te font acheter sans réfléchir, et tu auras des garde-fous concrets — sans renoncer au plaisir.`,
    badge: 'Acheteur·se éclairé·e',
    pages: [
      { tag: 'PAGE 1 · TON CERVEAU EN PROMO', title: 'Pourquoi tu craques (ce n\'est pas un manque de volonté)', blocks: [
        { label: 'L\'ancrage', text: `« 129 € au lieu de 249 € » : ton cerveau compare au prix barré, pas à la valeur réelle. Le prix barré est parfois gonflé exprès — la « bonne affaire » est fabriquée.` },
        { label: 'L\'urgence artificielle', text: `« Plus que 2 en stock », « offre valable 1h47 », compte à rebours : la rareté déclenche la peur de rater (FOMO) et court-circuite la réflexion. Ces compteurs se réinitialisent souvent à chaque visite.` },
        { label: 'La récompense immédiate', text: `Acheter libère de la dopamine — surtout quand ça va vite. Les sites le savent : paiement en 1 clic, carte enregistrée, zéro friction. Chaque étape supprimée est une chance de réflexion en moins.` },
      ] },
      { tag: 'PAGE 2 · LES PIÈGES MODERNES', title: 'Paiement fractionné, abonnements, dark patterns', blocks: [
        { label: 'Le paiement en 4 fois', text: `Le paiement fractionné fait paraître un achat de 200 € comme « 4 × 50 € ». On cumule, et les mensualités s'empilent le mois suivant. Un retard = pénalités, et c'est un vrai crédit, avec fichage possible.` },
        { label: 'Les abonnements zombies', text: `Essai gratuit devenu payant, appli oubliée, salle de sport fantôme : on paie souvent des abonnements qu'on n'utilise plus. 3 abonnements oubliés à 10 € = 360 €/an.` },
        { label: 'Les dark patterns', text: `Case pré-cochée, bouton « refuser » gris pâle, désabonnement introuvable : ces interfaces sont CONÇUES pour te faire dépenser. Les reconnaître, c'est déjà leur résister.` },
      ] },
      { tag: 'PAGE 3 · LA RÈGLE DES 72 HEURES', title: 'Le garde-fou le plus efficace', blocks: [
        { label: 'Le principe', text: `Pour tout achat non prévu au-dessus d'un seuil (fixe-le : 30, 50 ou 100 €), attends 72 heures avant de payer. L'envie survit rarement au week-end : si elle est toujours là, achète sereinement.` },
        { label: 'Convertis en heures de travail', text: `Au SMIC, un panier de 90 € ≈ 10 heures de travail. Demande-toi : « est-ce que cet objet vaut une journée et demie de mon temps ? » Ce calcul change la perception du prix.` },
        { label: 'La liste d\'envies', text: `Au lieu d'acheter, ajoute l'article à une liste datée. Relis-la chaque mois : tu seras surpris·e du nombre d'envies « vitales » devenues indifférentes.` },
      ] },
      { tag: 'PAGE 4 · L\'HYGIÈNE NUMÉRIQUE', title: 'Rends le craquage difficile', blocks: [
        { label: 'Supprime la friction inverse', text: `Désenregistre ta carte bancaire des sites marchands : devoir chercher sa carte et taper 16 chiffres, c'est 90 secondes de réflexion gratuite. Le 1-clic est ton pire ennemi.` },
        { label: 'Coupe les sollicitations', text: `Désabonne-toi des newsletters promo, désactive les notifications des applis shopping, et unfollowe les comptes qui te donnent envie d'acheter. Pas vu, pas craqué.` },
        { label: 'Fais le ménage des abonnements', text: `Passe en revue tes prélèvements des 3 derniers mois. Chaque abonnement non utilisé depuis 2 mois : résiliation. La loi impose désormais un bouton de résiliation en ligne aussi simple que l'abonnement.` },
      ] },
      { tag: 'PAGE 5 · LE RÉFLEXE KAPI', title: 'Se faire plaisir, version maligne', blocks: [
        { label: 'Le but n\'est pas la privation', text: `Ton enveloppe « envies » (les 30 % de la leçon 50/30/20) existe pour être dépensée SANS culpabilité. La différence : c'est TOI qui décides, pas un compte à rebours.` },
        { label: 'Tes garde-fous permanents', items: ['Fixe ton seuil 72h et respecte-le pour tout achat non prévu', 'Tiens ta liste d\'envies et relis-la le 1er du mois', 'Garde ta carte NON enregistrée sur les sites marchands'] },
        { label: 'Ton rituel mensuel', items: ['Passe en revue les prélèvements du mois : un abonnement zombie ? Résilie', 'Compte tes craquages évités et leur montant — c\'est ton score, célèbre-le', 'Autorise-toi UN plaisir prévu dans l\'enveloppe envies : le plaisir planifié est le meilleur antidote au craquage'] },
      ] },
    ],
    questions: [
      { q: 'Un prix barré « 249 € » à côté du prix « 129 € », c\'est la technique de…', opts: ['L\'ancrage', 'La rareté', 'Le parrainage'], good: 0, explain: `Ton cerveau juge le prix par rapport à l'ancre affichée, pas à la valeur réelle. L'ancre est parfois gonflée exprès.` },
      { q: 'Le paiement en 4 fois est risqué parce que…', opts: ['Il est illégal', 'Les mensualités s\'empilent et un retard coûte cher', 'Il abîme ta carte bancaire'], good: 1, explain: `Chaque « petit » 4× s'ajoute aux autres le mois suivant. C'est un vrai crédit, avec pénalités et fichage possible en cas d'impayé.` },
      { q: 'La règle des 72 heures s\'applique…', opts: ['À tous tes achats, même les courses', 'Aux achats non prévus au-dessus de ton seuil', 'Uniquement pendant les soldes'], good: 1, explain: `Les courses prévues ne sont pas concernées. C'est le garde-fou des envies soudaines au-dessus de ton seuil personnel.` },
      { q: 'Pourquoi désenregistrer sa carte des sites marchands ?', opts: ['Pour éviter le piratage uniquement', 'Pour réintroduire 90 secondes de réflexion avant chaque achat', 'Parce que c\'est obligatoire'], good: 1, explain: `La friction est ton alliée : chercher sa carte et taper les chiffres laisse le temps à la raison de rattraper l'envie.` },
      { q: 'L\'enveloppe « envies » de ton budget sert à…', opts: ['Être épargnée si possible', 'Être dépensée sans culpabilité, sur des plaisirs choisis', 'Payer les imprévus'], good: 1, explain: `Le but n'est pas la privation : c'est de choisir tes plaisirs toi-même, au lieu de les laisser choisir par un compte à rebours.` },
    ],
  },
}
