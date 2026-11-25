/** Words the large title can show. "name" is the resting state. */
export type HeroWord = "about" | "portfolio" | "contact" | "stack" | "resume" | "portrait";

type Portrait = { src: string; alt: string };

type HomeAssets = {
  /** TODO(owner): add a photo of Sanisha under `public/images/`. */
  portrait: Portrait | null;
  /** TODO(owner): add the résumé PDF or its public link. */
  resumeHref: string | null;
};

export const homeAssets: HomeAssets = {
  portrait: null,
  resumeHref: null,
};

export const tools = [
  { name: "Claude", icon: "/images/tools/claude.webp" },
  { name: "Framer", icon: "/images/tools/framer.webp" },
  { name: "Figma", icon: "/images/tools/figma.webp" },
  { name: "Lovable", icon: "/images/tools/lovable.webp" },
  { name: "Notion", icon: "/images/tools/notion.webp" },
  { name: "Arc", icon: "/images/tools/arc.webp" },
  { name: "Linear", icon: "/images/tools/linear.webp" },
  { name: "Screen Studio", icon: "/images/tools/screen-studio.webp" },
] satisfies ReadonlyArray<{ name: string; icon: string }>;
