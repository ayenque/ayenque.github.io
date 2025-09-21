import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  links: {
    live?: string;
    github?: string;
  };
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "E-commerce Platform",
    description:
      "Plataforma completa de comercio electrónico con funcionalidades avanzadas de gestión de inventario, procesamiento de pagos seguros con Stripe, y panel administrativo. Incluye sistema de autenticación, carrito de compras, y dashboard analítico.",
    image: "/project1.jpg",
    technologies: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Stripe",
      "Tailwind CSS",
    ],
    links: {
      live: "https://ecommerce-demo.ayenque.me",
      github: "https://github.com/ayenque/ecommerce-platform",
    },
    featured: true,
  },
  {
    title: "Task Management App",
    description:
      "Aplicación de gestión de tareas con colaboración en tiempo real, notificaciones push, y sincronización en múltiples dispositivos. Implementa WebSockets para actualizaciones instantáneas y tiene soporte offline.",
    image: "/project2.jpg",
    technologies: [
      "React",
      "Node.js",
      "Socket.io",
      "MongoDB",
      "Express",
      "PWA",
    ],
    links: {
      live: "https://taskapp.ayenque.me",
      github: "https://github.com/ayenque/task-management",
    },
    featured: true,
  },
  {
    title: "Portfolio Website",
    description:
      "Sitio web personal desarrollado con Next.js y TypeScript, optimizado para SEO y performance. Incluye blog integrado con MDX, sistema de comentarios, y despliegue automático con GitHub Actions.",
    image: "/project3.jpg",
    technologies: [
      "Next.js",
      "TypeScript",
      "MDX",
      "Tailwind CSS",
      "Framer Motion",
    ],
    links: {
      live: "https://ayenque.me",
      github: "https://github.com/ayenque/portfolio",
    },
  },
  {
    title: "Weather Dashboard",
    description:
      "Dashboard meteorológico con visualizaciones interactivas, pronósticos extendidos, y mapas climáticos. Integra múltiples APIs meteorológicas y utiliza D3.js para gráficos dinámicos.",
    image: "/project4.jpg",
    technologies: ["Vue.js", "D3.js", "Express", "Redis", "OpenWeather API"],
    links: {
      live: "https://weather.ayenque.me",
      github: "https://github.com/ayenque/weather-dashboard",
    },
  },
  {
    title: "Chat Application",
    description:
      "Aplicación de chat en tiempo real con salas privadas, compartir archivos, emojis personalizados, y historial de mensajes. Implementa autenticación JWT y cifrado de mensajes.",
    image: "/project5.jpg",
    technologies: [
      "React",
      "Socket.io",
      "Node.js",
      "MongoDB",
      "JWT",
      "Cloudinary",
    ],
    links: {
      github: "https://github.com/ayenque/realtime-chat",
    },
  },
  {
    title: "API RESTful",
    description:
      "API robusta para gestión de contenido con autenticación, autorización por roles, rate limiting, documentación automática con Swagger, y tests unitarios completos.",
    image: "/project6.jpg",
    technologies: [
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "Swagger",
      "Jest",
      "Docker",
    ],
    links: {
      github: "https://github.com/ayenque/content-api",
    },
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Proyectos
        </h2>
      </div>
      <div>
        <ul className="group/list">
          {projects.map((project, index) => (
            <li key={index} className="mb-12">
              <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>

                <div className="z-10 sm:order-2 sm:col-span-6">
                  <h3>
                    <span className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base">
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                      <span>{project.title}</span>
                      {project.featured && (
                        <span className="ml-2 inline-block rounded-full bg-teal-400/10 px-2 py-1 text-xs font-medium text-teal-300">
                          Destacado
                        </span>
                      )}
                    </span>
                  </h3>
                  <p className="mt-2 text-sm leading-normal text-slate-400">
                    {project.description}
                  </p>

                  <div className="mt-4 flex space-x-4">
                    {project.links.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300 transition-colors"
                        aria-label={`View ${project.title} live (opens in a new tab)`}
                      >
                        <ExternalLink className="mr-1 h-3 w-3" />
                        Ver proyecto
                      </a>
                    )}
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300 transition-colors"
                        aria-label={`View ${project.title} source code (opens in a new tab)`}
                      >
                        <Github className="mr-1 h-3 w-3" />
                        Código
                      </a>
                    )}
                  </div>

                  <ul
                    className="mt-2 flex flex-wrap"
                    aria-label="Technologies used"
                  >
                    {project.technologies.map((tech, techIndex) => (
                      <li key={techIndex} className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                          {tech}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="z-10 sm:order-1 sm:col-span-2 sm:translate-y-1">
                  <div className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30">
                    <div className="aspect-video bg-slate-800 rounded overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-teal-400/20 to-blue-500/20 flex items-center justify-center">
                        <span className="text-slate-400 text-sm">
                          {project.title}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-12">
          <a
            className="inline-flex items-center font-semibold text-slate-200 group"
            aria-label="View Full Project Archive"
            href="https://github.com/ayenque"
            target="_blank"
            rel="noreferrer"
          >
            <span>
              <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                Ver todos los proyectos
              </span>
              <span className="whitespace-nowrap">
                <ExternalLink className="ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible:-translate-y-1 group-focus-visible:translate-x-1 motion-reduce:transition-none" />
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
