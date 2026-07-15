"use client";

import { Button, type ButtonProps } from "@plnly/ui";
import { CAL_LINK } from "./CalInit";

/**
 * The one CTA everywhere — "Book a First Look" opens the Cal.com popup
 * directly (data-cal-link, wired up globally by CalInit). No detour through
 * a custom lead-capture form first.
 */
export function BookButton({
  children = "Book a First Look",
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
