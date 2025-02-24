import React from "react";
import "../styles/global.css"; // Ensure global styles are applied

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>© {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
        <div className="footer-links">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:your-email@example.com">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
