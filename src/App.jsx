import { useEffect, useState } from 'react'
import OnboardingFlow from './components/OnboardingFlow.jsx'
import Dashboard from './components/Dashboard.jsx'
import ModuleHome from './components/ModuleHome.jsx'
import SubModuleScreen from './components/SubModuleScreen.jsx'
import CoachDrawer from './components/CoachDrawer.jsx'
import Tools from './components/Tools.jsx'
import Glossaire from './components/Glossaire.jsx'
import ActionPlan from './components/ActionPlan.jsx'
import MomentScreen from './components/MomentScreen.jsx'
import ParcoursTab from './components/ParcoursTab.jsx'
import RewardsTab from './components/RewardsTab.jsx'
import TabBar from './components/TabBar.jsx'
import DailyChallenge from './components/DailyChallenge.jsx'
import { loadState, saveState, clearState, exportState, parseImportedState } from './lib/storage.js'
import { recordQuizResult, touchActivity } from './lib/adaptive.js'
import { ACTIONS } from './data/actions.js'
import { lessonReward, REWARD, weekKey, dayKey, chestState, getDailyChallenge } from './lib/gamification.js'

const EMPTY_GAM = { xp: 0, coins: 0, weekKey: null, weekXP: 0, lastChallenge: null, lastChestWeek: null }

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
  const award = (xp, coins) =>
    setGam((g) => {
      const wk = weekKey()
      const sameWeek = g.weekKey === wk
      return {
        ...g,
        xp: g.xp + xp,
        coins: g.coins + coins,
        weekKey: wk,
        weekXP: (sameWeek ? g.weekXP : 0) + xp,
      }
    })

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
    if (!window.confirm('Repartir de zéro ? Ta progression sera effacée (pense à l’exporter avant).')) return
    clearState()
    setProfile(null)
    setCompletedSubs([])
    setCoachHistory([])
    setQuizStats({})
    setActiveDays([])
    setActionsDone([])
    setGam(EMPTY_GAM)
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
    if (!isRevision) {
      setCompletedSubs([...completedSubs, subId])
    }
    if (result?.total) {
      setQuizStats((s) => recordQuizResult(s, subId, result))
      const r = lessonReward({ firstTry: result.firstTry, total: result.total, isRevision })
      award(r.xp, r.coins)
    }
    setActiveDays((d) => touchActivity(d))
    // Retour au contexte d'origine : le Moment de vie si on en vient, sinon le module.
    setView(
      view?.fromMoment
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
      window.alert("Ce fichier n'est pas un export FinPath valide.")
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
  } else if (view?.subId) {
    screen = (
      <SubModuleScreen
        subId={view.subId}
        profile={profile}
        completedSubs={completedSubs}
        quizStats={quizStats}
        actionsDone={actionsDone}
        onActionDone={markActionDone}
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
      <main id="main">{screen}</main>
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
