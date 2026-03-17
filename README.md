# Personal Website

Personal website built with Next.js and TypeScript to showcase projects, experience, and technical work. Structured around reusable components, clean layout, and heavy animation to make the site feel interactive instead of static.

Made with Next.js, TypeScript, Tailwind CSS, Framer Motion  
By Astrid Greene astridig@umich.edu

---

## Overview

This is a portfolio site designed to actually feel like a product, not just a page of text.

The focus is on:
- clear structure
- strong visual hierarchy
- interaction and motion

Everything is componentized so content can be updated without rewriting layout logic.

---

## Features

- Fully responsive layout (desktop + mobile)
- Section-based navigation (hero, experience, projects, etc.)
- Scroll-triggered animations and transitions
- Interactive UI elements and hover states
- Resume integration (download/view)
- Modular project and experience data
- Dark mode support

---

## Tech Stack

- Next.js (App Router)
- TypeScript
- React
- Tailwind CSS
- Framer Motion

---

## Project Structure

```
src/
  app/            → routing + layout
  components/     → UI components (Navbar, sections, cards)
  lib/            → structured site data
public/
  images/         → assets (headshot, etc.)
  resume/         → resume PDF
```

---

## Running Locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

---

## Notes

The site is intentionally built to separate content from layout. Most updates (projects, experience, links) can be made through data files without touching component code.

Animations are used heavily, but tied to scroll and interaction so they feel intentional rather than distracting.

---

## Future Improvements

- Add backend for contact form or messaging
- Store projects/experience in a database instead of static files
- Add dedicated project pages with deeper detail
- Improve performance (image optimization, lazy loading)
- Add analytics

---

## Contact

Astrid Greene  
astridig@umich.edu
