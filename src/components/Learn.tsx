import { Reveal } from './ui/Reveal'
import { SectionHead, Segmented } from './ui/SectionHead'

const CHALLENGES = [
  ['Без доставки', '5/7', true],
  ['Кофе дома ×3', 'готово', true],
  ['Аудит подписок', '-', false],
  ['Пауза 72 ч', '-', false],
] as const

const card = 'flex flex-col gap-3 rounded-[20px] bg-dark-card p-[22px]'

export function Learn() {
  return (
    <section id="learn" className="bg-dark text-dark-text">
      <div className="mx-auto flex max-w-[1120px] flex-col gap-8 px-4 py-14 sm:px-10 sm:py-20">
        <SectionHead dark eyebrow="Финансовая грамотность" title="Объясняет на твоих цифрах, а не на учебнике" />

        <div className="grid gap-[18px] md:grid-cols-3">
          <Reveal className={card}>
            <div className="font-mono text-xs text-dark-accent">Словарь</div>
            <div className="text-lg font-medium">Сложный процент: это твои 862 000 ₸</div>
            <p className="text-[15px] leading-relaxed text-dark-text-3 text-pretty">
              ГЭСВ, минималка, лавина, рефинансирование. Нет данных, пример на условных цифрах с пометкой.
            </p>
            <div className="mt-auto">
              <Segmented dark items={['просто', 'с цифрами', 'подробно']} active={1} />
            </div>
          </Reveal>

          <Reveal delay={0.05} className={card}>
            <div className="font-mono text-xs text-dark-accent">Челленджи недели</div>
            <div className="text-lg font-medium">Часть засчитывается сама</div>
            <div className="grid gap-2 text-sm">
              {CHALLENGES.map(([t, v, done]) => (
                <div key={t} className="flex justify-between gap-2.5">
                  <span>{t}</span>
                  <span className={'font-mono ' + (done ? 'text-ok' : 'text-dark-text-3')}>{v}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1} className={card}>
            <div className="font-mono text-xs text-dark-accent">Финансовое здоровье</div>
            <div className="text-lg font-medium">4 из 7</div>
            <div className="h-2 overflow-hidden rounded bg-dark">
              <div className="h-full w-[57%] bg-ok" />
            </div>
            <p className="text-[15px] leading-relaxed text-dark-text-3 text-pretty">
              Подушка, просрочки, дорогие долги, резерв на годовые траты, страховка. Любой пункт можно отметить «не
              про меня».
            </p>
          </Reveal>
        </div>

        <p className="max-w-[70ch] text-[15px] leading-relaxed text-dark-text-3 text-pretty">
          Раз в неделю разбор в Telegram: победа, поправка, веха и два челленджа. В последний день месяца сводка.
        </p>
      </div>
    </section>
  )
}
