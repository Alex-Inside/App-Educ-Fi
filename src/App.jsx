import { useEffect, useState, lazy, Suspense } from 'react'
// Écrans du premier rendu : chargés d'emblée.
import OnboardingFlow from './components/OnboardingFlow.jsx'
import Dashboard from './components/Dashboard.jsx'
import CoachDrawer from './components/CoachDrawer.jsx'
import TabBar from './components/TabBar.jsx'
// Écrans secondaires : chargés à la demande (code-splitting). Le gros contenu
// des leçons ne pèse donc plus sur le chargement initial.
const ModuleHome = lazy(() => import('./components/ModuleHome.jsx'))
const SubModuleScreen = lazy(() => import('./components/SubModuleScreen.jsx'))
const Tools = lazy(() => import('./components/Tools.jsx'))
const Glossaire = lazy(() => import('./components/Glossaire.jsx'))
const ActionPlan = lazy(() => import('./components/ActionPlan.jsx'))
const MomentScreen = lazy(() => import('./components/MomentScreen.jsx'))
const ParcoursTab = lazy(() => import('./components/ParcoursTab.jsx'))
const RewardsTab = lazy(() => import('./components/RewardsTab.jsx'))
const About = lazy(() => import('./components/About.jsx'))
const Certificate = lazy(() => import('./components/Certificate.jsx'))
const FinalCelebration = lazy(() => import('./components/FinalCelebration.jsx'))
const DailyChallenge = lazy(() => import('./components/DailyChallenge.jsx'))
const Shop = lazy(() => import('./components/Shop.jsx'))
import { loadState, saveState, clearState, exportState, parseImportedState } from './lib/storage.js'
import { recordQuizResult, touchActivity } from './lib/adaptive.js'
import { ACTIONS } from './data/actions.js'
import { TOTAL_SOUS_MODULES } from './data/curriculum.js'
import {
  lessonReward, REWARD, weekKey, dayKey, chestState, getDailyChallenge,
  isXpBoostActive, pendingFreeze, SHOP,
} from './lib/gamification.js'

const EMPTY_GAM = {
  xp: 0, coins: 0, weekKey: null, weekXP: 0, lastChallenge: null, lastChestWeek: null,
  jokers: 0, freezes: 0, xpBoostUntil: 0, themes: [],
}

const THEMES = ['auto', 'light', 'dark']

// État global : profil, progression, résultats de quiz (maîtrise), activité,
// historique coach, préférences. Persisté en localStorage (zéro backend).
export default function App() {
  const [state] = useState(() => loadState())
  const [profile, setProfile] = useState(state?.profile ?? null)
  const [completedSubs, setCompletedSubs] = useState(state?.completedSubs ?? [])
  const [coachHistory, setCoachHistory] = useState(state?.coachHistory ?? [])
  const [quizStats, setQuizStats] = useState(state?.quizStats ?? {})
  const [activeDays, setActiveDays] = useState(state?.activeDays ?? [])
  const [actionsDone, setActionsDone] = useState(state?.actionsDone ?? [])
  const [gam, setGam] = useState(state?.gam ?? EMPTY_GAM)
  const [settings, setSettings] = useState(state?.settings ?? { theme: 'auto' })

  // view : null = écran racine (piloté par `tab`) · { moduleId } = module ·
  // { moduleId, subId } = sous-module · { page: … } = écrans annexes.
  const [view, setView] = useState(null)
  // Onglet racine actif quand view === null : accueil · parcours · recompenses.
  const [tab, setTab] = useState('accueil')

  const goTab = (t) => {
    setView(null)
    setTab(t)
  }

  useEffect(() => {
    saveState({ profile, completedSubs, coachHistory, quizStats, activeDays, actionsDone, gam, settings })
  }, [profile, completedSubs, coachHistory, quizStats, activeDays, actionsDone, gam, settings])

  // Crédite XP + pièces, en tenant à jour le compteur d'XP de la semaine (ligue/coffre).
  // Le boost « Double XP » de la boutique double les gains d'XP quand il est actif.
  const award = (xp, coins) =>
    setGam((g) => {
      const wk = weekKey()
      const sameWeek = g.weekKey === wk
      const gained = isXpBoostActive(g) ? xp * 2 : xp
      return {
        ...g,
        xp: g.xp + gained,
        coins: g.coins + coins,
        weekKey: wk,
        weekXP: (sameWeek ? g.weekXP : 0) + gained,
      }
    })

  // Applique le thème coloré choisi (boutique) via un attribut sur <html>.
  useEffect(() => {
    const root = document.documentElement
    if (settings.accent && settings.accent !== 'foret') root.setAttribute('data-accent', settings.accent)
    else root.removeAttribute('data-accent')
  }, [settings.accent])

  // Gel de série : au chargement, comble un éventuel trou d'un jour (une fois).
  useEffect(() => {
    const day = pendingFreeze(activeDays, gam.freezes)
    if (day) {
      setActiveDays((d) => (d.includes(day) ? d : [...d, day]))
      setGam((g) => ({ ...g, freezes: Math.max(0, g.freezes - 1) }))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Achat en boutique : débite les pièces et applique l'effet.
  const buyItem = (item) => {
    if (gam.coins < item.price) return
    if (item.kind === 'theme') {
      if (!gam.themes.includes(item.accent)) {
        setGam((g) => ({ ...g, coins: g.coins - item.price, themes: [...g.themes, item.accent] }))
      }
      setSettings((s) => ({ ...s, accent: item.accent }))
      return
    }
    setGam((g) => {
      const next = { ...g, coins: g.coins - item.price }
      if (item.kind === 'boost') next.xpBoostUntil = Date.now() + 24 * 3600 * 1000
      if (item.kind === 'stack') next[item.field] = (g[item.field] ?? 0) + 1
      return next
    })
  }

  const applyAccent = (accent) => setSettings((s) => ({ ...s, accent }))
  const useJoker = () => setGam((g) => ({ ...g, jokers: Math.max(0, g.jokers - 1) }))

  // Thème : auto suit le système, sinon on force via l'attribut data-theme.
  useEffect(() => {
    const root = document.documentElement
    if (settings.theme === 'auto') root.removeAttribute('data-theme')
    else root.setAttribute('data-theme', settings.theme)
  }, [settings.theme])

  const cycleTheme = () => {
    const next = THEMES[(THEMES.indexOf(settings.theme) + 1) % THEMES.length]
    setSettings({ ...settings, theme: next })
  }

  const restart = () => {
    if (!window.confirm('Tout remettre à zéro ? Ta progression sera effacée (pense à l’exporter avant).')) return
    clearState()
    setProfile(null)
    setCompletedSubs([])
    setCoachHistory([])
    setQuizStats({})
    setActiveDays([])
    setActionsDone([])
    setGam(EMPTY_GAM)
    setSettings((s) => ({ ...s, accent: 'foret' }))
    setView(null)
  }

  // Défi du jour : crédite +20 XP une seule fois par jour.
  const challengeDoneToday = gam.lastChallenge === dayKey()
  const finishChallenge = () => {
    if (challengeDoneToday) return
    award(REWARD.challenge.xp, REWARD.challenge.coins)
    setGam((g) => ({ ...g, lastChallenge: dayKey() }))
    setActiveDays((d) => touchActivity(d))
  }

  // Coffre hebdo : récupère les pièces une fois par semaine.
  const claimChest = () => {
    const chest = chestState(gam)
    if (!chest.available) return
    award(0, chest.coins)
    setGam((g) => ({ ...g, lastChestWeek: chest.week }))
  }

  const markActionDone = (subId) => {
    setActionsDone((a) => (a.includes(subId) ? a : [...a, subId]))
  }

  const completeSub = (subId, result) => {
    const isRevision = completedSubs.includes(subId)
    const nextCompleted = isRevision ? completedSubs : [...completedSubs, subId]
    if (!isRevision) {
      setCompletedSubs(nextCompleted)
    }
    if (result?.total) {
      setQuizStats((s) => recordQuizResult(s, subId, result))
      const r = lessonReward({ firstTry: result.firstTry, total: result.total, isRevision })
      award(r.xp, r.coins)
    }
    setActiveDays((d) => touchActivity(d))
    // Cette leçon vient-elle de compléter TOUT le parcours ? → célébration.
    const justFinishedAll = !isRevision && nextCompleted.length >= TOTAL_SOUS_MODULES
    // Retour au contexte d'origine : le Moment de vie si on en vient, sinon le module.
    setView(
      justFinishedAll
        ? { page: 'complete' }
        : view?.fromMoment
          ? { page: 'moment', momentId: view.fromMoment }
          : { moduleId: Number(subId.split('.')[0]) }
    )
  }

  const openSub = (subId) => setView({ moduleId: Number(subId.split('.')[0]), subId })

  const handleExport = () =>
    exportState({ profile, completedSubs, coachHistory, quizStats, activeDays, actionsDone, gam, settings })

  const handleImport = async (file) => {
    const imported = parseImportedState(await file.text())
    if (!imported?.profile) {
      window.alert("Ce fichier n'est pas un export Édufi valide.")
      return
    }
    setProfile(imported.profile)
    setCompletedSubs(imported.completedSubs)
    setCoachHistory(imported.coachHistory)
    setQuizStats(imported.quizStats)
    setActiveDays(imported.activeDays)
    setActionsDone(imported.actionsDone)
    setGam(imported.gam ?? EMPTY_GAM)
    setSettings(imported.settings)
    setView(null)
  }

  let screen
  if (!profile) {
    screen = (
      <OnboardingFlow
        onFinished={(detected, moduleId) => {
          setProfile(detected)
          setView(moduleId ? { moduleId } : null)
        }}
      />
    )
  } else if (view?.page === 'tools') {
    screen = <Tools onBack={() => setView(null)} />
  } else if (view?.page === 'glossaire') {
    screen = <Glossaire onBack={() => setView(null)} onOpenSub={openSub} />
  } else if (view?.page === 'moment') {
    screen = (
      <MomentScreen
        momentId={view.momentId}
        completedSubs={completedSubs}
        actionsDone={actionsDone}
        onOpenSub={(subId) =>
          setView({ moduleId: Number(subId.split('.')[0]), subId, fromMoment: view.momentId })
        }
        onBack={() => setView(null)}
      />
    )
  } else if (view?.page === 'challenge') {
    screen = (
      <DailyChallenge
        questions={getDailyChallenge()}
        alreadyDone={challengeDoneToday}
        onFinish={finishChallenge}
        onBack={() => setView(null)}
      />
    )
  } else if (view?.page === 'shop') {
    screen = (
      <Shop
        gam={gam}
        activeAccent={settings.accent}
        onBuy={buyItem}
        onApplyAccent={applyAccent}
        onBack={() => setView(null)}
      />
    )
  } else if (view?.page === 'actions') {
    screen = (
      <ActionPlan
        completedSubs={completedSubs}
        actionsDone={actionsDone}
        onActionDone={markActionDone}
        onOpenSub={openSub}
        onOpenTools={() => setView({ page: 'tools' })}
        onBack={() => setView(null)}
      />
    )
  } else if (view?.page === 'about') {
    screen = <About onBack={() => setView(null)} />
  } else if (view?.page === 'certificate') {
    screen = (
      <Certificate
        moduleId={view.moduleId}
        completedSubs={completedSubs}
        quizStats={quizStats}
        onBack={() => setView(view.moduleId ? { moduleId: view.moduleId } : null)}
      />
    )
  } else if (view?.page === 'complete') {
    screen = (
      <FinalCelebration
        completedSubs={completedSubs}
        quizStats={quizStats}
        gam={gam}
        onOpenCertificate={(moduleId) => setView({ page: 'certificate', moduleId })}
        onBack={() => setView(null)}
      />
    )
  } else if (view?.subId) {
    screen = (
      <SubModuleScreen
        subId={view.subId}
        profile={profile}
        completedSubs={completedSubs}
        quizStats={quizStats}
        actionsDone={actionsDone}
        onActionDone={markActionDone}
        jokers={gam.jokers}
        onUseJoker={useJoker}
        onBack={() =>
          setView(
            view.fromMoment
              ? { page: 'moment', momentId: view.fromMoment }
              : { moduleId: view.moduleId }
          )
        }
        onComplete={completeSub}
      />
    )
  } else if (view?.moduleId) {
    screen = (
      <ModuleHome
        moduleId={view.moduleId}
        completedSubs={completedSubs}
        onOpenSub={(subId) => setView({ moduleId: view.moduleId, subId })}
        onOpenCertificate={() => setView({ page: 'certificate', moduleId: view.moduleId })}
        onBack={() => setView(null)}
      />
    )
  } else if (tab === 'parcours') {
    screen = (
      <ParcoursTab
        profile={profile}
        completedSubs={completedSubs}
        onOpenSub={openSub}
        onOpenMoment={(momentId) => setView({ page: 'moment', momentId })}
      />
    )
  } else if (tab === 'recompenses') {
    screen = (
      <RewardsTab
        completedSubs={completedSubs}
        quizStats={quizStats}
        activeDays={activeDays}
        gam={gam}
        challengeDoneToday={challengeDoneToday}
        onOpenChallenge={() => setView({ page: 'challenge' })}
        onClaimChest={claimChest}
        onOpenShop={() => setView({ page: 'shop' })}
      />
    )
  } else {
    screen = (
      <Dashboard
        profile={profile}
        completedSubs={completedSubs}
        quizStats={quizStats}
        activeDays={activeDays}
        gam={gam}
        challengeDoneToday={challengeDoneToday}
        actionsDone={actionsDone.length}
        actionsPending={completedSubs.filter((s) => ACTIONS[s] && !actionsDone.includes(s)).length}
        theme={settings.theme}
        onCycleTheme={cycleTheme}
        onOpenSub={openSub}
        onOpenParcours={() => goTab('parcours')}
        onOpenChallenge={() => setView({ page: 'challenge' })}
        onOpenTools={() => setView({ page: 'tools' })}
        onOpenGlossaire={() => setView({ page: 'glossaire' })}
        onOpenActions={() => setView({ page: 'actions' })}
        onOpenAbout={() => setView({ page: 'about' })}
        onOpenComplete={() => setView({ page: 'complete' })}
        onExport={handleExport}
        onImport={handleImport}
        onRestart={restart}
      />
    )
  }

  // La barre d'onglets n'apparaît que sur les écrans racines (pas en leçon).
  const showTabBar = profile && view === null

  return (
    <div className={`app ${showTabBar ? 'has-tabbar' : ''}`}>
      <main id="main">
        <Suspense fallback={<div className="lazy-fallback" aria-busy="true">Chargement…</div>}>
          {screen}
        </Suspense>
      </main>
      {profile && (
        <CoachDrawer
          profile={profile}
          moduleId={view?.moduleId ?? null}
          history={coachHistory}
          setHistory={setCoachHistory}
          onOpenSub={openSub}
        />
      )}
      {showTabBar && <TabBar active={tab} onChange={goTab} />}
    </div>
  )
}
