import type { ComponentPropsWithRef } from "react";

import { cn } from "@/lib/cn";

const sizes = {
  lead: "text-lead",
  "body-lg": "text-body-lg",
  body: "text-body",
  small: "text-small",
  label: "text-label",
  caption: "text-caption",
} as const;

const tones = {
  default: "text-ink",
  secondary: "text-ink-secondary",
  muted: "text-ink-muted",
  accent: "text-accent-ink",
  success: "text-success",
  error: "text-error",
} as const;

/** Set colour with `tone`; a colour class in `className` can lose to it. */
type TextProps = ComponentPropsWithRef<"p"> & {
  as?: "p" | "span" | "div";
  size?: keyof typeof sizes;
  tone?: keyof typeof tones;
};

export function Text({
  as: Element = "p",
  size = "body",
  tone = "default",
  className,
  ...props
}: TextProps) {
  return <Element className={cn(sizes[size], tones[tone], className)} {...props} />;
}
