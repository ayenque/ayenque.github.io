"use client";

import { useState, useEffect, useRef } from "react";
import { ExternalLink, Calendar, MapPin, TrendingUp } from "lucide-react";

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
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="experience" className="scroll-mt-24">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2
          className={`text-4xl lg:text-5xl font-bold text-white mb-6 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Mi{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Experiencia
          </span>
        </h2>
        <div
          className={`w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
          }`}
        />
        <p
          className={`text-slate-400 max-w-2xl mx-auto mt-6 text-lg transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          +10 años de experiencia liderando proyectos de Business Intelligence y
          transformación digital
        </p>
      </div>

      <div className="space-y-12">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className={`group relative transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: `${700 + index * 200}ms` }}
          >
            <div className="bg-slate-800/30 border border-slate-700 rounded-2xl p-8 hover:border-blue-500/50 hover:bg-slate-800/50 transition-all duration-300">
              {/* Header */}
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center text-blue-400 text-sm font-medium mb-2">
                    <Calendar className="mr-2 h-4 w-4" />
                    {experience.period}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {experience.title}
                  </h3>
                  <div className="flex items-center text-slate-300 mb-4">
                    {experience.link ? (
                      <a
                        href={experience.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center hover:text-blue-400 transition-colors group/link"
                      >
                        <MapPin className="mr-2 h-4 w-4" />
                        {experience.company}
                        <ExternalLink className="ml-2 h-4 w-4 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                      </a>
                    ) : (
                      <span className="flex items-center">
                        <MapPin className="mr-2 h-4 w-4" />
                        {experience.company}
                      </span>
                    )}
                  </div>
                </div>
                {/* Current role indicator */}
                {index === 0 && (
                  <div className="flex items-center bg-blue-500/10 border border-blue-500/30 text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
                    <TrendingUp className="mr-1 h-3 w-3" />
                    Actual
                  </div>
                )}
              </div>

              {/* Description */}
              <p className="text-slate-300 leading-relaxed mb-6 text-lg">
                {experience.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-medium rounded-full hover:bg-blue-500/20 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div
        className={`text-center mt-16 transition-all duration-1000 delay-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <a
          href="/documents/Angelo_Yenque_CV.pdf"
          download
          className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 group"
        >
          <ExternalLink className="mr-2 h-5 w-5 group-hover:animate-pulse" />
          Ver CV Completo
        </a>
      </div>
    </section>
  );
}
