import { useEffect, useState } from 'react'
import OnboardingFlow from './components/OnboardingFlow.jsx'
import Dashboard from './components/Dashboard.jsx'
import ModuleHome from './components/ModuleHome.jsx'
import SubModuleScreen from './components/SubModuleScreen.jsx'
import CoachDrawer from './components/CoachDrawer.jsx'
import Tools from './components/Tools.jsx'
import Glossaire from './components/Glossaire.jsx'
import { loadState, saveState, clearState, exportState, parseImportedState } from './lib/storage.js'
import { recordQuizResult, touchActivity } from './lib/adaptive.js'

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
  const [settings, setSettings] = useState(state?.settings ?? { theme: 'auto' })

  // view : null = dashboard · { moduleId } = module · { moduleId, subId } =
  // sous-module · { page: 'tools' | 'glossaire' } = écrans annexes
  const [view, setView] = useState(null)

  useEffect(() => {
    saveState({ profile, completedSubs, coachHistory, quizStats, activeDays, settings })
  }, [profile, completedSubs, coachHistory, quizStats, activeDays, settings])

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
    setView(null)
  }

  const completeSub = (subId, result) => {
    if (!completedSubs.includes(subId)) {
      setCompletedSubs([...completedSubs, subId])
    }
    if (result?.total) {
      setQuizStats((s) => recordQuizResult(s, subId, result))
    }
    setActiveDays((d) => touchActivity(d))
    setView({ moduleId: Number(subId.split('.')[0]) })
  }

  const openSub = (subId) => setView({ moduleId: Number(subId.split('.')[0]), subId })

  const handleExport = () =>
    exportState({ profile, completedSubs, coachHistory, quizStats, activeDays, settings })

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
  } else if (view?.subId) {
    screen = (
      <SubModuleScreen
        subId={view.subId}
        profile={profile}
        completedSubs={completedSubs}
        quizStats={quizStats}
        onBack={() => setView({ moduleId: view.moduleId })}
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
  } else {
    screen = (
      <Dashboard
        profile={profile}
        completedSubs={completedSubs}
        quizStats={quizStats}
        activeDays={activeDays}
        theme={settings.theme}
        onCycleTheme={cycleTheme}
        onOpenModule={(moduleId) => setView({ moduleId })}
        onOpenSub={openSub}
        onOpenTools={() => setView({ page: 'tools' })}
        onOpenGlossaire={() => setView({ page: 'glossaire' })}
        onExport={handleExport}
        onImport={handleImport}
        onRestart={restart}
      />
    )
  }

  return (
    <div className="app">
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
    </div>
  )
}
