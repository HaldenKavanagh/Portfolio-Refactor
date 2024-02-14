import { Link, useLocation } from "react-router-dom";
import "../styles/NavTabs.css";

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
        Home
      </Link>
      <Link
        to="/About"
        className={
          getPageName(location.pathname) === "About"
            ? "nav-link active"
            : "nav-link"
        }
      >
        About
      </Link>
      <Link
        to="/Projects"
        className={
          getPageName(location.pathname) === "Projects"
            ? "nav-link active"
            : "nav-link"
        }
      >
        Projects
      </Link>
      <Link
        to="/Resume"
        className={
          getPageName(location.pathname) === "Resume"
            ? "nav-link active"
            : "nav-link"
        }
      >
        Resume
      </Link>
      <Link
        to="/Contact"
        className={
          getPageName(location.pathname) === "Contact"
            ? "nav-link active"
            : "nav-link"
        }
      >
        Contact
      </Link>
    </div>
  );
}

export default NavTabs;
