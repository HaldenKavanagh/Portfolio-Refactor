import React from "react";
import { useNavigate } from "react-router-dom";
import DUcert from "../images/du-cert.png";

export default function Certificate() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="homePage">
      <button className="submit-btn" onClick={handleBack}>
        Back
      </button>
      <img className="cert-image" src={DUcert} alt="DU Certificate"></img>
    </div>
  );
}
