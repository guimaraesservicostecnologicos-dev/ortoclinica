import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { TESTIMONIALS } from '../../data/testimonials'
import { SectionHeading } from '../ui/SectionHeading'
import { cn } from '../../lib/utils'

const PAGE_SIZE = 2

export function Testimonials() {
  const pages = Math.ceil(TESTIMONIALS.length / PAGE_SIZE)
  const [page, setPage] = useState(0)

  const items = TESTIMONIALS.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE)

  const go = (dir: 1 | -1) => setPage((p) => (p + dir + pages) % pages)

  return (
    <section className="bg-bg-warm px-6 py-20 md:px-10 md:py-28">
      <SectionHeading
        eyebrow="Depoimentos"
        title="Veja o que dizem"
        emphasis="nossos pacientes"
        align="center"
        className="mx-auto max-w-2xl"
      />

      <div className="relative mx-auto mt-14 max-w-4xl">
        <div className="flex items-center gap-4">
          <button
            aria-label="Depoimento anterior"
            onClick={() => go(-1)}
            className="hidden h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full border border-primary/20 text-primary hover:bg-white sm:flex"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="grid flex-1 gap-6 overflow-hidden sm:grid-cols-2">
            <AnimatePresence mode="wait">
              {items.map((t) => (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  transition={{ duration: 0.35 }}
                  className="flex h-full flex-col rounded-2xl bg-white p-6 shadow-sm shadow-black/5"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-tint font-semibold text-primary">
                      {t.initial}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-ink">{t.name}</p>
                      <p className="text-xs text-body/70">
                        {t.context} — {t.date}
                      </p>
                    </div>
                  </div>
                  <div className="mt-3 flex gap-0.5 text-accent">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                    ))}
                  </div>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-body">“{t.quote}”</p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <button
            aria-label="Próximo depoimento"
            onClick={() => go(1)}
            className="hidden h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full border border-primary/20 text-primary hover:bg-white sm:flex"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2">
          {Array.from({ length: pages }).map((_, i) => (
            <button
              key={i}
              aria-label={`Ir para página ${i + 1} de depoimentos`}
              onClick={() => setPage(i)}
              className={cn(
                'h-2.5 w-2.5 cursor-pointer rounded-full transition-colors',
                i === page ? 'bg-primary' : 'bg-primary/20',
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
