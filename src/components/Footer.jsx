import "../styles/Footer.css";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiIndeed } from "react-icons/si";

function Footer({ currentPage, handlePageChange }) {
  return (
    <div className="footer">
      <a href="https://github.com/HaldenKavanagh" target="_blank">
        <FaGithub className="contact-img" />
      </a>

      <a href="#" target="_blank">
        <SiIndeed className="contact-img" />
      </a>
      <a href="https://www.linkedin.com/in/halden-kavanagh-79169b2b6/" target="_blank">
        <FaLinkedin className="contact-img" />
      </a>
    </div>
  );
}

export default Footer;
