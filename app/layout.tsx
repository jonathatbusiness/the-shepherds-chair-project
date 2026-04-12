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

export const metadata: Metadata = {
  title: "The Shepherd's Chair — Portland Barbershop",
  description:
    "Three Portland locations. One standard of care. Your barber remembers.",
  openGraph: {
    title: "The Shepherd's Chair",
    description: "Craft barbershop rooted in Portland, OR. Est. 2017.",
    locale: "en_US",
    type: "website",
  },
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
