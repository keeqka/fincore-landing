import { useState } from 'react'
import { cn } from '../../lib/utils'

/**
 * Embeds a real screen of the actual product (built in mock-data mode,
 * see public/app-demo) inside an iPhone 17-style bezel with a Dynamic
 * Island — not a hand-drawn mockup, so it never drifts out of sync with the
 * real UI after a redesign. `path` is a route in that app, e.g. "/chat".
 */
export function AppFrame({ path, className }: { path: string; className?: string }) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className={cn('relative mx-auto w-[270px] shrink-0 sm:w-[290px]', className)}>
      <div className="absolute -inset-4 rounded-[4rem] bg-gradient-to-b from-blue/20 to-purple/20 blur-2xl" aria-hidden />

      {/* Titanium-style edge */}
      <div className="relative rounded-[3.25rem] bg-gradient-to-b from-[#4a4a4d] via-[#232326] to-[#1c1c1e] p-[3px] shadow-2xl">
        <div className="rounded-[3.15rem] bg-black p-2">
          {/* Side controls */}
          <span className="absolute -left-[3px] top-[86px] h-6 w-[3px] rounded-l-sm bg-[#3a3a3c]" aria-hidden />
          <span className="absolute -left-[3px] top-[124px] h-10 w-[3px] rounded-l-sm bg-[#3a3a3c]" aria-hidden />
          <span className="absolute -left-[3px] top-[168px] h-10 w-[3px] rounded-l-sm bg-[#3a3a3c]" aria-hidden />
          <span className="absolute -right-[3px] top-[140px] h-14 w-[3px] rounded-r-sm bg-[#3a3a3c]" aria-hidden />

          <div className="relative aspect-[9/19.5] w-full overflow-hidden rounded-[2.5rem] bg-white">
            {!loaded && <div className="absolute inset-0 animate-pulse bg-white" />}
            <iframe
              src={`/app-demo/index.html?screen=${encodeURIComponent(path)}`}
              title={`FinCore AI — ${path}`}
              loading="lazy"
              onLoad={() => setLoaded(true)}
              className="h-full w-full border-0"
            />
            {/* Dynamic Island */}
            <div className="pointer-events-none absolute left-1/2 top-[10px] z-20 h-[26px] w-[92px] -translate-x-1/2 rounded-full bg-black" aria-hidden />
          </div>
        </div>
      </div>
    </div>
  )
}
