import "../styles/About.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "animate.css";

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
  const [hoveredTech, setHoveredTech] = useState("");

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
      <h1 className="skills-section-title animate__animated animate__fadeInLeft">
        SKILLSET :
      </h1>
      <div className="skills-container">
        <div
          className="skill-container animate__animated animate__backInLeft"
          onMouseEnter={() => setHoveredTech("Node.js")}
          onMouseLeave={() => setHoveredTech("")}
        >
          {hoveredTech === "Node.js" ? (
            <span className="tech-text">Node.js</span>
          ) : (
            <DiNodejsSmall className="tech-icon" title="Node.js" />
          )}
        </div>
        <div
          className="skill-container animate__animated animate__backInLeft"
          onMouseEnter={() => setHoveredTech("Jquery")}
          onMouseLeave={() => setHoveredTech("")}
        >
          {hoveredTech === "Jquery" ? (
            <span className="tech-text">Jquery</span>
          ) : (
            <DiJqueryLogo className="tech-icon" title="Jquery" />
          )}
        </div>
        <div
          className="skill-container animate__animated animate__backInLeft"
          onMouseEnter={() => setHoveredTech("Mysql")}
          onMouseLeave={() => setHoveredTech("")}
        >
          {hoveredTech === "Mysql" ? (
            <span className="tech-text">Mysql</span>
          ) : (
            <DiMysql className="tech-icon" title="Mysql" />
          )}
        </div>
        <div
          className="skill-container animate__animated animate__backInLeft"
          onMouseEnter={() => setHoveredTech("Mongodb")}
          onMouseLeave={() => setHoveredTech("")}
        >
          {hoveredTech === "Mongodb" ? (
            <span className="tech-text">Mongodb</span>
          ) : (
            <DiMongodb className="tech-icon" title="Mongodb" />
          )}
        </div>
        <div
          className="skill-container animate__animated animate__backInLeft"
          onMouseEnter={() => setHoveredTech("JavaScript")}
          onMouseLeave={() => setHoveredTech("")}
        >
          {hoveredTech === "JavaScript" ? (
            <span className="tech-text">JavaScript ES6+</span>
          ) : (
            <DiJsBadge className="tech-icon" title="JavaScript" />
          )}
        </div>
        <div
          className="skill-container animate__animated animate__backInLeft"
          onMouseEnter={() => setHoveredTech("Html5")}
          onMouseLeave={() => setHoveredTech("")}
        >
          {hoveredTech === "Html5" ? (
            <span className="tech-text">Html5</span>
          ) : (
            <DiHtml5 className="tech-icon" title="Html5" />
          )}
        </div>
        <div
          className="skill-container animate__animated animate__backInLeft"
          onMouseEnter={() => setHoveredTech("Heroku")}
          onMouseLeave={() => setHoveredTech("")}
        >
          {hoveredTech === "Heroku" ? (
            <span className="tech-text">Heroku</span>
          ) : (
            <DiHeroku className="tech-icon" title="Heroku" />
          )}
        </div>
        <div
          className="skill-container animate__animated animate__backInLeft"
          onMouseEnter={() => setHoveredTech("Bootstrap")}
          onMouseLeave={() => setHoveredTech("")}
        >
          {hoveredTech === "Bootstrap" ? (
            <span className="tech-text">Bootstrap</span>
          ) : (
            <DiBootstrap className="tech-icon" title="Bootstrap" />
          )}
        </div>
        <div
          className="skill-container animate__animated animate__backInLeft"
          onMouseEnter={() => setHoveredTech("React")}
          onMouseLeave={() => setHoveredTech("")}
        >
          {hoveredTech === "React" ? (
            <span className="tech-text">React</span>
          ) : (
            <DiReact className="tech-icon" title="React" />
          )}
        </div>
        <div
          className="skill-container animate__animated animate__backInLeft"
          onMouseEnter={() => setHoveredTech("Css3")}
          onMouseLeave={() => setHoveredTech("")}
        >
          {hoveredTech === "Css3" ? (
            <span className="tech-text">Css3</span>
          ) : (
            <DiCss3 className="tech-icon" title="Css3" />
          )}
        </div>
        <div
          className="skill-container animate__animated animate__backInLeft"
          onMouseEnter={() => setHoveredTech("express.js")}
          onMouseLeave={() => setHoveredTech("")}
        >
          {hoveredTech === "express.js" ? (
            <span className="tech-text">express.js</span>
          ) : (
            <SiExpress className="tech-icon" title="express.js" />
          )}
        </div>
        <div
          className="skill-container animate__animated animate__backInLeft"
          onMouseEnter={() => setHoveredTech("Handlebars.js")}
          onMouseLeave={() => setHoveredTech("")}
        >
          {hoveredTech === "Handlebars.js" ? (
            <span className="tech-text">Handlebars.js</span>
          ) : (
            <SiHandlebarsdotjs className="tech-icon" title="Handlebars.js" />
          )}
        </div>
        <div
          className="skill-container animate__animated animate__backInLeft"
          onMouseEnter={() => setHoveredTech("Webpack")}
          onMouseLeave={() => setHoveredTech("")}
        >
          {hoveredTech === "Webpack" ? (
            <span className="tech-text">Webpack</span>
          ) : (
            <SiWebpack className="tech-icon" title="Webpack" />
          )}
        </div>
        <div
          className="skill-container animate__animated animate__backInLeft"
          onMouseEnter={() => setHoveredTech("Aws")}
          onMouseLeave={() => setHoveredTech("")}
        >
          {hoveredTech === "Aws" ? (
            <span className="tech-text">Amazon Web Services</span>
          ) : (
            <FaAws className="tech-icon" title="Aws" />
          )}
        </div>
      </div>
      <h1 className="skills-section-title animate__animated animate__fadeInLeft">
        TOOLS I USE :
      </h1>
      <div className="skills-container">
        <div
          className="skill-container animate__animated animate__backInLeft"
          onMouseEnter={() => setHoveredTech("Windows")}
          onMouseLeave={() => setHoveredTech("")}
        >
          {hoveredTech === "Windows" ? (
            <span className="tech-text">Windows OS</span>
          ) : (
            <FaWindows className="tech-icon" title="Windows" />
          )}
        </div>
        <div
          className="skill-container animate__animated animate__backInLeft"
          onMouseEnter={() => setHoveredTech("Git")}
          onMouseLeave={() => setHoveredTech("")}
        >
          {hoveredTech === "Git" ? (
            <span className="tech-text">Git</span>
          ) : (
            <DiGit className="tech-icon" title="Git" />
          )}
        </div>
        <div
          className="skill-container animate__animated animate__backInLeft"
          onMouseEnter={() => setHoveredTech("Vscode")}
          onMouseLeave={() => setHoveredTech("")}
        >
          {hoveredTech === "Vscode" ? (
            <span className="tech-text">Vscode</span>
          ) : (
            <TbBrandVscode className="tech-icon" title="Vscode" />
          )}
        </div>
        <div
          className="skill-container animate__animated animate__backInLeft"
          onMouseEnter={() => setHoveredTech("Slack")}
          onMouseLeave={() => setHoveredTech("")}
        >
          {hoveredTech === "Slack" ? (
            <span className="tech-text">Slack</span>
          ) : (
            <FaSlack className="tech-icon" title="Slack" />
          )}
        </div>
        <div
          className="skill-container animate__animated animate__backInLeft"
          onMouseEnter={() => setHoveredTech("Github")}
          onMouseLeave={() => setHoveredTech("")}
        >
          {hoveredTech === "Github" ? (
            <span className="tech-text">Github</span>
          ) : (
            <FaGithub className="tech-icon" title="Github" />
          )}
        </div>
        <div
          className="skill-container animate__animated animate__backInLeft"
          onMouseEnter={() => setHoveredTech("Discord")}
          onMouseLeave={() => setHoveredTech("")}
        >
          {hoveredTech === "Discord" ? (
            <span className="tech-text">Discord</span>
          ) : (
            <FaDiscord className="tech-icon" title="Discord" />
          )}
        </div>
      </div>
      <h1 className="skills-section-title animate__animated animate__fadeInLeft">
        EDUCATION <IoIosArrowDown />{" "}
      </h1>
      <div className="education animate__animated animate__fadeInUp">
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
