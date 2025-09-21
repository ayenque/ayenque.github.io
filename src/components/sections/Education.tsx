import { GraduationCap, Award, Calendar, MapPin } from "lucide-react";

interface EducationItem {
  type: "degree" | "certification";
  title: string;
  institution: string;
  period?: string;
  status: "completed" | "in-progress";
  description?: string;
  icon?: React.ReactNode;
}

const educationItems: EducationItem[] = [
  {
    type: "degree",
    title: "Ingeniería de Sistemas",
    institution: "Universidad Peruana de Ciencias Aplicadas (UPC)",
    status: "completed",
    description:
      "Especialización en desarrollo de sistemas, bases de datos y arquitectura de software empresarial.",
    icon: <GraduationCap className="h-5 w-5" />,
  },
  {
    type: "degree",
    title: "Ingeniería Industrial",
    institution: "Universidad Nacional Mayor de San Marcos (UNMSM)",
    status: "completed",
    description:
      "Formación sólida en optimización de procesos, gestión de operaciones y análisis de sistemas productivos.",
    icon: <GraduationCap className="h-5 w-5" />,
  },
  {
    type: "certification",
    title: "Diplomado en SAP Integral",
    institution: "Prime Institute",
    status: "completed",
    description:
      "Certificación especializada en implementación y administración de sistemas SAP para empresas.",
    icon: <Award className="h-4 w-4" />,
  },
  {
    type: "certification",
    title: "QlikView Professional V11",
    institution: "QlikSoft S.A.C.",
    status: "completed",
    description:
      "Certificación profesional en desarrollo de aplicaciones de Business Intelligence con QlikView.",
    icon: <Award className="h-4 w-4" />,
  },
  {
    type: "certification",
    title: "Administración de Base de Datos SQL Server",
    institution: "Instituto CIBERTEC",
    status: "completed",
    description:
      "Especialización en administración, optimización y seguridad de bases de datos Microsoft SQL Server.",
    icon: <Award className="h-4 w-4" />,
  },
];

export function Education() {
  return (
    <section
      id="education"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Formación
        </h2>
      </div>
      <div>
        <p className="mb-8 text-slate-400 leading-relaxed">
          Mi formación académica y certificaciones profesionales me han
          proporcionado una base sólida en ingeniería, complementada con
          especializaciones técnicas que me permiten liderar proyectos de
          tecnología e innovación.
        </p>

        {/* Degrees Section */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold text-slate-200 mb-6 flex items-center">
            <GraduationCap className="h-5 w-5 text-teal-300 mr-2" />
            Educación Superior
          </h3>
          <div className="space-y-6">
            {educationItems
              .filter((item) => item.type === "degree")
              .map((item, index) => (
                <div key={index} className="group relative">
                  <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100">
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>

                    <div className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                      <div className="flex items-center">
                        {item.icon}
                        <span className="ml-2">Título Profesional</span>
                      </div>
                    </div>

                    <div className="z-10 sm:col-span-6">
                      <h4 className="font-medium leading-snug text-slate-200 text-base">
                        {item.title}
                      </h4>
                      <p className="mt-1 text-sm text-teal-300 font-medium">
                        {item.institution}
                      </p>
                      {item.description && (
                        <p className="mt-2 text-sm leading-normal text-slate-400">
                          {item.description}
                        </p>
                      )}
                      <div className="mt-2">
                        <span className="inline-flex items-center rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
                          Completado
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <h3 className="text-lg font-semibold text-slate-200 mb-6 flex items-center">
            <Award className="h-5 w-5 text-teal-300 mr-2" />
            Certificaciones Profesionales
          </h3>
          <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-1">
            {educationItems
              .filter((item) => item.type === "certification")
              .map((item, index) => (
                <div
                  key={index}
                  className="group relative p-4 rounded-lg border border-slate-200/10 hover:border-slate-200/20 transition-all hover:bg-slate-800/30"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center">
                      <div className="text-amber-300 mr-2">{item.icon}</div>
                      <h4 className="font-medium text-slate-200 text-sm">
                        {item.title}
                      </h4>
                    </div>
                    <span className="inline-flex items-center rounded-full bg-amber-400/10 px-2 py-1 text-xs font-medium text-amber-300">
                      Certificado
                    </span>
                  </div>
                  <p className="text-sm text-teal-300 font-medium mb-2">
                    {item.institution}
                  </p>
                  {item.description && (
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  )}
                </div>
              ))}
          </div>
        </div>

        {/* Summary Stats */}
        <div className="mt-12 p-6 rounded-lg bg-slate-800/30 border border-slate-200/10">
          <div className="flex items-center mb-4">
            <MapPin className="h-5 w-5 text-teal-300 mr-2" />
            <h3 className="text-slate-200 font-semibold">Formación Continua</h3>
          </div>
          <p className="text-sm text-slate-400 leading-relaxed mb-4">
            Mi compromiso con el aprendizaje continuo me mantiene actualizado en
            las últimas tecnologías y mejores prácticas de la industria.
            Regularmente participo en capacitaciones, webinars y conferencias
            tecnológicas para estar a la vanguardia de las tendencias del
            sector.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-teal-300 mr-3">2</div>
              <div className="text-sm text-slate-400">
                Títulos Universitarios
              </div>
            </div>
            <div className="flex items-center">
              <div className="text-2xl font-bold text-amber-300 mr-3">3</div>
              <div className="text-sm text-slate-400">
                Certificaciones Técnicas
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
