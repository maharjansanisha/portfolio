import Link from "next/link";

import { RollText } from "@/components/ui/roll-text";
import { cn } from "@/lib/cn";

import { tileClasses, tileInsetClasses, tileLabelClasses } from "./tile";

type LinkTileProps = {
  href: string;
  label: string;
};

function Arrow() {
  return (
    <svg viewBox="0 0 18 16" className="mr-0.5 h-3.75 w-4.25 shrink-0 -rotate-45 tablet:h-4 tablet:w-4.5">
      <path
        fill="currentColor"
        d="M.667 7h14.291L8.833.875 9.603 0l7.584 7.583-7.584 7.584-.77-.875L14.958 8.167H.667Z"
      />
    </svg>
  );
}

export function LinkTile({ href, label }: LinkTileProps) {
  return (
    // Prefetch is off until these routes exist.
    <Link href={href} prefetch={false} className={cn(tileClasses, "group justify-end", tileInsetClasses)}>
      {/* If the label and arrow cannot share a line, the arrow moves below. */}
      <span className="flex min-h-5.5 flex-wrap items-center justify-between gap-x-2">
        <RollText className={cn("self-start", tileLabelClasses)}>{label}</RollText>
        <span aria-hidden="true">
          <Arrow />
        </span>
      </span>
    </Link>
  );
}
