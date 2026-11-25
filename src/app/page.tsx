import { siteConfig } from "@/config/site";

// Foundation placeholder. The homepage is built in a later task.
export default function HomePage() {
  return (
    <main>
      <h1>{siteConfig.title}</h1>
    </main>
  );
}
