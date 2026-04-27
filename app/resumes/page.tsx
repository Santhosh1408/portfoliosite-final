import Link from "next/link";
import { portfolioData as data } from "@/data/portfolio";

export default function ResumesPage() {
  return (
    <main className="grid-paper min-h-screen">
      <header className="container-max pt-6">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-slate-700 font-bold hover:text-slate-900 transition"
          >
            ← Back to Portfolio
          </Link>

          <Link
            href="/#contact"
            className="bg-brand text-white px-5 py-3 rounded-2xl font-extrabold shadow-soft hover:opacity-95 transition"
          >
            Contact Me
          </Link>
        </div>
      </header>

      <div className="container-max pt-10 pb-20">
        <h1
          className="text-5xl md:text-6xl font-black tracking-tight text-ink"
          style={{ fontFamily: "var(--font-jakarta)" }}
        >
          {data.resumesPage.title}
        </h1>

        <p className="mt-4 max-w-3xl text-lg text-slate-600 leading-relaxed">
          {data.resumesPage.subtitle}
        </p>

        <div className="mx-auto mt-12 grid max-w-md gap-6">
          {data.resumesPage.cards.map((c) => (
            <div
              key={c.title}
              className="rounded-3xl border border-slate-100 bg-white shadow-soft p-7"
            >
              <div className="w-14 h-14 rounded-2xl bg-brand/10 border border-brand/20 grid place-items-center text-brand font-black">
                ⌁
              </div>

              <h3 className="mt-5 text-xl font-extrabold text-ink">
                {c.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                View this resume in the browser or download the PDF directly.
              </p>

              <div className="mt-8 flex flex-col gap-3">
                <a
                  href={c.pdfUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full text-center bg-white border border-slate-300 px-5 py-3 rounded-2xl font-extrabold text-slate-700 hover:bg-slate-50 transition"
                >
                  View in Browser
                </a>

                <a
                  href={c.pdfUrl}
                  download={`${c.title}.pdf`}
                  className="w-full text-center bg-slate-900 text-white px-5 py-3 rounded-2xl font-extrabold shadow-md hover:bg-slate-800 transition"
                >
                  Download PDF
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-14 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} {data.name}. All rights reserved.
        </p>
      </div>
    </main>
  );
}
