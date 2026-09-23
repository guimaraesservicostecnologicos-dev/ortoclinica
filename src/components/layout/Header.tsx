import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { CLINIC, NAV_LINKS } from '../../data/nav'
import { Button } from '../ui/Button'
import { cn } from '../../lib/utils'
import logo from '../../assets/brand/logo.png'

const SECTION_IDS = NAV_LINKS.map((link) => link.href.slice(1))

/** Highlights whichever section is crossing the middle of the viewport. */
function useActiveSection() {
  const [active, setActive] = useState(SECTION_IDS[0])

  useEffect(() => {
    // The tall top/bottom insets leave a thin band across the middle of the
    // screen, so only one section counts as intersecting at any scroll position.
    const observer = new IntersectionObserver(
      (entries) => {
        const onScreen = entries.filter((entry) => entry.isIntersecting)
        if (!onScreen.length) return
        const highest = onScreen.reduce((a, b) =>
          a.boundingClientRect.top <= b.boundingClientRect.top ? a : b,
        )
        setActive(highest.target.id)
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return active
}

export function Header() {
  const [open, setOpen] = useState(false)
  const active = useActiveSection()

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="bg-white">
      {/* px matches the hero wrapper below, so the logo and the CTA line up
          with the left/right edges of the hero card */}
      {/* Fixed height (--header-h) so the hero below can subtract it from 100dvh */}
      <div className="flex h-[var(--header-h)] items-center justify-between gap-6 px-8 md:px-12">
        <Link to="/" className="flex" onClick={() => setOpen(false)}>
          <img
            src={logo}
            alt={`${CLINIC.name} — ${CLINIC.tagline}`}
            className="h-10 w-auto md:h-12"
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={active === link.href.slice(1) ? 'true' : undefined}
              className={cn(
                'text-[15px] whitespace-nowrap text-ink/55 transition-colors hover:text-primary',
                active === link.href.slice(1) && 'font-medium text-primary',
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center justify-end">
          <Button
            href="#contato"
            variant="outline"
            shape="pill"
            className="hidden px-7 py-2.5 font-medium lg:inline-flex"
          >
            Fale Conosco
          </Button>

          <button
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="cursor-pointer p-2 text-primary-dark lg:hidden"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="flex flex-col gap-1 border-t border-black/5 bg-white px-6 py-4 lg:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={cn(
                'rounded-md px-3 py-3 text-base text-ink/70',
                active === link.href.slice(1) && 'bg-tint font-medium text-primary',
              )}
            >
              {link.label}
            </a>
          ))}
          <div className="mt-3" onClick={() => setOpen(false)}>
            <Button href="#contato" variant="outline" shape="pill" className="w-full">
              Fale Conosco
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
