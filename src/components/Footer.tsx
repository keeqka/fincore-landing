import { cn } from '../lib/utils'

export function Footer({ current }: { current?: 'privacy' | 'support' }) {
  const link = (href: string, label: string, active: boolean) => (
    <a href={href} className={cn('hover:text-ink', active ? 'text-ink' : 'text-ink-muted')}>
      {label}
    </a>
  )
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-[1120px] flex-wrap items-center justify-between gap-4 px-4 py-6 sm:px-10">
        <span className="font-mono text-xs text-ink-label">Hlow Flow · {new Date().getFullYear()}</span>
        <div className="flex gap-5 text-sm">
          {link('/privacy', 'Политика данных', current === 'privacy')}
          {link('/support', 'Поддержка', current === 'support')}
        </div>
      </div>
    </footer>
  )
}
