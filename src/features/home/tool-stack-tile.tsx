import Image from "next/image";

import { tools } from "@/data/home";
import { cn } from "@/lib/cn";

import { tileClasses } from "./tile";

/** The list is rendered twice so the loop has no seam. */
function ToolList({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <ul aria-hidden={duplicate || undefined} className="flex shrink-0 gap-2 pr-2 tablet:gap-4 tablet:pr-4">
      {tools.map((tool) => (
        <li
          key={tool.name}
          className="flex size-12 shrink-0 items-center justify-center rounded-control bg-tile tablet:size-18 tablet:rounded-media"
        >
          <Image
            src={tool.icon}
            alt={duplicate ? "" : tool.name}
            width={36}
            height={36}
            loading="eager"
            className="size-6 object-contain tablet:size-9"
          />
        </li>
      ))}
    </ul>
  );
}

export function ToolStackTile() {
  return (
    <div className={cn(tileClasses, "justify-center px-4 tablet:px-8")}>
      <h2 className="sr-only">Stack</h2>
      {/* Focusable so keyboard users can pause the movement too. */}
      <div className="tool-marquee overflow-hidden" tabIndex={0} role="group" aria-label="Tools I use">
        <div className="tool-marquee-track flex w-max">
          <ToolList />
          <ToolList duplicate />
        </div>
      </div>
    </div>
  );
}
