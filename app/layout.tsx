import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  DM_Serif_Display,
  Plus_Jakarta_Sans,
  Lora,
} from "next/font/google";
import "./globals.css";

// ── Google Fonts (self-hosted via next/font) ──────────────────────────────────

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-dm-serif",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jakarta",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
  variable: "--font-lora",
  display: "swap",
});

// ── Metadata ──────────────────────────────────────────────────────────────────
// Character limits (2026):
//  title ............. 55 chars  (Google ~600px)
//  description ........ 155 chars mobile / 160 desktop
//  OG title ........... 60 chars
//  OG description ..... 65 chars (Facebook 1–2 lines)
//  Twitter title ...... 70 chars
//  Twitter description  200 chars

const BASE_URL = "https://www.theshepherdschair.com"; // ← update if domain differs

export const metadata: Metadata = {
  // ── Base URL — required for OG images and canonical to resolve correctly ──
  metadataBase: new URL(BASE_URL),

  // ── Title ── 54 chars ✅
  title: "The Shepherd's Chair — Portland Barbershop · Est. 2017",

  // ── Description ── 139 chars ✅
  description:
    "Craft barbershop with three Portland locations — Alberta St., Hawthorne & NW 23rd. Your barber remembers your name and your cut. Est. 2017.",

  // ── Canonical ──────────────────────────────────────────────────────────────
  alternates: {
    canonical: "/",
  },

  // ── Robots ─────────────────────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ── Open Graph ─────────────────────────────────────────────────────────────
  openGraph: {
    // OG title ── 20 chars ✅
    title: "The Shepherd's Chair",
    // OG description ── 47 chars ✅
    description: "Three Portland locations. One standard of care.",
    url: BASE_URL,
    siteName: "The Shepherd's Chair",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og/og-image-default.webp",
        width: 1200,
        height: 630,
        alt: "The Shepherd's Chair — Portland Barbershop interior with vintage leather chairs",
      },
    ],
  },

  // ── Twitter / X Card ───────────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    // Twitter title ── 20 chars ✅ (inherits OG title if omitted, but explicit is safer)
    title: "The Shepherd's Chair — Portland Barbershop",
    // Twitter description ── 137 chars ✅
    description:
      "Craft barbershop rooted in Portland, OR — Alberta St., Hawthorne & NW 23rd. Three locations, one standard of care. Your barber remembers.",
    images: ["/og/og-image-default.webp"],
    // site: "@theshepherdschair", // ← uncomment when X handle is confirmed
  },

  // ── Extra signals ──────────────────────────────────────────────────────────
  keywords: [
    "barbershop Portland",
    "barber Portland Oregon",
    "Alberta St barber",
    "Hawthorne barber",
    "NW 23rd barber",
    "The Shepherd's Chair",
    "craft barbershop",
    "straight razor shave Portland",
    "skin fade Portland",
  ],
};

// ── Layout ────────────────────────────────────────────────────────────────────

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`
        ${cormorant.variable}
        ${dmSerif.variable}
        ${jakarta.variable}
        ${lora.variable}
      `}
    >
      <body className="bg-linen-white font-jakarta antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
