import { About } from './sections/About'
import { Experience } from './sections/Experience'
import { Projects } from './sections/Projects'

export function MainContent() {
  return (
    <main id="content" className="pt-24 lg:w-1/2 lg:py-24 relative z-10">
      <About />
      <Experience />
      <Projects />
    </main>
  )
}