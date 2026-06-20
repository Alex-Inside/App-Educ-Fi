# FinPath 🧭

App d'éducation financière pour jeunes adultes 18-25 ans : parcours de 9 modules
(38 sous-modules) en accès libre + coach conversationnel.

> Projet autonome, sans dépendance au reste du dépôt — déplaçable tel quel dans
> son propre repo.

## Lancer

```bash
npm install
npm run dev
```

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
Synthèse / Vulgarisation → Quiz de compréhension** (2 QCM, feedback immédiat,
explication alternative en cas d'erreur répétée).

L'onboarding (5 questions) détecte un profil — Débutant / Intermédiaire /
Avancé — qui **recommande un point de départ** (badge ⭐) et adapte le ton du
coach, sans rien bloquer.

## Architecture

- `src/data/curriculum.js` — les 9 modules et 38 sous-modules
- `src/data/content/` — contenu pédagogique par module (4 étapes + quiz),
  même contrat que le system prompt « module » pour le futur appel Claude
- `src/data/questions.js` — l'onboarding
- `src/lib/scoring.js` — détection de profil locale (format JSON du prompt onboarding)
- `src/lib/progression.js` — progression et suggestions de reprise
- `src/lib/coach.js` — coach simulé (~25 sujets), remplaçable par l'appel Claude
- `src/lib/storage.js` — persistance localStorage (profil, progression, historique coach)
- `src/services/claude.js` — les 3 system prompts de la spec, `callClaude()` à brancher
- `src/components/` — `OnboardingFlow`, `Dashboard`, `ProgressMap`, `ModuleHome`,
  `SubModuleScreen`, `QuizStep`, `CoachDrawer`

## Prochaines étapes

- Branchement de l'API Claude (backend proxy + clé) : onboarding, contenus
  personnalisés par profil, quiz adaptatifs, coach réellement conversationnel
- v2 contenu : argent en couple/coloc, investissement responsable,
  micro-entreprise, expatriation, transmission

## Palette

`#534AB7` accent · `#1D9E75` succès · `#FAFAF8` fond · `#1A1A2E` texte
