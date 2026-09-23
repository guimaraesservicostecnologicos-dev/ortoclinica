import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export function PageBanner({ title }: { title: string }) {
  return (
    <div className="flex items-center justify-between gap-4 bg-gradient-to-r from-primary-dark to-primary px-6 py-16 md:px-10 md:py-20">
      <h1 className="font-serif text-3xl text-white md:text-4xl">{title}</h1>
      <Link
        to="/"
        className="hidden shrink-0 items-center gap-2 text-sm font-medium text-white/80 hover:text-white md:flex"
      >
        <ArrowLeft size={16} /> Voltar
      </Link>
    </div>
  )
}
