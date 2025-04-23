import React from "react";
import { FaArrowDown } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="hero-section text-center text-white">
      <div className="container">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-xl mb-4">I am a passionate web developer and data scientist.</p>
        <button className="btn">
          <FaArrowDown className="mr-2" />
          Scroll Down
        </button>
      </div>
    </section>
  );
};

export default Hero;
