import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Cyfendry Group delivers cybersecurity, AI governance, IT consulting, management consulting, workforce development, and facility services to government and commercial clients.",
};

const navLabels: Record<string, string> = {
  cybersecurity: "Cybersecurity",
  ai: "AI Governance",
  it: "IT Consulting",
  management: "Management",
  workforce: "Workforce",
  facility: "Facility",
};

const serviceCategories = [
  {
    id: "cybersecurity",
    title: "Cybersecurity and Risk Management",
    description:
      "Comprehensive security services to protect agency systems, data, and operations against evolving threats and regulatory requirements.",
    items: [
      { title: "Cyber Risk Assessment", desc: "Identify, quantify, and prioritize cybersecurity risks across your technology environment." },
      { title: "IT Security Audit", desc: "Independent review of security controls, policies, and infrastructure configurations." },
      { title: "GRC Program Development", desc: "Build governance, risk, and compliance frameworks aligned to NIST and CMMC standards." },
      { title: "Compliance Readiness", desc: "Gap analysis and roadmap development for FISMA, FedRAMP, CMMC, and state mandates." },
      { title: "SOC 2 Readiness Assessment", desc: "Evaluate security controls and identify gaps against SOC 2 Trust Services Criteria prior to formal audit." },
      { title: "BC/DR Planning", desc: "Develop, document, and test business continuity and disaster recovery plans to ensure organizational resilience." },
    ],
  },
  {
    id: "ai",
    title: "AI Governance and Data Analytics",
    description:
      "Responsible AI implementation and data strategy services aligned to federal executive orders and emerging frameworks.",
    items: [
      { title: "NIST AI RMF Implementation", desc: "Map and operationalize the AI Risk Management Framework across your agency." },
      { title: "AI Policy Development", desc: "Craft internal governance policies for AI acquisition, use, and oversight." },
      { title: "AI Risk Assessment", desc: "Evaluate risks of deployed and procured AI systems across bias, safety, and security dimensions." },
      { title: "Data Governance", desc: "Establish data quality, stewardship, and lifecycle management practices." },
      { title: "AI Maturity Assessment", desc: "Benchmark your organization against leading AI governance and adoption frameworks." },
      { title: "Advanced Analytics", desc: "Custom data analysis and visualization solutions to support mission decision-making." },
    ],
  },
  {
    id: "it",
    title: "Information Technology Consulting",
    description:
      "End-to-end IT consulting from architecture and migration through operations and program management.",
    items: [
      { title: "Cloud Security Architecture", desc: "Design secure, compliant cloud environments for AWS, Azure, and GCP workloads." },
      { title: "Cloud Migration Services", desc: "Plan and execute migrations to cloud platforms with security controls embedded from day one." },
      { title: "DevSecOps Implementation", desc: "Integrate security into CI/CD pipelines and software development lifecycles." },
      { title: "Systems Design", desc: "Design scalable, resilient technology architectures for government and enterprise use cases." },
      { title: "Digital Transformation", desc: "Modernize legacy systems and processes to improve efficiency and mission delivery." },
      { title: "IT Program Management", desc: "Provide senior program management for large-scale IT initiatives and modernization programs." },
    ],
  },
  {
    id: "management",
    title: "Management and Strategic Consulting",
    description:
      "Strategic and organizational advisory services to help agencies and enterprises operate with greater effectiveness.",
    items: [
      { title: "Strategic Advisory Services", desc: "Senior advisory engagements focused on technology strategy, workforce planning, and operational readiness." },
      { title: "Ongoing Advisory Retainer", desc: "Flexible retainer arrangements for continuous strategic guidance and executive support." },
      { title: "Policy Development", desc: "Draft, review, and implement operational policies aligned to regulatory and strategic requirements." },
    ],
  },
  {
    id: "workforce",
    title: "Workforce Development",
    description:
      "Professional cybersecurity training, certification preparation, and talent solutions that build a mission-ready workforce.",
    items: [
      { title: "Security+ and Certification Prep", desc: "Structured preparation for CompTIA Security+, CISSP, CISM, CISA, and other cybersecurity certifications with live instruction and practice exams." },
      { title: "CDPSE and AIGP Certification", desc: "Targeted training for privacy and AI governance certifications aligned to current federal priorities." },
      { title: "GRC Bootcamp", desc: "Intensive multi-day program covering governance, risk, and compliance fundamentals for practitioners." },
      { title: "Cloud and DevSecOps Training", desc: "Hands-on programs covering cloud security, containerization, and secure software delivery pipelines." },
      { title: "Talent Solutions", desc: "Sourcing, vetting, and placing cybersecurity professionals in government and commercial roles." },
      { title: "Youth Cybersecurity Programs", desc: "K-12 programs that introduce students to cybersecurity careers and foundational skills." },
    ],
  },
  {
    id: "facility",
    title: "Facility and Support Services",
    description:
      "Professional facility maintenance and cleaning services for government offices, courthouses, and commercial sites.",
    items: [
      { title: "Commercial Janitorial Services", desc: "Comprehensive daily and periodic cleaning for government and commercial facilities." },
      { title: "Building Cleaning Services", desc: "Deep cleaning, sanitization, and maintenance services for multi-story facilities." },
      { title: "Facility Maintenance Support", desc: "Ongoing facility upkeep including floor care, restroom services, and common area maintenance." },
    ],
  },
];

const categoryIcons: Record<string, React.ReactNode> = {
  cybersecurity: (
    <svg viewBox="0 0 24 24" fill="none" stroke="#02c19d" strokeWidth="1.5" className="w-7 h-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.955 11.955 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  ),
  ai: (
    <svg viewBox="0 0 24 24" fill="none" stroke="#02c19d" strokeWidth="1.5" className="w-7 h-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
    </svg>
  ),
  it: (
    <svg viewBox="0 0 24 24" fill="none" stroke="#02c19d" strokeWidth="1.5" className="w-7 h-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" />
    </svg>
  ),
  management: (
    <svg viewBox="0 0 24 24" fill="none" stroke="#02c19d" strokeWidth="1.5" className="w-7 h-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
    </svg>
  ),
  workforce: (
    <svg viewBox="0 0 24 24" fill="none" stroke="#02c19d" strokeWidth="1.5" className="w-7 h-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
    </svg>
  ),
  facility: (
    <svg viewBox="0 0 24 24" fill="none" stroke="#02c19d" strokeWidth="1.5" className="w-7 h-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
    </svg>
  ),
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-48 pb-16 relative overflow-hidden" style={{ backgroundColor: "#021a62" }}>
        <div className="absolute inset-0 brand-pattern opacity-40" />
        <div
          className="absolute bottom-0 right-0 w-[500px] h-[300px] rounded-full opacity-15 blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, #02c19d 0%, transparent 70%)" }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8" style={{ backgroundColor: "#02c19d" }} />
            <span className="section-label" style={{ color: "#02c19d" }}>Service Portfolio</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white font-black mb-4 leading-tight">
            Capabilities<br />
            <span style={{ color: "#02c19d" }}>and Services</span>
          </h1>
          <p className="text-gray-300 max-w-2xl text-lg leading-relaxed font-light">
            Scalable, certified delivery across six core practice areas for federal, state, and commercial clients.
          </p>
        </div>
      </section>

      {/* Quick nav */}
      <section className="bg-white border-b border-gray-100 sticky top-[120px] z-40">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="flex gap-1.5 overflow-x-auto py-3 scrollbar-hide">
            {serviceCategories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="flex-shrink-0 text-xs font-semibold px-4 py-2 rounded-full transition-all duration-200 whitespace-nowrap text-gray-600 hover:text-white hover:bg-navy"
                style={{ border: "1px solid #e5e7eb" }}
              >
                {navLabels[cat.id]}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Service categories */}
      <section style={{ backgroundColor: "#f5f7f6" }} className="py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 space-y-20">
          {serviceCategories.map((category) => (
            <div key={category.id} id={category.id} className="scroll-mt-36">
              <div className="flex items-start gap-5 mb-8">
                <div
                  className="w-14 h-14 flex items-center justify-center rounded-xl flex-shrink-0"
                  style={{ backgroundColor: "#021a62" }}
                >
                  {categoryIcons[category.id]}
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl sm:text-3xl font-black mb-2" style={{ color: "#021a62" }}>
                    {category.title}
                  </h2>
                  <p className="text-gray-600 max-w-2xl leading-relaxed">{category.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.items.map((item) => (
                  <div
                    key={item.title}
                    className="bg-white rounded-xl p-5 border border-gray-100 hover:border-teal hover:shadow-sm transition-all duration-200 group"
                  >
                    <div className="w-6 h-[2px] mb-3 rounded-full" style={{ backgroundColor: "#02c19d" }} />
                    <h3 className="font-bold text-sm mb-2 leading-snug group-hover:text-teal transition-colors duration-200" style={{ color: "#021a62" }}>
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "#021a62" }} className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 brand-pattern opacity-30" />
        <div className="relative z-10 max-w-3xl mx-auto px-5 sm:px-8 lg:px-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Let&apos;s Work Together.
          </h2>
          <p className="text-gray-400 mb-8 leading-relaxed">
            We can discuss your requirements, walk through our capabilities, or explore how our services align with your program.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block px-8 py-4 font-bold rounded text-white transition-all duration-200 hover:opacity-90 text-sm"
              style={{ backgroundColor: "#008E73" }}
            >
              Contact Us
            </Link>
            <Link
              href="/capability-statement"
              className="inline-block px-8 py-4 font-bold rounded border-2 border-white/30 text-white hover:border-white/70 hover:bg-white/10 transition-all duration-200 text-sm"
            >
              Capability Statement
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
