"use client";

import { motion, Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// ── Data ───────────────────────────────────────────────────────────────────

const VALUES = [
  {
    name: "Craft Over Speed",
    note: "Every cut gets the time it deserves. No rushing. No corners cut.",
  },
  {
    name: "People Before Transactions",
    note: "We know your name. We remember your cut. We ask how your mom is doing.",
  },
  {
    name: "Rooted in Place",
    note: "We hire local, source local, give local. Portland isn't a backdrop — it's who we are.",
  },
  {
    name: "Integrity in the Quiet Things",
    note: "Fair wages, honest pricing, closed on Sundays. The small choices reveal the real values.",
  },
  {
    name: "Welcome Without Exception",
    note: "Anyone who walks through our door belongs here. Period.",
  },
];

// ── Animation factory ──────────────────────────────────────────────────────

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" as const },
  transition: { duration: 0.82, delay, ease: [0.16, 1, 0.3, 1] as const },
});

// ── Main component ─────────────────────────────────────────────────────────

export default function About() {
  return (
    <section id="about" className="relative bg-warm-parchment overflow-hidden">
      {/*
        Full-bleed two-column grid — no container wrapper, columns ARE the layout.
        Mobile: stacked (image first, text below).
        md+: text left (55fr) / image right (45fr).
      */}
      <div className="md:grid md:grid-cols-[55fr_45fr] md:min-h-[780px] lg:min-h-[880px]">
        {/* ── Mobile-first: image appears above text on small screens ── */}
        <div className="relative h-72 sm:h-96 md:hidden overflow-hidden order-first">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="images/about/nathan-joel-mercer-mobile.webp"
            alt="The Shepherd's Chair — Alberta Street flagship"
            className="w-full h-full object-cover object-center"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(244,239,228,0.6) 0%, transparent 60%)",
            }}
          />
        </div>

        {/* ── Left: Text column ── */}
        <motion.div
          className="flex flex-col justify-center px-8 sm:px-12 md:px-16 lg:px-24 xl:px-28 py-20 md:py-32"
          {...fadeUp(0)}
        >
          {/* Overline */}
          <p className="label text-shepherds-gold mb-6">How We Got Here</p>

          {/* Headline */}
          <h2
            className="font-dm text-forest-ink leading-[1.12] mb-8"
            style={{ fontSize: "clamp(1.75rem, 3.2vw, 2.85rem)" }}
          >
            Nathan and Joel Mercer grew up in NE&nbsp;Portland.{" "}
            <span className="text-forest-ink/45">
              Their dad built things with his hands.&nbsp;So do they.
            </span>
          </h2>

          {/* Body copy */}
          <div className="space-y-5 font-jakarta text-forest-ink/60 text-base md:text-[17px] leading-[1.84] mb-10 max-w-[520px]">
            <p>
              Their father ran a small auto repair shop on Sandy Boulevard. They
              grew up watching him build something from nothing — with his
              hands, on his terms. That shaped everything about how they do
              business.
            </p>
            <p>
              The name was Joel&apos;s idea, arrived at during a conversation
              with their pastor after the first year of business. He wanted a
              name that carried weight — something that pointed, quietly, to the
              idea that good care is a calling, not a transaction. A shepherd
              tends to each one. The chair is where that happens.
            </p>
            <p>
              They chose not to explain the name publicly.{" "}
              <em className="font-lora not-italic text-worn-leather">
                It&apos;s on the sign. People who get it, get it.
              </em>
            </p>
          </div>

          {/* Pull quote */}
          <motion.blockquote
            className="relative border-l-2 border-shepherds-gold pl-7 mb-12 max-w-[500px]"
            {...fadeUp(0.14)}
          >
            <p
              className="font-lora italic text-forest-ink/68 leading-[1.65]"
              style={{ fontSize: "clamp(1rem, 1.8vw, 1.2rem)" }}
            >
              &ldquo;We wanted the guy who works at Powell&apos;s to feel as
              comfortable here as the guy who works at Intel. Same chair, same
              quality, same conversation.&rdquo;
            </p>
            <footer className="font-jakarta text-brand-sage text-[11px] tracking-[0.2em] uppercase mt-4">
              — Joel Mercer, Co-founder
            </footer>
          </motion.blockquote>

          {/* Values — prose-integrated list, never bullet-listy */}
          <motion.div className="mb-12 max-w-[500px]" {...fadeUp(0.22)}>
            <p className="label text-forest-ink/30 mb-5">
              What we actually stand for
            </p>
            <ul className="space-y-3.5" role="list">
              {VALUES.map((v) => (
                <li key={v.name} className="flex gap-3 items-baseline">
                  <span
                    aria-hidden="true"
                    className="shrink-0 w-1 h-1 rounded-full bg-shepherds-gold mt-2"
                  />
                  <span className="font-jakarta text-sm text-forest-ink/65 leading-relaxed">
                    <strong className="font-semibold text-forest-ink/85">
                      {v.name}.{" "}
                    </strong>
                    {v.note}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* CTA */}
          <motion.a
            href="#team"
            className="
              group inline-flex items-center gap-2 w-fit
              font-jakarta font-semibold text-[11px] tracking-[0.22em] uppercase
              text-forest-ink border-b border-forest-ink/22 pb-0.5
              hover:text-shepherds-gold hover:border-shepherds-gold/45
              transition-all duration-300
            "
            {...fadeUp(0.28)}
          >
            Meet the craftspeople
            <ArrowUpRight
              className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </motion.a>
        </motion.div>

        {/* ── Right: Portrait image (desktop only) ── */}
        <motion.div
          className="relative hidden md:block overflow-hidden"
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="images/about/nathan-joel-mercer-portrait.webp"
            alt="The Shepherd's Chair — Alberta Street flagship, natural window light"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />

          {/* Left-edge warm fade — blends with parchment */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to right, rgba(244,239,228,0.35) 0%, transparent 30%), linear-gradient(to top, rgba(28,43,30,0.6) 0%, transparent 55%)",
            }}
          />

          {/* Floating bottom tag */}
          <div className="absolute bottom-10 left-10">
            <p className="font-jakarta text-warm-parchment/42 text-[10px] tracking-[0.24em] uppercase mb-1">
              Alberta Arts District · Portland, OR
            </p>
            <p className="font-cormorant text-warm-parchment text-2xl font-semibold leading-none">
              Est. 2017
            </p>
          </div>

          {/* Vertical gold rule on left edge — ornamental separator */}
          <div
            aria-hidden="true"
            className="absolute top-16 bottom-16 left-0 w-px"
            style={{
              background:
                "linear-gradient(to bottom, transparent, rgba(180,154,61,0.4), transparent)",
            }}
          />
        </motion.div>
      </div>

      {/* Bottom decorative rule */}
      <div
        aria-hidden="true"
        className="h-px w-full"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(180,154,61,0.2), transparent)",
        }}
      />
    </section>
  );
}
