import React from "react";
import profilePic from "../assets/profile.jpg"; 

const About = () => (
  <div className="about-container">
    <div className="profile-container">
      <img src={profilePic} alt="Eric Cordoba" className="profile-picture" />
    </div>
    
    <div className="about-text-container">
      <h1>The Developer Behind the Code</h1>
      <p>
        Hello! I'm <strong>Eric Cordoba</strong>, a passionate and driven software developer who thrives 
        on solving complex problems with elegant, scalable solutions.
      </p>
      <p>
        With a background in full-stack web development, I specialize in 
        <strong> React, Node.js, MongoDB, and Express</strong> to build dynamic, responsive 
        applications that deliver seamless user experiences.
      </p>
      <p>
        Beyond coding, I love staying on top of the latest tech trends, continuously 
        learning new technologies, and collaborating with like-minded individuals 
        to create impactful projects.
      </p>
      <p>
        Whether it's a startup idea, a business tool, or a side project, I'm always 
        eager to take on challenges and bring ideas to life through code.
      </p>
    </div>
  </div>
);

export default About;
