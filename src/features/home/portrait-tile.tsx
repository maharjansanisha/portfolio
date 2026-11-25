import Image from "next/image";

import type { homeAssets } from "@/data/home";

export function PortraitTile({ portrait }: { portrait: (typeof homeAssets)["portrait"] }) {
  return (
    <div className="relative size-full overflow-hidden rounded-tile bg-media shadow-tile">
      {portrait ? (
        <Image
          src={portrait.src}
          alt={portrait.alt}
          fill
          loading="eager"
          // Tall tiles are drawn wider than their column, so allow some margin.
          sizes="(min-width: 64rem) 30vw, (min-width: 43.75rem) 36vw, 50vw"
          // Keeps the face in frame as the tile changes from tall to wide.
          className="object-cover object-[47%_28%]"
        />
      ) : (
        <p className="flex size-full items-center justify-center p-4 text-center text-caption text-on-media">
          Portrait placeholder
        </p>
      )}
    </div>
  );
}
