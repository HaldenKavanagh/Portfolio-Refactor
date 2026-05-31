import { skillGroups } from "../../data/skills";

function Pill({ children }) {
  return (
    <span className="px-4 py-2 rounded-full bg-surface border border-line text-mist font-medium text-sm hover:border-mint hover:text-chalk transition">
      {children}
    </span>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-20">
      <div className="reveal mb-10">
        <p className="text-mint font-semibold tracking-[0.2em] text-xs uppercase mb-3">
          Toolkit
        </p>
        <h2 className="font-display font-bold text-4xl text-chalk">
          Skills &amp; technologies
        </h2>
      </div>

      <div className="grid gap-10 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div key={group.label} className="reveal">
            <h3 className="font-display font-semibold text-lg text-chalk mb-4">
              {group.label}
            </h3>
            <div className="flex flex-wrap gap-3">
              {group.items.map((item) => (
                <Pill key={item}>{item}</Pill>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
