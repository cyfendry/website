import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#021a62" }} className="text-white">

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex mb-3">
              <Image
                src="/Cyfendry_Logo_02_Gradient_White-Text_Transparent.png"
                alt="Cyfendry Group"
                width={2400}
                height={1815}
                style={{ height: "110px", width: "auto" }}
              />
            </Link>
            <p className="text-xs text-gray-500 leading-relaxed max-w-[200px]">
              Securing organizations and developing the professionals who lead them.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="section-label mb-5" style={{ color: "#02c19d" }}>
              Services
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              {[
                ["Cybersecurity and GRC", "/services#cybersecurity"],
                ["AI Governance", "/services#ai"],
                ["IT Consulting", "/services#it"],
                ["Management Consulting", "/services#management"],
                ["Facility Services", "/services#facility"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="hover:text-white transition-colors duration-200 flex items-center gap-1.5">
                    <span style={{ color: "#008E73" }} className="text-xs">›</span>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Workforce */}
          <div>
            <h4 className="section-label mb-5" style={{ color: "#02c19d" }}>
              Workforce
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              {[
                ["Training Programs", "/workforce#training"],
                ["Certification Prep", "/workforce#certification"],
                ["GRC Bootcamp", "/workforce#grc"],
                ["Talent Solutions", "/workforce#talent"],
                ["Youth Programs", "/workforce#youth"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="hover:text-white transition-colors duration-200 flex items-center gap-1.5">
                    <span style={{ color: "#008E73" }} className="text-xs">›</span>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="section-label mb-5" style={{ color: "#02c19d" }}>
              Company
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-400 mb-6">
              {[
                ["About Us", "/about"],
                ["Government", "/government"],
                ["Capability Statement", "/capability-statement"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="hover:text-white transition-colors duration-200 flex items-center gap-1.5">
                    <span style={{ color: "#008E73" }} className="text-xs">›</span>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="text-xs text-gray-500 space-y-1.5 border-t border-white/10 pt-4">
              <div>info@cyfendry.com</div>
              <div>(945) 248-8808</div>
              <div>Dallas, Texas</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">

            {/* Slogan */}
            <div className="text-2xl sm:text-3xl font-black tracking-tight leading-none">
              <span className="text-white">ALWAYS</span>{" "}
              <span style={{ color: "#02c19d" }} className="italic font-light">mission-ready.</span>
            </div>

            <p className="text-[11px] text-gray-500">© 2026 Cyfendry Group LLC. All rights reserved.</p>

          </div>
        </div>
      </div>
    </footer>
  );
}
