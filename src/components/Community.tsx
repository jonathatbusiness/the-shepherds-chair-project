"use client";

import { motion } from "framer-motion";

// ── Animation factory ──────────────────────────────────────────────────────

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" as const },
  transition: { duration: 0.85, delay, ease: "easeOut" as const },
});

// ── JOIN PDX Partnership mark ─────────────────────────────────────────────

function JoinPdxBadge() {
  return (
    <div className="inline-flex items-center gap-4 border border-warm-parchment/12 px-6 py-4">
      {/* Placeholder logo mark */}
      <div className="w-9 h-9 rounded-full bg-shepherds-gold/20 border border-shepherds-gold/30 flex items-center justify-center shrink-0">
        <span className="font-jakarta font-semibold text-shepherds-gold text-xs">
          J
        </span>
      </div>
      <div>
        <p className="font-jakarta text-warm-parchment/80 text-sm font-semibold tracking-wide">
          JOIN PDX
        </p>
        <p className="font-jakarta text-warm-parchment/40 text-[11px] tracking-wide">
          Community partner · Portland, OR
        </p>
      </div>
    </div>
  );
}

// ── Main component ─────────────────────────────────────────────────────────

export default function Community() {
  return (
    <section
      id="community"
      className="relative py-28 md:py-36 bg-forest-ink overflow-hidden"
    >
      {/* Grain */}
      <div aria-hidden className="grain-noise" />

      {/* Top gold rule */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(180,154,61,0.28), transparent)",
        }}
      />

      <div className="relative section-container">
        {/* ── Two-column layout: heading left / prose right ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-16 lg:gap-24 items-start">
          {/* Left: Section label + large heading */}
          <motion.div className="lg:sticky lg:top-32" {...fadeUp(0)}>
            <p className="label text-shepherds-gold mb-5">Community</p>

            <h2
              className="font-dm text-warm-parchment leading-[1.12] mb-8"
              style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.25rem)" }}
            >
              A good shop is a good&nbsp;neighbor.
            </h2>

            {/* JOIN PDX partner badge */}
            <motion.div {...fadeUp(0.12)}>
              <JoinPdxBadge />
            </motion.div>

            {/* Decorative quote */}
            <motion.div
              className="mt-12 border-l border-shepherds-gold/30 pl-6"
              {...fadeUp(0.2)}
            >
              <p className="font-lora italic text-warm-parchment/38 text-base leading-relaxed">
                &ldquo;A standard of care never drops — no matter which door you
                walk through.&rdquo;
              </p>
            </motion.div>
          </motion.div>

          {/* Right: Prose paragraphs — no bullet lists, per brief */}
          <motion.div
            className="space-y-6 font-jakarta text-warm-parchment/58 text-base md:text-[17px] leading-[1.88]"
            {...fadeUp(0.08)}
          >
            <p>
              We hire local. Every craftsperson at The Shepherd&apos;s Chair
              grew up in or near Portland — most of them within ten miles of the
              shop where they now work. That&apos;s not a coincidence. It&apos;s
              how we built the apprenticeship program after opening the second
              location, and it&apos;s what we&apos;ll bring to every door we
              open after this one.
            </p>

            <p>
              A percentage of monthly revenue from all three locations goes
              directly to{" "}
              <a
                href="https://joinpdx.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-warm-parchment/85 underline underline-offset-2 decoration-shepherds-gold/40 hover:text-shepherds-gold hover:decoration-shepherds-gold transition-colors duration-300"
              >
                JOIN PDX
              </a>{" "}
              — a Portland organization doing the slow, necessary work of ending
              homelessness in our city. We frame it not as charity but as being
              a good neighbor. Which is really just the simplest version of what
              we believe: that a neighborhood is only as healthy as the people
              in it, and healthy neighborhoods need businesses that give a damn.
            </p>

            <p>
              The products on our shelves come from Pacific Northwest
              independent makers — not because we&apos;re performing
              authenticity, but because we&apos;ve used them, we trust them, and
              the people who made them are our neighbors. The art on our front
              desk rotates quarterly — all from Alberta Arts District artists,
              all for sale. The books in the waiting area come from
              Powell&apos;s. These things aren&apos;t decor. They&apos;re how we
              participate in the city.
            </p>

            <p>
              We pay above minimum wage across all three units. Always have.
              Fair wages aren&apos;t a policy position for us — they&apos;re the
              baseline of treating people with dignity. Our craftspeople build
              real careers here, not stepping-stone jobs.
            </p>

            {/* The "Closed Sundays" statement — stated plainly, per brief: no explanation, no asterisk */}
            <p className="text-warm-parchment/38">We are closed on Sundays.</p>
          </motion.div>
        </div>

        {/* ── Bottom stat row ── */}
        <motion.div
          className="
            mt-20 md:mt-24 pt-12 border-t border-warm-parchment/8
            grid grid-cols-2 md:grid-cols-4 gap-8
          "
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, delay: 0.1 }}
        >
          {[
            { stat: "3", label: "Portland locations" },
            { stat: "100%", label: "Local hires" },
            { stat: "Est. '17", label: "Alberta Arts District" },
            { stat: "Always", label: "Closed Sundays" },
          ].map((item) => (
            <div key={item.label}>
              <p
                className="font-cormorant text-shepherds-gold font-semibold leading-none mb-2"
                style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
              >
                {item.stat}
              </p>
              <p className="font-jakarta text-warm-parchment/38 text-xs tracking-[0.14em] uppercase">
                {item.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
