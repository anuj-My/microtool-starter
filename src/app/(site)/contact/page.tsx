import { ProsePage } from "@/components/ProsePage";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Contact",
  description: `How to reach ${site.name}: corrections, suggestions and questions.`,
  path: "/contact/",
});

// The address must actually work: set up Cloudflare Email Routing before launch (plan.md).
export default function Page() {
  return (
    <ProsePage title="Contact" path="/contact/">
      <p>
        Questions, corrections or ideas for {site.name}? Email <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>. I read
        everything and usually reply within a few days.
      </p>
    </ProsePage>
  );
}
