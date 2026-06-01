import { experience } from "../../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-6 py-20">
      <div className="reveal mb-10">
        <p className="text-mint font-semibold tracking-[0.2em] text-xs uppercase mb-3">
          Experience
        </p>
        <h2 className="font-display font-bold text-4xl text-chalk">
          Where I&apos;ve worked
        </h2>
      </div>

      <ol className="relative border-l border-line/70 ml-2">
        {experience.map((job) => (
          <li key={`${job.company}-${job.period}`} className="reveal mb-10 ml-6 last:mb-0">
            <span
              className="absolute -left-[7px] mt-1.5 w-3 h-3 rounded-full bg-mint ring-4 ring-base"
              aria-hidden="true"
            />
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="font-display font-semibold text-xl text-chalk">
                {job.role}
                <span className="text-mint"> · {job.company}</span>
              </h3>
              <p className="text-sm text-sage font-medium">{job.period}</p>
            </div>
            {(job.location || job.note) && (
              <p className="mt-1 text-sm text-sage">
                {[job.location, job.note].filter(Boolean).join(" · ")}
              </p>
            )}
            <p className="mt-3 text-mist leading-relaxed max-w-3xl">
              {job.description}
            </p>

            {job.highlights?.length > 0 && (
              <div className="mt-6 grid gap-4">
                {job.highlights.map((item) => (
                  <div
                    key={item.title}
                    className="bg-surface border border-line rounded-2xl p-5"
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                      <h4 className="font-display font-semibold text-lg text-chalk">
                        {item.title}
                      </h4>
                      {item.stack && (
                        <p className="text-xs font-medium text-mint">
                          {item.stack}
                        </p>
                      )}
                    </div>
                    <ul className="mt-3 grid gap-2">
                      {item.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="text-sage leading-relaxed pl-4 relative before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:rounded-full before:bg-mint/70"
                        >
                          {bullet}
                        </li>
                      ))}
                    </ul>
                    {item.tags?.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs font-medium text-mist border border-line rounded-full px-2.5 py-1"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}
