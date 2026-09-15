import { Reveal } from './ui/Reveal'
import { Button } from './ui/Button'
import { Mascot } from './ui/Mascot'
import { TELEGRAM_BOT_URL } from '../lib/constants'

export function FinalCTA() {
  return (
    <section className="mx-auto flex max-w-[1120px] flex-col items-center gap-5 px-4 py-16 text-center sm:px-10 sm:py-24">
      <Reveal className="flex flex-col items-center gap-5">
        <div className="h-[165px] w-[132px]">
          <Mascot expression="happy" />
        </div>
        <h2 className="max-w-[22ch] text-[clamp(28px,4.6vw,46px)] font-medium tracking-[-0.025em] text-balance">
          Первый чек разберём прямо сейчас
        </h2>
        <p className="max-w-[40ch] text-[17px] leading-relaxed text-ink-muted text-pretty">
          Ничего не устанавливать, ничего не подключать. Открываешь чат и кидаешь фото.
        </p>
        <Button href={TELEGRAM_BOT_URL} className="px-7 py-4">
          Открыть в Telegram
        </Button>
      </Reveal>
    </section>
  )
}
