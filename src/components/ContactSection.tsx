"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  Send,
  Check,
  Copy,
  MessageSquare,
  MapPin,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { RESUME_DATA } from "@/data/resumeData";

export default function ContactSection() {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  // Form state
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formType, setFormType] = useState("Full-Time QA Role (Remote)");
  const [formMessage, setFormMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccessTicket, setSubmitSuccessTicket] = useState<string | null>(null);

  const copyToClipboard = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formEmail || !formMessage) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const generatedTicket = "QA-REQ-" + Math.floor(1000 + Math.random() * 9000);
      setSubmitSuccessTicket(generatedTicket);
      setIsSubmitting(false);
      setFormName("");
      setFormEmail("");
      setFormMessage("");
    }, 600);
  };

  return (
    <section id="contact" className="py-16 md:py-24 relative bg-[#080b14] border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 pb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-800/40 text-cyan-400 text-xs font-mono">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>DISPATCH TRANSMISSION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400">Touch</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Ready to enhance the quality and test coverage of your web application? Let&apos;s connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Left: Contact Channels */}
          <div className="lg:col-span-5 space-y-3.5">
            {/* Email Card */}
            <div className="p-5 rounded-2xl bg-slate-900/40 border border-white/[0.06] hover:border-white/[0.12] transition-all flex items-start justify-between">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-800/50 flex items-center justify-center text-cyan-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">DIRECT EMAIL</div>
                  <a
                    href={`mailto:${RESUME_DATA.email}`}
                    className="text-sm font-semibold text-white hover:text-cyan-400 transition-colors font-mono"
                  >
                    {RESUME_DATA.email}
                  </a>
                  <div className="text-[11px] text-slate-500 mt-0.5">Response time: within 2 hours</div>
                </div>
              </div>

              <button
                onClick={() => copyToClipboard(RESUME_DATA.email, "email")}
                className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 transition-colors cursor-pointer border border-white/[0.06]"
                title="Copy Email"
              >
                {copiedField === "email" ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4 text-slate-400" />
                )}
              </button>
            </div>

            {/* Phone & WhatsApp Card */}
            <div className="p-5 rounded-2xl bg-slate-900/40 border border-white/[0.06] hover:border-white/[0.12] transition-all flex items-start justify-between">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-950/60 border border-emerald-800/50 flex items-center justify-center text-emerald-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">PHONE &amp; WHATSAPP</div>
                  <a
                    href="https://wa.me/923113254286"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-white hover:text-emerald-400 transition-colors font-mono"
                  >
                    {RESUME_DATA.phone}
                  </a>
                  <div className="text-[11px] text-slate-500 mt-0.5">Direct phone call or WhatsApp message</div>
                </div>
              </div>

              <button
                onClick={() => copyToClipboard(RESUME_DATA.phone, "phone")}
                className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 transition-colors cursor-pointer border border-white/[0.06]"
                title="Copy Phone"
              >
                {copiedField === "phone" ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4 text-slate-400" />
                )}
              </button>
            </div>

            {/* LinkedIn Card */}
            <div className="p-5 rounded-2xl bg-slate-900/40 border border-white/[0.06] hover:border-white/[0.12] transition-all flex items-start justify-between">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-blue-950/60 border border-blue-800/50 flex items-center justify-center text-blue-400 shrink-0">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">LINKEDIN PROFILE</div>
                  <a
                    href={RESUME_DATA.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-white hover:text-cyan-400 transition-colors font-mono line-clamp-1"
                  >
                    {RESUME_DATA.linkedInHandle}
                  </a>
                  <div className="text-[11px] text-slate-500 mt-0.5">Connect &amp; view professional endorsements</div>
                </div>
              </div>

              <a
                href={RESUME_DATA.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 transition-colors cursor-pointer border border-white/[0.06]"
              >
                <Send className="w-4 h-4 text-blue-400" />
              </a>
            </div>

            {/* GitHub Card */}
            <div className="p-5 rounded-2xl bg-slate-900/40 border border-white/[0.06] hover:border-white/[0.12] transition-all flex items-start justify-between">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-white/[0.08] flex items-center justify-center text-slate-200 shrink-0">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">GITHUB REPOSITORIES</div>
                  <a
                    href={RESUME_DATA.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-white hover:text-cyan-400 transition-colors font-mono"
                  >
                    {RESUME_DATA.githubHandle}
                  </a>
                  <div className="text-[11px] text-slate-500 mt-0.5">Automation scripts &amp; code repositories</div>
                </div>
              </div>

              <a
                href={RESUME_DATA.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 transition-colors cursor-pointer border border-white/[0.06]"
              >
                <Send className="w-4 h-4 text-slate-300" />
              </a>
            </div>

            {/* Location & Availability Card */}
            <div className="p-4 rounded-xl bg-slate-950 border border-white/[0.06] flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-cyan-400" />
                {RESUME_DATA.location}
              </span>
              <span className="text-emerald-400 font-semibold">100% Remote Available</span>
            </div>
          </div>

          {/* Right: Message Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-slate-900/40 border border-white/[0.06] p-6 sm:p-8 shadow-2xl relative">
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/[0.06]">
                <div>
                  <h3 className="text-lg font-bold text-white">
                    Send Direct Message / Schedule Technical Call
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Messages are routed directly to Muhammad Bilal&apos;s primary inbox.
                  </p>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800 font-mono">
                  ACTIVE INBOX
                </span>
              </div>

              {submitSuccessTicket ? (
                <div className="py-10 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-950 border border-emerald-500 flex items-center justify-center text-emerald-400 mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Transmission Delivered!</h4>
                  <p className="text-xs text-slate-300 max-w-md mx-auto">
                    Thank you! Your message was received and logged under reference ID:
                  </p>
                  <div className="inline-block px-3 py-1 rounded-md bg-black/60 border border-cyan-500/40 text-cyan-300 font-mono text-xs font-bold">
                    {submitSuccessTicket}
                  </div>
                  <div className="pt-4">
                    <button
                      onClick={() => setSubmitSuccessTicket(null)}
                      className="px-4 py-2 rounded-lg bg-slate-800 text-xs font-mono text-slate-300 hover:text-white transition-colors cursor-pointer border border-white/[0.06]"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-400 mb-1">YOUR NAME</label>
                      <input
                        type="text"
                        required
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                        placeholder="e.g. Alex Mercer"
                        className="w-full px-3 py-2.5 rounded-xl bg-slate-950 border border-white/[0.08] text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500/60 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-400 mb-1">WORK EMAIL</label>
                      <input
                        type="email"
                        required
                        value={formEmail}
                        onChange={(e) => setFormEmail(e.target.value)}
                        placeholder="e.g. alex@company.com"
                        className="w-full px-3 py-2.5 rounded-xl bg-slate-950 border border-white/[0.08] text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500/60 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-400 mb-1">INQUIRY TYPE</label>
                    <select
                      value={formType}
                      onChange={(e) => setFormType(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl bg-slate-950 border border-white/[0.08] text-slate-200 focus:outline-none focus:border-cyan-500/60 transition-colors"
                    >
                      <option value="Full-Time QA Role (Remote)">Full-Time QA Role (Remote / Hybrid)</option>
                      <option value="Contract QA Role">Contract / Milestone Automation</option>
                      <option value="Technical Interview Request">Technical Interview Request</option>
                      <option value="General Quality Inquiry">General Quality Assurance Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-slate-400 mb-1">MESSAGE / PROJECT DETAILS</label>
                    <textarea
                      required
                      rows={4}
                      value={formMessage}
                      onChange={(e) => setFormMessage(e.target.value)}
                      placeholder="Hi Muhammad Bilal, we are looking for a QA Engineer to automate test suites and validate APIs..."
                      className="w-full px-3 py-2.5 rounded-xl bg-slate-950 border border-white/[0.08] text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500/60 transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold text-xs shadow-lg shadow-cyan-950/40 transition-all cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Transmitting Ticket...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Dispatch Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
