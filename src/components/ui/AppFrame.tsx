import { useLayoutEffect, useRef, useState } from 'react'
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

/**
 * Embeds a real screen of the actual product (built in mock-data mode,
 * see public/app-demo) inside an iPhone 17-style bezel — not a hand-drawn
 * mockup, so it never drifts out of sync with the real UI after a redesign.
 * `path` is a route in that app, e.g. "/chat" or "/debts".
 *
 * The Dynamic Island lives in its own reserved status-bar strip above the
 * iframe, never on top of it — the embedded page has no way to reserve
 * safe-area space for a notch it doesn't know exists, so overlaying the
 * island directly on the iframe just covers real content (the app's own
 * header). Theme is pinned to light via ?theme=light so the screenshot
 * looks the same for every visitor regardless of their own OS preference.
 *
 * Click-to-activate (same pattern Google Maps embeds use): until clicked,
 * a translucent overlay sits in front of the iframe, so the visitor's
 * mouse wheel scrolls the *landing page* like normal — an iframe is its
 * own scrollable document, so without this a wheel event over it scrolls
 * the demo's own internal page instead, leaving it stuck mid-scroll (e.g.
 * skipping past a chart straight to a list) for the rest of the visit.
 * A click "arms" it, restoring full clicking/scrolling inside the demo
 * until the cursor leaves the frame.
 */
export function AppFrame({ path, className }: { path: string; className?: string }) {
  const [loaded, setLoaded] = useState(false)
  const [active, setActive] = useState(false)
  const screenRef = useRef<HTMLDivElement>(null)
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

  return (
    <div
      className={cn(
        'relative mx-auto w-[min(230px,calc(100vw-140px))] shrink-0 sm:w-[min(280px,calc(100vw-260px))]',
        className,
      )}
    >
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
            {/* Scale is measured off THIS box, not a padded ancestor — the scaled child below must fit exactly inside it, or overflow-hidden clips a few px off every edge (it did: the leftmost/rightmost tab-bar icons were getting shaved off). */}
            {/* Rendered at native phone size, then scaled down as one unit to fit the frame — the app inside never sees a narrower viewport than a real phone actually has. */}
            <div
              className="absolute top-0 left-0 flex origin-top-left flex-col"
              style={{ width: NATIVE_WIDTH, height: NATIVE_HEIGHT, transform: `scale(${scale})`, opacity: scale ? 1 : 0 }}
            >
              {/* Status bar — reserved space, the island sits here, never over real content */}
              <div className="relative z-10 flex h-8 w-full shrink-0 items-center justify-center bg-white">
                <div className="h-[20px] w-[76px] rounded-full bg-black" />
              </div>

              <div className="relative min-h-0 flex-1" onMouseLeave={() => setActive(false)}>
                {!loaded && <div className="absolute inset-0 animate-pulse bg-white" />}
                <iframe
                  src={`/app-demo/index.html?screen=${encodeURIComponent(path)}&theme=light`}
                  title={`FinCore AI — ${path}`}
                  loading="lazy"
                  tabIndex={-1}
                  onLoad={() => setLoaded(true)}
                  className={cn('h-full w-full border-0', !active && 'pointer-events-none')}
                />
                {!active && (
                  // A <div>, not a <button> — a native button here picked up the browser's
                  // default UA rendering/focus box, which showed through as square corners
                  // poking past this rounded screen. role="button" + a key handler keep it
                  // just as operable without any of that native chrome.
                  <div
                    role="button"
                    tabIndex={0}
                    onClick={() => setActive(true)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault()
                        setActive(true)
                      }
                    }}
                    aria-label="Try this screen"
                    className="absolute inset-0 cursor-pointer bg-black/15 transition-colors hover:bg-black/25"
                  >
                    {/* Dead center, not bottom — every embedded screen has its own fixed header and a bottom tab bar, so anywhere near an edge risks sitting on top of real UI. The middle is the one spot no route pins persistent chrome to.
                        Always visible, not hover-only — touch devices have no hover, so a hover-only hint would never show on the phones this is meant to represent. */}
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/70 px-3 py-1 text-[11px] font-medium text-white backdrop-blur">
                      Tap to try it
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
