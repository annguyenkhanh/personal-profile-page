import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <section className="px-8 py-16">
      <p className="text-xs font-bold text-violet-400 tracking-widest uppercase mb-2">
        What I work with
      </p>
      <h2 className="text-3xl font-extrabold tracking-tight mb-8">Skills & Stack</h2>

      <div className="flex flex-wrap gap-2">
        {skills.core.map((s) => (
          <span
            key={s}
            className="bg-[#18181f] border border-violet-500/40 text-violet-300 text-sm font-medium px-4 py-1.5 rounded-md"
          >
            {s}
          </span>
        ))}
        {skills.other.map((s) => (
          <span
            key={s}
            className="bg-[#18181f] border border-[#2a2838] hover:border-violet-500 text-gray-400 hover:text-white text-sm font-medium px-4 py-1.5 rounded-md transition-colors cursor-default"
          >
            {s}
          </span>
        ))}
      </div>
    </section>
  );
}
