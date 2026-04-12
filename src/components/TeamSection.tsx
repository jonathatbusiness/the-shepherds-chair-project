"use client";

import { motion, Variants } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";

// ── Types ──────────────────────────────────────────────────────────────────

interface TeamMember {
  id: string;
  name: string;
  pronouns: string;
  role: string;
  location: string;
  specialty: string[];
  bio: string;
  imagePath: string;
}

// ── Data ───────────────────────────────────────────────────────────────────

const TEAM: TeamMember[] = [
  {
    id: "marcus-webb",
    name: "Marcus Webb",
    pronouns: "He/him",
    role: "Head Barber & Shop Lead",
    location: "Alberta St.",
    specialty: ["Skin fades", "Beard sculpting", "Straight razor shaves"],
    bio: "He asks one good question per appointment and remembers the answer the next time you're in the chair.",
    imagePath: "/images/team/marcus-webb-head-barber.webp",
  },
  {
    id: "sarah-brennan",
    name: "Sarah Brennan",
    pronouns: "She/her",
    role: "Barber",
    location: "Hawthorne",
    specialty: ["Textured & fine hair", "Scissor-over-comb", "Precision cuts"],
    bio: "She'll tell you what's actually working with your cut — and what isn't. Clients trust that.",
    imagePath: "/images/team/sarah-brennan-barber-hawthorne.webp",
  },
  {
    id: "tyler-okafor",
    name: "Tyler Okafor",
    pronouns: "He/him",
    role: "Barber",
    location: "Alberta St.",
    specialty: ["Type 4 textures", "Line art & designs", "Low fades"],
    bio: "Energetic, genuinely curious about people. Has strong opinions about music and will defend them.",
    imagePath: "/images/team/tyler-okafor-barber-alberta.webp",
  },
  {
    id: "jake-hollis",
    name: "Jake Hollis",
    pronouns: "He/him",
    role: "Barber",
    location: "NW 23rd",
    specialty: ["Textured cuts", "Curly hair", "Lived-in styles"],
    bio: "Mellow, genuine, deeply likeable. He listens to whole albums while he works. NW District connects with him immediately.",
    imagePath: "/images/team/jake-hollis-barber-nw23rd.webp",
  },
  {
    id: "elena-vasquez",
    name: "Elena Vasquez",
    pronouns: "She/her",
    role: "Client Experience",
    location: "Alberta St.",
    specialty: [
      "Client coordination",
      "Curated retail",
      "The first impression",
    ],
    bio: "She remembers your preferred beverage. She is, in many ways, the connective tissue of the Alberta location.",
    imagePath: "/images/team/elena-vasquez-client-experience.webp",
  },
];

// ── Animation variants ─────────────────────────────────────────────────────

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
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

// ── TeamCard ───────────────────────────────────────────────────────────────

function TeamCard({ member }: { member: TeamMember }) {
  const firstName = member.name.split(" ")[0];

  return (
    <motion.article
      variants={cardVariants}
      className="
        group flex flex-col
        border border-warm-parchment/10
        hover:border-shepherds-gold/25
        overflow-hidden
        transition-colors duration-500
      "
    >
      {/* ── Portrait ── */}
      <div className="relative h-72 md:h-80 overflow-hidden shrink-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={member.imagePath}
          alt={`${member.name}, ${member.role}`}
          className="
            w-full h-full object-cover object-top
            transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
            group-hover:scale-[1.05]
          "
          loading="lazy"
        />
        {/* Portrait-to-content gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-forest-ink via-forest-ink/30 to-transparent" />

        {/* Name block over image */}
        <div className="absolute bottom-0 inset-x-0 p-5 md:p-6">
          <p className="font-jakarta text-warm-parchment/40 text-[10px] tracking-[0.2em] uppercase mb-1">
            {member.pronouns}
          </p>
          <h3
            className="font-dm text-warm-parchment leading-[1.15] mb-1"
            style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.5rem)" }}
          >
            {member.name}
          </h3>
          <p className="font-jakarta text-shepherds-gold text-[11px] tracking-[0.14em]">
            {member.role}
          </p>
        </div>
      </div>

      {/* ── Content below portrait ── */}
      <div className="flex flex-col flex-1 p-5 md:p-6 bg-forest-ink">
        {/* Location */}
        <div className="flex items-center gap-1.5 mb-4">
          <MapPin
            className="w-3 h-3 text-brand-sage shrink-0"
            aria-hidden="true"
          />
          <span className="font-jakarta text-brand-sage text-[11px] tracking-wide">
            {member.location}
          </span>
        </div>

        {/* Specialty tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {member.specialty.map((spec) => (
            <span
              key={spec}
              className="font-jakarta text-warm-parchment/40 text-[9px] tracking-[0.12em] uppercase px-2.5 py-1 border border-warm-parchment/10"
            >
              {spec}
            </span>
          ))}
        </div>

        {/* Bio — Lora italic */}
        <p className="font-lora italic text-warm-parchment/48 text-sm leading-relaxed flex-1 mb-7">
          &ldquo;{member.bio}&rdquo;
        </p>

        {/* Per-member CTA */}
        <a
          href="#booking"
          className="group/cta inline-flex items-center gap-2 w-fit font-jakarta font-semibold text-[11px] tracking-[0.18em] uppercase text-warm-parchment/60 border-b border-warm-parchment/18 pb-0.5 hover:text-shepherds-gold hover:border-shepherds-gold/40 transition-all duration-300"
        >
          Get in {firstName}&apos;s Chair
          <ArrowRight
            className="w-3.5 h-3.5 transition-transform duration-300 group-hover/cta:translate-x-1"
            aria-hidden="true"
          />
        </a>
      </div>
    </motion.article>
  );
}

// ── Main component ─────────────────────────────────────────────────────────

export default function TeamSection() {
  return (
    <section
      id="team"
      className="relative py-28 md:py-36 bg-deep-grove overflow-hidden"
    >
      {/* Grain noise */}
      <div aria-hidden className="grain-noise" />

      {/* Subtle warm gradient top edge */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(180,154,61,0.3), transparent)",
        }}
      />

      <div className="relative section-container">
        {/* ── Section header ── */}
        <motion.div
          className="max-w-2xl mb-16 md:mb-20"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.85, ease: "easeOut" }}
        >
          <p className="label text-shepherds-gold mb-5">The Craftspeople</p>

          <h2
            className="font-dm text-warm-parchment leading-[1.15] mb-6"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            The people behind your chair.
          </h2>

          <p className="font-jakarta text-warm-parchment/50 text-base md:text-lg leading-[1.8]">
            These are the craftspeople who&apos;ll be behind your chair. Learn
            their names.{" "}
            <em className="font-lora not-italic text-warm-parchment/30">
              They already know yours.
            </em>
          </p>
        </motion.div>

        {/* ── Team grid ── */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {TEAM.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </motion.div>

        {/* ── Section footer note ── */}
        <motion.p
          className="mt-14 font-jakarta text-warm-parchment/28 text-[11px] tracking-[0.22em] uppercase text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Alberta St. &nbsp;·&nbsp; NW 23rd &nbsp;·&nbsp; Hawthorne
          &nbsp;·&nbsp; Portland, OR
        </motion.p>
      </div>
    </section>
  );
}
