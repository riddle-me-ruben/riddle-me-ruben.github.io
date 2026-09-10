# ShareTab · Living Project Portal

The public portal for **ShareTab**, a roommate/group shared-expense tracker, built for
CS 4390/5388 Software Project Management at UTEP.

The portal is the course's major deliverable: a real, public site showing how the
project was managed sprint by sprint. It grows across the semester — each sprint
adds a page and its subpages, and earlier sprint pages stay live.

**Repo:** https://github.com/riddle-me-ruben/project-spm

## Site structure

Routes map 1:1 to the pages the guidelines require, so any individual document
can be linked and reviewed directly.

```
/                              Home — project, business problem, navigation
/about                         About Us — member bios and ownership
/sprint-1                      Sprint 1 hub
/sprint-1/market-research      Market Research      (published)
/sprint-1/business-strategy    Business Strategy    (placeholder)
/sprint-1/project-charter      Project Charter      (placeholder)
/sprint-1/contributions        Contributions & AI Disclosure (placeholder)
/sprint-2                      Sprint 2             (placeholder)
```

The Sprint Retrospective and peer evaluations are **private** and go to Blackboard
only. Nothing on this site links to them, and nothing should.

## Status

| Requirement | State |
|---|---|
| Home / About Us / sprint pages | Done |
| Market Research (aggregate, deep dive, pivots) | Done — written from 13 discovery interviews |
| Business Strategy | Placeholder |
| Project Charter | Placeholder |
| Contribution statements + AI disclosure | Placeholder |
| Downloadable PDF per public document | **Not started** — see below |
| Change log (Sprint 2 onward) | Placeholder on `/sprint-2` |

### PDFs are still outstanding

Every public document needs to exist *both* as readable text on the page and as a
downloadable PDF linked from it, with that same PDF uploaded to Blackboard.

Generated PDFs go in `public/docs/` and are wired up by flipping the `available`
prop on the page's `<PdfLink>`:

```jsx
<PdfLink href="/docs/sprint1-market-research.pdf" available />
```

Until then `PdfLink` renders a visible "PDF pending" chip so the gap is obvious in
review rather than silently missing.

## Key technologies

- **React 18** + **React Router 7** (`BrowserRouter`, real URLs per page)
- **Vite 6** dev server and build
- **Tailwind CSS 3**, custom navy/orange theme, `class`-based dark mode
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

Netlify, building `npm run build` and publishing `dist`. `netlify.toml` contains a
catch-all `/* -> /index.html 200` redirect, which is **required** — without it,
client-side routes 404 on hard refresh and any shared deep link breaks.

Everything for a sprint must be deployed and live before that sprint's demo; the
instructor checks deployment time against the due date.
