import { Hero } from '../components/sections/Hero'
import { About } from '../components/sections/About'
import { Team } from '../components/sections/Team'
import { Convenios } from '../components/sections/Convenios'
import { Testimonials } from '../components/sections/Testimonials'
import { ContactSection } from '../components/sections/ContactSection'

export function Home() {
  return (
    <>
      <Hero />
      <About />
      <Team />
      <Convenios />
      <Testimonials />
      <ContactSection />
    </>
  )
}
