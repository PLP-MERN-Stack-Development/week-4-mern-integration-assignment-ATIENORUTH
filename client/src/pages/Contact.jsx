import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    // Add your contact form logic here
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="contact-container">
      <div className="contact-hero">
        <h1>📞 Get In Touch</h1>
        <p>Have questions about our MERN stack application? We'd love to hear from you!</p>
      </div>

      <div className="contact-content">
        <div className="contact-info-section">
          <h2>💬 Contact Information</h2>
          <div className="contact-info-grid">
            <div className="contact-info-item">
              <div className="contact-icon">📧</div>
              <div>
                <h3>Email</h3>
                <p>developer@mernstack.com</p>
                <p>support@mernstack.com</p>
              </div>
            </div>
            <div className="contact-info-item">
              <div className="contact-icon">🌐</div>
              <div>
                <h3>Website</h3>
                <p>www.mernstack.com</p>
                <p>Documentation & Resources</p>
              </div>
            </div>
            <div className="contact-info-item">
              <div className="contact-icon">💼</div>
              <div>
                <h3>LinkedIn</h3>
                <p>linkedin.com/in/mern-developer</p>
                <p>Professional Network</p>
              </div>
            </div>
            <div className="contact-info-item">
              <div className="contact-icon">🐙</div>
              <div>
                <h3>GitHub</h3>
                <p>github.com/mern-developer</p>
                <p>Open Source Projects</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-section">
          <h2>📝 Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">👤 Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">📧 Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  required
                  className="form-input"
                />
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">📋 Subject *</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What is this about?"
                required
                className="form-input"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">💭 Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us more about your inquiry..."
                required
                rows="6"
                className="form-textarea"
              ></textarea>
            </div>
            
            <button type="submit" className="btn btn-primary btn-full">
              🚀 Send Message
            </button>
          </form>
        </div>

        <div className="faq-section">
          <h2>❓ Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>What is the MERN stack?</h3>
              <p>The MERN stack is a collection of technologies used to build full-stack web applications: MongoDB (database), Express.js (backend framework), React.js (frontend library), and Node.js (runtime environment).</p>
            </div>
            <div className="faq-item">
              <h3>How long does it take to learn MERN?</h3>
              <p>Learning the MERN stack typically takes 3-6 months for beginners, depending on your prior programming experience and time commitment.</p>
            </div>
            <div className="faq-item">
              <h3>Is this project open source?</h3>
              <p>Yes! This project is open source and available on GitHub. You can contribute, fork, or use it as a learning resource.</p>
            </div>
            <div className="faq-item">
              <h3>Can I deploy this application?</h3>
              <p>Absolutely! The application is designed to be easily deployable on platforms like Heroku, Vercel, Netlify, or any cloud provider.</p>
            </div>
          </div>
        </div>

        <div className="support-section">
          <h2>🛠️ Need Technical Support?</h2>
          <div className="support-options">
            <div className="support-option">
              <h3>📚 Documentation</h3>
              <p>Check our comprehensive documentation for setup guides, API references, and troubleshooting tips.</p>
              <button className="btn btn-secondary">View Docs</button>
            </div>
            <div className="support-option">
              <h3>🐛 Bug Report</h3>
              <p>Found a bug? Report it on our GitHub issues page and we'll fix it as soon as possible.</p>
              <button className="btn btn-secondary">Report Bug</button>
            </div>
            <div className="support-option">
              <h3>💡 Feature Request</h3>
              <p>Have an idea for a new feature? We'd love to hear your suggestions and implement them.</p>
              <button className="btn btn-secondary">Suggest Feature</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 