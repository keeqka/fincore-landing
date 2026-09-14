import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { Button } from './ui/Button'
import { Glow } from './ui/Glow'
import { TELEGRAM_BOT_URL } from '../lib/constants'

export function Hero() {
  return (
    <section id="top" className="block-snap relative flex min-h-[calc(100svh-4.5rem)] flex-col justify-center overflow-hidden py-16">
      <Glow color="blue" className="-top-20 left-1/2 h-[420px] w-[620px] -translate-x-1/2" />
      <Glow color="purple" className="top-40 right-[-120px] h-[360px] w-[420px]" />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-border-strong bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-muted uppercase"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-blue" />
          </span>
          Tired of financial chaos?
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-balance text-5xl font-bold tracking-tight text-ink sm:text-6xl md:text-7xl"
        >
          Your finances.
          <br />
          <span className="bg-gradient-to-r from-blue-soft via-purple to-purple-soft bg-clip-text text-transparent">Sorted.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-6 max-w-xl text-balance text-lg leading-relaxed text-muted"
        >
          Your personal finance AI, right inside Telegram. It reads receipts and bank statements, works out a debt payoff plan, and keeps an eye
          on your budget — then explains it all in plain words, not spreadsheets.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button href={TELEGRAM_BOT_URL}>
            <MessageCircle className="h-4 w-4" />
            Open in Telegram
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Button>
          <Button href="#process" variant="ghost">
            How it works
          </Button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-8 text-xs tracking-wide text-faint uppercase"
        >
          Runs inside Telegram · Nothing else to install
        </motion.p>
      </div>
    </section>
  )
}
