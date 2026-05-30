import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Publications from "@/components/Publications";
import Contact from "@/components/Contact";
import { personalInfo } from "@/data/portfolio";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white">
      <Navbar />

      <div className="max-w-5xl mx-auto">
        <Hero />
        <hr className="border-[#2a2838] mx-8" />
        <Skills />
        <hr className="border-[#2a2838] mx-8" />
        <Projects />
        <hr className="border-[#2a2838] mx-8" />
        <Experience />
        <hr className="border-[#2a2838] mx-8" />
        <Publications />
        <Contact />

        <footer className="px-8 py-6 border-t border-[#2a2838] flex justify-between items-center flex-wrap gap-3">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} {personalInfo.name} · Built with Next.js & Tailwind CSS
          </p>
          <p className="text-xs font-mono text-gray-600">{personalInfo.location}</p>
        </footer>
      </div>
    </main>
  );
}
