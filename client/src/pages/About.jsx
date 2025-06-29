import React from 'react';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-hero">
        <h1>👨‍💻 About This Project</h1>
        <p>A comprehensive MERN stack application showcasing modern web development</p>
      </div>

      <div className="about-content">
        <div className="about-section">
          <h2>🎯 Project Overview</h2>
          <p>
            This is a full-stack web application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. 
            The project demonstrates modern web development practices, including user authentication, RESTful APIs, 
            responsive design, and real-time data management.
          </p>
        </div>

        <div className="about-section">
          <h2>🛠️ Technologies Used</h2>
          <div className="tech-grid">
            <div className="tech-item">
              <h3>Frontend</h3>
              <ul>
                <li>React.js 18+</li>
                <li>React Router DOM</li>
                <li>CSS3 with Flexbox/Grid</li>
                <li>Responsive Design</li>
                <li>Modern JavaScript (ES6+)</li>
              </ul>
            </div>
            <div className="tech-item">
              <h3>Backend</h3>
              <ul>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MongoDB with Mongoose</li>
                <li>JWT Authentication</li>
                <li>RESTful API Design</li>
              </ul>
            </div>
            <div className="tech-item">
              <h3>Development</h3>
              <ul>
                <li>Git Version Control</li>
                <li>NPM Package Manager</li>
                <li>ESLint & Prettier</li>
                <li>Concurrently</li>
                <li>Nodemon</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="about-section">
          <h2>🚀 Features Implemented</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🔐</div>
              <h3>User Authentication</h3>
              <p>Secure login and registration system with JWT tokens</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📝</div>
              <h3>Content Management</h3>
              <p>Create, read, update, and delete posts and categories</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎨</div>
              <h3>Modern UI/UX</h3>
              <p>Beautiful, responsive design with smooth animations</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔗</div>
              <h3>RESTful API</h3>
              <p>Well-structured API endpoints for data management</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>Responsive Design</h3>
              <p>Works perfectly on desktop, tablet, and mobile devices</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Performance Optimized</h3>
              <p>Fast loading times and efficient data handling</p>
            </div>
          </div>
        </div>

        <div className="about-section">
          <h2>📊 Project Statistics</h2>
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Lines of Code</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">10+</div>
              <div className="stat-label">Components</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">5+</div>
              <div className="stat-label">Pages</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">4</div>
              <div className="stat-label">Technologies</div>
            </div>
          </div>
        </div>

        <div className="about-section">
          <h2>🎓 Learning Objectives</h2>
          <ul className="learning-list">
            <li>Understanding full-stack JavaScript development</li>
            <li>Implementing user authentication and authorization</li>
            <li>Building RESTful APIs with Express.js</li>
            <li>Working with NoSQL databases (MongoDB)</li>
            <li>Creating responsive React components</li>
            <li>Managing state and routing in React applications</li>
            <li>Deploying MERN stack applications</li>
            <li>Following modern development best practices</li>
          </ul>
        </div>

        <div className="about-section">
          <h2>🔮 Future Enhancements</h2>
          <div className="enhancements-grid">
            <div className="enhancement-item">
              <h3>Real-time Features</h3>
              <p>WebSocket integration for live chat and notifications</p>
            </div>
            <div className="enhancement-item">
              <h3>File Upload</h3>
              <p>Image and document upload functionality</p>
            </div>
            <div className="enhancement-item">
              <h3>Advanced Search</h3>
              <p>Elasticsearch integration for powerful search capabilities</p>
            </div>
            <div className="enhancement-item">
              <h3>Payment Integration</h3>
              <p>Stripe or PayPal integration for e-commerce features</p>
            </div>
          </div>
        </div>

        <div className="about-section">
          <h2>📞 Contact Information</h2>
          <div className="contact-info">
            <p><strong>Developer:</strong> MERN Stack Developer</p>
            <p><strong>Email:</strong> developer@mernstack.com</p>
            <p><strong>GitHub:</strong> github.com/mern-developer</p>
            <p><strong>LinkedIn:</strong> linkedin.com/in/mern-developer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 