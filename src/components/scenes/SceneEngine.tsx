import { Camera, CheckCircle2, ScanLine, Tags } from 'lucide-react'
import { NarrativeSection } from '../NarrativeSection'
import { Card } from '../ui/Card'

const STEPS = [
  { icon: Camera, title: 'Sends over a receipt or statement', text: 'A photo, PDF, or screenshot — straight from Telegram or the app' },
  { icon: ScanLine, title: 'Scans and reads it', text: 'Picks out the amount, date, and merchant — even from a statement with dozens of transactions' },
  { icon: Tags, title: 'Sorts it into categories', text: 'Figures out the category on its own — nothing to type by hand' },
  { icon: CheckCircle2, title: 'Shows it for you to confirm', text: 'You review and save — the AI never writes to your budget without you' },
]

export function SceneEngine() {
  return (
    <NarrativeSection
      step="02"
      eyebrow="The AI engine"
      title="Claude scans, reads, and sorts it out — for you"
      description="Under the hood runs Claude, the model from Anthropic. It reads the whole document — a receipt, a payment screenshot, or a full month's bank statement — and turns it into structured data in seconds."
      tone="purple"
    >
      <Card className="p-6 sm:p-8">
        <div className="grid gap-10 sm:grid-cols-[0.9fr_1.1fr] sm:items-center">
          {/* Scanning receipt visual */}
          <div className="relative mx-auto h-64 w-44 overflow-hidden rounded-2xl border border-border-strong bg-surface-2 shadow-2xl">
            <div className="space-y-2 p-4">
              <div className="h-2.5 w-2/3 rounded bg-white/15" />
              <div className="mt-3 space-y-1.5">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className="flex justify-between">
                    <div className="h-1.5 w-16 rounded bg-white/10" />
                    <div className="h-1.5 w-8 rounded bg-white/10" />
                  </div>
                ))}
              </div>
              <div className="mt-3 h-2 w-1/2 rounded bg-white/20" />
            </div>
            <div className="animate-scan absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-transparent via-purple/40 to-transparent" />
            <div className="absolute inset-0 rounded-2xl ring-1 ring-purple/30" />
          </div>

          <ol className="space-y-6">
            {STEPS.map(({ icon: Icon, title, text }, i) => (
              <li key={title} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-purple/30 bg-purple/10 text-purple-soft">
                    <Icon className="h-4 w-4" />
                  </span>
                  {i < STEPS.length - 1 && <span className="mt-1 h-full w-px flex-1 bg-border-strong" />}
                </div>
                <div className="pb-1">
                  <p className="text-sm font-semibold text-ink">{title}</p>
                  <p className="mt-1 text-sm text-muted">{text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Card>
    </NarrativeSection>
  )
}
