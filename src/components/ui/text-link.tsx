import Link from "next/link";
import type { ComponentProps } from "react";

import { cn } from "@/lib/cn";

const variants = {
  /** Inside running text: always underlined, so colour is not the only cue. */
  inline: cn(
    "underline decoration-1 underline-offset-4 transition-[color,text-decoration-thickness]",
    "hover:decoration-2",
  ),
  /** Standalone links in lists, such as a contact index. */
  standalone: "link-reveal",
  /**
   * Navigation items. Set `aria-current="page"` on the active one.
   * The pseudo-element enlarges the touch target without moving the underline.
   */
  nav: "link-reveal relative text-label after:absolute after:-inset-x-2 after:-inset-y-3",
} as const;

type TextLinkProps = ComponentProps<typeof Link> & {
  variant?: keyof typeof variants;
};

export function TextLink({ variant = "inline", className, ...props }: TextLinkProps) {
  return <Link className={cn(variants[variant], className)} {...props} />;
}
