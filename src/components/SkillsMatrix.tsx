"use client";

import React, { useState } from "react";
import {
  ShieldCheck,
  Network,
  Code2,
  Layers,
  Workflow,
  Search,
  CheckCircle2,
  Cpu,
} from "lucide-react";
import { RESUME_DATA } from "@/data/resumeData";

export default function SkillsMatrix() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const iconMap: Record<string, React.ElementType> = {
    ShieldCheck,
    Network,
    Code2,
    Layers,
    Workflow,
  };

  const filteredCategories = RESUME_DATA.skillCategories
    .filter((cat) => (activeTab === "all" ? true : cat.title.toLowerCase().includes(activeTab)))
    .map((cat) => {
      const filteredSkills = cat.skills.filter((skill) =>
        skill.toLowerCase().includes(searchQuery.toLowerCase())
      );
      return { ...cat, skills: filteredSkills };
    })
    .filter((cat) => cat.skills.length > 0);

  return (
    <section id="skills" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/[0.06]">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-800/40 text-cyan-400 text-xs font-mono mb-2">
              <Cpu className="w-3.5 h-3.5" />
              <span>TECHNICAL REPERTOIRE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              QA &amp; Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400">Skills Matrix</span>
            </h2>
            <p className="text-slate-400 text-sm mt-1 max-w-xl">
              End-to-end testing methodologies, test automation, API validation &amp; modern web technologies.
            </p>
          </div>

          {/* Search Input */}
          <div className="relative min-w-[240px] sm:min-w-[300px]">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skill (e.g. Playwright, Postman)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-900/60 border border-white/[0.08] text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500/60 transition-colors font-mono"
            />
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mt-6">
          {[
            { id: "all", label: "All Disciplines" },
            { id: "testing", label: "Testing Core" },
            { id: "api", label: "API & Tools" },
            { id: "automation", label: "Automation" },
            { id: "engineering", label: "MERN Development" },
            { id: "practices", label: "QA Practices" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium font-mono transition-all cursor-pointer ${
                activeTab === tab.id
                  ? "bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20"
                  : "bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-white/[0.06]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category, idx) => {
            const IconComponent = iconMap[category.iconName] || ShieldCheck;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-slate-900/30 border border-white/[0.06] p-6 hover:border-cyan-500/30 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-white/[0.08] flex items-center justify-center text-cyan-400 group-hover:border-cyan-500/40 transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white">{category.title}</h3>
                      <p className="text-[11px] text-slate-400 line-clamp-1">{category.subtitle}</p>
                    </div>
                  </div>

                  {/* Skills Pills */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {category.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 rounded-lg bg-slate-950/80 border border-white/[0.06] text-slate-300 text-xs font-mono hover:border-cyan-500/40 hover:text-cyan-300 transition-colors flex items-center gap-1.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0"></span>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3.5 border-t border-white/[0.04] flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span>{category.skills.length} Capabilities</span>
                  <span className="text-emerald-400/90 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    Verified in Production
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {filteredCategories.length === 0 && (
          <div className="text-center py-12 text-slate-400 font-mono text-sm">
            No matching skills found for &ldquo;{searchQuery}&rdquo;.
          </div>
        )}
      </div>
    </section>
  );
}
