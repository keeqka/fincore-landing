import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useScroll, useTransform } from 'framer-motion'

/** process_timeline_line — the spine connecting every NarrativeSection node, filling in as the reader scrolls. */
export function ProcessTimeline({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 20%', 'end 70%'] })
  const height = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section id="process" ref={ref} className="relative">
      <div className="mx-auto max-w-3xl px-6">
        <div className="relative">
          <div className="absolute top-2 bottom-2 left-6 w-px bg-border sm:left-7" />
          <motion.div className="absolute top-2 left-6 w-px bg-gradient-to-b from-blue via-purple to-green sm:left-7" style={{ height }} />
          {children}
        </div>
      </div>
    </section>
  )
}
