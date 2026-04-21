import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Cyfendry Group — a Woman-Owned Small Business delivering cybersecurity, technology, and workforce development solutions to government and commercial clients.",
};

const values = [
  {
    title: "Integrity",
    desc: "We hold ourselves to the highest standards of honesty and ethics in every engagement, regardless of contract size or client type.",
  },
  {
    title: "Precision",
    desc: "Technical and analytical rigor is central to our delivery. We verify, validate, and document before we advise.",
  },
  {
    title: "Accountability",
    desc: "We own outcomes, not just activities. Our clients measure us on results that advance their mission objectives.",
  },
  {
    title: "Mission Focus",
    desc: "Government and public-sector work carries genuine stakes. We approach every project as an extension of mission responsibility.",
  },
];

const principles = [
  {
    title: "Client First",
    desc: "Every recommendation we make is tested against one question: does this serve the client's mission? We have no interest in solutions that don't move the needle.",
  },
  {
    title: "Credentialed Delivery",
    desc: "We staff engagements with practitioners who hold active, relevant certifications — not generalists. The work demands it.",
  },
  {
    title: "Transparent Communication",
    desc: "We communicate risk, progress, and setbacks directly. Our clients are never surprised — they are always informed.",
  },
  {
    title: "Continuous Development",
    desc: "We invest in our people the same way we invest in our clients' workforces — with structured learning, certification support, and career development.",
  },
];

const teamAreas = [
  {
    title: "Cybersecurity & GRC",
    desc: "Risk management, security program design, and compliance readiness across FISMA, FedRAMP, CMMC, and SOC 2 frameworks.",
  },
  {
    title: "AI & Data Governance",
    desc: "AI policy development, NIST AI RMF implementation, and responsible data governance for regulated industries.",
  },
  {
    title: "Cloud & Technology",
    desc: "Cloud security architecture, DevSecOps integration, and IT program management for government and enterprise clients.",
  },
  {
    title: "Workforce Development",
    desc: "Certification training, GRC bootcamps, cybersecurity curriculum design, and talent placement for public and private sectors.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="pt-48 pb-20 relative overflow-hidden" style={{ backgroundColor: "#021a62" }}>
        <div className="absolute inset-0 brand-pattern" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="inline-block text-xs font-semibold uppercase tracking-widest mb-4 px-4 py-1.5 rounded-full"
            style={{ color: "#02c19d", border: "1px solid rgba(0,184,148,0.4)" }}
          >
            Our Story
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-5 leading-tight max-w-3xl">
            About Cyfendry Group
          </h1>
          <p className="text-gray-400 max-w-2xl text-lg leading-relaxed">
            Built on the principle that focused, credentialed firms deliver the most meaningful results to the organizations that need them most.
          </p>
        </div>
      </section>

      {/* ── WHO WE ARE ── */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Mission + Story */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8" style={{ backgroundColor: "#008E73" }} />
                <span className="section-label" style={{ color: "#008E73" }}>Who We Are</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black mb-6" style={{ color: "#021a62" }}>
                Built for the Mission
              </h2>
              <div className="space-y-5 text-gray-700 leading-relaxed text-sm">
                <p>
                  Cyfendry was founded on the belief that small businesses can deliver the highest-caliber cybersecurity, technology, and advisory services to the agencies and organizations that need them most.
                </p>
                <p>
                  Our team brings decades of combined experience from the most demanding environments in the private sector — global consulting firms, financial services, healthcare systems, and industrial enterprises.
                </p>
                <p>
                  We serve federal agencies, state and local governments, prime contractors seeking subcontracting partners, and commercial enterprises that want government-grade security practices applied to their operations.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/capability-statement"
                  className="inline-block px-6 py-3 font-semibold rounded text-white text-sm transition-all duration-200"
                  style={{ backgroundColor: "#02c19d" }}
                >
                  View Capability Statement
                </Link>
                <Link
                  href="/contact"
                  className="inline-block px-6 py-3 font-semibold rounded text-sm border-2 transition-all duration-200"
                  style={{ borderColor: "#021a62", color: "#021a62" }}
                >
                  Contact Our Team
                </Link>
              </div>
            </div>

            {/* Mission statement + key facts */}
            <div className="space-y-5">
              <div
                className="rounded-xl p-8"
                style={{ backgroundColor: "#021a62" }}
              >
                <div className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#02c19d" }}>
                  Our Mission
                </div>
                <p className="text-white text-lg font-semibold leading-snug">
                  To secure the systems, develop the workforce, and advance the technology capabilities of the organizations that carry out our nation's most important work.
                </p>
              </div>
              {[
                { label: "Headquarters", value: "Dallas, Texas" },
                { label: "Designations", value: "WOSB · Minority-Owned · SBA" },
                { label: "Practice Areas", value: "Cybersecurity, AI Governance, IT Consulting, Workforce Development, Facility Services" },
                { label: "Clients Served", value: "Federal, State & Local Government, Commercial Enterprise" },
              ].map((item) => (
                <div key={item.label} className="flex gap-4 py-3 border-b border-gray-100">
                  <span className="text-xs font-bold uppercase tracking-wider w-32 flex-shrink-0 pt-0.5" style={{ color: "#008E73" }}>{item.label}</span>
                  <span className="text-sm text-gray-700">{item.value}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section style={{ backgroundColor: "#021a62" }} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="h-px w-8" style={{ backgroundColor: "#02c19d" }} />
              <span className="section-label" style={{ color: "#02c19d" }}>What We Stand For</span>
              <div className="h-px w-8" style={{ backgroundColor: "#02c19d" }} />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">Our Values</h2>
            <p className="text-gray-400 max-w-xl mx-auto text-sm">
              The principles that guide every engagement, proposal, and conversation.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-xl p-6 transition-transform duration-200 hover:-translate-y-1"
                style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(2,193,157,0.2)" }}
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: "rgba(2,193,157,0.15)" }}>
                  <span className="text-sm font-bold" style={{ color: "#02c19d" }}>◆</span>
                </div>
                <h3 className="text-lg font-black text-white mb-3">{value.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW WE WORK + OUR PEOPLE ── */}
      <section style={{ backgroundColor: "#f5f7f6" }} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Principles */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-8" style={{ backgroundColor: "#008E73" }} />
              <span className="section-label" style={{ color: "#008E73" }}>How We Work</span>
            </div>
            <h2 className="text-3xl font-black mb-8" style={{ color: "#021a62" }}>Our Operating Principles</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {principles.map((p) => (
                <div
                  key={p.title}
                  className="rounded-xl p-6 bg-white"
                  style={{ border: "1px solid #e5e7eb" }}
                >
                  <div className="w-1 h-8 rounded-full mb-4" style={{ backgroundColor: "#008E73" }} />
                  <h3 className="font-black text-sm mb-2" style={{ color: "#021a62" }}>{p.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Team */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-8" style={{ backgroundColor: "#008E73" }} />
              <span className="section-label" style={{ color: "#008E73" }}>Our People</span>
            </div>
            <h2 className="text-3xl font-black mb-2" style={{ color: "#021a62" }}>A Team Built for the Work</h2>
            <p className="text-gray-600 mb-8 max-w-2xl text-sm leading-relaxed">
              Our practitioners bring deep, domain-specific expertise across every discipline we serve — with active credentials and real-world experience in the most regulated industries.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {teamAreas.map((area) => (
                <div
                  key={area.title}
                  className="rounded-xl p-6 bg-white"
                  style={{ border: "1px solid #e5e7eb" }}
                >
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: "rgba(2,26,98,0.08)" }}>
                    <span className="text-xs font-bold" style={{ color: "#021a62" }}>◆</span>
                  </div>
                  <h3 className="text-sm font-black mb-2" style={{ color: "#021a62" }}>{area.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{area.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── DESIGNATIONS ── */}
      <section className="bg-white py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-xl font-black mb-2" style={{ color: "#021a62" }}>Business Designations</h3>
          <p className="text-sm text-gray-500 mb-8">
            These designations support set-aside and small business contracting opportunities across federal and state programs.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {["Woman-Owned Small Business (WOSB)", "Minority-Owned Business Enterprise", "Small Business (SBA)"].map((badge) => (
              <span key={badge} className="text-sm font-medium px-4 py-2 rounded-full text-white" style={{ backgroundColor: "#021a62" }}>
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
