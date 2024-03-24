import "../styles/About.css";
import { useNavigate } from "react-router-dom";

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
import { IoIosArrowDown } from "react-icons/io";
import { GrCertificate } from "react-icons/gr";
import { LuBadgeCheck } from "react-icons/lu";

import DUbadge from "../images/du-badge.png";

export default function About() {
  const navigate = useNavigate();

  const handleCertificateClick = () => {
    navigate("/certificate");
  };

  const handleBadgeClick = () => {
    // Open the Credily badge link in a new tab
    window.open(
      "https://www.credly.com/badges/3d2f16be-a807-4992-be69-bae0bd6aa68c/public_url",
      "_blank"
    );
  };
  return (
    <div className="about">
      <h1 className="skills-section-title">SKILLSET :</h1>
      <div className="skills-container">
        <DiNodejsSmall className="skill" title="Node.js" />
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
      <h1 className="skills-section-title">TOOLS I USE :</h1>
      <div className="skills-container">
        <FaWindows className="skill" title="Windows OS" />
        <DiGit className="skill" title="Git" />
        <TbBrandVscode className="skill" title="VsCode" />
        <FaSlack className="skill" title="Slack" />
        <FaGithub className="skill" title="Github" />
        <FaDiscord className="skill" title="Discord" />
      </div>
      <h1 className="skills-section-title">
        EDUCATION <IoIosArrowDown />{" "}
      </h1>
      <div className="education">
        <div className="badge-section">
          <img className="about-image" src={DUbadge}></img>
          <p className="about-p">
            I graduated from the DU fullstack coding bootcamp on February 15,
            2024.
            <br />
            <br />
            An intensive three-month Full Stack Coding Bootcamp at DU, where I
            acquired a comprehensive skill set in web development. Through
            collaborative projects, I gained proficiency in GitHub workflow and
            Agile methodologies, enhancing my ability to contribute effectively
            to team projects.
            <br />
            <br />
            <button onClick={handleCertificateClick} className="submit-btn">
              View my certificate <GrCertificate />
            </button>
            <button onClick={handleBadgeClick} className="submit-btn">
              View Credily Badge <LuBadgeCheck />
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
