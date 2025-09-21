"use client";

import { useState, useEffect, useRef } from "react";
import { TrendingUp, Database, BarChart3, Brain } from "lucide-react";

export function About() {
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

  const highlights = [
    {
      icon: Database,
      title: "Gestión de Datos",
      description: "SAP Business One, SQL Server, bases de datos complejas",
    },
    {
      icon: BarChart3,
      title: "Business Intelligence",
      description: "Power BI, QlikView, Crystal Reports, dashboards ejecutivos",
    },
    {
      icon: TrendingUp,
      title: "Análisis Estratégico",
      description: "KPIs, métricas YOY/YTD/MTD, estudios de mercado",
    },
    {
      icon: Brain,
      title: "Innovación",
      description: "Python, automatización de procesos, soluciones escalables",
    },
  ];

  return (
    <section ref={sectionRef} id="about" className="scroll-mt-24">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2
          className={`text-4xl lg:text-5xl font-bold text-white mb-6 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Sobre{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Mí
          </span>
        </h2>
        <div
          className={`w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
          }`}
        />
      </div>

      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Column - Text Content */}
        <div
          className={`space-y-6 transition-all duration-1000 delay-500 ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-10"
          }`}
        >
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              Soy{" "}
              <span className="text-white font-semibold">
                Ingeniero de Sistemas
              </span>{" "}
              de la Universidad Peruana de Ciencias Aplicadas, con una sólida
              base en{" "}
              <span className="text-white font-semibold">
                Ingeniería Industrial
              </span>{" "}
              de la UNMSM.
            </p>

            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              Mi carrera profesional me ha permitido desarrollar una gran
              experiencia en{" "}
              <span className="text-blue-400 font-medium">
                administración de bases de datos
              </span>
              ,{" "}
              <span className="text-blue-400 font-medium">
                sistemas de información
              </span>{" "}
              e{" "}
              <span className="text-blue-400 font-medium">
                inteligencia de negocios
              </span>
              .
            </p>

            <p className="text-lg text-slate-300 leading-relaxed">
              Me apasiona{" "}
              <span className="text-purple-400 font-medium">
                transformar datos complejos en insights estratégicos
              </span>{" "}
              que impulsan el crecimiento empresarial, combinando pensamiento
              analítico con creatividad e innovación.
            </p>
          </div>

          {/* Current Role Highlight */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 backdrop-blur-sm">
            <h3 className="text-xl font-semibold text-white mb-3">
              Posición Actual
            </h3>
            <p className="text-blue-400 font-medium mb-2">
              Coordinador de Investigación, Desarrollo & T.I.
            </p>
            <p className="text-slate-400 text-sm">
              Reno Químicos Perú - Liderando análisis de datos para operaciones
              en 4 países
            </p>
          </div>
        </div>

        {/* Right Column - Skills Highlights */}
        <div
          className={`transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className={`bg-slate-800/30 border border-slate-700 rounded-lg p-6 hover:border-blue-500/50 hover:bg-slate-800/50 transition-all duration-300 group ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-5"
                }`}
                style={{ transitionDelay: `${900 + index * 100}ms` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                      <item.icon className="h-6 w-6 text-blue-400" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">
                      {item.title}
                    </h4>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Personal Philosophy */}
          <div className="mt-8 text-center">
            <blockquote className="text-lg italic text-slate-300 border-l-4 border-blue-500 pl-6">
              "Creo en una mentalidad de crecimiento y siempre tomo la
              iniciativa para aprender e innovar."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
