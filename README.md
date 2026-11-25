# Sanisha Maharjan Portfolio

Personal portfolio for [maharjansanisha.com.np](https://maharjansanisha.com.np), showcasing product design work backed by frontend and full-stack development experience.

> Status: the homepage is built; other pages are not. The résumé is still missing (see `src/data/home.ts`). The domain is not connected and nothing is deployed.

## Stack

- Next.js 16 (App Router, Cache Components) and React 19
- TypeScript 5 in strict mode
- Tailwind CSS 4
- ESLint 9 with `eslint-config-next`
- npm

## Requirements

- Node.js 24 (see `.nvmrc`); the minimum Next.js supports is 20.9
- npm

## Setup

```bash
npm ci
npm run dev
```

Open <http://localhost:3000>. No environment variables are needed.

## Visitor location

The header shows the visitor's local time and approximate city. The time comes from the browser. The city comes from the `x-vercel-ip-city` header that Vercel adds to requests, which `src/app/api/visitor-city/` returns to the page. No third-party service, GPS permission, cookie or browser storage is used. Without that header, including in local development and on other hosts, the header shows only the time.

## Scripts

| Command             | Purpose                                      |
| ------------------- | -------------------------------------------- |
| `npm run dev`       | Start the development server                 |
| `npm run build`     | Create a production build                    |
| `npm run start`     | Serve the production build                   |
| `npm run lint`      | Run ESLint; warnings fail the run            |
| `npm run typecheck` | Generate route types, then run TypeScript    |
| `npm run check`     | Run lint and type checks                     |

## Documentation

See [docs/architecture.md](docs/architecture.md) for folder responsibilities and coding conventions.
