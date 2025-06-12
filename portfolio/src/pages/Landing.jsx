import { About } from '@/components/About'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { Navbar } from '@/components/Navbar'
import { Projects } from '@/components/Projects'
import React from 'react'

export const Landing = () => {
  return (
    <main className=' w-full min-h-screen max-w-[1920px] '>
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
    </main>
  )
}
