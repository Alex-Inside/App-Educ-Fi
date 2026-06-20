import { useEffect, useState } from 'react'
import OnboardingFlow from './components/OnboardingFlow.jsx'
import Dashboard from './components/Dashboard.jsx'
import ModuleHome from './components/ModuleHome.jsx'
import SubModuleScreen from './components/SubModuleScreen.jsx'
import CoachDrawer from './components/CoachDrawer.jsx'
import { loadState, saveState, clearState } from './lib/storage.js'

// État global : profil, sous-modules complétés, historique coach.
// Persisté en localStorage (zéro backend) pour survivre aux rechargements.
export default function App() {
  const [state] = useState(() => loadState())
  const [profile, setProfile] = useState(state?.profile ?? null)
  const [completedSubs, setCompletedSubs] = useState(state?.completedSubs ?? [])
  const [coachHistory, setCoachHistory] = useState(state?.coachHistory ?? [])

  // view : null = dashboard · { moduleId } = page module · { moduleId, subId } = sous-module
  const [view, setView] = useState(null)

  useEffect(() => {
    saveState({ profile, completedSubs, coachHistory })
  }, [profile, completedSubs, coachHistory])

  const restart = () => {
    clearState()
    setProfile(null)
    setCompletedSubs([])
    setCoachHistory([])
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
  } else if (view?.subId) {
    screen = (
      <SubModuleScreen
        subId={view.subId}
        completedSubs={completedSubs}
        onBack={() => setView({ moduleId: view.moduleId })}
        onComplete={(subId) => {
          if (!completedSubs.includes(subId)) {
            setCompletedSubs([...completedSubs, subId])
          }
          setView({ moduleId: view.moduleId })
        }}
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
        onOpenModule={(moduleId) => setView({ moduleId })}
        onOpenSub={(subId) => setView({ moduleId: Number(subId.split('.')[0]), subId })}
        onRestart={restart}
      />
    )
  }

  return (
    <div className="app">
      {screen}
      {profile && (
        <CoachDrawer
          profile={profile}
          moduleId={view?.moduleId ?? null}
          history={coachHistory}
          setHistory={setCoachHistory}
        />
      )}
    </div>
  )
}
