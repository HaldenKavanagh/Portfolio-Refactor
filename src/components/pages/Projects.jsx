import "../../styles/Projects.css";

import candleImg from "../../images/candles.png";
import textEditerImg from "../../images/TextEditer.png";
import menYouImg from "../../images/menYou.png";
import weatherImg from "../../images/weather.png";
import plannerImg from "../../images/planner.png";
import quizImg from "../../images/quiz.png";
import starrray from "../../images/starrray.png";

export default function Projects() {
  return (
    <div className="projects">
      <div className="container">
        <div className="wrapper">
          <img className="banner-image" src={starrray}></img>
          <h1 className="project-title">Star Ray design V2</h1>
          <p className="project-description">
            Full stack E-commerce site designed for a local botique shop. Uses
            full MERN tech stack.
          </p>
        </div>
        <div className="button-wrapper">
          <a
            href="https://github.com/laurabacon/Star-Ray"
            target="_blank"
            className="btn fill"
          >
            View Github Repo
          </a>
          <a
            href="https://lit-eyrie-12834-5b6e0706190e.herokuapp.com/"
            target="_blank"
            className="btn fill"
          >
            Visit site
          </a>
        </div>
      </div>
      <div className="container">
        <div className="wrapper">
          <img className="banner-image" src={menYouImg}></img>
          <h1 className="project-title"> menYou</h1>
          <p className="project-description">
            Date night planner, utilizes multiple third party API's to plan your
            next date night!
          </p>
        </div>
        <div className="button-wrapper">
          <a
            href="https://github.com/scook9/menYou"
            target="_blank"
            className="btn fill"
          >
            View Github Repo
          </a>
          <a
            href="https://scook9.github.io/menYou/"
            target="_blank"
            className="btn fill"
          >
            Visit site
          </a>
        </div>
      </div>
      <div className="container">
        <div className="wrapper">
          <img className="banner-image" src={candleImg}></img>
          <h1 className="project-title"> Star Ray design V1</h1>
          <p className="project-description">
            Full stack E-commerce site designed for a local botique shop.
            Utilizes a SQL database with handlebars.
          </p>
        </div>
        <div className="button-wrapper">
          <a
            href="https://github.com/scook9/candles-n-things"
            target="_blank"
            className="btn fill"
          >
            View Github Repo
          </a>
          <a
            href="https://shielded-gorge-64229-3114d756159e.herokuapp.com/"
            target="_blank"
            className="btn fill"
          >
            Visit site
          </a>
        </div>
      </div>
      <div className="container">
        <div className="wrapper">
          <img className="banner-image" src={textEditerImg}></img>
          <h1 className="project-title"> PWA text editor</h1>
          <p className="project-description">
            Progressive Web Application Text editor, can be downloaded and used
            offline. Built with Webpack.
          </p>
        </div>
        <div className="button-wrapper">
          <a
            href="https://github.com/HaldenKavanagh/text-editer"
            target="_blank"
            className="btn fill"
          >
            View Github Repo
          </a>
          <a
            href="https://jate-pwa-text-editor-kavanagh-9dd90f6a05dd.herokuapp.com/"
            target="_blank"
            className="btn fill"
          >
            Visit site
          </a>
        </div>
      </div>
      <div className="container">
        <div className="wrapper">
          <img className="banner-image" src={weatherImg}></img>
          <h1 className="project-title"> Weather dashboard</h1>
          <p className="project-description">
            Dashboard to keep up with the weekly forecast in a location of your
            choice.
          </p>
        </div>
        <div className="button-wrapper">
          <a
            href="https://github.com/scook9/module-6-weather-dashboard"
            target="_blank"
            className="btn fill"
          >
            View Github Repo
          </a>
          <a
            href="https://scook9.github.io/module-6-weather-dashboard/"
            target="_blank"
            className="btn fill"
          >
            Visit site
          </a>
        </div>
      </div>
      <div className="container">
        <div className="wrapper">
          <img className="banner-image" src={plannerImg}></img>
          <h1 className="project-title"> Workday Planner</h1>
          <p className="project-description">
            Manage your time wisely with this workday planner wich allows you to
            add and delete notes for each hour of the day.
          </p>
        </div>
        <div className="button-wrapper">
          <a
            href="https://github.com/HaldenKavanagh/Workday-Planner"
            target="_blank"
            className="btn fill"
          >
            View Github Repo
          </a>
          <a
            href="https://haldenkavanagh.github.io/Workday-Planner/"
            target="_blank"
            className="btn fill"
          >
            Visit site
          </a>
        </div>
      </div>
    </div>
  );
}
