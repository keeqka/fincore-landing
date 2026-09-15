import { Reveal } from './ui/Reveal'
import { Eyebrow } from './ui/Eyebrow'
import { Mascot } from './ui/Mascot'

/** Абстрактная «распознанная» лента — не скриншот, чтобы не пересобирать app-demo. */
function ParsedRows() {
  const rows = [
    [46, 22],
    [38, 18],
    [52, 26],
  ]
  return (
    <div className="flex h-full w-full items-center justify-center rounded-[18px] bg-[#E7EFF7]">
      <div className="flex w-[70%] flex-col gap-2.5">
        {rows.map(([l, r], i) => (
          <div key={i} className="flex justify-between gap-2.5">
            <div className="h-2.5 rounded-[3px] bg-[#C5D6E8]" style={{ width: l + '%' }} />
            <div className="h-2.5 rounded-[3px] bg-[#C5D6E8]" style={{ width: r + '%' }} />
          </div>
        ))}
        <div className="my-1 h-px bg-[#B7CADE]" />
        <div className="flex justify-between gap-2.5">
          <div className="h-3 w-[30%] rounded-[3px] bg-[#8FAFCE]" />
          <div className="h-3 w-[34%] rounded-[3px] bg-accent" />
        </div>
      </div>
    </div>
  )
}

export function HowItWorks() {
  return (
    <section id="how" className="border-y border-line bg-card">
      <div className="mx-auto flex max-w-[1120px] flex-col gap-8 px-4 py-14 sm:px-10 sm:py-20">
        <Reveal className="flex flex-col gap-2">
          <Eyebrow>Как работает</Eyebrow>
          <h2 className="max-w-[26ch] text-[clamp(26px,4vw,40px)] font-medium tracking-[-0.02em] text-balance">
            Три действия, дальше он сам
          </h2>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <Reveal className="flex flex-col gap-3.5">
            <div className="h-[190px] overflow-hidden rounded-[18px] bg-tint p-3">
              <Mascot expression="focused" />
            </div>
            <div className="font-mono text-xs text-accent-ink">01</div>
            <div className="text-[19px] font-medium">Скидываешь в чат</div>
            <p className="text-[15px] leading-relaxed text-ink-muted">
              Фото чека, скриншот перевода, PDF-выписку банка. Можно пачкой за месяц.
            </p>
          </Reveal>

          <Reveal delay={0.06} className="flex flex-col gap-3.5">
            <div className="h-[190px]">
              <ParsedRows />
            </div>
            <div className="font-mono text-xs text-accent-ink">02</div>
            <div className="text-[19px] font-medium">Он разбирает построчно</div>
            <p className="text-[15px] leading-relaxed text-ink-muted">
              Позиции, категории, подписки, проценты по кредиткам. Ничего не надо вводить руками.
            </p>
          </Reveal>

          <Reveal delay={0.12} className="flex flex-col gap-3.5">
            <div className="flex h-[190px] flex-col justify-center gap-2.5 rounded-[18px] bg-[#EDF3EA] p-[18px]">
              <p className="rounded-xl bg-card p-3 text-[13px] leading-snug">
                Гасим сначала кредитку: 24,9% против 11,5% по рассрочке.
              </p>
              <p className="rounded-xl bg-card p-3 text-[13px] leading-snug">
                Свободно 95 000 ₸ в месяц. Долг закроется к марту.
              </p>
            </div>
            <div className="font-mono text-xs text-accent-ink">03</div>
            <div className="text-[19px] font-medium">Отвечает по-человечески</div>
            <p className="text-[15px] leading-relaxed text-ink-muted">
              Не «оптимизируйте расходы», а конкретная цифра и что с ней делать сегодня.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
