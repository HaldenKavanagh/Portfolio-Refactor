import "../../styles/Home.css";
import "../../styles/Main.css";

import profilePicture from "../../images/candles.png";

export default function Home() {
  return (
    <div className="homePage">
      <div className="homeText">
        <h2>Hello,</h2>
        <h1>My name is Halden Kavanagh</h1>
        <h3>Full stack web dev</h3>
      </div>
      <img
        className="pfp"
        src="https://static.vecteezy.com/system/resources/thumbnails/004/511/281/small/default-avatar-photo-placeholder-profile-picture-vector.jpg"
        alt="profile Picture"
      />
      
    </div>
  );
}
