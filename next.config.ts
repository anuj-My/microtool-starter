import type { NextConfig } from "next";
import { PHASE_DEVELOPMENT_SERVER } from "next/constants";

// Static export: `next build` writes plain HTML/CSS/JS to `out/`,
// which Cloudflare Workers (wrangler.jsonc) serves directly. No server code runs.
export default function config(phase: string): NextConfig {
  const dev = phase === PHASE_DEVELOPMENT_SERVER;
  return {
    output: "export",
    trailingSlash: true,
    images: { unoptimized: true },
    // `page.dev.tsx` files are pages only under `next dev`, e.g. a /style-guide page.
    // A production build never sees them, so they can't be deployed by accident.
    pageExtensions: dev ? ["dev.tsx", "tsx", "ts"] : ["tsx", "ts"],
    turbopack: {
      rules: {
        "*.css": {
          loaders: ["@tailwindcss/turbopack"],
          as: "*.css",
        },
      },
    },
  };
}
