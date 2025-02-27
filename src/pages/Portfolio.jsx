import React from "react";

const projects = [
  {
    title: "Flare48",
    description: "A custom news aggregator focusing on the latest 48-hour news updates.",
    image: "/flare48.jpg",
    liveDemo: "#",
    github: "#",
    position: "left",
  },
  {
    title: "Skill Starter",
    description: "A comprehensive portfolio platform for developers.",
    image: "/skillstarter.jpg",
    liveDemo: "#",
    github: "#",
    position: "right",
  },
  {
    title: "Audio Spot",
    description: "A blog for music lovers who want to share new music and experiences.",
    image: "/audiospotlogo.jpeg",
    liveDemo: "#",
    github: "#",
    position: "left",
  },
  {
    title: "Delivery Tracker",
    description: "A full-stack delivery tracking application.",
    image: "/delivery-tracker.jpeg",
    liveDemo: "#",
    github: "#",
    position: "right",
  },
  {
    title: "Weather Checker",
    description: "A real-time weather update application.",
    image: "/weather-checker.jpeg",
    liveDemo: "#",
    github: "#",
    position: "left",
  },
  {
    title: "Valid AI",
    description: "An art-based AI application.",
    image: "/VALID.jpg",
    liveDemo: "#",
    github: "#",
    position: "right",
  },
];

const Portfolio = () => {
  return (
    <div className="page scrollable">
      <div className="page-content portfolio-container">
        <h1>Recent Contributions</h1>
        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <div key={index} className={`portfolio-item ${project.position}`}>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className="portfolio-content">
                <img className="portfolio-image" src={project.image} alt={`${project.title} Project`} />
                <div className="portfolio-buttons">
                  <a className="portfolio-link-btn live-demo" href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                  <a className="portfolio-link-btn github" href={project.github} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
