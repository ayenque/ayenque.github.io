"use client";

import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Twitter, Download, ExternalLink } from 'lucide-react';
import Image from 'next/image';

const navigation = [
  { name: 'Acerca de mí', href: '#about', id: 'about' },
  { name: 'Experiencia', href: '#experience', id: 'experience' },
  { name: 'Habilidades', href: '#skills', id: 'skills' },
  { name: 'Formación', href: '#education', id: 'education' },
];

const socialLinks = [
  {
    name: 'Email',
    href: 'mailto:hi@ayenque.me',
    icon: Mail,
    external: true,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ayenque',
    icon: Linkedin,
    external: true,
  },
  {
    name: 'GitHub',
    href: 'https://github.com/ayenque',
    icon: Github,
    external: true,
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/ayenquet',
    icon: Twitter,
    external: true,
  },
];

export function Sidebar() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: '-100px 0px -200px 0px' }
    );

    navigation.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadCV = () => {
    // Crear un enlace temporal para la descarga
    const link = document.createElement('a');
    link.href = '/documents/Angelo_Yenque_CV.pdf';
    link.download = 'Angelo_Yenque_CV.pdf';
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        {/* Profile Section */}
        <div className="mb-8 lg:mb-12">
          {/* Profile Image */}
          <div className="mb-6 flex justify-center lg:justify-start">
            <div className="relative h-32 w-32 overflow-hidden rounded-full border-2 border-teal-400/20 shadow-lg">
              <Image
                src="/images/profile.png"
                alt="Angelo Yenque Tume"
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
                priority
                sizes="(max-width: 768px) 128px, 128px"
              />
            </div>
          </div>

          {/* Name and Title */}
          <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
            <a href="/" className="hover:text-teal-400 transition-colors">
              Angelo Yenque Tume
            </a>
          </h1>
          <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
            Coordinador de Investigación, Desarrollo & T.I.
          </h2>
          <p className="mt-4 max-w-xs leading-normal text-slate-400">
            Especialista en Business Intelligence y análisis de datos con +15 años de experiencia 
            transformando información en decisiones estratégicas.
          </p>

          {/* CV Download Button */}
          <button
            onClick={handleDownloadCV}
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-teal-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all hover:bg-teal-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-slate-900"
          >
            <Download className="h-4 w-4" />
            Descargar y Ver CV
            <ExternalLink className="h-3 w-3" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="nav hidden lg:block" aria-label="In-page jump links">
          <ul className="mt-16 w-max">
            {navigation.map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`group flex items-center py-3 ${
                    activeSection === item.id ? 'active' : ''
                  }`}
                >
                  <span
                    className={`nav-indicator mr-4 h-px transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none ${
                      activeSection === item.id
                        ? 'w-16 bg-slate-200'
                        : 'w-8 bg-slate-600'
                    }`}
                  ></span>
                  <span
                    className={`nav-text text-xs font-bold uppercase tracking-widest transition-colors group-hover:text-slate-200 group-focus-visible:text-slate-200 ${
                      activeSection === item.id
                        ? 'text-slate-200'
                        : 'text-slate-500'
                    }`}
                  >
                    {item.name}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Social Links */}
      <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
        {socialLinks.map((link) => (
          <li key={link.name} className="mr-5 text-xs shrink-0">
            <a
              className="block hover:text-slate-200 text-slate-400 transition-colors"
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noreferrer" : undefined}
              aria-label={`${link.name} (opens in a new tab)`}
            >
              <span className="sr-only">{link.name}</span>
              <link.icon className="h-6 w-6" />
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
}