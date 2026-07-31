# EG School — Next.js (App Router)

This is the Next.js conversion of the original React + Vite + Tailwind school
website. Same pages, same look, same routes — just running on Next.js instead
of Vite/React Router.

## Getting started

```bash
npm install
npm run dev
```

Visit http://localhost:3000

## What changed vs. the Vite version

- **Routing**: `react-router-dom` (`BrowserRouter`/`Routes`/`Route`) is gone.
  Next.js App Router uses the file system instead — each page lives in its
  own folder under `src/app/`:
  - `/` → `src/app/page.jsx` (Homepage)
  - `/about` → `src/app/about/page.jsx`
  - `/academics` → `src/app/academics/page.jsx`
  - `/admission` → `src/app/admission/page.jsx`
  - `/contact` → `src/app/contact/page.jsx`
  - `/faculty` → `src/app/faculty/page.jsx`
  - `/login` → `src/app/login/page.jsx`
  - `/news` → `src/app/news/page.jsx`
  - `/notice` → `src/app/notice/page.jsx`
  - unmatched routes → `src/app/not-found.jsx` (replaces the old `*` route /
    `PageNotFound.jsx`)
- **Layout**: `App.jsx` + `MyRoutes.jsx` + `Layout.jsx` are replaced by a
  single `src/app/layout.jsx`, which renders `<Header />`, the page content,
  and `<Footer />` — same structure as before, just Next's way of doing it.
- **Links**: every `<Link to="...">` became `<Link href="...">` from
  `next/link`.
- **Images**: local images now live in `public/images/` and are referenced
  with a leading slash (e.g. `/images/School.png`). Where it was a clean fit,
  `next/image` is used for automatic optimization; a couple of spots (the
  carousel and the daisyUI-hosted stock photos) keep plain `<img>` tags since
  those sources are external/decorative.
- **Client components**: `Header.jsx` and `login/page.jsx` use `useState`, so
  they're marked `"use client"` at the top — required in the App Router for
  any component with interactivity/hooks. Every other page/component is a
  plain server component by default (faster, smaller JS bundle).
- **Tailwind + daisyUI**: unchanged — still Tailwind v4's CSS-first setup
  (`@import "tailwindcss"; @plugin "daisyui";` in `globals.css`), just wired
  in via `postcss.config.mjs` instead of the Vite plugin.
- **`HomeCategoryCard`**: the six near-identical cards (Faculty, Facilities,
  News, Notice Board, About, Gallery) are now generated from a small array
  and `.map()` instead of being pasted six times — same visual output, less
  duplicated markup.
- **Login page**: the original called a `login(email, password)` function
  that was never imported/defined anywhere in the project (so it would have
  crashed on submit). Since there's no backend in this static conversion, I
  replaced it with a placeholder handler (`console.log` + success alert) that
  you can swap for a real call to an API route (e.g. `/api/auth/login`) once
  the backend exists.

## Not carried over

- `react-router-dom`, `bootstrap`, `react-bootstrap`, `react-redux`,
  `sweetalert2`, and `@popperjs/core` were in the old `package.json` but
  weren't actually used in any of the page/component code, so they were left
  out of this conversion to keep it lean. Re-add any of them if later pages
  need them.
- The header/footer link to `/gallery` and `/facilities`, which didn't have
  page files in the original project either — same placeholders, no page yet.
  Add `src/app/gallery/page.jsx` and `src/app/facilities/page.jsx` when ready.

## Project idea/scope

Unchanged — this still matches `Requirement Analysis.md` and the MERN
internship spec PDF you included. This conversion only covers the **static
frontend pages**; the backend (Express/MongoDB/JWT from your `Note.md`) is a
separate project you'd connect to later via API routes or a separate server.
