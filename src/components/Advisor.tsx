import { Reveal } from './ui/Reveal'
import { Eyebrow } from './ui/Eyebrow'
import { MascotAvatar } from './ui/Mascot'
import { Arrow } from './ui/SectionHead'

const POINTS = [
  'Знает твои цифры и умеет искать в интернете',
  'Сравнивает стратегии и сценарии «что если»',
  'Тон на выбор: мягкий, нейтральный или прямой',
]

function Bot({ children, avatar = false }: { children: React.ReactNode; avatar?: boolean }) {
  return (
    <div className="flex items-end gap-[9px]">
      {avatar ? <MascotAvatar expression="focused" size={30} /> : <div className="w-[30px] flex-none" />}
      <div className="max-w-[80%] rounded-[16px_16px_16px_4px] bg-[#1B222B] px-3.5 py-[11px] text-sm leading-snug text-[#EDEBE6]">
        {children}
      </div>
    </div>
  )
}

export function Advisor() {
  return (
    <section id="advisor" className="mx-auto grid max-w-[1120px] items-center gap-10 px-4 py-14 sm:px-10 sm:py-20 md:grid-cols-2 md:gap-14">
      <Reveal className="flex min-w-0 flex-col gap-[18px]">
        <Eyebrow>AI-советник</Eyebrow>
        <h2 className="max-w-[24ch] text-[clamp(26px,4vw,40px)] font-medium tracking-[-0.02em] text-balance">
          Предлагает, но решаешь ты
        </h2>
        <p className="max-w-[44ch] text-[17px] leading-relaxed text-ink-muted text-pretty">
          Спрашиваешь «могу ли я купить X?», он считает тем же движком, что и приложение, и показывает «было /
          станет». Сам ничего не записывает.
        </p>
        <div className="grid gap-2.5">
          {POINTS.map((p) => (
            <Arrow key={p}>{p}</Arrow>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.08} className="flex min-w-0 flex-col gap-3.5 rounded-[28px] bg-shell p-[18px]">
        <div className="flex items-center gap-2.5 border-b border-[#1E242C] px-1 pb-3">
          <MascotAvatar size={38} />
          <div className="flex min-w-0 flex-col">
            <div className="text-[15px] font-medium text-paper">Hlow Flow</div>
            <div className="text-xs text-[#5E6873]">bot · онлайн</div>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="max-w-[80%] rounded-[16px_16px_4px_16px] bg-accent px-3.5 py-[11px] text-sm leading-snug text-white">
            могу взять куртку за 49 900?
          </div>
        </div>
        <Bot avatar>
          <div className="flex flex-col gap-2.5">
            <span>Можешь, но платёж по кредитке 18-го придётся урезать до минимального.</span>
            <div className="grid grid-cols-[auto_auto_auto] gap-x-3 gap-y-1 font-mono text-xs text-dark-text-3">
              <span />
              <span>было</span>
              <span>станет</span>
              <span>можно в день</span>
              <span className="text-[#EDEBE6]">8 400</span>
              <span className="text-salmon">3 900</span>
              <span>без долгов</span>
              <span className="text-[#EDEBE6]">мар 27</span>
              <span className="text-salmon">апр 27</span>
            </div>
          </div>
        </Bot>
        <Bot>Если подождать до 5-го, без последствий. Поставить паузу 72 ч?</Bot>
        <div className="flex flex-wrap gap-2 pl-[39px]">
          {['Пауза 72 ч', 'Всё равно купить'].map((t) => (
            <span key={t} className="rounded-[9px] border border-dark-line px-3 py-[7px] text-[13px] text-dark-accent">
              {t}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
