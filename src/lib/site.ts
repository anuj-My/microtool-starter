// Site-wide settings. Change these first when starting a new tool.
export const site = {
  name: "ToolName",
  tagline: "Free tool that does one thing well",
  // ~150 characters. Shown in search results for the homepage.
  description: "One or two plain sentences saying what the tool does and who it's for. Free, no signup, runs in your browser.",
  // Your real domain, https, no www, no trailing slash. Used for canonical URLs, the sitemap and share images.
  url: "https://example.com",
  contactEmail: "hello@example.com",
  // Who runs the site, shown on the About page. A real person is a trust signal for readers, Google and AdSense.
  author: "Anuj",
  // Date the data and guides were last checked. Update it when you review them.
  lastReviewed: "2026-01-01",

  adsense: {
    // Set publisherId (ca-pub-XXXXXXXXXXXXXXXX) as soon as you add the site in AdSense:
    // it adds the verification meta tag and ads.txt.
    publisherId: "",
    // Keep false until AdSense approves the site. With no slot IDs, only Auto ads run.
    enabled: false,
    slots: {
      afterTool: "",
      inContent: "",
      bottom: "",
    },
  },
} as const;

export type AdSlotName = keyof typeof site.adsense.slots;

export function absoluteUrl(path: string): string {
  return new URL(path, site.url).toString();
}
