import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate(); // Hook for smooth navigation

  return (
    <div className="page">
      <h1>Turning Concepts into Reality</h1>
      <p>I am Eric, a Junior Web Developer passionate about building innovative web applications. I leverage cutting-edge tools and technologies to create efficient, user-friendly solutions that solve real-world challenges.</p>
      <p>With a strong focus on modern development practices, I continuously enhance my skills to stay ahead in the ever-evolving tech landscape. My goal is to craft meaningful digital experiences that improve everyday life.</p>
      <p>Take a look at my projects, and feel free to reach out if you'd like to collaborate!</p>
      <button className="project-btn" onClick={() => navigate('/projects')}>Discover My Portfolio</button>
    </div>
  );
};
export default Home;