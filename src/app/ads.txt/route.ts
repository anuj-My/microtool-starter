import { site } from "@/lib/site";

export const dynamic = "force-static";

// AdSense ads.txt. Generated from the publisher ID in src/lib/site.ts.
export function GET() {
  const id = site.adsense.publisherId.replace(/^ca-/, "");
  const body = id ? `google.com, ${id}, DIRECT, f08c47fec0942fa0\n` : "# Add your AdSense publisher ID in src/lib/site.ts\n";
  return new Response(body, { headers: { "Content-Type": "text/plain" } });
}
