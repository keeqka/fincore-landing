import { motion } from 'framer-motion'
import { Camera, CheckCircle2, ScanLine, Tags } from 'lucide-react'
import { NarrativeSection } from '../NarrativeSection'
import { Card } from '../ui/Card'
import { AppFrame } from '../ui/AppFrame'

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
      <div className="grid gap-10 sm:grid-cols-[0.85fr_1.15fr] sm:items-center">
        <AppFrame path="/finances" />

        <Card className="p-6 sm:p-8">
          <motion.ol
            className="space-y-6"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            transition={{ staggerChildren: 0.25 }}
          >
            {STEPS.map(({ icon: Icon, title, text }, i) => (
              <motion.li
                key={title}
                className="flex gap-4"
                variants={{ hidden: { opacity: 0, x: -12 }, show: { opacity: 1, x: 0 } }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
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
              </motion.li>
            ))}
          </motion.ol>
        </Card>
      </div>
    </NarrativeSection>
  )
}
