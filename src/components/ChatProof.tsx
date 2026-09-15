import { Reveal } from './ui/Reveal'
import { Eyebrow } from './ui/Eyebrow'
import { MascotAvatar } from './ui/Mascot'

const POINTS = ['Не стыдит и не читает мораль', 'Помнит контекст: цели, долги, зарплату', 'Сам напишет, если что-то пошло не так']

export function ChatProof() {
  return (
    <section className="mx-auto grid max-w-[1120px] items-center gap-10 px-4 py-14 sm:px-10 sm:py-20 lg:grid-cols-2 lg:gap-14">
      <Reveal className="flex min-w-0 flex-col gap-4">
        <Eyebrow>Без таблиц</Eyebrow>
        <h2 className="max-w-[24ch] text-[clamp(26px,4vw,40px)] font-medium tracking-[-0.02em] text-balance">
          Разговор вместо дашборда
        </h2>
        <p className="max-w-[44ch] text-[17px] leading-relaxed text-ink-muted text-pretty">
          Спрашиваешь как друга: «могу я сейчас взять эту куртку?» — он смотрит на платежи, лимиты и отвечает да или
          нет, с причиной.
        </p>
        <ul className="mt-2 grid gap-2.5">
          {POINTS.map((p) => (
            <li key={p} className="flex items-baseline gap-3">
              <span className="font-mono text-xs text-accent-ink">{'→'}</span>
              <span className="text-base leading-snug text-ink-muted">{p}</span>
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal delay={0.1} className="flex min-w-0 flex-col gap-3.5 rounded-[28px] bg-shell p-[18px]">
        <div className="flex items-center gap-2.5 border-b border-[#1E242C] px-1 pb-3">
          <MascotAvatar size={38} />
          <div className="min-w-0">
            <div className="text-[15px] font-medium text-dark-text">Hlow Flow</div>
            <div className="text-xs text-[#5E6873]">bot · онлайн</div>
          </div>
        </div>

        <div className="flex justify-end">
          <p className="max-w-[80%] rounded-[16px_16px_4px_16px] bg-accent px-3.5 py-2.5 text-sm leading-snug text-white">
            могу взять куртку за 14 900?
          </p>
        </div>

        <div className="flex items-end gap-2.5">
          <MascotAvatar size={30} expression="focused" />
          <p className="max-w-[80%] rounded-[16px_16px_16px_4px] bg-[#1B222B] px-3.5 py-2.5 text-sm leading-snug text-[#EDEBE6]">
            Можешь, но тогда платёж по кредитке 18-го придётся сократить до минимального — и долг съедет на месяц
            вперёд.
          </p>
        </div>

        <div className="flex items-end gap-2.5">
          <span className="w-[30px] shrink-0" />
          <p className="max-w-[80%] rounded-[16px_16px_16px_4px] bg-[#1B222B] px-3.5 py-2.5 text-sm leading-snug text-[#EDEBE6]">
            Если подождать до 5-го — берёшь без последствий. Напомнить?
          </p>
        </div>

        <div className="flex flex-wrap gap-2 pl-[39px]">
          {['Напомни 5-го', 'Покажи план'].map((q) => (
            <span key={q} className="rounded-[9px] border border-dark-line px-3 py-1.5 text-[13px] text-accent-on-dark">
              {q}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
