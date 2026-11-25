import type { ComponentPropsWithRef } from "react";

import { cn } from "@/lib/cn";

const sizes = {
  hero: "font-display text-hero",
  display: "font-display text-display",
  title: "text-title",
  "heading-1": "text-heading-1",
  "heading-2": "text-heading-2",
  "heading-3": "text-heading-3",
} as const;

type HeadingProps = ComponentPropsWithRef<"h2"> & {
  /** Document outline position. */
  level: 1 | 2 | 3 | 4;
  /** Visual style, chosen independently of the level. */
  size: keyof typeof sizes;
};

export function Heading({ level, size, className, ...props }: HeadingProps) {
  const Element = `h${level}` as const;

  return <Element className={cn(sizes[size], className)} {...props} />;
}
