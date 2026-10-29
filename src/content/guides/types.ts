import type { ReactNode } from "react";
import type { FaqItem } from "@/components/Faq";

export interface Guide {
  /** The URL slug: the search query in kebab case, e.g. "how-to-add-fonts-to-pixellab". */
  slug: string;
  /** <title> tag, under ~60 characters, phrased the way people search. */
  title: string;
  h1: string;
  /** ~150 characters for the search result. */
  description: string;
  /** Short label for guide lists and breadcrumbs. */
  linkText: string;
  /** The answer in 2–3 sentences. Shown first; Google snippets and AI answers quote it. */
  quickAnswer: ReactNode;
  body: ReactNode;
  faqs: FaqItem[];
}
