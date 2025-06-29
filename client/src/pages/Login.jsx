import React, { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt:', formData);
    // Add your login logic here
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h1>🔐 Welcome Back</h1>
          <p>Sign in to your MERN account</p>
        </div>
        
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="email">📧 Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="form-input"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">🔒 Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
              className="form-input"
            />
          </div>
          
          <div className="form-options">
            <label className="checkbox-label">
              <input type="checkbox" /> Remember me
            </label>
            <button type="button" className="forgot-password" style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#4caf50', textDecoration: 'none', fontSize: '0.9rem' }}>
              Forgot Password?
            </button>
          </div>
          
          <button type="submit" className="btn btn-primary btn-full">
            🚀 Sign In
          </button>
        </form>
        
        <div className="auth-footer">
          <p>Don't have an account? <a href="/register" className="auth-link">Sign up here</a></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
