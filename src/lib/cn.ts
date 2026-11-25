/**
 * Joins class names, skipping falsy values. It does not resolve conflicting
 * Tailwind utilities, so use `className` to add layout, not to restyle.
 */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}
