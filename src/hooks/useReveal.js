import { useEffect } from "react";

/**
 * Adds the `in` class to every `.reveal` element as it scrolls into view,
 * driving the fade-up animation defined in index.css. Runs once on mount.
 * Respects prefers-reduced-motion via the CSS, which renders `.reveal`
 * visible anyway.
 */
export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal:not(.in)");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}
