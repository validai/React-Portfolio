import React from "react";
import { Link } from "react-router-dom";
import "../styles/global.css";
import background from "src/assets/IMG_1472.jpg";

const Navbar = () => {
  return (
    <header className="header" style={{ backgroundImage: "url('/assets/IMG_1472.jpg')" }}>
      <nav className="navbar">
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/resume">Resume</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};
export default Navbar;