import { Database, BarChart3, Brain, Code, PieChart, FileSpreadsheet, Globe, Music, Video } from 'lucide-react'

interface SkillCategory {
  title: string
  icon: React.ReactNode
  description: string
  skills: {
    name: string
    description: string
    level: 'Experto' | 'Avanzado' | 'Intermedio'
  }[]
}

const skillCategories: SkillCategory[] = [
  {
    title: "Sistemas Empresariales",
    icon: <Database className="h-6 w-6" />,
    description: "Gestión y administración de sistemas que manejan la información crítica de las empresas",
    skills: [
      {
        name: "SAP Business One",
        description: "Sistema integral para gestionar todas las operaciones de una empresa (ventas, inventarios, finanzas)",
        level: "Experto"
      },
      {
        name: "Microsoft Dynamics CRM",
        description: "Plataforma para gestionar relaciones con clientes y automatizar procesos de ventas",
        level: "Experto"
      },
      {
        name: "Microsoft SQL Server",
        description: "Base de datos empresarial que almacena y organiza grandes volúmenes de información",
        level: "Avanzado"
      },
      {
        name: "MySQL",
        description: "Sistema de base de datos utilizado para almacenar información de aplicaciones web",
        level: "Avanzado"
      }
    ]
  },
  {
    title: "Inteligencia de Negocios",
    icon: <Brain className="h-6 w-6" />,
    description: "Herramientas que transforman datos en información útil para tomar mejores decisiones empresariales",
    skills: [
      {
        name: "Power BI",
        description: "Herramienta de Microsoft para crear dashboards y reportes visuales interactivos",
        level: "Experto"
      },
      {
        name: "QlikView",
        description: "Plataforma de visualización de datos que ayuda a descubrir patrones y tendencias",
        level: "Experto"
      },
      {
        name: "Crystal Reports",
        description: "Software para crear reportes profesionales y automatizar la generación de informes",
        level: "Experto"
      },
      {
        name: "Tableros de Control",
        description: "Paneles que muestran indicadores clave de rendimiento (KPIs) en tiempo real",
        level: "Experto"
      }
    ]
  },
  {
    title: "Análisis de Datos",
    icon: <BarChart3 className="h-6 w-6" />,
    description: "Capacidad de interpretar datos para identificar oportunidades y resolver problemas empresariales",
    skills: [
      {
        name: "Análisis Estadístico",
        description: "Interpretación de datos de importación, exportación y ventas para tomar decisiones estratégicas",
        level: "Experto"
      },
      {
        name: "Estudios de Mercado",
        description: "Investigación del comportamiento de clientes y análisis de la competencia",
        level: "Experto"
      },
      {
        name: "Métricas Financieras",
        description: "Cálculo e interpretación de indicadores como YOY, YTD, MTD para medir rendimiento",
        level: "Experto"
      },
      {
        name: "Segmentación de Clientes",
        description: "Clasificación de clientes según comportamiento y potencial de negocio",
        level: "Avanzado"
      }
    ]
  },
  {
    title: "Programación y Desarrollo",
    icon: <Code className="h-6 w-6" />,
    description: "Conocimientos técnicos para automatizar procesos y crear soluciones personalizadas",
    skills: [
      {
        name: "Python",
        description: "Lenguaje de programación usado para automatizar tareas y análisis de datos",
        level: "Avanzado"
      },
      {
        name: "DAX",
        description: "Lenguaje de fórmulas para crear cálculos avanzados en Power BI y Excel",
        level: "Avanzado"
      },
      {
        name: "JavaScript",
        description: "Lenguaje para desarrollo web y automatización de procesos digitales",
        level: "Intermedio"
      },
      {
        name: "HTML/CSS",
        description: "Tecnologías para crear y diseñar sitios web profesionales",
        level: "Intermedio"
      }
    ]
  },
  {
    title: "Suite Microsoft Office",
    icon: <FileSpreadsheet className="h-6 w-6" />,
    description: "Dominio experto de herramientas de productividad empresarial",
    skills: [
      {
        name: "Microsoft Excel",
        description: "Análisis avanzado de datos, macros, tablas dinámicas y modelado financiero",
        level: "Experto"
      },
      {
        name: "Microsoft Access",
        description: "Creación de bases de datos y aplicaciones para gestión de información",
        level: "Avanzado"
      },
      {
        name: "PowerPoint",
        description: "Presentaciones ejecutivas y comunicación visual de resultados",
        level: "Experto"
      },
      {
        name: "Office 365",
        description: "Colaboración en la nube y herramientas de productividad empresarial",
        level: "Avanzado"
      }
    ]
  },
  {
    title: "Herramientas Adicionales",
    icon: <Globe className="h-6 w-6" />,
    description: "Competencias complementarias en diseño, desarrollo web y multimedia",
    skills: [
      {
        name: "WordPress",
        description: "Creación y gestión de sitios web profesionales sin programación compleja",
        level: "Avanzado"
      },
      {
        name: "Canva",
        description: "Diseño gráfico para presentaciones, reportes y material de marketing",
        level: "Avanzado"
      },
      {
        name: "Edición de Video",
        description: "Adobe Premiere, Sony Vegas y Camtasia para crear contenido audiovisual",
        level: "Intermedio"
      },
      {
        name: "Producción de Audio",
        description: "Fruity Loops para creación y edición de contenido musical y podcasts",
        level: "Intermedio"
      }
    ]
  }
]

const levelColors = {
  'Experto': 'bg-emerald-400/10 text-emerald-300',
  'Avanzado': 'bg-blue-400/10 text-blue-300',
  'Intermedio': 'bg-amber-400/10 text-amber-300'
}

export function Skills() {
  return (
    <section id="skills" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Habilidades
        </h2>
      </div>
      <div>
        <p className="mb-8 text-slate-400 leading-relaxed">
          Mi experiencia abarca diversas tecnologías y metodologías que me permiten transformar datos en insights 
          accionables y optimizar procesos empresariales. Cada herramienta domino tiene un propósito específico 
          en la cadena de valor del análisis de negocios.
        </p>
        
        <div className="space-y-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="group">
              <div className="flex items-center mb-4">
                <div className="text-teal-300 mr-3">
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-200">
                    {category.title}
                  </h3>
                  <p className="text-sm text-slate-400">
                    {category.description}
                  </p>
                </div>
              </div>
              
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="relative group/skill p-4 rounded-lg border border-slate-200/10 hover:border-slate-200/20 transition-all hover:bg-slate-800/30"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-medium text-slate-200 text-sm">
                        {skill.name}
                      </h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${levelColors[skill.level]}`}>
                        {skill.level}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 p-6 rounded-lg bg-slate-800/30 border border-slate-200/10">
          <div className="flex items-center mb-3">
            <PieChart className="h-5 w-5 text-teal-300 mr-2" />
            <h3 className="text-slate-200 font-semibold">
              Resumen de Competencias
            </h3>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-300 mb-1">15+</div>
              <div className="text-xs text-slate-400">Años de Experiencia</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-300 mb-1">4</div>
              <div className="text-xs text-slate-400">Países con Operaciones</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-amber-300 mb-1">20+</div>
              <div className="text-xs text-slate-400">Tecnologías Dominadas</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}