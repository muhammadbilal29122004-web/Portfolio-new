"use client";

import React, { useState } from "react";
import {
  Briefcase,
  Calendar,
  MapPin,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  ShieldCheck,
  Code2,
} from "lucide-react";
import { RESUME_DATA } from "@/data/resumeData";

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="experience" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 pb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-800/40 text-cyan-400 text-xs font-mono">
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREER TRAJECTORY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Experience</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Delivering defect-free software across distributed engineering teams in high-velocity agile sprints.
          </p>
        </div>

        {/* Timeline Stack */}
        <div className="max-w-4xl mx-auto space-y-8 relative">
          {/* Vertical timeline line */}
          <div className="hidden md:block absolute left-8 top-8 bottom-8 w-px bg-gradient-to-b from-cyan-500 via-blue-500 to-slate-800 -z-0" />

          {RESUME_DATA.experiences.map((exp, idx) => {
            const isExpanded = expandedIndex === idx;
            const isQA = exp.role.includes("QA");

            return (
              <div key={idx} className="relative md:pl-20 z-10">
                {/* Timeline node icon */}
                <div className="hidden md:flex absolute left-4 top-6 -translate-x-1/2 w-8 h-8 rounded-full bg-[#080b14] border-2 border-cyan-500 items-center justify-center text-cyan-400 shadow-lg shadow-black/80">
                  {isQA ? <ShieldCheck className="w-4 h-4 text-cyan-400" /> : <Code2 className="w-4 h-4 text-blue-400" />}
                </div>

                {/* Experience Card */}
                <div className="rounded-2xl bg-slate-900/40 border border-white/[0.06] p-6 sm:p-7 hover:border-white/[0.12] transition-all shadow-xl group">
                  {/* Top Bar */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-4 border-b border-white/[0.06]">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-lg sm:text-xl font-bold text-white">
                          {exp.role}
                        </span>
                        <span className="text-slate-500 font-medium">@</span>
                        <span className="text-lg sm:text-xl font-bold text-cyan-400">
                          {exp.company}
                        </span>
                        {exp.subCompany && (
                          <span className="text-xs px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 font-mono">
                            {exp.subCompany}
                          </span>
                        )}
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-950/80 text-emerald-400 border border-emerald-800/50 font-mono">
                          {exp.type}
                        </span>
                      </div>

                      <div className="flex items-center gap-4 text-xs text-slate-400 mt-2 font-mono">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-slate-500" />
                          {exp.period} ({exp.duration})
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-slate-500" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => toggleExpand(idx)}
                      className="self-start sm:self-center flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-800 text-xs font-mono text-slate-300 transition-colors cursor-pointer border border-white/[0.06]"
                    >
                      <span>{isExpanded ? "Collapse Details" : "View Achievements"}</span>
                      {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>
                  </div>

                  {/* Summary */}
                  <p className="text-sm text-slate-300 leading-relaxed mt-4">
                    {exp.summary}
                  </p>

                  {/* Metrics Pills */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-4">
                    {exp.metrics.map((m, mIdx) => (
                      <div
                        key={mIdx}
                        className="p-2.5 rounded-xl bg-slate-950/80 border border-white/[0.04] text-center font-mono"
                      >
                        <div className="text-xs font-bold text-cyan-400">{m.value}</div>
                        <div className="text-[10px] text-slate-400 mt-0.5">{m.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Expandable Bullet Points */}
                  {isExpanded && (
                    <div className="mt-5 pt-4 border-t border-white/[0.06] space-y-2.5">
                      <div className="text-xs font-mono text-cyan-400 font-semibold mb-2">
                        KEY DELIVERABLES &amp; TEST SCOPE:
                      </div>
                      {exp.highlights.map((highlight, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Skills tags */}
                  <div className="mt-5 pt-4 border-t border-white/[0.04] flex flex-wrap items-center gap-1.5">
                    <span className="text-[11px] font-mono text-slate-500 mr-1">Tools &amp; Tech:</span>
                    {exp.skillsUsed.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-0.5 rounded-md bg-slate-950 text-slate-300 text-[11px] font-mono border border-white/[0.06]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
