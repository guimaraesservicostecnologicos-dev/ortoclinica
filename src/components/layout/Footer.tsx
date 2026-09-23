import { Mail, MapPin, Phone } from 'lucide-react'
import { CLINIC, NAV_LINKS } from '../../data/nav'
import { FacebookIcon, InstagramIcon } from '../ui/SocialIcons'
import logo from '../../assets/brand/logo.png'

export function Footer() {
  return (
    <footer className="bg-primary-dark text-white/80">
      <div className="mx-auto grid max-w-6xl gap-10 border-b border-accent/40 px-6 py-14 md:grid-cols-[1.2fr_1fr_1fr] md:px-10">
        <div>
          <img
            src={logo}
            alt={CLINIC.name}
            className="h-10 w-auto"
            style={{ filter: 'brightness(0) invert(1)' }}
          />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
            Cuidado ortopédico especializado, do diagnóstico à reabilitação, com uma equipe dedicada à
            recuperação do seu movimento.
          </p>
          <div className="mt-5 flex gap-3">
            {[
              { Icon: FacebookIcon, label: 'Facebook' },
              { Icon: InstagramIcon, label: 'Instagram' },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-md bg-accent text-primary-dark transition-opacity hover:opacity-90"
              >
                <Icon width={18} height={18} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-base font-semibold text-white">Navegue</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-white/65 hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-base font-semibold text-white">Contato</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/65">
            <li className="flex items-start gap-2.5">
              <Phone size={16} className="mt-0.5 shrink-0 text-accent" />
              <a href={CLINIC.phoneHref} className="hover:text-white">
                {CLINIC.phoneDisplay}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Mail size={16} className="mt-0.5 shrink-0 text-accent" />
              <a href={`mailto:${CLINIC.email}`} className="hover:text-white">
                {CLINIC.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin size={16} className="mt-0.5 shrink-0 text-accent" />
              <span>{CLINIC.address}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="px-6 py-4 text-center text-[11px] text-white/45 md:px-10">
        Responsável técnico: Dr. Sergio Marinho de Gusmão Canuto — CRM-AL 3223 - RQE 934 | Direção clínica: Ortoclínica
      </div>
      <div className="bg-black/15 px-6 py-3 text-center text-[11px] text-white/40 md:px-10">
        © {new Date().getFullYear()} {CLINIC.name}. Todos os direitos reservados. CNPJ 00.000.000/0001-00
      </div>
    </footer>
  )
}
