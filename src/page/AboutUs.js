import React from "react";
import "../styles/AboutUs.css";
import aboutImg from "../assets/about-us.png";

function AboutUs() {
  return (
    <div className="aboutus-container">
      <div className="aboutus-header">
        <h1>About Vanshu Foundation</h1>
        <p>Spreading Hope, Changing Lives</p>
      </div>

      <div className="aboutus-content">
        <div className="aboutus-image">
          <img src={aboutImg} alt="Vanshu Foundation Impact" />
        </div>

        <div className="aboutus-text">
          <h2>Our Journey</h2>
          <p>
            Founded with a vision to uplift underprivileged communities, Vanshu
            Foundation has impacted thousands of lives through education,
            healthcare, and empowerment initiatives. What started as a small
            group of volunteers has grown into a full-fledged NGO with a strong
            mission to build a better tomorrow.
          </p>

          <h2>Our Mission</h2>
          <p>
            We aim to create a sustainable ecosystem of hope, dignity, and
            self-reliance for the less fortunate. Our core values are
            compassion, transparency, and relentless dedication toward social
            good.
          </p>

          <h2>Our Impact</h2>
          <p>
            With the support of generous donors and passionate volunteers, we've
            built schools, sponsored healthcare, supported women’s employment,
            and brought joy to children across regions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
