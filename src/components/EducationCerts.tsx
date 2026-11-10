"use client";

import React from "react";
import {
  GraduationCap,
  Award,
  CheckCircle2,
} from "lucide-react";
import { RESUME_DATA } from "@/data/resumeData";

export default function EducationCerts() {
  return (
    <section id="education" className="py-16 md:py-24 bg-[#070a12] border-t border-white/[0.05] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Education */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-800/40 text-cyan-400 text-xs font-mono mb-2">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>ACADEMIC FOUNDATION</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Education
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm mt-1 leading-relaxed">
                Computer science principles underpinning software testing, algorithms, and system design.
              </p>
            </div>

            <div className="space-y-4">
              {RESUME_DATA.education.map((edu, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-slate-900/40 border border-white/[0.06] p-5 sm:p-6 hover:border-white/[0.12] transition-all"
                >
                  <h3 className="text-base font-bold text-white font-sans">
                    {edu.degree}
                  </h3>

                  <div className="text-sm font-semibold text-cyan-400 mt-1">
                    {edu.institution}
                  </div>

                  <div className="inline-block px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 text-xs font-mono mt-2.5 border border-white/[0.06]">
                    {edu.status}
                  </div>

                  {edu.details && (
                    <p className="text-xs text-slate-400 leading-relaxed mt-3 pt-3 border-t border-white/[0.04]">
                      {edu.details}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Certifications & Training */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-800/40 text-emerald-400 text-xs font-mono mb-2">
                <Award className="w-3.5 h-3.5" />
                <span>PROFESSIONAL QUALIFICATIONS</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Certifications &amp; Training
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm mt-1 leading-relaxed">
                Industry-certified training in software testing lifecycle, test design techniques, and web development.
              </p>
            </div>

            <div className="space-y-4">
              {RESUME_DATA.certifications.map((cert, idx) => {
                const isHighlight = cert.highlight;
                return (
                  <div
                    key={idx}
                    className={`rounded-2xl p-5 sm:p-6 transition-all relative overflow-hidden ${
                      isHighlight
                        ? "bg-slate-900/60 border border-emerald-500/50 shadow-lg shadow-emerald-950/20"
                        : "bg-slate-900/40 border border-white/[0.06] hover:border-white/[0.12]"
                    }`}
                  >
                    {isHighlight && (
                      <div className="absolute top-0 right-0 bg-emerald-500 text-slate-950 text-[10px] font-bold font-mono px-3 py-0.5 rounded-bl-lg">
                        COMPANY SPONSORED
                      </div>
                    )}

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <div className="flex items-center gap-2.5">
                        <Award className={`w-4 h-4 ${isHighlight ? "text-emerald-400" : "text-cyan-400"}`} />
                        <h3 className="text-base font-bold text-white">
                          {cert.title}
                        </h3>
                      </div>
                      <span className="text-xs text-slate-400 font-mono">
                        {cert.date}
                      </span>
                    </div>

                    <div className="text-sm font-semibold text-cyan-400 mt-1 font-sans">
                      {cert.issuer}
                    </div>

                    {cert.credentialNote && (
                      <p className="text-xs text-slate-300 leading-relaxed mt-2.5 pt-2.5 border-t border-white/[0.04]">
                        {cert.credentialNote}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* References */}
        <div className="mt-12 p-5 rounded-2xl bg-slate-900/40 border border-white/[0.06] text-center flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="text-left">
            <div className="text-xs font-mono text-cyan-400 font-semibold">PROFESSIONAL REFERENCES</div>
            <div className="text-sm text-slate-300 mt-0.5">
              Verified references from Hireboard and Vonza engineering managers available immediately upon request.
            </div>
          </div>

          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-slate-800/80 text-xs font-mono text-slate-200 border border-white/[0.06] self-start sm:self-center">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            {RESUME_DATA.references}
          </span>
        </div>
      </div>
    </section>
  );
}
