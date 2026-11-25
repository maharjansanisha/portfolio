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
          sizes="(min-width: 64rem) 25vw, (min-width: 43.75rem) 33vw, 50vw"
          className="object-cover"
        />
      ) : (
        <p className="flex size-full items-center justify-center p-4 text-center text-caption text-on-media">
          Portrait placeholder
        </p>
      )}
    </div>
  );
}
