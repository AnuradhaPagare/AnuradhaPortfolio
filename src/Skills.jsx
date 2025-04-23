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
            <div className="skill-card">React</div>
            <div className="skill-card">Bootstrap</div>
            <div className="skill-card">Tailwind CSS</div>
          </div>
        </div>

        {/* Data Science Section */}
        <div className="skills-category">
          <h3 className="category-title">Data Science</h3>
          <div className="skills-grid">
            <div className="skill-card">Python</div>
            <div className="skill-card">Pandas</div>
            <div className="skill-card">NumPy</div>
            <div className="skill-card">Matplotlib</div>
            <div className="skill-card">Scikit-learn</div>
            <div className="skill-card">SQL</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
