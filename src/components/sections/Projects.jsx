import { useState } from "react";
import { projects } from "../../data/projects";
import { site } from "../../data/site";
import ProjectCard from "../ProjectCard";
import VideoModal from "../VideoModal";

export default function Projects() {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section id="projects" className="bg-base2 border-y border-line/50">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="reveal mb-10">
          <p className="text-mint font-semibold tracking-[0.2em] text-xs uppercase mb-3">
            Selected work
          </p>
          <h2 className="font-display font-bold text-4xl text-chalk">
            Work &amp; projects
          </h2>
          <p className="text-sage mt-3 max-w-xl">
            Production apps I build at Razoyo, plus earlier full-stack projects.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              onPlayDemo={setActiveVideo}
            />
          ))}

          <article className="bg-mint text-base rounded-2xl p-6 flex flex-col justify-center reveal">
            <h3 className="font-display font-semibold text-2xl">
              Want to see more?
            </h3>
            <p className="text-base/70 text-sm mt-2">
              A few more experiments live on my GitHub.
            </p>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 font-semibold underline w-max"
            >
              Visit GitHub ↗
            </a>
          </article>
        </div>
      </div>

      {activeVideo && (
        <VideoModal src={activeVideo} onClose={() => setActiveVideo(null)} />
      )}
    </section>
  );
}
