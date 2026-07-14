> **Branche `v3-kapi` — refonte « Édufi » (direction Kapi).** Nouvelle identité
> visuelle (mascotte pièce Kapi, palette crème/vert/ambre, Nunito), navigation
> par onglets (Accueil / Parcours / Récompenses), parcours « Pas à pas » façon
> chemin + « Étapes de vie », et gamification (XP, niveaux, pièces, défi du
> jour, coffre hebdo, ligue, badges). Marque centralisée dans `src/brand.js`.
> La v2 « FinPath » reste sur `main` (en ligne, intouchée). Le reste de ce
> README décrit le socle commun, valable pour les deux.

# FinPath 🧭

App d'éducation financière **gratuite** pour jeunes adultes 18-25 ans :
parcours de 9 modules (38 sous-modules) en accès libre, simulateurs, lexique
et coach conversationnel — le tout piloté par un **moteur adaptatif** qui
personnalise le parcours selon le profil et les résultats.

**Sans pub, sans compte, sans démarchage** : aucun produit n'est vendu, aucune
donnée ne quitte l'appareil (100 % localStorage), et la progression
s'exporte / s'importe en JSON. L'app est une **PWA** : installable et
utilisable hors ligne après la première visite.

## Lancer

```bash
npm install
npm run dev       # développement (http://localhost:5173)
npm run build     # build de production
npm run preview   # sert le build sous /App-Educ-Fi/ (comme GitHub Pages)
```

Déploiement : push sur `main` → GitHub Actions → GitHub Pages
(`.github/workflows/deploy.yml`).

## Le parcours

9 modules, tous accessibles dès le départ (aucun verrouillage) :

1. 💸 Gérer son budget *(6 sous-modules : fiche de paie, 50/30/20, découvert, pilotage, aides, psychologie)*
2. 🐷 Épargner
3. 💳 Comprendre le crédit
4. 🧯 S'assurer au quotidien
5. 📊 Investir : premiers pas
6. 🧺 Diversifier ses placements *(obligations, SCPI, or, crypto)*
7. 🏡 Se projeter
8. 🛡️ Déjouer les arnaques
9. 🎓 Niveau expert *(dérivés, CFD, private equity, levier)*

Chaque sous-module suit 4 étapes : **Prise de connaissance → Cas concret →
Synthèse / Vulgarisation → Quiz de compréhension** (QCM, feedback immédiat,
explication alternative en cas d'erreur répétée).

## Le moteur adaptatif (`src/lib/adaptive.js`)

L'onboarding (5 questions) détecte un profil — Débutant / Intermédiaire /
Avancé — qui recommande un point de départ (badge ⭐) et adapte le ton, sans
rien bloquer. Ensuite, chaque quiz nourrit le moteur :

- **Maîtrise** : score 0-100 par sous-module (bonnes réponses du premier
  coup) ; affiché par module et en moyenne globale.
- **Révisions espacées** : un sujet réussi à moins de 60 % revient au bout de
  2 jours, entre 60 et 84 % au bout de 7 jours ; une révision réussie remonte
  la maîtrise (jamais l'inverse).
- **Recommandation motivée** : la prochaine étape est toujours accompagnée de
  sa raison (révision fragile due > module entamé > objectif de l'onboarding >
  ordre du parcours).
- **Fast-track** : les profils qui maîtrisent peuvent valider un sous-module
  en réussissant directement son quiz (profil avancé partout, intermédiaire
  sur les fondamentaux, et quiconque prouve ≥ 85 % de maîtrise).
- **Série de jours** 🔥 : encouragement sans culpabilisation (regarder son
  tableau de bord ne casse pas la série).

## Les Moments de vie (`src/data/moments.js`)

Une deuxième porte d'entrée dans les mêmes 38 leçons : **par événement** plutôt
que par thème. Neuf moments — Premier salaire, Je prends mon appart, Première
voiture, Étudiant/alternant, Je me lance en freelance, On s'installe à deux,
J'ai de l'épargne qui dort, On me propose un crédit, Je crois que c'est une
arnaque — assemblent chacun un mini-parcours transverse de 4 à 6 leçons.
Rien n'est dupliqué : mêmes leçons, mêmes actions, même progression ; terminer
une leçon depuis un moment compte partout.

## Le Plan d'action (`src/data/actions.js`)

Chaque leçon se conclut par **une recommandation de passage à l'action** : une
démarche réelle, gratuite et vérifiable (vérifier son autorisation de découvert,
simuler ses aides sur mesdroitssociaux.gouv.fr, activer la double
authentification, créer son compte info-retraite.fr…). L'utilisateur coche
« Je l'ai fait ✓ » ; la vue **Plan d'action** rassemble les démarches
débloquées (à faire / faites).

**Ligne rouge de conformité** (documentée en tête de `actions.js`) : FinPath
est un outil éducatif — les actions sont des démarches de vérification,
d'information, de sécurité ou de réclamation de droits. Jamais de « souscris »,
« ouvre », « investis », jamais de produit ni d'établissement recommandé.
Un rappel est affiché sur chaque carte d'action. Les liens pointent uniquement
vers des sites publics ou d'autorités (gouv.fr, AMF, ORIAS).

## Les outils (`src/lib/simulators.js`)

Trois simulateurs, calculés dans le navigateur, alignés sur les modules :

- **Mon budget** — répartition 50/30/20, automatiquement adaptée (60/25/15 ou
  70/20/10) quand le loyer pèse trop lourd, comme l'enseigne le module 1.2 ;
- **Boule de neige** — intérêts composés avec courbe (versé vs total) ;
- **Mon projet** — effort mensuel pour un objectif daté, avec verdict honnête
  et délai réaliste si l'objectif est hors de portée.

S'y ajoute un **lexique** de 40 termes (`src/data/glossaire.js`), searchable,
chaque terme renvoyant vers le sous-module qui l'approfondit.

## Le coach (`src/lib/coach.js`)

Chat contextuel au module en cours : recherche insensible aux accents, choix
du meilleur sujet (pas du premier mot-clé), lien « approfondir » vers le
sous-module concerné, suggestions de questions par module, ton adapté au
profil. Il tourne en local ; les system prompts de `src/services/claude.js`
sont prêts pour le branchement de l'API Claude (via un backend proxy) sans
toucher aux composants.

## Accessibilité

- Thème clair / sombre (suit le système, forçable par le bouton 🌗) ;
- focus clavier visibles, rôles ARIA, fermeture Échap, `aria-live` sur les
  résultats ;
- `prefers-reduced-motion` respecté ;
- mobile-first, fonctionne hors ligne (service worker), installable (PWA).

## Architecture

- `src/data/curriculum.js` — les 9 modules et 38 sous-modules
- `src/data/content/` — le contenu pédagogique statique des 38 sous-modules
- `src/data/questions.js` — l'onboarding ; `src/data/glossaire.js` — le lexique
- `src/lib/adaptive.js` — maîtrise, révisions, recommandations, fast-track, série
- `src/lib/scoring.js` — détection du profil ; `src/lib/progression.js` — helpers d'avancement
- `src/lib/simulators.js` — calculs des 3 simulateurs
- `src/lib/coach.js` — le coach local (remplaçable par l'appel Claude)
- `src/lib/storage.js` — persistance localStorage v2 (+ migration v1, export/import)
- `src/services/claude.js` — system prompts prêts pour l'API Claude
- `src/components/` — écrans React ; `public/sw.js` — mode hors ligne
