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

function App() {
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
