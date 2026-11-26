import { cn } from "@/lib/cn";

type RollTextProps = {
  children: string;
  className?: string;
};

/**
 * A label that rolls up to a copy of itself while its `group` ancestor is
 * hovered or keyboard-focused. The copy is hidden from assistive technology.
 */
export function RollText({ children, className }: RollTextProps) {
  const line = cn(
    "block whitespace-nowrap transition-[translate,transform] duration-slow ease-settle",
    // The extra distance keeps the skewed copy out of sight while it waits.
    "group-hover:-translate-y-[calc(100%+0.75rem)] group-focus-visible:-translate-y-[calc(100%+0.75rem)]",
  );

  return (
    <span className={cn("relative block overflow-hidden", className)}>
      <span className={cn(line, "group-hover:skew-y-12 group-focus-visible:skew-y-12")}>
        {children}
      </span>
      <span
        aria-hidden="true"
        className={cn(
          line,
          "absolute inset-x-0 top-[calc(100%+0.75rem)] skew-y-12",
          "group-hover:skew-y-0 group-focus-visible:skew-y-0",
        )}
      >
        {children}
      </span>
    </span>
  );
}
