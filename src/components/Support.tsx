import { Reveal } from './ui/Reveal'
import { Eyebrow } from './ui/Eyebrow'
import { Button } from './ui/Button'
import { TELEGRAM_REQUEST_URL } from '../lib/constants'

/**
 * По коду оплата сейчас только отмечает, что семья поддерживает проект.
 * Функций за замком нет, поэтому здесь нельзя писать «Pro за 500 ⭐».
 */
export function Support() {
  return (
    <section id="price" className="border-y border-line bg-card">
      <div className="mx-auto grid max-w-[1120px] items-center gap-10 px-4 py-14 sm:px-10 sm:py-20 md:grid-cols-2 md:gap-14">
        <Reveal className="flex min-w-0 flex-col gap-3.5">
          <Eyebrow>Цена</Eyebrow>
          <h2 className="max-w-[22ch] text-[clamp(26px,4vw,40px)] font-medium tracking-[-0.02em] text-balance">
            Всё бесплатно. Нравится, поддержи.
          </h2>
          <p className="max-w-[44ch] text-[17px] leading-relaxed text-ink-muted text-pretty">
            Никаких функций за замком. Поддержка помогает оплачивать AI и развивать проект.
          </p>
        </Reveal>
        <Reveal delay={0.08} className="flex min-w-0 flex-col gap-4 rounded-[22px] bg-ink p-6 text-dark-text">
          <div className="text-base font-medium">Поддержка проекта</div>
          <div className="flex items-baseline gap-2">
            <span className="text-[38px] font-bold tracking-[-0.03em]">500 ⭐</span>
            <span className="text-[15px] text-dark-text-3">на 30 дней</span>
          </div>
          <p className="text-[15px] leading-relaxed text-[#D8D4CC]">Telegram Stars. Оплата внутри Telegram, без карты и писем в поддержку.</p>
          <Button href={TELEGRAM_REQUEST_URL} variant="accent" className="py-3.5 text-[15px]">
            Поддержать
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
