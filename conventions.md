# Conventions

## Naming

- Components: `components/PascalCase.js`, one component per file, arrow-function `const` + `export default` (`components/Layout.js:8`).
- Styles: one SCSS module per component/page, `styles/<Name>.module.scss`; tokens via `@use "includes" as *` (`styles/_includes.scss`).
- Shared constants: `UPPER_SNAKE_CASE` exports in `data/` (`data/site.js:1`).
- Tests: `tests/<topic>.spec.mjs`.

## Style

- Lint: `pnpm lint` (ESLint 9 flat config, `eslint-config-next/core-web-vitals`, `eslint.config.mjs`). No formatter config.
- Internal links → `next/link`; external links → `target="_blank" rel="noopener noreferrer"` + visually hidden "(opens … in a new tab)" text (`components/SiteFooter.js`).
- Error handling: none — static export, no runtime data.

## Git

- Commit subjects: Conventional Commits (`feat:` · `fix:` · `chore:` · `docs:` · `test:`, optional scope e.g. `chore(release):`).
- Branches: `<type>/<slug>` off `develop`, merged back into `develop`; `main` = release only.
