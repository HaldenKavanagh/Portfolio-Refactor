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
        to="/Home"
        className={
          getPageName(location.pathname) === "Home"
            ? "nav-link active"
            : "nav-link"
        }
      >
        <AiOutlineHome /> Home
      </Link>
      <Link
        to="/About"
        className={
          getPageName(location.pathname) === "About"
            ? "nav-link active"
            : "nav-link"
        }
      >
        <AiOutlineUser /> About
      </Link>
      <Link
        to="/Projects"
        className={
          getPageName(location.pathname) === "Projects"
            ? "nav-link active"
            : "nav-link"
        }
      >
        <AiOutlineFundProjectionScreen /> Projects
      </Link>
      <Link
        to="/Resume"
        className={
          getPageName(location.pathname) === "Resume"
            ? "nav-link active"
            : "nav-link"
        }
      >
        <AiOutlineAudit /> Resume
      </Link>
      <Link
        to="/Contact"
        className={
          getPageName(location.pathname) === "Contact"
            ? "nav-link active"
            : "nav-link"
        }
      >
        <AiOutlineRocket />
        Contact
      </Link>
    </div>
  );
}

export default NavTabs;
