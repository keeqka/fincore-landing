import type { ReactNode } from 'react'
import { PageShell } from '../components/PageShell'
import { Eyebrow } from '../components/ui/Eyebrow'
import { Arrow } from '../components/ui/SectionHead'

const EMAIL = 'owner@hlowflow.app'
const Mail = () => <a href={'mailto:' + EMAIL}>{EMAIL}</a>

const TOC = [
  'Кто мы',
  'Какие данные собираем',
  'Чего мы не делаем',
  'Зачем используем',
  'Кому передаём',
  'Где хранятся',
  'Сколько храним',
  'Семейный доступ',
  'Ваши права',
  'Безопасность',
  'Ограничения AI',
  'Возраст',
  'Изменения',
  'Контакты',
]

const HIGHLIGHTS = [
  ['Не видим ваши счета', 'Ни логинов, ни паролей, ни карт.'],
  ['Не продаём данные', 'И не используем для чужой рекламы.'],
  ['AI сам ничего не пишет', 'Сохраняется только после вашего «да».'],
]

const COLLECT = [
  ['Из Telegram', 'Telegram ID, имя, username, фото профиля и часовой пояс. Нужны, чтобы вы входили без отдельной регистрации.'],
  ['Что вносите сами', 'Траты и доходы (суммы, даты, магазины, категории, описания). Долги, кредитные карты, ставки и платежи. Цели и накопления, настройки бюджета и расчётного месяца. Крупные траты года и собственные категории.'],
  ['Загруженные файлы', 'Фото и скриншоты чеков, скриншоты кредитных предложений и банковские выписки. Используем, чтобы распознать операции и заполнить формы.'],
  ['Переписка с AI', 'Ваши сообщения и ответы советника.'],
  ['Оплата', 'Факт и срок подписки, оплаченной звёздами Telegram (Stars). Данных вашей карты у нас нет, оплату проводит Telegram.'],
  ['Технические', 'Время действий в сервисе и настройки напоминаний: время, день разбора недели, тон и глубина объяснений.'],
]

const VENDORS = [
  ['Anthropic (Claude)', 'Распознавание чеков и выписок, AI-чат, разборы и стратегии', 'Загруженные изображения, тексты сообщений, сводка ваших финансов'],
  ['Supabase', 'База данных и серверная часть', 'Все данные аккаунта'],
  ['Cloudflare', 'Хостинг сайта и Mini App', 'Технические данные запросов'],
  ['Telegram', 'Вход, сообщения бота, оплата Stars', 'Telegram ID, содержимое сообщений бота'],
]

const RETENTION = [
  ['Пока есть аккаунт', 'Ваши данные'],
  ['30 дней', 'Удаление после удаления аккаунта'],
  ['Сразу', 'Фото чеков после распознавания'],
]

function Sec({ n, title, children }: { n: number; title: string; children: ReactNode }) {
  return (
    <section id={'p' + n} className="flex flex-col gap-3">
      <h2 className="flex items-baseline gap-3 text-[22px] font-medium tracking-[-0.01em] text-ink">
        <span className="font-mono text-[13px] text-accent-ink">{String(n).padStart(2, '0')}</span>
        {title}
      </h2>
      {children}
    </section>
  )
}

const cols = 'grid grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)_minmax(0,1.5fr)] gap-4 px-[18px]'

export function PrivacyPage() {
  return (
    <PageShell current="privacy" title="Политика конфиденциальности">
      <div className="mx-auto flex max-w-[1120px] flex-col gap-8 px-4 py-10 sm:px-10 sm:py-[72px] lg:gap-12">
        <div className="flex flex-col gap-3 border-b border-line pb-6 sm:pb-9">
          <Eyebrow>Документ</Eyebrow>
          <h1 lang="ru" className="text-[clamp(28px,6vw,56px)] leading-[1.04] font-bold tracking-[-0.03em] break-words hyphens-auto text-balance">
            Политика конфиденциальности
          </h1>
          <div className="font-mono text-xs text-ink-label">Обновлено 18.10.2026</div>
        </div>

      <div className="grid items-start gap-10 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-16">
        <aside className="hidden lg:sticky lg:top-6 lg:block">
          <nav className="flex flex-col gap-0.5 text-sm">
            {TOC.map((t, i) => (
              <a key={t} href={'#p' + (i + 1)} className="py-1 text-ink-muted hover:text-ink">
                {i + 1}. {t}
              </a>
            ))}
          </nav>
        </aside>

        <article className="flex max-w-[68ch] min-w-0 flex-col gap-10 text-base leading-relaxed text-ink-muted [&_p]:text-pretty">
          <p className="text-lg leading-normal text-ink">
            Эта политика объясняет, какие данные собирает Hlow Flow (бот @hlowflow_bot, Telegram Mini App и сайт
            hlowflow.app), зачем они нужны и как вы можете ими управлять. Пользуясь сервисом, вы соглашаетесь с этой
            политикой.
          </p>

          <div className="grid gap-px overflow-hidden rounded-[18px] border border-line bg-line sm:grid-cols-3">
            {HIGHLIGHTS.map(([t, d]) => (
              <div key={t} className="flex flex-col gap-1 bg-card px-5 py-[18px]">
                <span className="text-[15px] font-medium text-ink">{t}</span>
                <span className="text-sm leading-normal">{d}</span>
              </div>
            ))}
          </div>

          <Sec n={1} title="Кто мы">
            <p>
              Сервис Hlow Flow разрабатывает и поддерживает команда hlowflow, Казахстан. По вопросам о ваших данных
              пишите на <Mail />.
            </p>
          </Sec>

          <Sec n={2} title="Какие данные мы собираем">
            <div className="flex flex-col border-b border-line">
              {COLLECT.map(([k, v]) => (
                <div key={k} className="grid gap-x-5 gap-y-1 border-t border-line py-3.5 sm:grid-cols-[170px_minmax(0,1fr)]">
                  <span className="font-medium text-ink">{k}</span>
                  <span className="text-pretty">{v}</span>
                </div>
              ))}
            </div>
          </Sec>

          <Sec n={3} title="Чего мы не делаем">
            <div className="grid gap-2.5">
              <Arrow>Не подключаемся к вашим банковским счетам и не получаем доступ к логинам, паролям, реквизитам карт и ПИН-кодам.</Arrow>
              <Arrow>Не продаём ваши данные и не используем их для рекламы третьих лиц.</Arrow>
              <Arrow>AI не изменяет ваши данные сам: всё, что он предлагает (трату, долг, категорию, настройку), сохраняется только после вашего подтверждения.</Arrow>
            </div>
          </Sec>

          <Sec n={4} title="Зачем мы используем данные">
            <div className="grid gap-2.5">
              <Arrow>Вести учёт, считать бюджет, прогнозы и план выхода из долгов.</Arrow>
              <Arrow>Распознавать чеки и выписки и предлагать категории.</Arrow>
              <Arrow>Чтобы AI-советник отвечал с учётом ваших цифр.</Arrow>
              <Arrow>Присылать напоминания, еженедельный разбор и ежемесячную сводку в Telegram.</Arrow>
              <Arrow>Обрабатывать подписку, поддерживать работу сервиса, исправлять ошибки и отвечать на обращения.</Arrow>
            </div>
            <p>Основание обработки: ваше согласие, которое вы даёте при первом входе, и необходимость данных для работы сервиса.</p>
          </Sec>

          <Sec n={5} title="Кому мы передаём данные">
            <p>Для работы сервиса мы пользуемся подрядчиками. Они получают только те данные, которые нужны для их задачи.</p>
            <div className="overflow-x-auto rounded-[18px] border border-line bg-card text-sm leading-normal">
              <div className="min-w-[520px]">
                <div className={cols + ' bg-[#F2EFE9] py-3 font-mono text-[11px] tracking-[0.08em] text-ink-label uppercase'}>
                  <span>Подрядчик</span>
                  <span>Зачем</span>
                  <span>Какие данные</span>
                </div>
                {VENDORS.map(([a, b, c]) => (
                  <div key={a} className={cols + ' border-t border-line py-3.5'}>
                    <span className="font-medium text-ink">{a}</span>
                    <span>{b}</span>
                    <span>{c}</span>
                  </div>
                ))}
              </div>
            </div>
            <p>Мы можем раскрыть данные государственным органам, если этого требует закон.</p>
          </Sec>

          <Sec n={6} title="Где хранятся данные">
            <p>Данные хранятся на серверах Supabase.</p>
          </Sec>

          <Sec n={7} title="Как долго мы храним данные">
            <div className="grid gap-3 sm:grid-cols-3">
              {RETENTION.map(([v, k]) => (
                <div key={v} className="flex flex-col gap-1 rounded-[14px] border border-line bg-card p-4">
                  <span className="text-xl font-bold tracking-[-0.02em] text-ink">{v}</span>
                  <span className="text-sm">{k}</span>
                </div>
              ))}
            </div>
          </Sec>

          <Sec n={8} title="Семейный доступ и общие данные">
            <p>
              Если вы приглашаете партнёра по ссылке, он получает доступ к общим финансам семьи: тратам, долгам, целям
              и бюджету. Приглашайте только тех, кому доверяете. Данные одной семьи не видны другим семьям.
            </p>
            <div className="rounded-[14px] bg-note px-4 py-3.5 text-[15px] leading-normal text-ink text-pretty">
              Ссылка на «Выписку», которой вы делитесь, действует 5 минут и открывается без входа. Любой, у кого есть
              ссылка, увидит содержимое отчёта, пока она активна.
            </div>
          </Sec>

          <Sec n={9} title="Ваши права">
            <p>Вы можете в любой момент:</p>
            <div className="grid gap-2.5">
              <Arrow>запросить копию своих данных;</Arrow>
              <Arrow>исправить или дополнить их;</Arrow>
              <Arrow>
                удалить аккаунт и все данные в разделе «Профиль» в приложении или написав на <Mail />;
              </Arrow>
              <Arrow>отозвать согласие на обработку.</Arrow>
            </div>
            <p>
              Мы отвечаем на запросы в течение 30 дней. Напишите на <Mail /> с аккаунта Telegram, под которым вы
              пользуетесь сервисом, или укажите свой Telegram username, чтобы мы могли убедиться, что это вы.
            </p>
          </Sec>

          <Sec n={10} title="Безопасность">
            <p>
              Мы передаём данные по защищённому соединению, разграничиваем доступ на уровне базы данных (данные одной
              семьи недоступны другим) и подтверждаем вход через подпись Telegram.
            </p>
            <p>
              Ни один сервис не защищён на 100%, поэтому не вносите данные, которые не нужны: номера карт, пароли,
              ПИН-коды. Если мы узнаем об утечке, затрагивающей ваши данные, мы сообщим вам и уполномоченным органам в
              порядке, который требует закон.
            </p>
          </Sec>

          <Sec n={11} title="Ограничения AI">
            <p>
              Распознавание чеков и ответы AI-советника могут содержать ошибки, поэтому мы показываем результат на
              экране подтверждения до сохранения. Hlow Flow является инструментом учёта и обучения, а не финансовой,
              налоговой или инвестиционной консультацией. Решения о деньгах вы принимаете сами.
            </p>
          </Sec>

          <Sec n={12} title="Возраст">
            <p>Сервис предназначен для лиц старше 18 лет.</p>
          </Sec>

          <Sec n={13} title="Изменения политики">
            <p>
              Мы можем обновлять политику. Дата последней версии указана вверху. О существенных изменениях мы сообщим в
              боте или в приложении.
            </p>
          </Sec>

          <Sec n={14} title="Контакты">
            <a href={'mailto:' + EMAIL} className="text-xl font-medium">
              {EMAIL}
            </a>
          </Sec>
        </article>
      </div>
      </div>
    </PageShell>
  )
}
