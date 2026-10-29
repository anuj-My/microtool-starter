import Link from "next/link";
import { notFound } from "next/navigation";
import { AdSlot } from "@/components/AdSlot";
import { Faq } from "@/components/Faq";
import { PageHeader } from "@/components/PageHeader";
import { getGuide, guides } from "@/content/guides";
import { jsonLd, organization, pageMetadata, shareImagePath } from "@/lib/seo";
import { absoluteUrl, site } from "@/lib/site";

// Static export: only the slugs listed below exist.
export const dynamicParams = false;

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata(props: PageProps<"/guides/[slug]">) {
  const { slug } = await props.params;
  const g = getGuide(slug);
  if (!g) return {};
  const path = `/guides/${g.slug}/`;
  return pageMetadata({ title: g.title, description: g.description, path, type: "article", image: { path: shareImagePath(path), alt: g.h1 } });
}

export default async function Page(props: PageProps<"/guides/[slug]">) {
  const { slug } = await props.params;
  const g = getGuide(slug);
  if (!g) notFound();

  const path = `/guides/${g.slug}/`;
  const others = guides.filter((x) => x.slug !== g.slug);
  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: g.h1,
    description: g.description,
    url: absoluteUrl(path),
    mainEntityOfPage: absoluteUrl(path),
    image: absoluteUrl(shareImagePath(path)),
    dateModified: site.lastReviewed,
    author: organization,
    publisher: organization,
  };

  return (
    <>
      <PageHeader crumbs={[{ name: "Guides", href: "/guides/" }, { name: g.linkText, href: path }]} title={g.h1} meta={`Last reviewed ${site.lastReviewed}`}>
        <div className="mt-6 max-w-3xl rounded-lg border border-border bg-card p-5 leading-7">
          <p className="mb-1 font-bold">Quick answer</p>
          <p>{g.quickAnswer}</p>
        </div>
      </PageHeader>

      <article className="prose-site">{g.body}</article>
      <AdSlot name="inContent" />
      <div className="max-w-3xl">
        <Faq items={g.faqs} />
      </div>

      {others.length > 0 && (
        <section className="mt-12">
          <h2 className="mb-4 text-2xl font-bold">More guides</h2>
          <ul className="grid gap-2 sm:grid-cols-2">
            {others.map((o) => (
              <li key={o.slug}>
                <Link href={`/guides/${o.slug}/`} className="block rounded-lg border border-border bg-card px-4 py-3 text-sm font-medium hover:bg-accent">
                  {o.h1}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <AdSlot name="bottom" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(article) }} />
    </>
  );
}
