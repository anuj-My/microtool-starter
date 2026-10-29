import type { Metadata, Viewport } from "next";
import { site } from "@/lib/site";
import "./globals.css";

// Fonts: pick them in DESIGN.md, then load them here with next/font/google (self-hosted at build time,
// so pages make no requests to Google) and add their variables to <html>:
//   const display = Some_Face({ subsets: ["latin"], variable: "--font-display-face" });
//   const body = Other_Face({ subsets: ["latin"], variable: "--font-body-face" });
// globals.css maps them to font-display and font-sans.

const { publisherId } = site.adsense;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    template: `%s | ${site.name}`,
    default: `${site.name}: ${site.tagline}`,
  },
  description: site.description,
  applicationName: site.name,
  // AdSense site verification. Present as soon as a publisher ID is set, even before ads are enabled.
  other: publisherId ? { "google-adsense-account": publisherId } : undefined,
};

export const viewport: Viewport = {
  // Keep in step with --background in globals.css.
  themeColor: "#f5f3ef",
};

// Header, footer and ads live in (site)/layout.tsx, so pages outside the group (e.g. an embeddable widget) can leave them out.
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full">
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
