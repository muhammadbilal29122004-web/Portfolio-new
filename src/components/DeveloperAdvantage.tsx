"use client";

import React from "react";
import {
  Code2,
  Bug,
  Cpu,
  Network,
  CheckCircle2,
  XCircle,
  Sparkles,
} from "lucide-react";

export default function DeveloperAdvantage() {
  const comparisonItems = [
    {
      title: "React & DOM State Awareness",
      traditional: "Treats the page as an opaque visual box; misses asynchronous state race conditions and re-render cycles.",
      bilal: "Understands React component hooks, DOM reconciliation, and async state mutations to identify hidden edge-case glitches.",
      icon: Cpu,
    },
    {
      title: "API & Payload Inspection",
      traditional: "Only checks visible UI text; fails to notice unhandled backend errors, token drops, or schema mismatches.",
      bilal: "Validates REST API schemas in Postman, inspecting status codes (401, 422, 500), payload types, and sanitization.",
      icon: Network,
    },
    {
      title: "Playwright Automation Architecture",
      traditional: "Relies on hardcoded timeouts (`sleep`) and brittle selectors that break on simple UI style changes.",
      bilal: "Builds resilient, maintainable Playwright test suites using semantic locators, auto-waiting, and modular patterns.",
      icon: Code2,
    },
    {
      title: "Jira Defect Reproduction Quality",
      traditional: "Logs vague descriptions like 'button does not work', leading to friction and delayed bug resolution.",
      bilal: "Provides reproduction steps with exact payload JSON dumps, console stack traces, and clear reproduction steps.",
      icon: Bug,
    },
  ];

  return (
    <section id="advantage" className="py-16 md:py-24 bg-[#070a12] border-y border-white/[0.05] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 pb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-800/40 text-cyan-400 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>THE DUAL-LENS ADVANTAGE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Why a <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Developer-Turned-QA</span> Tests Deeper
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Having built web applications with the MERN stack at Vonza gives Bilal the technical intuition required to isolate defects at the architectural level.
          </p>
        </div>

        {/* 2x2 Clean Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {comparisonItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="rounded-2xl bg-slate-900/40 border border-white/[0.06] p-6 sm:p-7 hover:border-white/[0.12] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3.5 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-800/50 flex items-center justify-center text-cyan-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white">
                      {item.title}
                    </h3>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm">
                    {/* Traditional */}
                    <div className="p-3.5 rounded-xl bg-rose-950/20 border border-rose-900/30 flex items-start gap-2.5">
                      <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                      <div className="text-slate-300">
                        <span className="text-rose-400 font-mono text-[11px] block font-semibold mb-0.5">
                          TRADITIONAL BLACK-BOX QA
                        </span>
                        {item.traditional}
                      </div>
                    </div>

                    {/* Bilal */}
                    <div className="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-900/40 flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <div className="text-slate-200">
                        <span className="text-emerald-400 font-mono text-[11px] block font-semibold mb-0.5">
                          BILAL&apos;S CODE-AWARE QA APPROACH
                        </span>
                        {item.bilal}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-3.5 border-t border-white/[0.04] flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span>Engineered for zero regression</span>
                  <span className="text-cyan-400 font-medium">100% Traceability</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quote banner */}
        <div className="mt-10 rounded-2xl bg-gradient-to-r from-slate-900/60 via-slate-900/40 to-slate-900/60 border border-white/[0.06] p-6 text-center">
          <p className="text-sm sm:text-base text-slate-300 italic max-w-3xl mx-auto">
            &ldquo;When a defect report includes the exact HTTP status code, failing payload JSON, and console trace, engineers resolve issues in minutes instead of days.&rdquo;
          </p>
          <div className="mt-2.5 text-xs font-mono text-cyan-400 font-semibold">
            &mdash; Muhammad Bilal &bull; QA Engineer &bull; Ex-MERN Developer
          </div>
        </div>
      </div>
    </section>
  );
}
