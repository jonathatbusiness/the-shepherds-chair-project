# The Shepherd's Chair

> **⚠️ Fictional Project** — This is a portfolio and learning project. The Shepherd's Chair is a fictional barbershop brand created for the sole purpose of practicing modern front-end architecture, AI-assisted development workflows, and design system implementation. Any resemblance to real businesses, people, or locations is coincidental.

---

## What This Is

A production-grade **one-page website** for _The Shepherd's Chair_ — a fictional craft barbershop franchise set in Portland, OR. The project simulates a real client engagement from brand discovery to code delivery, with the goal of exploring a structured AI-assisted development workflow at a professional quality level.

**Live scope:** 10-section scrollable one-pager covering Hero, Origin Story, Services, Team, Locations, Gallery, Community, Testimonials, Franchise inquiry, and Footer.

---

## The Development Strategy

### Step 1 — Brand First, Code Never

Before a single line of code was written, a **comprehensive Brand & Project Brief** was authored. This 650-line markdown document covered:

- Client overview, business identity, mission and values
- Four customer avatars with detailed lifestyle profiles
- Brand identity: color palette (5 primary + 4 extended), typography system (4 Google Fonts with scale definitions), logo concept with SVG specification
- Team profiles with physical descriptions, personality notes, and specialties
- Shop space description — interior and exterior, material by material
- Photography direction: lighting, color treatment, composition rules, and photographer references (Alec Soth, Devin Allen, Rinko Kawauchi)
- Communication identity: brand voice, vocabulary table (generic vs. brand language)
- Full 10-section website structure with copy, layout, and UX notes per section

The thesis: **an LLM given a shallow brief produces shallow output. An LLM given a rich, structured brief acts as a senior collaborator.**

### Step 2 — Architecture Before Components

With the brief as the single source of truth, the architecture was defined before any component was generated:

- All 11 components were named, scoped, and their responsibilities written out
- `app/page.tsx` was established as a **pure orchestrator** — zero logic, zero styles, only imports and composition
- The design system was codified first in `tailwind.config.ts` (custom colors, font families via CSS variables)
- `globals.css` was kept lean — only reusable utilities like `.grain-noise`, `.section-container`, and `.label`

### Step 3 — Components in Order of Visual Impact

Components were built in descending priority of user perception:

1. `Hero.tsx` — First impression; 6 z-indexed layers (bg image → forest ink overlay → animated crook watermark → grain noise → radial vignette → content)
2. `Services.tsx` — Revenue section; staggered 4-card grid with Framer Motion variants
3. `TeamSection.tsx` — Trust section; 5-card dark layout on `deep-grove` bg with portrait-to-content gradients
4. All remaining sections — fully scaffolded with the same visual quality, no stubs left behind

### Step 4 — Image Strategy as a Deliverable

Rather than leaving placeholder images as a loose end, a **formal Image Asset Inventory** was produced as a markdown document (`shepherds-chair-image-inventory.md`), cataloging all 30 assets with:

- SEO-optimized file names in `.webp`
- Organized folder structure under `public/`
- Exact dimensions per use context
- AI generation prompts grounded in the brief's photography guidelines and character descriptions

---

## Tech Stack

| Layer     | Technology                                                                                   |
| --------- | -------------------------------------------------------------------------------------------- |
| Framework | [Next.js 15](https://nextjs.org/) — App Router                                               |
| Language  | TypeScript (strict)                                                                          |
| Styling   | [Tailwind CSS v3](https://tailwindcss.com/) — custom design system                           |
| Animation | [Framer Motion](https://www.framer.com/motion/) — scroll reveals, entrance sequences         |
| Icons     | [Lucide React](https://lucide.dev/)                                                          |
| Fonts     | Google Fonts via `next/font` — Cormorant Garamond, DM Serif Display, Plus Jakarta Sans, Lora |
| Images    | Unsplash placeholders → to be replaced with generated/commissioned assets                    |

---

## Design System

### Color Palette

| Token            | Hex       | Role                            |
| ---------------- | --------- | ------------------------------- |
| `forest-ink`     | `#1C2B1E` | Primary background, dominant    |
| `warm-parchment` | `#F4EFE4` | Light backgrounds, text on dark |
| `shepherds-gold` | `#B49A3D` | Accent, CTAs, highlights        |
| `worn-leather`   | `#8B5E3C` | Texture accents, hover states   |
| `brand-sage`     | `#6B7C6D` | Secondary text, muted UI        |
| `deep-grove`     | `#111A12` | Dark section backgrounds        |
| `dry-grass`      | `#D6CEBC` | Dividers, card backgrounds      |
| `linen-white`    | `#FAFAF6` | Page background                 |
| `antique-gold`   | `#8C7228` | Hover states on gold elements   |

### Typography

| Role             | Font               | Weight     | Usage                        |
| ---------------- | ------------------ | ---------- | ---------------------------- |
| Display / Hero   | Cormorant Garamond | 700        | Hero headline, pull quotes   |
| Section Headings | DM Serif Display   | 400        | H2, H3, subheadings          |
| Body / UI        | Plus Jakarta Sans  | 400–600    | All body copy, nav, buttons  |
| Accent / Quotes  | Lora               | 400 Italic | Testimonials, taglines, bios |

---

## Project Structure

```
the-shepherds-chair/
├── app/
│   ├── globals.css          # Tailwind directives + shared utilities
│   ├── layout.tsx           # Root layout — Google Fonts, metadata
│   └── page.tsx             # Pure orchestrator — imports only
│
├── src/
│   └── components/
│       ├── Navbar.tsx        # Sticky nav — transparent → forest-ink on scroll
│       ├── Hero.tsx          # §01 Full-viewport hero — animated crook watermark
│       ├── About.tsx         # §02 Origin story — split layout text/image
│       ├── Services.tsx      # §03 4-card services grid
│       ├── TeamSection.tsx   # §04 The Craftspeople — 5 barber cards
│       ├── Locations.tsx     # §05 3 location cards with hours
│       ├── Gallery.tsx       # §06 Editorial asymmetric masonry
│       ├── Community.tsx     # §07 Values + JOIN PDX — prose only
│       ├── Testimonials.tsx  # §08 3 quotes in Lora italic
│       ├── Franchise.tsx     # §09 Dark section + contact form
│       └── Footer.tsx        # §10 Full footer
│
├── public/
│   └── images/              # (to be populated — see image inventory)
│       ├── brand/
│       ├── hero/
│       ├── about/
│       ├── services/
│       ├── team/
│       ├── locations/
│       └── gallery/
│
├── shepherds-chair-image-inventory.md  # Full image asset spec (30 assets)
├── tailwind.config.ts
├── next.config.ts
└── tsconfig.json
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/jonathatbusiness/the-shepherds-chair-project.git
cd the-shepherds-chair-project

# Install dependencies
npm install

# Install required packages (if starting fresh)
npm install framer-motion lucide-react
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm run start
```

---

## Roadmap

- [ ] Replace Unsplash placeholders with generated/commissioned photography (see `shepherds-chair-image-inventory.md`)
- [ ] Connect booking CTA (`#booking`) to a real scheduling system (Cal.com, Booksy, or custom)
- [ ] Wire franchise form to API (Resend + email, or Notion database)
- [ ] Implement newsletter form backend (ConvertKit or Mailchimp)
- [ ] Add `next/image` optimization after migrating photos to `public/`
- [ ] Register `images.unsplash.com` in `next.config.ts` domains in the interim
- [ ] Animate the gallery section hover tags on mobile (currently desktop-only)
- [ ] Add `robots.txt` and `sitemap.xml` for SEO
- [ ] Accessibility audit — keyboard navigation, focus rings, ARIA labels review

---

## Acknowledgements

This project was developed using [Claude](https://claude.ai) (Anthropic) as a collaborative development partner. The workflow demonstrates that **the quality of AI-assisted output is directly proportional to the quality of the brief given to it** — the Brand & Project Brief document was the true foundation of everything produced here.

Photography placeholders sourced from [Unsplash](https://unsplash.com).
Brand copy and all fictional characters, names, and business details were created for this project.

---

## License

This project is for **portfolio and educational purposes only**.
The Shepherd's Chair is a fictional brand — not a real business, not open for franchise, not accepting bookings.

---

_The Shepherd's Chair · Portland, OR · Est. 2017 (fictionally) · Closed Sundays_
