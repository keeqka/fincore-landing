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
 */
export function AppFrame({ path, className }: { path: string; className?: string }) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className={cn('relative mx-auto w-[300px] shrink-0 sm:w-[340px]', className)}>
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

            <div className="relative min-h-0 flex-1">
              {!loaded && <div className="absolute inset-0 animate-pulse bg-white" />}
              <iframe
                src={`/app-demo/index.html?screen=${encodeURIComponent(path)}&theme=light`}
                title={`FinCore AI — ${path}`}
                loading="lazy"
                onLoad={() => setLoaded(true)}
                className="h-full w-full border-0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
