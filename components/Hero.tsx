import { personalInfo } from "@/data/portfolio";

export default function Hero() {
  return (
    <section id="about" className="px-8 pt-28 pb-16 max-w-4xl">
      {/* Status badge */}
      <div className="inline-flex items-center gap-2 bg-[#18181f] border border-[#2a2838] rounded-full px-4 py-1.5 text-xs font-medium text-gray-400 mb-8">
        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
        Open to opportunities
      </div>

      <h1 className="text-6xl md:text-7xl font-extrabold leading-none tracking-tighter mb-6">
        Software
        <br />
        <span className="text-violet-300">Engineer & Builder</span>
      </h1>

      <p className="text-lg text-gray-400 max-w-lg leading-relaxed mb-10">
        {personalInfo.bio}
      </p>

      <div className="flex gap-4 flex-wrap">
        <a
          href="#projects"
          className="bg-violet-500 hover:bg-violet-600 text-white font-bold px-7 py-3 rounded-lg transition-all hover:-translate-y-0.5"
        >
          View My Work
        </a>
        <a
          href={personalInfo.cvUrl}
          download
          className="border border-[#2a2838] hover:border-violet-500 text-white font-semibold px-7 py-3 rounded-lg transition-all hover:bg-violet-500/10"
        >
          Download CV
        </a>
      </div>

      {/* Stats */}
      <div className="flex gap-12 mt-16 flex-wrap">
        {personalInfo.stats.map((stat) => (
          <div key={stat.label} className="flex flex-col">
            <span className="text-4xl font-extrabold">{stat.number}</span>
            <span className="text-xs text-gray-500 font-medium mt-1">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
