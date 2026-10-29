import type { ReactNode } from "react";
import { jsonLd } from "@/lib/seo";

export interface FaqItem {
  q: string;
  a: ReactNode;
  /** Plain-text answer for structured data. Required when `a` is not a string. */
  aText?: string;
}

/** Visible FAQ plus matching FAQPage structured data. Questions should be real searches (autocomplete, People Also Ask). */
export function Faq({ items, title = "Frequently asked questions" }: { items: FaqItem[]; title?: string }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.flatMap((item) => {
      const text = item.aText ?? (typeof item.a === "string" ? item.a : undefined);
      return text ? [{ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text } }] : [];
    }),
  };

  return (
    <section className="mt-12">
      <h2 className="mb-4 text-2xl font-bold">{title}</h2>
      <div className="divide-y divide-border rounded-lg border border-border bg-card">
        {items.map((item) => (
          <details key={item.q} className="group px-4 py-3 sm:px-5">
            <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 font-medium">
              {item.q}
              <span aria-hidden className="text-muted-foreground transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <div className="prose-site pt-2 text-muted-foreground">{item.a}</div>
          </details>
        ))}
      </div>
      {data.mainEntity.length > 0 && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(data) }} />}
    </section>
  );
}
