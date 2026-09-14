import { useState } from 'react'
import { cn } from '../../lib/utils'

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
 * a transparent overlay sits in front of the iframe, so the visitor's
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

        <div className="flex aspect-[9/19.5] w-full flex-col overflow-hidden rounded-[2.6rem] bg-black p-[3px]">
          <div className="flex h-full w-full flex-col overflow-hidden rounded-[2.4rem] bg-white">
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
                <button
                  type="button"
                  onClick={() => setActive(true)}
                  aria-label="Try this screen"
                  className="group absolute inset-0 cursor-pointer bg-transparent"
                >
                  <span className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/70 px-3 py-1 text-[11px] font-medium text-white opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
                    Tap to try it
                  </span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
