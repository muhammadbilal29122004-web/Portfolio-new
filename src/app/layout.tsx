import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muhammad Bilal | QA Engineer & Software Quality Assurance",
  description:
    "Portfolio of Muhammad Bilal, QA Engineer with 1 year professional testing at Hireboard (Admin, Recruiter, and Talent portals) and 1 year full-stack MERN development background at Vonza. Skilled in Playwright automation, Postman REST API testing, and staging payment workflows.",
  keywords: [
    "Muhammad Bilal",
    "QA Engineer",
    "Software Quality Assurance",
    "Playwright Automation",
    "Postman API Testing",
    "MERN Stack Developer",
    "Software Tester",
    "Hireboard",
    "Vonza",
    "ISTQB",
    "Karachi Pakistan",
  ],
  authors: [{ name: "Muhammad Bilal", url: "https://github.com/Muhammadbilal29122004" }],
  openGraph: {
    title: "Muhammad Bilal | QA Engineer & Automation Specialist",
    description:
      "Explore the interactive QA portfolio of Muhammad Bilal: Playwright test runner, Postman API inspector, Jira bug triage, and multi-portal test matrix.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#060913] text-[#f1f5f9] selection:bg-cyan-500 selection:text-black">
        {children}
      </body>
    </html>
  );
}
