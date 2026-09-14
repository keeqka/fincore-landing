import { Bot, TrendingDown, Wallet } from 'lucide-react'
import { NarrativeSection } from '../NarrativeSection'
import { Card } from '../ui/Card'

export function SceneAdvisor() {
  return (
    <NarrativeSection
      step="03"
      eyebrow="The AI advisor"
      title="Ask — and get a real answer, not an excuse"
      description="The advisor sees your actual income, expenses, and debts, so it answers with numbers, not vague reassurance. It can model a purchase, offer to log a debt, or check the web for a general question."
      tone="blue"
    >
      <Card className="mx-auto max-w-lg p-4 sm:p-6">
        <div className="mb-4 flex items-center gap-2 border-b border-border pb-3">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-blue to-purple">
            <Bot className="h-3.5 w-3.5 text-white" />
          </span>
          <span className="text-sm font-medium text-ink">Finance advisor</span>
          <span className="ml-auto text-[11px] text-faint">Claude Sonnet</span>
        </div>

        <div className="space-y-4">
          <div className="ml-auto max-w-[85%] rounded-2xl rounded-br-sm bg-white/8 px-4 py-2.5 text-sm text-ink">
            Can I afford a MacBook for 650,000 on a 6-month installment plan?
          </div>

          <div className="max-w-[92%] rounded-2xl rounded-bl-sm border border-border bg-surface-2 px-4 py-3 text-sm leading-relaxed text-ink">
            It's affordable. Your monthly surplus drops from 187,000 to
            <span className="font-semibold text-blue-soft"> 79,833 ₸</span> for the duration of the plan — your safety buffer stays untouched.
            <div className="mt-3 grid grid-cols-2 gap-2">
              <div className="rounded-xl border border-border bg-white/[0.03] p-2.5">
                <div className="flex items-center gap-1.5 text-[11px] text-muted">
                  <Wallet className="h-3 w-3" /> New status
                </div>
                <div className="mt-1 text-sm font-semibold text-green">Stable</div>
              </div>
              <div className="rounded-xl border border-border bg-white/[0.03] p-2.5">
                <div className="flex items-center gap-1.5 text-[11px] text-muted">
                  <TrendingDown className="h-3 w-3" /> Payment/mo
                </div>
                <div className="mt-1 text-sm font-semibold text-ink">108,333 ₸</div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </NarrativeSection>
  )
}
