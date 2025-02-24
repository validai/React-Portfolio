import React from "react";
import "../styles/global.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>© {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
        <div className="footer-links">
          <a href="https://github.com/validai" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/eric-cordoba-10090761/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:djcoast239@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
