"use client";

import React, { useState } from "react";
import {
  ShieldCheck,
  CheckCircle2,
  Terminal,
  ArrowRight,
  Code2,
  FileCheck,
  Network,
  Copy,
  Check,
  Layers,
  Sparkles,
  Play,
} from "lucide-react";
import { RESUME_DATA } from "@/data/resumeData";

interface HeroProps {
  onOpenResume: () => void;
  onNavigateToLab: () => void;
}

export default function Hero({ onOpenResume, onNavigateToLab }: HeroProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(RESUME_DATA.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="overview" className="relative pt-10 pb-16 md:pt-16 md:pb-24 overflow-hidden">
      {/* Subtle modern ambient background lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-b from-cyan-500/[0.07] via-blue-600/[0.05] to-transparent blur-[120px] -z-10 rounded-full pointer-events-none" />
      <div className="absolute top-24 right-10 w-64 h-64 bg-cyan-500/[0.04] blur-[90px] -z-10 rounded-full pointer-events-none" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Bio & Core Pitch */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Top Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/20 text-xs font-mono text-cyan-400">
              <span className="flex h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
              <span>SOFTWARE QUALITY ASSURANCE &bull; AUTOMATION ENGINEER</span>
            </div>

            {/* Headline */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                Muhammad <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400">Bilal</span>
              </h1>
              <p className="mt-3 text-lg sm:text-xl font-medium text-slate-300">
                QA Engineer with <span className="text-cyan-400 font-semibold">1 Year Full-Stack MERN Developer Roots</span>
              </p>
            </div>

            {/* Description */}
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Experienced in manual, regression, smoke, and end-to-end testing across{" "}
              <strong className="text-slate-200 font-medium">Admin, Recruiter, and Talent portals</strong>.
              Skilled in <strong className="text-cyan-300 font-medium">Playwright test automation</strong>,{" "}
              <strong className="text-emerald-300 font-medium">Postman REST API testing</strong>, Jira defect reporting,
              and validating high-stakes <strong className="text-blue-300 font-medium">staging Pay-In &amp; Pay-Out financial workflows</strong>.
            </p>

            {/* Credential Tags */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
              <span className="px-2.5 py-1 rounded-lg bg-slate-900/90 border border-slate-800 text-slate-300 text-xs flex items-center gap-1.5 font-mono">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                ISTQB Testing Trained
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-slate-900/90 border border-slate-800 text-slate-300 text-xs flex items-center gap-1.5 font-mono">
                <Network className="w-3.5 h-3.5 text-cyan-400" />
                Postman REST API
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-slate-900/90 border border-slate-800 text-slate-300 text-xs flex items-center gap-1.5 font-mono">
                <Code2 className="w-3.5 h-3.5 text-blue-400" />
                Playwright Automation
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-slate-900/90 border border-slate-800 text-slate-300 text-xs flex items-center gap-1.5 font-mono">
                <Layers className="w-3.5 h-3.5 text-emerald-400" />
                MERN Developer DNA
              </span>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                onClick={onNavigateToLab}
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-600 hover:from-cyan-500 hover:to-blue-500 text-white font-medium text-xs sm:text-sm shadow-lg shadow-cyan-950/60 transition-all cursor-pointer group"
              >
                <Terminal className="w-4 h-4 text-cyan-200 group-hover:rotate-12 transition-transform" />
                <span>Launch Interactive Test Lab</span>
                <ArrowRight className="w-4 h-4 text-cyan-200 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenResume}
                className="flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-200 font-medium text-xs sm:text-sm transition-all cursor-pointer"
              >
                <FileCheck className="w-4 h-4 text-emerald-400" />
                <span>View Full Resume</span>
              </button>

              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-2 px-3.5 py-3 rounded-xl bg-slate-900/60 hover:bg-slate-800 border border-slate-800 text-slate-300 text-xs sm:text-sm transition-all cursor-pointer font-mono"
                title="Copy email to clipboard"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-400" />
                    <span className="hidden sm:inline">{RESUME_DATA.email}</span>
                    <span className="sm:hidden">Copy Email</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Column: Clean Telemetry Terminal Card */}
          <div className="lg:col-span-5">
            <div className="relative group">
              {/* Subtle hover backlight */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-emerald-500/20 rounded-2xl blur-lg opacity-60 group-hover:opacity-100 transition duration-500" />

              <div className="relative rounded-2xl bg-[#090d16] border border-white/[0.08] p-5 sm:p-6 shadow-2xl font-mono text-xs overflow-hidden">
                {/* macOS Dot Header */}
                <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-white/[0.06]">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                    <span className="ml-2 text-slate-400 text-[11px]">hireboard.qa-spec.ts</span>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-950/80 text-emerald-400 border border-emerald-800/40 text-[10px]">
                    SUITE: 100% PASS
                  </span>
                </div>

                {/* Spec assertions */}
                <div className="space-y-3 text-slate-300">
                  <div className="text-slate-500 text-[11px]">
                    // Hireboard &bull; Fireboard Intelligence Test Matrix
                  </div>

                  <div className="flex items-start gap-2.5 bg-slate-900/60 p-3 rounded-xl border border-white/[0.04]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-slate-100 font-semibold">
                        Multi-Portal Coverage (Admin, Recruiter, Talent)
                      </div>
                      <div className="text-slate-400 text-[11px] mt-0.5">
                        Smoke, Sanity, Regression &amp; E2E validation.
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 bg-slate-900/60 p-3 rounded-xl border border-white/[0.04]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-slate-100 font-semibold">
                        Staging Financial Workflows
                      </div>
                      <div className="text-slate-400 text-[11px] mt-0.5">
                        Zero-risk Pay-In &amp; Pay-Out positive &amp; edge boundary testing.
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 bg-slate-900/60 p-3 rounded-xl border border-white/[0.04]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-slate-100 font-semibold">
                        Postman REST API Testing
                      </div>
                      <div className="text-slate-400 text-[11px] mt-0.5">
                        JWT auth, HTTP status codes, schema validation &amp; sanitization.
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 bg-slate-900/60 p-3 rounded-xl border border-white/[0.04]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-slate-100 font-semibold">
                        Playwright Test Automation
                      </div>
                      <div className="text-slate-400 text-[11px] mt-0.5">
                        Automated recruiter signup &amp; contract calculation rules.
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Telemetry */}
                <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                    Remote Team Ready
                  </span>
                  <span className="text-emerald-400 font-medium">0 Production Defect Leaks</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Clean Metrics Row */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
          {RESUME_DATA.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-900/40 border border-white/[0.06] hover:border-cyan-500/30 transition-all text-center sm:text-left group"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-cyan-400 transition-colors">
                {stat.value}
              </div>
              <div className="text-xs font-semibold text-slate-200 mt-1">{stat.label}</div>
              <div className="text-[11px] text-slate-400 mt-0.5 font-mono">{stat.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
