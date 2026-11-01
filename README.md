# blogblog

A small blog layout built with Next.js, React and Sass. It is mobile first, works down to 360px, follows the system light or dark setting, and targets WCAG 2.2 level AA (checked with axe in the test suite). The posts are samples for now.

Live: https://blogblog.engg.app

## Stack

- Next.js 16 (pages router) with React 19, exported as static HTML (`output: 'export'` in `next.config.mjs`, written to `out/`)
- Sass modules, one per component, with colour tokens in `styles/configuration/`
- Playwright and axe for tests
- Cloudflare Worker serving `out/` as static assets (`wrangler.jsonc`)

Pages: home, 404, and accessibility, privacy and terms pages linked from the footer.

## Run locally

Needs Node 20.9 or newer and pnpm (version pinned in `package.json`).

```bash
pnpm install
pnpm dev
```

Then open http://localhost:3000.

## Test and build

```bash
pnpm lint
pnpm build                              # static export to out/
pnpm start                              # serve out/ locally
pnpm exec playwright install chromium   # once
pnpm test                               # smoke + axe tests against a production build
```

`pnpm test` needs Node 22.12 or newer, because the axe dev dependency requires it.

## Deploy

```bash
pnpm run deploy
```

This builds the site and runs `wrangler deploy`. Wrangler 4 is a dev dependency, so you only need `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` set in the environment.

## License

MIT, see [LICENSE](LICENSE).
