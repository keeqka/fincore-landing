import { MascotAvatar } from './ui/Mascot'
import { Button } from './ui/Button'
import { TELEGRAM_BOT_URL } from '../lib/constants'

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1120px] items-center justify-between gap-4 px-4 py-3 sm:px-10">
        <a href="#top" className="flex min-w-0 items-center gap-2.5 text-ink hover:text-ink">
          <MascotAvatar size={34} />
          <span className="text-[17px] font-medium tracking-tight">Hlow Flow</span>
        </a>

        <nav className="flex items-center gap-5 sm:gap-6">
          <a href="#how" className="hidden text-[15px] text-ink-muted hover:text-ink sm:inline">
            Как работает
          </a>
          <a href="#price" className="hidden text-[15px] text-ink-muted hover:text-ink sm:inline">
            Цены
          </a>
          <Button href={TELEGRAM_BOT_URL} variant="accent" className="px-4 py-2.5 text-[15px]">
            Открыть в Telegram
          </Button>
        </nav>
      </div>
    </header>
  )
}
