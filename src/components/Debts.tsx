import { Reveal } from './ui/Reveal'
import { Chip, SectionHead, Segmented } from './ui/SectionHead'

const DEBTS = [
  { name: 'Кредитка · 32%', sum: '862 000 ₸', w: '62%', c: 'bg-accent' },
  { name: 'Потребкредит · 24%', sum: '410 000 ₸', w: '34%', c: 'bg-accent-mid' },
  { name: 'Рассрочка · 0%', sum: '150 000 ₸', w: '18%', c: 'bg-accent-soft' },
]
const NEW_DEBT = [
  ['Платёж', '27 400 ₸', ''],
  ['Переплата', '97 600 ₸', ''],
  ['Дата свободы', '+5 мес', 'text-salmon'],
  ['Цена в работе', '62 часа', ''],
]
const CHIPS = ['симулятор досрочки', 'сколько ещё можно снять с кредитки', 'премия: часть сразу на долг', 'экран «долг закрыт»']

export function Debts() {
  return (
    <section id="debts" className="border-y border-line bg-card">
      <div className="mx-auto flex max-w-[1120px] flex-col gap-8 px-4 py-14 sm:px-10 sm:py-20">
        <SectionHead
          eyebrow="Долги и кредитки"
          title="Одна дата свободы на всех экранах"
          lead="Ставки, минималки, досрочные взносы и лимиты кредиток в одном расчёте. Форму долга можно заполнить скриншотом из банка."
        />

        <div className="grid gap-[18px] md:grid-cols-2">
          <Reveal className="flex min-w-0 flex-col gap-[18px] rounded-[22px] border border-line p-5 sm:p-[26px]">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="text-base font-medium">Лавина или снежный ком</div>
              <Segmented items={['лавина', 'ком']} active={0} />
            </div>
            <div className="flex flex-col gap-3.5">
              {DEBTS.map((d) => (
                <div key={d.name} className="flex flex-col gap-[7px]">
                  <div className="flex justify-between gap-3 text-sm">
                    <span>{d.name}</span>
                    <span className="font-mono text-ink-label">{d.sum}</span>
                  </div>
                  <div className="h-2.5 overflow-hidden rounded-full bg-tint">
                    <div className={'h-full rounded-full ' + d.c} style={{ width: d.w }} />
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between gap-3 border-t border-line pt-4">
              <div className="text-[15px] text-ink-label">+20 000 ₸ досрочно</div>
              <div className="flex items-baseline gap-2.5">
                <span className="text-[19px] font-medium">март 2027</span>
                <span className="font-mono text-[13px] text-accent-ink">-4 мес</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.06} className="flex min-w-0 flex-col gap-4 rounded-[22px] bg-ink p-5 text-dark-text sm:p-[26px]">
            <div className="flex flex-col gap-1">
              <div className="font-mono text-xs text-dark-accent">Перед новым долгом</div>
              <div className="text-base font-medium">Рассрочка на телефон · 24 мес</div>
            </div>
            <div className="grid grid-cols-2 gap-3.5">
              {NEW_DEBT.map(([k, v, c]) => (
                <div key={k} className="flex flex-col gap-0.5">
                  <span className="text-xs text-dark-text-3">{k}</span>
                  <span className={'text-lg font-medium ' + c}>{v}</span>
                </div>
              ))}
            </div>
            <p className="border-t border-[#2A2F37] pt-3.5 text-sm leading-relaxed text-[#D8D4CC] text-pretty">
              Скинь скриншот предложения банка, посчитаем реальную ставку (ГЭСВ) с комиссиями и страховкой.
            </p>
          </Reveal>
        </div>

        <div className="flex flex-wrap gap-2">
          {CHIPS.map((c) => (
            <Chip key={c}>{c}</Chip>
          ))}
        </div>
      </div>
    </section>
  )
}
