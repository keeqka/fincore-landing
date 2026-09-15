import type { ReactNode } from 'react'
import { cn } from '../../lib/utils'

/**
 * Три варианта вместо градиентной кнопки:
 * ink   — главный CTA на светлом
 * accent — действие (синий = действие, единственное его назначение)
 * ghost — второстепенное
 */
export function Button({
  children,
  href = '#',
  variant = 'ink',
  className,
}: {
  children: ReactNode
  href?: string
  variant?: 'ink' | 'accent' | 'ghost'
  className?: string
}) {
  const external = href.startsWith('http')
  const externalProps = external ? { target: '_blank', rel: 'noreferrer' } : {}

  const base =
    'group inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-base font-medium transition-colors duration-200'
  const tone =
    variant === 'accent'
      ? 'bg-accent text-white hover:bg-accent-hover'
      : variant === 'ghost'
        ? 'border border-line bg-card text-ink hover:bg-tint'
        : 'bg-ink text-paper hover:bg-accent'

  return (
    <a href={href} {...externalProps} className={cn(base, tone, className)}>
      {children}
    </a>
  )
}
