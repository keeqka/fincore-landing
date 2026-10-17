import type { ReactNode } from 'react'
import { Reveal } from './Reveal'
import { Eyebrow } from './Eyebrow'
import { cn } from '../../lib/utils'

/** Шапка секции: заголовок слева, описание справа. Занимает всю ширину контейнера. */
export function SectionHead({
  eyebrow,
  title,
  lead,
  dark = false,
}: {
  eyebrow: string
  title: ReactNode
  lead?: ReactNode
  dark?: boolean
}) {
  return (
    <Reveal className="grid items-end gap-x-14 gap-y-4 md:grid-cols-2">
      <div className="flex min-w-0 flex-col gap-3">
        <Eyebrow className={dark ? 'text-dark-accent' : undefined}>{eyebrow}</Eyebrow>
        <h2 className="max-w-[22ch] text-[clamp(26px,4vw,40px)] font-medium tracking-[-0.02em] text-balance">{title}</h2>
      </div>
      {lead && (
        <p className={cn('max-w-[46ch] text-[17px] leading-relaxed text-pretty', dark ? 'text-dark-text-3' : 'text-ink-muted')}>
          {lead}
        </p>
      )}
    </Reveal>
  )
}

/** Сегмент-переключатель из макетов. Только визуальный. */
export function Segmented({ items, active, dark = false }: { items: string[]; active: number; dark?: boolean }) {
  return (
    <div className={cn('inline-flex gap-1 rounded-[9px] p-[3px] text-xs', dark ? 'bg-dark' : 'bg-[#F2EFE9]')}>
      {items.map((t, i) => (
        <span
          key={t}
          className={cn(
            'rounded-[7px] px-2.5 py-1.5',
            i === active
              ? dark
                ? 'bg-accent text-white'
                : 'bg-card font-medium text-ink'
              : dark
                ? 'text-dark-text-3'
                : 'text-ink-label',
          )}
        >
          {t}
        </span>
      ))}
    </div>
  )
}

export function Arrow({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-baseline gap-3">
      <span className="flex-none font-mono text-xs text-accent-ink">→</span>
      <span className="text-base leading-snug text-ink-muted">{children}</span>
    </div>
  )
}

export function Chip({ children }: { children: ReactNode }) {
  return <span className="rounded-lg bg-tint px-3 py-1.5 font-mono text-xs text-ink-muted">{children}</span>
}
