# Sanisha Maharjan Portfolio

Personal portfolio for [maharjansanisha.com.np](https://maharjansanisha.com.np), showcasing product design work backed by frontend and full-stack development experience.

> Status: project foundation only. Pages, content and visual design come in later tasks. The domain is not connected and nothing is deployed.

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
