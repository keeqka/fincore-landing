import { Sparkles } from 'lucide-react'
import { NarrativeSection } from '../NarrativeSection'
import { AppFrame } from '../ui/AppFrame'

export function SceneAdvisor() {
  return (
    <NarrativeSection
      step="03"
      eyebrow="The AI advisor"
      title="Ask — and get a real answer, not an excuse"
      description="The advisor sees your actual income, expenses, and debts, so it answers with numbers, not vague reassurance. It can model a purchase, offer to log a debt, or check the web for a general question."
      tone="blue"
    >
      <div className="flex flex-col items-center gap-3">
        <AppFrame path="/chat" bezel={false} />
        <span className="inline-flex items-center gap-1.5 rounded-full border border-border-strong bg-white/5 px-3 py-1 text-[11px] font-medium text-muted">
          <Sparkles className="h-3 w-3 text-blue-soft" />
          The real app, not a mockup
        </span>
      </div>
    </NarrativeSection>
  )
}
