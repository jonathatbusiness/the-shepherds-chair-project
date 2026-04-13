"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { GiRazor } from "react-icons/gi";

// ── Sub-components ─────────────────────────────────────────────────────────

// ── Button helpers ─────────────────────────────────────────────────────────

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
}

function HeroButton({ href, children, variant = "primary" }: ButtonProps) {
  if (variant === "primary") {
    return (
      <a
        href={href}
        className="
          inline-flex items-center justify-center
          font-jakarta font-semibold text-[11px] tracking-[0.22em] uppercase
          px-10 py-4 whitespace-nowrap
          bg-shepherds-gold text-forest-ink
          hover:bg-antique-gold
          transition-colors duration-300
        "
      >
        {children}
      </a>
    );
  }

  return (
    <a
      href={href}
      className="
        inline-flex items-center justify-center gap-2
        font-jakarta font-medium text-[11px] tracking-[0.22em] uppercase
        px-10 py-4 whitespace-nowrap
        border border-warm-parchment/25 text-warm-parchment/65
        hover:border-warm-parchment/55 hover:text-warm-parchment
        transition-all duration-300
      "
    >
      {children}
    </a>
  );
}

// ── Main component ─────────────────────────────────────────────────────────

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-dvh min-h-[700px] flex items-center justify-center overflow-hidden"
    >
      {/* ── Z-0: Background image ────────────────────────────────────────── */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="images/hero/hero-bg-interior-alberta-st.webp"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 z-0 w-full h-full object-cover object-center"
        // Note: add images.unsplash.com to next.config.ts domains to use next/image instead
      />

      {/* ── Z-1: Primary dark overlay (Forest Ink) ───────────────────────── */}
      <div
        className="absolute inset-0 z-[1]"
        style={{ backgroundColor: "rgba(28, 43, 30, 0.86)" }}
      />

      {/* ── Z-3: Grain noise ─────────────────────────────────────────────── */}
      <div aria-hidden className="grain-noise z-[3]" />

      {/* ── Z-4: Radial vignette (deepens toward edges) ──────────────────── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[4] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 75% 75% at 50% 50%, transparent 28%, rgba(17, 26, 18, 0.92) 100%)",
        }}
      />

      {/* ── Z-5: Content ─────────────────────────────────────────────────── */}
      <div className="relative z-[5] text-center px-6 max-w-5xl mx-auto w-full pb-52 sm:pb-0">
        {/* Overline label */}
        <motion.p
          className="label text-shepherds-gold mb-6 md:mb-12"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: "easeOut" }}
        >
          Portland, OR &nbsp;·&nbsp; Est. 2017 &nbsp;·&nbsp; Three Locations
        </motion.p>

        {/* Main headline — Cormorant Garamond 700, clamp for fluid scaling */}
        <motion.h1
          className="font-cormorant text-warm-parchment leading-[1.04] mb-7 md:mb-9"
          style={{ fontSize: "clamp(3rem, 7.5vw, 5.75rem)", fontWeight: 700 }}
          initial={{ opacity: 0, y: 44 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.25,
            delay: 0.7,
            ease: [0.16, 1, 0.3, 1], // expo-out
          }}
        >
          The chair that
          <br />
          knows your name.
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          className="font-jakarta text-lg md:text-xl mb-8 md:mb-14 mx-auto leading-relaxed max-w-md text-warm-parchment/55"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.95, ease: "easeOut" }}
        >
          Three Portland locations.{" "}
          <em className="font-lora not-italic text-warm-parchment/38">
            One standard of care.
          </em>
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.95, delay: 1.15, ease: "easeOut" }}
        >
          <HeroButton href="#booking" variant="primary">
            Get in the Chair
          </HeroButton>
          <HeroButton href="#about" variant="ghost">
            Explore the Shop
            <ChevronDown className="w-3.5 h-3.5 ml-1.5" aria-hidden="true" />
          </HeroButton>
        </motion.div>
      </div>

      {/* ── Z-5: INDICADOR DE SCROLL (CÁPSULA) ── */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-[10] flex flex-col items-center gap-4">
        <span className="font-jakarta text-[9px] tracking-[0.32em] uppercase text-shepherds-gold/80">
          Scroll
        </span>
        <a href="#about" className="block">
          <motion.div
            className="relative flex flex-col items-center px-4 py-8 rounded-full border border-shepherds-gold/30 cursor-pointer overflow-hidden"
            whileHover="hover"
            initial="initial"
            animate="animate"
          >
            {/* Fundo de preenchimento */}
            <motion.div
              className="absolute inset-0 bg-shepherds-gold z-0"
              variants={{
                hover: { opacity: 1 },
                initial: { opacity: 0 },
              }}
              transition={{ duration: 0.3 }}
            />

            {/* Ícone da Navalha */}
            <motion.div
              className="z-10"
              variants={{
                hover: { color: "#1C2B1E", scale: 1.1 }, // Forest Ink
                initial: { color: "#B49A3D", scale: 1 }, // Shepherds Gold
              }}
              animate={{ y: [0, 8, 0] }}
              transition={{
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                duration: 0.3,
              }}
            >
              <GiRazor size={32} />
            </motion.div>

            {/* Linha Vertical */}
            <div className="relative w-[3px] h-16 overflow-hidden mt-3 z-10 rounded-full">
              {/* Trilho da linha */}
              <motion.div
                className="absolute inset-0 w-full h-full"
                variants={{
                  hover: { backgroundColor: "rgba(28, 43, 30, 0.2)" },
                  initial: { backgroundColor: "rgba(180, 154, 61, 0.1)" },
                }}
              />
              {/* Pulso de movimento */}
              <motion.div
                className="absolute inset-x-0 top-0 h-full"
                variants={{
                  hover: { backgroundColor: "#1C2B1E" },
                  initial: { backgroundColor: "#B49A3D" },
                }}
                animate={{
                  y: ["-100%", "100%"],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  y: { duration: 2.8, repeat: Infinity, ease: "easeInOut" },
                  opacity: { duration: 2.8, repeat: Infinity },
                }}
              />
            </div>
          </motion.div>
        </a>
      </div>
    </section>
  );
}
