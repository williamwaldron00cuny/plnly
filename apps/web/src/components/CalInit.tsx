"use client";

import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";

export const CAL_LINK = process.env.NEXT_PUBLIC_CAL_LINK || "plnly/intro-call";

/**
 * Configures the Cal.com embed once, globally. Any element with
 * data-cal-link (see BookButton) opens the Cal.com popup on click once this
 * has run — no custom contact-form modal in front of it.
 */
export function CalInit() {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi();
      cal("ui", {
        cssVarsPerTheme: {
          light: { "cal-brand": "#FF3D00" },
          dark: { "cal-brand": "#FF3D00" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return null;
}
