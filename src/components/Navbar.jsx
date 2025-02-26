import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Assuming you have a CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><Link to="/" className="nav-item">Eric Cordoba</Link></li>
        <li><Link to="/about" className="nav-item">About Me</Link></li>
        <li><Link to="/portfolio" className="nav-item">Portfolio</Link></li>
        <li><Link to="/resume" className="nav-item">Resume</Link></li>
        <li><Link to="/contact" className="nav-item">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
