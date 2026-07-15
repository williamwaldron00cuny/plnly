import type { Metadata } from "next";
import { Outfit, Newsreader, IBM_Plex_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { CalInit } from "@/components/CalInit";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyCTA } from "@/components/StickyCTA";
import "@plnly/ui/styles.css";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["300", "400", "500", "600"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "PLNLY — Built bespoke. Yours to run.",
  description:
    "Personal AI systems for your home and life — set up with you, then handed over. Brooklyn, NY, and online.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${newsreader.variable} ${ibmPlexMono.variable}`}
    >
      <body>
        <div className="plnly-grain" />
        <CalInit />
        <Header />
        {children}
        <Footer />
        <StickyCTA />
        <Analytics />
      </body>
    </html>
  );
}
