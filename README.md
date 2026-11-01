# blogblog-nextjs

This is a simple blog site built with **NextJS + React + SASS/SCSS + Vercel**. It is mobile first, responsive down to 360px, follows the system light or dark setting, and targets WCAG 2.2 Level AA (checked with axe in the test suite).

## Demo URL

https://blogblog-ruby.vercel.app/

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
