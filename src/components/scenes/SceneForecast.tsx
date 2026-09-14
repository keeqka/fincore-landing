import { NarrativeSection } from '../NarrativeSection'
import { Card } from '../ui/Card'

const STRATEGIES = [
  {
    name: 'Balanced',
    tone: 'text-blue-soft border-blue/30 bg-blue/10',
    payoff: 'Jul 14, 2027',
    overpay: '172,947 ₸',
    note: '~15% of your surplus on top of minimum payments — your safety buffer stays intact',
  },
  {
    name: 'Aggressive',
    tone: 'text-purple-soft border-purple/30 bg-purple/10',
    payoff: 'Jan 14, 2027',
    overpay: '77,787 ₸',
    note: '~65% of your surplus — debt clears faster, interest paid is almost a third',
  },
]

export function SceneForecast() {
  return (
    <NarrativeSection
      step="04"
      eyebrow="Forecast & debts"
      title={'See not just "how much you owe" but "when you\'ll be done"'}
      description="The avalanche method: highest-interest debt first. Two strategies to pick from — with an exact payoff date, total interest, and a month-by-month payoff chart."
      tone="purple"
    >
      <Card className="p-6 sm:p-8">
        <div className="mb-6">
          <p className="mb-3 text-xs font-medium tracking-wide text-muted uppercase">Balance over time</p>
          <svg viewBox="0 0 560 180" className="h-40 w-full sm:h-48" preserveAspectRatio="none">
            <defs>
              <linearGradient id="fillBlue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#5b8cff" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#5b8cff" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="fillPurple" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#a15bff" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#a15bff" stopOpacity="0" />
              </linearGradient>
            </defs>

            {[36, 72, 108, 144].map((y) => (
              <line key={y} x1="0" y1={y} x2="560" y2={y} stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
            ))}

            <path d="M0,20 C120,35 200,70 280,95 C360,120 460,150 560,168 L560,180 L0,180 Z" fill="url(#fillBlue)" />
            <path d="M0,20 C120,35 200,70 280,95 C360,120 460,150 560,168" fill="none" stroke="#8fb3ff" strokeWidth="2.5" strokeLinecap="round" />

            <path d="M0,20 C90,55 160,110 220,140 C280,165 340,175 400,178 L400,180 L0,180 Z" fill="url(#fillPurple)" />
            <path d="M0,20 C90,55 160,110 220,140 C280,165 340,175 400,178" fill="none" stroke="#c79bff" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
          <div className="mt-2 flex gap-5 text-[11px] text-muted">
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-3 rounded-full bg-blue-soft" /> Balanced
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-3 rounded-full bg-purple-soft" /> Aggressive
            </span>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {STRATEGIES.map((s) => (
            <div key={s.name} className={`rounded-2xl border p-4 ${s.tone}`}>
              <p className="mb-3 text-sm font-semibold text-ink">{s.name}</p>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <p className="text-[11px] text-muted">Paid off by</p>
                  <p className="font-semibold text-ink">{s.payoff}</p>
                </div>
                <div>
                  <p className="text-[11px] text-muted">Interest paid</p>
                  <p className="font-semibold text-ink">{s.overpay}</p>
                </div>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-muted">{s.note}</p>
            </div>
          ))}
        </div>
      </Card>
    </NarrativeSection>
  )
}
