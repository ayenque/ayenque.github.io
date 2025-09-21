'use client'

import { useState, useEffect } from 'react'
import { Github, Linkedin, Mail, MapPin, ExternalLink } from 'lucide-react'

export function Sidebar() {
  const [activeSection, setActiveSection] = useState('about')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'projects']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24 relative z-10">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          <a href="/">Angelo Yenque</a>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
          Desarrollador Full Stack
        </h2>
        <p className="mt-4 max-w-xs leading-normal text-slate-400">
          Apasionado por crear experiencias digitales excepcionales con tecnologías modernas.
        </p>
        
        <div className="flex items-center mt-4 text-slate-400">
          <MapPin className="mr-2 h-4 w-4" />
          <span className="text-sm">Lima, Perú</span>
        </div>

        <nav className="nav hidden lg:block" aria-label="In-page jump links">
          <ul className="mt-16 w-max">
            {[
              { id: 'about', label: 'Acerca de mí' },
              { id: 'experience', label: 'Experiencia' },
              { id: 'projects', label: 'Proyectos' }
            ].map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`group flex items-center py-3 ${
                    activeSection === item.id ? 'active' : ''
                  }`}
                >
                  <span className={`nav-indicator mr-4 h-px transition-all ${
                    activeSection === item.id 
                      ? 'w-16 bg-slate-200' 
                      : 'w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-300'
                  }`}></span>
                  <span className={`nav-text text-xs font-bold uppercase tracking-widest transition-colors ${
                    activeSection === item.id 
                      ? 'text-slate-200' 
                      : 'text-slate-500 group-hover:text-slate-200'
                  }`}>
                    {item.label}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
        <li className="mr-5 text-xs">
          <a
            className="block hover:text-slate-200 transition-colors"
            href="https://github.com/ayenque"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub (opens in a new tab)"
          >
            <Github className="h-6 w-6" />
          </a>
        </li>
        <li className="mr-5 text-xs">
          <a
            className="block hover:text-slate-200 transition-colors"
            href="https://linkedin.com/in/angeloyenque"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn (opens in a new tab)"
          >
            <Linkedin className="h-6 w-6" />
          </a>
        </li>
        <li className="mr-5 text-xs">
          <a
            className="block hover:text-slate-200 transition-colors"
            href="mailto:ayenque@gmail.com"
            aria-label="Email"
          >
            <Mail className="h-6 w-6" />
          </a>
        </li>
      </ul>
    </header>
  )
}