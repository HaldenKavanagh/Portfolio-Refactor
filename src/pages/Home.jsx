import "../styles/Home.css";
import "../styles/Main.css";
import "animate.css";
import { useNavigate } from "react-router-dom";

import React, { useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";

import { AiOutlineAudit } from "react-icons/ai";

import pfp from "../images/pfp.png";

export default function Home() {
  const navigate = useNavigate();

  const handleResumeClick = () => {
    navigate("/resume");
  };
  return (
    <div className="homePage">
      <div className="intro">
        <div className="homeText">
          <h2 className="hello">Hello,</h2>
          <h2 className="myNameIs">
            My name is <span className="halden">Halden Kavanagh</span>{" "}
          </h2>
          <h3 className="webdev">Full stack web dev</h3>
        </div>
        <img className="pfp " src={pfp} alt="profile Picture" />
      </div>
      <div className="about-me">
        <h1 className="about-section-title  animate__animated animate__fadeIn">
          ABOUT ME <IoIosArrowDown />
        </h1>
        <p className="about-p animate__animated animate__fadeInUp">
          Hi, I'm Halden, a Full Stack Web Developer based in Boulder, Colorado.
          <br />
          <br />
          My coding journey started at the University of Denver coding bootcamp,
          igniting a passion for web development. I found that I really enjoy
          the problem solving aspect of programming. Seeing my work improve
          alongside my skillset is extremely gratifying.
          <br />
          <br />
          Outside of coding, you'll find me exploring Boulder's outdoors through
          hikes, enjoying video games, building computers, and cooking. My diverse interests fuel my
          creativity both in code and in life.
          <button onClick={handleResumeClick} className="submit-btn">
            View Resume
            <AiOutlineAudit />
          </button>
        </p>
      </div>
    </div>
  );
}
