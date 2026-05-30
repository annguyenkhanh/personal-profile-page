import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="px-8 py-16">
      <p className="text-xs font-bold text-violet-400 tracking-widest uppercase mb-2">
        Where I've worked
      </p>
      <h2 className="text-3xl font-extrabold tracking-tight mb-8">Experience</h2>

      <div className="flex flex-col divide-y divide-[#2a2838]">
        {experience.map((item) => (
          <div key={item.role} className="grid grid-cols-[140px_1fr] gap-6 py-6 first:pt-0 last:pb-0">
            <span className="text-xs font-mono text-gray-500 pt-0.5">{item.period}</span>
            <div>
              <h3 className="text-base font-bold">{item.role}</h3>
              <p className="text-sm text-violet-300 mb-2">
                {item.company}
                {item.type && ` · ${item.type}`}
              </p>
              <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
