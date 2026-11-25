import Image from "next/image";
import Link from "next/link";

import { Text } from "@/components/ui/text";
import { siteConfig } from "@/config/site";

import { CityTime } from "./city-time";
import { ThemeToggle } from "./theme-toggle";

const navText = "text-label tablet:text-body tablet:font-medium";

export function SiteHeader() {
  return (
    <header className="flex items-center justify-between gap-2 p-4 tablet:p-6">
      <div className="flex min-w-0 items-center gap-8 tablet:gap-12 laptop:gap-30">
        <Link href="/" className={`relative shrink-0 ${navText} focus-visible:outline-offset-8 after:absolute after:-inset-x-2 after:-inset-y-3`}>
          {/*
           * Sized to the artwork, not the SVG's padded canvas. The negative margin
           * lets it stand taller than the text line without making the header taller.
           */}
          <span className="relative my-[calc((1lh-var(--logo-width)*272/563)/2)] block aspect-[563/272] w-(--logo-width) [--logo-width:3.5rem] tablet:[--logo-width:4.5rem]">
            {/* Scaled and offset so the artwork's bounds fill the box above. */}
            <Image
              src="/images/brand/logo.svg"
              alt={siteConfig.name}
              width={834}
              height={596}
              loading="eager"
              className="theme-logo pointer-events-none absolute top-1/2 left-[-32.96%] h-auto w-[148.18%] max-w-none -translate-y-[54.88%]"
            />
          </span>
          <span className="sr-only">, home</span>
        </Link>
        {/* On phones the role and the local time take turns in one slot. */}
        <div className="header-rotator grid min-w-0 overflow-hidden tablet:block">
          <Text as="div" className={`${navText} whitespace-nowrap`}>
            {siteConfig.role}
          </Text>
          <Text as="div" className={`${navText} min-w-0 tablet:hidden`}>
            <CityTime />
          </Text>
        </div>
      </div>
      <div className="flex shrink-0 items-center gap-12 laptop:gap-25">
        <Text as="div" className={`${navText} hidden tablet:block`}>
          <CityTime />
        </Text>
        <ThemeToggle />
      </div>
    </header>
  );
}
