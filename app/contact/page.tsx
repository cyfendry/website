"use client";

import { useState } from "react";
import Link from "next/link";

const inquiryTypes = [
  "Request for Information (RFI)",
  "Request for Proposal (RFP)",
  "Subcontracting Opportunity",
  "Training and Workforce Development",
  "Capability Briefing",
  "Teaming Partnership",
  "Other",
];

const contractIds = [
  { label: "UEI", value: "HSM1K7XBW6M5" },
  { label: "CAGE Code", value: "1MZS1" },
  { label: "Primary NAICS", value: "541512" },
  { label: "SAM.gov", value: "Active" },
];

type FormFields = {
  firstName: string;
  lastName: string;
  organization: string;
  title: string;
  email: string;
  inquiryType: string;
  message: string;
};

export default function ContactPage() {
  const [form, setForm] = useState<FormFields>({
    firstName: "",
    lastName: "",
    organization: "",
    title: "",
    email: "",
    inquiryType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const update = (field: keyof FormFields) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass =
    "w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none transition-colors duration-200";
  const inputStyle = { fontFamily: "var(--font-sans)" };
  const labelClass =
    "block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider";

  return (
    <>
      {/* Hero */}
      <section
        className="pt-48 pb-16 relative overflow-hidden"
        style={{ backgroundColor: "#021a62" }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="inline-block text-xs font-semibold uppercase tracking-widest mb-4 px-4 py-1.5 rounded-full"
            style={{ color: "#02c19d", border: "1px solid rgba(0,184,148,0.4)" }}
          >
            Get in Touch
          </div>
          <h1
            className="text-4xl sm:text-5xl text-white mb-4"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Contact Cyfendry Group
          </h1>
          <p className="text-gray-400 max-w-2xl text-lg">
            We welcome inquiries from contracting officers, procurement teams, prime contractors, and potential teaming partners.
          </p>
        </div>
      </section>

      {/* Main */}
      <section style={{ backgroundColor: "#f4f7f6" }} className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Left column */}
            <div>
              <h2
                className="text-2xl mb-8"
                style={{ fontFamily: "var(--font-sans)", color: "#021a62" }}
              >
                How to Reach Us
              </h2>

              <div className="space-y-6 mb-12">
                {[
                  {
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    ),
                    label: "Email",
                    value: "info@cyfendry.com",
                    href: "mailto:info@cyfendry.com",
                  },
                  {
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                    ),
                    label: "Location",
                    value: "Dallas, Texas",
                    href: null,
                  },
                  {
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                    ),
                    label: "Phone",
                    value: "(945) 248-8808",
                    href: "tel:+19452488808",
                  },
                  {
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                      </svg>
                    ),
                    label: "Capability Statement",
                    value: "View our full capability statement",
                    href: "/capability-statement",
                  },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "#021a62", color: "#02c19d" }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-0.5">
                        {item.label}
                      </div>
                      {item.href ? (
                        <Link
                          href={item.href}
                          className="text-sm font-medium transition-colors duration-200 hover:underline"
                          style={{ color: "#008E73" }}
                        >
                          {item.value}
                        </Link>
                      ) : (
                        <div className="text-sm font-medium text-gray-700">{item.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Contract identifiers */}
              <div className="rounded-xl p-6" style={{ backgroundColor: "#021a62" }}>
                <h3
                  className="text-sm font-semibold mb-5"
                  style={{ color: "#02c19d", fontFamily: "var(--font-sans)" }}
                >
                  Contract Identifiers
                </h3>
                <div className="space-y-3">
                  {contractIds.map((item) => (
                    <div
                      key={item.label}
                      className="flex justify-between items-center border-b border-white/10 pb-2.5 text-sm"
                    >
                      <span className="text-gray-400">{item.label}</span>
                      <span className="text-white font-medium">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right column: form */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
              {submitted ? (
                <div className="text-center py-14">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center text-2xl mx-auto mb-5"
                    style={{
                      backgroundColor: "rgba(0,184,148,0.1)",
                      border: "2px solid rgba(0,184,148,0.4)",
                    }}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="#02c19d" strokeWidth="2" className="w-8 h-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <h3
                    className="text-2xl mb-3"
                    style={{ fontFamily: "var(--font-sans)", color: "#021a62" }}
                  >
                    Message Received
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for reaching out. A member of our team will be in touch shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-sm font-medium underline underline-offset-4 transition-colors duration-200"
                    style={{ color: "#008E73" }}
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <>
                  <h2
                    className="text-xl font-semibold mb-6"
                    style={{ fontFamily: "var(--font-sans)", color: "#021a62" }}
                  >
                    Submit an Inquiry
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className={labelClass}>First Name</label>
                        <input
                          type="text"
                          required
                          value={form.firstName}
                          onChange={update("firstName")}
                          className={inputClass}
                          style={inputStyle}
                          placeholder="Jane"
                        />
                      </div>
                      <div>
                        <label className={labelClass}>Last Name</label>
                        <input
                          type="text"
                          required
                          value={form.lastName}
                          onChange={update("lastName")}
                          className={inputClass}
                          style={inputStyle}
                          placeholder="Smith"
                        />
                      </div>
                    </div>

                    <div>
                      <label className={labelClass}>Agency or Organization</label>
                      <input
                        type="text"
                        required
                        value={form.organization}
                        onChange={update("organization")}
                        className={inputClass}
                        style={inputStyle}
                        placeholder="Department of ..."
                      />
                    </div>

                    <div>
                      <label className={labelClass}>Title</label>
                      <input
                        type="text"
                        value={form.title}
                        onChange={update("title")}
                        className={inputClass}
                        style={inputStyle}
                        placeholder="Contracting Officer"
                      />
                    </div>

                    <div>
                      <label className={labelClass}>Email Address</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={update("email")}
                        className={inputClass}
                        style={inputStyle}
                        placeholder="jsmith@agency.gov"
                      />
                    </div>

                    <div>
                      <label className={labelClass}>Type of Inquiry</label>
                      <select
                        required
                        value={form.inquiryType}
                        onChange={update("inquiryType")}
                        className={`${inputClass} bg-white`}
                        style={inputStyle}
                      >
                        <option value="" disabled>
                          Select inquiry type...
                        </option>
                        {inquiryTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className={labelClass}>Message</label>
                      <textarea
                        required
                        rows={4}
                        value={form.message}
                        onChange={update("message")}
                        className={`${inputClass} resize-none`}
                        style={inputStyle}
                        placeholder="Describe your requirement, project scope, or question..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 font-semibold text-white rounded-lg transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
                      style={{ backgroundColor: "#02c19d" }}
                    >
                      Submit Inquiry
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
