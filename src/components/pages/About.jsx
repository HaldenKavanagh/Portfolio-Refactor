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
  DiNodejsSmall,
  DiJqueryLogo,
} from "react-icons/di";
import { SiExpress, SiHandlebarsdotjs, SiWebpack } from "react-icons/si";
import { FaAws, FaWindows, FaSlack, FaGithub } from "react-icons/fa";
import { TbBrandVscode } from "react-icons/tb";

export default function About() {
  return (
    <div className="about">
      <h1 className="about-section-title">ABOUT ME :</h1>
      <p className="about-p">
        Hi, I'm Halden, a Full Stack Web Developer based in Boulder, Colorado.
        <br />
        <br />
        My coding journey started at the University of Denver coding bootcamp,
        igniting a passion for web development. I found that I really enjoy the
        problem solving aspect in programming, and seeing my work improve
        alongside my skillset is extremely gratifying.
        <br />
        <br />
        Outside of coding, you'll find me exploring Boulder's outdoors through
        hikes, enjoying video games, and building intricate fishtanks. My
        diverse interests fuel my creativity both in code and in life. Let's
        create something exceptional together!
      </p>

      <h1 className="skills-section-title">SKILLSET :</h1>
      <div className="skills-container">
        <DiNodejsSmall className="skill" />
        <DiJqueryLogo className="skill" />
        <DiMysql className="skill" />
        <DiMongodb className="skill" />
        <DiJsBadge className="skill" />
        <DiHtml5 className="skill" />
        <DiHeroku className="skill" />
        <DiBootstrap className="skill" />
        <DiReact className="skill" />
        <DiCss3 className="skill" />
        <SiExpress className="skill" />
        <SiHandlebarsdotjs className="skill" />
        <SiWebpack className="skill" />
        <FaAws className="skill" />
      </div>
      <h1 className="skills-section-title">TOOLS I USE :</h1>
      <div className="tools-container">
        <FaWindows className="skill" />
        <DiGit className="skill" />
        <TbBrandVscode className="skill" />
        <FaSlack className="skill" />
        <FaGithub className="skill" />
      </div>
    </div>
  );
}
