import type { ComponentPropsWithRef } from "react";

import { cn } from "@/lib/cn";

/** A thematic break. For purely visual lines, use border utilities instead. */
export function Divider({ className, ...props }: ComponentPropsWithRef<"hr">) {
  return <hr className={cn("border-t border-line", className)} {...props} />;
}
