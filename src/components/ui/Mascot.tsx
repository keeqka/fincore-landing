import { cn } from '../../lib/utils'

export type Expression =
  | 'calm'
  | 'focused'
  | 'happy'
  | 'alert'
  | 'thinking'
  | 'wink'
  | 'sad'
  | 'shock'
  | 'sleepy'
  | 'smug'
  | 'stare'

/**
 * Маскот «Чек»: обрывок кассовой ленты с лицом в верхней четверти.
 * viewBox 100×250 (пропорция ленты 2:5). Наклон −2.5° встроен в трансформ.
 * Между состояниями меняются ТОЛЬКО глаза, рот и (у sad) брови.
 */
const TORN =
  'M0,4 L8.33,0 L16.67,4 L25,0 L33.33,4 L41.67,0 L50,4 L58.33,0 L66.67,4 L75,0 L83.33,4 L91.67,0 L100,4 ' +
  'V246 L91.67,250 L83.33,246 L75,250 L66.67,246 L58.33,250 L50,246 L41.67,250 L33.33,246 L25,250 L16.67,246 L8.33,250 L0,246 Z'

const PRINT_ROWS = [
  { y: 97.5, labelW: 24, amountW: 16 },
  { y: 112.5, labelW: 34, amountW: 12 },
  { y: 127.5, labelW: 28, amountW: 18 },
  { y: 142.5, labelW: 20, amountW: 14 },
]

const INK = '#191C21'
const PAPER = '#F6F1E8'

function Face({ expression }: { expression: Expression }) {
  switch (expression) {
    case 'focused':
      return (
        <g fill={INK}>
          <rect x="21" y="29.5" width="15" height="4.5" rx="2.2" />
          <rect x="64" y="29.5" width="15" height="4.5" rx="2.2" />
          <rect x="43" y="55" width="14" height="3.5" rx="1.5" />
        </g>
      )
    case 'happy':
      return (
        <g fill={INK}>
          <path d="M20,36 a8,7 0 0 1 16,0 Z" />
          <path d="M64,36 a8,7 0 0 1 16,0 Z" />
          <path d="M34,52 h32 a16,9 0 0 1 -32,0 Z" />
        </g>
      )
    case 'alert':
      return (
        <g fill={INK}>
          <ellipse cx="28" cy="33" rx="8" ry="7.5" />
          <ellipse cx="72" cy="33" rx="8" ry="7.5" />
          <ellipse cx="50" cy="57" rx="6" ry="5.5" />
        </g>
      )
    case 'thinking':
      return (
        <g fill={INK}>
          <ellipse cx="33" cy="31" rx="7" ry="5.5" />
          <ellipse cx="77" cy="31" rx="7" ry="5.5" />
          <rect x="44" y="55" width="19" height="3.5" rx="1.5" transform="rotate(-6 53.5 56.75)" />
        </g>
      )
    case 'wink':
      return (
        <g fill={INK}>
          <ellipse cx="28.5" cy="31" rx="7.5" ry="5.5" />
          <path d="M64,37 a8,5.5 0 0 1 16,0 Z" />
          <path d="M36,52.5 h30 a15,7.5 0 0 1 -30,0 Z" transform="rotate(-5 51 56)" />
        </g>
      )
    case 'sad':
      return (
        <g fill={INK}>
          <ellipse cx="28.5" cy="36.5" rx="7.5" ry="5" />
          <ellipse cx="71.5" cy="36.5" rx="7.5" ry="5" />
          <rect x="19" y="25" width="18" height="3" rx="1" transform="rotate(-12 28 26.5)" />
          <rect x="63" y="25" width="18" height="3" rx="1" transform="rotate(12 72 26.5)" />
          <path d="M38,62 a12,6 0 0 1 24,0 Z" />
        </g>
      )
    case 'shock':
      return (
        <g>
          <g fill={INK}>
            <ellipse cx="27.5" cy="33.25" rx="9.5" ry="9.25" />
            <ellipse cx="72.5" cy="33.25" rx="9.5" ry="9.25" />
            <ellipse cx="50" cy="59.75" rx="9" ry="8.75" />
          </g>
          <g fill={PAPER}>
            <ellipse cx="27" cy="29.25" rx="3" ry="2.75" />
            <ellipse cx="67" cy="29.25" rx="3" ry="2.75" />
          </g>
        </g>
      )
    case 'sleepy':
      return (
        <g fill={INK}>
          <rect x="21" y="33.5" width="15" height="3.5" rx="1" />
          <rect x="64" y="33.5" width="15" height="3.5" rx="1" />
          <ellipse cx="50" cy="57.75" rx="5" ry="3.75" />
        </g>
      )
    case 'smug':
      return (
        <g fill={INK}>
          <path d="M21,32 h15 a7.5,6.5 0 0 1 -15,0 Z" />
          <path d="M64,32 h15 a7.5,6.5 0 0 1 -15,0 Z" />
          <path d="M46,54 h20 a10,5.5 0 0 1 -20,0 Z" transform="rotate(-12 56 56.75)" />
        </g>
      )
    case 'stare':
      return (
        <g>
          <g fill={INK}>
            <ellipse cx="29" cy="37.75" rx="15" ry="16.75" />
            <ellipse cx="71" cy="37.75" rx="15" ry="16.75" />
          </g>
          <g fill={PAPER}>
            <ellipse cx="24" cy="30" rx="5" ry="5.5" />
            <ellipse cx="70" cy="30" rx="5" ry="5.5" />
            <ellipse cx="33.5" cy="43.75" rx="2.5" ry="2.75" />
            <ellipse cx="78.5" cy="43.75" rx="2.5" ry="2.75" />
          </g>
          <path d="M38,61 q6,6.5 12,0 q6,6.5 12,0" fill="none" stroke={INK} strokeWidth="2" strokeLinecap="round" />
        </g>
      )
    default:
      return (
        <g fill={INK}>
          <ellipse cx="28.5" cy="31" rx="7.5" ry="5.5" />
          <ellipse cx="71.5" cy="31" rx="7.5" ry="5.5" />
          <rect x="40" y="55" width="20" height="3.8" rx="1.6" />
        </g>
      )
  }
}

export function Mascot({
  expression = 'calm',
  className,
  title = 'Чек, маскот Hlow Flow',
}: {
  expression?: Expression
  className?: string
  title?: string
}) {
  return (
    <svg viewBox="0 0 100 250" className={cn('h-full w-full', className)} role="img" aria-label={title}>
      <g transform="rotate(-2.5 50 125)">
        <path d={TORN} fill={PAPER} />
        <rect x="20" y="11" width="60" height="4" rx="1" fill="#BDB4A5" />
        <Face expression={expression} />
        <rect x="20" y="82.5" width="60" height="1" fill="#DED6C8" />
        {PRINT_ROWS.map((r) => (
          <g key={r.y} fill="#D8D0C2">
            <rect x="20" y={r.y} width={r.labelW} height="3" rx="1" />
            <rect x={80 - r.amountW} y={r.y} width={r.amountW} height="3" rx="1" />
          </g>
        ))}
        <rect x="20" y="162.5" width="60" height="1" fill="#DED6C8" />
        <rect x="20" y="172" width="22" height="5.5" rx="1" fill="#BDB4A5" />
        {/* единственный синий элемент на маскоте: строка «итого» */}
        <rect x="54" y="172" width="26" height="5.5" rx="1" fill="#3C82C8" />
        <rect x="20" y="205" width="60" height="2.8" rx="1" fill="#E2DACC" />
        <rect x="20" y="217" width="34" height="2.8" rx="1" fill="#E2DACC" />
        <rect x="20" y="229" width="24" height="2.8" rx="1" fill="#E2DACC" />
      </g>
    </svg>
  )
}

/** Круглый кроп для аватарки: рваный верх и лицо. Проверено от 26px. */
export function MascotAvatar({
  expression = 'calm',
  size = 40,
  className,
}: {
  expression?: Expression
  size?: number
  className?: string
}) {
  return (
    <span
      className={cn('relative block shrink-0 overflow-hidden rounded-full bg-tint', className)}
      style={{ width: size, height: size }}
    >
      <span className="absolute" style={{ left: '-57%', top: 0, width: '214%', height: '214%' }}>
        <Mascot expression={expression} />
      </span>
    </span>
  )
}
