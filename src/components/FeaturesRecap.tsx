import { Activity, Bot, CreditCard, Receipt, ShieldCheck, Target } from 'lucide-react'
import { Reveal } from './ui/Reveal'
import { Eyebrow } from './ui/Eyebrow'

const FEATURES = [
  { icon: CreditCard, title: 'Debts & strategies', text: 'Balanced and aggressive payoff strategies, a payoff date, a month-by-month chart' },
  { icon: Receipt, title: 'Receipts & statements', text: 'A receipt photo or a PDF statement for the month — the AI sorts out every transaction' },
  { icon: Bot, title: 'AI advisor', text: 'Answers budget questions with real numbers, not guesses' },
  { icon: Activity, title: 'Health status', text: 'A green-to-red indicator, refreshed weekly and on demand' },
  { icon: Target, title: 'Goals & savings', text: 'A savings plan and matching bank products for a specific goal' },
  { icon: ShieldCheck, title: 'Confirm before it counts', text: 'No entry and no deletion happens without your confirmation' },
]

export function FeaturesRecap() {
  return (
    <section
      id="features"
      className="block-snap relative flex min-h-[calc(100svh-4.5rem)] flex-col justify-center border-t border-border py-16"
    >
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto mb-14 max-w-xl text-center">
          <Eyebrow tone="blue">Everything in one place</Eyebrow>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl">The full set, no extra tabs</h2>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 0.05}>
              <div className="h-full rounded-2xl border border-border bg-surface/60 p-6 transition-colors hover:border-border-strong">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue/25 bg-blue/10 text-blue-soft">
                  <Icon className="h-4.5 w-4.5" />
                </span>
                <p className="mt-4 text-sm font-semibold text-ink">{title}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
