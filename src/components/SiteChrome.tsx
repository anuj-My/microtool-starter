import type { ReactNode } from "react";
import Script from "next/script";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { site } from "@/lib/site";

const { publisherId, enabled: adsEnabled } = site.adsense;

/** Header, footer and AdSense for every normal page. */
export function SiteChrome({ children }: { children: ReactNode }) {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:rounded focus:bg-card focus:px-3 focus:py-2">
        Skip to content
      </a>
      <Header />
      <main id="main" className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 sm:px-6">
        {children}
      </main>
      <Footer />
      {adsEnabled && publisherId && (
        <Script
          id="adsense"
          async
          strategy="afterInteractive"
          crossOrigin="anonymous"
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${publisherId}`}
        />
      )}
    </>
  );
}
