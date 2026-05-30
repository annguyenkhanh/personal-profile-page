import { personalInfo } from "@/data/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="px-8 py-16">
      <div className="bg-[#111118] border border-[#2a2838] rounded-2xl p-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h2 className="text-2xl font-extrabold tracking-tight mb-1">Let's work together</h2>
          <p className="text-gray-400 text-sm">Open to full-time roles, freelance projects, and collaborations.</p>
        </div>
        <div className="flex gap-3 flex-wrap">
          <a
            href={`mailto:${personalInfo.email}`}
            className="flex items-center gap-2 bg-violet-500 hover:bg-violet-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
          >
            ✉ Email Me
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#18181f] border border-[#2a2838] hover:border-violet-500 text-gray-400 hover:text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
          >
            GitHub
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#18181f] border border-[#2a2838] hover:border-violet-500 text-gray-400 hover:text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
