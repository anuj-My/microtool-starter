import Link from "next/link";
import { site } from "@/lib/site";
import { tools } from "@/lib/nav";

// Placeholder structure. Restyle to DESIGN.md; keep the links real (tools + guides) and the tap targets 44 px.
export function Header() {
  const links = [...tools.filter((t) => t.href !== "/"), { href: "/guides/", short: "Guides" }];
  return (
    <header className="border-b border-border">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="font-display text-lg font-bold">
          {site.name}
        </Link>
        <nav aria-label="Main">
          <ul className="flex items-center gap-1 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="inline-flex min-h-11 items-center rounded-md px-3 hover:bg-accent">
                  {l.short}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
