import { portfolioData as data } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Career() {
  return (
    <div>
      <SectionHeading title={data.career.title} subtitle={data.career.subtitle} />

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Left: Experience timeline */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-10 h-10 rounded-2xl bg-slate-900 text-white grid place-items-center font-black">
              🗂️
            </span>
            <h3 className="text-sm font-extrabold tracking-widest uppercase text-slate-700">
              Professional Experience
            </h3>
          </div>

          <div className="relative pl-6">
            <div className="absolute left-2 top-2 bottom-2 w-px bg-slate-200" />

            <div className="grid gap-6">
              {data.experience.map((e) => (
                <div key={`${e.title}-${e.org}`} className="relative">
                  <div className="absolute -left-[10px] top-7 w-3 h-3 rounded-full bg-brand shadow" />
                  <div className="rounded-3xl border border-slate-100 bg-white shadow-soft p-6">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                      <div>
                        <p className="text-lg font-extrabold text-ink">{e.title}</p>
                        <p className="text-brand font-bold">{e.org}</p>
                        <p className="text-sm text-slate-500 mt-2">
                          {e.location ? `${e.location} • ` : ""}
                          {e.duration}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {(e.badges ?? []).map((b) => (
                          <span
                            key={b}
                            className="text-xs font-extrabold px-3 py-1 rounded-full bg-brand/10 text-brand border border-brand/20"
                          >
                            {b}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-4">
                      <p className="text-xs font-extrabold tracking-widest uppercase text-slate-400">
                        View contributions
                      </p>
                      <ul className="mt-3 space-y-2 text-slate-700">
                        {e.bullets.map((b, i) => (
                          <li key={i} className="flex gap-2">
                            <span className="text-brand font-bold">›</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Education only */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <span className="w-10 h-10 rounded-2xl bg-slate-900 text-white grid place-items-center font-black">
              🎓
            </span>
            <h3 className="text-sm font-extrabold tracking-widest uppercase text-slate-700">
              Education
            </h3>
          </div>

          <div className="grid gap-4">
            {data.education.map((ed) => (
              <div
                key={ed.degree}
                className="rounded-3xl border border-slate-100 bg-white shadow-soft p-6"
              >
                <p className="text-lg font-extrabold text-ink">{ed.degree}</p>
                <p className="text-brand font-bold">{ed.school}</p>

                <div className="mt-4 rounded-2xl border border-slate-100 bg-slate-50 p-4 text-center">
                  <p className="text-xs font-extrabold tracking-widest text-slate-400 uppercase">
                    Grade Point Average
                  </p>
                  <p className="mt-2 text-3xl font-black text-brand">{ed.gpa}</p>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {(ed.chips ?? []).map((c) => (
                    <span
                      key={c}
                      className="text-[11px] font-extrabold px-3 py-1 rounded-full bg-slate-50 border border-slate-100 text-slate-600"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Full-width Technical Proficiencies */}
      <div className="mt-12">
        <div className="flex items-center gap-3 mb-5">
          <span className="w-10 h-10 rounded-2xl bg-slate-900 text-white grid place-items-center font-black">
            📊
          </span>
          <h3 className="text-sm font-extrabold tracking-widest uppercase text-slate-700">
            {data.skills.title}
          </h3>
        </div>

        <div className="rounded-3xl border border-slate-100 bg-white shadow-soft p-8">
          <div className="grid gap-6">
            {data.skills.groups.map((group) => (
              <div
                key={group.title}
                className="flex flex-col md:flex-row md:items-start gap-4"
              >
                <div className="md:w-64 lg:w-72 flex-shrink-0">
                  <h4 className="text-sm font-extrabold uppercase tracking-wide text-slate-700">
                    {group.title}
                  </h4>
                </div>

                <div className="flex flex-wrap gap-3">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}