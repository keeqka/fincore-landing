import { Reveal } from './ui/Reveal'
import { Eyebrow } from './ui/Eyebrow'
import { Arrow, Segmented } from './ui/SectionHead'

const POINTS = [
  'Модель на выбор: 50/30/20, «каждый тенге назначен», «сначала себе»',
  'Индекс свободы: какая доля дохода уходит на обязательное',
  'Страховка, отпуск, налоги: сам считает, сколько откладывать в месяц',
  'Пауза 24 или 72 часа перед крупной покупкой',
]
const SPLIT = [
  ['Нужное', '52%', ''],
  ['Желания', '27%', ''],
  ['Себе', '21%', 'text-accent-ink'],
]

export function Budget() {
  return (
    <section id="budget" className="mx-auto grid max-w-[1120px] items-center gap-10 px-4 py-14 sm:px-10 sm:py-20 md:grid-cols-2 md:gap-14">
      <Reveal className="flex min-w-0 flex-col gap-[18px]">
        <Eyebrow>Бюджет</Eyebrow>
        <h2 className="max-w-[24ch] text-[clamp(26px,4vw,40px)] font-medium tracking-[-0.02em] text-balance">
          Видно конец месяца заранее
        </h2>
        <p className="max-w-[44ch] text-[17px] leading-relaxed text-ink-muted text-pretty">
          Обязательные платежи встают на даты списания, остальное по твоему темпу. Месяц считается от календаря или
          от дня зарплаты.
        </p>
        <div className="grid gap-2.5">
          {POINTS.map((p) => (
            <Arrow key={p}>{p}</Arrow>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.08} className="flex min-w-0 flex-col gap-[18px] rounded-3xl border border-line bg-card p-5 sm:p-7">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="text-[15px] text-ink-label">Прогноз на 31 октября</div>
          <Segmented items={['осторожный', 'обычный', 'оптимист.']} active={1} />
        </div>
        <div className="flex flex-wrap items-baseline gap-2.5">
          <span className="text-[clamp(34px,5vw,44px)] font-bold tracking-[-0.03em]">+38 200 ₸</span>
          <span className="text-[15px] text-ink-label">останется</span>
        </div>
        <div className="flex flex-col gap-1.5">
          <div className="relative h-2.5 rounded-full bg-[linear-gradient(90deg,var(--color-good)_0%,var(--color-mid)_55%,var(--color-bad)_100%)]">
            <div className="absolute -top-1 left-[28%] h-[18px] w-1 rounded-sm bg-ink" />
          </div>
          <div className="flex justify-between font-mono text-[11px] text-ink-label">
            <span>спокойно</span>
            <span>на грани</span>
            <span>минус</span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2.5 border-t border-line pt-4">
          {SPLIT.map(([k, v, c]) => (
            <div key={k} className="flex flex-col gap-0.5">
              <span className="text-xs text-ink-label">{k}</span>
              <span className={'text-base font-medium ' + c}>{v}</span>
            </div>
          ))}
        </div>
        <div className="rounded-xl bg-note px-3.5 py-3 text-sm leading-snug">
          Новая статья: «Доставка», 18 300 ₸ за неделю. Обычно 6 000 ₸.
        </div>
      </Reveal>
    </section>
  )
}
