import { ArrowRight, MessageCircle } from 'lucide-react'
import { Reveal } from './ui/Reveal'
import { Button } from './ui/Button'
import { Glow } from './ui/Glow'

export function FinalCTA() {
  return (
    <section id="cta" className="block-snap relative flex min-h-[calc(100svh-4.5rem)] flex-col justify-center overflow-hidden py-16">
      <Glow color="blue" className="left-1/2 top-1/2 h-[420px] w-[640px] -translate-x-1/2 -translate-y-1/2" />

      <div className="relative mx-auto max-w-2xl px-6 text-center">
        <Reveal>
          <p className="mb-5 text-xs font-semibold tracking-[0.25em] text-purple-soft uppercase">Get started in a minute</p>
          <h2 className="text-balance text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            Get started with <span className="bg-gradient-to-r from-blue-soft to-purple-soft bg-clip-text text-transparent">FinCore AI</span>
          </h2>
          <p className="mx-auto mt-5 max-w-md text-balance text-base leading-relaxed text-muted">
            Open the bot, log your first debt, or send a photo of a receipt — the AI handles the rest.
          </p>
          <div className="mt-9 flex justify-center">
            <Button href="#top" className="!px-9 !py-4 text-base">
              <MessageCircle className="h-4.5 w-4.5" />
              Open in Telegram
              <ArrowRight className="h-4.5 w-4.5" />
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
