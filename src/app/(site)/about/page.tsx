import Link from "next/link";
import { ProsePage } from "@/components/ProsePage";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "About",
  description: `Who makes ${site.name} and why.`,
  path: "/about/",
});

// A real person behind the site helps readers, Google (E-E-A-T) and AdSense trust it.
// The "Who's behind" section must be true and in the owner's own words: ask them, never invent it.
export default function Page() {
  return (
    <ProsePage title="About" path="/about/">
      <p>{site.name} is a free tool that… (what it does, for whom, in two sentences).</p>
      <h2>Who&apos;s behind {site.name}</h2>
      <p>Hi, I&apos;m {site.author}. (Why you built it, in your own words: the problem you hit, what you found lacking.)</p>
      <h2>How it works</h2>
      <ul>
        <li>
          <strong>No signup.</strong> Everything runs in your browser. Nothing you enter is uploaded.
        </li>
        <li>
          <strong>Open method.</strong> (Where the data comes from, how it&apos;s checked, when it was last reviewed: {site.lastReviewed}.)
        </li>
      </ul>
      <h2>Corrections</h2>
      <p>
        Spotted a mistake? Please <Link href="/contact/">tell me</Link>.
      </p>
    </ProsePage>
  );
}
