import type { Metadata } from "next";

import { openSauceSans, openSauceTwo } from "@/config/fonts";
import { siteConfig } from "@/config/site";
import { themeScript } from "@/lib/theme";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.title,
  description: siteConfig.description,
  applicationName: siteConfig.name,
  // The icons and share image come from the files beside this layout.
  openGraph: {
    type: "website",
    url: "/",
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // The head script may set `data-theme` before React hydrates.
    <html
      lang="en"
      className={`${openSauceSans.variable} ${openSauceTwo.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
