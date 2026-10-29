import Link from "next/link";
import type { Guide } from "./types";

// Example guide: replace it with the first real one. One file per guide, one search question per guide.
export const guide: Guide = {
  slug: "how-to-do-the-thing",
  title: "How to Do the Thing (Step by Step)",
  h1: "How to do the thing",
  description: "The short answer, the steps, and the mistakes to avoid, with a free tool that does it for you.",
  linkText: "Doing the thing",
  quickAnswer: (
    <>
      Answer the question here in two or three sentences, with the <strong>key number or step</strong> in bold.
    </>
  ),
  body: (
    <>
      <h2>Steps</h2>
      <ol>
        <li>Something specific to this question, not text that could sit on any page.</li>
        <li>
          Link to the tool where it helps: <Link href="/">try it in the tool</Link>.
        </li>
      </ol>
    </>
  ),
  faqs: [{ q: "A real follow-up question people search?", a: "A direct, self-contained answer." }],
};
