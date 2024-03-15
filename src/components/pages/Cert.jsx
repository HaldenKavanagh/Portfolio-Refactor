import "../../styles/Home.css";
import "../../styles/Main.css";

import DUcert from "../../images/du-cert.png";

export default function Cert() {
  const handleBack = () => {

    window.location.href = "/about";
  };

  return (
    <div className="cert">
      <button className="submit-btn" onClick={handleBack}>
        Back
      </button>
      <img className="cert-image" src={DUcert}></img>
    </div>
  );
}
