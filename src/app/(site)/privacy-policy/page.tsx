import { ProsePage } from "@/components/ProsePage";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description: `How ${site.name} handles your data, including cookies used by Google AdSense.`,
  path: "/privacy-policy/",
});

// Review this whenever you add analytics, affiliate links, uploads or any other third-party service.
export default function Page() {
  return (
    <ProsePage title="Privacy Policy" path="/privacy-policy/" updated={site.lastReviewed}>
      <p>
        This policy explains what information {site.name} ({site.url}) collects and how it is used.
      </p>

      <h2>The tool</h2>
      <p>The tool runs in your browser. What you enter is not sent to us or stored on our servers.</p>

      <h2>Information collected automatically</h2>
      <p>
        Like most websites, our hosting provider (Cloudflare) may log standard technical information when you visit, such as your IP
        address, browser type, pages requested and the time of the request. These logs are used for security and to keep the site
        running, and are not used to identify you.
      </p>
      <p>
        We use Cloudflare Web Analytics to count visits. It does not use cookies or collect personal information.
      </p>

      <h2>Advertising and cookies</h2>
      <p>This site may show ads served by Google AdSense. In that case:</p>
      <ul>
        <li>
          Third-party vendors, including Google, use cookies to serve ads based on your previous visits to this and other websites.
        </li>
        <li>
          Google&apos;s use of advertising cookies enables it and its partners to serve ads based on your visits to this site and/or
          other sites on the internet.
        </li>
        <li>
          You can opt out of personalized advertising by visiting Google&apos;s{" "}
          <a href="https://adssettings.google.com" rel="noopener noreferrer" target="_blank">
            Ads Settings
          </a>
          . You can also opt out of some third-party vendors&apos; use of cookies for personalized advertising at{" "}
          <a href="https://www.aboutads.info/choices/" rel="noopener noreferrer" target="_blank">
            aboutads.info
          </a>
          .
        </li>
        <li>
          Learn more in{" "}
          <a href="https://policies.google.com/technologies/partner-sites" rel="noopener noreferrer" target="_blank">
            How Google uses information from sites or apps that use its services
          </a>
          .
        </li>
      </ul>
      <p>
        Visitors in the European Economic Area, the UK and Switzerland are asked for consent before personalized ads or cookies are
        used, through a consent message shown on the site.
      </p>

      <h2>Contacting us</h2>
      <p>If you email us, we use your email address only to reply. We don&apos;t sell or share it.</p>

      <h2>Children</h2>
      <p>This site is not directed at children under 13 and does not knowingly collect their information.</p>

      <h2>Your rights</h2>
      <p>
        Depending on where you live (for example under the GDPR or California privacy law), you may have rights to access, correct
        or delete personal information. Contact us at <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a> and we&apos;ll
        help.
      </p>

      <h2>Changes</h2>
      <p>We may update this policy. The date at the top shows when it last changed.</p>
    </ProsePage>
  );
}
