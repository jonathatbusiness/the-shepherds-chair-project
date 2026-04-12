"use client";

import { motion } from "framer-motion";

// ── Types ──────────────────────────────────────────────────────────────────

interface Testimonial {
  id: string;
  quote: string;
  name: string;
  neighbourhood: string;
  detail: string; // extra context line, small and muted
}

// ── Data ───────────────────────────────────────────────────────────────────

const TESTIMONIALS: Testimonial[] = [
  {
    id: "derek",
    quote:
      "My barber remembered my cut on the second visit. Two years ago. I've brought three colleagues since. Some places perform barbershop culture. This one actually has it.",
    name: "Derek",
    neighbourhood: "Pearl District",
    detail: "Regular since 2022 · Alberta St.",
  },
  {
    id: "marcus-bell",
    quote:
      "Joel was behind the chair my first time. We talked about the Trail Blazers for an hour. The cut was right. The conversation was real. That's the whole thing.",
    name: "Marcus",
    neighbourhood: "Woodlawn",
    detail: "Regular since 2021 · Alberta St.",
  },
  {
    id: "priya",
    quote:
      "Sarah gets my hair. Not just the texture — she actually listens before she picks up a comb. I've never felt out of place here, and Portland has plenty of spots that manage that without meaning to.",
    name: "Priya",
    neighbourhood: "Hawthorne",
    detail: "Regular since 2023 · Hawthorne location",
  },
];

// ── Decorative ornament ────────────────────────────────────────────────────

function Ornament({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 20"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <line
        x1="0"
        y1="10"
        x2="20"
        y2="10"
        stroke="currentColor"
        strokeWidth="0.75"
        opacity="0.4"
      />
      <circle
        cx="30"
        cy="10"
        r="2.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.75"
        opacity="0.55"
      />
      <circle cx="30" cy="10" r="1" fill="currentColor" opacity="0.4" />
      <line
        x1="40"
        y1="10"
        x2="60"
        y2="10"
        stroke="currentColor"
        strokeWidth="0.75"
        opacity="0.4"
      />
    </svg>
  );
}

// ── TestimonialItem ────────────────────────────────────────────────────────

function TestimonialItem({ t, index }: { t: Testimonial; index: number }) {
  // Alternate: even indices align left, odd align right
  const isRight = index % 2 === 1;

  return (
    <motion.div
      className={`flex flex-col ${isRight ? "md:items-end" : "md:items-start"}`}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.9,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {/* Opening quotation mark — decorative, Cormorant */}
      <span
        aria-hidden="true"
        className={`
          font-cormorant text-shepherds-gold/25 leading-none mb-2 select-none
          ${isRight ? "md:self-end" : "md:self-start"}
        `}
        style={{ fontSize: "5rem", lineHeight: 0.7 }}
      >
        &ldquo;
      </span>

      <blockquote
        className={`max-w-2xl ${isRight ? "md:text-right" : "md:text-left"}`}
      >
        {/* Quote — Lora italic, the typographic center of the section */}
        <p
          className="font-lora italic text-forest-ink/75 leading-[1.62] mb-8"
          style={{ fontSize: "clamp(1.1rem, 2.2vw, 1.45rem)" }}
        >
          {t.quote}
        </p>

        {/* Attribution */}
        <footer
          className={`flex flex-col gap-1 ${isRight ? "md:items-end" : "md:items-start"}`}
        >
          <Ornament className="w-14 text-shepherds-gold" />
          <p className="font-jakarta font-semibold text-forest-ink/70 text-sm tracking-wide mt-3">
            {t.name}
          </p>
          <p className="font-jakarta text-brand-sage text-[11px] tracking-[0.18em] uppercase">
            {t.neighbourhood}
          </p>
          <p className="font-jakarta text-forest-ink/28 text-[10px] tracking-[0.14em] mt-0.5">
            {t.detail}
          </p>
        </footer>
      </blockquote>
    </motion.div>
  );
}

// ── Main component ─────────────────────────────────────────────────────────

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-28 md:py-36"
      style={{ backgroundColor: "#EDE8DA" }} // slightly deeper than warm-parchment — visual rhythm
    >
      <div className="section-container">
        {/* ── Section header ── */}
        <motion.div
          className="mb-20 md:mb-24 text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.85 }}
        >
          <p className="label text-shepherds-gold mb-5">What Regulars Say</p>
          <h2
            className="font-dm text-forest-ink leading-[1.15]"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            The chair remembers.
          </h2>
        </motion.div>

        {/* ── Stacked testimonials with dividers ── */}
        <div className="space-y-0">
          {TESTIMONIALS.map((t, i) => (
            <div key={t.id}>
              <TestimonialItem t={t} index={i} />
              {/* Divider between items — not after the last */}
              {i < TESTIMONIALS.length - 1 && (
                <div
                  aria-hidden="true"
                  className="my-16 md:my-20 h-px w-full"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgba(107,124,109,0.2), transparent)",
                  }}
                />
              )}
            </div>
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <motion.div
          className="mt-20 md:mt-24 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <p className="font-lora italic text-forest-ink/40 text-base mb-8">
            Join them.
          </p>
          <a
            href="#booking"
            className="
              inline-flex items-center justify-center
              font-jakarta font-semibold text-[11px] tracking-[0.22em] uppercase
              bg-forest-ink text-warm-parchment
              px-10 py-4
              hover:bg-shepherds-gold hover:text-forest-ink
              transition-colors duration-300
            "
          >
            Get in the Chair
          </a>
        </motion.div>
      </div>
    </section>
  );
}
