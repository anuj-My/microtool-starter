import { ProsePage } from "@/components/ProsePage";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Terms of Use",
  description: `The terms for using ${site.name}, and the limits of its results.`,
  path: "/terms/",
});

// Add a tool-specific disclaimer (e.g. "estimates only", "not legal/medical/financial advice") where results could be relied on.
export default function Page() {
  return (
    <ProsePage title="Terms of Use" path="/terms/" updated={site.lastReviewed}>
      <p>By using {site.name} you agree to these terms.</p>

      <h2>Use of the site</h2>
      <p>
        {site.name} is free to use for personal and commercial purposes. Don&apos;t misuse it: no automated scraping that
        overloads the site, and no attempts to break or disrupt it.
      </p>

      <h2>No warranty</h2>
      <p>
        The tool and guides are provided &quot;as is&quot;. We work to keep them accurate, but results are estimates and
        may contain mistakes. Check anything important against an authoritative source before relying on it.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        To the extent the law allows, {site.name} is not liable for any loss or damage arising from use of the site or
        reliance on its results.
      </p>

      <h2>Links to other sites</h2>
      <p>We link to other websites for reference. We don&apos;t control them and aren&apos;t responsible for their content.</p>

      <h2>Changes</h2>
      <p>
        We may update these terms. The date at the top shows when they last changed. Questions:{" "}
        <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>.
      </p>
    </ProsePage>
  );
}
