import type { MetadataRoute } from "next";
import { guides } from "@/content/guides";
import { sitePages, tools } from "@/lib/nav";
import { absoluteUrl, site } from "@/lib/site";

export const dynamic = "force-static";

// Every indexable page. New page types (e.g. /items/<slug>/) get added here from their data file.
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    ...tools.map((t) => t.href),
    "/guides/",
    ...guides.map((g) => `/guides/${g.slug}/`),
    ...sitePages.map((p) => p.href),
  ];
  return [...new Set(paths)].map((p) => ({ url: absoluteUrl(p), lastModified: site.lastReviewed }));
}
