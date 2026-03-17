"use client";

import { useEffect, useState } from "react";
import { portfolioData as data } from "@/data/portfolio";
import { AnimatePresence, motion } from "framer-motion";
import { Github, Instagram, Linkedin, Mail, Send } from "lucide-react";

export default function Hero() {
  const images = data.profileImages ?? ["/profile.jpg"];
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const t = setInterval(() => {
      setIdx((p) => (p + 1) % images.length);
    }, 7000);
    return () => clearInterval(t);
  }, [images.length]);

  const current = images[idx];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-10 md:pt-14 items-start">
      {/* Left */}
      <div>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-100 bg-white shadow-sm text-xs font-extrabold tracking-widest text-brand uppercase">
          <span className="w-2 h-2 rounded-full bg-brand" />
          {data.headlinePill}
        </div>

        {/* Name: single line */}
        <h1
          className="mt-6 text-6xl lg:text-7xl font-black tracking-tight text-ink leading-none whitespace-nowrap"
          style={{ fontFamily: "var(--font-jakarta)" }}
        >
          {data.name}
        </h1>

        <p className="mt-3 text-xl italic text-brand font-semibold">
          “{data.quote}”
        </p>

        {/* Icons under quote */}
        <div className="mt-6 flex items-center gap-4 text-slate-500">
          <a
            href={data.socials.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="hover:text-slate-900 transition"
          >
            <Github className="w-5 h-5" />
          </a>

          <a
            href={data.socials.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="hover:text-slate-900 transition"
          >
            <Instagram className="w-5 h-5" />
          </a>

          <a
            href={data.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="hover:text-slate-900 transition"
          >
            <Linkedin className="w-5 h-5" />
          </a>

          <a
            href={data.socials.outlook ?? `mailto:${data.email}`}
            aria-label="Outlook"
            className="hover:text-slate-900 transition"
          >
            <Send className="w-5 h-5" />
          </a>

          <a
            href={`mailto:${data.email}`}
            aria-label="Email"
            className="hover:text-slate-900 transition"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>

        {/* Hero skill boxes */}
        <div className="mt-8 lg:w-[115%]">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-3 gap-y-8">
            {data.heroSkillChips.map((chip) => (
              <div
                key={chip.label}
                className="flex w-full min-h-[68px] items-center justify-center rounded-2xl border border-slate-200 bg-white px-3 py-3 text-center shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <span className="text-sm font-semibold leading-snug text-slate-800 break-words">
                  {chip.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 flex items-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-3 bg-brand text-white px-8 py-4 rounded-2xl font-extrabold shadow-soft hover:opacity-95 transition"
          >
            View Projects <span aria-hidden>↗</span>
          </a>
        </div>
      </div>

      {/* Right */}
      <div className="flex flex-col items-center lg:items-end">
        <div className="w-full max-w-[430px] rounded-[2.25rem] bg-white border border-slate-100 shadow-soft p-2">
          <div className="rounded-[2rem] overflow-hidden bg-slate-200 aspect-square relative">
            <AnimatePresence mode="wait">
              <motion.img
                key={current}
                src={current}
                alt={data.name}
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-100 shadow-sm text-sm font-bold">
          <span className="w-2 h-2 rounded-full bg-green-500" />
          {data.status}
        </div>
      </div>
    </div>
  );
}