import type { Metadata, Viewport } from "next";
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

const SITE_URL = "https://plnly.co";
const SITE_TITLE = "PLNLY — Built bespoke. Yours to run.";
const SITE_DESCRIPTION =
  "Personal AI systems for your home and life — set up with you, then handed over. Brooklyn, NY, and online.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: "PLNLY",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: "#06080A",
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
        <a href="#main-content" className="plnly-skip-link">
          Skip to content
        </a>
        <div className="plnly-grain" />
        <CalInit />
        <Header />
        <div id="main-content">{children}</div>
        <Footer />
        <StickyCTA />
        <Analytics />
      </body>
    </html>
  );
}
