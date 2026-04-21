import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "Cyfendry | Government Technology and Security Solutions",
    template: "%s | Cyfendry",
  },
  description:
    "Cyfendry delivers cybersecurity, IT consulting, AI governance, workforce development, and facility solutions to federal agencies, state governments, and commercial enterprises.",
  keywords: [
    "government contracting",
    "cybersecurity",
    "IT consulting",
    "AI governance",
    "WOSB",
    "small business",
    "federal contractor",
    "Texas",
  ],
};

export const viewport: Viewport = {
  themeColor: "#008E73",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} font-sans antialiased`}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
