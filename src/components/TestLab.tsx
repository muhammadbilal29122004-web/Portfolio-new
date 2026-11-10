"use client";

import React, { useState } from "react";
import {
  Terminal,
  Play,
  RotateCcw,
  CheckCircle2,
  Network,
  Bug,
  LayoutGrid,
  Check,
  Send,
  Code2,
  Clock,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import confetti from "canvas-confetti";

export default function TestLab() {
  const [activeTab, setActiveTab] = useState<"playwright" | "postman" | "jira" | "portals">("playwright");

  // --- PLAYWRIGHT RUNNER STATE ---
  const [selectedSuite, setSelectedSuite] = useState<"recruiter" | "contract" | "payment">("recruiter");
  const [isRunningPlaywright, setIsRunningPlaywright] = useState(false);
  const [playwrightLogs, setPlaywrightLogs] = useState<string[]>([]);
  const [testPassed, setTestPassed] = useState<boolean | null>(null);

  const suiteDetails = {
    recruiter: {
      fileName: "e2e/recruiter-signup-flow.spec.ts",
      description: "Automated recruiter onboarding flow, company registration, and dashboard access validation",
      steps: [
        "[00:00.12] 🚀 Starting Playwright Chromium runner in headless mode...",
        "[00:00.64] 🌐 Navigating to https://staging.hireboard.app/portal/recruiter/signup",
        "[00:01.10] 🧪 Test Case 1: Negative Validation - Submit empty form",
        "[00:01.35] ✓ Assert: Error messages visible for required fields (Email, Company, Password).",
        "[00:01.80] 🧪 Test Case 2: Positive Flow - Enter valid recruiter credentials",
        "[00:02.30] ✍️ Filling companyName='Acme Tech Inc', workEmail='talent@acmetech.io'",
        "[00:02.85] 🔑 Setting strong password & checking GDPR compliance toggle",
        "[00:03.40] 📡 Intercepting POST /api/v1/auth/register-recruiter -> HTTP 201 Created",
        "[00:03.95] 🔄 Awaiting URL redirect to /recruiter/dashboard/overview",
        "[00:04.20] ✓ Assert: Dashboard navigation header rendered with Role='RECRUITER'",
        "[00:04.45] 📸 Screenshot artifact saved: artifacts/recruiter-signup-success.png",
        "[00:04.50] ✨ PASSED: Recruiter signup flow automated test completed with 0 errors.",
      ],
    },
    contract: {
      fileName: "e2e/contract-business-rules.spec.ts",
      description: "Business rule assertions for Full-Time, Part-Time, and Hourly contract tiers",
      steps: [
        "[00:00.15] 🚀 Starting Playwright WebKit & Chromium test matrix...",
        "[00:00.70] 🌐 Initializing contract creation wizard for Hourly & Part-Time workers",
        "[00:01.20] 🧪 Test Case 1: Part-Time weekly cap validation (Max 25 hrs/week boundary)",
        "[00:01.65] ✓ Assert: System rejects 30 hrs/week entry with validation alert.",
        "[00:02.10] 🧪 Test Case 2: Hourly rate calculation with overtime modifier",
        "[00:02.75] 🧮 Base Rate: $45.00/hr, Overtime multiplier: 1.5x -> Expected $67.50/hr",
        "[00:03.20] ✓ Assert: Timesheet preview displays exact mathematical calculation.",
        "[00:03.70] 🧪 Test Case 3: Contract dispatch to Talent Portal with digital signature step",
        "[00:04.10] ✓ Assert: Contract state transitions from 'DRAFT' -> 'PENDING_TALENT_SIGNATURE'.",
        "[00:04.40] ✨ PASSED: All contract calculation and state machine business rules verified.",
      ],
    },
    payment: {
      fileName: "e2e/staging-payin-payout-workflow.spec.ts",
      description: "Safe staging validation of Pay-In and Pay-Out financial workflows without live bank transactions",
      steps: [
        "[00:00.10] 🚀 Starting Playwright E2E runner for Staging Payment Gateway...",
        "[00:00.55] 🛡️ Verifying Staging Mock Sandbox Flag = TRUE (Zero real money risk)",
        "[00:01.05] 🧪 Test Case 1: Pay-In Escrow deposit via Mock Stripe / Payment Provider",
        "[00:01.60] 💳 Injecting mock test token with currency: 'USD', amount: 2500.00",
        "[00:02.15] ✓ Assert: Escrow ledger balance updated to +$2,500.00, Status='FUNDS_SECURED'.",
        "[00:02.70] 🧪 Test Case 2: Pay-Out Milestone disbursement to Talent Wallet",
        "[00:03.30] 💸 Triggering release of $1,800.00 upon milestone approval",
        "[00:03.85] 🧪 Test Case 3: Edge Case - Negative balance release attempt",
        "[00:04.20] ✓ Assert: System blocks overdraft and logs security audit trail.",
        "[00:04.60] ✨ PASSED: Financial staging flows validated with positive, negative & edge-cases.",
      ],
    },
  };

  const handleRunPlaywright = () => {
    setIsRunningPlaywright(true);
    setTestPassed(null);
    setPlaywrightLogs([]);

    const steps = suiteDetails[selectedSuite].steps;
    steps.forEach((step, index) => {
      setTimeout(() => {
        setPlaywrightLogs((prev) => [...prev, step]);
        if (index === steps.length - 1) {
          setIsRunningPlaywright(false);
          setTestPassed(true);
          try {
            confetti({
              particleCount: 50,
              spread: 60,
              origin: { y: 0.65 },
            });
          } catch (e) {
            // fallback
          }
        }
      }, (index + 1) * 320);
    });
  };

  // --- POSTMAN SIMULATOR STATE ---
  const [selectedEndpoint, setSelectedEndpoint] = useState<"auth" | "contract" | "payout">("auth");
  const [scenarioType, setScenarioType] = useState<"positive" | "negative" | "edge">("positive");
  const [isSendingRequest, setIsSendingRequest] = useState(false);
  const [apiResponse, setApiResponse] = useState<any>(null);
  const [copiedApiJson, setCopiedApiJson] = useState(false);

  const handleCopyApiResponse = () => {
    if (apiResponse) {
      navigator.clipboard.writeText(JSON.stringify(apiResponse.resBody, null, 2));
      setCopiedApiJson(true);
      setTimeout(() => setCopiedApiJson(false), 2000);
    }
  };

  const apiMockData = {
    auth: {
      url: "POST https://api.hireboard.app/v1/auth/login",
      positive: {
        status: 200,
        statusText: "OK",
        time: "42 ms",
        reqBody: { email: "recruiter@hireboard.io", password: "••••••••••••" },
        resBody: {
          success: true,
          token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
          user: { id: "usr_9918", email: "recruiter@hireboard.io", role: "RECRUITER", portalAccess: ["RECRUITER", "TALENT_VIEW"] },
        },
        assertions: [
          "pm.test('Status code is 200 OK', () => pm.response.to.have.status(200))",
          "pm.test('Token is JWT formatted', () => pm.expect(pm.response.json().token).to.be.a('string'))",
          "pm.test('Role matches RECRUITER', () => pm.expect(pm.response.json().user.role).to.eql('RECRUITER'))",
        ],
      },
      negative: {
        status: 401,
        statusText: "Unauthorized",
        time: "36 ms",
        reqBody: { email: "recruiter@hireboard.io", password: "wrong_password" },
        resBody: {
          success: false,
          error: "INVALID_CREDENTIALS",
          message: "The password provided does not match our records.",
        },
        assertions: [
          "pm.test('Status code is 401 Unauthorized', () => pm.response.to.have.status(401))",
          "pm.test('Token is not emitted', () => pm.expect(pm.response.json().token).to.be.undefined)",
        ],
      },
      edge: {
        status: 422,
        statusText: "Unprocessable Entity",
        time: "28 ms",
        reqBody: { email: "not-an-email", password: "" },
        resBody: {
          success: false,
          error: "VALIDATION_FAILED",
          details: [
            { field: "email", message: "Must be a valid email format" },
            { field: "password", message: "Password cannot be empty" },
          ],
        },
        assertions: [
          "pm.test('Status code is 422 Unprocessable', () => pm.response.to.have.status(422))",
          "pm.test('Returns field validation errors', () => pm.expect(pm.response.json().details).to.have.lengthOf(2))",
        ],
      },
    },
    contract: {
      url: "POST https://api.hireboard.app/v1/contracts/create",
      positive: {
        status: 201,
        statusText: "Created",
        time: "64 ms",
        reqBody: { talentId: "tal_4401", contractType: "HOURLY", hourlyRate: 45.0, weeklyCapHours: 40, currency: "USD" },
        resBody: {
          success: true,
          contractId: "cnt_88219",
          status: "DRAFT_PENDING_APPROVAL",
          details: { rate: 45.0, type: "HOURLY", weeklyCap: 40 },
        },
        assertions: [
          "pm.test('Status code is 201 Created', () => pm.response.to.have.status(201))",
          "pm.test('Contract ID is generated', () => pm.expect(pm.response.json().contractId).to.match(/^cnt_/))",
        ],
      },
      negative: {
        status: 400,
        statusText: "Bad Request",
        time: "31 ms",
        reqBody: { talentId: "tal_invalid", contractType: "HOURLY", hourlyRate: -15.0 },
        resBody: {
          success: false,
          error: "INVALID_HOURLY_RATE",
          message: "hourlyRate must be a positive number greater than 0.",
        },
        assertions: [
          "pm.test('Status code is 400 Bad Request', () => pm.response.to.have.status(400))",
          "pm.test('Catches negative rate boundary', () => pm.expect(pm.response.json().error).to.eql('INVALID_HOURLY_RATE'))",
        ],
      },
      edge: {
        status: 409,
        statusText: "Conflict",
        time: "55 ms",
        reqBody: { talentId: "tal_4401", contractType: "FULL_TIME", rate: 5000 },
        resBody: {
          success: false,
          error: "ACTIVE_EXCLUSIVE_CONTRACT_EXISTS",
          message: "Talent already has an active Full-Time contract with another organization.",
        },
        assertions: [
          "pm.test('Status code is 409 Conflict', () => pm.response.to.have.status(409))",
          "pm.test('Exclusivity business rule enforced', () => pm.expect(pm.response.json().error).to.exist)",
        ],
      },
    },
    payout: {
      url: "POST https://api.hireboard.app/v1/billing/staging-payout",
      positive: {
        status: 200,
        statusText: "OK",
        time: "78 ms",
        reqBody: { walletId: "wal_7721", amount: 1250.0, milestoneId: "mls_991" },
        resBody: {
          success: true,
          transactionId: "stg_tx_8819273",
          disbursedAmount: 1250.0,
          remainingEscrow: 0.0,
          isStagingMock: true,
        },
        assertions: [
          "pm.test('Status code is 200 OK', () => pm.response.to.have.status(200))",
          "pm.test('Zero live transaction safeguard flag true', () => pm.expect(pm.response.json().isStagingMock).to.be.true)",
        ],
      },
      negative: {
        status: 402,
        statusText: "Payment Required",
        time: "48 ms",
        reqBody: { walletId: "wal_7721", amount: 99999.0, milestoneId: "mls_991" },
        resBody: {
          success: false,
          error: "INSUFFICIENT_ESCROW_FUNDS",
          message: "Requested payout ($99,999.00) exceeds current escrow balance ($1,250.00).",
        },
        assertions: [
          "pm.test('Status code is 402 Payment Required', () => pm.response.to.have.status(402))",
          "pm.test('Escrow deficit trapped', () => pm.expect(pm.response.json().error).to.eql('INSUFFICIENT_ESCROW_FUNDS'))",
        ],
      },
      edge: {
        status: 400,
        statusText: "Bad Request",
        time: "32 ms",
        reqBody: { walletId: "wal_7721", amount: 0.00001, milestoneId: "mls_991" },
        resBody: {
          success: false,
          error: "SUB_CENT_PRECISION_NOT_SUPPORTED",
          message: "Amounts below $0.01 cannot be processed.",
        },
        assertions: [
          "pm.test('Status code is 400 Bad Request', () => pm.response.to.have.status(400))",
          "pm.test('Sub-cent decimal overflow rejected', () => pm.expect(pm.response.json().error).to.exist)",
        ],
      },
    },
  };

  const handleSendApiRequest = () => {
    setIsSendingRequest(true);
    setApiResponse(null);
    setTimeout(() => {
      const data = apiMockData[selectedEndpoint][scenarioType];
      setApiResponse(data);
      setIsSendingRequest(false);
    }, 380);
  };

  // --- JIRA BUG TRIAGE STATE ---
  const [selectedJira, setSelectedJira] = useState<number>(0);
  const jiraBugs = [
    {
      id: "HB-1402",
      title: "Hourly Contract rate calculation discrepancy on weekly timesheet preview",
      severity: "CRITICAL",
      portal: "Recruiter & Talent Portals",
      module: "Contracts / Billing Engine",
      status: "VERIFIED & CLOSED",
      stepsToReproduce: [
        "1. Log in as Recruiter and open active Hourly contract (cnt_88219).",
        "2. Add 5 hours of weekend overtime work with 1.5x multiplier.",
        "3. Navigate to Talent timesheet review screen.",
        "4. Observe displayed total invoice amount.",
      ],
      expected: "Total should compute base (40 * $45 = $1800) + overtime (5 * $67.50 = $337.50) = $2,137.50.",
      actual: "Overtime rate was multiplying against standard rate without adding base, causing $337.50 total instead of $2,137.50.",
      retestVerification: "Verified fix in staging build v2.4.1. Timesheet ledger renders exact mathematical calculation across currency formats. Regression verified in Playwright.",
    },
    {
      id: "HB-1289",
      title: "Staging Pay-Out negative edge-case: floating point rounding error during escrow deduction",
      severity: "HIGH",
      portal: "Admin & Talent Portals",
      module: "Staging Financial Workflows",
      status: "VERIFIED & CLOSED",
      stepsToReproduce: [
        "1. In staging, create two milestone disbursements of $19.99 and $10.01.",
        "2. Execute partial Pay-Out API call.",
        "3. Inspect remaining wallet balance in Admin ledger.",
      ],
      expected: "Remaining balance should equal exactly $0.00 with integer cent arithmetic.",
      actual: "JavaScript floating-point arithmetic produced $0.00000000000000355, triggering database validation rejection.",
      retestVerification: "Backend updated to use BigInt/integer cents. Retested with Postman edge boundary scripts; zero balance discrepancy.",
    },
    {
      id: "HB-1154",
      title: "Recruiter signup flow silently hung on slow network without displaying timeout message",
      severity: "MEDIUM",
      portal: "Recruiter Portal",
      module: "Authentication / Onboarding",
      status: "VERIFIED & CLOSED",
      stepsToReproduce: [
        "1. Open recruiter registration form in Chrome DevTools.",
        "2. Simulate 'Slow 3G' network throttling.",
        "3. Fill all valid fields and click 'Complete Registration'.",
      ],
      expected: "Submit button enters disabled loading state; shows retry banner if request exceeds 15 seconds.",
      actual: "Submit button stayed clickable, allowing duplicate submission attempts and throwing 500 error on duplicate email.",
      retestVerification: "Button debounced; timeout handler added with friendly user alert. Automated in Playwright test suite.",
    },
  ];

  return (
    <section id="test-lab" className="py-16 md:py-24 relative bg-[#070a12] border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 pb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-800/40 text-emerald-400 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>LIVE INTERACTIVE SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            The Interactive <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400">QA Test Lab</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Test real-world scenarios: execute Playwright automated tests, inspect Postman REST APIs, triage Jira defects, and review portal coverage.
          </p>
        </div>

        {/* Tab Controls Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
          {[
            { id: "playwright", label: "Playwright Automation", icon: Code2 },
            { id: "postman", label: "Postman REST API", icon: Network },
            { id: "jira", label: "Jira Defect Triage", icon: Bug },
            { id: "portals", label: "Multi-Portal Matrix", icon: LayoutGrid },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer font-mono ${
                  isActive
                    ? "bg-slate-800 text-white border border-cyan-500/50 shadow-lg shadow-black/40"
                    : "bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-white/[0.06]"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-cyan-400" : "text-slate-400"}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* ========================================================= */}
        {/* TAB 1: PLAYWRIGHT AUTOMATION RUNNER */}
        {/* ========================================================= */}
        {activeTab === "playwright" && (
          <div className="mt-8 rounded-2xl bg-[#090d16] border border-white/[0.08] p-5 sm:p-7 shadow-2xl">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-5 border-b border-white/[0.06]">
              <div>
                <span className="text-xs font-mono text-cyan-400 font-semibold">PLAYWRIGHT E2E SUITE SIMULATOR</span>
                <h3 className="text-lg font-bold text-white font-sans mt-0.5">
                  Execute Real Automated Test Cases
                </h3>
                <p className="text-xs text-slate-400">
                  Select a test script authored by Muhammad Bilal and trigger headless browser execution.
                </p>
              </div>

              {/* Suite selector pills */}
              <div className="flex flex-wrap items-center gap-2">
                {[
                  { id: "recruiter", label: "Recruiter Signup" },
                  { id: "contract", label: "Contract Business Rules" },
                  { id: "payment", label: "Staging Pay-In / Pay-Out" },
                ].map((suite) => (
                  <button
                    key={suite.id}
                    onClick={() => {
                      setSelectedSuite(suite.id as any);
                      setPlaywrightLogs([]);
                      setTestPassed(null);
                    }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                      selectedSuite === suite.id
                        ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 font-semibold"
                        : "bg-slate-900/80 text-slate-400 border border-white/[0.06]"
                    }`}
                  >
                    {suite.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Test File Info */}
            <div className="my-4 p-3.5 rounded-xl bg-slate-950/80 border border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono">
              <div>
                <span className="text-slate-500">Spec: </span>
                <span className="text-cyan-300 font-semibold">{suiteDetails[selectedSuite].fileName}</span>
                <p className="text-slate-400 text-[11px] font-sans mt-0.5">{suiteDetails[selectedSuite].description}</p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleRunPlaywright}
                  disabled={isRunningPlaywright}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md shadow-emerald-950 transition-all cursor-pointer disabled:opacity-50"
                >
                  {isRunningPlaywright ? (
                    <>
                      <span className="animate-spin inline-block">⚙</span>
                      <span>Running Spec...</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>Run Automation Test</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => {
                    setPlaywrightLogs([]);
                    setTestPassed(null);
                  }}
                  disabled={isRunningPlaywright}
                  className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 border border-white/[0.06] text-xs transition-colors cursor-pointer"
                  title="Clear Console"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Test Progress Bar */}
            {(isRunningPlaywright || playwrightLogs.length > 0) && (
              <div className="mb-4 space-y-1 font-mono text-[11px]">
                <div className="flex items-center justify-between text-slate-400">
                  <span>Execution Progress</span>
                  <span className="text-cyan-400 font-semibold">
                    {Math.min(100, Math.round((playwrightLogs.length / suiteDetails[selectedSuite].steps.length) * 100))}%
                  </span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-slate-950 overflow-hidden border border-white/[0.06]">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-500 to-emerald-400 transition-all duration-300"
                    style={{
                      width: `${Math.min(100, Math.round((playwrightLogs.length / suiteDetails[selectedSuite].steps.length) * 100))}%`,
                    }}
                  />
                </div>
              </div>
            )}

            {/* Terminal Window */}
            <div className="rounded-xl bg-black/90 border border-white/[0.06] p-4 font-mono text-xs text-slate-300 min-h-[220px] max-h-[300px] overflow-y-auto space-y-1.5">
              <div className="text-slate-500 flex items-center justify-between pb-2 border-b border-white/[0.06]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-slate-600 inline-block"></span>
                  <span>Playwright Headless Engine v1.42.1</span>
                </div>
                {testPassed && (
                  <span className="text-emerald-400 font-bold flex items-center gap-1 text-[11px]">
                    <CheckCircle2 className="w-3.5 h-3.5" /> 100% ASSERTIONS PASSED
                  </span>
                )}
              </div>

              {playwrightLogs.length === 0 && !isRunningPlaywright && (
                <div className="py-8 text-center text-slate-500 italic">
                  Click &ldquo;Run Automation Test&rdquo; to simulate live Playwright execution.
                </div>
              )}

              {playwrightLogs.map((log, lIdx) => {
                const isPass = log.includes("✓") || log.includes("PASSED");
                const isAction = log.includes("🚀") || log.includes("🌐") || log.includes("✍️") || log.includes("🔑");
                return (
                  <div
                    key={lIdx}
                    className={`${
                      isPass ? "text-emerald-400 font-medium" : isAction ? "text-cyan-300" : "text-slate-300"
                    }`}
                  >
                    {log}
                  </div>
                );
              })}

              {isRunningPlaywright && (
                <div className="flex items-center gap-2 text-cyan-400 animate-pulse pt-1">
                  <span>▶</span>
                  <span>Executing test steps...</span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 2: POSTMAN REST API INSPECTOR */}
        {/* ========================================================= */}
        {activeTab === "postman" && (
          <div className="mt-8 rounded-2xl bg-[#090d16] border border-white/[0.08] p-5 sm:p-7 shadow-2xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-white/[0.06]">
              <div>
                <span className="text-xs font-mono text-cyan-400 font-semibold">POSTMAN REST API TEST SUITE</span>
                <h3 className="text-lg font-bold text-white font-sans mt-0.5">
                  Validate HTTP Endpoints, Tokens &amp; Schemas
                </h3>
                <p className="text-xs text-slate-400">
                  Simulate API validation as Bilal did at Hireboard: testing positive, negative, and boundary cases.
                </p>
              </div>

              {/* Endpoint selection */}
              <div className="flex flex-wrap items-center gap-2">
                {[
                  { id: "auth", label: "Auth Login API" },
                  { id: "contract", label: "Contract Creation API" },
                  { id: "payout", label: "Staging Pay-Out API" },
                ].map((ep) => (
                  <button
                    key={ep.id}
                    onClick={() => {
                      setSelectedEndpoint(ep.id as any);
                      setApiResponse(null);
                    }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                      selectedEndpoint === ep.id
                        ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 font-semibold"
                        : "bg-slate-900/80 text-slate-400 border border-white/[0.06]"
                    }`}
                  >
                    {ep.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Request URL Bar & Scenario Switcher */}
            <div className="mt-5 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 rounded-xl bg-slate-950 border border-white/[0.06]">
                <div className="flex items-center gap-2 font-mono text-xs overflow-x-auto">
                  <span className="px-2 py-0.5 rounded bg-indigo-950 text-indigo-400 border border-indigo-800/50 font-bold">
                    POST
                  </span>
                  <span className="text-slate-200">{apiMockData[selectedEndpoint].url}</span>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={handleSendApiRequest}
                    disabled={isSendingRequest}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs shadow-md shadow-cyan-950 transition-all cursor-pointer disabled:opacity-50"
                  >
                    {isSendingRequest ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Send Request</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Scenario Toggle Pills */}
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                <span className="text-slate-400">Test Scenario:</span>
                <button
                  onClick={() => {
                    setScenarioType("positive");
                    setApiResponse(null);
                  }}
                  className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                    scenarioType === "positive"
                      ? "bg-emerald-950 text-emerald-400 border border-emerald-700"
                      : "bg-slate-900 text-slate-400 border border-white/[0.06]"
                  }`}
                >
                  ✓ Positive (Happy Path)
                </button>
                <button
                  onClick={() => {
                    setScenarioType("negative");
                    setApiResponse(null);
                  }}
                  className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                    scenarioType === "negative"
                      ? "bg-rose-950 text-rose-400 border border-rose-700"
                      : "bg-slate-900 text-slate-400 border border-white/[0.06]"
                  }`}
                >
                  ✗ Negative (Invalid Input)
                </button>
                <button
                  onClick={() => {
                    setScenarioType("edge");
                    setApiResponse(null);
                  }}
                  className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                    scenarioType === "edge"
                      ? "bg-amber-950 text-amber-400 border border-amber-700"
                      : "bg-slate-900 text-slate-400 border border-white/[0.06]"
                  }`}
                >
                  ⚡ Edge-Case Boundary
                </button>
              </div>

              {/* Request / Response Split View */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                {/* Request Payload */}
                <div className="rounded-xl bg-slate-950 border border-white/[0.06] p-4 font-mono text-xs">
                  <div className="text-slate-400 font-semibold mb-2 flex items-center justify-between">
                    <span>REQUEST PAYLOAD</span>
                    <span className="text-[10px] text-slate-500">application/json</span>
                  </div>
                  <pre className="text-cyan-300 bg-black/60 p-3 rounded-lg overflow-x-auto max-h-[160px]">
                    {JSON.stringify(apiMockData[selectedEndpoint][scenarioType].reqBody, null, 2)}
                  </pre>
                </div>

                {/* Response Body */}
                <div className="rounded-xl bg-slate-950 border border-white/[0.06] p-4 font-mono text-xs">
                  <div className="text-slate-400 font-semibold mb-2 flex items-center justify-between">
                    <span>RESPONSE BODY</span>
                    {apiResponse ? (
                      <div className="flex items-center gap-2">
                        <span
                          className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                            apiResponse.status >= 200 && apiResponse.status < 300
                              ? "bg-emerald-950 text-emerald-400 border border-emerald-800"
                              : "bg-rose-950 text-rose-400 border border-rose-800"
                          }`}
                        >
                          {apiResponse.status} {apiResponse.statusText}
                        </span>
                        <span className="text-slate-400 text-[10px]">{apiResponse.time}</span>
                      </div>
                    ) : (
                      <span className="text-[10px] text-slate-500">Awaiting trigger</span>
                    )}
                  </div>

                  {apiResponse ? (
                    <pre className="text-emerald-300 bg-black/60 p-3 rounded-lg overflow-x-auto max-h-[160px]">
                      {JSON.stringify(apiResponse.resBody, null, 2)}
                    </pre>
                  ) : (
                    <div className="bg-black/60 p-6 rounded-lg text-center text-slate-500 italic">
                      Click &ldquo;Send Request&rdquo; to simulate Postman response.
                    </div>
                  )}
                </div>
              </div>

              {/* Postman Assertions */}
              {apiResponse && (
                <div className="p-3.5 rounded-xl bg-slate-950 border border-white/[0.06] font-mono text-xs">
                  <div className="text-slate-400 font-semibold mb-1 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>POSTMAN TEST SCRIPT ASSERTIONS</span>
                  </div>
                  <div className="space-y-1 mt-2">
                    {apiResponse.assertions.map((assertion: string, aIdx: number) => (
                      <div key={aIdx} className="text-emerald-400/90 text-[11px] flex items-center gap-2">
                        <span className="text-slate-500 font-bold">PASS:</span>
                        <span>{assertion}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 3: JIRA DEFECT TRIAGE & RETEST */}
        {/* ========================================================= */}
        {activeTab === "jira" && (
          <div className="mt-8 rounded-2xl bg-[#090d16] border border-white/[0.08] p-5 sm:p-7 shadow-2xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-white/[0.06]">
              <div>
                <span className="text-xs font-mono text-cyan-400 font-semibold">JIRA DEFECT LIFECYCLE MANAGEMENT</span>
                <h3 className="text-lg font-bold text-white font-sans mt-0.5">
                  Production Defect Triage &amp; Verification
                </h3>
                <p className="text-xs text-slate-400">
                  Explore how Muhammad Bilal documented, reproduced, and regression-tested real software defects.
                </p>
              </div>

              {/* Jira bug ticket selector */}
              <div className="flex flex-wrap items-center gap-2">
                {jiraBugs.map((bug, bIdx) => (
                  <button
                    key={bug.id}
                    onClick={() => setSelectedJira(bIdx)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                      selectedJira === bIdx
                        ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 font-bold"
                        : "bg-slate-900/80 text-slate-400 border border-white/[0.06]"
                    }`}
                  >
                    {bug.id}
                  </button>
                ))}
              </div>
            </div>

            {/* Jira Ticket Details */}
            {(() => {
              const bug = jiraBugs[selectedJira];
              return (
                <div className="mt-5 space-y-4 font-mono text-xs">
                  {/* Ticket Header Bar */}
                  <div className="p-4 rounded-xl bg-slate-950 border border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="px-2 py-0.5 rounded bg-indigo-950 text-indigo-400 border border-indigo-800 text-[11px] font-bold">
                          {bug.id}
                        </span>
                        <span
                          className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                            bug.severity === "CRITICAL"
                              ? "bg-rose-950 text-rose-400 border border-rose-800"
                              : "bg-amber-950 text-amber-400 border border-amber-800"
                          }`}
                        >
                          SEVERITY: {bug.severity}
                        </span>
                        <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800 text-[10px] font-bold">
                          {bug.status}
                        </span>
                      </div>
                      <h4 className="text-sm sm:text-base font-bold text-slate-100 font-sans mt-1">
                        {bug.title}
                      </h4>
                    </div>

                    <div className="text-right shrink-0">
                      <div className="text-slate-400 text-[11px]">Portal: <span className="text-slate-200">{bug.portal}</span></div>
                      <div className="text-slate-400 text-[11px]">Module: <span className="text-cyan-400">{bug.module}</span></div>
                    </div>
                  </div>

                  {/* Steps */}
                  <div className="p-4 rounded-xl bg-slate-950 border border-white/[0.06]">
                    <div className="text-slate-300 font-semibold mb-2 flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                      <span>STEPS TO REPRODUCE:</span>
                    </div>
                    <ul className="space-y-1 text-slate-400 pl-1">
                      {bug.stepsToReproduce.map((step, sIdx) => (
                        <li key={sIdx}>{step}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Expected vs Actual */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-900/40">
                      <div className="text-emerald-400 font-bold mb-1">EXPECTED BEHAVIOR:</div>
                      <p className="text-slate-300 text-[11px] leading-relaxed">{bug.expected}</p>
                    </div>

                    <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-900/40">
                      <div className="text-rose-400 font-bold mb-1">ACTUAL BEHAVIOR (DEFECT):</div>
                      <p className="text-slate-300 text-[11px] leading-relaxed">{bug.actual}</p>
                    </div>
                  </div>

                  {/* Retest */}
                  <div className="p-4 rounded-xl bg-slate-950 border border-white/[0.06]">
                    <div className="text-emerald-400 font-bold mb-1 flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      <span>RETEST &amp; REGRESSION VERIFICATION (BY MUHAMMAD BILAL):</span>
                    </div>
                    <p className="text-slate-300 text-[11px] leading-relaxed">{bug.retestVerification}</p>
                  </div>
                </div>
              );
            })()}
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 4: MULTI-PORTAL MATRIX */}
        {/* ========================================================= */}
        {activeTab === "portals" && (
          <div className="mt-8 rounded-2xl bg-[#090d16] border border-white/[0.08] p-5 sm:p-7 shadow-2xl">
            <div className="pb-5 border-b border-white/[0.06]">
              <span className="text-xs font-mono text-cyan-400 font-semibold">PLATFORM ECOSYSTEM TESTING</span>
              <h3 className="text-lg font-bold text-white font-sans mt-0.5">
                3 Portals Thoroughly Tested at Hireboard
              </h3>
              <p className="text-xs text-slate-400">
                End-to-end integration and smoke verification across all 3 key platform stakeholders.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              {/* Portal 1 */}
              <div className="rounded-xl bg-slate-950 border border-white/[0.06] p-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-800 text-[10px] font-mono">
                      PORTAL 01
                    </span>
                    <span className="text-xs text-emerald-400 font-mono">100% Tested</span>
                  </div>
                  <h4 className="text-base font-bold text-white font-sans mb-1">
                    Admin Dashboard
                  </h4>
                  <p className="text-xs text-slate-400 mb-4">
                    High-level platform oversight, system configuration, and monitoring engines.
                  </p>

                  <div className="space-y-2 text-xs font-mono text-slate-300">
                    <div className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Activity Tracker Module</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Work Agent Testing</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-cyan-400" />
                      <span>HR Components &amp; Roles</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Global Contract Overrides</span>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-white/[0.04] text-[11px] text-slate-500 font-mono">
                  Role: Super Admin &bull; Ops
                </div>
              </div>

              {/* Portal 2 */}
              <div className="rounded-xl bg-slate-950 border border-white/[0.06] p-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800 text-[10px] font-mono">
                      PORTAL 02
                    </span>
                    <span className="text-xs text-emerald-400 font-mono">100% Tested</span>
                  </div>
                  <h4 className="text-base font-bold text-white font-sans mb-1">
                    Recruiter Portal
                  </h4>
                  <p className="text-xs text-slate-400 mb-4">
                    Talent acquisition, candidate vetting, meeting schedules, and contract generation.
                  </p>

                  <div className="space-y-2 text-xs font-mono text-slate-300">
                    <div className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Automated Recruiter Signup</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>FT, PT &amp; Hourly Contracts</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Interview Meeting Scheduler</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Staging Pay-In Escrow</span>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-white/[0.04] text-[11px] text-slate-500 font-mono">
                  Role: Hiring Teams &bull; Clients
                </div>
              </div>

              {/* Portal 3 */}
              <div className="rounded-xl bg-slate-950 border border-white/[0.06] p-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800 text-[10px] font-mono">
                      PORTAL 03
                    </span>
                    <span className="text-xs text-emerald-400 font-mono">100% Tested</span>
                  </div>
                  <h4 className="text-base font-bold text-white font-sans mb-1">
                    Talent Portal
                  </h4>
                  <p className="text-xs text-slate-400 mb-4">
                    Candidate assessments, contract signatures, hourly timesheet logging &amp; payouts.
                  </p>

                  <div className="space-y-2 text-xs font-mono text-slate-300">
                    <div className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-blue-400" />
                      <span>Skill Assessment Tests</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-blue-400" />
                      <span>Weekly Timesheet Logging</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-blue-400" />
                      <span>Digital Contract Signatures</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-blue-400" />
                      <span>Staging Pay-Out Disbursement</span>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-white/[0.04] text-[11px] text-slate-500 font-mono">
                  Role: Remote Talent &bull; Contractors
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
