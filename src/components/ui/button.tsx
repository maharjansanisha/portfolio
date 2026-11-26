import type { ComponentPropsWithRef } from "react";

import { cn } from "@/lib/cn";

import { buttonClasses, type ButtonVariant } from "./button-styles";

type ButtonProps = ComponentPropsWithRef<"button"> & {
  variant?: ButtonVariant;
};

/** For actions. Use `ButtonLink` when the result is navigation. */
export function Button({
  variant = "primary",
  type = "button",
  className,
  ...props
}: ButtonProps) {
  return (
    <button type={type} className={cn(buttonClasses(variant, "button"), className)} {...props} />
  );
}
