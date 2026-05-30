"use client";
import { personalInfo } from "@/data/portfolio";

export default function Navbar() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-8 py-5 bg-[#0a0a0f]/85 backdrop-blur-md border-b border-[#2a2838]">
      <span className="text-lg font-extrabold tracking-tight">
        dev<span className="text-violet-400">.</span>portfolio
      </span>

      <div className="hidden md:flex items-center gap-8">
        {["about", "projects", "experience", "contact"].map((s) => (
          <button
            key={s}
            onClick={() => scrollTo(s)}
            className="text-sm font-medium text-gray-400 hover:text-white capitalize transition-colors"
          >
            {s}
          </button>
        ))}
      </div>

      <a
        href={`mailto:${personalInfo.email}`}
        className="bg-violet-500 hover:bg-violet-600 text-white text-sm font-semibold px-5 py-2 rounded-lg transition-colors"
      >
        Hire Me
      </a>
    </nav>
  );
}
