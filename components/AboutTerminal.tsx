"use client";

import { useState } from "react";
import { portfolioData as data } from "@/data/portfolio";

function formatMultiline(s: string) {
  return s.split("\n").map((line, idx) => (
    <p key={idx} className={idx === 0 ? "" : "mt-4"}>
      {line}
    </p>
  ));
}

export default function AboutTerminal() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="mt-14">
      <div className="rounded-3xl border border-slate-100 bg-white shadow-soft overflow-hidden">
        {/* top bar */}
        <div className="px-6 py-4 border-b border-slate-100 bg-slate-50 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-slate-300" />
            <span className="w-3 h-3 rounded-full bg-slate-200" />
            <span className="w-3 h-3 rounded-full bg-slate-200" />
          </div>
          <p className="text-xs font-bold tracking-widest text-slate-400 uppercase">
            {data.aboutTerminal.filename}
          </p>
          <div />
        </div>

        <div className="p-8 font-mono text-sm leading-relaxed">
          <p className="text-brand font-bold">{data.aboutTerminal.codeLead}</p>

          <div className="mt-6">
            <p className="text-brand font-bold">{data.aboutTerminal.title}</p>

            <div className="mt-4 border-l-2 border-slate-100 pl-6 text-slate-600">
              {formatMultiline(data.aboutTerminal.defaultText)}
              {expanded ? (
                <div className="mt-6">{formatMultiline(data.aboutTerminal.moreText)}</div>
              ) : null}
            </div>

            <button
              onClick={() => setExpanded((v) => !v)}
              className="mt-6 text-brand font-bold hover:underline"
            >
              {expanded ? "[Collapse] ←" : "[Read More...] →"}
            </button>
          </div>

          <p className="mt-8 text-brand font-bold">
            {">>>"}{" "}
            <span className="inline-block w-2 h-4 bg-brand/60 align-middle animate-pulse" />
          </p>
        </div>
      </div>
    </div>
  );
}