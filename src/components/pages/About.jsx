import "../../styles/About.css";

import {
  DiReact,
  DiBootstrap,
  DiCss3,
  DiGit,
  DiHeroku,
  DiHtml5,
  DiJsBadge,
  DiMongodb,
  DiMysql,
  DiNpm,
  DiNodejsSmall,
} from "react-icons/di";

export default function About() {
  return (
    <div className="about">
      <h1 className="about-section-title">ABOUT ME</h1>
      <p className="about-p">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus
        quaerat nobis facilis illum adipisci facere voluptatem laboriosam
        possimus veritatis fugiat. Iure qui blanditiis debitis, provident
        molestias neque harum tenetur nisi ab excepturi at quisquam veniam
        libero, dicta obcaecati adipisci! Accusamus enim reprehenderit tempore
        eveniet nihil magnam, facilis rem illum voluptatem.
      </p>

      <h1 className="skills-section-title">SKILLSET</h1>
      <div className="skills-container">
        <DiNodejsSmall className="skill" />

        <DiNpm className="skill" />

        <DiMysql className="skill" />

        <DiMongodb className="skill" />

        <DiJsBadge className="skill" />

        <DiHtml5 className="skill" />

        <DiHeroku className="skill" />

        <DiBootstrap className="skill" />

        <DiReact className="skill" />

        <DiCss3 className="skill" />

        <DiGit className="skill" />
      </div>
    </div>
  );
}
