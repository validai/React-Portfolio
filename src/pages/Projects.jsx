import React from "react";

const Projects = () => (
  <div className="page scrollable">
    <div className="page-content">
      <h1>My Projects</h1>
      <p>Explore some of the innovative projects I've built and contributed to:</p>
      <div className="projects-grid">
        <div className="project-item left">
          <h2>Flare48</h2>
          <p>A custom news aggregator focusing on the latest 48-hour news updates.</p>
          <div className="project-image">[Image Placeholder]</div>
        </div>
        <div className="project-item right">
          <h2>SkillStarter</h2>
          <p>A comprehensive portfolio platform for developers.</p>
          <div className="project-image">[Image Placeholder]</div>
        </div>
        <div className="project-item left">
          <h2>Task Manager App</h2>
          <p>A productivity tool to track and organize tasks effectively.</p>
          <div className="project-image">[Image Placeholder]</div>
        </div>
        <div className="project-item right">
          <h2>E-Commerce Platform</h2>
          <p>A full-stack shopping experience with secure payments.</p>
          <div className="project-image">[Image Placeholder]</div>
        </div>
        <div className="project-item left">
          <h2>Weather Dashboard</h2>
          <p>A real-time weather update application.</p>
          <div className="project-image">[Image Placeholder]</div>
        </div>
        <div className="project-item right">
          <h2>Chat App</h2>
          <p>A messaging application with authentication and live updates.</p>
          <div className="project-image">[Image Placeholder]</div>
        </div>
      </div>
    </div>
  </div>
);

export default Projects;