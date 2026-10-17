import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Reveal } from './ui/Reveal'
import { Eyebrow } from './ui/Eyebrow'
import { Mascot, type Expression } from './ui/Mascot'
import { cn } from '../lib/utils'

const MOODS: { e: Expression; t: string; l: string }[] = [
  { e: 'happy', t: 'Долг закрыт', l: 'Минус один. Осталось два. Горжусь, честно.' },
  { e: 'shock', t: 'Перерасход', l: 'Доставка съела 18 300 ₸ за неделю. Я в шоке.' },
  { e: 'thinking', t: 'Могу ли купить?', l: 'Секунду, считаю, что будет с датой свободы.' },
  { e: 'stare', t: 'Третья доставка за день', l: '...' },
  { e: 'sleepy', t: 'Три дня без чеков', l: 'Скинь хоть один чек, я скучаю.' },
  { e: 'wink', t: 'Челлендж выполнен', l: 'Кофе дома ×3. Видишь, можешь.' },
]

const TRAITS = [
  ['Эмоции', 'Лицо Чека в приложении и есть статус бюджета. Понятно с одного взгляда.'],
  ['Три тона', 'Мягкий, нейтральный или прямой. Выбираешь, как с тобой говорить.'],
  ['Стикерпак', '24 стикера с Чеком и его котом. Есть версия без цензуры.'],
]

const STEP_MS = 2600

export function MascotSection() {
  const reduced = useReducedMotion()
  const [i, setI] = useState(0)
  const timer = useRef<number | undefined>(undefined)

  const start = () => {
    window.clearInterval(timer.current)
    if (reduced) return
    timer.current = window.setInterval(() => setI((x) => (x + 1) % MOODS.length), STEP_MS)
  }

  useEffect(() => {
    start()
    return () => window.clearInterval(timer.current)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduced])

  const m = MOODS[i]

  return (
    <section id="chek" className="bg-tint">
      <div className="mx-auto grid max-w-[1120px] items-center gap-10 px-4 py-14 sm:px-10 sm:py-[72px] md:grid-cols-2 md:gap-14">
        <Reveal className="flex min-w-0 flex-col gap-[18px]">
          <Eyebrow>Знакомься: Чек</Eyebrow>
          <h2 className="max-w-[22ch] text-[clamp(26px,4vw,40px)] font-medium tracking-[-0.02em] text-balance">
            Не бухгалтер. Друг, который умеет считать.
          </h2>
          <p className="max-w-[46ch] text-[17px] leading-relaxed text-ink-muted text-pretty">
            Честный, ироничный и немного дерзкий. Не стыдит за доставку в три ночи, но и не врёт, что всё нормально.
          </p>
          <div className="mt-1 flex flex-col">
            {TRAITS.map(([k, v]) => (
              <div key={k} className="grid grid-cols-[120px_minmax(0,1fr)] gap-4 border-t border-[#D9D3C8] py-3.5">
                <span className="pt-[3px] font-mono text-xs text-accent-ink">{k}</span>
                <span className="text-[15px] leading-relaxed text-ink-muted text-pretty">{v}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1} className="flex justify-center">
          <div className="flex w-full max-w-[340px] flex-col gap-3.5 rounded-3xl bg-paper p-5">
            <div className="relative h-[230px] w-full">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={m.e}
                  className="absolute inset-0"
                  initial={reduced ? false : { opacity: 0, y: 6, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={reduced ? undefined : { opacity: 0, y: -6, scale: 0.97 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Mascot expression={m.e} />
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="flex min-h-[68px] flex-col gap-1 rounded-[14px] bg-card px-3.5 py-3" aria-live="polite">
              <span className="font-mono text-[11px] tracking-[0.1em] text-accent-ink uppercase">{m.t}</span>
              <span className="text-[15px] leading-snug text-ink">{m.l}</span>
            </div>
            <div className="flex justify-center gap-1.5">
              {MOODS.map((x, k) => (
                <button
                  key={x.e}
                  type="button"
                  aria-label={x.t}
                  onClick={() => {
                    setI(k)
                    start()
                  }}
                  className={cn(
                    'h-1.5 cursor-pointer rounded-full transition-all duration-300',
                    k === i ? 'w-[22px] bg-ink' : 'w-1.5 bg-[#C9C3B7]',
                  )}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
