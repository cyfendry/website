import type { Metadata } from "next";
import Link from "next/link";
import IndustryStats from "@/components/IndustryStats";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Cyfendry | Government Technology and Security Solutions",
  description:
    "Cyfendry delivers cybersecurity, IT consulting, AI governance, workforce development, and facility solutions to federal agencies, state governments, and commercial enterprises.",
};

const services = [
  {
    id: "cybersecurity",
    label: "",
    title: "Cybersecurity and Risk Management",
    desc: "Cyber risk assessments, GRC program development, compliance readiness, penetration testing, and incident response planning.",
    href: "/services#cybersecurity",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.955 11.955 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    id: "ai",
    label: "",
    title: "AI Governance and Data Analytics",
    desc: "NIST AI RMF implementation, AI policy development, AI risk assessment, data governance, and maturity benchmarking.",
    href: "/services#ai",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
      </svg>
    ),
  },
  {
    id: "it",
    label: "",
    title: "Information Technology Consulting",
    desc: "Cloud security architecture, DevSecOps implementation, systems design, digital transformation, and IT program management.",
    href: "/services#it",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" />
      </svg>
    ),
  },
  {
    id: "workforce",
    label: "",
    title: "Workforce Development",
    desc: "CISSP/CISM/CISA/CDPSE certification prep, GRC bootcamps, Cloud and DevSecOps training, and K-12 youth cybersecurity programs.",
    href: "/workforce",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
  },
  {
    id: "management",
    label: "",
    title: "Management Consulting",
    desc: "Strategic advisory services, organizational effectiveness, policy development, and executive retainer engagements.",
    href: "/services#management",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
      </svg>
    ),
  },
  {
    id: "facility",
    label: "",
    title: "Facility and Support Services",
    desc: "Commercial janitorial, building cleaning, and facility maintenance support for government offices and commercial sites.",
    href: "/services#facility",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
];

const whyUs = [
  {
    label: "Our Mission",
    text: "To deliver rigorous cybersecurity, technology, and advisory services to the agencies and organizations that need them most, closing the gap between government requirements and private-sector capability.",
  },
  {
    label: "Our Approach",
    text: "Every engagement is led by credentialed practitioners with direct accountability to outcomes. We bring Fortune 500 discipline and deep regulatory fluency to every program we touch. No ramp-up required.",
  },
  {
    label: "Our Qualifications",
    text: "Active certifications across CISSP, CISM, CISA, CDPSE, and AIGP. Regulatory expertise spanning FISMA, FedRAMP, CMMC, NIST SP 800 series, and the NIST AI RMF. Registered WOSB with active SAM.gov standing.",
  },
  {
    label: "Our Commitment",
    text: "Integrity, precision, and accountability in every engagement. We measure success by client outcomes, not deliverable counts, and we hold that standard from proposal through closeout.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-[94vh] flex items-center overflow-hidden">
        <div className="absolute inset-0" style={{ background: "linear-gradient(160deg, #021a62 0%, #011e4a 50%, #006b56 100%)" }} />
        <div className="absolute inset-0 brand-pattern" />
        {/* Teal glow bottom-right */}
        <div
          className="absolute bottom-0 right-0 w-[600px] h-[400px] rounded-full opacity-20 blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, #02c19d 0%, transparent 70%)" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 w-full pt-48 pb-20">
          <div className="max-w-5xl mx-auto text-center">
            <h1
              className="hero-1 text-5xl sm:text-7xl lg:text-8xl text-white mb-6 leading-[1.03]"
              style={{ fontWeight: 800 }}
            >
              Mission-Ready<br />
              <span style={{ color: "#02c19d" }}>Technology</span> and<br />
              Security Solutions
            </h1>

            <p className="hero-2 text-lg sm:text-xl text-gray-300 mb-10 leading-relaxed font-light max-w-2xl mx-auto">
              Advanced security, technology consulting, and workforce development for organizations that operate at the highest standards.
            </p>

            <div className="hero-3 flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/capability-statement"
                className="inline-flex items-center justify-center px-7 py-3.5 font-bold rounded text-white border-2 border-white/30 hover:border-white/70 hover:bg-white/10 transition-all duration-200 text-sm tracking-wide"
              >
                Capability Statement
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 font-bold rounded text-white transition-all duration-200 text-sm tracking-wide hover:opacity-90 active:scale-95"
                style={{ backgroundColor: "#008E73" }}
              >
                Explore Services
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── INDUSTRY STATS ── */}
      <section style={{ backgroundColor: "#021a62" }} className="py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="h-px w-8" style={{ backgroundColor: "#02c19d" }} />
              <span className="section-label" style={{ color: "#02c19d" }}>The Threat Landscape</span>
              <div className="h-px w-8" style={{ backgroundColor: "#02c19d" }} />
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Cyber Risk by the Numbers
            </h2>
          </div>
          <IndustryStats />
        </div>
      </section>

      <div aria-hidden="true" style={{ lineHeight: 0 }}>
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block", width: "100%", height: "60px" }}>
          <polygon points="0,0 1440,0 0,60" fill="#021a62"/>
          <polygon points="0,60 1440,0 1440,60" fill="#f5f7f6"/>
        </svg>
      </div>

      {/* ── SERVICES ── */}
      <section style={{ backgroundColor: "#f5f7f6" }} className="py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="h-px w-8" style={{ backgroundColor: "#008E73" }} />
                <span className="section-label" style={{ color: "#008E73" }}>Core Capabilities</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black" style={{ color: "#021a62" }}>
                What We Deliver
              </h2>
            </div>
            <Link
              href="/services"
              className="text-sm font-bold flex items-center gap-1 transition-colors duration-200 flex-shrink-0"
              style={{ color: "#008E73" }}
            >
              View all services
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <FadeIn key={s.id} delay={i * 80} className="h-full">
              <Link
                href={s.href}
                className="group rounded-xl overflow-hidden flex flex-col h-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-0.5"
                style={{ backgroundColor: "#021a62", border: "1px solid rgba(2,193,157,0.15)" }}
              >
                <div
                  className="h-[3px] w-full"
                  style={{ background: "linear-gradient(90deg, #02c19d, #008E73)" }}
                />
                <div className="p-7 flex flex-col flex-1">
                  <div className="mb-5">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "rgba(2,193,157,0.1)", border: "1px solid rgba(2,193,157,0.25)", color: "#02c19d" }}
                    >
                      {s.icon}
                    </div>
                  </div>
                  <h3 className="font-bold text-base mb-3 leading-snug text-white">{s.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed flex-1">{s.desc}</p>
                  <div
                    className="mt-5 text-xs font-bold flex items-center gap-1.5 group-hover:gap-2.5 transition-all duration-200"
                    style={{ color: "#02c19d" }}
                  >
                    Learn more
                    <svg viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <div aria-hidden="true" style={{ lineHeight: 0 }}>
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block", width: "100%", height: "60px" }}>
          <polygon points="0,0 1440,0 1440,60" fill="#f5f7f6"/>
          <polygon points="0,0 0,60 1440,60" fill="#021a62"/>
        </svg>
      </div>

      {/* ── WHY CYFENDRY ── */}
      <section style={{ backgroundColor: "#021a62" }} className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 brand-pattern opacity-50" />
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8" style={{ backgroundColor: "#02c19d" }} />
                <span className="section-label" style={{ color: "#02c19d" }}>Who We Are</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-5">
                Built for the Mission
              </h2>
              <p className="text-gray-400 leading-relaxed mb-8 max-w-lg text-sm">
                Cyfendry Group was founded on the belief that certified small businesses can deliver the highest-quality results to the agencies that need them most. We are a Woman-Owned, minority-owned firm with the credentials, clearance pedigree, and regulatory expertise to compete on merit.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-sm font-bold transition-colors duration-200"
                  style={{ color: "#02c19d" }}
                >
                  About the firm
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </Link>
                <Link
                  href="/government"
                  className="inline-flex items-center gap-2 text-sm font-bold transition-colors duration-200 text-gray-500 hover:text-gray-300"
                >
                  Government contracting
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {whyUs.map((item, i) => (
                <FadeIn key={i} delay={i * 80}>
                <div
                  className="rounded-xl p-5"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(2,193,157,0.15)",
                  }}
                >
                  <div
                    className="w-7 h-7 rounded-md flex items-center justify-center mb-3 text-[11px] font-black text-white flex-shrink-0"
                    style={{ backgroundColor: "#008E73" }}
                  >
                    0{i + 1}
                  </div>
                  <div className="text-sm font-bold text-white mb-1.5">{item.label}</div>
                  <div className="text-xs text-gray-400 leading-relaxed">{item.text}</div>
                </div>
                </FadeIn>
              ))}
            </div>

          </div>
        </div>
      </section>

      <div aria-hidden="true" style={{ lineHeight: 0 }}>
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block", width: "100%", height: "60px" }}>
          <polygon points="0,0 1440,0 0,60" fill="#021a62"/>
          <polygon points="0,60 1440,0 1440,60" fill="#f5f7f6"/>
        </svg>
      </div>

      {/* ── FINAL CTA ── */}
      <section className="py-16 relative overflow-hidden" style={{ backgroundColor: "#f5f7f6" }}>
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-black mb-4" style={{ color: "#021a62" }}>
            Let&apos;s Work Together.
          </h2>
          <p className="text-gray-500 mb-8 max-w-xl mx-auto">
            We transform how organizations approach security, technology, and mission readiness.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 font-bold rounded text-white transition-all duration-200 hover:opacity-90 text-sm"
              style={{ backgroundColor: "#021a62" }}
            >
              Contact Us
            </Link>
            <Link
              href="/capability-statement"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 font-bold rounded text-sm transition-all duration-200 border-2 hover:bg-navy hover:text-white"
              style={{ borderColor: "#021a62", color: "#021a62" }}
            >
              Capability Statement
            </Link>
          </div>
        </div>
      </section>

      <div aria-hidden="true" style={{ lineHeight: 0 }}>
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block", width: "100%", height: "60px" }}>
          <polygon points="0,0 1440,0 1440,60" fill="#f5f7f6"/>
          <polygon points="0,0 0,60 1440,60" fill="#021a62"/>
        </svg>
      </div>
    </>
  );
}
