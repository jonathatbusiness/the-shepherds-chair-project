"use client";

import { useState } from "react";
import { motion } from "framer-motion";

// ── Types ──────────────────────────────────────────────────────────────────

interface GalleryImage {
  id: string;
  query: string;
  tag: string; // hover label
  alt: string;
  aspect: "landscape" | "portrait" | "square";
  /** CSS grid-column span (1–3) and grid-row span */
  colSpan: number;
  rowSpan: number;
}

// ── Data ───────────────────────────────────────────────────────────────────
// 8 images arranged in a deliberate editorial asymmetric grid.
// The grid is defined with explicit col/row spans.

const IMAGES: GalleryImage[] = [
  {
    id: "hero-interior",
    query: "barbershop,interior,leather,chair,amber,light,vintage",
    tag: "Alberta St · Interior",
    alt: "Vintage leather barber chairs under amber pendant lights",
    aspect: "landscape",
    colSpan: 2,
    rowSpan: 2,
  },
  {
    id: "razor-detail",
    query: "straight,razor,leather,strop,barber,detail,close",
    tag: "Alberta St · Detail",
    alt: "Straight razor on leather strop — tool detail",
    aspect: "portrait",
    colSpan: 1,
    rowSpan: 2,
  },
  {
    id: "barber-action",
    query: "barber,cutting,hair,action,focus,scissors",
    tag: "Hawthorne · In Session",
    alt: "Barber at work — concentration during a precision cut",
    aspect: "landscape",
    colSpan: 1,
    rowSpan: 1,
  },
  {
    id: "exterior",
    query: "barbershop,exterior,brick,green,portland,storefront",
    tag: "Alberta St · Exterior",
    alt: "The Shepherd's Chair storefront on NE Alberta Street",
    aspect: "landscape",
    colSpan: 1,
    rowSpan: 1,
  },
  {
    id: "mirror-reflection",
    query: "barbershop,mirror,reflection,chairs,interior,symmetry",
    tag: "NW 23rd · Interior",
    alt: "Barber chairs reflected in full-length mirror wall",
    aspect: "portrait",
    colSpan: 1,
    rowSpan: 2,
  },
  {
    id: "product-shelf",
    query: "barber,products,shelf,pomade,grooming,detail",
    tag: "Alberta St · Retail",
    alt: "Curated grooming product shelf at the Alberta location",
    aspect: "landscape",
    colSpan: 1,
    rowSpan: 1,
  },
  {
    id: "client-moment",
    query: "barber,client,conversation,reveal,cut,finished",
    tag: "Hawthorne · The Reveal",
    alt: "Client seeing the finished cut — that half-second of recognition",
    aspect: "landscape",
    colSpan: 1,
    rowSpan: 1,
  },
  {
    id: "window-light",
    query: "barbershop,empty,chair,window,morning,light,peaceful",
    tag: "Alberta St · Before the First Appointment",
    alt: "Empty barber chair in morning window light",
    aspect: "portrait",
    colSpan: 1,
    rowSpan: 2,
  },
];

// ── GalleryItem ────────────────────────────────────────────────────────────

function GalleryItem({ img, index }: { img: GalleryImage; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className={`
        relative overflow-hidden group cursor-pointer
        col-span-${img.colSpan} row-span-${img.rowSpan}
      `}
      style={{
        // Tailwind JIT can't resolve dynamic colSpan class names — use inline style
        gridColumn: `span ${img.colSpan} / span ${img.colSpan}`,
        gridRow: `span ${img.rowSpan} / span ${img.rowSpan}`,
        // Aspect ratio for items without a fixed height context
        aspectRatio:
          img.rowSpan === 2
            ? undefined
            : img.aspect === "portrait"
              ? "3/4"
              : "4/3",
        minHeight: img.rowSpan === 2 ? "360px" : undefined,
      }}
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.95,
        delay: index * 0.07,
        ease: [0.16, 1, 0.3, 1],
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`https://source.unsplash.com/random/1200x900/?${img.query}&sig=gallery-${img.id}`}
        alt={img.alt}
        className="
          w-full h-full object-cover
          transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
          group-hover:scale-[1.05]
        "
        loading="lazy"
      />

      {/* Permanent subtle scrim */}
      <div className="absolute inset-0 bg-forest-ink/15 group-hover:bg-forest-ink/5 transition-colors duration-500" />

      {/* Hover tag */}
      <motion.div
        className="absolute bottom-4 left-4 pointer-events-none"
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 6 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <span
          className="
          font-jakarta text-warm-parchment text-[10px] tracking-[0.2em] uppercase
          bg-forest-ink/75 backdrop-blur-sm px-3 py-1.5
        "
        >
          {img.tag}
        </span>
      </motion.div>
    </motion.div>
  );
}

// ── Main component ─────────────────────────────────────────────────────────

export default function Gallery() {
  return (
    <section id="gallery" className="bg-deep-grove overflow-hidden">
      {/* ── Section header — bleeds into the grid ── */}
      <div className="section-container pt-28 md:pt-36 pb-10 md:pb-12">
        <motion.div
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.85 }}
        >
          <div>
            <p className="label text-shepherds-gold mb-4">The Shop</p>
            <h2
              className="font-dm text-warm-parchment leading-[1.15]"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Inside the chair.
            </h2>
          </div>
          <p className="font-lora italic text-warm-parchment/35 text-sm max-w-xs sm:text-right leading-relaxed">
            Worn leather. Good coffee.
            <br />A pew with better lighting.
          </p>
        </motion.div>
      </div>

      {/* ── Grid — full-width, no side padding ── */}
      {/*
        Layout (desktop, 3 cols):
        [hero-interior ×2] [razor-detail ×1 ×2row]
        [hero-interior ×2] [barber-action ×1]
                           [exterior ×1]
        [mirror-refl ×1 ×2row] [product ×1] [client ×1] [window ×1 ×2row]
        [mirror-refl ×1 ×2row] [               window ×1 ×2row]
      */}
      <div
        className="px-2 md:px-3 pb-28 md:pb-36"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridAutoRows: "280px",
          gap: "8px",
        }}
      >
        {IMAGES.map((img, i) => (
          <GalleryItem key={img.id} img={img} index={i} />
        ))}
      </div>
    </section>
  );
}
