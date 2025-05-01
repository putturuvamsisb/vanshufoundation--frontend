import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Media.css";
// Footer is already included in App.js, so we remove it here
// import Footer from "../components/Footer";

import media1 from "../assets/media1.jpeg"; 
import media2 from "../assets/media2.jpg";   
import media3 from "../assets/media3.avif";  
import media4 from "../assets/media4.avif";  
import media5 from "../assets/media5.jpg";   
import media6 from "../assets/media6.jpg";   

const Media = () => {
  const navigate = useNavigate();

  const handleDonateClick = () => {
    navigate("/donate");
  };

  return (
    <>
      <div className="media-page">
        <section className="media-videos">
          <h2>Videos That Inspire</h2>
          <div className="video-grid">
            <iframe
              src="https://www.youtube.com/embed/9eYJozzcmxk"
              title="Inspiration 1"
              allowFullScreen
            ></iframe>
            <iframe
              src="https://www.youtube.com/embed/rnqKTJAg8bg"
              title="Inspiration 2"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        <section className="media-gallery">
          <h2>Image Gallery</h2>
          <div className="image-grid">
            <img src={media1} alt="Volunteers teaching children" />
            <img src={media2} alt="Medical camp support" />
            <img src={media3} alt="Food distribution drive" />
            <img src={media4} alt="Women empowerment workshop" />
            <img src={media5} alt="Child getting school supplies" />
            <img src={media6} alt="Community celebration" />
          </div>
        </section>

        <section className="media-cta">
          <h2>You Can Be the Change</h2>
          <p>
            Every image and every video tells a story of hope. Join our mission and help us create many more.
          </p>
          <button className="donate-now" onClick={handleDonateClick}>
            Donate Now
          </button>
        </section>
      </div>
      
      {/* Footer is already included in App.js, so we remove it here */}
    </>
  );
};

export default Media;