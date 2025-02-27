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
            <div className="portfolio-image">
              <img src="../assets/flare48.png" alt="Flare48 Project" />
            </div>
          </div>

          {/* Skill Starter */}
          <div className="portfolio-item right">
            <h2>Skill Starter</h2>
            <p>A comprehensive portfolio platform for developers.</p>
            <div className="portfolio-image">
              <img src="../assets/skillstarter.jpg" alt="Skill Starter Project" />
            </div>
          </div>

          {/* Audio Spot */}
          <div className="portfolio-item left">
            <h2>Audio Spot</h2>
            <p>A blog for music lovers who want to share new music and experiences.</p>
            <div className="portfolio-image">
              <img src="../assets/audiospotlogo.webp" alt="Audio Spot Project" />
            </div>
          </div>

          {/* Delivery Tracker */}
          <div className="portfolio-item right">
            <h2>Delivery Tracker</h2>
            <p>A full-stack delivery tracking application.</p>
            <div className="portfolio-image">
              <img src="../assets/Delivery Tracker.webp" alt="Delivery Tracker Project" />
            </div>
          </div>

          {/* Weather Checker */}
          <div className="portfolio-item left">
            <h2>Weather Checker</h2>
            <p>A real-time weather update application.</p>
            <div className="portfolio-image">
              <img src="../assets/weather checker.webp" alt="Weather Checker Project" />
            </div>
          </div>

          {/* Valid AI */}
          <div className="portfolio-item right">
            <h2>Valid AI</h2>
            <p>An art-based AI application.</p>
            <div className="portfolio-image">
              <img src="../assets/VALID.png" alt="Valid AI Project" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Portfolio;
