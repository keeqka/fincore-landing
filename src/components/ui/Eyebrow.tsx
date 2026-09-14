import { cn } from '../../lib/utils'

export function Eyebrow({ children, tone = 'blue' }: { children: React.ReactNode; tone?: 'blue' | 'purple' | 'green' }) {
  const dot = tone === 'blue' ? 'bg-blue' : tone === 'purple' ? 'bg-purple' : 'bg-green'
  const text = tone === 'blue' ? 'text-blue-soft' : tone === 'purple' ? 'text-purple-soft' : 'text-green'
  return (
    <div className={cn('inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase', text)}>
      <span className={cn('h-1.5 w-1.5 rounded-full', dot)} />
      {children}
    </div>
  )
}
