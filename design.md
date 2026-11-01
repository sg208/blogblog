# Design

## Architecture

- Next.js pages router (static export to `out/`): `pages/index.js` (home), `pages/404.js` (branded not-found), `pages/accessibility.js` / `privacy.js` / `terms.js` (via `components/LegalPage.js`, linked from the footer), custom `pages/_document.js`; `pages/_app.js` loads `styles/globals.scss` and the Schibsted Grotesk font via `next/font` (self-hosted at build time).
- Shared shell: `components/Layout.js` (head, skip link, header, `<main id="main-container">`, footer); `components/SiteHeader.js`, `components/PostList.js`, `components/SiteFooter.js`. Sample posts live in `data/posts.js`.
- Styling: one SCSS module per component (`@use "includes" as *`); `styles/_includes.scss` `@forward`s `styles/configuration/_configuration.module.scss` (breakpoints) → colours file. WHY: one place for tokens; `@use` replaces deprecated `@import`.
- Data flow: none; static markup only.

## Visual direction

- The name is the headline: `blogblog` set once, edge to edge, as the `h1`; it returns cropped in the footer. Everything else stays small and calm so the posts read first.
- One family (Schibsted Grotesk 400/500/600), four working sizes (`--step-*` in `styles/globals.scss`), body 17–19px at 1.55 leading, text measure capped at `--measure` (38rem).
- Colour: one ground, one ink, one sage accent (primary action, focus ring, selection). Surfaces separate by a tone step, never lines or shadows. Light and dark palettes in `_configuration.module.colors.scss`, switched by `prefers-color-scheme`.
- Motion: short entrances (opacity + transform) and hover feedback only; all of it is disabled under `prefers-reduced-motion`.

## Key decisions

- Accessibility: skip link first in tab order, landmarks via `<header>`/`<nav>`/`<main>`/`<footer>`, `lang`/`dir` on `<Html>` (`pages/_document.js`), 3px focus ring with offset, whole-row post links with a visible ring, new-tab links announced. WHY: WCAG 2.2 AA target (`README.md:3`), enforced by `tests/a11y.spec.mjs` (axe, light + dark, 360px + 1440px).
