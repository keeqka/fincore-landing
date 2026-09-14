import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { cn } from '../../lib/utils'

// Generic outline icons (lucide's Signal/Wifi/Battery) read as generic app
// icons, not the specific iOS glyphs visitors recognize at a glance — hand-
// drawn to match the real shapes instead: ascending signal bars, a filled
// wifi arc, a battery pill with a cap. Sized for the native 13px status-bar row.
function SignalGlyph() {
  return (
    <svg width="17" height="11" viewBox="0 0 17 11" fill="black" aria-hidden>
      <rect x="0" y="7" width="3" height="4" rx="0.6" />
      <rect x="4.5" y="5" width="3" height="6" rx="0.6" />
      <rect x="9" y="2.5" width="3" height="8.5" rx="0.6" />
      <rect x="13.5" y="0" width="3" height="11" rx="0.6" />
    </svg>
  )
}

function WifiGlyph() {
  return (
    <svg width="15" height="11" viewBox="0 0 15 11" fill="black" aria-hidden>
      <path d="M7.5 11a1.3 1.3 0 1 0 0-2.6 1.3 1.3 0 0 0 0 2.6Z" />
      <path d="M4.1 6.7a4.9 4.9 0 0 1 6.8 0L9.4 8.2a2.6 2.6 0 0 0-3.8 0L4.1 6.7Z" />
      <path d="M1.2 3.7a9 9 0 0 1 12.6 0l-1.5 1.5a6.8 6.8 0 0 0-9.6 0L1.2 3.7Z" />
    </svg>
  )
}

function BatteryGlyph() {
  return (
    <svg width="25" height="12" viewBox="0 0 25 12" fill="none" aria-hidden>
      <rect x="0.75" y="0.75" width="21" height="10.5" rx="2.75" stroke="black" strokeOpacity="0.35" strokeWidth="1" />
      <rect x="2.25" y="2.25" width="18" height="7.5" rx="1.5" fill="black" />
      <rect x="22.5" y="4" width="1.5" height="4" rx="0.75" fill="black" fillOpacity="0.4" />
    </svg>
  )
}

/**
 * The real app is genuinely responsive, but no real phone has a CSS
 * viewport narrower than this (iPhone SE 2020 / 375×812 — the de facto
 * "smallest realistic phone" baseline). The decorative frame below can be
 * drawn much smaller than that for the landing page's layout, but the
 * *iframe itself* must never be told it's narrower than a real device
 * would ever be — that's an impossible rendering condition, not a real
 * bug, and it broke things (e.g. the category chart's legend) that are
 * fine on every actual phone. So the iframe always renders at this native
 * size, and the whole thing is scaled down visually to fit the frame.
 */
const NATIVE_WIDTH = 375
const NATIVE_HEIGHT = 812
// Taller than the status row itself (~20px) needs to be — the extra room
// above it is what keeps the time/icons clear of the screen's own top
// corner radius instead of sitting flush against the curve.
const STATUS_BAR_HEIGHT = 44
// Reserved blank strip below the app's own content, bezel mode only — same
// idea as the status-bar reservation above (a real iPhone carves out a home-
// indicator safe area here too), just enough to clear the screen's own
// corner radius so the tab bar's outer icons/labels don't clip into it.
const HOME_INDICATOR_HEIGHT = 20

/**
 * Embeds a real screen of the actual product (built in mock-data mode, see
 * public/app-demo) inside an iPhone Pro-style bezel — not a hand-drawn
 * mockup, so it never drifts out of sync with the real UI after a redesign.
 * `path` is a route in that app, e.g. "/chat" or "/debts". Set
 * `bezel={false}` for a plain rounded card with no iPhone chrome (no
 * titanium edge, no Dynamic Island) — same glow and shadow, just without
 * the phone around it.
 *
 * The Dynamic Island (bezel mode only) lives in its own reserved status-bar
 * strip above the iframe, never on top of it — the embedded page has no way
 * to reserve safe-area space for a notch it doesn't know exists, so
 * overlaying the island directly on the iframe just covers real content
 * (the app's own header). Theme is pinned to light via ?theme=light so the
 * screenshot looks the same for every visitor regardless of their own OS
 * preference.
 *
 * The iframe is interactive from the start — no click-to-activate gate.
 * That gate used to exist because an iframe is its own scrollable document:
 * a visitor's mouse wheel over it would scroll the *demo's* page instead of
 * the landing page around it, leaving it stuck mid-scroll. Fixed at the
 * source instead — the embedded app (see home/app's main.tsx, gated on
 * ?embedded=1) swallows its own wheel events and posts the delta up via
 * postMessage; the listener below applies that scroll to this page. From
 * the visitor's side it now just scrolls through, like a screenshot would,
 * while every tap/click still reaches the real app immediately.
 */
export function AppFrame({ path, className, bezel = true }: { path: string; className?: string; bezel?: boolean }) {
  const [loaded, setLoaded] = useState(false)
  const screenRef = useRef<HTMLDivElement>(null)
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [scale, setScale] = useState(0)

  useLayoutEffect(() => {
    const el = screenRef.current
    if (!el) return
    const update = () => setScale(el.clientWidth / NATIVE_WIDTH)
    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  useEffect(() => {
    function onMessage(e: MessageEvent) {
      if (e.source !== iframeRef.current?.contentWindow) return
      if (e.data?.type !== 'fincore-demo-scroll' || typeof e.data.deltaY !== 'number') return
      window.scrollBy({ top: e.data.deltaY })
    }
    window.addEventListener('message', onMessage)
    return () => window.removeEventListener('message', onMessage)
  }, [])

  const screen = (
    <div
      className="absolute top-0 left-0 flex origin-top-left flex-col"
      style={{ width: NATIVE_WIDTH, height: NATIVE_HEIGHT, transform: `scale(${scale})`, opacity: scale ? 1 : 0 }}
    >
      {bezel && (
        // Status bar — reserved space, the island sits here, never over real content.
        // Icons are static (always "9:41", full battery) — this is a fixed mockup, not
        // a live device, and a real iPhone status bar always reads that way in marketing shots.
        // flex-col justify-end anchors the actual row to the bottom of the taller reserved
        // band, so the empty space lands above it, clear of the top corner curve, instead of
        // the row itself sitting flush against it.
        <div
          className="relative z-10 flex w-full shrink-0 flex-col justify-end bg-white/85 backdrop-blur-md"
          style={{ height: STATUS_BAR_HEIGHT }}
        >
          <div className="relative flex items-center justify-between px-6 pb-1.5 text-[13px] font-semibold text-black">
            <span>9:41</span>
            <div className="absolute top-1/2 left-1/2 h-[20px] w-[76px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-black" />
            <div className="flex items-center gap-1.5">
              <SignalGlyph />
              <WifiGlyph />
              <BatteryGlyph />
            </div>
          </div>
        </div>
      )}

      <div className="relative min-h-0 flex-1">
        {!loaded && <div className="absolute inset-0 animate-pulse bg-white" />}
        <iframe
          ref={iframeRef}
          src={`/app-demo/index.html?screen=${encodeURIComponent(path)}&theme=light&embedded=1`}
          title={`FinCore AI — ${path}`}
          loading="lazy"
          tabIndex={-1}
          onLoad={() => setLoaded(true)}
          className="h-full w-full border-0"
        />
      </div>

      {bezel && (
        <div
          className="relative z-10 flex w-full shrink-0 items-center justify-center bg-white/85 backdrop-blur-md"
          style={{ height: HOME_INDICATOR_HEIGHT }}
        >
          <div className="h-[4px] w-[110px] rounded-full bg-black/80" />
        </div>
      )}
    </div>
  )

  const wrapperClassName = cn(
    'relative mx-auto w-[min(230px,calc(100vw-140px))] shrink-0 sm:w-[min(280px,calc(100vw-260px))]',
    className,
  )

  if (!bezel) {
    return (
      <div className={wrapperClassName}>
        <div className="absolute -inset-3 rounded-[2.5rem] bg-gradient-to-b from-blue/20 to-purple/20 blur-2xl" aria-hidden />
        {/* aspect-ratio lives on the same box scale is measured off, so the scaled content always
            fits it exactly — see the bezel branch below for why that matters (it didn't, once). */}
        <div ref={screenRef} className="relative aspect-[375/812] w-full overflow-hidden rounded-[1.75rem] bg-white shadow-2xl">
          {screen}
        </div>
      </div>
    )
  }

  return (
    <div className={wrapperClassName}>
      <div className="absolute -inset-4 rounded-[3.5rem] bg-gradient-to-b from-blue/20 to-purple/20 blur-2xl" aria-hidden />

      {/* Titanium-style edge — every decorative piece below is positioned relative to this one box. */}
      <div className="relative rounded-[2.75rem] bg-gradient-to-b from-[#4a4a4d] via-[#242427] to-[#19191b] p-[3px] shadow-2xl">
        <span className="absolute -right-px top-[92px] h-12 w-[3px] rounded-r-sm bg-[#3a3a3c]" aria-hidden />
        <span className="absolute -left-px top-[78px] h-6 w-[3px] rounded-l-sm bg-[#3a3a3c]" aria-hidden />
        <span className="absolute -left-px top-[112px] h-9 w-[3px] rounded-l-sm bg-[#3a3a3c]" aria-hidden />
        <span className="absolute -left-px top-[150px] h-9 w-[3px] rounded-l-sm bg-[#3a3a3c]" aria-hidden />

        <div className="w-full overflow-hidden rounded-[2.6rem] bg-black p-[3px]">
          {/* aspect-ratio lives HERE, on the exact box scale is measured off — not on the padded
              ancestor above. That box's own height must be width*(812/375) with no padding in the
              way, or it ends up a few px taller than the scaled content actually fits, leaving a
              sliver of this div's own white background exposed past the content's bottom edge —
              square corners poking out past the frame's rounded ones. */}
          <div ref={screenRef} className="relative aspect-[375/812] w-full overflow-hidden rounded-[2.4rem] bg-white">
            {/* Rendered at native phone size, then scaled down as one unit to fit the frame — the app inside never sees a narrower viewport than a real phone actually has. */}
            {screen}
          </div>
        </div>
      </div>
    </div>
  )
}
