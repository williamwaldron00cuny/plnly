"use client";

import { Button, type ButtonProps } from "@plnly/ui";
import { CAL_LINK } from "./CalInit";

/**
 * The one CTA everywhere — opens the Cal.com popup directly (data-cal-link,
 * wired up globally by CalInit). No detour through a custom lead-capture
 * form first. Copy is "Book your intro call" (not "Book a First Look" —
 * that's also the name of a paid $245 package, which made the CTA read as
 * an accidental upsell).
 */
export function BookButton({
  children = "Book your intro call",
  size = "md",
  ...rest
}: Partial<ButtonProps>) {
  return (
    <Button
      variant="coral"
      size={size}
      dot={false}
      data-cal-link={CAL_LINK}
      data-cal-config={JSON.stringify({ layout: "month_view" })}
      {...rest}
    >
      {children}
    </Button>
  );
}
