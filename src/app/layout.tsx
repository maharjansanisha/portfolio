import type { Metadata } from "next";

import { openSauceSans, openSauceTwo } from "@/config/fonts";
import { siteConfig } from "@/config/site";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.title,
  description: siteConfig.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${openSauceSans.variable} ${openSauceTwo.variable}`}>
      <body>{children}</body>
    </html>
  );
}
