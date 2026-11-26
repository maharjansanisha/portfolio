import { cn } from "@/lib/cn";

const base = cn(
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-control border px-6 py-3",
  "text-center text-body font-medium transition-[color,background-color,border-color,translate]",
);

const variants = {
  primary: "border-transparent bg-ink text-canvas",
  secondary: "border-line bg-surface text-ink",
} as const;

// Kept separate so a disabled button does not react to the pointer.
const interactive = {
  primary: "enabled:hover:bg-ink-hover enabled:active:translate-y-px",
  secondary: "enabled:hover:bg-surface-hover enabled:active:translate-y-px",
} as const;

const linkInteractive = {
  primary: "hover:bg-ink-hover active:translate-y-px",
  secondary: "hover:bg-surface-hover active:translate-y-px",
} as const;

export type ButtonVariant = keyof typeof variants;

export function buttonClasses(variant: ButtonVariant, element: "button" | "link") {
  return cn(
    base,
    variants[variant],
    element === "link"
      ? linkInteractive[variant]
      : cn(interactive[variant], "disabled:cursor-not-allowed disabled:opacity-50"),
  );
}
