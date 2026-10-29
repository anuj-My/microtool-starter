import { renderShareImage } from "@/lib/shareImage";
import { site } from "@/lib/site";

export const dynamic = "force-static";

// Site-wide share image at /og.png: the homepage and any page without its own.
export function GET() {
  return renderShareImage({ title: site.tagline });
}
