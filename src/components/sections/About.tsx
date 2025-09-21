export function About() {
  return (
    <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Acerca de mí
        </h2>
      </div>
      <div>
        <p className="mb-4 text-slate-400 leading-relaxed">
          Soy un desarrollador full stack con más de 5 años de experiencia creando aplicaciones web modernas y escalables. 
          Mi pasión por la tecnología me ha llevado a especializarme en el ecosistema de JavaScript, trabajando con 
          <strong className="text-slate-200"> React</strong>, <strong className="text-slate-200">Node.js</strong>, 
          y <strong className="text-slate-200">TypeScript</strong> para crear soluciones que combinan una excelente experiencia 
          de usuario con arquitecturas robustas.
        </p>
        <p className="mb-4 text-slate-400 leading-relaxed">
          Actualmente me enfoco en el desarrollo de aplicaciones empresariales, utilizando metodologías ágiles y las mejores 
          prácticas de la industria. Tengo experiencia tanto en el frontend con frameworks modernos como 
          <strong className="text-slate-200"> React</strong> y <strong className="text-slate-200">Next.js</strong>, 
          como en el backend con <strong className="text-slate-200">Express.js</strong>, 
          <strong className="text-slate-200"> NestJS</strong>, y bases de datos como 
          <strong className="text-slate-200"> PostgreSQL</strong> y <strong className="text-slate-200">MongoDB</strong>.
        </p>
        <p className="text-slate-400 leading-relaxed">
          Cuando no estoy programando, disfruto mantenerme actualizado con las últimas tendencias tecnológicas, 
          contribuir a proyectos de código abierto, y compartir conocimientos con la comunidad de desarrolladores.
        </p>
      </div>
    </section>
  )
}