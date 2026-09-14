import { Send } from 'lucide-react'
import { NarrativeSection } from '../NarrativeSection'
import { Card } from '../ui/Card'

export function SceneResult() {
  return (
    <NarrativeSection
      step="05"
      eyebrow="The result"
      title="Peace of mind, in Telegram."
      description="Once a week and at month's end — a short summary right in the bot's chat: how the period went, plus one concrete tip for the next one. Nothing to open — your status is already calculated and waiting in the app."
      tone="green"
    >
      <Card className="mx-auto max-w-md overflow-hidden">
        <div className="flex items-center gap-2 bg-[#17212b] px-4 py-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-blue to-purple text-xs font-semibold text-white">
            FA
          </span>
          <div>
            <p className="text-sm font-medium text-ink">FinCore AI</p>
            <p className="text-[11px] text-muted">bot</p>
          </div>
        </div>
        <div className="bg-[#0e1621] p-4">
          <div className="max-w-[90%] rounded-2xl rounded-bl-sm bg-[#182533] px-4 py-3 text-sm leading-relaxed text-ink">
            🟢 <span className="font-semibold">This week's summary</span>
            <p className="mt-2 text-muted">
              A steady week: spending stayed below income, debt payments went out on time. Your surplus grew by{' '}
              <span className="text-green font-medium">12%</span>.
            </p>
            <p className="mt-2 text-ink">💡 Tip: put the difference toward your highest-rate loan — you'll close it out 2 months sooner.</p>
            <p className="mt-2 text-right text-[10px] text-faint">7:00 PM</p>
          </div>
        </div>
        <div className="flex items-center gap-2 border-t border-white/5 bg-[#17212b] px-4 py-3">
          <div className="h-8 flex-1 rounded-full bg-white/5" />
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue">
            <Send className="h-3.5 w-3.5 text-white" />
          </span>
        </div>
      </Card>
    </NarrativeSection>
  )
}
