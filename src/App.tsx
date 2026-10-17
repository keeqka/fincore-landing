import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { InputSection } from './components/InputSection'
import { MascotSection } from './components/MascotSection'
import { Budget } from './components/Budget'
import { Debts } from './components/Debts'
import { Advisor } from './components/Advisor'
import { Goals } from './components/Goals'
import { Learn } from './components/Learn'
import { Family } from './components/Family'
import { Support } from './components/Support'
import { FAQ } from './components/FAQ'
import { FinalCTA } from './components/FinalCTA'
import { Footer } from './components/Footer'
import { PrivacyPage } from './pages/PrivacyPage'
import { SupportPage } from './pages/SupportPage'

/** Роутинг без зависимостей: три пути, остальное ведёт на лендинг. */
function route() {
  const p = window.location.pathname.replace(/\/+$/, '')
  if (p === '/privacy') return 'privacy'
  if (p === '/support') return 'support'
  return 'home'
}

function App() {
  const r = route()
  if (r === 'privacy') return <PrivacyPage />
  if (r === 'support') return <SupportPage />
  return (
    <div className="min-h-screen bg-paper">
      <Header />
      <main>
        <Hero />
        <InputSection />
        <MascotSection />
        <Budget />
        <Debts />
        <Advisor />
        <Goals />
        <Learn />
        <Family />
        <Support />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
