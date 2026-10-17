import { Reveal } from './ui/Reveal'
import { SectionHead } from './ui/SectionHead'

const RECEIPT = [
  ['молоко', '890'],
  ['хлеб', '320'],
  ['сыр', '3 270'],
]
const PARSED = [
  ['Сумма', '4 480 ₸'],
  ['Магазин', 'Magnum'],
  ['Дата', '17 окт'],
]
const ROWS = [
  { name: 'Magnum · Продукты', sum: '12 480', on: true },
  { name: 'Netflix · Подписки', sum: '3 990', on: true },
  { name: 'Перевод себе', sum: '50 000', on: false },
]
const STRIP = [
  ['Без подтверждения ничего', 'AI предлагает, сохраняешь ты.'],
  ['Или просто словами', '«такси 2150», категорию подберёт сам.'],
  ['Свои категории', 'Каждая помечена как «нужное» или «желание».'],
  ['Напомнит загрузить чеки', 'Раз в день, в удобное время и нужным тоном.'],
]

function Check({ on }: { on: boolean }) {
  return on ? (
    <span className="size-3.5 flex-none rounded bg-accent" />
  ) : (
    <span className="size-3.5 flex-none rounded border-[1.5px] border-accent-mid" />
  )
}

export function InputSection() {
  return (
    <section id="input" className="border-y border-line bg-card">
      <div className="mx-auto flex max-w-[1120px] flex-col gap-8 px-4 py-14 sm:px-10 sm:py-20">
        <SectionHead
          eyebrow="Учёт без ручного ввода"
          title="Фото чека, и трата записана. Выписка, и записаны три месяца."
          lead="Главное, что убивает учёт расходов, это вбивать всё руками. Здесь не нужно."
        />

        <div className="grid gap-[18px] md:grid-cols-2">
          <Reveal className="flex min-w-0 flex-col gap-[18px] rounded-[22px] border border-line bg-paper p-5 sm:p-6">
            <div className="flex items-stretch gap-4">
              <div className="flex w-[118px] flex-none -rotate-3 flex-col gap-1.5 rounded-[10px] border border-dashed border-[#C9C3B7] bg-card px-2.5 py-3 font-mono text-[10px] text-ink-label">
                <span className="text-center text-ink">MAGNUM</span>
                {RECEIPT.map(([k, v]) => (
                  <span key={k} className="flex justify-between">
                    <span>{k}</span>
                    <span>{v}</span>
                  </span>
                ))}
                <span className="flex justify-between border-t border-dashed border-[#C9C3B7] pt-1.5 text-ink">
                  <span>ИТОГО</span>
                  <span>4 480</span>
                </span>
              </div>
              <div className="flex min-w-0 flex-1 flex-col justify-center gap-2 text-sm">
                {PARSED.map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-2">
                    <span className="text-ink-label">{k}</span>
                    <span className="font-medium">{v}</span>
                  </div>
                ))}
                <div className="flex justify-between gap-2">
                  <span className="text-ink-label">Категория</span>
                  <span className="font-medium text-accent-ink">Продукты</span>
                </div>
                <span className="mt-1 rounded-[9px] bg-ink px-3 py-2 text-center text-[13px] font-medium text-paper">Сохранить</span>
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <div className="text-[19px] font-medium">Фото чека или скриншот</div>
              <p className="text-[15px] leading-relaxed text-ink-muted text-pretty">
                AI читает сумму, магазин, дату и предлагает категорию. Подходит и скриншот перевода из Kaspi.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.06} className="flex min-w-0 flex-col gap-[18px] rounded-[22px] border border-line bg-paper p-5 sm:p-6">
            <div className="flex flex-col gap-2 text-[13px]">
              <div className="flex justify-between gap-2.5 text-ink-label">
                <span>statement_jul-sep.pdf</span>
                <span className="font-mono">214 операций</span>
              </div>
              {ROWS.map((r) => (
                <div key={r.name} className={'flex items-center gap-2.5 rounded-[9px] bg-card px-2.5 py-2' + (r.on ? '' : ' opacity-55')}>
                  <Check on={r.on} />
                  <span className="min-w-0 flex-1">{r.name}</span>
                  <span className="font-mono text-ink-muted">{r.sum}</span>
                </div>
              ))}
              <div className="flex justify-between gap-2.5 pt-1">
                <span className="text-ink-label">Выбрано 211</span>
                <span className="font-medium text-accent-ink">Сохранить всё</span>
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <div className="text-[19px] font-medium">Выписка банка за несколько месяцев</div>
              <p className="text-[15px] leading-relaxed text-ink-muted text-pretty">
                Загружаешь один файл, получаешь список всех операций. Снимаешь лишние галочки, правишь сумму или
                категорию и сохраняешь разом.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal className="grid gap-px overflow-hidden rounded-[18px] border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {STRIP.map(([t, d]) => (
            <div key={t} className="flex flex-col gap-1.5 bg-card px-[22px] py-5">
              <div className="text-base font-medium">{t}</div>
              <div className="text-sm leading-relaxed text-ink-muted text-pretty">{d}</div>
            </div>
          ))}
        </Reveal>

        <p className="max-w-[70ch] text-sm leading-relaxed text-ink-label text-pretty">
          Выписки шумные, например «MAGNUM.AF10.KASSA-13 ALMATY KZ». Hlow Flow сводит их к одному магазину и
          запоминает правило: этот магазин всегда в этой категории.
        </p>
      </div>
    </section>
  )
}
