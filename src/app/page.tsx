import { SiteHeader } from "@/components/layout/site-header";
import { HeroTitle } from "@/features/home/hero-title";
import { HomeGrid } from "@/features/home/home-grid";

import "@/features/home/home.css";

export default function HomePage() {
  return (
    <div className="mx-auto flex h-svh min-h-200 w-full max-w-page flex-col tablet:gap-4">
      <a
        href="#content"
        className="sr-only rounded-control bg-ink px-4 py-3 text-label text-canvas focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-30"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main
        id="content"
        tabIndex={-1}
        className="home-stage relative flex min-h-0 flex-1 flex-col px-4 pt-17 pb-4 tablet:pt-15 laptop:pt-20 desktop:pt-25"
      >
        <HeroTitle />
        <HomeGrid />
      </main>
      <div aria-hidden="true" className="home-grain" />
    </div>
  );
}
