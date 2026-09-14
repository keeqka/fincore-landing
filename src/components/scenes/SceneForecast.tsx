import { Sparkles } from 'lucide-react'
import { NarrativeSection } from '../NarrativeSection'
import { AppFrame } from '../ui/AppFrame'

export function SceneForecast() {
  return (
    <NarrativeSection
      step="04"
      eyebrow="Forecast & debts"
      title={'See not just "how much you owe" but "when you\'ll be done"'}
      description="The avalanche method: highest-interest debt first. Two strategies to pick from — with an exact payoff date, total interest, and a month-by-month payoff chart."
      tone="purple"
    >
      <div className="flex flex-col items-center gap-3">
        <AppFrame path="/debts" bezel={false} />
        <span className="inline-flex items-center gap-1.5 rounded-full border border-border-strong bg-white/5 px-3 py-1 text-[11px] font-medium text-muted">
          <Sparkles className="h-3 w-3 text-purple-soft" />
          The real app, not a mockup
        </span>
      </div>
    </NarrativeSection>
  )
}
