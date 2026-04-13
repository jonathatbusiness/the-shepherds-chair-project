"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";

// ── Types ──────────────────────────────────────────────────────────────────

interface FormState {
  name: string;
  email: string;
  city: string;
  message: string;
}

type SubmitState = "idle" | "submitting" | "success";

// ── What the franchise offers — used in the body copy ─────────────────────

const PILLARS = [
  {
    title: "The craft",
    desc: "Full training on the standard of care that defines all three Portland locations.",
  },
  {
    title: "The community",
    desc: "A model built around neighbourhood relationships, not foot-traffic metrics.",
  },
  {
    title: "The integrity",
    desc: "One set of values across every door. Fair wages, honest pricing, closed Sundays.",
  },
  {
    title: "The system",
    desc: "Operations, booking, retail, and hiring — all built and tested in the real world.",
  },
];

// ── Input field component ──────────────────────────────────────────────────

interface FieldProps {
  label: string;
  id: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  required?: boolean;
}

function Field({
  label,
  id,
  type = "text",
  value,
  onChange,
  placeholder,
  required,
}: FieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className="font-jakarta text-warm-parchment/50 text-[10px] tracking-[0.22em] uppercase"
      >
        {label}
        {required && <span className="text-shepherds-gold ml-1">*</span>}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className="
          bg-warm-parchment/6 border border-warm-parchment/14
          text-warm-parchment placeholder-warm-parchment/22
          font-jakarta text-sm px-4 py-3.5
          focus:outline-none focus:border-shepherds-gold/45
          transition-colors duration-300
        "
      />
    </div>
  );
}

// ── Main component ─────────────────────────────────────────────────────────

export default function Franchise() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    city: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState<SubmitState>("idle");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted("submitting");
    // Simulate async submission — replace with real API call
    setTimeout(() => setSubmitted("success"), 1400);
  }

  function update(field: keyof FormState) {
    return (v: string) => setForm((prev) => ({ ...prev, [field]: v }));
  }

  return (
    <section
      id="franchise"
      className="relative py-28 md:py-36 bg-forest-ink overflow-hidden"
    >
      {/* Grain */}
      <div aria-hidden className="grain-noise" />

      <div className="relative section-container">
        {/* ── Two-column layout: copy left / form right ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 lg:gap-24 items-start">
          {/* ── Left: Copy ── */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.85 }}
          >
            <p className="label text-shepherds-gold mb-5">Franchise</p>

            <h2
              className="font-dm text-warm-parchment leading-[1.12] mb-8"
              style={{ fontSize: "clamp(2rem, 4vw, 3.1rem)" }}
            >
              Bring the chair to your&nbsp;neighbourhood.
            </h2>

            <div className="space-y-5 font-jakarta text-warm-parchment/55 text-base md:text-[17px] leading-[1.85] mb-12 max-w-lg">
              <p>
                We built something worth repeating. Three locations, one
                standard of care — and a model designed for people who want to
                own something, not just work for something.
              </p>
              <p>
                If you believe your neighbourhood deserves this kind of care,
                we&apos;d like to have a real conversation. Not a pitch. Not a
                deck. A conversation between people who know what it costs to do
                something right — and think it&apos;s worth it.
              </p>
            </div>

            {/* Pillars — what the franchise model offers */}
            <ul className="space-y-5" role="list">
              {PILLARS.map((p, i) => (
                <motion.li
                  key={p.title}
                  className="flex gap-4 items-start"
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.65,
                    delay: 0.08 * i,
                    ease: "easeOut",
                  }}
                >
                  <span
                    aria-hidden="true"
                    className="shrink-0 w-5 h-5 border border-shepherds-gold/35 flex items-center justify-center mt-0.5"
                  >
                    <span className="w-1.5 h-1.5 bg-shepherds-gold/70 rounded-full" />
                  </span>
                  <div>
                    <p className="font-jakarta text-warm-parchment/85 text-sm font-semibold tracking-wide mb-1">
                      {p.title}
                    </p>
                    <p className="font-jakarta text-warm-parchment/42 text-sm leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* ── Right: Contact form ── */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.85, delay: 0.12 }}
          >
            <div className="border border-warm-parchment/10 p-8 md:p-10">
              <p className="font-dm text-warm-parchment text-xl mb-2 leading-snug">
                Let&apos;s talk.
              </p>
              <p className="font-jakarta text-warm-parchment/42 text-sm mb-8 leading-relaxed">
                Tell us about yourself and the neighbourhood you&apos;re
                thinking about. We&apos;ll follow up within a week — personally.
              </p>

              <AnimatePresence mode="wait">
                {submitted === "success" ? (
                  /* ── Success state ── */
                  <motion.div
                    key="success"
                    className="flex flex-col items-center text-center py-10 gap-5"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="w-12 h-12 border border-shepherds-gold/40 flex items-center justify-center">
                      <Check
                        className="w-5 h-5 text-shepherds-gold"
                        aria-hidden="true"
                      />
                    </div>
                    <p className="font-dm text-warm-parchment text-xl leading-snug">
                      We&apos;ll be in touch.
                    </p>
                    <p className="font-jakarta text-warm-parchment/42 text-sm leading-relaxed max-w-xs">
                      Thank you for reaching out. Expect a personal reply — not
                      a CRM sequence.
                    </p>
                  </motion.div>
                ) : (
                  /* ── Form ── */
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-5"
                    aria-label="Franchise inquiry form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <Field
                        label="Your Name"
                        id="name"
                        value={form.name}
                        onChange={update("name")}
                        placeholder="First and last"
                        required
                      />
                      <Field
                        label="Email"
                        id="email"
                        type="email"
                        value={form.email}
                        onChange={update("email")}
                        placeholder="you@email.com"
                        required
                      />
                    </div>

                    <Field
                      label="City / Neighbourhood You Have in Mind"
                      id="city"
                      value={form.city}
                      onChange={update("city")}
                      placeholder="e.g. Lake Oswego, West Linn..."
                    />

                    {/* Textarea */}
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="message"
                        className="font-jakarta text-warm-parchment/50 text-[10px] tracking-[0.22em] uppercase"
                      >
                        A little about you
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        value={form.message}
                        onChange={(e) => update("message")(e.target.value)}
                        placeholder="Background, why you're interested, questions you already have..."
                        className="
                          bg-warm-parchment/6 border border-warm-parchment/14
                          text-warm-parchment placeholder-warm-parchment/22
                          font-jakarta text-sm px-4 py-3.5
                          focus:outline-none focus:border-shepherds-gold/45
                          transition-colors duration-300 resize-none
                        "
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={submitted === "submitting"}
                      className="
                        group mt-2 inline-flex items-center justify-center gap-2
                        font-jakarta font-semibold text-[11px] tracking-[0.22em] uppercase
                        bg-shepherds-gold text-forest-ink
                        px-8 py-4 w-full
                        hover:bg-antique-gold
                        disabled:opacity-60 disabled:cursor-not-allowed
                        transition-colors duration-300
                      "
                    >
                      {submitted === "submitting" ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message
                          <ArrowUpRight
                            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            aria-hidden="true"
                          />
                        </>
                      )}
                    </button>

                    <p className="font-jakarta text-warm-parchment/25 text-[11px] text-center leading-relaxed">
                      No sales pitch. No automated sequence. A real reply from
                      Nathan or Joel.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
