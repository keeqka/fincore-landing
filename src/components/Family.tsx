import { Reveal } from './ui/Reveal'
import { Eyebrow } from './ui/Eyebrow'

const STATS = [
  ['Итог месяца', '+38 200 ₸'],
  ['Долги', '-6,8%'],
  ['Подушка', '3,4 мес'],
  ['Поправить', 'доставка'],
]

export function Family() {
  return (
    <section id="family" className="mx-auto grid max-w-[1120px] items-center gap-10 px-4 py-14 sm:px-10 sm:py-20 md:grid-cols-2 md:gap-14">
      <Reveal className="flex min-w-0 flex-col gap-[18px]">
        <Eyebrow>Семья</Eyebrow>
        <h2 className="max-w-[24ch] text-[clamp(26px,4vw,40px)] font-medium tracking-[-0.02em] text-balance">Один бюджет на двоих</h2>
        <p className="max-w-[44ch] text-[17px] leading-relaxed text-ink-muted text-pretty">
          Приглашаешь партнёра одноразовой ссылкой, данные видны обоим. Каждая семья видит только своё: защита на
          уровне базы данных.
        </p>
      </Reveal>

      <Reveal delay={0.08} className="flex min-w-0 flex-col gap-4 rounded-3xl border border-line bg-card p-5 sm:p-7">
        <div className="flex items-baseline justify-between gap-3">
          <div className="text-base font-medium">Выписка · октябрь</div>
          <div className="font-mono text-xs text-ink-label">+ сентябрь</div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {STATS.map(([k, v]) => (
            <div key={k} className="flex flex-col gap-0.5 rounded-xl bg-paper p-3">
              <span className="text-xs text-ink-label">{k}</span>
              <span className="text-[17px] font-medium">{v}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-2.5">
          <span className="rounded-[10px] bg-ink px-3.5 py-2.5 text-sm font-medium text-paper">Ссылка партнёру · 5 мин</span>
          <span className="rounded-[10px] bg-tint px-3.5 py-2.5 text-sm font-medium text-ink">Скачать файлом</span>
        </div>
      </Reveal>
    </section>
  )
}
