"use client";

import React, { useRef } from "react";
import {
  X,
  Printer,
  Download,
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { RESUME_DATA } from "@/data/resumeData";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const resumeRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Top Control Bar (Non-printable) */}
        <div className="p-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between print:hidden">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block"></span>
            <span className="text-xs font-mono text-slate-300 font-semibold">
              MUHAMMAD_BILAL_RESUME.PDF
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-mono font-medium transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document View */}
        <div
          ref={resumeRef}
          className="p-6 sm:p-10 overflow-y-auto bg-slate-950 text-slate-100 font-sans print:bg-white print:text-black print:p-0 print:m-0"
        >
          {/* Header */}
          <div className="text-center pb-6 border-b border-slate-800 print:border-black">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight uppercase print:text-black">
              MUHAMMAD BILAL
            </h1>
            <div className="text-xs sm:text-sm font-semibold text-cyan-400 print:text-gray-800 tracking-wider mt-1">
              QA ENGINEER | SOFTWARE QUALITY ASSURANCE
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-slate-400 print:text-gray-600 mt-2 font-mono">
              <span>{RESUME_DATA.location}</span>
              <span>•</span>
              <a href={`tel:${RESUME_DATA.phone}`} className="hover:underline">{RESUME_DATA.phone}</a>
              <span>•</span>
              <a href={`mailto:${RESUME_DATA.email}`} className="hover:underline">{RESUME_DATA.email}</a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-slate-400 print:text-gray-600 mt-1 font-mono">
              <a href={RESUME_DATA.linkedIn} target="_blank" rel="noreferrer" className="hover:underline text-cyan-400 print:text-black">
                LinkedIn: {RESUME_DATA.linkedInHandle}
              </a>
              <span>•</span>
              <a href={RESUME_DATA.github} target="_blank" rel="noreferrer" className="hover:underline text-cyan-400 print:text-black">
                GitHub: {RESUME_DATA.githubHandle}
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="py-4 border-b border-slate-800 print:border-black">
            <h2 className="text-xs font-bold font-mono tracking-wider text-cyan-400 print:text-black uppercase mb-1.5">
              PROFESSIONAL SUMMARY
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 print:text-gray-800 leading-relaxed">
              {RESUME_DATA.summary}
            </p>
          </div>

          {/* Technical Skills */}
          <div className="py-4 border-b border-slate-800 print:border-black">
            <h2 className="text-xs font-bold font-mono tracking-wider text-cyan-400 print:text-black uppercase mb-2">
              TECHNICAL SKILLS
            </h2>
            <div className="space-y-1.5 text-xs sm:text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-1">
                <span className="sm:col-span-3 font-semibold text-slate-200 print:text-black">Testing</span>
                <span className="sm:col-span-9 text-slate-300 print:text-gray-800">
                  Manual, Functional, Regression, Smoke, Sanity, Exploratory, E2E, Positive/Negative/Edge-Case Testing
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-1">
                <span className="sm:col-span-3 font-semibold text-slate-200 print:text-black">API &amp; Tools</span>
                <span className="sm:col-span-9 text-slate-300 print:text-gray-800">
                  Postman, REST API Testing, HTTP Status Codes, Authentication &amp; Validation, Jira, Git, GitHub, Browser DevTools
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-1">
                <span className="sm:col-span-3 font-semibold text-slate-200 print:text-black">Automation</span>
                <span className="sm:col-span-9 text-slate-300 print:text-gray-800">
                  Playwright
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-1">
                <span className="sm:col-span-3 font-semibold text-slate-200 print:text-black">Development</span>
                <span className="sm:col-span-9 text-slate-300 print:text-gray-800">
                  HTML, CSS, Tailwind CSS, JavaScript, React, Next.js, Node.js, MERN Stack
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-1">
                <span className="sm:col-span-3 font-semibold text-slate-200 print:text-black">QA Practices</span>
                <span className="sm:col-span-9 text-slate-300 print:text-gray-800">
                  Test Scenarios, Test Case Execution, Bug Reporting, Defect Retesting, Release Regression, Agile/Scrum workflows
                </span>
              </div>
            </div>
          </div>

          {/* Professional Experience */}
          <div className="py-4 border-b border-slate-800 print:border-black">
            <h2 className="text-xs font-bold font-mono tracking-wider text-cyan-400 print:text-black uppercase mb-3">
              PROFESSIONAL EXPERIENCE
            </h2>

            {/* Experience 1: Hireboard */}
            <div className="mb-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm font-semibold">
                <span className="text-white print:text-black font-bold">
                  QA Engineer | Hireboard &ndash; Fireboard Intelligence (Remote)
                </span>
                <span className="text-slate-400 print:text-gray-600 font-mono text-xs">
                  Nov 2025 &ndash; Nov 2026
                </span>
              </div>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-xs text-slate-300 print:text-gray-800">
                <li>Performed functional, smoke, sanity, regression, and end-to-end testing across Admin Dashboard, Recruiter Portal, and Talent Portal.</li>
                <li>Executed production regression and staging validation for critical workflows, including Full-Time, Part-Time, and Hourly contract scenarios.</li>
                <li>Tested staging Pay-In and Pay-Out workflows using positive, negative, and edge-case scenarios without initiating real financial transactions.</li>
                <li>Validated REST APIs, authentication, response codes, and input validations using Postman.</li>
                <li>Tested Activity Tracker, Work Agent, HR components, contracts, meetings, assessments, and other application modules.</li>
                <li>Logged and tracked defects in Jira with clear reproduction steps; retested fixes and performed regression verification.</li>
                <li>Created Playwright test cases for Part-Time and Hourly contract business rules and automated the recruiter signup flow.</li>
                <li>Collaborated remotely with developers and QA team members to investigate issues and support release quality.</li>
                <li>Completed an ISTQB software testing course (Udemy, August 2026), sponsored by the company.</li>
              </ul>
            </div>

            {/* Experience 2: Vonza */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm font-semibold">
                <span className="text-white print:text-black font-bold">
                  MERN Stack Developer | Vonza (Remote)
                </span>
                <span className="text-slate-400 print:text-gray-600 font-mono text-xs">
                  Sep 2024 &ndash; Oct 2025
                </span>
              </div>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-xs text-slate-300 print:text-gray-800">
                <li>Worked with the MERN stack and modern web technologies, including JavaScript, React, and Node.js.</li>
                <li>Built and debugged front-end and back-end features, which gives me a strong understanding of application behavior when testing.</li>
                <li>Collaborated remotely with team members in a distributed work environment.</li>
              </ul>
            </div>
          </div>

          {/* Education */}
          <div className="py-4 border-b border-slate-800 print:border-black">
            <h2 className="text-xs font-bold font-mono tracking-wider text-cyan-400 print:text-black uppercase mb-2">
              EDUCATION
            </h2>
            <div className="space-y-1.5 text-xs text-slate-300 print:text-gray-800">
              <div>
                <span className="font-semibold text-white print:text-black">
                  Bachelor of Science in Computer Science (BSCS)
                </span>{" "}
                &mdash; Sindh Madressatul Islam University (SMIU), Undergraduate &ndash; In Progress
              </div>
              <div>
                <span className="font-semibold text-white print:text-black">
                  Intermediate
                </span>{" "}
                &mdash; Government Foreman College
              </div>
            </div>
          </div>

          {/* Certifications & Training */}
          <div className="py-4 border-b border-slate-800 print:border-black">
            <h2 className="text-xs font-bold font-mono tracking-wider text-cyan-400 print:text-black uppercase mb-2">
              CERTIFICATIONS &amp; TRAINING
            </h2>
            <div className="space-y-1 text-xs text-slate-300 print:text-gray-800">
              <div>
                • <strong className="text-white print:text-black">ISTQB Software Testing Course</strong> &mdash; Udemy (August 2026)
              </div>
              <div>
                • <strong className="text-white print:text-black">Software Quality Assurance Course</strong> &mdash; Burraq Tech (2025)
              </div>
              <div>
                • <strong className="text-white print:text-black">Web Development Course</strong> &mdash; Saylani Mass IT Training (SMIT) (2024)
              </div>
            </div>
          </div>

          {/* References */}
          <div className="pt-4">
            <h2 className="text-xs font-bold font-mono tracking-wider text-cyan-400 print:text-black uppercase mb-1">
              REFERENCES
            </h2>
            <p className="text-xs text-slate-300 print:text-gray-800">
              Available upon request.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
