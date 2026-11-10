"use client";

import React, { useState, useEffect } from "react";
import {
  ShieldCheck,
  FileText,
  Play,
  Menu,
  X,
  ExternalLink,
  ChevronRight,
  Terminal,
} from "lucide-react";
import { RESUME_DATA } from "@/data/resumeData";

interface HeaderProps {
  onOpenResume: () => void;
  onRunAudit: () => void;
  isRunningAudit: boolean;
}

export default function Header({ onOpenResume, onRunAudit, isRunningAudit }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Overview", href: "#overview" },
    { name: "Why Bilal", href: "#advantage" },
    { name: "Skills", href: "#skills" },
    { name: "Test Lab", href: "#test-lab" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Top Telemetry Micro Bar */}
      <div className="bg-[#060810]/95 border-b border-white/[0.06] px-4 py-1.5 text-[11px] text-slate-400 font-mono sticky top-0 z-50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2.5 overflow-hidden text-ellipsis whitespace-nowrap">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-emerald-400 font-medium">ALL SYSTEMS VERIFIED</span>
            <span className="text-slate-700 hidden sm:inline">&bull;</span>
            <span className="text-slate-400 hidden sm:inline">QA TELEMETRY ACTIVE</span>
            <span className="text-slate-700 hidden md:inline">&bull;</span>
            <span className="text-slate-500 hidden md:inline">Hireboard &bull; Vonza Vetted</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-slate-400 hidden lg:inline text-[11px]">
              Status: <span className="text-cyan-400 font-medium">{RESUME_DATA.status}</span>
            </span>
            <button
              onClick={onRunAudit}
              disabled={isRunningAudit}
              className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20 transition-all cursor-pointer disabled:opacity-50 text-[11px]"
              title="Run interactive portfolio test assertions"
            >
              {isRunningAudit ? (
                <>
                  <span className="inline-block animate-spin">⚙</span>
                  <span>Verifying Site...</span>
                </>
              ) : (
                <>
                  <Play className="w-2.5 h-2.5 fill-current" />
                  <span>Run QA Audit</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`sticky top-[29px] z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#0b0f19]/90 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl py-3"
            : "bg-transparent py-4 border-b border-white/[0.04]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#overview"
            className="flex items-center gap-3 group text-slate-100 tracking-tight"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold text-xs font-mono shadow-sm group-hover:border-cyan-400/70 transition-all">
              MB
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-slate-100 group-hover:text-cyan-300 transition-colors text-sm sm:text-base">
                  Muhammad Bilal
                </span>
                <span className="text-[10px] px-1.5 py-0.2 rounded bg-cyan-950/60 border border-cyan-800/40 text-cyan-400 font-mono">
                  QA &bull; DEV
                </span>
              </div>
              <p className="text-[11px] text-slate-400 hidden sm:block font-sans">
                QA Engineer &bull; Software Quality Assurance
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white hover:bg-white/[0.05] transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              onClick={onOpenResume}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 text-xs font-medium text-slate-200 transition-all cursor-pointer shadow-sm"
            >
              <FileText className="w-3.5 h-3.5 text-cyan-400" />
              <span>Resume</span>
            </button>

            <a
              href="#contact"
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-xs font-medium text-white shadow-md shadow-cyan-950/40 transition-all"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-300" />
              <span>Get in Touch</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenResume}
              className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300"
              title="Resume"
            >
              <FileText className="w-4 h-4 text-cyan-400" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0b0f19]/98 border-b border-slate-800 px-4 pt-3 pb-5 mt-2 space-y-2 backdrop-blur-2xl">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-sm text-slate-200 hover:bg-white/[0.05] hover:text-cyan-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-800/80 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full flex items-center justify-center gap-2 py-2 rounded-lg bg-slate-900 border border-slate-800 text-sm font-medium text-slate-200"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                View Full Resume
              </button>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-2 rounded-lg bg-cyan-600 text-white text-sm font-medium"
              >
                <ShieldCheck className="w-4 h-4" />
                Get in Touch
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
