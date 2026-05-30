import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="px-8 py-16">
      <p className="text-xs font-bold text-violet-400 tracking-widest uppercase mb-2">
        What I've built
      </p>
      <h2 className="text-3xl font-extrabold tracking-tight mb-8">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((project) => (
          <div
            key={project.title}
            className={`bg-[#111118] border rounded-xl p-6 flex flex-col gap-4 transition-all hover:-translate-y-1 hover:border-violet-500 ${
              project.featured
                ? "border-violet-500/35 bg-gradient-to-br from-violet-500/5 to-[#111118]"
                : "border-[#2a2838]"
            }`}
          >
            {/* Top row */}
            <div className="flex justify-between items-start">
              <div className="w-10 h-10 bg-violet-500/15 rounded-lg flex items-center justify-center text-xl">
                {project.icon}
              </div>
              <div className="flex gap-2">
                {project.featured && (
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-300">
                    Featured
                  </span>
                )}
                {project.live && (
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-green-500/10 border border-green-500/30 text-green-400">
                    Live
                  </span>
                )}
              </div>
            </div>

            <div>
              <h3 className="text-base font-bold mb-1">{project.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{project.description}</p>
            </div>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-1.5 mt-auto">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs font-mono text-gray-500 bg-[#18181f] rounded px-2 py-0.5"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-4">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-violet-300 hover:text-white transition-colors"
                >
                  ↗ Live Demo
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-violet-300 hover:text-white transition-colors"
                >
                  ⌥ GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
