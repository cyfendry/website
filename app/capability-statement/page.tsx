import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PrintButton from "@/components/PrintButton";

export const metadata: Metadata = {
  title: "Capability Statement",
  description:
    "Download or print the Cyfendry Group capability statement. Includes NAICS codes, contract identifiers, core capabilities, and certifications.",
};

const naicsCodes = [
  { code: "541512", label: "Computer Systems Design Services" },
  { code: "541511", label: "Custom Computer Programming Services" },
  { code: "541513", label: "Computer Facilities Management Services" },
  { code: "541611", label: "Administrative Management Consulting" },
  { code: "541690", label: "Other Scientific and Technical Consulting" },
  { code: "541990", label: "Other Professional and Technical Services" },
  { code: "541330", label: "Engineering Services" },
  { code: "611430", label: "Professional and Management Development Training" },
  { code: "561720", label: "Janitorial Services" },
  { code: "561311", label: "Employment Placement Agencies" },
  { code: "561320", label: "Temporary Help Services" },
];

const contractProfile = [
  { label: "Unique Entity ID (UEI)", value: "HSM1K7XBW6M5" },
  { label: "CAGE / NCAGE Code", value: "1MZS1" },
  { label: "Primary NAICS", value: "541512" },
  { label: "Entity Type", value: "LLC" },
  { label: "State of Registration", value: "Texas" },
  { label: "SAM.gov Status", value: "Active" },
];

const industries = [
  "Federal Government",
  "State & Local Government",
  "Financial Services",
  "Healthcare & Life Sciences",
  "Technology & Software",
  "Defense & Intelligence",
  "Education & Workforce",
  "Industrial & Manufacturing",
  "Critical Infrastructure",
  "Commercial Enterprise",
];

const consultingCapabilities = [
  "Cybersecurity risk assessments, GRC program development, SOC 2 readiness, and compliance frameworks (FISMA, FedRAMP, CMMC)",
  "Business continuity and disaster recovery (BC/DR) planning and incident response program design",
  "AI governance frameworks, NIST AI RMF implementation, and AI risk assessments",
  "Cloud security architecture, DevSecOps integration, and systems design for government environments",
  "IT digital transformation advisory, cloud migration planning, and IT program management",
  "Strategic management consulting, policy development, and executive advisory retainer engagements",
  "Facility maintenance and janitorial services for government offices and commercial sites",
];

const trainingCapabilities = [
  "Security+, CISSP, CISM, CISA, CDPSE, and AIGP certification preparation with live instruction",
  "GRC Bootcamp: intensive multi-day governance, risk, and compliance training",
  "Cloud security and DevSecOps practitioner training programs",
  "Cybersecurity talent sourcing, vetting, and placement for government and commercial roles",
  "K-12 youth cybersecurity awareness and career pathway programs",
];

const differentiators = [
  {
    title: "Small Business Agility",
    desc: "As a registered small business, Cyfendry brings the focus, responsiveness, and accountability that large primes can't match — with direct access to senior practitioners on every engagement.",
  },
  {
    title: "Cross-Sector Depth",
    desc: "Our practitioners have led programs in financial services, healthcare, government, and industrial environments — bringing regulatory breadth and operational discipline to every engagement.",
  },
  {
    title: "Dual Capability",
    desc: "We deliver both consulting and workforce development, allowing clients to address security gaps and build internal capacity through a single trusted partner.",
  },
  {
    title: "Active Credentials",
    desc: "Team certifications span CISSP, CISM, CISA, CDPSE, AIGP, AWS, Security+, CGRC, and PMP — ensuring qualified, credentialed delivery across every practice area.",
  },
];

const impactStats = [
  { value: "12+", label: "Years Industry\nLeadership Experience" },
  { value: "6", label: "Core Practice\nAreas" },
  { value: "10+", label: "Industries\nServed" },
  { value: "9", label: "Certification\nPrograms Offered" },
];

const trainingStats = [
  { value: "1,500+", label: "Professionals\nTrained" },
  { value: "85%", label: "First-Attempt\nPass Rate" },
  { value: "$60M+", label: "Career Value\nGenerated" },
  { value: "9", label: "Certification\nPrograms" },
];

const certs = ["CISSP", "CISM", "CISA", "CDPSE", "AIGP", "AWS", "Security+", "CGRC", "PMP"];

export default function CapabilityStatementPage() {
  return (
    <div style={{ backgroundColor: "#f5f7f6" }} className="pt-20 pb-16 px-4">
      <div className="max-w-[900px] mx-auto mb-6 pt-4 no-print">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-sm font-semibold transition-colors duration-200" style={{ color: "#008E73" }}>
            ← Back to Home
          </Link>
          <PrintButton />
        </div>
      </div>

      {/* Document */}
      <div className="max-w-[900px] mx-auto bg-white shadow-2xl rounded-xl overflow-hidden" id="capability-document">

        {/* Header */}
        <div className="px-10 py-8 relative overflow-hidden" style={{ backgroundColor: "#021a62" }}>
          <div className="absolute inset-0 brand-pattern opacity-30" />
          <div
            className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10 blur-3xl pointer-events-none"
            style={{ background: "radial-gradient(circle, #02c19d 0%, transparent 70%)" }}
          />
          <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <Image
                src="/Cyfendry_Logo_02_Gradient_White-Text_Transparent.png"
                alt="Cyfendry Group"
                width={2400}
                height={1815}
                style={{ height: "120px", width: "auto" }}
                className="mb-2"
              />
              <div className="text-base font-semibold text-gray-300 tracking-wide">Capability Statement</div>
              <div className="text-sm text-gray-400 mt-0.5 italic">Mission-Ready Technology and Security Solutions</div>
            </div>
            <div className="text-right text-sm text-gray-400 space-y-1">
              <div className="font-semibold text-gray-300">info@cyfendry.com</div>
              <div style={{ color: "#02c19d" }}>(945) 248-8808</div>
              <div>cyfendry.com</div>
              <div>Dallas, Texas</div>
            </div>
          </div>
        </div>

        {/* Teal accent bar */}
        <div className="h-1" style={{ background: "linear-gradient(90deg, #02c19d 0%, #008E73 100%)" }} />

        {/* Designation banner */}
        <div className="py-2.5 px-10 text-center text-sm font-bold text-white tracking-wider uppercase" style={{ backgroundColor: "#008E73" }}>
          Woman-Owned Small Business (WOSB) &nbsp;|&nbsp; Minority-Owned Business Enterprise
        </div>

        {/* Body */}
        <div className="px-10 py-10 space-y-10">

          {/* ── COMPANY OVERVIEW ── */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="px-3 py-1 rounded text-xs font-bold uppercase tracking-widest text-white" style={{ backgroundColor: "#021a62" }}>
                Company Overview
              </div>
              <div className="flex-1 h-px" style={{ backgroundColor: "#e5e7eb" }} />
            </div>
            <p className="text-base text-gray-700 leading-relaxed">
              Cyfendry Group is a woman-owned, minority-led cybersecurity and technology firm built on the premise that security expertise and workforce readiness must grow together. We embed inside agencies and enterprises to design GRC programs, govern AI risk, and build the internal talent needed to sustain them — drawing on 12+ years of industry expertise and leadership across healthcare, financial services, defense, and industrial sectors. We don't send junior consultants. Every engagement is led by credentialed practitioners.
            </p>
          </div>

          <div className="h-px" style={{ backgroundColor: "#e5e7eb" }} />

          {/* ── CONTRACT IDENTIFIERS ── */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="px-3 py-1 rounded text-xs font-bold uppercase tracking-widest text-white" style={{ backgroundColor: "#021a62" }}>
                Contract Identifiers
              </div>
              <div className="flex-1 h-px" style={{ backgroundColor: "#e5e7eb" }} />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
              {contractProfile.map((item) => (
                <div
                  key={item.label}
                  className="rounded-lg px-4 py-3"
                  style={{ backgroundColor: "#f5f7f6", border: "1px solid #e2e8f0" }}
                >
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5">{item.label}</div>
                  <div className="text-base font-black" style={{ color: "#021a62" }}>{item.value}</div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {impactStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-lg p-4 text-center"
                  style={{ backgroundColor: "#021a62" }}
                >
                  <div className="text-2xl font-black mb-0.5 text-white">{stat.value}</div>
                  <div className="text-xs font-semibold uppercase tracking-wider leading-tight whitespace-pre-line" style={{ color: "#02c19d" }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="h-px" style={{ backgroundColor: "#e5e7eb" }} />

          {/* ── INDUSTRIES SERVED ── */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="px-3 py-1 rounded text-xs font-bold uppercase tracking-widest text-white" style={{ backgroundColor: "#021a62" }}>
                Industries Served
              </div>
              <div className="flex-1 h-px" style={{ backgroundColor: "#e5e7eb" }} />
            </div>
            <div className="flex flex-wrap gap-2">
              {industries.map((ind) => (
                <span
                  key={ind}
                  className="text-sm font-semibold px-3 py-1.5 rounded-full"
                  style={{ color: "#021a62", backgroundColor: "#f0f4ff", border: "1px solid rgba(2,26,98,0.2)" }}
                >
                  {ind}
                </span>
              ))}
            </div>
          </div>

          <div className="h-px" style={{ backgroundColor: "#e5e7eb" }} />

          {/* ── CORE COMPETENCIES ── */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="px-3 py-1 rounded text-xs font-bold uppercase tracking-widest text-white" style={{ backgroundColor: "#021a62" }}>
                Core Competencies
              </div>
              <div className="flex-1 h-px" style={{ backgroundColor: "#e5e7eb" }} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-sm font-bold uppercase tracking-wider mb-4 pb-2 border-b-2" style={{ color: "#021a62", borderColor: "#008E73" }}>
                  Consulting Practice
                </h2>
                <ul className="space-y-2.5">
                  {consultingCapabilities.map((cap, i) => (
                    <li key={i} className="flex items-start gap-2 text-base text-gray-700">
                      <span className="mt-0.5 flex-shrink-0 font-bold text-base leading-none" style={{ color: "#008E73" }}>›</span>
                      {cap}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-sm font-bold uppercase tracking-wider mb-4 pb-2 border-b-2" style={{ color: "#021a62", borderColor: "#02c19d" }}>
                  Workforce Development
                </h2>
                <ul className="space-y-2.5 mb-6">
                  {trainingCapabilities.map((cap, i) => (
                    <li key={i} className="flex items-start gap-2 text-base text-gray-700">
                      <span className="mt-0.5 flex-shrink-0 font-bold text-base leading-none" style={{ color: "#02c19d" }}>›</span>
                      {cap}
                    </li>
                  ))}
                </ul>
                <div className="grid grid-cols-2 gap-3">
                  {trainingStats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-lg p-3 text-center"
                      style={{ backgroundColor: "#f0faf7", border: "1px solid rgba(2,193,157,0.25)" }}
                    >
                      <div className="text-xl font-black mb-0.5" style={{ color: "#008E73" }}>{stat.value}</div>
                      <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider leading-tight whitespace-pre-line">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="h-px" style={{ backgroundColor: "#e5e7eb" }} />

          {/* ── DIFFERENTIATORS ── */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="px-3 py-1 rounded text-xs font-bold uppercase tracking-widest text-white" style={{ backgroundColor: "#008E73" }}>
                What Makes Us Unique
              </div>
              <div className="flex-1 h-px" style={{ backgroundColor: "#e5e7eb" }} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {differentiators.map((item) => (
                <div
                  key={item.title}
                  className="rounded-lg p-4"
                  style={{ backgroundColor: "#f5f7f6", border: "1px solid #e2e8f0" }}
                >
                  <div className="text-sm font-black mb-1.5" style={{ color: "#021a62" }}>{item.title}</div>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="h-px" style={{ backgroundColor: "#e5e7eb" }} />

          {/* ── CERTIFICATIONS + NAICS ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-wider mb-4 pb-2 border-b-2" style={{ color: "#021a62", borderColor: "#008E73" }}>
                Team Certifications
              </h2>
              <div className="flex flex-wrap gap-2">
                {certs.map((cert) => (
                  <span
                    key={cert}
                    className="text-sm font-bold px-3 py-1.5 rounded-full"
                    style={{ color: "#008E73", backgroundColor: "rgba(0,142,115,0.08)", border: "1px solid rgba(0,142,115,0.3)" }}
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-sm font-bold uppercase tracking-wider mb-4 pb-2 border-b-2" style={{ color: "#021a62", borderColor: "#008E73" }}>
                NAICS Codes
              </h2>
              <div className="space-y-1">
                {naicsCodes.map((n) => (
                  <div key={n.code} className="flex items-center gap-2 text-sm py-1.5 border-b border-gray-100">
                    <span className="font-black w-14 flex-shrink-0" style={{ color: "#021a62" }}>{n.code}</span>
                    <span className="text-gray-500">{n.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-10 py-4" style={{ backgroundColor: "#021a62" }}>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-gray-400">
            <span style={{ color: "#02c19d" }}>cyfendry.com</span>
            <span>info@cyfendry.com</span>
            <span>(945) 248-8808</span>
            <span>Dallas, Texas</span>
            <span style={{ color: "#02c19d" }}>UEI: HSM1K7XBW6M5 | CAGE: 1MZS1</span>
          </div>
        </div>
      </div>
    </div>
  );
}
