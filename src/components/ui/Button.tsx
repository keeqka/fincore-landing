import type { ReactNode } from 'react'
import { cn } from '../../lib/utils'

export function Button({
  children,
  href = '#',
  variant = 'primary',
  className,
}: {
  children: ReactNode
  href?: string
  variant?: 'primary' | 'ghost'
  className?: string
}) {
  const external = href.startsWith('http')
  const externalProps = external ? { target: '_blank', rel: 'noreferrer' } : {}

  if (variant === 'ghost') {
    return (
      <a
        href={href}
        {...externalProps}
        className={cn(
          'inline-flex items-center justify-center gap-2 rounded-full border border-border-strong px-6 py-3 text-sm font-medium text-ink',
          'transition-colors hover:border-white/30 hover:bg-white/5',
          className,
        )}
      >
        {children}
      </a>
    )
  }
  return (
    <a
      href={href}
      {...externalProps}
      className={cn(
        'group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-7 py-3.5 text-sm font-semibold text-white',
        'shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_10px_30px_-6px_rgba(91,140,255,0.55)]',
        'transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]',
        className,
      )}
    >
      <span className="absolute inset-0 bg-gradient-to-r from-blue via-purple to-blue bg-[length:200%_100%] transition-[background-position] duration-700 group-hover:bg-[position:100%_0]" />
      <span className="relative inline-flex items-center gap-2 whitespace-nowrap">{children}</span>
    </a>
  )
}
