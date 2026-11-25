import Link from "next/link";

import { RollText } from "@/components/ui/roll-text";
import { Text } from "@/components/ui/text";
import { siteConfig } from "@/config/site";

import { CityTime } from "./city-time";
import { ThemeToggle } from "./theme-toggle";

const navText = "text-label tablet:text-body tablet:font-medium";

export function SiteHeader() {
  return (
    <header className="flex items-center justify-between gap-2 p-4 tablet:p-6">
      <div className="flex min-w-0 items-center gap-8 tablet:gap-12 laptop:gap-30">
        <Link href="/" className={`group relative shrink-0 ${navText} after:absolute after:-inset-x-2 after:-inset-y-3`}>
          <span className="sr-only">{siteConfig.name}, home</span>
          <span aria-hidden="true" className="block">
            {/* The short name keeps room for the role and time on phones. */}
            <RollText className="tablet:hidden">{siteConfig.shortName}</RollText>
            <RollText className="hidden tablet:block">{siteConfig.name}</RollText>
          </span>
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
