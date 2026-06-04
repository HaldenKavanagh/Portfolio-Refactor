import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const anchorLinks = [
  { label: "Home", hash: "#top" },
  { label: "About", hash: "#about" },
  { label: "Experience", hash: "#experience" },
  { label: "Projects", hash: "#projects" },
  { label: "Resume", hash: "#resume" },
  { label: "Contact", hash: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const onLanding = pathname === "/";

  const close = () => setOpen(false);

  // On the landing page, let the browser do a native in-page anchor jump.
  // From any other route, navigate home with the hash so Landing can scroll.
  const goToSection = (hash) => (e) => {
    close();
    if (onLanding) return; // default anchor behavior scrolls in-page
    e.preventDefault();
    navigate(`/${hash}`);
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-base/80 border-b border-line/50">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#top"
          onClick={goToSection("#top")}
          aria-label="Home"
          className="font-display font-bold text-xl tracking-wide flex items-center gap-2"
        >
          <span className="grid place-items-center w-9 h-9 rounded-lg bg-mint text-base text-sm font-semibold">
            HK
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-sage">
          {anchorLinks.map((link) => (
            <a
              key={link.hash}
              href={link.hash}
              onClick={goToSection(link.hash)}
              className="ul-anim hover:text-chalk transition"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          onClick={goToSection("#contact")}
          className="hidden md:inline-flex items-center gap-2 text-sm font-semibold bg-mint text-base px-4 py-2 rounded-lg hover:bg-mint-lite transition"
        >
          Get in touch
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden grid place-items-center w-10 h-10 rounded-lg border border-line text-mist"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-line/50 bg-base px-6 py-4 flex flex-col gap-4 text-sage font-medium">
          {anchorLinks.map((link) => (
            <a
              key={link.hash}
              href={link.hash}
              onClick={goToSection(link.hash)}
              className="block py-1 hover:text-chalk transition"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
