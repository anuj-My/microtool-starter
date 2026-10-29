import { AdSlot } from "@/components/AdSlot";
import { Faq, type FaqItem } from "@/components/Faq";
import { organization, jsonLd, pageMetadata } from "@/lib/seo";
import { absoluteUrl, site } from "@/lib/site";

export const metadata = pageMetadata({
  // The homepage title is the main keyword, not the brand.
  title: `${site.name}: ${site.tagline}`,
  absoluteTitle: true,
  description: site.description,
  path: "/",
});

const faqs: FaqItem[] = [
  { q: "Is it free?", a: `Yes. ${site.name} is free, needs no signup, and runs entirely in your browser.` },
];

// The homepage IS the tool: the tool sits in the first screen on a phone, with the explanation and FAQ below it.
// Tool UI goes in src/components/tool/ (client components); its logic goes in src/lib/ with tests.
export default function Page() {
  const app = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: site.name,
    url: absoluteUrl("/"),
    description: site.description,
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Any",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    publisher: organization,
  };

  return (
    <>
      <h1 className="text-3xl font-bold md:text-4xl">{site.tagline}</h1>
      <section className="mt-6 rounded-lg border border-border bg-card p-6">
        <p className="text-muted-foreground">The tool goes here.</p>
      </section>

      <AdSlot name="afterTool" />

      <article className="prose-site mt-10">
        <h2>How it works</h2>
        <p>Explain the method in plain words. Show the math or the rules: it is what makes the page worth ranking.</p>
      </article>

      <Faq items={faqs} />
      <AdSlot name="bottom" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(app) }} />
    </>
  );
}
