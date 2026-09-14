import { useEffect, useRef } from 'react'
import { animate, useInView } from 'framer-motion'

/** Animates a number from 0 to `value` once it scrolls into view — real motion, not a static digit. */
export function CountUp({
  value,
  format = (n) => Math.round(n).toLocaleString('en-US'),
  suffix = '',
  duration = 1.2,
}: {
  value: number
  format?: (n: number) => string
  suffix?: string
  duration?: number
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  useEffect(() => {
    if (!inView || !ref.current) return
    const node = ref.current
    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        node.textContent = format(v) + suffix
      },
    })
    return () => controls.stop()
  }, [inView, value, format, suffix, duration])

  return <span ref={ref}>{format(0) + suffix}</span>
}
