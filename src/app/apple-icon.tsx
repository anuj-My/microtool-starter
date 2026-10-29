import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// Home-screen icon for iOS: the favicon (app/icon.svg) at full bleed, since iOS rounds the corners itself.
// Redraw it when icon.svg changes.
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#1b1a18" }}>
        <div style={{ width: 80, height: 80, borderRadius: 12, background: "#f5f3ef" }} />
      </div>
    ),
    size,
  );
}
