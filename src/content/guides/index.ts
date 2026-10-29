import type { Guide } from "./types";
import { guide as example } from "./example";

// To add a guide: create a file in this folder exporting `guide`, then add it here.
// The guides page, sitemap and share images pick it up automatically.
export const guides: Guide[] = [example];

export function getGuide(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}
