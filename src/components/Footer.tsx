"use client";

import React from "react";
import {
  ShieldCheck,
  ArrowUp,
  Mail,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { RESUME_DATA } from "@/data/resumeData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-xs font-mono text-slate-400 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Top Telemetry Line */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-900">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded bg-cyan-950 border border-cyan-800 flex items-center justify-center text-cyan-400 font-bold text-xs">
              MB
            </div>
            <div>
              <span className="font-semibold text-slate-200">Muhammad Bilal</span>
              <span className="text-slate-600 mx-2">|</span>
              <span className="text-cyan-400">Software Quality Assurance &amp; Automation</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[11px] text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              ALL TESTS PASSING
            </span>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 px-2.5 py-1 rounded bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 transition-colors cursor-pointer"
            >
              <span>TOP</span>
              <ArrowUp className="w-3 h-3 text-cyan-400" />
            </button>
          </div>
        </div>

        {/* Links and Copyright */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            &copy; 2026 Muhammad Bilal. Engineered with Next.js, TypeScript &amp; Tailwind CSS.
          </div>

          <div className="flex items-center gap-4">
            <a
              href={RESUME_DATA.linkedIn}
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <a
              href={RESUME_DATA.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href={`mailto:${RESUME_DATA.email}`}
              className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
