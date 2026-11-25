import localFont from "next/font/local";

// Open Sauce, SIL OFL 1.1. Latin subset; licences sit beside the files.
// Regular is WOFF because the source package's Regular WOFF2 is not a WOFF2 file.
export const openSauceSans = localFont({
  src: [
    { path: "../../public/fonts/open-sauce/open-sauce-sans-latin-400-normal.woff", weight: "400" },
    { path: "../../public/fonts/open-sauce/open-sauce-sans-latin-500-normal.woff2", weight: "500" },
    { path: "../../public/fonts/open-sauce/open-sauce-sans-latin-600-normal.woff2", weight: "600" },
  ],
  variable: "--font-open-sauce-sans",
  display: "swap",
});

// Display sizes only.
export const openSauceTwo = localFont({
  src: "../../public/fonts/open-sauce/open-sauce-two-latin-500-normal.woff2",
  weight: "500",
  variable: "--font-open-sauce-two",
  display: "swap",
});
