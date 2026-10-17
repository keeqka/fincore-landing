import { useState } from 'react'
import { PageShell } from '../components/PageShell'
import { Eyebrow } from '../components/ui/Eyebrow'
import { Mascot } from '../components/ui/Mascot'
import { cn } from '../lib/utils'

const BOT = 'https://t.me/hlowflow_bot'
const EMAIL = 'owner@hlowflow.app'

const CHANNELS = [
  { tag: 'Бот', title: '@hlowflow_bot', text: 'Любой вопрос по приложению: просто напиши в чат.', href: BOT },
  { tag: 'Оплата', title: '/paysupport', text: 'Вопросы по Stars, подписке и возвратам.', href: BOT + '?start=paysupport' },
  { tag: 'Почта', title: EMAIL, text: 'Данные, удаление аккаунта, всё официальное. Ответ до 30 дней.', href: 'mailto:' + EMAIL },
]

const FAQ = [
  ['AI неправильно прочитал чек', 'Ничего страшного: на экране подтверждения можно поправить сумму, магазин, дату и категорию до сохранения. Если уже сохранил, трату можно отредактировать в табе чеков.'],
  ['Выписка не загружается', 'Проверь, что это PDF из банка, а не фото выписки. Если файл правильный, пришли в бота название банка и период, посмотрим.'],
  ['Как пригласить партнёра', 'В приложении создай одноразовую ссылку и отправь её партнёру. После входа вы оба видите общий бюджет, долги и цели.'],
  ['Как удалить аккаунт и данные', 'В разделе «Профиль» в приложении или письмом на ' + EMAIL + '. Данные удаляются в течение 30 дней.'],
  ['Что даёт оплата в Stars', 'Пока только поддержку проекта на 30 дней. Все функции доступны бесплатно. Вопросы по оплате и возвратам: команда /paysupport в боте.'],
  ['Не приходят напоминания', 'Проверь, что бот не заблокирован и уведомления чата включены. Время напоминаний меняется в настройках приложения.'],
  ['Нет доступа, пишет «по приглашению»', 'Сейчас число пользователей ограничено. Попроси ссылку у того, кто уже пользуется Hlow Flow, или напиши в бота, добавим в очередь.'],
]

const TIPS = ['Что делал и что ожидал увидеть', 'Скриншот экрана с ошибкой', 'Банк, если проблема с выпиской']

export function SupportPage() {
  const [open, setOpen] = useState(0)

  return (
    <PageShell current="support" title="Поддержка">
      <section className="mx-auto grid max-w-[1120px] items-center gap-8 px-4 pt-10 pb-8 sm:px-10 sm:pt-[72px] sm:pb-12 md:grid-cols-2 md:gap-14">
        <div className="flex min-w-0 flex-col gap-4">
          <Eyebrow>Поддержка</Eyebrow>
          <h1 className="max-w-[16ch] text-[clamp(32px,5vw,52px)] leading-[1.04] font-bold tracking-[-0.03em] text-balance">
            Что-то не так? Разберёмся.
          </h1>
          <p className="max-w-[44ch] text-lg leading-normal text-ink-muted text-pretty">
            Быстрее всего через бота. Пишет живой человек, не автоответчик.
          </p>
        </div>
        <div className="flex min-w-0 items-center gap-[18px]">
          <div className="h-[120px] w-24 flex-none">
            <Mascot expression="thinking" />
          </div>
          <div className="max-w-[30ch] rounded-[16px_16px_16px_4px] border border-line bg-card px-4 py-3.5 text-[15px] leading-snug text-pretty">
            Опиши, что случилось, и приложи скриншот. Так я пойму быстрее.
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1120px] px-4 pb-14 sm:px-10 sm:pb-[72px]">
        <div className="grid gap-px overflow-hidden rounded-[20px] border border-line bg-line md:grid-cols-3">
          {CHANNELS.map((c) => {
            const ext = c.href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {}
            return (
              <a key={c.tag} href={c.href} {...ext} className="flex flex-col gap-2 bg-card p-[22px] text-ink transition-colors hover:bg-[#F2EFE9] hover:text-ink">
                <span className="font-mono text-xs text-accent-ink">{c.tag}</span>
                <span className="text-[19px] font-medium break-all">{c.title}</span>
                <span className="text-sm leading-normal text-ink-muted">{c.text}</span>
              </a>
            )
          })}
        </div>
      </section>

      <section className="border-y border-line bg-card">
        <div className="mx-auto flex max-w-[1120px] flex-col gap-7 px-4 py-14 sm:px-10 sm:py-[72px]">
          <div className="flex flex-col gap-2.5">
            <Eyebrow>Частые вопросы</Eyebrow>
            <h2 className="text-[clamp(26px,4vw,36px)] font-medium tracking-[-0.02em]">Может, ответ уже здесь</h2>
          </div>
          <div className="flex flex-col border-t border-line">
            {FAQ.map(([q, a], i) => {
              const isOpen = open === i
              return (
                <div key={q} className="border-b border-line">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="flex w-full cursor-pointer items-center justify-between gap-4 py-[18px] text-left"
                  >
                    <span className="text-[17px] font-medium">{q}</span>
                    <span className={cn('w-5 flex-none text-center font-mono text-lg text-accent-ink transition-transform duration-200', isOpen && 'rotate-45')}>
                      +
                    </span>
                  </button>
                  {isOpen && <p className="max-w-[72ch] pb-5 text-[15px] leading-relaxed text-ink-muted text-pretty">{a}</p>}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1120px] items-center gap-6 px-4 py-14 sm:px-10 sm:py-[72px] md:grid-cols-2 md:gap-14">
        <div className="flex min-w-0 flex-col gap-3">
          <h2 className="max-w-[22ch] text-[clamp(24px,3.4vw,32px)] font-medium tracking-[-0.02em] text-balance">
            Чтобы ответили с первого раза
          </h2>
          <p className="max-w-[44ch] text-base leading-normal text-ink-muted">
            Пиши с того аккаунта Telegram, под которым пользуешься Hlow Flow. Так мы сразу найдём твои данные.
          </p>
        </div>
        <div className="flex flex-col border-b border-line">
          {TIPS.map((t, i) => (
            <div key={t} className="grid grid-cols-[28px_minmax(0,1fr)] gap-3 border-t border-line py-3">
              <span className="pt-[3px] font-mono text-xs text-accent-ink">{String(i + 1).padStart(2, '0')}</span>
              <span className="text-[15px] leading-normal text-ink-muted">{t}</span>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  )
}
