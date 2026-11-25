import { Text } from "@/components/ui/text";
import { cn } from "@/lib/cn";

import { LinkTile } from "./link-tile";
import { tileClasses, tileLabelClasses } from "./tile";

/** Links to the résumé once one exists; until then it says it is pending. */
export function ResumeTile({ href }: { href: string | null }) {
  if (href) return <LinkTile href={href} label="Resume" />;

  return (
    <div className={cn(tileClasses, "justify-end p-6 tablet:p-8")}>
      <p className={cn("h-5.5", tileLabelClasses)}>Resume</p>
      <Text size="caption" tone="secondary" className="absolute top-4 left-6 tablet:left-8">
        File coming soon
      </Text>
    </div>
  );
}
