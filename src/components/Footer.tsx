import Link from "next/link";
import { site } from "@/lib/site";
import { sitePages, tools } from "@/lib/nav";

const linkClass = "text-muted-foreground underline-offset-4 hover:text-foreground hover:underline";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 text-sm sm:grid-cols-3 sm:px-6">
        <div>
          <p className="font-display text-lg font-bold">{site.name}</p>
          <p className="mt-2 text-muted-foreground">{site.tagline}. Free, no signup, runs in your browser.</p>
        </div>
        <div>
          <p className="font-bold">Tools</p>
          <ul className="mt-2 space-y-1">
            {tools.map((t) => (
              <li key={t.href}>
                <Link href={t.href} className={linkClass}>
                  {t.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/guides/" className={linkClass}>
                Guides
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-bold">Site</p>
          <ul className="mt-2 space-y-1">
            {sitePages.map((p) => (
              <li key={p.href}>
                <Link href={p.href} className={linkClass}>
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <p className="mx-auto max-w-6xl px-4 py-5 text-xs text-muted-foreground sm:px-6">
          © {new Date().getFullYear()} {site.name} · Last reviewed {site.lastReviewed}
        </p>
      </div>
    </footer>
  );
}
