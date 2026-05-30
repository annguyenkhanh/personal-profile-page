import { publications } from "@/data/portfolio";

export default function Publications() {
  return (
    <section className="px-8 py-16">
      <p className="text-xs font-bold text-violet-400 tracking-widest uppercase mb-2">
        Research
      </p>
      <h2 className="text-3xl font-extrabold tracking-tight mb-8">IEEE Publications</h2>

      <div className="flex flex-col gap-4">
        {publications.map((pub) => (
          <a
            key={pub.title}
            href={pub.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-[#111118] border border-[#2a2838] hover:border-violet-500 rounded-xl p-6 transition-all"
          >
            <div className="flex justify-between items-start gap-4 flex-wrap">
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-bold leading-snug group-hover:text-violet-300 transition-colors mb-1">
                  {pub.title}
                </h3>
                <p className="text-xs text-gray-500 font-mono mb-2">{pub.authors}</p>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-semibold text-violet-400">{pub.venue}</span>
                  <span className="text-xs text-gray-600">{pub.date}</span>
                </div>
              </div>
              <span className="text-gray-600 group-hover:text-violet-400 text-lg transition-colors shrink-0">↗</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
