import "../styles/Main.css";

import DUcert from "../images/du-cert.png";

export default function Certificate() {
  const handleBack = () => {
    window.location.href = "/about";
  };

  return (
    <div className="homePage">
      <button className="submit-btn" onClick={handleBack}>
        Back
      </button>
      <img className="cert-image" src={DUcert}></img>
    </div>
  );
}
