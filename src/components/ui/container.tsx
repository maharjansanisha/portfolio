import type { ComponentPropsWithRef } from "react";

import { cn } from "@/lib/cn";

type ContainerProps = ComponentPropsWithRef<"div"> & {
  as?: "div" | "section" | "header" | "footer" | "main" | "article";
};

/** Page-width wrapper with the responsive gutter. */
export function Container({ as: Element = "div", className, ...props }: ContainerProps) {
  return (
    <Element className={cn("mx-auto w-full max-w-page px-gutter", className)} {...props} />
  );
}
