import { Reveal } from './ui/Reveal'
import { Eyebrow } from './ui/Eyebrow'

const DEBTS = [
  { name: 'Кредитка · 24,9%', amount: '620 000 ₸', pct: 62, fill: 'bg-accent' },
  { name: 'Рассрочка · 11,5%', amount: '320 000 ₸', pct: 34, fill: 'bg-[#8FAFCE]' },
  { name: 'Долг другу · 0%', amount: '120 000 ₸', pct: 18, fill: 'bg-[#C5D6E8]' },
]

export function DebtPlan() {
  return (
    <section className="mx-auto grid max-w-[1120px] items-center gap-10 px-4 py-14 sm:px-10 sm:py-20 lg:grid-cols-2 lg:gap-14">
      <Reveal className="flex min-w-0 flex-col gap-4">
        <Eyebrow>План погашения</Eyebrow>
        <h2 className="max-w-[24ch] text-[clamp(26px,4vw,40px)] font-medium tracking-[-0.02em] text-balance">
          Видно дату, когда всё закончится
        </h2>
        <p className="max-w-[44ch] text-[17px] leading-relaxed text-ink-muted text-pretty">
          Он сам решает, что гасить первым, и пересчитывает план каждый раз, когда меняются доходы или траты.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="flex min-w-0 flex-col gap-4.5 rounded-[24px] border border-line bg-card p-5 sm:p-7">
        <div className="flex items-baseline justify-between gap-3">
          <span className="text-[15px] text-ink-label">Свободно в месяц</span>
          <span className="text-[19px] font-medium">95 000 ₸</span>
        </div>

        <div className="flex flex-col gap-3.5">
          {DEBTS.map((d) => (
            <div key={d.name} className="flex flex-col gap-1.5">
              <div className="flex justify-between gap-3 text-sm">
                <span>{d.name}</span>
                <span className="font-mono text-ink-soft">{d.amount}</span>
              </div>
              <div className="h-2.5 overflow-hidden rounded-full bg-tint">
                <div className={'h-full rounded-full ' + d.fill} style={{ width: d.pct + '%' }} />
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between gap-3 border-t border-line pt-4">
          <span className="text-[15px] text-ink-label">Закрытие</span>
          <span className="flex items-baseline gap-2.5">
            <span className="text-[19px] font-medium">март 2027</span>
            <span className="font-mono text-[13px] text-accent-ink">{'−'}2 мес</span>
          </span>
        </div>
      </Reveal>
    </section>
  )
}
