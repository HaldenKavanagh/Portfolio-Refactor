import React from "react";
import { useNavigate } from "react-router-dom";
import MenYou from "../videos/MenYou.mp4";

export default function NativeDemo() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="homePage">
      <button className="submit-btn" onClick={handleBack}>
        Back
      </button>
      <div>
        <video controls>
          <source src={MenYou} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
