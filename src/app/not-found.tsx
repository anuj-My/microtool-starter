import type { Metadata } from "next";
import Link from "next/link";
import { SiteChrome } from "@/components/SiteChrome";
import { tools } from "@/lib/nav";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

// Lives at the app root (outside the (site) group) so it catches every unknown URL, so it adds the site chrome itself.
export default function NotFound() {
  return (
    <SiteChrome>
      <div className="max-w-2xl">
        <h1 className="text-3xl font-bold">Page not found</h1>
        <p className="mt-3 text-muted-foreground">That page doesn&apos;t exist or has moved. Try one of these:</p>
        <ul className="mt-6 space-y-2">
          {tools.map((t) => (
            <li key={t.href}>
              <Link href={t.href} className="font-medium underline underline-offset-2">
                {t.name}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/guides/" className="font-medium underline underline-offset-2">
              Guides
            </Link>
          </li>
        </ul>
      </div>
    </SiteChrome>
  );
}
