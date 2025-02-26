import React from "react";
import { Link } from "react-router-dom";
import "..sytyles/global.css"; // Ensure this file exists

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li className="nav-item name">Eric Cordoba</li>
        <li><Link to="/about" className="nav-item">About Me</Link></li>
        <li><Link to="/portfolio" className="nav-item">Portfolio</Link></li>
        <li><Link to="/resume" className="nav-item">Resume</Link></li>
        <li><Link to="/contact" className="nav-item">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
