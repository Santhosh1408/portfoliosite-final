import { portfolioData as data } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-100 bg-white">
      <div className="container-max py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-sm text-slate-500">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-xl bg-slate-50 border border-slate-100 grid place-items-center font-extrabold text-slate-700">
            ©
          </span>
          <div>
            <p className="font-semibold text-slate-700">{data.name}</p>
            <p>Built with precision and code.</p>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <a href={data.socials.github} target="_blank" rel="noreferrer" className="hover:text-slate-900">GitHub</a>
          <a href={data.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-slate-900">LinkedIn</a>
          <a href="#contact" className="hover:text-slate-900">Contact</a>
        </div>
      </div>
    </footer>
  );
}