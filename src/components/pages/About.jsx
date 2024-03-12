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
import { FaAws, FaWindows, FaSlack, FaGithub, FaDiscord } from "react-icons/fa";
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
        problem solving aspect of programming. Seeing my work improve alongside
        my skillset is extremely gratifying.
        <br />
        <br />
        Outside of coding, you'll find me exploring Boulder's outdoors through
        hikes, enjoying video games, cooking, and building intricate fishtanks.
        My diverse interests fuel my creativity both in code and in life. Let's
        create something exceptional together!
      </p>

      <h1 className="skills-section-title">SKILLSET :</h1>
      <div className="skills-container">
        <DiNodejsSmall className="skill" title="Node.js"/>
        <DiJqueryLogo className="skill" title="Jquery" />
        <DiMysql className="skill" title="Mysql" />
        <DiMongodb className="skill" title="Mongodb" />
        <DiJsBadge className="skill" title="JavaScript ES6+" />
        <DiHtml5 className="skill" title="HTML 5" />
        <DiHeroku className="skill" title="Heroku" />
        <DiBootstrap className="skill" title="Bootstrap" />
        <DiReact className="skill" title="React.js" />
        <DiCss3 className="skill" title="CSS" />
        <SiExpress className="skill" title="express.js" />
        <SiHandlebarsdotjs className="skill" title="Handlebars.js" />
        <SiWebpack className="skill" title="Webpack" />
        <FaAws className="skill" title="Amazon Web Services" />
      </div>
      <h1 className="skills-section-title" >TOOLS I USE :</h1>
      <div className="tools-container" >
        <FaWindows className="skill" title="Windows OS" />
        <DiGit className="skill"  title="Git"/>
        <TbBrandVscode className="skill" title="VsCode" />
        <FaSlack className="skill" title="Slack" />
        <FaGithub className="skill"  title="Github"/>
        <FaDiscord className="skill"  title="Discord"/>
      </div>
    </div>
  );
}
