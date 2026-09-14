import { AlertTriangle, Clock, Receipt, Table2, X } from 'lucide-react'
import { NarrativeSection } from '../NarrativeSection'
import { Card } from '../ui/Card'

const PAIN_POINTS = [
  { icon: Receipt, text: 'Receipts vanish before they ever make it into a spreadsheet' },
  { icon: Table2, text: "That Excel file you open once a quarter, if that" },
  { icon: Clock, text: "You remember a loan payment right after you've missed it" },
  { icon: AlertTriangle, text: "By mid-month it's already unclear where the money went" },
]

export function SceneChaos() {
  return (
    <NarrativeSection
      step="01"
      eyebrow="The problem"
      title="The usual mess: receipts, spreadsheets, missed payments"
      description="Manual budgeting works for the first week. After that you either give up, or burn your evenings on it instead of just knowing where your money went."
      tone="blue"
    >
      <Card className="p-6 sm:p-8">
        <div className="grid gap-8 sm:grid-cols-[1.1fr_1fr] sm:items-center">
          {/* Chaos visual: scattered, tilted receipt/table fragments */}
          <div className="relative h-56 sm:h-64">
            <div className="absolute left-2 top-4 w-40 -rotate-6 rounded-xl border border-border-strong bg-surface-2 p-3 shadow-xl">
              <div className="mb-2 h-2 w-16 rounded bg-white/15" />
              <div className="space-y-1.5">
                <div className="h-1.5 w-full rounded bg-white/10" />
                <div className="h-1.5 w-3/4 rounded bg-white/10" />
                <div className="h-1.5 w-5/6 rounded bg-white/10" />
              </div>
              <div className="mt-2 h-2 w-10 rounded bg-red-400/40" />
            </div>

            <div className="absolute right-0 top-0 w-36 rotate-[9deg] rounded-xl border border-border-strong bg-surface-2 p-3 shadow-xl">
              <Receipt className="mb-2 h-4 w-4 text-muted" />
              <div className="space-y-1.5">
                <div className="h-1.5 w-full rounded bg-white/10" />
                <div className="h-1.5 w-2/3 rounded bg-white/10" />
              </div>
            </div>

            <div className="absolute bottom-2 left-10 w-44 rotate-3 rounded-xl border border-border-strong bg-surface-2 p-3 shadow-xl">
              <div className="mb-1.5 flex items-center gap-1.5 text-[11px] font-medium text-red-400">
                <X className="h-3 w-3 shrink-0" /> Payment overdue
              </div>
              <div className="h-1.5 w-full rounded bg-white/10" />
              <div className="mt-1.5 h-1.5 w-1/2 rounded bg-white/10" />
            </div>

            <div className="absolute bottom-8 right-4 w-28 -rotate-[8deg] rounded-xl border border-border-strong bg-surface-2 p-2.5 shadow-xl">
              <Table2 className="h-4 w-4 text-muted" />
              <div className="mt-1.5 grid grid-cols-3 gap-1">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div key={i} className="h-2 rounded-sm bg-white/10" />
                ))}
              </div>
            </div>
          </div>

          <ul className="space-y-4">
            {PAIN_POINTS.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-start gap-3 text-sm text-muted">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/5 text-red-400/80">
                  <Icon className="h-3.5 w-3.5" />
                </span>
                {text}
              </li>
            ))}
          </ul>
        </div>
      </Card>
    </NarrativeSection>
  )
}
