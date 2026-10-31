# Design

## Architecture

- Next.js pages router; one page `pages/index.js`, custom `pages/_document.js`, `pages/_app.js` loads `styles/globals.css`.
- Styling: SCSS module per page; shared tokens via `styles/_includes.scss` → `styles/configuration/_configuration.module.scss` → colours file. WHY: one place for colour tokens.
- Data flow: none; static markup only. `pages/api/hello.js` = starter API route.

## Key decisions

- Accessibility baseline: skip link + `role="main"`/`contentinfo` (`pages/index.js`), `lang`/`dir` on `<Html>` (`pages/_document.js:7`). WHY: WCAG 2.0 AA target (`README.md:3`).
