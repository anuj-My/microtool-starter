import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { guides } from "@/content/guides";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Guides",
  description: `Step-by-step answers from ${site.name}.`,
  path: "/guides/",
});

export default function Page() {
  return (
    <>
      <PageHeader crumbs={[{ name: "Guides", href: "/guides/" }]} title="Guides" />
      <ul className="grid gap-3 sm:grid-cols-2">
        {guides.map((g) => (
          <li key={g.slug}>
            <Link href={`/guides/${g.slug}/`} className="block rounded-lg border border-border bg-card px-4 py-4 hover:bg-accent">
              <span className="font-medium">{g.h1}</span>
              <span className="mt-1 block text-sm text-muted-foreground">{g.description}</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
