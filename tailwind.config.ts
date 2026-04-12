import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // ── Brand Color Palette ──────────────────────────────────
      colors: {
        'forest-ink':     '#1C2B1E',
        'warm-parchment': '#F4EFE4',
        'shepherds-gold': '#B49A3D',
        'worn-leather':   '#8B5E3C',
        'brand-sage':     '#6B7C6D',
        'deep-grove':     '#111A12',
        'dry-grass':      '#D6CEBC',
        'linen-white':    '#FAFAF6',
        'antique-gold':   '#8C7228',
      },
      // ── Typography (consumed via CSS variables from next/font) ─
      fontFamily: {
        cormorant: ['var(--font-cormorant)', 'Georgia', 'serif'],
        dm:        ['var(--font-dm-serif)',   'Georgia', 'serif'],
        jakarta:   ['var(--font-jakarta)',    'system-ui', 'sans-serif'],
        lora:      ['var(--font-lora)',       'Georgia', 'serif'],
      },
      // ── Animation ────────────────────────────────────────────
      transitionTimingFunction: {
        'expo-out': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      // ── Spacing extras ────────────────────────────────────────
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
    },
  },
  plugins: [],
}

export default config
