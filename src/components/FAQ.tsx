import { Reveal } from './ui/Reveal'
import { Eyebrow } from './ui/Eyebrow'

const QA = [
  {
    q: 'Нужно что-то устанавливать?',
    a: 'Нет. Всё открывается внутри Telegram по кнопке в боте, вход через твой аккаунт Telegram. Отдельной регистрации нет.',
  },
  {
    q: 'А если AI неправильно прочитал чек?',
    a: 'Ничего не сохраняется само. Каждый чек, выписку и найденный долг он показывает на подтверждение: ты проверяешь, правишь и решаешь.',
  },
  {
    q: 'Он трогает деньги?',
    a: 'Никогда. Считает и предлагает, но ни один перевод или платёж через него не проходит.',
  },
  {
    q: 'Кто видит мои данные?',
    a: 'Только ты и партнёр, если ты его пригласил. Доступ ограничен на уровне базы данных: каждая семья видит только своё.',
  },
  {
    q: 'Откуда ставки в стратегии накоплений?',
    a: 'Из проверенной таблицы банковских продуктов Казахстана. Если ставку пришлось искать в интернете, это помечено.',
  },
  {
    q: 'Что даёт оплата в Stars?',
    a: 'Пока только поддержку проекта. Все функции доступны бесплатно.',
  },
]

export function FAQ() {
  return (
    <section id="faq" className="mx-auto flex max-w-[1120px] flex-col gap-7 px-4 py-14 sm:px-10 sm:py-20">
      <Reveal className="flex flex-col gap-2">
        <Eyebrow>Вопросы</Eyebrow>
        <h2 className="text-[clamp(26px,4vw,40px)] font-medium tracking-[-0.02em]">Коротко о главном</h2>
      </Reveal>
      <div className="grid gap-3 md:grid-cols-2">
        {QA.map(({ q, a }, i) => (
          <Reveal key={q} delay={i * 0.04}>
            <div className="h-full rounded-[18px] border border-line bg-card p-5">
              <p className="text-base font-medium">{q}</p>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-muted">{a}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
