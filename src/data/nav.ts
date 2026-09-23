export const NAV_LINKS = [
  { label: 'Início', href: '/' },
  { label: 'Contato', href: '/contato' },
] as const

export const CLINIC = {
  name: 'Ortoclínica',
  tagline: 'Hospital de Ortopedia',
  phoneDisplay: '(82) 3325-5881',
  phoneHref: 'tel:+5582988783128',
  whatsappDisplay: '(82) 98878-3128',
  whatsappHref: 'https://wa.me/5582988783128',
  email: 'contato@ortoclinica.com.br',
  address: 'Rua Olindina Campos Teixeira, 100 — Jatiúca, Maceió — AL',
  mapsEmbedSrc:
    'https://www.google.com/maps?q=-9.646058708594285,-35.70898853388786&output=embed',
} as const
