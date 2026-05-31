# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start the Vite dev server (port **3000**, auto-opens a browser; see `vite.config.js`)
- `npm run build` — produce a production build into `dist/`
- `npm run lint` — ESLint over `.js`/`.jsx` with `--max-warnings 0` (any warning fails)
- `npm run preview` — serve the production build locally

There is no test runner configured in this project.

## Architecture

A single-page personal portfolio built with **React 19 + plain JavaScript (JSX) + Vite 6 + Tailwind CSS v4**. No TypeScript, no component library. Aesthetic is the hand-built **"Lifted Forest"** dark theme (sage/forest palette, luminous mint accent, Rajdhani display + Inter body).

- **Single-page + two routes.** Routing lives in `src/main.jsx` (react-router v7 data router: `createBrowserRouter` + `RouterProvider`). `App.jsx` is the layout shell — it renders `<Navbar />`, `<Outlet />`, `<Footer />` so the nav/footer persist. Routes are children of `App`:
  - `/` → `<Landing />` — one scrolling page composed of sections (`Hero`, `About`, `Skills`, `Projects`, `Contact`), navigated via in-page hash anchors (`#about`, `#projects`, etc.).
  - `/resume` → `<Resume />` (embedded Google Doc preview + PDF download).
  - `/certificate` → `<Certificate />` (DU bootcamp certificate image).
  - `errorElement` → `<ErrorPage />` (real 404 page via `useRouteError`).

- **Sections** live in `src/components/sections/`. Page-level wrappers live in `src/pages/`. Shared UI (`Navbar`, `Footer`, `ProjectCard`, `VideoModal`) lives in `src/components/`.

- **Cross-route anchor nav.** `Navbar` anchor links scroll in-page when already on `/`, and otherwise `navigate("/#hash")`; `Landing` reads `useLocation().hash` and scrolls the target into view on mount. Keep this pattern if you add nav links.

- **Content is data-driven.** Real content lives in `src/data/`:
  - `projects.js` — `projects` array (`{ title, image, alt, description, demoVideo?, links }`). Images/video imported from `src/images/` & `src/videos/`.
  - `skills.js` — `skills` and `tools` string arrays.
  - `site.js` — `site` (name, role, location, email, github, linkedin, credly) and `resume` (preview/download URLs derived from one Google Doc ID — do not duplicate the ID).
  Update content here, not in JSX.

- **Styling: Tailwind CSS v4**, configured via the `@tailwindcss/vite` plugin in `vite.config.js`. The single global stylesheet is `src/index.css` (imported once in `main.jsx`):
  - `@import "tailwindcss";`
  - `@theme { ... }` defines the Lifted Forest design tokens, exposed as utilities (`bg-base`, `text-mint`, `font-display`, etc.). Use these tokens — don't hardcode hex.
  - Custom `@utility` rules port the mockup effects: `glow`, `lift`, `ul-anim` (animated underline), `grain` (texture). `.reveal` is a plain class toggled to `.in` by the `useReveal` hook for scroll-fade (respects `prefers-reduced-motion`).
  There are **no per-page CSS files** — Tailwind utilities only.

- **Scroll reveal:** `src/hooks/useReveal.js` runs an `IntersectionObserver` that adds `.in` to `.reveal` elements as they enter view. Call `useReveal()` once per page that uses `.reveal`.

- **Icons:** `react-icons` (`react-icons/fa`, `react-icons/fi`).

- **Contact form** (`src/components/sections/Contact.jsx`): submits via `@emailjs/browser` v4 (`emailjs.sendForm(serviceId, templateId, formRef, { publicKey })`). Credentials come from **env vars** `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY` (see `.env.example`). If any are missing, the form degrades gracefully to a "not configured" message instead of crashing. The form fields are named `name`, `email`, `message` to match the EmailJS template.

## Notes / gotchas

- `.env` is gitignored; copy `.env.example` → `.env` and fill the EmailJS keys to make the contact form send. Without them the form shows a graceful fallback.
- `react/prop-types` is intentionally disabled in `.eslintrc.cjs` (plain-JSX project, no type system — props are documented via the `src/data/` modules).
- `package-lock.json` is committed (no longer gitignored) for reproducible installs.
- Some source images are large (`starrray.png` ~2.3 MB, `pfp.png` ~1 MB). Consider optimizing/converting to WebP if load performance matters.
