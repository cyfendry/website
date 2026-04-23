import type { Metadata } from "next";
import Link from "next/link";
import WorkforceStats from "@/components/WorkforceStats";

export const metadata: Metadata = {
  title: "Workforce Development",
  description:
    "Cyfendry offers cybersecurity training programs, certification prep, bootcamps, and talent solutions for government and commercial clients.",
};

const programs = [
  {
    id: "certification",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
    type: "Certification Prep",
    title: "Security Certification Prep",
    topics: [
      "CISSP exam preparation and domain review",
      "CISM governance and risk frameworks",
      "CISA audit and assurance methodologies",
      "CDPSE data privacy and governance",
      "Practice exams and study strategy",
      "One-on-one coaching sessions",
    ],
    audience: "Cybersecurity professionals seeking ISC2 and ISACA credentials",
  },
  {
    id: "itaudit",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
    type: "Bootcamp",
    title: "IT Audit Bootcamp",
    topics: [
      "IT general controls and application controls",
      "Risk-based audit planning",
      "COBIT and NIST audit alignment",
      "Audit evidence and documentation standards",
      "Reporting findings to executive leadership",
      "Hands-on case studies",
    ],
    audience: "Internal auditors, compliance analysts, and IT managers",
  },
  {
    id: "grc",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
    type: "Bootcamp",
    title: "GRC Bootcamp",
    topics: [
      "NIST CSF and SP 800-53 implementation",
      "CMMC 2.0 readiness and assessment",
      "ServiceNow GRC module configuration",
      "6clicks platform for risk management",
      "Policy writing and exception management",
      "Continuous monitoring frameworks",
    ],
    audience: "GRC analysts, compliance officers, and security managers",
  },
  {
    id: "cloud",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
      </svg>
    ),
    type: "Bootcamp",
    title: "Cloud and DevSecOps Bootcamp",
    topics: [
      "AWS and Azure security fundamentals",
      "Infrastructure as code security controls",
      "CI/CD pipeline security integration",
      "Container and Kubernetes security",
      "FedRAMP authorization support",
      "Hands-on labs in cloud environments",
    ],
    audience: "Cloud engineers, DevOps practitioners, and security architects",
  },
  {
    id: "awareness",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    type: "Awareness Training",
    title: "Security Awareness Training",
    topics: [
      "Phishing and social engineering recognition",
      "Password hygiene and MFA adoption",
      "Incident reporting procedures",
      "Data handling and classification policies",
      "Compliance obligations for staff",
      "Role-specific security modules",
    ],
    audience: "All organizational staff across departments and roles",
  },
  {
    id: "youth",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
    type: "Youth Program",
    title: "Youth Cybersecurity Program",
    topics: [
      "Introduction to cybersecurity concepts",
      "Digital citizenship and online safety",
      "Hands-on capture-the-flag challenges",
      "Career pathway exploration and mentorship",
      "College and certification roadmap guidance",
      "Industry professional guest presentations",
    ],
    audience: "K-12 students and school district technology programs",
  },
];

export default function WorkforcePage() {
  return (
    <>
      {/* Hero */}
      <section
        className="pt-48 pb-16 relative overflow-hidden"
        style={{ backgroundColor: "#021a62" }}
      >
        <div className="absolute inset-0 brand-pattern" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="inline-block text-xs font-semibold uppercase tracking-widest mb-4 px-4 py-1.5 rounded-full"
            style={{ color: "#02c19d", border: "1px solid rgba(2,193,157,0.4)" }}
          >
            Training and Talent
          </div>
          <h1
            className="text-4xl sm:text-5xl text-white mb-4"
            style={{ fontFamily: "var(--font-dm-serif)" }}
          >
            Workforce Development
          </h1>
          <p className="text-gray-400 max-w-2xl text-lg">
            Building the next generation of cybersecurity and technology professionals through rigorous, credential-focused training programs.
          </p>
        </div>
      </section>

      {/* Stats row */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <WorkforceStats />
        </div>
      </section>

      {/* Programs */}
      <section id="training" style={{ backgroundColor: "#f4f7f6" }} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2
              className="text-3xl sm:text-4xl mb-4"
              style={{ fontFamily: "var(--font-dm-serif)", color: "#021a62" }}
            >
              Training Programs
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Instructor-led and self-paced programs designed for working professionals and aspiring practitioners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program) => (
              <div
                key={program.id}
                id={program.id}
                className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200 flex flex-col"
              >
                <div
                  className="px-6 py-5 flex items-start gap-3"
                  style={{ backgroundColor: "#021a62" }}
                >
                  <div style={{ color: "#008E73" }}>{program.icon}</div>
                  <div>
                    <div
                      className="text-xs font-semibold uppercase tracking-widest mb-1"
                      style={{ color: "#008E73" }}
                    >
                      {program.type}
                    </div>
                    <h3 className="text-white font-semibold text-base leading-snug">
                      {program.title}
                    </h3>
                  </div>
                </div>

                <div className="px-6 py-5 flex flex-col flex-1">
                  <ul className="space-y-2 mb-5 flex-1">
                    {program.topics.map((topic) => (
                      <li key={topic} className="flex items-start gap-2 text-sm text-gray-700">
                        <span
                          className="flex-shrink-0 mt-0.5 font-bold"
                          style={{ color: "#008E73" }}
                        >
                          ›
                        </span>
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-xs text-gray-500 italic">
                      Audience: {program.audience}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Talent Solutions CTA */}
      <section id="talent" style={{ backgroundColor: "#021a62" }} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2
              className="text-3xl sm:text-4xl text-white mb-6"
              style={{ fontFamily: "var(--font-dm-serif)" }}
            >
              Talent Solutions for Agencies and Primes
            </h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Cyfendry Group supports federal agencies and prime contractors in building qualified, credentialed technology workforces. Our placement network spans certified cybersecurity professionals, cloud engineers, GRC analysts, and IT program managers.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                "Staffing and talent augmentation for federal programs",
                "Cleared professional network across major metro and remote locations",
                "Custom training pipelines aligned to contract requirements",
                "Upskilling and reskilling programs for career transition populations",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-300">
                  <span
                    className="mt-1 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs text-white font-bold"
                    style={{ backgroundColor: "#008E73" }}
                  >
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-gray-400 text-sm mb-6">
              Available for organizational engagements and individual enrollment by inquiry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-block px-8 py-4 font-semibold rounded text-white transition-all duration-200 text-center"
                style={{ backgroundColor: "#008E73" }}
              >
                Discuss Workforce Solutions
              </Link>
              <Link
                href="/contact"
                className="inline-block px-8 py-4 font-semibold rounded text-white border-2 border-white/30 hover:border-white/70 hover:bg-white/10 transition-all duration-200 text-center"
              >
                Inquire About Training
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
