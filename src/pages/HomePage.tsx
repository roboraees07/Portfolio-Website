import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { Hero } from '../sections/Hero'
import { WhatIDo } from '../sections/WhatIDo'
import { About } from '../sections/About'
import { Research } from '../sections/Research'
import { Blogs } from '../sections/Blogs'
import { Projects } from '../sections/Projects'
import { Experience } from '../sections/Experience'
import { Creative } from '../sections/Creative'
import { Skills } from '../sections/Skills'
import { Achievements } from '../sections/Achievements'
import { Contact } from '../sections/Contact'
import { useCvTokenFromUrl } from '../hooks/useCvTokenFromUrl'

export function HomePage() {
  useCvTokenFromUrl()

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <WhatIDo />
        <About />
        <Research />
        <Projects />
        <Experience />
        <Creative />
        <Skills />
        <Achievements />
        <Blogs />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
