# ShareTab · Living Project Portal

The public portal for **ShareTab**, a shared-expense tracker, built for
CS 4390/5388 Software Project Management at UTEP.

The portal is the course's major deliverable: a public site showing how the
project was managed sprint by sprint. It grows across the semester — each sprint
adds a page and its subpages, and earlier sprint pages stay live.

**Repo:** https://github.com/riddle-me-ruben/project-spm

## Site structure

Routes map 1:1 to the required pages, so any individual document can be linked
and reviewed directly.

```
/                              Home — project, business problem, navigation
/about                         About Us — member bios and ownership
/sprint-1                      Sprint 1 hub
/sprint-1/market-research      Market Research      (published)
/sprint-1/business-strategy    Business Strategy    [TODO]
/sprint-1/project-charter      Project Charter      [TODO]
/sprint-1/contributions        Contributions & AI Disclosure  [TODO]
/sprint-2                      Sprint 2             [TODO]
```

The Sprint Retrospective and peer evaluations are **private** and go to
Blackboard only. Nothing on this site links to them, and nothing should.

## Outstanding work

Everything unwritten is marked with a literal `[TODO]` on the page and in the
source, so it is greppable:

```bash
grep -rnE "\[TODO\]|<Todo" src/
```

### PDFs

Every public document needs to exist both as readable text on the page and as a
downloadable PDF linked from it, with that same PDF uploaded to Blackboard.

Generated PDFs go in `public/docs/` and are wired up by flipping one prop:

```jsx
<PdfLink href="/docs/sprint1-market-research.pdf" available />
```

Until then `PdfLink` renders a visible `[TODO] PDF` chip so the gap is obvious.

### Profile photos

`src/data/team.js` has a `photo` field per member, currently `null`, which falls
back to initials. Drop a square image into `public/team/` and set the path:

```js
photo: '/team/ruben.jpg',
```

The layout is identical either way, so photos can be added without touching the
About page.

## Styling

Colour and layout tokens live in `src/styles/theme.css` as CSS custom
properties, and `tailwind.config.js` reads them — so re-theming the whole site
is a single-file edit. Stylesheets are split by role:

```
src/styles/
  index.css        the only file the app imports; lists every @import
  theme.css        colour + elevation tokens
  tailwind.css     @tailwind base / components / utilities
  base.css         element defaults
  components.css   reusable component classes (.card, .badge, .btn, .doc-*)
  utilities.css    one-off helpers
```

Components compose semantic classes (`className="card card-hover"`) rather than
carrying long utility strings, so a visual change lands in CSS, not in a dozen
page files.

> Tailwind purges classes it cannot find as literal strings in the source. Never
> build a class name by interpolation (`` `badge-${tone}` ``) — map the variant
> to a full literal class name, as `Badge` and `Card` do.

## Key technologies

- **React 18** + **React Router 7** (`BrowserRouter`, real URLs per page)
- **Vite 6** dev server and build
- **Tailwind CSS 3**, dark-only theme driven by CSS custom properties
- **Lucide React** icons
- No backend and no database — every page renders from data in `src/data/`

## Running locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production bundle into dist/
npm run preview
```

## Deployment

Netlify, building `npm run build` and publishing `dist`. `netlify.toml` contains
a catch-all `/* -> /index.html 200` redirect, which is **required** — without it,
client-side routes 404 on hard refresh and any shared deep link breaks.

Everything for a sprint must be deployed and live before that sprint's demo; the
instructor checks deployment time against the due date.
