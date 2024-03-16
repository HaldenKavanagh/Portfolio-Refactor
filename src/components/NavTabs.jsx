import { Link, useLocation } from "react-router-dom";
import "../styles/NavTabs.css";
import {
  AiOutlineRocket,
  AiOutlineAudit,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

import { GrCertificate } from "react-icons/gr";

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
        <AiOutlineHome /> Home
      </Link>
      <Link
        to="/about"
        className={
          getPageName(location.pathname) === "About"
            ? "nav-link active"
            : "nav-link"
        }
      >
        <AiOutlineUser /> About
      </Link>
      <Link
        to="/projects"
        className={
          getPageName(location.pathname) === "Projects"
            ? "nav-link active"
            : "nav-link"
        }
      >
        <AiOutlineFundProjectionScreen /> Projects
      </Link>
      <Link
        to="/resume"
        className={
          getPageName(location.pathname) === "Resume"
            ? "nav-link active"
            : "nav-link"
        }
      >
        <AiOutlineAudit /> Resume
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
        Contact
      </Link>
      <Link
        to="/certificate"
        className={
          getPageName(location.pathname) === "Certificate"
            ? "nav-link active"
            : "nav-link"
        }
      >
        <GrCertificate />
      </Link>
    </div>
  );
}

export default NavTabs;
