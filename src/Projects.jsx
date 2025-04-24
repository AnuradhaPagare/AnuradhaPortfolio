import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <section className="projects-section">
      <div className="container text-center">
        <h2 className="section-title">Projects</h2>

        {/* Web Development Section */}
        <h3 className="subsection-title">Web Development Projects</h3>
        <div className="projects-container">
          <div className="project-card">Hospital Appointment Booking System</div>
          <div className="project-card">Blood Donation Management System</div>
          <div className="project-card">SkillMaster – AI-Powered Skill Assessment & Recommendation Platform</div>
          <div className="project-card">Personal Portfolio Website</div>
        </div>

        {/* Data Science Section */}
        <h3 className="subsection-title">Data Science Projects</h3>
        <div className="projects-container">
          <div className="project-card">Customer Churn Prediction</div>
          <div className="project-card">Statistical Analysis of Turn Around Time (TAT) in Hospitals</div>
          <div className="project-card">Sentiment Analysis on Product Reviews</div>
          <div className="project-card">PCA and Clustering Analysis for Segregating Patients in Heart Disease Treatment Study</div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
