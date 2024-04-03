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
import { SiExpress, SiHandlebarsdotjs, SiWebpack, SiApollographql } from "react-icons/si";
import { FaAws, FaWindows, FaSlack, FaGithub, FaDiscord } from "react-icons/fa";
import { TbBrandVscode, TbBrandReactNative } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
import { GrCertificate, GrGraphQl } from "react-icons/gr";
import { LuBadgeCheck } from "react-icons/lu";

import DUbadge from "../images/du-badge.png";

const techData = [
  { name: "Node.js", icon: DiNodejsSmall },
  { name: "Jquery", icon: DiJqueryLogo },
  { name: "Mysql", icon: DiMysql },
  { name: "Mongodb", icon: DiMongodb },
  { name: "JavaScript ES6+", icon: DiJsBadge },
  { name: "Html5", icon: DiHtml5 },
  { name: "Heroku", icon: DiHeroku },
  { name: "Bootstrap", icon: DiBootstrap },
  { name: "React", icon: DiReact },
  { name: "React Native", icon: TbBrandReactNative },
  { name: "Css3", icon: DiCss3 },
  { name: "express.js", icon: SiExpress },
  { name: "Handlebars.js", icon: SiHandlebarsdotjs },
  { name: "Webpack", icon: SiWebpack },
  { name: "GraphQl", icon: GrGraphQl },
  { name: "Apollo GraphQl", icon: SiApollographql },
  { name: "Amazon Web Services", icon: FaAws },
];

const toolsData = [
  { name: "Windows OS", icon: FaWindows },
  { name: "Git", icon: DiGit },
  { name: "Vscode", icon: TbBrandVscode },
  { name: "Slack", icon: FaSlack },
  { name: "Github", icon: FaGithub },
  { name: "Discord", icon: FaDiscord },
];

export default function About() {
  const navigate = useNavigate();
  const [hoveredTech, setHoveredTech] = useState("");

  const handleCertificateClick = () => {
    navigate("/certificate");
  };

  const handleBadgeClick = () => {
    window.open(
      "https://www.credly.com/badges/3d2f16be-a807-4992-be69-bae0bd6aa68c/public_url",
      "_blank"
    );
  };

  const renderTechIcons = (data) => {
    return data.map((item, index) => (
      <div
        key={index}
        className="skill-container animate__animated animate__backInLeft"
        onMouseEnter={() => setHoveredTech(item.name)}
        onMouseLeave={() => setHoveredTech("")}
      >
        {hoveredTech === item.name ? (
          <span className="tech-text">{item.name}</span>
        ) : (
          React.createElement(item.icon, {
            className: "tech-icon",
            title: item.name,
          })
        )}
      </div>
    ));
  };

  return (
    <div className="about">
      <h1 className="skills-section-title animate__animated animate__fadeInLeft">
        SKILLSET :
      </h1>
      <div className="skills-container">{renderTechIcons(techData)}</div>
      <h1 className="skills-section-title animate__animated animate__fadeInLeft">
        TOOLS I USE :
      </h1>
      <div className="skills-container">{renderTechIcons(toolsData)}</div>
      <h1 className="skills-section-title animate__animated animate__fadeInLeft">
        EDUCATION <IoIosArrowDown />{" "}
      </h1>
      <div className="education animate__animated animate__fadeInUp">
        <div className="badge-section">
          <img className="about-image" src={DUbadge} alt="DU Badge" />
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
