export interface JobExperience {
  role: string;
  company: string;
  subCompany?: string;
  type: string;
  period: string;
  duration: string;
  location: string;
  summary: string;
  highlights: string[];
  skillsUsed: string[];
  metrics: { label: string; value: string }[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  status: string;
  year?: string;
  details?: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  credentialNote?: string;
  highlight?: boolean;
}

export interface SkillCategory {
  title: string;
  subtitle: string;
  iconName: string;
  skills: string[];
}

export const RESUME_DATA = {
  name: "Muhammad Bilal",
  headline: "QA Engineer | Software Quality Assurance",
  subHeadline: "With 1 Year Full-Stack MERN Development Background",
  location: "Karachi, Pakistan",
  phone: "+92 311 3254286",
  email: "bilalsqa10@gmail.com",
  linkedIn: "https://linkedin.com/in/muhammad-bilal-sheikh-5b0634387",
  linkedInHandle: "in/muhammad-bilal-sheikh-5b0634387",
  github: "https://github.com/Muhammadbilal29122004",
  githubHandle: "Muhammadbilal29122004",
  status: "Available for Remote & On-Site Opportunities",

  summary:
    "QA Engineer with 1 year of professional experience testing web applications across Admin, Recruiter, and Talent portals. Skilled in manual, regression, smoke, and end-to-end testing, REST API validation with Postman, and payment workflow testing. Experienced in defect reporting with Jira and in Playwright automation. Also has 1 year of MERN stack development experience in remote teams.",

  stats: [
    { label: "QA & Testing Experience", value: "1 Year", detail: "Hireboard – Fireboard Intelligence" },
    { label: "MERN Stack Development", value: "1 Year", detail: "Vonza distributed teams" },
    { label: "Portals Tested", value: "3 Key Portals", detail: "Admin, Recruiter, Talent" },
    { label: "Payment Workflows", value: "100% Safe", detail: "Zero-leak Staging Pay-In & Pay-Out" },
  ],

  skillCategories: [
    {
      title: "Testing Core & Methodologies",
      subtitle: "Comprehensive quality assurance execution strategies",
      iconName: "ShieldCheck",
      skills: [
        "Manual Testing",
        "Functional Testing",
        "Regression Testing",
        "Smoke Testing",
        "Sanity Testing",
        "Exploratory Testing",
        "End-to-End (E2E) Testing",
        "Positive / Negative Testing",
        "Edge-Case Boundary Testing",
        "Defect Retesting & Verification",
      ],
    },
    {
      title: "API Testing & Dev Tools",
      subtitle: "Payload verification, auth tokens, status codes & dev environments",
      iconName: "Network",
      skills: [
        "Postman",
        "REST API Testing",
        "HTTP Status Codes (200, 201, 400, 401, 422, 500)",
        "Authentication & JWT Validation",
        "Input Data Validation",
        "Jira Defect Management",
        "Git & GitHub",
        "Browser DevTools (DOM, Network, Console)",
      ],
    },
    {
      title: "Test Automation",
      subtitle: "Automated scripts for resilient regression suites",
      iconName: "Code2",
      skills: [
        "Playwright",
        "E2E Automation Scripting",
        "Automated Recruiter Signup Flow",
        "Business Rule Test Assertions",
        "Headless Browser Testing",
        "Cross-Browser Validation",
      ],
    },
    {
      title: "Engineering & Development (MERN)",
      subtitle: "Full-stack developer intuition powering deeper quality insights",
      iconName: "Layers",
      skills: [
        "React.js",
        "Next.js",
        "Node.js",
        "JavaScript (ES6+)",
        "MERN Stack",
        "Tailwind CSS",
        "HTML5 / CSS3",
        "RESTful Architecture",
      ],
    },
    {
      title: "QA Practices & Agile Workflows",
      subtitle: "Industry-standard testing lifecycles and collaboration",
      iconName: "Workflow",
      skills: [
        "Test Scenarios Design",
        "Test Case Execution",
        "Bug Reporting with Clear Reproduction Steps",
        "Release Regression Cycles",
        "Agile / Scrum Sprints",
        "Remote Cross-Functional Collaboration",
      ],
    },
  ],

  experiences: [
    {
      role: "QA Engineer",
      company: "Hireboard",
      subCompany: "Fireboard Intelligence",
      type: "Remote",
      period: "Nov 2025 – Nov 2026",
      duration: "1 Year",
      location: "Remote",
      summary:
        "Responsible for full lifecycle quality assurance across multi-portal web applications including Admin Dashboard, Recruiter Portal, and Talent Portal, guaranteeing reliable releases and flawless financial and contract workflows.",
      highlights: [
        "Performed functional, smoke, sanity, regression, and end-to-end testing across Admin Dashboard, Recruiter Portal, and Talent Portal.",
        "Executed production regression and staging validation for critical workflows, including Full-Time, Part-Time, and Hourly contract scenarios.",
        "Tested staging Pay-In and Pay-Out workflows using positive, negative, and edge-case scenarios without initiating real financial transactions.",
        "Validated REST APIs, authentication, response codes, and input validations using Postman.",
        "Tested Activity Tracker, Work Agent, HR components, contracts, meetings, assessments, and other application modules.",
        "Logged and tracked defects in Jira with clear reproduction steps; retested fixes and performed regression verification.",
        "Created Playwright test cases for Part-Time and Hourly contract business rules and automated the recruiter signup flow.",
        "Collaborated remotely with developers and QA team members to investigate issues and support release quality.",
        "Completed an ISTQB software testing course (Udemy, August 2026), sponsored by the company.",
      ],
      skillsUsed: [
        "Playwright",
        "Postman",
        "Jira",
        "REST API",
        "Regression Testing",
        "E2E Testing",
        "Payment Flow Validation",
        "Agile / Scrum",
      ],
      metrics: [
        { label: "Portals Covered", value: "3 Portals" },
        { label: "Financial Workflows", value: "Pay-In / Pay-Out" },
        { label: "Automation Framework", value: "Playwright" },
        { label: "Contract Types", value: "FT, PT & Hourly" },
      ],
    },
    {
      role: "MERN Stack Developer",
      company: "Vonza",
      type: "Remote",
      period: "Sep 2024 – Oct 2025",
      duration: "1 Year",
      location: "Remote",
      summary:
        "Engineered and debugged front-end and back-end modules with the MERN stack in a distributed remote team. This developer background provides an unfair advantage in QA by understanding underlying application states and failure modes.",
      highlights: [
        "Worked with the MERN stack and modern web technologies, including JavaScript, React, and Node.js.",
        "Built and debugged front-end and back-end features, developing a deep understanding of asynchronous application behavior, state management, and edge-case failure modes.",
        "Collaborated remotely with developers, designers, and project managers in an Agile distributed work environment.",
        "Applied code-level debugging techniques that later transformed into high-precision QA defect isolation strategies.",
      ],
      skillsUsed: ["React.js", "Node.js", "JavaScript", "MERN Stack", "Git", "REST APIs", "Debugging"],
      metrics: [
        { label: "Full Stack", value: "MERN" },
        { label: "Team Dynamic", value: "Remote & Agile" },
        { label: "Debugging Depth", value: "Code-Level" },
        { label: "Tech Stack", value: "React + Node" },
      ],
    },
  ],

  education: [
    {
      degree: "Bachelor of Science in Computer Science (BSCS)",
      institution: "Sindh Madressatul Islam University (SMIU)",
      status: "Undergraduate – In Progress",
      details: "Comprehensive coursework covering Algorithms, Software Engineering, Database Systems, Computer Networks, and Object-Oriented Programming.",
    },
    {
      degree: "Intermediate",
      institution: "Government Foreman College",
      status: "Completed",
      details: "Pre-Engineering / Science foundation with emphasis on Mathematics, Physics, and analytical problem-solving.",
    },
  ],

  certifications: [
    {
      title: "ISTQB Software Testing Course",
      issuer: "Udemy (Sponsored by Fireboard Intelligence)",
      date: "August 2026",
      credentialNote: "Formal software testing methodologies, test analysis, test design techniques, and lifecycle defect tracking.",
      highlight: true,
    },
    {
      title: "Software Quality Assurance Course",
      issuer: "Burraq Tech",
      date: "2025",
      credentialNote: "Practical manual testing, test documentation, test case matrices, bug reporting, and QA best practices.",
      highlight: false,
    },
    {
      title: "Web Development Course",
      issuer: "Saylani Mass IT Training (SMIT)",
      date: "2024",
      credentialNote: "Intensive training in modern web development, JavaScript, React, Node.js, and responsive user interfaces.",
      highlight: false,
    },
  ],

  references: "Available upon request.",
};

