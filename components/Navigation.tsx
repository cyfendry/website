"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/government", label: "Government" },
  { href: "/workforce", label: "Workforce" },
  { href: "/about", label: "About" },
];

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: scrolled ? "rgba(2,26,98,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(14px)" : "none",
        boxShadow: scrolled ? "0 4px 32px rgba(2,26,98,0.5)" : "none",
        borderBottom: "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between h-[120px]">

          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0" aria-label="Cyfendry Group home">
            <Image
              src="/Cyfendry_Logo_02_Gradient_White-Text_Transparent.png"
              alt="Cyfendry Group"
              width={2400}
              height={1815}
              style={{ height: "114px", width: "auto" }}
              priority
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-[13px] font-600 px-3.5 py-2 rounded transition-all duration-200"
                style={{
                  fontWeight: 600,
                  color: pathname === link.href ? "#02c19d" : "#c8d0e0",
                }}
                onMouseEnter={(e) => {
                  if (pathname !== link.href)
                    (e.currentTarget as HTMLElement).style.color = "#02c19d";
                }}
                onMouseLeave={(e) => {
                  if (pathname !== link.href)
                    (e.currentTarget as HTMLElement).style.color = "#c8d0e0";
                }}
              >
                {link.label}
                {pathname === link.href && (
                  <span
                    className="absolute bottom-0 left-3.5 right-3.5 h-[2px] rounded-full"
                    style={{ backgroundColor: "#02c19d" }}
                  />
                )}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-3 text-[13px] font-700 px-5 py-2.5 rounded text-white transition-all duration-200 hover:opacity-90 active:scale-95"
              style={{ fontWeight: 700, backgroundColor: "#008E73" }}
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-[5px]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <span
              className="block h-[2px] w-[22px] bg-white rounded-full transition-all duration-300 origin-top-left"
              style={{ transform: menuOpen ? "rotate(45deg) translateX(1px)" : "none" }}
            />
            <span
              className="block h-[2px] w-[22px] bg-white rounded-full transition-all duration-300"
              style={{ opacity: menuOpen ? 0 : 1, transform: menuOpen ? "scaleX(0)" : "scaleX(1)" }}
            />
            <span
              className="block h-[2px] w-[22px] bg-white rounded-full transition-all duration-300 origin-bottom-left"
              style={{ transform: menuOpen ? "rotate(-45deg) translateX(1px)" : "none" }}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300 border-t border-white/10"
        style={{ maxHeight: menuOpen ? "420px" : "0", backgroundColor: "#021a62" }}
      >
        <div className="px-5 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center gap-2 text-[13px] font-semibold py-2.5 px-3 rounded transition-colors duration-200"
              style={{
                color: pathname === link.href ? "#02c19d" : "#c8d0e0",
                backgroundColor: pathname === link.href ? "rgba(2,193,157,0.08)" : "transparent",
              }}
            >
              {pathname === link.href && (
                <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: "#02c19d" }} />
              )}
              {link.label}
            </Link>
          ))}
          <div className="pt-2 pb-1">
            <Link
              href="/contact"
              className="block text-[13px] font-bold px-3 py-3 rounded text-white text-center"
              style={{ backgroundColor: "#008E73" }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
