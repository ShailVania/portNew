import React from 'react';

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <section className="about-intro">
          <div className="about-content">
            <h1>About Me</h1>
            <p className="lead">
              I'm a passionate full-stack developer with a love for creating digital experiences 
              that make a difference. With expertise in modern web technologies, I enjoy turning 
              complex problems into simple, beautiful solutions.
            </p>
          </div>
          <div className="about-image">
            <img src="/api/placeholder/300/400" alt="About me" />
          </div>
        </section>

        <section className="skills">
          <h2>Skills & Technologies</h2>
          <div className="skills-categories">
            <div className="skill-category">
              <h3>Frontend</h3>
              <div className="skill-tags">
                <span className="skill-tag">React</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">TypeScript</span>
                <span className="skill-tag">HTML5</span>
                <span className="skill-tag">CSS3</span>
                <span className="skill-tag">Sass</span>
                <span className="skill-tag">Tailwind CSS</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Backend</h3>
              <div className="skill-tags">
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">Express.js</span>
                <span className="skill-tag">Python</span>
                <span className="skill-tag">MongoDB</span>
                <span className="skill-tag">PostgreSQL</span>
                <span className="skill-tag">REST APIs</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Tools & Others</h3>
              <div className="skill-tags">
                <span className="skill-tag">Git</span>
                <span className="skill-tag">Docker</span>
                <span className="skill-tag">AWS</span>
                <span className="skill-tag">Figma</span>
                <span className="skill-tag">Jest</span>
                <span className="skill-tag">Webpack</span>
              </div>
            </div>
          </div>
        </section>

        <section className="experience">
          <h2>Experience</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-date">2023 - Present</div>
              <div className="timeline-content">
                <h3>Senior Frontend Developer</h3>
                <h4>Tech Company Inc.</h4>
                <p>Leading frontend development for multiple client projects, mentoring junior developers, and implementing best practices for code quality and performance.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">2021 - 2023</div>
              <div className="timeline-content">
                <h3>Full Stack Developer</h3>
                <h4>Startup Solutions</h4>
                <p>Developed and maintained web applications using React, Node.js, and MongoDB. Collaborated with design and product teams to deliver user-focused solutions.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">2020 - 2021</div>
              <div className="timeline-content">
                <h3>Junior Developer</h3>
                <h4>Digital Agency</h4>
                <p>Started my professional journey building responsive websites and learning modern development practices in an agile environment.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
