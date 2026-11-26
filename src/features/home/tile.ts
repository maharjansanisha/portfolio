import { cn } from "@/lib/cn";

/** The translucent panel. Its backdrop blur is what softens the title behind it. */
export const tileClasses = cn(
  "relative flex size-full flex-col rounded-tile bg-tile shadow-tile",
  "backdrop-blur-xs tablet:backdrop-blur-[10px]",
  "transition-colors duration-slow ease-settle hover:bg-tile-hover",
);

/** Padding for labelled tiles. It gives way to the label on screens that are narrow for the text size. */
export const tileInsetClasses = "p-[min(--spacing(6),7.5vw)] tablet:p-8";

export const tileLabelClasses = "text-body leading-[1.2] font-medium text-ink tablet:text-body-lg tablet:leading-[1.2]";
