# Architecture

The project is organised by feature. Routes stay thin, and each feature owns the code that only it uses.

## Folders

Folders are created when their first file is needed, so the repository has no empty placeholders. Today only `src/app` and `src/config` exist.

| Path                     | Responsibility                                                              |
| ------------------------ | --------------------------------------------------------------------------- |
| `src/app/`               | Routing only: pages, layouts, metadata and global styles. Composes features |
| `src/features/<name>/`   | Sections, components, logic and types for one area (`home`, `projects`, `about`) |
| `src/components/layout/` | Site-wide structure such as the header, footer and navigation               |
| `src/components/ui/`     | Generic UI primitives with no portfolio-specific knowledge                  |
| `src/components/shared/` | Portfolio-aware components used by two or more features                     |
| `src/config/`            | Site-wide settings such as name, URL and navigation                         |
| `src/data/`              | Typed content, such as the project list, kept separate from presentation    |
| `src/hooks/`             | React hooks used across features                                            |
| `src/lib/`               | Framework-independent utilities used across features                        |
| `src/types/`             | Types shared across features                                                |
| `public/images/`         | Static images served by URL                                                 |
| `public/fonts/`          | Self-hosted font files, if needed; load them with `next/font/local`         |
| `docs/`                  | Project documentation                                                       |

Inside a feature, add subfolders such as `components/` only when the file count calls for them. Code used by one feature stays in it. Move it to a shared folder when a second feature needs it.

## Dependency direction

```text
app  →  features  →  components, hooks, lib  →  config, types
```

- `app` may import from any layer below it. It also passes data to features when that keeps them reusable.
- Features may read from `data`. They do not import from other features; shared code moves down a layer.
- Shared layers never import from `features` or `app`.
- `components/ui` does not import from `data`.

These rules are conventions checked in review. ESLint does not enforce them.

## Coding conventions

### Files and size

- Every `page.tsx` and `layout.tsx` under `src/app/` has fewer than 250 lines. ESLint enforces this, counting blank lines and comments.
- Move page sections and non-trivial logic into their own files.
- Give each component one responsibility.

### Naming

- Files and folders: `kebab-case` (`project-card.tsx`).
- Components and types: `PascalCase` (`ProjectCard`).
- Functions and variables: `camelCase`. Hooks start with `use`, in files named `use-*.ts`.
- Use named exports, except where Next.js requires a default export.
- Import across folders with `@/*`. Relative imports are fine within one folder or feature.

### TypeScript

- Strict mode and `noUncheckedIndexedAccess` are on.
- Do not use `any`. If it is unavoidable, disable the lint rule on that line and explain why.
- Type content in `src/data` explicitly or check it with `satisfies`.

### Components

- Use Server Components by default.
- Add `"use client"` only for interactivity or browser APIs, on the smallest component that needs it.
- Pass data only as far as needed. Prefer composition to prop drilling.
- Add an abstraction once a real repeated need exists.

### Styling

- Use Tailwind utilities. Define design tokens with `@theme` in `src/app/globals.css`.
- Avoid inline styles unless a value is only known at runtime.

### Accessibility

- Use semantic elements: one `main` and one `h1` per page, with headings in order.
- Give images meaningful `alt` text, or `alt=""` if decorative.
- Make interactive elements keyboard accessible with visible focus.

## Caching and rendering

`cacheComponents` and `partialPrefetching` are enabled in `next.config.ts`. Anything that reads request-time or uncached data needs a `<Suspense>` boundary or the `use cache` directive. Check the bundled docs in `node_modules/next/dist/docs/`.

## Dependencies

Add a library only when a specific implementation needs it. This includes shadcn/ui and Motion.

ESLint stays on 9 and TypeScript on 5 because the lint plugins bundled with `eslint-config-next` do not yet declare support for ESLint 10, and `typescript-eslint` does not support TypeScript 7. Recheck these ranges before upgrading.
