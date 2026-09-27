import { Reveal } from './ui/Reveal'
import { Button } from './ui/Button'
import { TgStar } from './ui/TgStar'
import { PRICE_KZT_APPROX, PRICE_STARS, TELEGRAM_REQUEST_URL } from '../lib/constants'

const FREE = ['30 чеков в месяц', 'Бюджет и лимиты', 'Чат без ограничений по вопросам']
const PRO = [
  'Чеки и выписки без лимита',
  'План погашения долгов',
  'Разбор подписок и комиссий',
  'Напоминания о платежах',
  'Ежедневное напоминание загрузить чеки',
]

export function Pricing() {
  return (
    <section id="price" className="border-y border-line bg-card">
      <div className="mx-auto flex max-w-[1120px] flex-col gap-7 px-4 py-14 sm:px-10 sm:py-20">
        <Reveal>
          <h2 className="text-[clamp(26px,4vw,40px)] font-medium tracking-[-0.02em]">Цены без сюрпризов</h2>
          <p className="mt-2 text-[15px] text-ink-muted">Сейчас доступ по приглашениям — всё бесплатно, а подписка — способ поддержать проект. После открытия — так:</p>
        </Reveal>

        <div className="grid gap-4.5 sm:grid-cols-2">
          <Reveal className="flex h-full flex-col gap-4 rounded-[22px] border border-line p-6">
            <div className="text-base font-medium">Старт</div>
            <div className="flex items-baseline gap-2">
              <span className="text-[38px] font-bold tracking-[-0.03em]">0 ₸</span>
              <span className="text-[15px] text-ink-label">навсегда</span>
            </div>
            <ul className="grid gap-2.5 text-[15px] leading-snug text-ink-muted">
              {FREE.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <Button href={TELEGRAM_REQUEST_URL} variant="ghost" className="mt-auto w-full py-3.5 text-[15px]">
              Получить приглашение
            </Button>
          </Reveal>

          <Reveal delay={0.06} className="flex h-full flex-col gap-4 rounded-[22px] bg-ink p-6 text-[#F2EFE9]">
            <div className="flex items-center justify-between gap-2.5">
              <span className="text-base font-medium">Полный</span>
              <span className="rounded-md bg-accent px-2 py-1 font-mono text-[11px] text-white">выбор 8 из 10</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="flex items-center gap-1.5 text-[38px] font-bold tracking-[-0.03em]">
                {PRICE_STARS}
                <TgStar size={32} />
              </span>
              <span className="text-[15px] text-dark-text-3">в месяц</span>
            </div>
            <p className="-mt-2 text-[13px] text-dark-text-3">≈ {PRICE_KZT_APPROX} — точная сумма зависит от того, где покупаешь звёзды</p>
            <ul className="grid gap-2.5 text-[15px] leading-snug text-[#D8D4CC]">
              {PRO.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <Button href={TELEGRAM_REQUEST_URL} variant="accent" className="mt-auto w-full py-3.5 text-[15px]">
              Получить приглашение
            </Button>
          </Reveal>
        </div>

        <p className="text-sm text-ink-label">
          Одна подписка на семью — ты и партнёр. Оплата звёздами Telegram, продлевается раз в 30 дней, отменить можно в
          любой момент в настройках Telegram.
        </p>
      </div>
    </section>
  )
}
