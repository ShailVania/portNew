import React from 'react';

const Resume = () => {
  return (
    <div className="resume">
      <div className="container">
        <div className="resume-header">
          <h1>Resume</h1>
          <div className="resume-actions">
            <button className="btn btn-primary">Download PDF</button>
            <button className="btn btn-secondary">Print</button>
          </div>
        </div>

        <div className="resume-content">
          <section className="resume-section">
            <h2>Professional Summary</h2>
            <p>
              Experienced Full Stack Developer with 4+ years of expertise in building scalable web applications. 
              Proficient in React, Node.js, and modern development practices. Passionate about creating 
              user-centered solutions and mentoring junior developers.
            </p>
          </section>

          <section className="resume-section">
            <h2>Work Experience</h2>
            <div className="experience-item">
              <div className="experience-header">
                <h3>Senior Frontend Developer</h3>
                <span className="company">Tech Company Inc.</span>
                <span className="duration">Jan 2023 - Present</span>
              </div>
              <ul className="experience-details">
                <li>Led development of 5+ client projects resulting in 30% increase in user engagement</li>
                <li>Mentored 3 junior developers and established code review processes</li>
                <li>Implemented automated testing reducing bugs by 40%</li>
                <li>Collaborated with UX team to improve application accessibility</li>
              </ul>
            </div>

            <div className="experience-item">
              <div className="experience-header">
                <h3>Full Stack Developer</h3>
                <span className="company">Startup Solutions</span>
                <span className="duration">Mar 2021 - Dec 2022</span>
              </div>
              <ul className="experience-details">
                <li>Developed and maintained 10+ web applications using React and Node.js</li>
                <li>Optimized database queries improving application performance by 50%</li>
                <li>Integrated third-party APIs and payment gateways</li>
                <li>Participated in agile development processes and sprint planning</li>
              </ul>
            </div>

            <div className="experience-item">
              <div className="experience-header">
                <h3>Junior Developer</h3>
                <span className="company">Digital Agency</span>
                <span className="duration">Jun 2020 - Feb 2021</span>
              </div>
              <ul className="experience-details">
                <li>Built responsive websites for 15+ clients using HTML, CSS, and JavaScript</li>
                <li>Collaborated with designers to implement pixel-perfect designs</li>
                <li>Learned modern development tools and best practices</li>
              </ul>
            </div>
          </section>

          <section className="resume-section">
            <h2>Education</h2>
            <div className="education-item">
              <h3>Bachelor of Computer Science</h3>
              <span className="institution">University Name</span>
              <span className="duration">2016 - 2020</span>
              <p>Relevant Coursework: Data Structures, Algorithms, Database Systems, Web Development</p>
            </div>
          </section>

          <section className="resume-section">
            <h2>Technical Skills</h2>
            <div className="skills-grid">
              <div className="skill-group">
                <h4>Frontend</h4>
                <p>React, JavaScript, TypeScript, HTML5, CSS3, Sass, Tailwind CSS</p>
              </div>
              <div className="skill-group">
                <h4>Backend</h4>
                <p>Node.js, Express.js, Python, REST APIs, GraphQL</p>
              </div>
              <div className="skill-group">
                <h4>Database</h4>
                <p>MongoDB, PostgreSQL, MySQL, Redis</p>
              </div>
              <div className="skill-group">
                <h4>Tools & Others</h4>
                <p>Git, Docker, AWS, Jest, Webpack, Figma</p>
              </div>
            </div>
          </section>

          <section className="resume-section">
            <h2>Certifications</h2>
            <ul className="certifications-list">
              <li>AWS Certified Developer Associate (2023)</li>
              <li>React Developer Certification (2022)</li>
              <li>JavaScript Algorithms and Data Structures (2021)</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Resume;
