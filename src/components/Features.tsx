import { Reveal } from './ui/Reveal'

const FEATURES = [
  { tag: 'Чеки', title: 'Читает фото построчно', text: 'Позиции, категории, магазин, дата. Дубли и возвраты отсеивает сам.' },
  { tag: 'Выписки', title: 'Разбирает PDF из банка', text: 'Находит подписки, проценты, комиссии и регулярные платежи, о которых ты забыл.' },
  { tag: 'Долги', title: 'Считает план погашения', text: 'Порядок выплат по ставке, дата закрытия и сколько ты сэкономишь на процентах.' },
  { tag: 'Бюджет', title: 'Следит за лимитами', text: 'Пишет заранее, а не когда деньги кончились. Без пушей ради пушей.' },
]

export function Features() {
  return (
    <section id="features" className="bg-dark text-dark-text">
      <div className="mx-auto flex max-w-[1120px] flex-col gap-8 px-4 py-14 sm:px-10 sm:py-20">
        <Reveal>
          <h2 className="max-w-[26ch] text-[clamp(26px,4vw,40px)] font-medium tracking-[-0.02em] text-balance">
            Четыре вещи, которые он делает вместо тебя
          </h2>
        </Reveal>
        <div className="grid gap-4.5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map(({ tag, title, text }, i) => (
            <Reveal key={tag} delay={i * 0.05}>
              <div className="flex h-full flex-col gap-2.5 rounded-[20px] bg-dark-card p-[22px]">
                <div className="font-mono text-xs text-accent-on-dark">{tag}</div>
                <div className="text-[18px] font-medium">{title}</div>
                <p className="text-[15px] leading-relaxed text-dark-text-3">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
