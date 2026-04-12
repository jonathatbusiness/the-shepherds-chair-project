"use client";

import { motion, Variants } from "framer-motion";
import { Clock, ArrowUpRight } from "lucide-react";

// ── Types ──────────────────────────────────────────────────────────────────

interface Service {
  id: string;
  name: string;
  tagline: string;
  description: string;
  duration: string;
  startingPrice: string;
  imageQuery: string;
}

// ── Data ───────────────────────────────────────────────────────────────────

const SERVICES: Service[] = [
  {
    id: "classic-cut",
    name: "Classic Cut & Style",
    tagline: "Tailored to you",
    description:
      "A precision cut shaped around your face, your hair, and how you actually live your life. Consultation always included — never skipped.",
    duration: "45 min",
    startingPrice: "$38",
    imageQuery: "barber,scissors,haircut,grooming,tools",
  },
  {
    id: "fade-taper",
    name: "Fade & Taper",
    tagline: "Clean from skin to length",
    description:
      "Skin, low, mid, or high — every gradient placed exactly where it belongs. Refined, precise, never overdone.",
    duration: "50 min",
    startingPrice: "$42",
    imageQuery: "barber,fade,hair,clippers,precision",
  },
  {
    id: "beard-sculpt",
    name: "Beard Sculpt & Hot Towel",
    tagline: "Shape. Define. Refine.",
    description:
      "Sculpted to your face structure and finished with a hot towel treatment and quality product that actually lasts through the week.",
    duration: "35 min",
    startingPrice: "$30",
    imageQuery: "beard,grooming,barber,razor,sculpt",
  },
  {
    id: "straight-razor",
    name: "Straight Razor Shave",
    tagline: "The full ritual",
    description:
      "Hot lather, a steady hand, a cool finish. A shave that reminds you what a shave is supposed to feel like.",
    duration: "60 min",
    startingPrice: "$55",
    imageQuery: "straight,razor,shave,barber,hot,towel,vintage",
  },
];

// ── Animation variants ─────────────────────────────────────────────────────

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.13,
      delayChildren: 0.05,
    },
  },
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

// ── ServiceCard ────────────────────────────────────────────────────────────

function ServiceCard({ service }: { service: Service }) {
  return (
    <motion.article
      variants={cardVariants}
      className="
        group flex flex-col
        bg-linen-white
        border border-dry-grass
        hover:border-worn-leather/35
        overflow-hidden
        transition-colors duration-500
      "
    >
      {/* ── Image ── */}
      <div className="relative h-56 md:h-60 overflow-hidden shrink-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`https://source.unsplash.com/random/800x600/?${service.imageQuery}`}
          alt={service.name}
          className="
            w-full h-full object-cover object-center
            transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
            group-hover:scale-[1.06]
          "
          loading="lazy"
        />
        {/* Subtle dark scrim */}
        <div
          className="
          absolute inset-0
          bg-forest-ink/22 group-hover:bg-forest-ink/10
          transition-colors duration-500
        "
        />
        {/* Price badge */}
        <div className="absolute top-4 right-0 bg-forest-ink px-4 py-2">
          <span className="font-jakarta text-shepherds-gold text-[11px] font-semibold tracking-wider">
            From {service.startingPrice}
          </span>
        </div>
      </div>

      {/* ── Content ── */}
      <div className="flex flex-col flex-1 p-7 md:p-8">
        {/* Tagline in Lora italic */}
        <p className="font-lora italic text-brand-sage text-sm mb-2.5">
          {service.tagline}
        </p>

        {/* Name in DM Serif */}
        <h3
          className="font-dm text-forest-ink leading-tight mb-4"
          style={{ fontSize: "clamp(1.25rem, 2vw, 1.6rem)" }}
        >
          {service.name}
        </h3>

        {/* Description */}
        <p className="font-jakarta text-forest-ink/60 text-sm leading-relaxed flex-1 mb-6">
          {service.description}
        </p>

        {/* Footer row */}
        <div className="flex items-center justify-between pt-5 border-t border-dry-grass">
          <span className="flex items-center gap-1.5 font-jakarta text-brand-sage text-xs tracking-wide">
            <Clock className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
            {service.duration}
          </span>

          <a
            href="#booking"
            className="
              group/btn inline-flex items-center gap-1.5
              font-jakarta font-semibold text-[11px] tracking-[0.16em] uppercase
              text-forest-ink hover:text-shepherds-gold
              transition-colors duration-300
            "
          >
            Book
            <ArrowUpRight
              className="
                w-3.5 h-3.5
                transition-transform duration-300
                group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5
              "
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </motion.article>
  );
}

// ── Main component ─────────────────────────────────────────────────────────

export default function Services() {
  return (
    <section id="services" className="py-28 md:py-36 bg-linen-white">
      <div className="section-container">
        {/* ── Section header ── */}
        <motion.div
          className="max-w-xl mb-16 md:mb-20"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.85, ease: "easeOut" }}
        >
          <p className="label text-shepherds-gold mb-5">The Work</p>
          <h2
            className="font-dm text-forest-ink leading-[1.15] mb-6"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            What we do here.
          </h2>
          <p className="font-jakarta text-forest-ink/58 text-base md:text-lg leading-[1.8]">
            We don&apos;t have a menu of trends. We have craftspeople who know
            their work and take the time to understand yours.
          </p>
        </motion.div>

        {/* ── 4-card grid ── */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </motion.div>

        {/* ── Bottom pull quote + CTA ── */}
        <motion.div
          className="mt-20 md:mt-24 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pt-14 border-t border-dry-grass"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.85, delay: 0.1 }}
        >
          <p className="font-lora italic text-brand-sage text-lg md:text-xl leading-relaxed max-w-lg">
            &ldquo;Every cut gets the time it deserves. No rushing. No corners
            cut.&rdquo;
          </p>

          <a
            href="#booking"
            className="
              shrink-0 inline-flex items-center justify-center
              font-jakarta font-semibold text-[11px] tracking-[0.22em] uppercase
              px-10 py-4
              bg-forest-ink text-warm-parchment
              hover:bg-shepherds-gold hover:text-forest-ink
              transition-colors duration-300
            "
          >
            Claim Your Chair
          </a>
        </motion.div>
      </div>
    </section>
  );
}
