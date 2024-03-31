import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "../styles/NavTabs.css";
import {
  AiOutlineRocket,
  AiOutlineAudit,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

import "animate.css";

function NavTabs() {
  return (
    <div className="navbar ">
      <NavLink
        to="/home"
        className="nav-link animate__animated animate__backInLeft"
      >
        <AiOutlineHome />
        <span className="nav-text">Home</span>
      </NavLink>
      <NavLink to="/about" className="nav-link animate__animated animate__backInLeft">
        <AiOutlineUser />
        <span className="nav-text">About</span>
      </NavLink>
      <NavLink to="/projects" className="nav-link animate__animated animate__backInLeft">
        <AiOutlineFundProjectionScreen />
        <span className="nav-text">Projects</span>
      </NavLink>
      <NavLink to="/resume" className="nav-link animate__animated animate__backInLeft">
        <AiOutlineAudit />
        <span className="nav-text">Resume</span>
      </NavLink>
      <NavLink to="/contact" className="nav-link animate__animated animate__backInLeft">
        <AiOutlineRocket />
        <span className="nav-text">Contact</span>
      </NavLink>
    </div>
  );
}

export default NavTabs;
