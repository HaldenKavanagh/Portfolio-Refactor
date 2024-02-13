import "../styles/footer.css";
import gitHubLogo from "../images/gitHubLogo.png";
import indeedLogo from "../images/indeedLogo.png";
import linkedInLogo from "../images/linkedInLogo.png";

function Footer({ currentPage, handlePageChange }) {
  return (
    <div className="footer">
     <a href="https://github.com/HaldenKavanagh"
            ><img
              className="contact-img"
              src={gitHubLogo}
              alt="github logo"
          /></a>
          
          <a href="#"
            ><img
              className="contact-img"
              src={indeedLogo}
              alt="linkedin logo"
          /></a>
          <a href="#"
            ><img
              className="contact-img"
              src={linkedInLogo}
              alt="indeed logo"
          /></a>
    </div>
  );
}

export default Footer;
