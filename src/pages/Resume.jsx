import "../styles/Main.css";

export default function Resume() {
  const googleDocURL =
    "https://docs.google.com/document/d/1CcxU9Eblq3bGeOXYhNAtXQi-Bi3iW77OG46Ibx0SQ-U/preview";
  const downloadURL =
    "https://docs.google.com/document/d/1CcxU9Eblq3bGeOXYhNAtXQi-Bi3iW77OG46Ibx0SQ-U/export?format=pdf";
  return (
    <div className="resume">
      <div className="resume-container">
        <iframe className="resume-prev animate__animated animate__fadeIn" src={googleDocURL}></iframe>
        <a
          className="resume-a"
          href={downloadURL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Click here to download my Resume
        </a>
      </div>
    </div>
  );
}
