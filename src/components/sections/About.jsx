import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import { site } from "../../data/site";

const stats = [
  { value: "Full-stack", label: "Front to back" },
  { value: "Elixir", label: "Current stack" },
  { value: "Boulder", label: "Colorado" },
];

export default function About() {
  return (
    <section id="about" className="bg-base2 border-y border-line/50">
      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-10">
        <div className="reveal">
          <p className="text-mint font-semibold tracking-[0.2em] text-xs uppercase mb-3">
            About
          </p>
          <h2 className="font-display font-bold text-4xl text-chalk leading-tight">
            A bit about me
          </h2>
        </div>

        <div className="md:col-span-2 reveal">
          <p className="text-lg text-mist leading-relaxed">
            I&apos;m a full-stack developer at Razoyo who likes owning a feature
            end to end — from the data model to the UI. Right now that&apos;s{" "}
            <span className="text-chalk">Elixir &amp; Phoenix LiveView</span>,
            building real-time SaaS on Google Cloud, but I came up through the{" "}
            <span className="text-chalk">JavaScript</span> world (React, Node,
            REST/GraphQL) and pick up new stacks quickly.
          </p>
          <p className="mt-4 text-sage leading-relaxed">
            What I care about is solving the problem well, whatever the tools.
            I got my start at the University of Denver full-stack coding bootcamp
            (Feb 2024). Outside of code you&apos;ll find me in Boulder&apos;s
            outdoors hiking, deep in a video game, building PCs, or cooking
            something ambitious.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display font-bold text-3xl text-mint">
                  {stat.value}
                </p>
                <p className="text-sm text-sage">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4 text-sm font-semibold">
            <Link
              to="/certificate"
              className="inline-flex items-center gap-2 border border-line text-chalk px-5 py-2.5 rounded-xl hover:border-mint hover:text-mint transition"
            >
              View Certificate
            </Link>
            <a
              href={site.credly}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-mint ul-anim"
            >
              Credly badge
              <FiArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
