import Link from "next/link";
import type { ComponentProps } from "react";

import { cn } from "@/lib/cn";

import { buttonClasses, type ButtonVariant } from "./button-styles";

type ButtonLinkProps = ComponentProps<typeof Link> & {
  variant?: ButtonVariant;
};

export function ButtonLink({ variant = "primary", className, ...props }: ButtonLinkProps) {
  return <Link className={cn(buttonClasses(variant, "link"), className)} {...props} />;
}
