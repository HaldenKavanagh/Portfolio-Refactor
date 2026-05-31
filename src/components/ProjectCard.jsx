function Tags({ tags }) {
  if (!tags?.length) return null;
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="text-xs font-medium text-sage border border-line rounded-full px-2.5 py-1"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

export default function ProjectCard({ project, onPlayDemo }) {
  const { featured, title, role, image, alt, description, tags, links, demoVideo } =
    project;

  return (
    <article className="lift bg-surface border border-line rounded-2xl overflow-hidden flex flex-col reveal">
      {featured ? (
        <div className="px-5 pt-5">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-mint">
            <span className="w-1.5 h-1.5 rounded-full bg-mint" />
            Professional work
          </span>
        </div>
      ) : (
        <div className="aspect-[16/10] overflow-hidden">
          <img
            src={image}
            alt={alt}
            className="object-cover w-full h-full"
            loading="lazy"
          />
        </div>
      )}

      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-display font-semibold text-xl text-chalk">{title}</h3>
        {role && <p className="text-xs text-mint mt-1">{role}</p>}
        <p className="text-sm text-sage mt-2 flex-1">{description}</p>

        <Tags tags={tags} />

        {(links?.length || demoVideo) && (
          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm font-semibold">
            {links?.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-mint ul-anim"
                {...(link.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {link.label}
                {link.external ? " ↗" : ""}
              </a>
            ))}
            {demoVideo && (
              <button
                type="button"
                onClick={() => onPlayDemo(demoVideo)}
                className="text-mint ul-anim"
              >
                View Demo
              </button>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
