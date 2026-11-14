import path from "node:path";
import type { NextConfig } from "next";

/**
 * Site 100% estático: `npm run build` gera a pasta `out/`, que pode ser publicada
 * em qualquer hospedagem (Vercel, Netlify, GitHub Pages, S3, servidor comum).
 */
const nextConfig: NextConfig = {
  output: "export",
  poweredByHeader: false,
  images: { unoptimized: true },
  turbopack: { root: path.resolve(__dirname) },
};

export default nextConfig;
