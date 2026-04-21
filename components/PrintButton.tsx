"use client";

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="text-sm font-semibold px-5 py-2.5 rounded text-white transition-all duration-200 hover:opacity-90"
      style={{ backgroundColor: "#021a62" }}
    >
      Print / Save PDF
    </button>
  );
}
