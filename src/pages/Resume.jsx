import React from "react";

const Resume = () => (
  <div className="page">
    <div className="page-content">
      <h1>My Resume</h1>
      <p>Download my resume below to learn more about my experience and skills.</p>
      <a href="/assets/resume.pdf" download className="resume-btn">Download Resume</a>
      <h2>Technical Proficiencies</h2>
      <ul>
        <li>Frontend: React, Vite, CSS (Responsive Design)</li>
        <li>Backend: Node.js, Express.js, PostgreSQL</li>
        <li>Additional Tools: Cloudinary, SendGrid, JWT Authentication</li>
      </ul>
    </div>
  </div>
);

export default Resume;

