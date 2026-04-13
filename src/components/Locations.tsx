"use client";

import { motion, Variants } from "framer-motion";
import { MapPin, Clock, ArrowUpRight } from "lucide-react";
import { FaInstagram } from "react-icons/fa";

// ── Types ──────────────────────────────────────────────────────────────────

interface Location {
  id: string;
  neighbourhood: string;
  tagline: string;
  address: string;
  city: string;
  hours: { days: string; time: string }[];
  note: string;
  imagePath: string;
  mapsUrl: string;
  since?: string;
}

// ── Data ───────────────────────────────────────────────────────────────────

const LOCATIONS: Location[] = [
  {
    id: "alberta",
    neighbourhood: "Alberta Arts District",
    tagline: "The original. On NE Alberta since 2017.",
    address: "2214 NE Alberta St",
    city: "Portland, OR 97211",
    hours: [
      { days: "Monday", time: "10am – 6pm" },
      { days: "Tue – Friday", time: "9am – 7pm" },
      { days: "Saturday", time: "9am – 6pm" },
      { days: "Sunday", time: "Closed" },
    ],
    note: "The flagship. Where it started.",
    imagePath: "/images/locations/alberta-arts-district-exterior.webp",
    mapsUrl: "https://maps.google.com/?q=2214+NE+Alberta+St+Portland+OR",
    since: "2017",
  },
  {
    id: "nw23rd",
    neighbourhood: "NW District",
    tagline: "On 23rd, between the bookshop and the bakery.",
    address: "1180 NW 23rd Ave",
    city: "Portland, OR 97210",
    hours: [
      { days: "Monday", time: "10am – 6pm" },
      { days: "Tue – Friday", time: "9am – 7pm" },
      { days: "Saturday", time: "9am – 6pm" },
      { days: "Sunday", time: "Closed" },
    ],
    note: "Jake's home base. The NW crowd found their barber.",
    imagePath: "/images/locations/nw-district-nw23rd-exterior.webp",
    mapsUrl: "https://maps.google.com/?q=1180+NW+23rd+Ave+Portland+OR",
    since: "2020",
  },
  {
    id: "hawthorne",
    neighbourhood: "Hawthorne",
    tagline: "SE Portland. Sarah's territory.",
    address: "4312 SE Hawthorne Blvd",
    city: "Portland, OR 97215",
    hours: [
      { days: "Monday", time: "10am – 6pm" },
      { days: "Tue – Friday", time: "9am – 7pm" },
      { days: "Saturday", time: "9am – 6pm" },
      { days: "Sunday", time: "Closed" },
    ],
    note: "The highest diversity of clients of all three locations.",
    imagePath: "/images/locations/hawthorne-se-exterior.webp",
    mapsUrl: "https://maps.google.com/?q=4312+SE+Hawthorne+Blvd+Portland+OR",
    since: "2022",
  },
];

// ── Animation variants ─────────────────────────────────────────────────────

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.78,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

// ── LocationCard ───────────────────────────────────────────────────────────

function LocationCard({ loc }: { loc: Location }) {
  return (
    <motion.article
      variants={cardVariants}
      className="group flex flex-col overflow-hidden border border-dry-grass hover:border-worn-leather/35 transition-colors duration-500 bg-linen-white"
    >
      {/* ── Image ── */}
      <div className="relative h-52 overflow-hidden shrink-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={loc.imagePath}
          alt={`The Shepherd's Chair — ${loc.neighbourhood}`}
          className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-forest-ink/30 group-hover:bg-forest-ink/15 transition-colors duration-500" />

        {/* Est. badge */}
        {loc.since && (
          <div className="absolute top-4 left-0 bg-shepherds-gold px-4 py-1.5">
            <span className="font-jakarta text-forest-ink text-[10px] font-semibold tracking-wider uppercase">
              Est. {loc.since}
            </span>
          </div>
        )}
      </div>

      {/* ── Content ── */}
      <div className="flex flex-col flex-1 p-7 md:p-8">
        {/* Neighbourhood + tagline */}
        <p className="label text-shepherds-gold mb-2">{loc.neighbourhood}</p>
        <p className="font-lora italic text-brand-sage text-sm mb-6 leading-relaxed">
          {loc.tagline}
        </p>

        {/* Address */}
        <a
          href={loc.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group/map flex gap-2.5 items-start mb-6 hover:opacity-75 transition-opacity duration-300"
          aria-label={`Open ${loc.neighbourhood} in Google Maps`}
        >
          <MapPin
            className="w-3.5 h-3.5 text-brand-sage shrink-0 mt-0.5"
            aria-hidden="true"
          />
          <div>
            <p className="font-jakarta text-forest-ink/75 text-sm">
              {loc.address}
            </p>
            <p className="font-jakarta text-forest-ink/45 text-sm">
              {loc.city}
            </p>
          </div>
        </a>

        {/* Hours table */}
        <div className="mb-6">
          <div className="flex gap-1.5 items-center mb-3">
            <Clock className="w-3 h-3 text-brand-sage" aria-hidden="true" />
            <span className="label text-brand-sage" style={{ fontSize: "9px" }}>
              Hours
            </span>
          </div>
          <ul className="space-y-1.5">
            {loc.hours.map((h) => (
              <li
                key={h.days}
                className="flex justify-between items-baseline gap-4"
              >
                <span className="font-jakarta text-forest-ink/55 text-xs">
                  {h.days}
                </span>
                <span
                  className={`font-jakarta text-xs font-medium ${
                    h.time === "Closed"
                      ? "text-worn-leather"
                      : "text-forest-ink/80"
                  }`}
                >
                  {h.time}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Note */}
        <p className="font-lora italic text-forest-ink/40 text-[13px] leading-relaxed flex-1 mb-6">
          {loc.note}
        </p>

        {/* CTA */}
        <a
          href="#booking"
          className="
            group/btn inline-flex items-center justify-center gap-2
            font-jakarta font-semibold text-[11px] tracking-[0.2em] uppercase
            bg-forest-ink text-warm-parchment
            px-6 py-3.5 w-full
            hover:bg-shepherds-gold hover:text-forest-ink
            transition-colors duration-300
          "
        >
          Get in the Chair
          <ArrowUpRight
            className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
            aria-hidden="true"
          />
        </a>
      </div>
    </motion.article>
  );
}

// ── Main component ─────────────────────────────────────────────────────────

export default function Locations() {
  return (
    <section id="locations" className="py-28 md:py-36 bg-linen-white">
      <div className="section-container">
        {/* ── Header ── */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-20"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.85, ease: "easeOut" }}
        >
          <div>
            <p className="label text-shepherds-gold mb-5">The Locations</p>
            <h2
              className="font-dm text-forest-ink leading-[1.15]"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Find your chair.
            </h2>
          </div>
          <p className="font-jakarta text-forest-ink/50 text-sm md:text-base max-w-xs md:text-right leading-relaxed">
            Three neighbourhoods.{" "}
            <em className="font-lora not-italic">One standard of care.</em>
          </p>
        </motion.div>

        {/* ── Three location cards ── */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {LOCATIONS.map((loc) => (
            <LocationCard key={loc.id} loc={loc} />
          ))}
        </motion.div>

        {/* ── Bottom bar ── */}
        <motion.div
          className="
            mt-14 md:mt-16 pt-10 border-t border-dry-grass
            flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6
          "
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="font-jakarta text-forest-ink/40 text-sm leading-relaxed">
            Walk-ins welcome when space allows. Booking recommended.
          </p>
          <a
            href="https://instagram.com/theshepherdschair"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-2
              font-jakarta text-brand-sage text-[11px] tracking-[0.18em] uppercase
              hover:text-shepherds-gold transition-colors duration-300
            "
          >
            <FaInstagram className="w-3.5 h-3.5" aria-hidden="true" />
            @theshepherdschair
          </a>
        </motion.div>
      </div>
    </section>
  );
}
