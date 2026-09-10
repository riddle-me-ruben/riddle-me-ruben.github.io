# AGENTS.md

## What this project is

A client-only React SPA: the public "Living Project Portal" for **ShareTab**, a
shared-expense tracker, built for CS 4390/5388 Software Project Management.

There is no backend. Every page renders from data under `src/data/`. The site's
job is to be a readable, linkable record of how the project was managed — treat
page content as a graded document, not as UI copy.

## Architecture

- `src/main.jsx` — mounts `App` inside `BrowserRouter`, with `ScrollToTop` so
  navigation lands at the top of each page.
- `src/App.jsx` — the route table. One route per required page.
- `src/components/Navbar.jsx` — exports `NAV`, the single source of truth for
  navigation. Sprint entries carry `children`, rendered as a desktop dropdown
  and an indented mobile group.
- `src/components/ui.jsx` — shared primitives. They pick a semantic CSS class
  rather than carrying utility strings.
- `src/data/team.js` — the 5 members plus `PROJECT` metadata. Each member has a
  `photo` field (null → initials fallback) and an `owns` string.
- `src/data/research.js` — the Phase 2 interview corpus. **Every claim traces to
  a real interview.** Do not add findings that are not in the source packet, and
  do not soften or embellish quotes — they are verbatim.
- `src/pages/**` — one file per page. Document pages use `DocSection`, `Prose`,
  `Quote` and `Todo`.

## Styling

All CSS lives in `src/styles/`, split by role — `theme.css` (tokens),
`tailwind.css` (directives), `base.css`, `components.css`, `utilities.css`.
`index.css` imports them and is the only stylesheet the app loads.

Rules that will bite you:

1. **Every `@import` must come first in `index.css`.** postcss rejects an
   `@import` that follows any other statement, and the imported file is then
   silently dropped from the build. That is why the `@tailwind` directives live
   in their own file rather than inline.
2. **Never interpolate a class name.** Tailwind purges anything it cannot find
   as a literal string, so `` `badge-${tone}` `` compiles but produces unstyled
   markup. Map variants to full literal class names (see `badgeTones` in
   `ui.jsx`). After adding a component class, verify it survived:
   ```bash
   npm run build && grep -c "your-class" dist/assets/*.css
   ```
3. **Colour is defined once**, in `theme.css`, as raw RGB channels.
   `tailwind.config.js` reads those via `rgb(var(--x) / <alpha-value>)`, which
   keeps opacity modifiers (`bg-neon-500/10`) working. Re-theming the site is a
   single-file edit — do not hardcode hex values in components.

The theme is dark-only. There is no light mode and no theme toggle.

## Content rules

- **Retrospectives and peer evaluations never appear on this site.** They are
  private, Blackboard-only. Do not add a page, link or teaser for them.
- **AI may not be used** for the individual reflection, the individual
  estimation memo, any exam response, or the go/no-go reasoning in any sprint
  deliverable. Where a placeholder covers one of those, it says so — leave the
  warning in.
- Sprint pages are **additive**. Never edit or remove a published sprint page to
  reflect new information; add a change log entry on the new sprint page.
- Unwritten content is marked with a literal `[TODO]`, both on the page and in
  the source, so `grep -rnE "\[TODO\]|<Todo" src/` is an accurate work list. Use the
  `Todo` component rather than inventing a new placeholder style, and say
  specifically what needs writing — a bare "TODO" tells a reviewer nothing.
- Pages carry only content the sprint actually requires. Do not add sections
  because they seem useful; the guidelines define what each page contains.

## Conventions

- Components are `.jsx`, no TypeScript.
- Routing is real URLs. Do not reintroduce tab state for navigation — individual
  documents must be linkable for peer review and grading.

## Deployment

`netlify.toml` has a catch-all `/* -> /index.html 200` redirect. It is load
bearing — remove it and every route except `/` 404s on refresh.

## Verifying a change

`npm run build` catches import and syntax errors but **not** purged CSS or
runtime render errors. For anything non-trivial, also:

1. Grep the built CSS for classes you added (see Styling rule 2).
2. SSR every route: build a scratch `ssr.test.jsx` with a vite SSR config that
   iterates the route list under `MemoryRouter` and calls `renderToString`.
   Delete the scratch folder afterward — it must never be committed.
