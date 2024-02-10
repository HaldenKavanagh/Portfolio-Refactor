import "../styles/NavTabs.css";

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div className="navbar">
      <a
        href="#home"
        onClick={() => handlePageChange("Home")}
        className={currentPage === "Home" ? "nav-link active" : "nav-link"}
      >
        Home
      </a>
      <a
        href="#about"
        onClick={() => handlePageChange("About")}
        className={currentPage === "About" ? "nav-link active" : "nav-link"}
      >
        About
      </a>
      <a
        href="#projects"
        onClick={() => handlePageChange("Projects")}
        className={currentPage === "Projects" ? "nav-link active" : "nav-link"}
      >
        Projects
      </a>
      <a
        href="#resume"
        onClick={() => handlePageChange("Resume")}
        className={currentPage === "Resume" ? "nav-link active" : "nav-link"}
      >
        Resume
      </a>
      <a
        href="#contact"
        onClick={() => handlePageChange("Contact")}
        className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
      >
        Contact
      </a>
    </div>
  );
}

export default NavTabs;
