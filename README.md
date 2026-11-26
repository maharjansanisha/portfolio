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

Open <http://localhost:3000>. No environment variables are required.

## Visitor location

The header shows the visitor's approximate city and the current time in that city. Both come from headers that Vercel adds to requests, `x-vercel-ip-city` and `x-vercel-ip-timezone`, which `src/app/api/visitor-city/` returns to the page. The browser formats the time with `Intl.DateTimeFormat`, including daylight saving. No third-party service, GPS permission, cookie or browser storage is used.

Unless both values are usable, including in local development and on other hosts, the header shows only the time in the browser's own time zone.

### Simulating a location

Localhost requests have no Vercel headers. To test a location, create `.env.development.local` in the project root (Git ignores it):

```bash
DEV_VERCEL_IP_CITY="Kathmandu"
DEV_VERCEL_IP_TIMEZONE="Asia/Kathmandu"
```

Other locations to try:

| City       | Time zone          |
| ---------- | ------------------ |
| `London`   | `Europe/London`    |
| `New York` | `America/New_York` |

Write city names as plain text, without percent-encoding. Save the file, then reload the page. To stop simulating, set both values to `""` and save. Deleting the file alone does not clear a running server: it keeps the last values until you restart it.

For a single run, set the variables in the command instead. These take priority over the file and last until you stop the server:

```bash
DEV_VERCEL_IP_CITY="New York" DEV_VERCEL_IP_TIMEZONE="America/New_York" npm run dev
```

The variables work only when `NODE_ENV` is `development`, as under `npm run dev`. Production builds, including Vercel preview deployments, ignore them. The app has no URL parameter, cookie or on-screen control for changing the location. While you are simulating, anyone who can reach your development server sees the simulated location.

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
