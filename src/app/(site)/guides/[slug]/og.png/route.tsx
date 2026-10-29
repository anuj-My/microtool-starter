import { getGuide, guides } from "@/content/guides";
import { renderShareImage } from "@/lib/shareImage";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

// Share image for a guide, at /guides/<slug>/og.png.
export async function GET(_request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const g = getGuide((await params).slug)!;
  return renderShareImage({ label: "Guide", title: g.h1 });
}
