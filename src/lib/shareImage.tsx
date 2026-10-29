// Share images (Open Graph / X cards), rendered once at build time by next/og.
// The renderer doesn't read CSS variables, so the theme colours are repeated here in hex.
// Restyle this to match DESIGN.md when the site's look is decided.
import { ImageResponse } from "next/og";
import { site } from "./site";

export const shareImageSize = { width: 1200, height: 630 };

const C = { bg: "#f4f2ee", text: "#1b1a18", muted: "#6b6760", rule: "#d8d4cc" };

interface ShareImage {
  /** What kind of page, e.g. "Guide". Omit on the homepage. */
  label?: string;
  title: string;
}

export function renderShareImage({ label, title }: ShareImage) {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", backgroundColor: C.bg, color: C.text, padding: 72 }}>
        <div style={{ display: "flex", fontSize: 32, fontWeight: 700 }}>{site.name}</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {label && <div style={{ display: "flex", fontSize: 28, color: C.muted }}>{label}</div>}
          <div style={{ display: "flex", fontSize: title.length > 48 ? 56 : 68, fontWeight: 700, lineHeight: 1.1, letterSpacing: -1.5 }}>{title}</div>
        </div>
        <div style={{ display: "flex", fontSize: 26, color: C.muted, borderTop: `2px solid ${C.rule}`, paddingTop: 20 }}>{new URL(site.url).host}</div>
      </div>
    ),
    shareImageSize,
  );
}
