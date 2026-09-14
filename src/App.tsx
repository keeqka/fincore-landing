import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { ProcessTimeline } from './components/ProcessTimeline'
import { SceneChaos } from './components/scenes/SceneChaos'
import { SceneEngine } from './components/scenes/SceneEngine'
import { SceneAdvisor } from './components/scenes/SceneAdvisor'
import { SceneForecast } from './components/scenes/SceneForecast'
import { SceneResult } from './components/scenes/SceneResult'
import { FeaturesRecap } from './components/FeaturesRecap'
import { FAQ } from './components/FAQ'
import { FinalCTA } from './components/FinalCTA'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="bg-noise min-h-screen bg-bg">
      <Header />
      <main>
        <Hero />
        <ProcessTimeline>
          <SceneChaos />
          <SceneEngine />
          <SceneAdvisor />
          <SceneForecast />
          <SceneResult />
        </ProcessTimeline>
        <FeaturesRecap />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
