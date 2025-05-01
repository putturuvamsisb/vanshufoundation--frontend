import React from "react";
import "../styles/Home.css";
import bgImage from "../assets/home-bg.png"; // background image

function Home() {
  return (
    <div
      className="home-container"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="overlay">
        <div className="home-content">
          <h1 className="fadeInUp">Vanshu Foundation</h1>
          <p className="fadeInDown">Empowering Lives, Spreading Hope</p>
          <div className="home-buttons">
            <a href="/donate" className="btn-donate">
              Donate Now
            </a>
            <a href="/getinvolved" className="btn-join">
              Get Involved
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
