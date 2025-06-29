import React from 'react';

const Blog = () => (
  <div style={{ maxWidth: 800, margin: '2rem auto', padding: '2rem', background: '#fff', borderRadius: 8, boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
    <h1 style={{ color: '#4caf50', fontWeight: 700 }}>🚀 Complete Guide to the MERN Stack</h1>
    
    <div style={{ marginBottom: '2rem', padding: '1rem', background: '#f8f9fa', borderRadius: '8px', borderLeft: '4px solid #4caf50' }}>
      <p style={{ margin: 0, fontStyle: 'italic' }}>
        <strong>TL;DR:</strong> The MERN stack is a powerful combination of MongoDB, Express.js, React.js, and Node.js that enables full-stack JavaScript development for modern web applications.
      </p>
    </div>

    <h2 style={{ color: '#2196f3', marginTop: 32 }}>📚 What is the MERN Stack?</h2>
    <p>
      The <strong>MERN stack</strong> is a popular set of technologies for building full-stack web applications. The acronym stands for:
    </p>
    <ul>
      <li><strong>M</strong>ongoDB: A NoSQL database that stores data in flexible, JSON-like documents.</li>
      <li><strong>E</strong>xpress.js: A fast, minimalist backend web framework for Node.js.</li>
      <li><strong>R</strong>eact.js: A powerful JavaScript library for building user interfaces, especially single-page applications.</li>
      <li><strong>N</strong>ode.js: A JavaScript runtime that allows you to run JavaScript on the server.</li>
    </ul>

    <h2 style={{ color: '#2196f3', marginTop: 32 }}>🎯 Why Use the MERN Stack?</h2>
    <ul>
      <li><strong>Full JavaScript Development:</strong> Use JavaScript for both frontend and backend, reducing context switching.</li>
      <li><strong>Open Source:</strong> All technologies are open source and have large, active communities.</li>
      <li><strong>Scalability:</strong> MongoDB and Node.js are designed to handle large-scale applications.</li>
      <li><strong>Component-Based UI:</strong> React allows you to build reusable UI components.</li>
      <li><strong>RESTful APIs:</strong> Express.js makes it easy to create RESTful APIs.</li>
      <li><strong>Real-time Applications:</strong> Perfect for chat apps, live dashboards, and collaborative tools.</li>
      <li><strong>JSON Data Format:</strong> MongoDB stores data in JSON format, making it seamless with JavaScript.</li>
    </ul>

    <h2 style={{ color: '#2196f3', marginTop: 32 }}>🔄 How Does the MERN Stack Work?</h2>
    <ol>
      <li><strong>Frontend (React):</strong> Users interact with the React app in their browser.</li>
      <li><strong>Backend (Express + Node.js):</strong> React sends HTTP requests to the Express server running on Node.js.</li>
      <li><strong>Database (MongoDB):</strong> The Express server communicates with MongoDB to store, retrieve, update, or delete data.</li>
      <li><strong>Data Flow:</strong> User interacts with React UI → React sends API requests to Express/Node.js → Express interacts with MongoDB → Data is sent back to React and displayed to the user.</li>
    </ol>

    <h2 style={{ color: '#2196f3', marginTop: 32 }}>💻 Basic Code Examples</h2>
    
    <h3 style={{ color: '#ff9800', marginTop: 24 }}>MongoDB Schema Example</h3>
    <div style={{ background: '#f5f5f5', padding: '1rem', borderRadius: '4px', marginBottom: '1rem' }}>
      <pre style={{ margin: 0, overflow: 'auto' }}>
{`const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);`}
      </pre>
    </div>

    <h3 style={{ color: '#ff9800', marginTop: 24 }}>Express.js Route Example</h3>
    <div style={{ background: '#f5f5f5', padding: '1rem', borderRadius: '4px', marginBottom: '1rem' }}>
      <pre style={{ margin: 0, overflow: 'auto' }}>
{`app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});`}
      </pre>
    </div>

    <h3 style={{ color: '#ff9800', marginTop: 24 }}>React Component Example</h3>
    <div style={{ background: '#f5f5f5', padding: '1rem', borderRadius: '4px', marginBottom: '1rem' }}>
      <pre style={{ margin: 0, overflow: 'auto' }}>
{`import React, { useState, useEffect } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div>
      {users.map(user => (
        <div key={user._id}>{user.username}</div>
      ))}
    </div>
  );
}`}
      </pre>
    </div>

    <h2 style={{ color: '#2196f3', marginTop: 32 }}>🏗️ Project Structure</h2>
    <div style={{ background: '#f5f5f5', padding: '1rem', borderRadius: '4px', marginBottom: '1rem' }}>
      <pre style={{ margin: 0, overflow: 'auto', fontFamily: 'monospace', fontSize: '0.9rem' }}>
{`mern-app/
├── client/                    # React frontend
│   ├── public/
│   │   ├── index.html
│   │   ├── favicon.ico
│   │   └── manifest.json
│   ├── src/
│   │   ├── components/        # Reusable React components
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   ├── pages/            # Page components
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── Blog.jsx
│   │   │   ├── About.jsx
│   │   │   └── Contact.jsx
│   │   ├── services/         # API services
│   │   │   └── api.js
│   │   ├── context/          # React context
│   │   ├── hooks/            # Custom hooks
│   │   ├── App.js            # Main App component
│   │   ├── App.css           # App styles
│   │   └── index.js          # Entry point
│   ├── package.json
│   └── README.md
├── server/                    # Express backend
│   ├── config/               # Configuration files
│   │   └── db.js             # Database configuration
│   ├── controllers/          # Route controllers
│   │   ├── authController.js
│   │   ├── postController.js
│   │   └── categoryController.js
│   ├── middleware/           # Custom middleware
│   │   ├── authMiddleware.js
│   │   └── errorMiddleware.js
│   ├── models/               # MongoDB models
│   │   ├── User.js
│   │   ├── Post.js
│   │   └── Category.js
│   ├── routes/               # API routes
│   │   ├── auth.js
│   │   ├── posts.js
│   │   └── categories.js
│   ├── uploads/              # File uploads
│   ├── utils/                # Utility functions
│   ├── app.js                # Express app setup
│   ├── package.json
│   └── README.md
├── .env                      # Environment variables
├── .gitignore
├── package.json              # Root package.json
└── README.md`}
      </pre>
    </div>

    <h2 style={{ color: '#2196f3', marginTop: 32 }}>🚀 Getting Started Steps</h2>
    <ol>
      <li><strong>Set up Node.js:</strong> Install Node.js and npm on your system.</li>
      <li><strong>Create React App:</strong> Use Create React App or Vite for the frontend.</li>
      <li><strong>Set up Express Server:</strong> Create an Express.js server with necessary middleware.</li>
      <li><strong>Connect MongoDB:</strong> Set up MongoDB (local or Atlas) and connect via Mongoose.</li>
      <li><strong>Create API Routes:</strong> Build RESTful API endpoints in Express.</li>
      <li><strong>Connect Frontend to Backend:</strong> Use fetch or axios to make API calls from React.</li>
      <li><strong>Add Authentication:</strong> Implement user authentication with JWT or sessions.</li>
      <li><strong>Deploy:</strong> Deploy to platforms like Heroku, Vercel, or Netlify.</li>
    </ol>

    <h2 style={{ color: '#2196f3', marginTop: 32 }}>🔧 Essential Tools & Libraries</h2>
    <ul>
      <li><strong>Frontend:</strong> React Router, Axios, Redux/Context API, Styled Components</li>
      <li><strong>Backend:</strong> Express.js, Mongoose, bcrypt, jsonwebtoken, cors, dotenv</li>
      <li><strong>Development:</strong> Nodemon, Concurrently, ESLint, Prettier</li>
      <li><strong>Database:</strong> MongoDB Compass, MongoDB Atlas</li>
      <li><strong>Testing:</strong> Jest, React Testing Library, Supertest</li>
    </ul>

    <h2 style={{ color: '#2196f3', marginTop: 32 }}>📱 Example Use Cases</h2>
    <ul>
      <li><strong>Social Media Platforms:</strong> User profiles, posts, comments, likes</li>
      <li><strong>E-commerce Sites:</strong> Product catalogs, shopping carts, user orders</li>
      <li><strong>Blogging Platforms:</strong> Articles, categories, user management</li>
      <li><strong>Project Management Tools:</strong> Tasks, teams, progress tracking</li>
      <li><strong>Real-time Chat Applications:</strong> Instant messaging, user presence</li>
      <li><strong>Dashboard Applications:</strong> Data visualization, analytics</li>
      <li><strong>Learning Management Systems:</strong> Courses, assignments, progress tracking</li>
    </ul>

    <h2 style={{ color: '#2196f3', marginTop: 32 }}>⚡ Performance Tips</h2>
    <ul>
      <li><strong>Database Indexing:</strong> Create proper indexes for frequently queried fields</li>
      <li><strong>API Optimization:</strong> Use pagination, filtering, and sorting</li>
      <li><strong>React Optimization:</strong> Use React.memo, useMemo, and useCallback</li>
      <li><strong>Caching:</strong> Implement Redis for session storage and caching</li>
      <li><strong>Image Optimization:</strong> Use CDN and image compression</li>
      <li><strong>Code Splitting:</strong> Implement lazy loading for React components</li>
    </ul>

    <h2 style={{ color: '#2196f3', marginTop: 32 }}>🔒 Security Best Practices</h2>
    <ul>
      <li><strong>Authentication:</strong> Use JWT tokens with proper expiration</li>
      <li><strong>Password Hashing:</strong> Hash passwords using bcrypt</li>
      <li><strong>Input Validation:</strong> Validate all user inputs on both frontend and backend</li>
      <li><strong>CORS Configuration:</strong> Properly configure CORS for your domains</li>
      <li><strong>Environment Variables:</strong> Store sensitive data in .env files</li>
      <li><strong>HTTPS:</strong> Always use HTTPS in production</li>
      <li><strong>Rate Limiting:</strong> Implement rate limiting to prevent abuse</li>
    </ul>

    <h2 style={{ color: '#4caf50', marginTop: 32 }}>🎉 Conclusion</h2>
    <p>
      The MERN stack is a powerful, flexible, and modern way to build full-stack web applications using only JavaScript. Its popularity and community support make it a great choice for both beginners and experienced developers. With the right tools and best practices, you can build scalable, maintainable, and high-performance applications that meet modern web standards.
    </p>

    <div style={{ marginTop: '2rem', padding: '1rem', background: '#e8f5e8', borderRadius: '8px', borderLeft: '4px solid #4caf50' }}>
      <h3 style={{ color: '#2e7d32', marginTop: 0 }}>💡 Pro Tips</h3>
      <ul style={{ marginBottom: 0 }}>
        <li>Start with a simple CRUD application to understand the flow</li>
        <li>Use TypeScript for better type safety and developer experience</li>
        <li>Implement proper error handling and logging</li>
        <li>Write tests for both frontend and backend</li>
        <li>Use Git for version control and collaboration</li>
        <li>Follow the DRY (Don't Repeat Yourself) principle</li>
      </ul>
    </div>
  </div>
);

export default Blog; 