# Halden Kavanagh — Portfolio

A single-page personal portfolio for a full-stack web developer, built with **React 19, Vite 6, and Tailwind CSS v4**. Hand-designed "Lifted Forest" dark theme (sage/forest palette, mint accent, Rajdhani + Inter type).

## Tech stack

- **React 19** + **react-router-dom v7** (data router)
- **Vite 6** build tooling
- **Tailwind CSS v4** via `@tailwindcss/vite` (design tokens in `src/index.css`)
- **@emailjs/browser** for the contact form
- **react-icons** for iconography

## Getting started

```bash
git clone https://github.com/HaldenKavanagh/<repo>.git
cd <repo>
npm install
npm run dev        # http://localhost:3000
```

Other scripts:

```bash
npm run build      # production build → dist/
npm run preview    # serve the production build
npm run lint       # ESLint (fails on any warning)
```

## Contact form setup (EmailJS)

The contact form reads its credentials from environment variables. Copy the example file and fill in your [EmailJS](https://dashboard.emailjs.com/admin) keys:

```bash
cp .env.example .env
# then set:
# VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY
```

Until these are set, the form stays in a graceful "not configured" state and prompts visitors to email directly. `.env` is gitignored.

## Structure

```
src/
  main.jsx                # router (/, /resume, /certificate, error page)
  App.jsx                 # layout shell: Navbar + Outlet + Footer
  index.css               # Tailwind import + Lifted Forest @theme tokens + utilities
  pages/                  # Landing, Resume, Certificate, ErrorPage
  components/             # Navbar, Footer, ProjectCard, VideoModal
    sections/             # Hero, About, Skills, Projects, Contact
  data/                   # projects.js, skills.js, site.js  (edit content here)
  hooks/useReveal.js      # scroll-reveal IntersectionObserver
  images/  videos/        # imported assets
```

To update content, edit the modules in `src/data/` rather than the JSX.

## Deployment

Static build (`dist/`) — deployable to Netlify, Vercel, or any static host.

## Contact

- GitHub: [HaldenKavanagh](https://github.com/HaldenKavanagh/)
- LinkedIn: [Halden Kavanagh](https://www.linkedin.com/in/halden-kavanagh-79169b2b6/)
- Email: haldenkav@gmail.com
