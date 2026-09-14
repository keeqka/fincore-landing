import { cn } from '../../lib/utils'

/** Large blurred radial-gradient blob used behind sections for the premium neon-ambient look. */
export function Glow({
  color = 'blue',
  className,
}: {
  color?: 'blue' | 'purple'
  className?: string
}) {
  return (
    <div
      aria-hidden
      className={cn(
        'pointer-events-none absolute rounded-full blur-[110px]',
        color === 'blue' ? 'bg-blue/25' : 'bg-purple/25',
        className,
      )}
    />
  )
}
