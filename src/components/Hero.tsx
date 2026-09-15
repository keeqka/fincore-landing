import { Reveal } from './ui/Reveal'
import { Eyebrow } from './ui/Eyebrow'
import { Button } from './ui/Button'
import { Mascot } from './ui/Mascot'
import { TELEGRAM_BOT_URL } from '../lib/constants'

const CHIPS = ['фото чека', 'PDF-выписка', 'план погашения', 'лимиты по категориям']

export function Hero() {
  return (
    <section id="top" className="mx-auto grid max-w-[1120px] items-center gap-10 px-4 py-14 sm:px-10 sm:py-20 lg:grid-cols-2 lg:gap-14">
      <Reveal className="flex min-w-0 flex-col gap-6">
        <Eyebrow>Финансовый ИИ внутри Telegram</Eyebrow>
        <h1 className="text-[clamp(34px,6.2vw,62px)] leading-[1.03] font-bold tracking-[-0.03em] text-balance">
          Кидаешь чек. Получаешь ответ, что с деньгами делать.
        </h1>
        <p className="max-w-[46ch] text-[clamp(17px,2vw,21px)] leading-relaxed text-ink-muted text-pretty">
          Hlow Flow читает чеки и выписки, собирает план погашения долгов и держит бюджет под присмотром. Объясняет
          словами, а не таблицей. Без установки приложений.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <Button href={TELEGRAM_BOT_URL}>Открыть в Telegram</Button>
          <span className="text-sm text-ink-label">Бесплатно, 30 секунд на старт</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {CHIPS.map((c) => (
            <span key={c} className="rounded-lg bg-tint px-3 py-1.5 font-mono text-xs text-ink-muted">
              {c}
            </span>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.1} className="flex justify-center">
        <div className="aspect-4/5 w-full max-w-[340px] rounded-[28px] bg-tint p-4">
          <Mascot expression="calm" />
        </div>
      </Reveal>
    </section>
  )
}
