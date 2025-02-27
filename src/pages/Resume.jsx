import React from "react";

const Resume = () => (
  <div className="page">
    <div className="page-content resume-container">
      <h1>My Resume</h1>
      <p className="resume-description">
        Download my resume below to learn more about my experience and skills.
      </p>

      {/* Resume Download Button */}
      <a href="/Eric_Cordoba_Resume.pdf" download className="resume-btn">
        Download Resume
      </a>

      <h2>Technical Proficiencies</h2>
      <ul className="tech-list">
        <li>Frontend: React, Vite, JavaScript (ES6+), CSS (Responsive Design)</li>
        <li>Backend: Node.js, Express.js, PostgreSQL, MongoDB</li>
        <li>APIs: RESTful APIs, Fetch/Axios, Third-party API Integration</li>
        <li>Authentication: JWT, OAuth, Google Auth</li>
        <li>Version Control: Git, GitHub, GitHub Actions</li>
        <li>Deployment: Render, Netlify</li>
        <li>Dev Tools: Postman, DBeaver, VS Code</li>
        <li>Project Management: Agile, Scrum, Trello, Jira</li>
      </ul>
    </div>
  </div>
);

export default Resume;
