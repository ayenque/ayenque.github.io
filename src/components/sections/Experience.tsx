import { ExternalLink, Calendar } from "lucide-react";

interface ExperienceItem {
  period: string;
  title: string;
  company: string;
  description: string;
  technologies: string[];
  link?: string;
}

const experiences: ExperienceItem[] = [
  {
    period: "Agosto 2020 — Presente",
    title: "Coordinador de Investigación, Desarrollo & T.I.",
    company: "Reno Químicos Perú - Irabazle Perú",
    description:
      "Lidero el análisis de estadísticas de importación y exportación para operaciones en Perú, Chile, Argentina y Paraguay. Gestiono integralmente SAP Business One, desarrollando nuevas funcionalidades y optimizando procesos. Automatizo informes de ventas, control de inventarios y análisis financiero, proporcionando métricas clave como YOY, YTD y MTD.",
    technologies: [
      "SAP Business One",
      "Crystal Reports",
      "Microsoft SQL Server",
      "Power BI",
      "Python",
      "Business Intelligence",
    ],
    link: "https://www.reno-group.biz/",
  },
  {
    period: "Octubre 2013 — Mayo 2020",
    title: "Jefe de Investigación, Desarrollo & T.I.",
    company: "Corporación GTM del Perú S.A.",
    description:
      "Lideré la implementación de Microsoft Dynamics CRM y S&OP en Perú, siendo nombrado 'Superusuario Líder' para implementaciones en Ecuador y Colombia. Coordiné el costeo de productos mediante análisis de importaciones, stocks y ventas. Desarrollé herramientas para segmentación de clientes y seguimiento de ventas.",
    technologies: [
      "Microsoft Dynamics CRM",
      "SQL Server",
      "Crystal Reports",
      "QlikView",
      "Power BI",
      "Excel Avanzado",
    ],
    link: "https://www.caldic.com/es-pe/",
  },
  {
    period: "Febrero 2013 — Octubre 2013",
    title: "Analista de Control de Gestión",
    company: "Corredores de Seguros Falabella",
    description:
      "Responsable del cálculo y análisis de provisiones y reembolsos a compañías de seguros. Desarrollé y mantuve el 'Tablero de Control' para seguimiento de indicadores de gestión. Gestioné procesos de cierre de ventas y cálculo de comisiones a nivel nacional.",
    technologies: [
      "Excel Avanzado",
      "VBA",
      "SQL Server",
      "Tableros de Control",
      "Análisis Financiero",
    ],
  },
  {
    period: "Octubre 2010 — Febrero 2013",
    title: "Analista de Business Intelligence",
    company: "Empresa Editora El Comercio",
    description:
      "Consolidé ventas y desarrollé proyecciones de crecimiento de suscripciones. Analicé crecimiento y rotación de clientes, generando información de gestión y KPIs. Creé sistemas automatizados y dashboards en QlikView y Power BI para monitorear procesos de ventas, atención al cliente y recursos humanos.",
    technologies: [
      "QlikView",
      "Power BI",
      "SQL Server",
      "Crystal Reports",
      "Excel",
      "Dashboards",
    ],
    link: "https://grupoelcomercio.com.pe/",
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
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
                  <ul
                    className="mt-2 flex flex-wrap"
                    aria-label="Technologies used"
                  >
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
  );
}
