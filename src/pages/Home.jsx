import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="page">
      <div className="page-content">
        <h1>Turning Concepts into Reality</h1>
        <p>Imagine being able to connect with the perfect web developer—one who understands your vision, listens to your ideas, and brings them to life with precision and creativity.</p>
        <p><strong>I am Eric, a Junior Web Developer</strong> passionate about building <strong>innovative digital experiences</strong> that blend functionality with aesthetics. I leverage cutting-edge technologies to craft efficient, user-friendly solutions that solve real-world challenges.</p>
        <p>With a strong focus on <strong>modern development practices</strong>, I continuously refine my skills to stay ahead in the ever-evolving tech landscape. My goal is to design and develop digital solutions that leave a lasting impact.</p>
        <p><strong>Because every day, we have a chance to make a difference</strong>—it just takes that first step to change the future.</p>
        <button className="project-btn" onClick={() => navigate("/projects")}>
          Discover My Portfolio
        </button>
      </div>
    </div>
  );
};

export default Home;
