import React from "react";
import "./About.css";
import anuradhaIMAGE from "./assets/anuradhaIMAGE.jpeg";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="overlay"></div>
      <div className="about-container">
        <div className="about-image">
          <img src={anuradhaIMAGE} alt="Anuradha" className="profile-photo" />
        </div>
        <div className="about-content">
          <h2>About Me</h2>
          <p>
            Software Development Engineer (Backend) with expertise in backend architecture, and database management. Currently a third-year Computer Engineering student with hands-on experience in AI systems, full-stack applications, and a strong foundation in system design.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
