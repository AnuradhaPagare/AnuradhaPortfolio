import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <section className="skills-section">
      <div className="container text-center">
        <h2 className="section-title">Skills</h2>

        {/* Web Development Section */}
        <div className="skills-category">
          <h3 className="category-title">Web Development</h3>
          <div className="skills-grid">
            <div className="skill-card">HTML</div>
            <div className="skill-card">CSS</div>
            <div className="skill-card">JavaScript</div>
            <div className="skill-card">ReactJS</div>
            <div className="skill-card">Bootstrap</div>
            <div className="skill-card">Tailwind CSS</div>
            <div className="skill-card">MySQL</div>
            <div className="skill-card">PostgreSQL</div>
            <div className="skill-card">JDBS Servlet</div>
            <div className="skill-card">MongoDB</div>
            <div className="skill-card">NodeJS</div>
          </div>
        </div>

        {/* Data Science Section */}
        <div className="skills-category">
          <h3 className="category-title">Data Science</h3>
          <div className="skills-grid">
          <div className="skill-card">NumPy</div>
            <div className="skill-card">Pandas</div>
            <div className="skill-card">Matplotlib</div>
            <div className="skill-card">Seaborn</div>
            <div className="skill-card">Scikit-Learn</div>
            <div className="skill-card">TensorFlow</div>
            <div className="skill-card">NLTK (NLP Analysis)</div>
            <div className="skill-card">Data Science</div>
            <div className="skill-card">Data Visualization</div>
            <div className="skill-card">EDA (Exploratory Data Analysis)</div>
            <div className="skill-card">Data Preprocessing</div>
            <div className="skill-card">Statistics</div>
            <div className="skill-card">Reinforcement Learning</div>
            <div className="skill-card">Machine Learning</div>
            <div className="skill-card">Data-Driven Decision-Making</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
