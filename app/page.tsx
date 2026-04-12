/**
 * app/page.tsx
 *
 * Pure layout orchestrator — this file does ONE thing: compose the sections.
 * All logic, data, and styles live in the individual components.
 *
 * Section map (scroll order):
 *  00 Navbar       — fixed, transparent → forest-ink on scroll
 *  01 Hero         — full-viewport dark entry
 *  02 About        — origin story, split layout
 *  03 Services     — 4-card grid on parchment bg
 *  04 TeamSection  — craftspeople on forest-ink bg
 *  05 Locations    — 3 location cards
 *  06 Gallery      — immersive photo masonry
 *  07 Community    — values / JOIN PDX prose
 *  08 Testimonials — 3 quotes in Lora italic
 *  09 Franchise    — dark CTA section
 *  10 Footer       — full footer
 */

import Navbar from "@/src/components/Navbar";
import Hero from "@/src/components/Hero";
import About from "@/src/components/About";
import Services from "@/src/components/Services";
import TeamSection from "@/src/components/TeamSection";
import Locations from "@/src/components/Locations";
import Gallery from "@/src/components/Gallery";
import Community from "@/src/components/Community";
import Testimonials from "@/src/components/Testimonials";
import Franchise from "@/src/components/Franchise";
import Footer from "@/src/components/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <TeamSection />
      <Locations />
      <Gallery />
      <Community />
      <Testimonials />
      <Franchise />
      <Footer />
    </main>
  );
}
