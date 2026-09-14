import { Reveal } from './ui/Reveal'
import { Eyebrow } from './ui/Eyebrow'

const QA = [
  {
    q: 'Do I need to install a separate app?',
    a: 'No. Everything opens right inside Telegram from a button on the bot — nothing to download.',
  },
  {
    q: 'What if the AI misreads a receipt?',
    a: 'Nothing gets saved automatically. Every receipt, statement, or proposed debt is shown to you for confirmation first — you check it and decide.',
  },
  {
    q: 'Does the AI ever touch actual money?',
    a: 'Never — it calculates and suggests, but no transaction (transfer, payment) ever goes through it. Only reading data and preparing it for your confirmation.',
  },
  {
    q: 'Who can see my data?',
    a: "Only the people you've added yourself. Sign-in is through your Telegram account — no passwords, no third-party accounts.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="block-snap relative flex min-h-[calc(100svh-4.5rem)] flex-col justify-center border-t border-border py-16">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal className="mb-12 text-center">
          <Eyebrow tone="purple">FAQ</Eyebrow>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl">The short version</h2>
        </Reveal>

        <div className="space-y-3">
          {QA.map(({ q, a }, i) => (
            <Reveal key={q} delay={i * 0.05}>
              <div className="rounded-2xl border border-border bg-surface/60 p-5 sm:p-6">
                <p className="text-sm font-semibold text-ink sm:text-base">{q}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{a}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
