import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Hi, I'm <span className="highlight">Your Name</span></h1>
            <h2>Full Stack Developer</h2>
            <p>
              I create beautiful and functional web applications using modern technologies.
              Passionate about clean code, user experience, and continuous learning.
            </p>
            <div className="hero-buttons">
              <Link to="/projects" className="btn btn-primary">View My Work</Link>
              <Link to="/contact" className="btn btn-secondary">Get In Touch</Link>
            </div>
          </div>
          <div className="hero-image">
            <img src="/api/placeholder/400/400" alt="Profile" />
          </div>
        </div>
      </section>

      <section className="skills-preview">
        <div className="container">
          <h2>What I Do</h2>
          <div className="skills-grid">
            <div className="skill-item">
              <h3>Frontend Development</h3>
              <p>Creating responsive and interactive user interfaces with React, JavaScript, and CSS.</p>
            </div>
            <div className="skill-item">
              <h3>Backend Development</h3>
              <p>Building robust server-side applications with Node.js, Express, and databases.</p>
            </div>
            <div className="skill-item">
              <h3>UI/UX Design</h3>
              <p>Designing user-centered interfaces with attention to usability and aesthetics.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
