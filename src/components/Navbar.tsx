'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

// ── Types ──────────────────────────────────────────────────────────────────

interface NavLink {
  label: string
  href:  string
}

// ── Data ───────────────────────────────────────────────────────────────────

const NAV_LINKS: NavLink[] = [
  { label: 'The Work',         href: '#services'  },
  { label: 'The Craftspeople', href: '#team'       },
  { label: 'Locations',        href: '#locations'  },
  { label: 'Community',        href: '#community'  },
  { label: 'Franchise',        href: '#franchise'  },
]

// ── Sub-components ─────────────────────────────────────────────────────────

/** Shepherd's crook mark — single-weight line illustration */
function CrookMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 62"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Hook */}
      <path
        d="M20 10 C20 10, 34 10, 34 24 C34 38, 20 38, 20 38 L20 55"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* Razor handle hint */}
      <rect x="15.5" y="55" width="9" height="5" rx="1" fill="currentColor" opacity="0.65" />
    </svg>
  )
}

// ── Main component ─────────────────────────────────────────────────────────

export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false)
  const [mobileOpen,  setMobileOpen]  = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 72)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-500
          ${scrolled
            ? 'bg-forest-ink/96 backdrop-blur-md py-4 border-b border-warm-parchment/8'
            : 'bg-transparent py-6'
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

          {/* ── Logo ── */}
          <a href="#hero" className="flex items-center gap-3 group" aria-label="The Shepherd's Chair — home">
            <CrookMark className="w-7 h-9 text-shepherds-gold transition-opacity duration-300 group-hover:opacity-75" />
            <div className="leading-none">
              <p className="font-jakarta font-semibold text-warm-parchment text-[10px] tracking-[0.25em] uppercase mb-0.5">
                The Shepherd&apos;s
              </p>
              <p className="font-cormorant text-shepherds-gold text-xl font-semibold leading-none">
                Chair
              </p>
            </div>
          </a>

          {/* ── Desktop navigation ── */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="
                  font-jakarta text-warm-parchment/65 text-[11px] tracking-[0.18em] uppercase
                  hover:text-warm-parchment transition-colors duration-300
                  link-underline
                "
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* ── Desktop CTA ── */}
          <a
            href="#booking"
            className="
              hidden md:inline-flex items-center
              font-jakarta font-semibold text-[11px] tracking-[0.2em] uppercase
              bg-shepherds-gold text-forest-ink
              px-6 py-3
              hover:bg-antique-gold
              transition-colors duration-300
            "
          >
            Get in the Chair
          </a>

          {/* ── Mobile hamburger ── */}
          <button
            className="md:hidden text-warm-parchment p-1.5 -mr-1.5"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -45, opacity: 0 }}
                  animate={{ rotate: 0,   opacity: 1 }}
                  exit={{   rotate:  45,  opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 45,  opacity: 0 }}
                  animate={{ rotate: 0,   opacity: 1 }}
                  exit={{   rotate: -45,  opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>

        </div>
      </header>

      {/* ── Mobile menu overlay ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="md:hidden fixed inset-0 z-40 bg-deep-grove flex flex-col"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1,  y: 0  }}
            exit={{   opacity: 0,  y: -12 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            {/* Grain */}
            <div aria-hidden className="grain-noise" />

            <div className="relative flex flex-col flex-1 px-8 pt-28 pb-12">
              <nav className="flex flex-col gap-8 mb-12" aria-label="Mobile navigation">
                {NAV_LINKS.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="font-dm text-warm-parchment text-3xl hover:text-shepherds-gold transition-colors duration-300"
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1,  x: 0  }}
                    transition={{ delay: 0.08 * i, duration: 0.4 }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>

              <a
                href="#booking"
                onClick={() => setMobileOpen(false)}
                className="
                  self-start font-jakarta font-semibold text-xs tracking-[0.22em] uppercase
                  bg-shepherds-gold text-forest-ink px-8 py-4
                  hover:bg-antique-gold transition-colors duration-300
                "
              >
                Get in the Chair
              </a>

              <p className="mt-auto font-jakarta text-warm-parchment/25 text-[10px] tracking-widest uppercase">
                Portland, OR · Est. 2017 · Closed Sundays
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
