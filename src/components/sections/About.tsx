export function About() {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Acerca de mí
        </h2>
      </div>
      <div>
        <p className="mb-4 text-slate-400 leading-relaxed">
          Soy <strong className="text-slate-200">Ingeniero de Sistemas</strong>{" "}
          de la Universidad Peruana de Ciencias Aplicadas, con una sólida base
          en <strong className="text-slate-200">Ingeniería Industrial</strong>{" "}
          de la UNMSM. Mi carrera profesional me ha permitido desarrollar una
          gran experiencia en
          <strong className="text-slate-200">
            {" "}
            administración de bases de datos
          </strong>
          ,<strong className="text-slate-200">
            {" "}
            sistemas de información
          </strong>{" "}
          e<strong className="text-slate-200"> inteligencia de negocios</strong>
          . Me apasiona transformar datos en ideas accionables, ya sea a través
          de estudios de mercado, análisis comercial o gestión logística.
        </p>
        <p className="mb-4 text-slate-400 leading-relaxed">
          Mi enfoque combina el{" "}
          <strong className="text-slate-200">pensamiento analítico</strong> con
          la
          <strong className="text-slate-200"> creatividad</strong>. Creo en una
          <strong className="text-slate-200">
            {" "}
            mentalidad de crecimiento
          </strong>{" "}
          y siempre tomo la iniciativa para aprender e innovar. Esta motivación
          me ha permitido destacar en roles que exigen una meticulosa atención
          al detalle y una perspectiva de futuro.
        </p>
        <p className="text-slate-400 leading-relaxed">
          Actualmente me desempeño como{" "}
          <strong className="text-slate-200">
            Coordinador de Investigación, Desarrollo & T.I.
          </strong>
          en Reno Químicos Perú, donde lidero el análisis de estadísticas de
          importación y exportación para operaciones en múltiples países,
          gestiono sistemas{" "}
          <strong className="text-slate-200">SAP Business One</strong>, y
          desarrollo soluciones de{" "}
          <strong className="text-slate-200">Business Intelligence</strong> que
          optimizan los procesos empresariales.
        </p>
      </div>
    </section>
  );
}
