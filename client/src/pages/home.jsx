import React from 'react';

const Home = () => {
  return (
    <div className="home">
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="mern-text">MERN</span> Stack Application
          </h1>
          <p className="hero-subtitle">
            A powerful full-stack web application built with modern technologies
          </p>
          <div className="tech-badges">
            <span className="badge mongo">MongoDB</span>
            <span className="badge express">Express.js</span>
            <span className="badge react">React.js</span>
            <span className="badge node">Node.js</span>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🗄️</div>
            <h3>MongoDB</h3>
            <p>NoSQL database for flexible data storage</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Express.js</h3>
            <p>Fast backend framework for Node.js</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⚛️</div>
            <h3>React.js</h3>
            <p>Powerful frontend library for UI</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🟢</div>
            <h3>Node.js</h3>
            <p>JavaScript runtime environment</p>
          </div>
        </div>

        <div className="app-features">
          <h2>🚀 Application Features</h2>
          <div className="features-list">
            <div className="feature-item">
              <span className="feature-check">✅</span>
              <span>User Authentication (Login/Register)</span>
            </div>
            <div className="feature-item">
              <span className="feature-check">✅</span>
              <span>Post Management System</span>
            </div>
            <div className="feature-item">
              <span className="feature-check">✅</span>
              <span>Category Management</span>
            </div>
            <div className="feature-item">
              <span className="feature-check">✅</span>
              <span>RESTful API Endpoints</span>
            </div>
            <div className="feature-item">
              <span className="feature-check">✅</span>
              <span>Modern Responsive Design</span>
            </div>
            <div className="feature-item">
              <span className="feature-check">✅</span>
              <span>Real-time Data Updates</span>
            </div>
          </div>
        </div>

        <div className="cta-section">
          <h2>Ready to Explore?</h2>
          <p>Start building amazing web applications with the MERN stack!</p>
          <div className="cta-buttons">
            <button className="btn btn-primary">Get Started</button>
            <button className="btn btn-secondary">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
