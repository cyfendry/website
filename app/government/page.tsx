import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Government",
  description:
    "Cyfendry Group serves federal agencies, state and local governments, and prime contractors with cybersecurity, IT consulting, AI governance, workforce development, and facility services.",
};

const coreCompetencies = [
  {
    id: "cyber",
    title: "Cybersecurity and GRC",
    desc: "Cyber risk assessments, GRC program development, FISMA / FedRAMP / CMMC compliance readiness, penetration testing, and incident response planning.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#02c19d" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.955 11.955 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    id: "ai",
    title: "AI Governance",
    desc: "NIST AI RMF implementation, AI policy development, AI risk assessment, data governance, and AI maturity benchmarking aligned to federal executive orders.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#02c19d" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
      </svg>
    ),
  },
  {
    id: "it",
    title: "IT Consulting",
    desc: "Cloud security architecture, DevSecOps integration, systems design, digital transformation advisory, and IT program management for government modernization initiatives.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#02c19d" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" />
      </svg>
    ),
  },
  {
    id: "management",
    title: "Management Consulting",
    desc: "Strategic advisory services, organizational effectiveness assessments, policy development, and senior executive retainer engagements.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#02c19d" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
      </svg>
    ),
  },
  {
    id: "workforce",
    title: "Workforce Development",
    desc: "CISSP, CISM, CISA, CDPSE, and AIGP certification preparation, GRC bootcamps, Cloud and DevSecOps training, talent placement, and K-12 youth cybersecurity programs.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#02c19d" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
  },
  {
    id: "facility",
    title: "Facility Services",
    desc: "Commercial janitorial, building cleaning, and facility maintenance support for government offices, courthouses, and commercial sites.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#02c19d" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
];

const contractData = [
  { label: "Unique Entity ID (UEI)", value: "HSM1K7XBW6M5" },
  { label: "CAGE / NCAGE Code", value: "1MZS1" },
];

const naicsCodes = [
  { code: "541512", label: "Computer Systems Design" },
  { code: "541511", label: "Custom Computer Programming" },
  { code: "541513", label: "Computer Facilities Management" },
  { code: "541611", label: "Administrative Management Consulting" },
  { code: "541690", label: "Other Scientific and Technical Consulting" },
  { code: "541990", label: "Other Professional and Technical Services" },
  { code: "541330", label: "Engineering Services" },
  { code: "611430", label: "Professional and Management Training" },
  { code: "561720", label: "Janitorial Services" },
  { code: "561311", label: "Employment Placement Agencies" },
  { code: "561320", label: "Temporary Help Services" },
];

const socioDesignations = [
  "Woman-Owned Small Business (WOSB)",
  "Minority-Owned Business Enterprise",
];

const differentiators = [
  {
    num: "01",
    title: "Senior Practitioner Delivery",
    desc: "Every engagement is led directly by credentialed practitioners. Clients receive hands-on access to certified experts, not delegated work managed from a distance.",
  },
  {
    num: "02",
    title: "Cross-Sector Experience",
    desc: "Our leadership has delivered security and technology programs across defense, financial services, healthcare, chemical manufacturing, and industrial sectors — bringing disciplined private-sector rigor into government delivery.",
  },
  {
    num: "03",
    title: "Regulatory Fluency",
    desc: "Active expertise across FISMA, FedRAMP, CMMC, NIST SP 800 series, NIST AI RMF, and state-level IT security mandates. No ramp-up required.",
  },
  {
    num: "04",
    title: "Certified Across Every Discipline",
    desc: "Our team holds active CISSP, CISM, CISA, CDPSE, and AIGP certifications — covering cybersecurity, risk management, audit, privacy, and AI governance. Few small businesses can match this credential depth.",
  },
];

export default function GovernmentPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-48 pb-20 relative overflow-hidden" style={{ backgroundColor: "#021a62" }}>
        <div className="absolute inset-0 brand-pattern opacity-40" />
        <div
          className="absolute bottom-0 right-0 w-[600px] h-[400px] rounded-full opacity-15 blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, #02c19d 0%, transparent 70%)" }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white font-black mb-5 leading-tight max-w-3xl">
            Government<br />
            <span style={{ color: "#02c19d" }}>Contracting</span> Solutions
          </h1>
          <p className="text-gray-300 max-w-2xl text-lg leading-relaxed font-light mb-10">
            Cyfendry Group is a Woman-Owned firm delivering cybersecurity, technology, AI governance, and workforce development solutions to federal agencies, state governments, and prime contractors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/capability-statement"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 font-bold rounded text-white text-sm transition-all duration-200 hover:opacity-90"
              style={{ backgroundColor: "#008E73" }}
            >
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 flex-shrink-0">
                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
              </svg>
              Capability Statement
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 font-bold rounded text-white border-2 border-white/30 hover:border-white/70 hover:bg-white/10 transition-all duration-200 text-sm"
            >
              Request a Briefing
            </Link>
          </div>
        </div>
      </section>

      {/* Contract snapshot strip */}
      <div className="border-y border-gray-200 bg-white py-5">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {contractData.map((item) => (
              <div key={item.label} className="flex items-center gap-2 text-xs">
                <span className="font-semibold text-gray-400 uppercase tracking-wider">{item.label}</span>
                <span className="font-bold" style={{ color: "#021a62" }}>{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Core Competencies */}
      <section style={{ backgroundColor: "#f5f7f6" }} className="py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8" style={{ backgroundColor: "#008E73" }} />
            <span className="section-label" style={{ color: "#008E73" }}>What We Deliver</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black mb-12" style={{ color: "#021a62" }}>
            Core Competencies
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {coreCompetencies.map((comp) => (
              <div
                key={comp.id}
                className="bg-white rounded-xl p-6 border border-gray-100 hover:border-teal hover:shadow-md transition-all duration-300 group"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: "#021a62" }}
                >
                  {comp.icon}
                </div>
                <h3 className="font-bold text-base mb-2 leading-snug group-hover:text-teal transition-colors duration-200" style={{ color: "#021a62" }}>
                  {comp.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{comp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Cyfendry */}
      <section style={{ backgroundColor: "#021a62" }} className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 brand-pattern opacity-40" />
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8" style={{ backgroundColor: "#02c19d" }} />
            <span className="section-label" style={{ color: "#02c19d" }}>Our Differentiators</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-12">
            Why Cyfendry Group
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {differentiators.map((d) => (
              <div
                key={d.num}
                className="rounded-xl p-6 flex gap-4"
                style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(2,193,157,0.15)" }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 text-xs font-black text-white mt-0.5"
                  style={{ backgroundColor: "#008E73" }}
                >
                  {d.num}
                </div>
                <div>
                  <div className="text-sm font-bold text-white mb-1.5">{d.title}</div>
                  <div className="text-sm text-gray-400 leading-relaxed">{d.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors Served */}
      <section className="bg-white py-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8" style={{ backgroundColor: "#008E73" }} />
            <span className="section-label" style={{ color: "#008E73" }}>Industries</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black mb-6" style={{ color: "#021a62" }}>
            Sectors Served
          </h2>
          <div className="flex flex-wrap gap-2">
            {[
              "Federal Civilian Agencies",
              "Department of Defense & Intelligence Community",
              "State & Local Government",
              "Financial Services",
              "Healthcare",
              "Industrial & Manufacturing",
              "Prime Contractors & Systems Integrators",
            ].map((sector) => (
              <span
                key={sector}
                className="text-sm font-medium px-4 py-2 rounded-lg"
                style={{ backgroundColor: "#f5f7f6", border: "1px solid #e5e7eb", color: "#021a62" }}
              >
                {sector}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications and Designations */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Designations */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8" style={{ backgroundColor: "#008E73" }} />
                <span className="section-label" style={{ color: "#008E73" }}>Designations</span>
              </div>
              <h3 className="text-2xl font-black mb-6" style={{ color: "#021a62" }}>
                Socioeconomic Status
              </h3>
              <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                Our designations support set-aside contracting opportunities across federal and state programs, enabling agencies to meet small business participation goals.
              </p>
              <div className="flex flex-wrap gap-2">
                {socioDesignations.map((badge) => (
                  <span
                    key={badge}
                    className="text-xs font-semibold px-3 py-2 rounded-lg text-white"
                    style={{ backgroundColor: "#021a62" }}
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            {/* Active certifications */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8" style={{ backgroundColor: "#008E73" }} />
                <span className="section-label" style={{ color: "#008E73" }}>Team Certifications</span>
              </div>
              <h3 className="text-2xl font-black mb-6" style={{ color: "#021a62" }}>
                Credentials
              </h3>
              <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                Our practitioners hold active certifications across cybersecurity, privacy, AI governance, and risk management disciplines.
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  { cert: "CISSP", full: "Certified Information Systems Security Professional" },
                  { cert: "CISM", full: "Certified Information Security Manager" },
                  { cert: "CISA", full: "Certified Information Systems Auditor" },
                  { cert: "CDPSE", full: "Certified Data Privacy Solutions Engineer" },
                  { cert: "AIGP", full: "AI Governance Professional" },
                  { cert: "CCSP", full: "Certified Cloud Security Professional" },
                  { cert: "CGRC", full: "Certified in Governance, Risk and Compliance" },
                  { cert: "Security+", full: "CompTIA Security+" },
                  { cert: "PMP", full: "Project Management Professional" },
                ].map((c) => (
                  <div
                    key={c.cert}
                    className="px-3 py-2 rounded-lg text-center min-w-[90px]"
                    style={{ backgroundColor: "#f5f7f6", border: "1px solid #e5e7eb" }}
                  >
                    <div className="text-sm font-black" style={{ color: "#021a62" }}>{c.cert}</div>
                    <div className="text-[9px] text-gray-400 mt-0.5 leading-tight">{c.full}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NAICS codes */}
      <section style={{ backgroundColor: "#f5f7f6" }} className="py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8" style={{ backgroundColor: "#008E73" }} />
            <span className="section-label" style={{ color: "#008E73" }}>Procurement</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black mb-8" style={{ color: "#021a62" }}>
            NAICS Codes
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {naicsCodes.map((n) => (
              <div
                key={n.code}
                className="bg-white rounded-lg px-4 py-3 flex items-center gap-3 border border-gray-100"
              >
                <span className="text-sm font-black w-14 flex-shrink-0" style={{ color: "#021a62" }}>{n.code}</span>
                <span className="text-xs text-gray-500 leading-snug">{n.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "#021a62" }} className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 brand-pattern opacity-30" />
        <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 lg:px-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Let&apos;s Work Together.
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
            We are open to capability briefings, teaming conversations, subcontracting discussions, and RFI responses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 font-bold rounded text-white text-sm transition-all duration-200 hover:opacity-90"
              style={{ backgroundColor: "#008E73" }}
            >
              Contact Us
            </Link>
            <Link
              href="/capability-statement"
              className="inline-flex items-center justify-center px-8 py-4 font-bold rounded text-white border-2 border-white/30 hover:border-white/70 hover:bg-white/10 transition-all duration-200 text-sm"
            >
              Capability Statement
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
