import { useEffect, type ReactNode } from 'react'
import { MascotAvatar } from './ui/Mascot'
import { Button } from './ui/Button'
import { Footer } from './Footer'
import { TELEGRAM_REQUEST_URL } from '../lib/constants'

/** Обёртка для служебных страниц: короткая шапка, контент, общий футер. */
export function PageShell({
  current,
  title,
  children,
}: {
  current: 'privacy' | 'support'
  title: string
  children: ReactNode
}) {
  useEffect(() => {
    document.title = title + ' · Hlow Flow'
  }, [title])

  const other = current === 'privacy' ? ['/support', 'Поддержка'] : ['/privacy', 'Политика данных']

  return (
    <div className="flex min-h-screen flex-col bg-paper">
      <header className="border-b border-line">
        <div className="mx-auto flex max-w-[1120px] flex-wrap items-center justify-between gap-4 px-4 py-3 sm:px-10">
          <a href="/" className="flex min-w-0 items-center gap-2.5 text-ink hover:text-ink">
            <MascotAvatar size={34} />
            <span className="text-[17px] font-medium tracking-tight">Hlow Flow</span>
          </a>
          <nav className="flex items-center gap-5">
            <a href={other[0]} className="hidden text-[15px] text-ink-muted hover:text-ink sm:inline">
              {other[1]}
            </a>
            <Button href={TELEGRAM_REQUEST_URL} variant="accent" className="px-4 py-2.5 text-[15px]">
              Открыть в Telegram
            </Button>
          </nav>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <Footer current={current} />
    </div>
  )
}
