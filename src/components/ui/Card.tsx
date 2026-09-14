import type { ReactNode } from 'react'
import { cn } from '../../lib/utils'

export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-3xl border border-border bg-surface/80 backdrop-blur-xl',
        'shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)]',
        className,
      )}
    >
      {children}
    </div>
  )
}
