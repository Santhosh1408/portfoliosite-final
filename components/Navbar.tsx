"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { portfolioData as data } from "@/data/portfolio";

type SectionId = "home" | "career" | "projects" | "contact";

const NAV: { id: SectionId; label: string }[] = [
  { id: "home", label: "Home" },
  { id: "career", label: "Education & Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact Me" },
];

function scrollToId(id: SectionId) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Navbar() {
  const [active, setActive] = useState<SectionId>("home");

  useEffect(() => {
    const ids: SectionId[] = ["home", "career", "projects", "contact"];
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];

        if (visible?.target?.id && ids.includes(visible.target.id as SectionId)) {
          setActive(visible.target.id as SectionId);
        }
      },
      { threshold: [0.2, 0.35, 0.55] }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });

    return () => obs.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <div className="container-max pt-4">
        <div className="rounded-2xl border border-slate-100 bg-white/85 backdrop-blur shadow-soft px-4 h-16 flex items-center justify-between">
          {/* Left brand */}
          <button onClick={() => scrollToId("home")} className="flex items-center gap-3">
            <span className="w-9 h-9 rounded-xl bg-slate-900 text-white grid place-items-center font-black">
              {data.nameShort}
            </span>
            <span className="font-extrabold text-slate-900">{data.name}</span>
          </button>

          {/* Center nav */}
          <nav className="hidden md:flex items-center gap-2">
            {NAV.map((item) => {
              const isActive = active === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToId(item.id)}
                  className={[
                    "px-3 py-2 rounded-xl text-sm font-semibold transition",
                    isActive
                      ? "text-slate-900"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50",
                  ].join(" ")}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right */}
          <div className="flex items-center gap-3">
            <Link
              href="/resumes"
              className="inline-flex items-center justify-center bg-slate-900 text-white px-4 py-2 rounded-xl font-extrabold shadow-soft hover:opacity-95 transition"
            >
              Resume
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}