import type { Metadata } from "next";
import { absoluteUrl, site } from "./site";

interface PageMeta {
  /** Under ~60 characters. The site name is appended unless absoluteTitle is set. */
  title: string;
  /** ~150 characters: what the page answers, in the searcher's words. */
  description: string;
  /** Path with trailing slash, e.g. "/about/". */
  path: string;
  /** Use the title as-is instead of appending the site name. */
  absoluteTitle?: boolean;
  type?: "website" | "article";
  /** This page's own share image (see shareImagePath). Defaults to the site-wide one. */
  image?: { path: string; alt: string };
}

/** Share images are served as og.png next to the page, e.g. /guides/<slug>/og.png. */
export function shareImagePath(pagePath: string): string {
  return `${pagePath}og.png`;
}

// Built by src/app/og.png/route.tsx. Listed on every page because a page's own openGraph block
// replaces the one inherited from the root layout, image included.
const defaultImage = { path: shareImagePath("/"), alt: `${site.name}: ${site.tagline}` };

/** Every page's metadata goes through this, so canonical, Open Graph and X cards are never missing. */
export function pageMetadata({ title, description, path, absoluteTitle, type = "website", image = defaultImage }: PageMeta): Metadata {
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: site.name,
      type,
      locale: "en_US",
      images: [{ url: image.path, width: 1200, height: 630, alt: image.alt }],
    },
    twitter: { card: "summary_large_image", title, description, images: [image.path] },
  };
}

/** The site as a schema.org Organization: the publisher in every page's structured data. */
export const organization = {
  "@type": "Organization",
  "@id": absoluteUrl("/#organization"),
  name: site.name,
  url: absoluteUrl("/"),
  logo: absoluteUrl("/icon.svg"),
  email: site.contactEmail,
};

/** A <script type="application/ld+json"> body, safe to inline. */
export function jsonLd(data: object): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
