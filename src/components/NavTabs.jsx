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

function NavTabs() {
  const location = useLocation();

  const getPageName = (pathname) => {
    // Extract the last part of the pathname as the page name
    const pageName = pathname.substring(1);
    return pageName === "" ? "Home" : pageName;
  };

  return (
    <div className="navbar">
      <NavLink to="/home" className="nav-link">
        <AiOutlineHome />
        <span className="nav-text">Home</span>
      </NavLink>
      <NavLink to="/about" className="nav-link">
        <AiOutlineUser />
        <span className="nav-text">About</span>
      </NavLink>
      <NavLink to="/projects" className="nav-link">
        <AiOutlineFundProjectionScreen />
        <span className="nav-text">Projects</span>
      </NavLink>
      <NavLink to="/resume" className="nav-link">
        <AiOutlineAudit />
        <span className="nav-text">Resume</span>
      </NavLink>
      <NavLink to="/contact" className="nav-link">
        <AiOutlineRocket />
        <span className="nav-text">Contact</span>
      </NavLink>
    </div>
  );
}

export default NavTabs;
