"use client";

import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Education } from "@/components/sections/Education";
import { Footer } from "@/components/Footer";
import { SpotlightEffect } from "@/components/SpotlightEffect";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "experience",
        "skills",
        "projects",
        "education",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <SpotlightEffect />
      <Header activeSection={activeSection} />

      <main className="relative">
        <HeroSection />

        {/* Content Sections */}
        <div className="relative z-10">
          <div className="max-w-6xl mx-auto px-6 lg:px-8 space-y-32 py-20">
            <About />
            <Experience />
            <Skills />
            <Projects />
            <Education />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
