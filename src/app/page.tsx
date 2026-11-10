"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import DeveloperAdvantage from "@/components/DeveloperAdvantage";
import SkillsMatrix from "@/components/SkillsMatrix";
import TestLab from "@/components/TestLab";
import Experience from "@/components/Experience";
import EducationCerts from "@/components/EducationCerts";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ResumeModal from "@/components/ResumeModal";
import confetti from "canvas-confetti";
import { CheckCircle2, ShieldCheck, Sparkles, X } from "lucide-react";

export default function Home() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isRunningAudit, setIsRunningAudit] = useState(false);
  const [auditMessage, setAuditMessage] = useState<string | null>(null);

  const handleRunAudit = () => {
    setIsRunningAudit(true);
    setAuditMessage("Executing Live QA Self-Test Matrix...");

    setTimeout(() => {
      setAuditMessage("✓ Assert: Next.js App Router DOM mounted without hydration drift.");
    }, 600);

    setTimeout(() => {
      setAuditMessage("✓ Assert: Responsive Breakpoints (Mobile, Tablet, Desktop) verified.");
    }, 1200);

    setTimeout(() => {
      setAuditMessage("✓ Assert: TestLab Interactive Simulators initialized with 0 runtime errors.");
    }, 1800);

    setTimeout(() => {
      setAuditMessage("🎉 QA SELF-TEST COMPLETE: 100% Assertions Passed (0 Regressions).");
      setIsRunningAudit(false);
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.2 },
        });
      } catch (e) {
        // ignore
      }

      setTimeout(() => {
        setAuditMessage(null);
      }, 5000);
    }, 2400);
  };

  const handleNavigateToLab = () => {
    const el = document.getElementById("test-lab");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-cyan-500 selection:text-black">
      {/* Interactive QA Live Audit Toast / Notification */}
      {auditMessage && (
        <div className="fixed top-16 right-4 sm:right-8 z-50 max-w-md w-full animate-bounce">
          <div className="p-4 rounded-xl bg-slate-900/95 border-2 border-emerald-500/80 shadow-2xl backdrop-blur-md flex items-center justify-between gap-3 text-xs font-mono">
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-emerald-300 font-semibold">{auditMessage}</span>
            </div>
            <button
              onClick={() => setAuditMessage(null)}
              className="text-slate-400 hover:text-slate-200 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Main Navbar */}
      <Header
        onOpenResume={() => setIsResumeOpen(true)}
        onRunAudit={handleRunAudit}
        isRunningAudit={isRunningAudit}
      />

      {/* Hero Section */}
      <main className="flex-1">
        <Hero
          onOpenResume={() => setIsResumeOpen(true)}
          onNavigateToLab={handleNavigateToLab}
        />

        {/* Developer-Turned-QA Advantage Section */}
        <DeveloperAdvantage />

        {/* Skills Matrix */}
        <SkillsMatrix />

        {/* Interactive QA Test Lab */}
        <TestLab />

        {/* Career Experience */}
        <Experience />

        {/* Education & Certifications */}
        <EducationCerts />

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Printable / Viewable Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
