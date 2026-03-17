# Astrid Greene — Personal Website

A modern, responsive personal/professional site built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**. Designed for a University of Michigan CS student: technical, polished, and easy to customize.

## Folder structure

```
personal-website/
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout (fonts, Navbar, Footer, ThemeProvider)
│   │   ├── page.tsx         # Home page — composes all sections
│   │   └── globals.css      # Tailwind + CSS variables (light/dark)
│   ├── components/
│   │   ├── Navbar.tsx       # Sticky nav, dark mode toggle, mobile menu
│   │   ├── Footer.tsx       # Copyright + social links
│   │   ├── ThemeProvider.tsx # Client-side theme (light/dark)
│   │   ├── Section.tsx      # Reusable section wrapper + scroll reveal
│   │   ├── Hero.tsx         # Landing: headline, headshot, CTAs, background
│   │   ├── About.tsx        # Bio
│   │   ├── CurrentFocus.tsx # Optional “what I’m working on”
│   │   ├── Education.tsx    # Degree, GPA, coursework
│   │   ├── Experience.tsx   # Timeline of roles
│   │   ├── Projects.tsx     # Featured + project cards
│   │   ├── Research.tsx     # Research highlight
│   │   ├── Leadership.tsx   # Community / leadership
│   │   ├── Skills.tsx        # Languages, tools, core areas
│   │   ├── Resume.tsx       # Summary + PDF download
│   │   └── Contact.tsx       # Email/LinkedIn/GitHub + form UI
│   └── lib/
│       └── site-data.ts     # All editable content and config
├── public/                  # Static assets (add headshot, resume PDF here)
├── tailwind.config.ts
├── next.config.mjs
├── package.json
└── README.md
```

## Run locally

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start dev server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000).

3. **Build for production**
   ```bash
   npm run build
   npm start
   ```

## Deploy on Vercel

- Push the repo to GitHub and import the project in [Vercel](https://vercel.com). Vercel will detect Next.js and set the build command and output.
- Or use the Vercel CLI: `npx vercel` from the project root.

## What to edit first

| Goal | File / place |
|------|----------------|
| **Name, tagline, “currently” line, headshot, resume link** | `src/lib/site-data.ts` — `site` object |
| **Contact (email, phone, LinkedIn, GitHub)** | `src/lib/site-data.ts` — `contact` |
| **Bio** | `src/lib/site-data.ts` — `about.bio` |
| **Education (degree, GPA, coursework)** | `src/lib/site-data.ts` — `education` |
| **Experience entries** | `src/lib/site-data.ts` — `experiences` |
| **Projects** | `src/lib/site-data.ts` — `projects` |
| **Research, leadership, skills** | `src/lib/site-data.ts` — `research`, `leadership`, `skills` |
| **Headshot image** | Add image to `public/` (e.g. `public/headshot.jpg`) and set `site.headshot = "/headshot.jpg"` in `site-data.ts` |
| **Resume PDF** | Add PDF to `public/` (e.g. `public/resume.pdf`) and set `site.resumeUrl = "/resume.pdf"` in `site-data.ts` |
| **Add/remove sections** | `src/app/page.tsx` — import and render or remove section components |
| **Nav links** | `src/components/Navbar.tsx` — `navLinks` array |
| **Colors / theme** | `src/app/globals.css` — `:root` and `.dark` CSS variables; accent is purple by default |

All content is static; no database. The contact form is UI-only — connect it to an API or service (e.g. Formspree, Resend) when you want it to send email.
