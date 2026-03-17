"use client";

import { useState } from "react";
import { portfolioData as data } from "@/data/portfolio";

export default function Contact() {
  const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

  const [status, setStatus] = useState<
    "idle" | "sending" | "sent" | "error"
  >("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!endpoint) {
      setStatus("error");
      return;
    }

    setStatus("sending");

    const formEl = e.currentTarget;
    const form = new FormData(formEl);

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        body: form,
        headers: {
          Accept: "application/json",
        },
      });

      if (res.ok) {
        setStatus("sent");
        formEl.reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  return (
    <div>
      <h2
        className="text-5xl md:text-6xl font-black tracking-tight text-slate-900"
        style={{ fontFamily: "var(--font-jakarta)" }}
      >
        Get in Touch
      </h2>

      <p className="mt-4 text-slate-600 max-w-2xl text-lg">
        Have a project in mind or just want to say hi? Feel free to reach out!
      </p>

      <div className="mt-10 grid lg:grid-cols-2 gap-8">
        <form
          onSubmit={onSubmit}
          className="rounded-3xl border border-slate-100 bg-white p-6 shadow-md"
        >
          <label className="block text-xs font-bold uppercase tracking-widest text-slate-500">
            Your Name
          </label>

          <input
            name="name"
            required
            placeholder="John Doe"
            className="mt-3 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-800 outline-none focus:ring-2 focus:ring-slate-200"
          />

          <label className="mt-6 block text-xs font-bold uppercase tracking-widest text-slate-500">
            Your Message
          </label>

          <textarea
            name="message"
            required
            rows={6}
            placeholder="How can I help you?"
            className="mt-3 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-800 outline-none focus:ring-2 focus:ring-slate-200"
          />

          <label className="mt-6 block text-xs font-bold uppercase tracking-widest text-slate-500">
            Your Email
          </label>

          <input
            type="email"
            name="email"
            required
            placeholder="you@example.com"
            className="mt-3 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-800 outline-none focus:ring-2 focus:ring-slate-200"
          />

          <button
            type="submit"
            disabled={status === "sending"}
            className="mt-8 w-full rounded-xl bg-black text-white px-6 py-4 font-bold text-sm hover:opacity-90 transition disabled:opacity-60"
          >
            {status === "sending" ? "Sending..." : "Send Message →"}
          </button>

          {status === "sent" && (
            <p className="mt-4 text-green-600 font-semibold text-sm">
              Message sent successfully.
            </p>
          )}

          {status === "error" && (
            <p className="mt-4 text-red-600 font-semibold text-sm">
              Something went wrong. Try again.
            </p>
          )}

          {!endpoint && (
            <p className="mt-4 text-amber-600 text-sm">
              Add{" "}
              <span className="font-bold">
                NEXT_PUBLIC_FORMSPREE_ENDPOINT
              </span>{" "}
              in <span className="font-bold">.env.local</span> to enable sending.
            </p>
          )}
        </form>

        <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-md">
          <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
            <p className="text-xs uppercase tracking-widest font-bold text-slate-400">
              Email
            </p>

            <a
              href={`mailto:${data.email}`}
              className="mt-2 block font-bold text-blue-600"
            >
              {data.email} ✉
            </a>

            <p className="mt-6 text-xs uppercase tracking-widest font-bold text-slate-400">
              Socials
            </p>

            <div className="mt-3 grid gap-3">
              <a
                href={data.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="font-semibold hover:text-blue-600"
              >
                LinkedIn
              </a>

              <a
                href={data.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="font-semibold hover:text-pink-500"
              >
                Instagram
              </a>

              <a
                href={data.socials.github}
                target="_blank"
                rel="noreferrer"
                className="font-semibold hover:text-black"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}