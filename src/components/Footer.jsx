import { FaGithub, FaLinkedin } from "react-icons/fa";
import { site } from "../data/site";

export default function Footer() {
  return (
    <footer className="border-t border-line/50">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-sage">
        <p className="font-display font-semibold text-chalk">{site.name}</p>

        <div className="flex items-center gap-3">
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="grid place-items-center w-10 h-10 rounded-lg border border-line text-sage hover:text-mint hover:border-mint transition"
          >
            <FaGithub size={18} />
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="grid place-items-center w-10 h-10 rounded-lg border border-line text-sage hover:text-mint hover:border-mint transition"
          >
            <FaLinkedin size={18} />
          </a>
        </div>

        <p>© 2026</p>
      </div>
    </footer>
  );
}
