import "../../styles/Projects.css";

import candleImg from "../../images/candles.png";
import textEditerImg from "../../images/textEditer.png";
import menYouImg from "../../images/menYou.png";
import weatherImg from "../../images/weather.png";
import plannerImg from "../../images/planner.png";
import quizImg from "../../images/quiz.png";

export default function Projects() {
  return (
    <div className="projects">
      <div className="container">
        <div className="wrapper">
          <img className="banner-image" src={candleImg}></img>
          <h1> Star Ray design V1</h1>
          <p>
            Lorem ipsum dolor sit amet, <br />
            consectetur adipiscing elit.
          </p>
        </div>
        <div className="button-wrapper">
          <button className="btn fill">View Github Repo</button>
          <button className="btn fill">Visit site</button>
        </div>
      </div>
      <div className="container">
        <div className="wrapper">
          <img className="banner-image" src={textEditerImg}></img>
          <h1> PWA text editor</h1>
          <p>
            Lorem ipsum dolor sit amet, <br />
            consectetur adipiscing elit.
          </p>
        </div>
        <div className="button-wrapper">
          <button className="btn fill">View Github Repo</button>
          <button className="btn fill">Visit site</button>
        </div>
      </div>
      <div className="container">
        <div className="wrapper">
          <img className="banner-image" src={menYouImg}></img>
          <h1> menYou</h1>
          <p>
            Lorem ipsum dolor sit amet, <br />
            consectetur adipiscing elit.
          </p>
        </div>
        <div className="button-wrapper">
          <button className="btn fill">View Github Repo</button>
          <button className="btn fill">Visit site</button>
        </div>
      </div>
      <div className="container">
        <div className="wrapper">
          <img className="banner-image" src={weatherImg}></img>
          <h1> Weather dashboard</h1>
          <p>
            Lorem ipsum dolor sit amet, <br />
            consectetur adipiscing elit.
          </p>
        </div>
        <div className="button-wrapper">
          <button className="btn fill">View Github Repo</button>
          <button className="btn fill">Visit site</button>
        </div>
      </div>
      <div className="container">
        <div className="wrapper">
          <img className="banner-image" src={plannerImg}></img>
          <h1> Workday Planner</h1>
          <p>
            Lorem ipsum dolor sit amet, <br />
            consectetur adipiscing elit.
          </p>
        </div>
        <div className="button-wrapper">
          <button className="btn fill">View Github Repo</button>
          <button className="btn fill">Visit site</button>
        </div>
      </div>
      <div className="container">
        <div className="wrapper">
          <img className="banner-image" src={quizImg}></img>
          <h1>Js Quiz</h1>
          <p>
            Lorem ipsum dolor sit amet, <br />
            consectetur adipiscing elit.
          </p>
        </div>
        <div className="button-wrapper">
          <button className="btn fill">View Github Repo</button>
          <button className="btn fill">Visit site</button>
        </div>
      </div>
    </div>
  );
}
