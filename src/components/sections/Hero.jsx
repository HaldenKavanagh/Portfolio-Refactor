import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { site, resume } from "../../data/site";
import pfp from "../../images/pfp.png";

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 pt-20 pb-24 grid md:grid-cols-[1.4fr_1fr] gap-12 items-center">
      <div className="reveal">
        <p className="text-mint font-semibold tracking-[0.2em] text-xs uppercase mb-4">
          {site.role}
        </p>
        <h1 className="font-display font-bold leading-[0.95] tracking-tight text-6xl sm:text-7xl lg:text-8xl text-chalk">
          Halden
          <br />
          Kavanagh
        </h1>
        <p className="mt-6 text-lg text-sage max-w-md leading-relaxed">
          Full Stack Developer with two years shipping production SaaS in Elixir
          &amp; Phoenix LiveView at Razoyo. I work across the whole stack —
          real-time UI, backend logic, database design, and design systems.
          Based in {site.location}.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-mint text-base font-semibold px-6 py-3 rounded-xl hover:bg-mint-lite transition"
          >
            View Projects
            <FiArrowRight size={18} />
          </a>
          <a
            href={resume.downloadURL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-line text-chalk font-semibold px-6 py-3 rounded-xl hover:border-mint hover:text-mint transition"
          >
            Download Resume
          </a>
          <div className="flex items-center gap-2 ml-1">
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="grid place-items-center w-11 h-11 rounded-xl border border-line text-sage hover:text-mint hover:border-mint transition"
            >
              <FaGithub size={20} />
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="grid place-items-center w-11 h-11 rounded-xl border border-line text-sage hover:text-mint hover:border-mint transition"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="reveal relative">
        <div className="aspect-square rounded-3xl bg-gradient-to-br from-surface via-base2 to-line/60 border border-line overflow-hidden glow">
          <img
            src={pfp}
            alt="Portrait of Halden Kavanagh"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="absolute -bottom-4 -left-4 bg-surface border border-line rounded-2xl px-5 py-3 glow">
          <p className="text-xs text-sage font-medium">Available for</p>
          <p className="font-display font-semibold text-chalk">
            Full-time roles
          </p>
        </div>
      </div>
    </section>
  );
}
