import type { ReactNode } from "react";
import { Breadcrumbs, type Crumb } from "./Breadcrumbs";

interface PageHeaderProps {
  crumbs: Crumb[];
  title: ReactNode;
  /** Small line under the title, e.g. "Last reviewed …". */
  meta?: ReactNode;
  intro?: ReactNode;
  /** Anything else that belongs at the top, such as a quick-answer box. */
  children?: ReactNode;
}

/** Breadcrumbs and the page's one h1, at the top of every inner page. */
export function PageHeader({ crumbs, title, meta, intro, children }: PageHeaderProps) {
  return (
    <div className="mb-10">
      <Breadcrumbs items={crumbs} />
      <h1 className="max-w-4xl text-3xl leading-tight font-bold md:text-4xl">{title}</h1>
      {meta && <p className="mt-2 text-sm text-muted-foreground">{meta}</p>}
      {intro && <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{intro}</p>}
      {children}
    </div>
  );
}
