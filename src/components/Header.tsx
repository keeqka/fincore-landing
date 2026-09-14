import { Sparkles } from 'lucide-react'
import { Button } from './ui/Button'

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 h-18 border-b border-border bg-bg/70 backdrop-blur-xl">
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <a href="#top" className="flex shrink-0 items-center gap-2 text-sm font-semibold tracking-tight text-ink">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-blue to-purple">
            <Sparkles className="h-4 w-4 text-white" />
          </span>
          FinCore AI
        </a>

        <nav className="hidden items-center gap-8 text-sm text-muted md:flex">
          <a href="#process" className="transition-colors hover:text-ink">
            How it works
          </a>
          <a href="#features" className="transition-colors hover:text-ink">
            Features
          </a>
          <a href="#faq" className="transition-colors hover:text-ink">
            FAQ
          </a>
        </nav>

        <Button href="#cta" className="!px-3.5 !py-2 text-xs sm:!px-5 sm:!py-2.5 sm:text-sm">
          Open in Telegram
        </Button>
      </div>
    </header>
  )
}
