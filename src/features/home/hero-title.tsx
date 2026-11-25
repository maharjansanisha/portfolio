import Image from "next/image";

import { Heading } from "@/components/ui/heading";
import { siteConfig } from "@/config/site";
import type { HeroWord } from "@/data/home";

const words: Record<Exclude<HeroWord, "portrait">, string> = {
  about: "About",
  portfolio: "Portfolio",
  contact: "Contact",
  stack: "Stack",
  resume: "Resume",
};

/**
 * The oversized title behind the tiles. On wide screens, pointing at or focusing
 * a tile swaps the name for that tile's word (see `home.css`).
 */
export function HeroTitle() {
  return (
    <div className="hero-title pointer-events-none absolute inset-x-4 top-9.5 h-[1em] overflow-hidden text-center font-display text-hero tablet:top-0">
      <Heading level={1} size="hero" className="hero-word hero-word-name">
        <span className="sr-only">
          {siteConfig.name}, {siteConfig.role}
        </span>
        <span aria-hidden="true">
          {Array.from(siteConfig.shortName, (letter, index) => (
            <span
              key={index}
              className="hero-letter"
              style={{ animationDelay: `${400 + index * 30}ms` }}
            >
              {letter}
            </span>
          ))}
        </span>
      </Heading>
      <div aria-hidden="true">
        {Object.entries(words).map(([key, word]) => (
          <span key={key} className="hero-word hero-word-alt" data-word={key}>
            {word}
          </span>
        ))}
        <span className="hero-word hero-word-alt flex items-center justify-center gap-8" data-word="portrait">
          Hey
          <Image src="/images/waving-hand.svg" alt="" width={110} height={110} unoptimized />
        </span>
      </div>
    </div>
  );
}
