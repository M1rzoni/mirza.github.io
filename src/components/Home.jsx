import React from "react";
import "./style/Home.css";
import photo from "../icons/own.jpg";

function Home() {
  return (
    <div id="home" className="home-container">
      <div className="home-content-container">
        <h1>
          Hello, <br /> my name is <span className="name">Mirza Šabanović</span>
        </h1>
        <p>I'm a Full-Stack developer from Bosnia 👋</p>
        <a href={require("../files/CV.pdf")} download="MirzaCV">
          <button className="button-6">Dowload CV</button>
        </a>
      </div>
      <div className="icon-container">
        <img alt="myPhoto" src={photo}></img>
      </div>
    </div>
  );
}

export default Home;
