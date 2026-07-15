// Contenu long du module 8 « Déjouer les arnaques » — 5 pages × 3-4 blocs
// + quiz de 5 questions. Sous-modules : 8.1 à 8.4.
// Contenu strictement pédagogique et défensif.

export const MODULE8_LESSONS = {
  '8.1': {
    title: 'Reconnaître une arnaque',
    goal: `À la fin, tu sauras repérer les 5 signaux d'alerte communs à presque toutes les arnaques financières, et tu auras le réflexe de vérifier avant de confier un euro.`,
    badge: 'Œil aiguisé',
    pages: [
      { tag: 'PAGE 1 · LA MÉCANIQUE', title: 'Toutes les arnaques se ressemblent', blocks: [
        { label: 'Un même moule', text: `Les arnaques financières changent d'habillage (crypto, forex, immobilier, "opportunité unique") mais reposent presque toujours sur les mêmes ressorts. Apprendre ces ressorts, c'est pouvoir les reconnaître sous n'importe quel déguisement.` },
        { label: 'Elles visent tes émotions', text: `Une arnaque ne s'adresse pas à ta raison mais à tes émotions : l'appât du gain, la peur de rater, la confiance, l'urgence. Le jour où tu ressens une de ces émotions face à une "offre", c'est le moment de ralentir, pas d'accélérer.` },
        { label: 'Personne n’est à l’abri', text: `Croire "ça n'arrive qu'aux autres" est déjà une faille. Les escrocs sont des professionnels de la manipulation qui ciblent aussi des gens diplômés et prudents. L'humilité est ta première protection.` },
      ] },
      { tag: 'PAGE 2 · SIGNAL 1 ET 2', title: 'Rendement magique et pression', blocks: [
        { label: 'Signal 1 — « rentable et sans risque »', text: `La promesse d'un rendement élevé sans risque est le signal n° 1. On l'a vu au module 5 : rendement et risque vont toujours ensemble. "10 % garantis par mois", "gains assurés" = mensonge, par définition.` },
        { label: 'Signal 2 — l’urgence', text: `"Offre limitée", "il ne reste que 2 places", "le cours va s'envoler demain" : l'urgence sert à t'empêcher de réfléchir et de vérifier. Une vraie opportunité sérieuse te laisse le temps. La précipitation profite toujours à l'escroc.` },
        { label: 'Le réflexe', text: `Face à ces deux signaux, la meilleure défense est le temps : "Je vais y réfléchir et vérifier." Une arnaque déteste que tu prennes du recul ; une offre honnête n'a rien contre.` },
      ] },
      { tag: 'PAGE 3 · SIGNAL 3, 4 ET 5', title: 'Trois autres drapeaux rouges', blocks: [
        { label: 'Signal 3 — le non-agréé', text: `Proposer des placements sans être autorisé est illégal. Un acteur sérieux est enregistré auprès du régulateur (AMF, ACPR en France). S'il n'y figure pas — ou pire, s'il est sur une liste noire — fuis.` },
        { label: 'Signal 4 — le parrainage à tout prix', text: `Si tu gagnes surtout en recrutant d'autres personnes (et non par un vrai produit), c'est un système pyramidal : il s'effondre forcément, et les derniers entrés perdent tout. "Fais entrer tes amis" est un énorme drapeau rouge.` },
        { label: 'Signal 5 — l’opacité', text: `Impossible de comprendre comment l'argent est gagné, jargon flou, "secret", "algorithme propriétaire", interlocuteur qui esquive tes questions : si tu ne comprends pas d'où vient le rendement, c'est peut-être de ta poche.` },
      ] },
      { tag: 'PAGE 4 · VÉRIFIER', title: 'Les outils officiels et gratuits', blocks: [
        { label: 'Les listes noires de l’AMF', text: `L'Autorité des marchés financiers publie des listes noires de sites et acteurs non autorisés. Avant de confier un euro, une recherche du nom sur le site de l'AMF peut éviter la catastrophe. Gratuit, en quelques secondes.` },
        { label: 'Le registre REGAFI', text: `Le registre officiel (REGAFI) recense les acteurs agréés. Si celui qui te sollicite n'y est pas, c'est un signal fort. "Autorisé" ne se prouve pas par un beau site, mais par une inscription officielle.` },
        { label: 'Le test du proche', text: `Explique l'offre, à voix haute, à un proche de confiance. Si tu t'entends dire "on me garantit 10 % par mois en recrutant des gens", tu entendras toi-même que ça ne va pas. Dire tout haut désamorce beaucoup de pièges.` },
      ] },
      { tag: 'PAGE 5 · LE RÉFLEXE KAPI', title: 'Vérifie avant, pas après', blocks: [
        { label: 'Pourquoi c’est crucial', text: `Une fois l'argent envoyé (surtout par crypto ou virement à l'étranger), il est presque toujours irrécupérable. La seule protection efficace agit avant : vérifier et prendre son temps.` },
        { label: 'Les 5 signaux à mémoriser', items: ['Rendement élevé "sans risque" ou "garanti"', 'Urgence, pression, offre "limitée"', 'Acteur non agréé (absent des registres officiels)', 'Gains basés sur le recrutement (pyramide)', 'Opacité : tu ne comprends pas d’où vient l’argent'] },
        { label: 'Le réflexe en 3 gestes', items: ['Ne jamais décider dans l’urgence : "je vérifie et je reviens"', 'Chercher le nom sur le site de l’AMF (listes noires / REGAFI)', 'Expliquer l’offre à voix haute à un proche de confiance'] },
      ] },
    ],
    questions: [
      { q: 'Le signal n° 1 d’une arnaque financière est…', opts: ['Un rendement élevé présenté comme sans risque', 'Un site un peu lent', 'Un rendement modeste'], good: 0, explain: `Rendement élevé et risque vont toujours ensemble : promettre "beaucoup et sans risque" est un mensonge par définition.` },
      { q: 'L’urgence ("offre limitée, décidez maintenant") sert à…', opts: ['Te rendre service', 'T’empêcher de réfléchir et de vérifier', 'Prouver le sérieux de l’offre'], good: 1, explain: `La précipitation profite à l'escroc : une offre honnête te laisse le temps de vérifier.` },
      { q: 'Gagner surtout en recrutant d’autres personnes est le signe…', opts: ['D’un placement solide', 'D’un système pyramidal qui s’effondrera', 'D’une bonne diversification'], good: 1, explain: `Sans vrai produit, un système fondé sur le recrutement s'écroule forcément et ruine les derniers entrés.` },
      { q: 'Pour vérifier qu’un acteur est autorisé en France, tu consultes…', opts: ['Ses avis Google', 'Les listes de l’AMF / le registre REGAFI', 'Le nombre de ses abonnés'], good: 1, explain: `Les listes noires de l'AMF et le registre REGAFI sont officiels et gratuits : la vérification prend quelques secondes.` },
      { q: 'La seule protection vraiment efficace contre les arnaques agit…', opts: ['Après avoir envoyé l’argent', 'Avant, en vérifiant et en prenant son temps', 'En envoyant plus pour "se refaire"'], good: 1, explain: `L'argent envoyé (surtout en crypto) est quasi irrécupérable : tout se joue avant, par la vérification et le recul.` },
    ],
  },

  '8.2': {
    title: 'Finfluenceurs et formations miracle',
    goal: `À la fin, tu sauras repérer les pièges des "finfluenceurs", des formations de trading/dropshipping "pour devenir riche", et distinguer l'éducation honnête du marketing prédateur.`,
    badge: 'Immunisé contre le hype',
    pages: [
      { tag: 'PAGE 1 · LE BUSINESS DU RÊVE', title: 'Où est vraiment l’argent', blocks: [
        { label: 'La vraie source de revenus', text: `Beaucoup de "finfluenceurs" qui promettent la richesse ne gagnent pas leur argent grâce à leurs placements, mais grâce à toi : ventes de formations, affiliations, partenariats rémunérés. Leur produit, ce n'est pas le trading, c'est le rêve qu'ils te vendent.` },
        { label: 'La preuve mise en scène', text: `Voitures de luxe, montres, "lifestyle" : ces images sont souvent louées, empruntées ou financées justement par la vente de formations. La mise en scène de la réussite est un outil marketing, pas une preuve de compétence.` },
        { label: 'Le biais du survivant', text: `On ne voit que ceux qui "ont réussi" et le clament. Les milliers qui ont suivi la même méthode et perdu ne font pas de vidéos. Juger une méthode sur ses rares gagnants visibles est une erreur de raisonnement.` },
      ] },
      { tag: 'PAGE 2 · LES FORMATIONS "RICHESSE"', title: 'Trading, dropshipping, crypto miracle', blocks: [
        { label: 'La promesse type', text: `"Deviens indépendant financièrement en 3 mois", "gagne 5 000 €/mois en travaillant 2 h par jour" : ces promesses jouent sur le désir légitime d'une vie meilleure. Mais un revenu facile, rapide et garanti n'existe pas.` },
        { label: 'Le vrai contenu', text: `Ces formations coûteuses recyclent souvent des informations gratuites disponibles partout, enrobées de motivation. Ce que tu paies très cher, c'est rarement du savoir rare : c'est l'illusion d'un raccourci.` },
        { label: 'L’escalade', text: `Une première formation en amène une deuxième, "avancée", puis un coaching "premium", puis un groupe VIP. Le modèle repose sur te faire payer toujours plus pour une réussite qui recule toujours. Méfie-toi de l'escalier sans fin.` },
      ] },
      { tag: 'PAGE 3 · LE CADRE LÉGAL', title: 'Ce que la loi impose désormais', blocks: [
        { label: 'Les influenceurs encadrés', text: `En France, la loi encadre l'influence commerciale : promouvoir certains placements risqués (crypto non enregistrée, produits spéculatifs) est réglementé, et la publicité doit être signalée comme telle. Tout n'est pas permis.` },
        { label: 'La mention "collaboration"', text: `Un partenariat rémunéré doit être clairement indiqué. Quand quelqu'un vante un produit financier sans dire qu'il est payé pour, il enfreint les règles — et tu peux douter de sa sincérité.` },
        { label: 'Le rôle de l’AMF', text: `L'AMF surveille les communications sur les placements et peut sanctionner les promotions trompeuses. Signaler un contenu douteux est possible et utile : tu protèges aussi les suivants.` },
      ] },
      { tag: 'PAGE 4 · ÉDUCATION VS PRÉDATION', title: 'Reconnaître une source honnête', blocks: [
        { label: 'Ce que fait une source honnête', text: `Elle explique les risques autant que les gains, ne promet jamais de rendement, cite ses sources, distingue faits et opinions, et ne te pousse pas à acheter dans l'urgence. Elle t'apprend à décider seul, pas à lui obéir.` },
        { label: 'Ce que fait un prédateur', text: `Il promet, presse, flatte ("toi tu es différent, tu vas y arriver"), méprise les sceptiques, et dirige tout vers un achat. Le ton émotionnel et la vente cachée trahissent l'intention.` },
        { label: 'Le test simple', text: `Demande-toi : "Cette personne gagne-t-elle de l'argent si je la crois ?" Si oui, garde une distance critique. L'éducation gratuite et désintéressée existe (AMF, Banque de France, sources publiques) : commence par elle.` },
      ] },
      { tag: 'PAGE 5 · LE RÉFLEXE KAPI', title: 'Apprendre, pas suivre', blocks: [
        { label: 'Pourquoi', text: `Le désir d'améliorer sa situation est sain, et c'est précisément ce que les prédateurs exploitent. Savoir distinguer une méthode marketing d'une vraie éducation te rend libre de progresser sans te faire plumer.` },
        { label: 'Les bons réflexes', items: ['Se demander comment la personne gagne réellement son argent', 'Fuir les promesses de gains rapides, faciles et garantis', 'Vérifier si une publicité rémunérée est signalée', 'Privilégier les sources publiques et gratuites (AMF, Banque de France)'] },
        { label: 'À retenir', items: ['Beaucoup de finfluenceurs gagnent grâce aux formations, pas aux placements', 'On ne voit que les "gagnants" : c’est le biais du survivant', 'Éducation honnête = explique les risques et ne vend rien dans l’urgence'] },
      ] },
    ],
    questions: [
      { q: 'Beaucoup de "finfluenceurs" gagnent surtout de l’argent grâce à…', opts: ['Leurs placements géniaux', 'La vente de formations, l’affiliation, les partenariats', 'La chance pure'], good: 1, explain: `Leur produit est souvent le rêve vendu (formations, affiliation), pas le trading : tu es la source de revenus.` },
      { q: 'Le "biais du survivant" désigne le fait que…', opts: ['On ne voit que ceux qui ont réussi, pas les nombreux perdants', 'Les survivants sont toujours les meilleurs', 'Tout le monde réussit'], good: 0, explain: `Ceux qui ont perdu ne font pas de vidéos : juger une méthode sur ses rares gagnants visibles fausse tout.` },
      { q: 'Une formation "deviens riche en 3 mois, 2 h/jour, garanti" est…', opts: ['Une opportunité à saisir', 'Un signal d’alerte : le gain facile, rapide et garanti n’existe pas', 'Un investissement sûr'], good: 1, explain: `Ces promesses exploitent un désir légitime, mais un revenu facile, rapide et garanti n'existe pas.` },
      { q: 'Une source d’information honnête sur l’argent…', opts: ['Promet des rendements et presse d’acheter', 'Explique les risques et ne vend rien dans l’urgence', 'Méprise les questions'], good: 1, explain: `Une source honnête t'apprend à décider seul, expose les risques et ne te pousse pas à acheter.` },
      { q: 'Un bon test face à un conseil financier en ligne :', opts: ['Compter ses abonnés', 'Se demander : "gagne-t-il de l’argent si je le crois ?"', 'Regarder sa voiture'], good: 1, explain: `Si la personne profite de ta croyance, garde une distance critique : commence par les sources publiques gratuites.` },
    ],
  },

  '8.3': {
    title: 'Sécuriser ses comptes',
    goal: `À la fin, tu sauras reconnaître le phishing et la fraude au "faux conseiller bancaire", et tu maîtriseras les gestes de base pour protéger tes comptes et tes codes.`,
    badge: 'Comptes verrouillés',
    pages: [
      { tag: 'PAGE 1 · LE PHISHING', title: 'Le faux message qui vole tes codes', blocks: [
        { label: 'Ce que c’est', text: `Le phishing (hameçonnage) est un faux message (SMS, e-mail, appel) qui imite un organisme de confiance — ta banque, les impôts, un livreur — pour te pousser à donner tes identifiants, ton code ou ta carte. Le lien mène vers un faux site très ressemblant.` },
        { label: 'Les appâts classiques', text: `"Colis en attente, payez 1,90 €", "activité suspecte sur votre compte", "remboursement à réclamer", "amende à régler". Le message crée l'urgence ou la peur pour te faire cliquer avant de réfléchir.` },
        { label: 'Les indices', text: `Fautes d'orthographe, adresse d'expéditeur bizarre, lien qui ne correspond pas au vrai site, demande d'informations que l'organisme a déjà : autant de signaux. Dans le doute, n'utilise jamais le lien du message.` },
      ] },
      { tag: 'PAGE 2 · LE FAUX CONSEILLER', title: 'La fraude qui monte le plus', blocks: [
        { label: 'Le scénario', text: `Quelqu'un t'appelle en se faisant passer pour ta banque : il "constate une fraude" et te demande de "sécuriser ton compte". Il connaît parfois ton nom, ta banque, tes dernières opérations (données volées ailleurs) : ça le rend crédible.` },
        { label: 'Le piège', text: `Il te demande de valider une opération dans ton appli "pour l'annuler", de donner un code reçu par SMS, ou d'installer un logiciel. En réalité, tu valides toi-même le virement des fraudeurs. La manipulation te fait faire le travail à leur place.` },
        { label: 'La règle d’or', text: `Ta banque ne te demandera JAMAIS ton code confidentiel, ton mot de passe complet, ni de valider une opération "pour la bloquer". En cas de doute : raccroche, et rappelle ta banque par le numéro officiel (au dos de ta carte), pas celui qu'on te donne.` },
      ] },
      { tag: 'PAGE 3 · LES GESTES DE BASE', title: 'Ta trousse de sécurité', blocks: [
        { label: 'La double authentification', text: `Active la double authentification (2FA) partout où c'est possible : même si un pirate a ton mot de passe, il lui manque le second facteur (code sur ton téléphone). C'est la protection la plus efficace pour l'effort le plus faible.` },
        { label: 'Des mots de passe uniques', text: `Un mot de passe différent par service, surtout pour la banque et la messagerie. Réutiliser le même partout, c'est donner toutes les clés dès qu'une seule fuite. Un gestionnaire de mots de passe fait le travail à ta place.` },
        { label: 'La boîte mail, coffre-fort', text: `Ta messagerie reçoit les réinitialisations de mots de passe : la protéger (mot de passe fort + 2FA) protège en cascade tout le reste. C'est le trousseau qui ouvre toutes les portes.` },
      ] },
      { tag: 'PAGE 4 · L’HYGIÈNE NUMÉRIQUE', title: 'Des habitudes qui protègent', blocks: [
        { label: 'Vérifier plutôt que cliquer', text: `Plutôt que de cliquer sur un lien reçu, ouvre toi-même l'appli ou tape l'adresse officielle. Si le message était vrai, l'info y sera aussi. Ce simple détour désamorce la majorité des tentatives de phishing.` },
        { label: 'Ne jamais partager un code', text: `Un code reçu par SMS ("votre code de validation est…") ne se partage avec personne, jamais, même avec "un conseiller". Ces codes valident des opérations : les donner, c'est signer à la place du fraudeur.` },
        { label: 'Surveiller ses comptes', text: `Active les notifications d'opérations et jette un œil régulier à tes relevés. Repérer vite une opération anormale permet d'agir dans les délais où l'on peut encore être remboursé.` },
      ] },
      { tag: 'PAGE 5 · LE RÉFLEXE KAPI', title: 'Doute, raccroche, vérifie', blocks: [
        { label: 'Pourquoi', text: `La fraude bancaire ne repose pas sur du piratage sophistiqué mais sur la manipulation : on te fait agir vite, sous pression émotionnelle. Ralentir et vérifier suffit à déjouer l'essentiel.` },
        { label: 'Les règles à graver', items: ['Ta banque ne demande JAMAIS ton code, ton mot de passe complet, ni de valider pour "annuler"', 'Un code SMS ne se partage jamais avec personne', 'En cas d’appel douteux : raccroche et rappelle le numéro officiel toi-même'] },
        { label: 'La trousse de sécurité', items: ['Double authentification (2FA) activée partout', 'Un mot de passe unique par service, surtout banque et e-mail', 'Notifications d’opérations activées pour repérer vite une fraude'] },
      ] },
    ],
    questions: [
      { q: 'Le phishing consiste à…', opts: ['Investir en Bourse', 'Imiter un organisme de confiance pour voler tes codes', 'Épargner sur un livret'], good: 1, explain: `Un faux message imite ta banque, les impôts ou un livreur pour te pousser à livrer identifiants et codes.` },
      { q: 'Ta banque peut légitimement te demander…', opts: ['Ton code confidentiel complet', 'De valider une opération "pour l’annuler"', 'Rien de tout cela — jamais'], good: 2, explain: `Ta banque ne demande jamais ton code, ton mot de passe complet, ni de valider une opération pour la bloquer.` },
      { q: 'Face à un appel de "ton conseiller" qui signale une fraude, le bon geste est…', opts: ['Suivre ses instructions vite', 'Raccrocher et rappeler le numéro officiel toi-même', 'Lui donner le code SMS reçu'], good: 1, explain: `Les fraudeurs se font passer pour la banque : raccroche et rappelle le numéro au dos de ta carte, jamais celui donné.` },
      { q: 'La protection la plus efficace pour le moindre effort est…', opts: ['La double authentification (2FA)', 'Un seul mot de passe partout', 'Ne rien changer'], good: 0, explain: `Même avec ton mot de passe volé, le pirate est bloqué sans le second facteur : la 2FA est le meilleur rapport protection/effort.` },
      { q: 'Un code de validation reçu par SMS…', opts: ['Se partage avec un conseiller de confiance', 'Ne se partage avec personne, jamais', 'Doit être publié pour vérification'], good: 1, explain: `Ces codes valident des opérations : les donner revient à signer à la place du fraudeur.` },
    ],
  },

  '8.4': {
    title: 'Réagir si c’est trop tard',
    goal: `À la fin, tu sauras quels gestes d'urgence poser si tu es victime d'une fraude, qui contacter (banque, signalements officiels, plainte), et dans quels délais agir.`,
    badge: 'Plan d’urgence prêt',
    pages: [
      { tag: 'PAGE 1 · GARDER LA TÊTE FROIDE', title: 'Les premières minutes comptent', blocks: [
        { label: 'La honte est normale', text: `Être victime d'une arnaque n'a rien d'honteux : les escrocs sont des pros de la manipulation qui piègent des gens intelligents chaque jour. La honte pousse à se taire — or c'est le silence qui aggrave tout. Agir vite prime sur tout le reste.` },
        { label: 'Le temps est ton facteur clé', text: `Plus tu réagis tôt, plus tu as de chances de bloquer une opération, de te faire rembourser ou de limiter les dégâts. Chaque heure compte : on agit d'abord, on analysera après.` },
        { label: 'Ne pas "se refaire"', text: `Un piège classique : après une perte, on te propose de "récupérer ton argent" contre de nouveaux frais. C'est une seconde arnaque qui vise les victimes. On ne remet jamais d'argent pour récupérer l'argent perdu.` },
      ] },
      { tag: 'PAGE 2 · STOPPER L’HÉMORRAGIE', title: 'Les gestes d’urgence', blocks: [
        { label: 'Faire opposition', text: `Si ta carte, tes codes ou tes accès sont compromis : fais immédiatement opposition auprès de ta banque et fais bloquer la carte. Il existe des numéros d'opposition disponibles 24 h/24.` },
        { label: 'Changer tes accès', text: `Change sans attendre les mots de passe concernés (banque, messagerie surtout) depuis un appareil sûr, et active la double authentification si ce n'était pas fait. Objectif : reprendre le contrôle avant les fraudeurs.` },
        { label: 'Signaler à ta banque par écrit', text: `Signale la fraude à ta banque, si possible par écrit (pour garder une trace). Pour un paiement non autorisé signalé à temps, la loi prévoit un droit au remboursement dans de nombreux cas : ne renonce pas d'avance.` },
      ] },
      { tag: 'PAGE 3 · SIGNALER OFFICIELLEMENT', title: 'Les bons interlocuteurs', blocks: [
        { label: 'Les plateformes de l’État', text: `Des services publics gratuits existent : cybermalveillance.gouv.fr pour l'aide et l'orientation, des plateformes de signalement pour les SMS et messages frauduleux, et Perceval pour les fraudes à la carte bancaire. Ils guident les démarches.` },
        { label: 'AMF et ACPR', text: `Pour une arnaque à l'investissement (faux placement, faux conseiller en placement), l'AMF et l'ACPR disposent de plateformes de signalement. Ton signalement aide aussi à alerter et protéger d'autres victimes.` },
        { label: 'Porter plainte', text: `Déposer plainte auprès de la police ou gendarmerie officialise ta démarche et peut être exigé par la banque ou l'assurance. Rassemble avant tout les preuves : captures, e-mails, relevés, numéros, dates.` },
      ] },
      { tag: 'PAGE 4 · APRÈS, SE RECONSTRUIRE', title: 'Limiter les suites', blocks: [
        { label: 'Surveiller la récidive', text: `Garde l'œil sur tes comptes et ta messagerie les semaines suivantes : les données volées peuvent resservir. Une vigilance accrue pendant quelques mois est une précaution saine.` },
        { label: 'Le risque d’usurpation', text: `Si des données personnelles (pièce d'identité, RIB) ont fuité, le risque d'usurpation d'identité existe. Signaler, conserver les preuves et rester attentif aux courriers inhabituels (crédits ouverts à ton nom) permet de réagir tôt.` },
        { label: 'En parler', text: `Prévenir tes proches d'une arnaque que tu as vécue les protège à leur tour, et lever le tabou aide d'autres victimes à oser réagir. Transmettre ton expérience, c'est transformer une mauvaise passe en protection collective.` },
      ] },
      { tag: 'PAGE 5 · LE RÉFLEXE KAPI', title: 'Le plan d’urgence en tête', blocks: [
        { label: 'Pourquoi', text: `Connaître les gestes AVANT d'en avoir besoin permet d'agir vite le jour J, au lieu de paniquer. Ce sous-module est ton plan d'urgence : mieux vaut ne jamais s'en servir, mais l'avoir prêt.` },
        { label: 'L’ordre des gestes', items: ['Opposition immédiate (carte / accès) auprès de ta banque', 'Changer mots de passe (banque + messagerie) et activer la 2FA', 'Signaler par écrit à la banque et réclamer le remboursement si applicable', 'Signaler aux plateformes officielles et porter plainte, preuves à l’appui'] },
        { label: 'À retenir', items: ['Ni honte ni silence : agir vite est ce qui protège le plus', 'On ne paie JAMAIS pour "récupérer" l’argent perdu (2e arnaque)', 'Un paiement non autorisé signalé à temps ouvre souvent droit à remboursement'] },
      ] },
    ],
    questions: [
      { q: 'Si tu réalises que ta carte ou tes accès sont compromis, le premier geste est…', opts: ['Attendre de voir', 'Faire opposition immédiatement auprès de ta banque', 'Envoyer plus d’argent'], good: 1, explain: `Bloquer la carte et les accès sans attendre limite les dégâts : le temps est le facteur clé.` },
      { q: 'On te propose de "récupérer ton argent perdu" contre des frais. C’est…', opts: ['Une chance à saisir', 'Une seconde arnaque visant les victimes', 'Le fonctionnement normal'], good: 1, explain: `On ne remet jamais d'argent pour récupérer de l'argent perdu : c'est une arnaque qui recible les victimes.` },
      { q: 'Pour une fraude à la carte bancaire, un dispositif officiel est…', opts: ['Perceval', 'Un forum anonyme', 'Rien n’existe'], good: 0, explain: `Perceval (service public) permet de signaler les fraudes à la carte ; cybermalveillance.gouv.fr oriente les démarches.` },
      { q: 'Un paiement non autorisé signalé à temps…', opts: ['N’est jamais remboursé', 'Ouvre souvent droit à un remboursement par la loi', 'Doit rester secret'], good: 1, explain: `La loi prévoit un droit au remboursement dans de nombreux cas de paiement non autorisé signalé rapidement.` },
      { q: 'Face à une arnaque subie, la honte…', opts: ['Doit te faire garder le silence', 'Est normale mais ne doit pas t’empêcher d’agir vite', 'Prouve que tu es responsable'], good: 1, explain: `Les escrocs piègent des gens intelligents : la honte pousse au silence, or c'est le silence qui aggrave tout.` },
    ],
  },
}
