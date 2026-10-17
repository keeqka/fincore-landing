import { Reveal } from './ui/Reveal'
import { Eyebrow } from './ui/Eyebrow'

const CELLS = ['full', 'full', 'full', 'part', 'empty', 'empty'] as const

export function Goals() {
  return (
    <section id="goals" className="border-y border-line bg-card">
      <div className="mx-auto grid max-w-[1120px] items-center gap-10 px-4 py-14 sm:px-10 sm:py-20 md:grid-cols-2 md:gap-14">
        <Reveal className="order-2 flex min-w-0 flex-col gap-4 rounded-3xl bg-accent-tint p-5 sm:p-7 md:order-1">
          <div className="text-[15px] text-accent-ink">Стресс-тест подушки</div>
          <div className="flex flex-wrap items-baseline gap-2.5">
            <span className="text-[clamp(34px,5vw,44px)] font-bold tracking-[-0.03em]">3,4 мес</span>
            <span className="text-[15px] text-ink-muted">если пропадёт доход</span>
          </div>
          <div className="grid grid-cols-6 gap-1.5">
            {CELLS.map((c, i) => (
              <div
                key={i}
                className={
                  'h-[34px] rounded-md ' +
                  (c === 'full'
                    ? 'bg-accent'
                    : c === 'part'
                      ? 'bg-[linear-gradient(90deg,var(--color-accent)_40%,var(--color-accent-soft)_40%)]'
                      : 'bg-accent-soft')
                }
              />
            ))}
          </div>
          <p className="text-sm leading-relaxed text-ink-muted text-pretty">
            Цель: 6 месяцев. Депозит под 14,5% доведёт подушку до цели к августу.
          </p>
        </Reveal>
        <Reveal delay={0.06} className="order-1 flex min-w-0 flex-col gap-[18px] md:order-2">
          <Eyebrow>Цели и подушка</Eyebrow>
          <h2 className="max-w-[24ch] text-[clamp(26px,4vw,40px)] font-medium tracking-[-0.02em] text-balance">
            Сколько продержишься, если что-то пойдёт не так
          </h2>
          <p className="max-w-[44ch] text-[17px] leading-relaxed text-ink-muted text-pretty">
            Цели с суммой и сроком. Стратегию накопления AI подбирает из проверенной таблицы банковских продуктов
            Казахстана, ставки не выдумываются.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
