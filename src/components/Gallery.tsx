"use client";

import { useState } from "react";
import { motion } from "framer-motion";

// ── Types ──────────────────────────────────────────────────────────────────

interface GalleryImage {
  id: string;
  imagePath: string;
  tag: string;
  alt: string;
  aspect: "landscape" | "portrait" | "square";
  colSpan: number;
  rowSpan: number;
}

// ── Data ───────────────────────────────────────────────────────────────────

const IMAGES: GalleryImage[] = [
  {
    id: "hero-interior",
    imagePath: "/images/gallery/alberta-st-interior-chairs-wide.webp",
    tag: "Alberta St · Interior",
    alt: "Vintage leather barber chairs under amber pendant lights",
    aspect: "landscape",
    colSpan: 2,
    rowSpan: 2,
  },
  {
    id: "razor-detail",
    imagePath: "/images/gallery/detail-straight-razor-strop.webp",
    tag: "Alberta St · Detail",
    alt: "Straight razor on leather strop — tool detail",
    aspect: "portrait",
    colSpan: 1,
    rowSpan: 2,
  },
  {
    id: "barber-action",
    imagePath: "/images/gallery/barber-in-action-scissors.webp",
    tag: "Hawthorne · In Session",
    alt: "Barber at work — concentration during a precision cut",
    aspect: "landscape",
    colSpan: 1,
    rowSpan: 1,
  },
  {
    id: "exterior",
    imagePath: "/images/gallery/alberta-st-exterior-afternoon.webp",
    tag: "Alberta St · Exterior",
    alt: "The Shepherd's Chair storefront on NE Alberta Street",
    aspect: "landscape",
    colSpan: 1,
    rowSpan: 1,
  },
  {
    id: "mirror-reflection",
    imagePath: "/images/gallery/interior-mirror-reflection-chairs.webp",
    tag: "NW 23rd · Interior",
    alt: "Barber chairs reflected in full-length mirror wall",
    aspect: "portrait",
    colSpan: 1,
    rowSpan: 2,
  },
  {
    id: "product-shelf",
    imagePath: "/images/gallery/detail-retail-product-shelf.webp",
    tag: "Alberta St · Retail",
    alt: "Curated grooming product shelf at the Alberta location",
    aspect: "landscape",
    colSpan: 1,
    rowSpan: 1,
  },
  {
    id: "client-moment",
    imagePath: "/images/gallery/barber-client-conversation.webp",
    tag: "Hawthorne · The Reveal",
    alt: "Client seeing the finished cut — that half-second of recognition",
    aspect: "landscape",
    colSpan: 1,
    rowSpan: 1,
  },
  {
    id: "window-light",
    imagePath: "/images/gallery/empty-chair-window-morning-light.webp",
    tag: "Alberta St · Before the First Appointment",
    alt: "Empty barber chair in morning window light",
    aspect: "portrait",
    colSpan: 1,
    rowSpan: 2,
  },
];

// Mobile layout: 2 colunas, sem rowSpan, sem buracos negros
// col-span 2 = largura total | col-span 1 = metade
const MOBILE_LAYOUT: { id: string; colSpan: 1 | 2 }[] = [
  { id: "hero-interior", colSpan: 2 }, // destaque full-width
  { id: "razor-detail", colSpan: 1 },
  { id: "barber-action", colSpan: 1 },
  { id: "exterior", colSpan: 1 },
  { id: "mirror-reflection", colSpan: 1 },
  { id: "product-shelf", colSpan: 1 },
  { id: "client-moment", colSpan: 1 },
  { id: "window-light", colSpan: 2 }, // encerra full-width
];

// ── GalleryItem (desktop) ──────────────────────────────────────────────────

function GalleryItem({ img, index }: { img: GalleryImage; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="relative overflow-hidden group cursor-pointer"
      style={{
        gridColumn: `span ${img.colSpan} / span ${img.colSpan}`,
        gridRow: `span ${img.rowSpan} / span ${img.rowSpan}`,
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
        src={img.imagePath}
        alt={img.alt}
        className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-forest-ink/15 group-hover:bg-forest-ink/5 transition-colors duration-500" />
      <motion.div
        className="absolute bottom-4 left-4 pointer-events-none"
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 6 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <span className="font-jakarta text-warm-parchment text-[10px] tracking-[0.2em] uppercase bg-forest-ink/75 backdrop-blur-sm px-3 py-1.5">
          {img.tag}
        </span>
      </motion.div>
    </motion.div>
  );
}

// ── MobileGalleryItem ──────────────────────────────────────────────────────

function MobileGalleryItem({
  img,
  colSpan,
  index,
}: {
  img: GalleryImage;
  colSpan: 1 | 2;
  index: number;
}) {
  // Aspect ratio por tipo de imagem no mobile
  const aspectRatio =
    colSpan === 2
      ? img.aspect === "portrait"
        ? "4/3" // full-width portrait vira quase quadrado
        : "16/9" // full-width landscape — cinemático
      : img.aspect === "portrait"
        ? "3/4" // meia-largura portrait — alto
        : "1/1"; // meia-largura landscape — quadrado

  return (
    <motion.div
      className="relative overflow-hidden group cursor-pointer"
      style={{
        gridColumn: `span ${colSpan} / span ${colSpan}`,
        aspectRatio,
      }}
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{
        duration: 0.85,
        delay: index * 0.06,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={img.imagePath}
        alt={img.alt}
        className="w-full h-full object-cover object-[center_20%]"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-forest-ink/15" />
      {/* Tag sempre visível no mobile (sem hover) */}
      <div className="absolute bottom-3 left-3">
        <span className="font-jakarta text-warm-parchment text-[9px] tracking-[0.18em] uppercase bg-forest-ink/70 backdrop-blur-sm px-2.5 py-1">
          {img.tag}
        </span>
      </div>
    </motion.div>
  );
}

// ── Main component ─────────────────────────────────────────────────────────

export default function Gallery() {
  // Mapeia id → GalleryImage para lookup rápido no mobile layout
  const imageMap = Object.fromEntries(IMAGES.map((img) => [img.id, img]));

  return (
    <section id="gallery" className="bg-deep-grove overflow-hidden">
      {/* ── Section header ── */}
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

      {/* ── MOBILE grid (< md) — 2 colunas, aspect-ratio fluido, sem buracos ── */}
      <div
        className="md:hidden px-2 pb-24"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "6px",
        }}
      >
        {MOBILE_LAYOUT.map(({ id, colSpan }, i) => {
          const img = imageMap[id];
          if (!img) return null;
          return (
            <MobileGalleryItem key={id} img={img} colSpan={colSpan} index={i} />
          );
        })}
      </div>

      {/* ── DESKTOP grid (md+) — layout original com col/row spans ── */}
      <div
        className="hidden md:grid px-3 pb-36"
        style={{
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
