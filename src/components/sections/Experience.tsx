import { ExternalLink, Calendar } from 'lucide-react'

interface ExperienceItem {
  period: string
  title: string
  company: string
  description: string
  technologies: string[]
  link?: string
}

const experiences: ExperienceItem[] = [
  {
    period: "2022 — Presente",
    title: "Senior Full Stack Developer",
    company: "TechCorp Solutions",
    description: "Lidero el desarrollo de aplicaciones web empresariales utilizando React, Node.js y PostgreSQL. Implementé arquitecturas escalables que mejoraron el rendimiento en un 40% y reduje los tiempos de carga significativamente.",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "AWS", "Docker"],
    link: "https://techcorp.com"
  },
  {
    period: "2021 — 2022",
    title: "Full Stack Developer",
    company: "Startup Innovadora",
    description: "Desarrollé desde cero una plataforma de e-commerce utilizando Next.js y Stripe. Implementé funcionalidades de pago seguras, gestión de inventario y panel administrativo completo.",
    technologies: ["Next.js", "React", "Express.js", "MongoDB", "Stripe", "Tailwind CSS"],
  },
  {
    period: "2020 — 2021",
    title: "Frontend Developer",
    company: "Agencia Digital",
    description: "Creé interfaces de usuario responsivas y optimizadas para múltiples clientes. Colaboré estrechamente con diseñadores UX/UI para implementar experiencias de usuario excepcionales.",
    technologies: ["React", "JavaScript", "SASS", "WordPress", "Figma"],
  },
  {
    period: "2019 — 2020",
    title: "Junior Developer",
    company: "Empresa Local",
    description: "Inicié mi carrera profesional desarrollando sitios web institucionales y aplicaciones internas. Aprendí las bases del desarrollo web y las mejores prácticas de la industria.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
  }
]

export function Experience() {
  return (
    <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Experiencia
        </h2>
      </div>
      <div>
        <ol className="group/list">
          {experiences.map((experience, index) => (
            <li key={index} className="mb-12">
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                
                <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                  <div className="flex items-center">
                    <Calendar className="mr-1 h-3 w-3" />
                    {experience.period}
                  </div>
                </header>
                
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-slate-200">
                    <div>
                      {experience.link ? (
                        <a
                          className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                          href={experience.link}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${experience.title} at ${experience.company} (opens in a new tab)`}
                        >
                          <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                          <span>
                            {experience.title} · 
                            <span className="inline-block">
                              {experience.company}
                              <ExternalLink className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
                            </span>
                          </span>
                        </a>
                      ) : (
                        <span>
                          {experience.title} · {experience.company}
                        </span>
                      )}
                    </div>
                  </h3>
                  <p className="mt-2 text-sm leading-normal text-slate-400">
                    {experience.description}
                  </p>
                  <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                    {experience.technologies.map((tech, techIndex) => (
                      <li key={techIndex} className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                          {tech}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-12">
          <a
            className="inline-flex items-center font-medium leading-tight text-slate-200 font-semibold text-slate-200 group"
            aria-label="View Full Résumé"
            href="/resume.pdf"
          >
            <span>
              <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                Ver CV completo
              </span>
              <span className="whitespace-nowrap">
                <ExternalLink className="ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible:-translate-y-1 group-focus-visible:translate-x-1 motion-reduce:transition-none" />
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}