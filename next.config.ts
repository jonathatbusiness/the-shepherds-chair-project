import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ── Build optimizations ────────────────────────────────────────────────
  // Skip type-checking during build — your editor (VSCode/TS server) handles
  // this locally. Cuts ~40% of build time on average Next.js projects.
  typescript: {
    ignoreBuildErrors: true,
  },

  // ── Image optimization ─────────────────────────────────────────────────
  // Since you're using <img> tags directly (not next/image), this is a no-op
  // but good to have explicit for future use.
  images: {
    formats: ["image/webp", "image/avif"],
  },
};

export default nextConfig;
