import React from "react";

const Portfolio = () => {
  return (
    <div className="page scrollable">
      <div className="page-content portfolio-container">
        <h1>Recent Contributions</h1>
        <div className="portfolio-grid">

          {/* Flare48 */}
          <div className="portfolio-item left">
            <h2>Flare48</h2>
            <p>A custom news aggregator focusing on the latest 48-hour news updates.</p>
            <div className="portfolio-content">
              <img className="portfolio-image" src="/flare48.jpg" alt="Flare48 Project" />
              <a className="portfolio-link-btn" href="#" target="_blank">Live Demo</a>
            </div>
          </div>

          {/* Skill Starter */}
          <div className="portfolio-item right">
            <h2>Skill Starter</h2>
            <p>A comprehensive portfolio platform for developers.</p>
            <div className="portfolio-content">
              <img className="portfolio-image" src="/skillstarter.jpg" alt="Skill Starter Project" />
              <a className="portfolio-link-btn" href="#" target="_blank">Live Demo</a>
            </div>
          </div>

          {/* Audio Spot */}
          <div className="portfolio-item left">
            <h2>Audio Spot</h2>
            <p>A blog for music lovers who want to share new music and experiences.</p>
            <div className="portfolio-content">
              <img className="portfolio-image" src="/audiospotlogo.jpeg" alt="Audio Spot Project" />
              <a className="portfolio-link-btn" href="#" target="_blank">Live Demo</a>
            </div>
          </div>

          {/* Delivery Tracker */}
          <div className="portfolio-item right">
            <h2>Delivery Tracker</h2>
            <p>A full-stack delivery tracking application.</p>
            <div className="portfolio-content">
              <img className="portfolio-image" src="/delivery-tracker.jpeg" alt="Delivery Tracker Project" />
              <a className="portfolio-link-btn" href="#" target="_blank">Live Demo</a>
            </div>
          </div>

          {/* Weather Checker */}
          <div className="portfolio-item left">
            <h2>Weather Checker</h2>
            <p>A real-time weather update application.</p>
            <div className="portfolio-content">
              <img className="portfolio-image" src="/weather-checker.jpeg" alt="Weather Checker Project" />
              <a className="portfolio-link-btn" href="#" target="_blank">Live Demo</a>
            </div>
          </div>

          {/* Valid AI */}
          <div className="portfolio-item right">
            <h2>Valid AI</h2>
            <p>An art-based AI application.</p>
            <div className="portfolio-content">
              <img className="portfolio-image" src="/VALID.jpg" alt="Valid AI Project" />
              <a className="portfolio-link-btn" href="#" target="_blank">Live Demo</a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Portfolio;
