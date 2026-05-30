# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start the Vite dev server (port **3000**, auto-opens a browser; see `vite.config.js`)
- `npm run build` — produce a production build into `dist/`
- `npm run lint` — ESLint over `.js`/`.jsx` with `--max-warnings 0` (any warning fails)
- `npm run preview` — serve the production build locally

There is no test runner configured in this project.

## Architecture

A single-page personal portfolio built with **React 18 + plain JavaScript (JSX) + Vite 4**. No TypeScript, no Tailwind, no component library — styling is hand-written plain CSS, one stylesheet per view.

- **Routing lives in `src/main.jsx`, not `App.jsx`.** It uses `react-router-dom` v6's data router (`createBrowserRouter` + `RouterProvider`). `App.jsx` is only the layout shell — it renders `<NavTabs />`, `<Outlet />`, and `<Footer />`. All routes are children of `App` so the nav/footer persist across navigation. Routes: `/` and `/home` (Home), `/about`, `/contact`, `/projects`, `/certificate`, `/resume`. To add a page, create it in `src/pages/`, import it in `main.jsx`, and add a child route object there.

- **Pages** (`src/pages/`): one component per route, default-exported. Pages are self-contained — content is hardcoded in JSX rather than pulled from data modules.

- **Styling**: plain CSS in `src/styles/`, one file per page/component, imported at the top of the matching component (e.g. `import "../styles/Home.css"`). Class names are referenced as string literals — there is no `cn()` helper or utility-class system. `Main.css` holds shared/global styles.

- **Animations**: `animate.css` (imported where used) applied via class names like `className="animate__animated animate__fadeIn"`.

- **Icons**: `react-icons` (e.g. `react-icons/io`, `react-icons/ai`). `vite.config.js` pre-bundles `react-icons` via `optimizeDeps`.

- **Images/video**: imported directly from `src/images/` and `src/videos/` (Vite asset imports), not referenced from `public/`.

- **Contact form** (`src/pages/Contact.jsx`): submits via `emailjs-com` (`emailjs.sendForm`). The EmailJS service ID, template ID, and public key are hardcoded in that file — update them there if the EmailJS account changes.

## Notes / gotchas

- `src/main.jsx` references `errorElement: <Error />` but `Error` is never imported or defined — a router-level error currently throws a `ReferenceError` instead of rendering. Fix this if touching error handling.
- `granim` is listed in `package.json` dependencies but is not used anywhere in `src/`.
