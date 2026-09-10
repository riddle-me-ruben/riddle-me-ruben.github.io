# AGENTS.md

## What this project is

A client-only React SPA: the public "Living Project Portal" for **ShareTab**, a
shared-expense tracker, built for CS 4390/5388 Software Project Management.

There is no backend. Every page renders from data defined under `src/data/`.
The site's job is to be a readable, linkable record of how the project was
managed — treat page content as a graded document, not as UI copy.

## Architecture

- `src/main.jsx` — mounts `App` inside `ThemeProvider` + `BrowserRouter`, with
  `ScrollToTop` so navigation lands at the top of each page.
- `src/App.jsx` — the route table. One route per required page. Adding a sprint
  means adding routes here, a page under `src/pages/`, and an entry in `NAV`.
- `src/components/Navbar.jsx` — exports `NAV`, the single source of truth for
  navigation. Sprint entries carry a `children` array that renders as a dropdown
  on desktop and an indented group on mobile.
- `src/components/ui.jsx` — every shared visual primitive. Compose these rather
  than hand-rolling markup, so theming stays consistent.
- `src/context/ThemeContext.jsx` — light/dark toggle, persisted to `localStorage`,
  toggles the `dark` class on `<html>`.
- `src/data/team.js` — the 5 members plus `PROJECT` metadata (name, the
  one-sentence business problem, repo URL). Look members up with `memberById()`.
- `src/data/research.js` — the Phase 2 interview corpus: aggregate findings,
  top-pick deep dive, pivots, method notes. **Every claim here traces to a real
  interview.** Do not add findings that are not in the source packet, and do not
  soften or embellish the quotes — they are reproduced verbatim.
- `src/pages/**` — one file per page. Long-form document pages use `DocSection`,
  `Prose`, `Quote` and `DocMeta`.
- `src/_archive/` — pre-pivot tab components. Not routed, not imported. See the
  README in that folder before reusing anything from it.

## Document primitives (`src/components/ui.jsx`)

The course guidelines drive three of these — read them before changing:

- `Prose` / `DocSection` / `Quote` — the flat-text reading surface. Guidelines §5
  requires a visitor to read a document by scrolling the page, not by downloading
  a file first. Don't replace prose with tables-only layouts.
- `PdfLink` — renders an amber "PDF pending" chip while `available` is false.
  Flip to `available` once the PDF exists in `public/docs/`. Never point it at a
  file that isn't there; a broken download reads worse than an honest gap.
- `Placeholder` — marks unwritten content. Every placeholder should name an owner
  and say specifically what to write. A placeholder that just says "TODO" is
  worse than nothing, because a reviewer can't tell what's missing.

## Content rules

- **Retrospectives and peer evaluations never appear on this site.** They are
  private, Blackboard-only. Do not add a page, link or teaser for them.
- **AI may not be used** for the individual reflection, the individual estimation
  memo, any exam response, or the go/no-go reasoning in any sprint deliverable.
  Where a placeholder covers one of those, it says so — leave that warning in.
- Sprint pages are **additive**. Never edit or remove a published sprint page to
  reflect new information; add a change log entry on the new sprint page instead.
- Placeholder text is written in caps as `PLACEHOLDER` so it is greppable and
  cannot be mistaken for finished content.

## Conventions

- Components are `.jsx`, no TypeScript.
- Tailwind utility classes only. Dark-mode variants inline next to their light
  counterparts (`bg-white dark:bg-navy-900`), never in a separate stylesheet.
- `navy-*` for structural UI, `accent-*` (orange) for emphasis and actions.
  Semantic colors go through the `tone` prop on `Badge`/`StatTile`, backed by
  `badgeTones` — add new tones there rather than inlining ad hoc colors.
- Routing is real URLs via React Router. Do not reintroduce tab state for
  navigation: individual documents must be linkable for peer review and grading.

## Deployment

`netlify.toml` has a catch-all `/* -> /index.html 200` redirect. It is load
bearing — remove it and every route except `/` 404s on refresh.

## Verifying a change

`npm run build` catches import and syntax errors. To check that every route
actually renders, SSR them: build `.smoke/ssr.test.jsx` with a vite SSR config
and run it under node, iterating over the route list with `MemoryRouter`. Delete
the scratch folder afterward — it should never be committed.
