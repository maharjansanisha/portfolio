import type { ReactNode } from "react";

import { homeAssets, type HeroWord } from "@/data/home";
import { cn } from "@/lib/cn";

import { LinkTile } from "./link-tile";
import { PortraitTile } from "./portrait-tile";
import { ResumeTile } from "./resume-tile";
import { ToolStackTile } from "./tool-stack-tile";

type CellProps = {
  word: HeroWord;
  className: string;
  children: ReactNode;
};

function Cell({ word, className, children }: CellProps) {
  return (
    <li data-tile={word} className={cn("min-h-0 min-w-0", className)}>
      {children}
    </li>
  );
}

/*
 * Phone: 2 columns, with a shorter last row.
 * Tablet: 12 columns and 3 rows; the last row's tiles are 200px tall.
 * Laptop: 12 columns and 4 half-rows, so the last two tiles stack.
 */
const shortRow = "tablet:h-50";

export function HomeGrid() {
  return (
    <nav aria-label="Primary" className="relative z-10 min-h-0 flex-1">
      <ul className="grid h-full grid-cols-2 grid-rows-[repeat(3,minmax(0,1fr))_minmax(0,0.8fr)] gap-3 tablet:grid-cols-12 tablet:grid-rows-3 tablet:gap-tile laptop:grid-rows-4">
        <Cell word="about" className="col-span-2 tablet:col-span-6 laptop:col-span-3 laptop:row-span-2">
          <LinkTile href="/about" label="About" />
        </Cell>
        <Cell word="portfolio" className="col-span-2 tablet:col-span-6 laptop:col-span-9 laptop:row-span-2">
          <LinkTile href="/portfolio" label="Portfolio" />
        </Cell>
        <Cell word="contact" className="tablet:col-span-8 laptop:col-span-6 laptop:row-span-2">
          <LinkTile href="/contact" label="Contact" />
        </Cell>
        <Cell word="portrait" className="tablet:col-span-4 laptop:col-span-3 laptop:row-span-2">
          <PortraitTile portrait={homeAssets.portrait} />
        </Cell>
        <Cell word="stack" className={cn(shortRow, "tablet:col-span-6 laptop:col-span-3 laptop:h-auto")}>
          <ToolStackTile />
        </Cell>
        <Cell word="resume" className={cn(shortRow, "tablet:col-span-6 laptop:col-span-3 laptop:col-start-10 laptop:h-auto")}>
          <ResumeTile href={homeAssets.resumeHref} />
        </Cell>
      </ul>
    </nav>
  );
}
