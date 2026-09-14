import { Sparkles } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-faint sm:flex-row">
        <div className="flex items-center gap-2 text-ink">
          <span className="flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-blue to-purple">
            <Sparkles className="h-3.5 w-3.5 text-white" />
          </span>
          <span className="font-medium">FinCore AI</span>
        </div>
        <p>A finance AI for Telegram · {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}
