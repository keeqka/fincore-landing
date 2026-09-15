import { cn } from '../../lib/utils'

/** Служебный заголовок: mono, uppercase, без цветных точек и градиентов. */
export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn('font-mono text-xs tracking-[0.14em] text-ink-label uppercase', className)}>{children}</div>
  )
}
