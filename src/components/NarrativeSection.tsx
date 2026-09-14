import type { ReactNode } from 'react'
import { Reveal } from './ui/Reveal'
import { Eyebrow } from './ui/Eyebrow'
import { cn } from '../lib/utils'

interface NarrativeSectionProps {
  step: string
  eyebrow: string
  title: ReactNode
  description: ReactNode
  tone?: 'blue' | 'purple' | 'green'
  children: ReactNode
}

/**
 * One node on the central process_timeline_line — number + eyebrow + heading
 * on the left rail, card content on the right.
 *
 * One block = one screen: the outer div is a snap target sized to exactly
 * fill the viewport below the fixed header, and flex-centers the actual
 * content group (node+text+card) inside it — the node stays visually
 * anchored to the text/card group rather than the top of the tall screen.
 */
export function NarrativeSection({ step, eyebrow, title, description, tone = 'blue', children }: NarrativeSectionProps) {
  const ring = tone === 'blue' ? 'shadow-[0_0_0_1px_rgba(91,140,255,0.4),0_0_40px_-6px_rgba(91,140,255,0.55)]' : tone === 'purple' ? 'shadow-[0_0_0_1px_rgba(161,91,255,0.4),0_0_40px_-6px_rgba(161,91,255,0.55)]' : 'shadow-[0_0_0_1px_rgba(74,222,128,0.4),0_0_40px_-6px_rgba(74,222,128,0.55)]'

  return (
    <div className="block-snap flex min-h-[calc(100svh-4.5rem)] flex-col justify-center py-10">
      <div className="relative pl-20 sm:pl-28">
        {/* Not wrapped in <Reveal>: framer-motion applies `transform`, which creates a new
            CSS containing block and would break this element's `absolute left-0` positioning
            (it would then anchor to the Reveal wrapper's box instead of this section root). */}
        <div
          className={cn(
            'absolute left-0 top-0 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full border border-border-strong bg-bg-soft font-mono text-sm font-semibold text-ink',
            ring,
          )}
        >
          {step}
        </div>

        <Reveal delay={0.05} className="mb-6 max-w-2xl space-y-4">
          <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{title}</h2>
          <p className="text-balance text-base leading-relaxed text-muted sm:text-lg">{description}</p>
        </Reveal>

        <Reveal delay={0.12}>{children}</Reveal>
      </div>
    </div>
  )
}
