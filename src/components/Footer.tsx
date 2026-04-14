"use client";

import { useState } from "react";
import { MapPin, Clock, ArrowUpRight } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
// ── Types ──────────────────────────────────────────────────────────────────

interface FooterLocation {
  name: string;
  address: string;
  city: string;
  hours: string;
  mapsUrl: string;
}

// ── Data ───────────────────────────────────────────────────────────────────

const FOOTER_LOCATIONS: FooterLocation[] = [
  {
    name: "Alberta Arts District",
    address: "2214 NE Alberta St",
    city: "Portland, OR 97211",
    hours: "Tue–Sat 9am–7pm · Mon 10–6",
    mapsUrl: "https://maps.google.com/?q=2214+NE+Alberta+St+Portland+OR",
  },
  {
    name: "NW District",
    address: "1180 NW 23rd Ave",
    city: "Portland, OR 97210",
    hours: "Tue–Sat 9am–7pm · Mon 10–6",
    mapsUrl: "https://maps.google.com/?q=1180+NW+23rd+Ave+Portland+OR",
  },
  {
    name: "Hawthorne",
    address: "4312 SE Hawthorne Blvd",
    city: "Portland, OR 97215",
    hours: "Tue–Sat 9am–7pm · Mon 10–6",
    mapsUrl: "https://maps.google.com/?q=4312+SE+Hawthorne+Blvd+Portland+OR",
  },
];

const NAV_LINKS = [
  { label: "The Work", href: "#services" },
  { label: "The Craftspeople", href: "#team" },
  { label: "Locations", href: "#locations" },
  { label: "Community", href: "#community" },
  { label: "Franchise", href: "#franchise" },
  { label: "Booking", href: "#booking" },
];

// ── Main component ─────────────────────────────────────────────────────────

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleNewsletter(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  }

  return (
    <footer
      className="bg-deep-grove border-t border-warm-parchment/8"
      role="contentinfo"
    >
      {/* ── Top gold rule ── */}
      <div
        aria-hidden="true"
        className="h-px w-full"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(180,154,61,0.3), transparent)",
        }}
      />

      <div className="section-container pt-16 md:pt-20 pb-10 md:pb-12">
        {/* ── Row 1: Logo + newsletter ── */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12 mb-16 pb-16 border-b border-warm-parchment/8">
          {/* Logo mark + wordmark */}
          <div className="flex flex-col gap-5">
            <a
              href="#hero"
              className="flex items-center gap-3 group"
              aria-label="The Shepherd's Chair — scroll to top"
            >
              <img
                src="/images/brand/logo-crook-mark-gold.png"
                alt="The Shepherd's Chair mark"
                width={28}
                height={40}
                className="group-hover:opacity-70 transition-opacity duration-300"
              />
              <div className="leading-none">
                <p className="font-jakarta font-semibold text-warm-parchment text-[10px] tracking-[0.26em] uppercase mb-0.5">
                  The Shepherd&apos;s
                </p>
                <p className="font-cormorant text-shepherds-gold text-xl font-semibold leading-none">
                  Chair
                </p>
              </div>
            </a>

            {/* Tagline */}
            <p className="font-lora italic text-warm-parchment/28 text-sm leading-relaxed max-w-[220px]">
              Craft barbershop rooted in Portland. Est. 2017.
            </p>
          </div>

          {/* Newsletter */}
          <div className="max-w-sm w-full">
            <p className="font-jakarta text-warm-parchment/60 text-sm leading-relaxed mb-5">
              Get on our list. We don&apos;t send much — only what&apos;s worth
              reading.
            </p>

            {submitted ? (
              <div className="flex items-center gap-3 py-3">
                <span className="w-5 h-5 border border-shepherds-gold/50 flex items-center justify-center shrink-0">
                  <span className="w-2 h-2 bg-shepherds-gold rounded-full" />
                </span>
                <p className="font-jakarta text-warm-parchment/55 text-sm">
                  You&apos;re on the list.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleNewsletter}
                className="flex"
                aria-label="Newsletter signup"
              >
                <label htmlFor="footer-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="footer-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  required
                  className="
                    flex-1 min-w-0
                    bg-warm-parchment/6 border border-warm-parchment/15 border-r-0
                    text-warm-parchment placeholder-warm-parchment/25
                    font-jakarta text-sm px-4 py-3
                    focus:outline-none focus:border-shepherds-gold/40
                    transition-colors duration-300
                  "
                />
                <button
                  type="submit"
                  className="
                    shrink-0 font-jakarta font-semibold text-[10px] tracking-[0.2em] uppercase
                    bg-shepherds-gold text-forest-ink px-5 py-3
                    hover:bg-antique-gold transition-colors duration-300
                  "
                >
                  Join
                </button>
              </form>
            )}
          </div>
        </div>

        {/* ── Row 2: Locations + nav ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Three locations */}
          {FOOTER_LOCATIONS.map((loc) => (
            <div key={loc.name}>
              <p className="label text-shepherds-gold mb-4">{loc.name}</p>

              <a
                href={loc.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-2 items-start mb-3 hover:opacity-70 transition-opacity duration-300 group"
                aria-label={`Open ${loc.name} in Maps`}
              >
                <MapPin
                  className="w-3 h-3 text-brand-sage shrink-0 mt-[3px]"
                  aria-hidden="true"
                />
                <div>
                  <p className="font-jakarta text-warm-parchment/55 text-sm">
                    {loc.address}
                  </p>
                  <p className="font-jakarta text-warm-parchment/30 text-sm">
                    {loc.city}
                  </p>
                </div>
              </a>

              <div className="flex gap-2 items-start mb-3">
                <Clock
                  className="w-3 h-3 text-brand-sage shrink-0 mt-[3px]"
                  aria-hidden="true"
                />
                <p className="font-jakarta text-warm-parchment/35 text-[12px] leading-relaxed">
                  {loc.hours}
                </p>
              </div>

              <p className="font-jakarta text-warm-parchment/20 text-[10px] tracking-[0.18em] uppercase">
                Closed Sundays
              </p>
            </div>
          ))}

          {/* Site navigation */}
          <nav aria-label="Footer navigation">
            <p className="label text-warm-parchment/30 mb-4">Navigate</p>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="
                      font-jakarta text-warm-parchment/45 text-sm
                      hover:text-warm-parchment transition-colors duration-300
                    "
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* ── Row 3: Bottom bar ── */}
        <div
          className="
            flex flex-col md:flex-row items-center md:justify-between gap-5
            pt-8 border-t border-warm-parchment/8
          "
        >
          {/* Legal */}
          <p className="font-jakarta text-warm-parchment/25 text-[11px] tracking-[0.12em] text-center md:text-left">
            © 2025 The Shepherd&apos;s Chair · All rights reserved
          </p>

          {/* Social */}
          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com/theshepherdschair_"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-2
                font-jakarta text-warm-parchment/35 text-[11px] tracking-[0.14em] uppercase
                hover:text-shepherds-gold transition-colors duration-300
              "
              aria-label="Instagram — @theshepherdschair"
            >
              <FaInstagram className="w-3.5 h-3.5" aria-hidden="true" />
              Instagram
            </a>
            <a
              href="#booking"
              className="
                inline-flex items-center gap-1.5
                font-jakarta text-warm-parchment/35 text-[11px] tracking-[0.14em] uppercase
                hover:text-shepherds-gold transition-colors duration-300
              "
            >
              Book Online
              <ArrowUpRight className="w-3 h-3" aria-hidden="true" />
            </a>
          </div>

          {/* Closing line — the footer tagline, per brief */}
          <p className="font-jakarta text-warm-parchment/18 text-[10px] tracking-[0.18em] text-center md:text-right">
            The Shepherd&apos;s Chair · Portland, OR · Est. 2017 · Closed
            Sundays
          </p>
        </div>
      </div>
    </footer>
  );
}
