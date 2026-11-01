# blogblog-nextjs

This is a simple blog site built with **NextJS + React + SASS/SCSS + Cloudflare Workers**. It is mobile first, responsive down to 360px, follows the system light or dark setting, and targets WCAG 2.2 Level AA (checked with axe in the test suite).

## Demo URL

https://blogblog.engg.app

The site is a Next.js static export (`output: 'export'` in `next.config.mjs`, written to `out/`) served by a Cloudflare Worker on the sg208 account, configured in `wrangler.jsonc`. `pnpm run deploy` builds and runs `wrangler deploy`; it needs `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` in the environment. `pnpm start` serves `out/` locally with `serve`. The sample `/api/hello` route was removed with the move to a static export.

## Getting Started

First, run the development server:

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Needs Node 20.9 or newer and pnpm (version pinned in `package.json`). Running `pnpm test` needs Node 22.12 or newer (the axe dev dependency requires it).

## Checks

```bash
pnpm build
pnpm lint
pnpm exec playwright install chromium   # once
pnpm test                               # Playwright smoke + axe accessibility tests against a production build
```

## Learn More

I'll keep more updates as I go along.

## License

MIT, see [LICENSE](LICENSE).
