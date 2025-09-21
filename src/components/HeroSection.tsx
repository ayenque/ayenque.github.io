"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowDown, Download, Mail, Github, Linkedin } from "lucide-react";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/documents/Angelo_Yenque_CV.pdf";
    link.download = "Angelo_Yenque_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white/10">
                <Image
                  src="/images/profile.jpg"
                  alt="Angelo Yenque"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
            <span className="block">Angelo Yenque</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Business Intelligence
            </span>
          </h1>

          {/* Value Proposition */}
          <p className="text-xl sm:text-2xl text-slate-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            <span className="font-semibold text-white">
              Ingeniero de Sistemas
            </span>{" "}
            especializado en{" "}
            <span className="text-blue-400 font-medium">
              Business Intelligence
            </span>{" "}
            y{" "}
            <span className="text-purple-400 font-medium">
              análisis de datos
            </span>
            . Transformo datos complejos en insights estratégicos que impulsan
            el crecimiento empresarial.
          </p>

          {/* Key Skills Highlights */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {[
              "SAP Business One",
              "Power BI",
              "Python",
              "SQL Server",
              "Crystal Reports",
              "QlikView",
            ].map((skill, index) => (
              <span
                key={skill}
                className={`px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-full text-slate-300 text-sm font-medium backdrop-blur-sm transition-all duration-300 hover:border-blue-500 hover:text-blue-400 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-5"
                }`}
                style={{ transitionDelay: `${index * 100 + 500}ms` }}
              >
                {skill}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              onClick={handleDownloadCV}
              className="group inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              <Download className="h-5 w-5 mr-2 group-hover:animate-bounce" />
              Descargar CV
            </button>

            <a
              href="mailto:angelo@ayenque.me"
              className="group inline-flex items-center px-8 py-4 border-2 border-slate-600 text-slate-300 font-semibold rounded-lg hover:border-blue-500 hover:text-blue-400 transition-all duration-300 transform hover:scale-105"
            >
              <Mail className="h-5 w-5 mr-2 group-hover:animate-pulse" />
              Contáctame
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-16">
            {[
              {
                icon: Github,
                href: "https://github.com/ayenque",
                label: "GitHub",
              },
              {
                icon: Linkedin,
                href: "https://linkedin.com/in/angeloyenque",
                label: "LinkedIn",
              },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full bg-slate-800/50 border border-slate-700 text-slate-400 hover:text-white hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300 transform hover:scale-110"
                aria-label={label}
              >
                <Icon className="h-6 w-6" />
              </a>
            ))}
          </div>

          {/* Scroll indicator */}
          <button
            onClick={scrollToAbout}
            className="inline-flex flex-col items-center text-slate-400 hover:text-blue-400 transition-colors duration-300 group"
            aria-label="Scroll to about section"
          >
            <span className="text-sm font-medium mb-2">
              Conoce más sobre mí
            </span>
            <ArrowDown className="h-6 w-6 animate-bounce group-hover:text-blue-400" />
          </button>
        </div>
      </div>
    </section>
  );
}
