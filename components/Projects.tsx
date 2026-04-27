"use client";

import { useMemo, useState } from "react";
import { portfolioData as data } from "@/data/portfolio";
import type { Project } from "@/data/portfolio";

type Filter = "All" | "Graduate" | "Undergrad";

const INITIAL_COUNT = 3;

function matchesFilter(project: Project, filter: Filter) {
  if (filter === "All") return true;
  return project.category === filter;
}

export default function Projects() {
  const [filter, setFilter] = useState<Filter>("All");
  const [query, setQuery] = useState("");
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    return data.projects
      .filter((project) => matchesFilter(project, filter))
      .filter((project) => {
        if (!q) return true;

        return (
          project.title.toLowerCase().includes(q) ||
          project.shortDesc.toLowerCase().includes(q) ||
          project.tags.join(" ").toLowerCase().includes(q)
        );
      });
  }, [filter, query]);

  const visible = filtered.slice(0, visibleCount);
  const canLoadMore = visibleCount < filtered.length;

  return (
    <div>
      <div className="mb-10">
        <h2
          className="text-5xl md:text-6xl font-black tracking-tight text-ink"
          style={{ fontFamily: "var(--font-jakarta)" }}
        >
          {data.projectsSection.title}
        </h2>

        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-600">
          {data.projectsSection.subtitle}
        </p>
      </div>

      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        {/* Filters */}
        <div className="flex flex-wrap gap-2">
          {(["All", "Graduate", "Undergrad"] as const).map((f) => {
            const active = filter === f;

            return (
              <button
                key={f}
                type="button"
                onClick={() => {
                  setFilter(f);
                  setVisibleCount(INITIAL_COUNT);
                }}
                className={[
                  "rounded-full border px-4 py-2 text-sm font-extrabold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-slate-300",
                  active
                    ? "border-slate-900 bg-slate-900 text-white shadow-md"
                    : "border-slate-200 bg-white text-slate-700 hover:bg-slate-100",
                ].join(" ")}
              >
                {f}
              </button>
            );
          })}
        </div>

        {/* Search */}
        <div className="w-full md:w-[320px]">
          <input
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setVisibleCount(INITIAL_COUNT);
            }}
            placeholder="Search projects..."
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold outline-none shadow-sm focus:ring-2 focus:ring-slate-200"
          />
        </div>
      </div>

      {/* Cards */}
      <div className="grid gap-6 md:grid-cols-3">
        {visible.map((project) => {
          const isOpen = Boolean(expanded[project.title]);

          return (
            <div
              key={project.title}
              className="rounded-3xl border border-slate-100 bg-white p-6 shadow-soft"
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl border border-slate-100 bg-slate-50 font-black text-brand">
                ⌁
              </div>

              <h3 className="mt-4 text-lg font-extrabold text-ink">
                {project.title}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {project.shortDesc}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-brand/20 bg-brand/10 px-3 py-1 text-[11px] font-extrabold text-brand"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <button
                type="button"
                className="mt-5 text-sm font-extrabold text-brand hover:underline"
                onClick={() =>
                  setExpanded((prev) => ({
                    ...prev,
                    [project.title]: !prev[project.title],
                  }))
                }
              >
                {isOpen ? "Collapse ←" : "Details →"}
              </button>

              {isOpen && (
                <div className="mt-5 border-t border-slate-100 pt-5">
                  <p className="text-sm font-extrabold text-slate-900">Overview</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-700">
                    {project.details.overview}
                  </p>

                  <p className="mt-4 text-sm font-extrabold text-slate-900">
                    Highlights
                  </p>
                  <ul className="mt-2 space-y-2 text-sm text-slate-700">
                    {project.details.highlights.map((highlight, index) => (
                      <li key={index} className="flex gap-2">
                        <span className="font-black text-brand">›</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="mt-4 text-sm font-extrabold text-slate-900">
                    Tech Stack
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {project.details.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-slate-100 bg-slate-50 px-3 py-1 text-[11px] font-extrabold text-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.details.outcomes?.length ? (
                    <>
                      <p className="mt-4 text-sm font-extrabold text-slate-900">
                        Outcomes
                      </p>
                      <ul className="mt-2 space-y-2 text-sm text-slate-700">
                        {project.details.outcomes.map((outcome, index) => (
                          <li key={index} className="flex gap-2">
                            <span className="font-black text-brand">›</span>
                            <span>{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : null}

                  <div className="mt-5 flex flex-wrap gap-3">
                    {project.details.github ? (
                      <a
                        href={project.details.github}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-extrabold text-white"
                      >
                        GitHub ↗
                      </a>
                    ) : null}

                    {project.details.demo ? (
                      <a
                        href={project.details.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-xl bg-brand px-4 py-2 text-sm font-extrabold text-white"
                      >
                        Demo ↗
                      </a>
                    ) : null}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Load More */}
      <div className="mt-10 flex flex-col items-center">
        {canLoadMore ? (
          <button
            type="button"
            onClick={() => setVisibleCount(filtered.length)}
            className="rounded-2xl border border-slate-100 bg-white px-6 py-3 font-extrabold text-slate-800 shadow-sm transition hover:bg-slate-50"
          >
            Load More Projects ↓
          </button>
        ) : null}

        <p className="mt-3 text-sm text-slate-500">
          Showing {visible.length} of {filtered.length} projects
        </p>
      </div>
    </div>
  );
}
