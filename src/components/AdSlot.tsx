"use client";

import { useEffect } from "react";
import { site, type AdSlotName } from "@/lib/site";

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

/**
 * A manual AdSense unit. Renders nothing until ads are enabled and a slot ID is set
 * in `src/lib/site.ts`, so the site stays clean while it is under review.
 * Never place one directly next to a tool's inputs or buttons (accidental clicks get accounts banned).
 */
export function AdSlot({ name }: { name: AdSlotName }) {
  const { enabled, publisherId, slots } = site.adsense;
  const slotId = slots[name];
  const active = enabled && Boolean(publisherId) && Boolean(slotId);

  useEffect(() => {
    if (!active) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // Ad blockers or a slow script can make this throw; the page must keep working.
    }
  }, [active]);

  if (!active) return null;

  return (
    <aside aria-label="Advertisement" className="my-8 min-h-[280px]">
      <p className="mb-1 text-center text-[11px] text-muted-foreground">Advertisement</p>
      <ins
        className="adsbygoogle block"
        style={{ display: "block" }}
        data-ad-client={publisherId}
        data-ad-slot={slotId}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </aside>
  );
}
