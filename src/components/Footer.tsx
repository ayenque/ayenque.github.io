import { Mail, Github, Linkedin, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 bg-slate-900/50 backdrop-blur-sm border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Left side - Name and description */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-white mb-2">Angelo Yenque</h3>
            <p className="text-slate-400 max-w-md">
              Ingeniero de Sistemas especializado en Business Intelligence y
              análisis de datos. Transformando datos en insights estratégicos.
            </p>
          </div>

          {/* Right side - Contact and social */}
          <div className="flex flex-col items-center md:items-end space-y-4">
            {/* Contact info */}
            <div className="flex items-center space-x-2 text-slate-300">
              <Mail className="h-4 w-4" />
              <a
                href="mailto:angelo@ayenque.me"
                className="hover:text-blue-400 transition-colors"
              >
                angelo@ayenque.me
              </a>
            </div>

            {/* Social links */}
            <div className="flex space-x-4">
              <a
                href="https://github.com/ayenque"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/angeloyenque"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-slate-500 text-sm">
            © {currentYear} Angelo Yenque. Todos los derechos reservados.
          </p>
          <p className="text-slate-500 text-sm flex items-center">
            Hecho con <Heart className="h-4 w-4 mx-1 text-red-500" /> y Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
