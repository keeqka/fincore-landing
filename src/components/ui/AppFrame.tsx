import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { cn } from '../../lib/utils'

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
const STATUS_BAR_HEIGHT = 32

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
        // Status bar — reserved space, the island sits here, never over real content
        <div className="relative z-10 flex w-full shrink-0 items-center justify-center bg-white" style={{ height: STATUS_BAR_HEIGHT }}>
          <div className="h-[20px] w-[76px] rounded-full bg-black" />
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
