import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { CLINIC, NAV_LINKS } from '../../data/nav'
import { Button } from '../ui/Button'
import { cn } from '../../lib/utils'
import logo from '../../assets/brand/logo.png'

export function Header() {
  const [open, setOpen] = useState(false)

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

        <nav className="hidden items-center gap-9 lg:flex">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              end={link.href === '/'}
              className={({ isActive }) =>
                cn(
                  'text-[15px] whitespace-nowrap text-ink/55 transition-colors hover:text-primary',
                  isActive && 'font-medium text-primary',
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center justify-end">
          <Button
            href="/contato"
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
            <NavLink
              key={link.href}
              to={link.href}
              end={link.href === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                cn(
                  'rounded-md px-3 py-3 text-base text-ink/70',
                  isActive && 'bg-tint font-medium text-primary',
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
          <div className="mt-3">
            <Button href="/contato" variant="outline" shape="pill" className="w-full">
              Fale Conosco
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
