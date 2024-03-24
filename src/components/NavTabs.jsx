import React from "react";
import { Link, useLocation } from "react-router-dom";
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
      <Link
        to="/home"
        className={
          getPageName(location.pathname) === "Home"
            ? "nav-link active"
            : "nav-link"
        }
      >
        <AiOutlineHome />
        <span className="nav-text">Home</span>
      </Link>
      <Link
        to="/about"
        className={
          getPageName(location.pathname) === "About"
            ? "nav-link active"
            : "nav-link"
        }
      >
        <AiOutlineUser />
        <span className="nav-text">About</span>
      </Link>
      <Link
        to="/projects"
        className={
          getPageName(location.pathname) === "Projects"
            ? "nav-link active"
            : "nav-link"
        }
      >
        <AiOutlineFundProjectionScreen />
        <span className="nav-text">Projects</span>
      </Link>
      <Link
        to="/resume"
        className={
          getPageName(location.pathname) === "Resume"
            ? "nav-link active"
            : "nav-link"
        }
      >
        <AiOutlineAudit />
        <span className="nav-text">Resume</span>
      </Link>
      <Link
        to="/contact"
        className={
          getPageName(location.pathname) === "Contact"
            ? "nav-link active"
            : "nav-link"
        }
      >
        <AiOutlineRocket />
        <span className="nav-text">Contact</span>
      </Link>
    </div>
  );
}

export default NavTabs;
