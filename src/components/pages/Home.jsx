import "../../styles/Home.css";
import "../../styles/Main.css";

import React, { useEffect } from "react";
import Granim from "granim";

import pfp from "../../images/pfp.png";

export default function Home() {
  // useEffect(() => {
  //   const granimInstance = new Granim({
  //     element: "#canvas-complex",
  //     direction: "left-right",
  //     isPausedWhenNotInView: true,
  //     states: {
  //       "default-state": {
  //         gradients: [
  //           [
  //             { color: "#f2e9e4", pos: 0.2 },
  //             { color: "#c9ada7", pos: 0.8 },
  //             { color: "#9a8c98", pos: 1 },
  //           ],
  //           [
  //             { color: "#4a4e69", pos: 0 },
  //             { color: "#22223b", pos: 0.2 },
  //             { color: "#22223b", pos: 0.75 },
  //           ],
  //           // Your gradient configurations here
  //         ],
  //       },
  //     },
  //   });
  // }, []);

  return (
    <div className="homePage">
      <div className="homeText">
        <h2 className="hello">Hello,</h2>
        <h2 className="myNameIs">
          My name is <span className="halden">Halden Kavanagh</span>{" "}
        </h2>
        <h3 className="webdev">Full stack web dev</h3>
      </div>
      <img className="pfp" src={pfp} alt="profile Picture" />
    </div>
  );
}
