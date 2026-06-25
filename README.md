# personal-website

My portfolio site. Single-page layout with sections for about, experience, projects, education, skills, and contact.

**Stack:** Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS

---

## Requirements

- Node.js 18+ (20+ recommended)
- npm

---

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The dev server hot-reloads on save.

### Other commands

```bash
npm run build   # production build
npm run start   # serve the production build (run build first)
npm run lint    # ESLint
```

---

## Project layout

```
src/
  app/
    layout.tsx      # root layout, theme provider, nav/footer/settings shell
    page.tsx        # homepage — composes all sections
    globals.css     # colors, retro UI classes, theme variables
  components/       # section components (Hero, About, Projects, etc.)
  lib/
    site-data.ts    # all copy, links, projects, experience — edit this first
public/
  images/           # headshot and other static assets
```

Content lives in `src/lib/site-data.ts`. Layout and styling live in the components and `globals.css`.

---

## Theming

Dark mode is toggled in the **Settings** section at the bottom of the page. Preference is saved to `localStorage` under the key `theme`.

CSS variables for light/dark palettes are defined in `src/app/globals.css`. Tailwind is used mainly for layout utilities; most visual styling is custom classes in `globals.css` (`.panel`, `.btn`, `.site-frame`, etc.).

---

## Deploying

This is a standard Next.js static-friendly app. A typical flow:

```bash
npm run build
npm run start
```

Or deploy to [Vercel](https://vercel.com) by connecting the repo — no extra config needed for a default Next.js project.

---

## Contact

Astrid Greene — [astridig@umich.edu](mailto:astridig@umich.edu)
