import type { ReactNode } from "react";
import { PageHeader } from "./PageHeader";

/** A plain text page: about, contact, privacy, terms. */
export function ProsePage({ title, path, updated, children }: { title: string; path: string; updated?: string; children: ReactNode }) {
  return (
    <>
      <PageHeader crumbs={[{ name: title, href: path }]} title={title} meta={updated && `Last updated ${updated}`} />
      <article className="prose-site">{children}</article>
    </>
  );
}
