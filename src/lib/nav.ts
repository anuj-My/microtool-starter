// The site's pages in one place: header, footer, 404 page and sitemap all read from here,
// so adding a tool page means adding one entry.

export interface ToolLink {
  href: string;
  name: string;
  /** Label for the header, a few words. */
  short: string;
  blurb: string;
}

/** The tools themselves. The homepage is the main tool; extra tools or niche variants go here. */
export const tools: ToolLink[] = [
  {
    href: "/",
    name: "ToolName",
    short: "Tool",
    blurb: "What the main tool does, in one line.",
  },
];

/** Trust pages every site needs before applying to AdSense. */
export const sitePages = [
  { href: "/about/", name: "About" },
  { href: "/contact/", name: "Contact" },
  { href: "/privacy-policy/", name: "Privacy policy" },
  { href: "/terms/", name: "Terms" },
];
