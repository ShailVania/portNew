import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with user authentication, payment integration, and admin dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
      githubLink: "https://github.com/yourusername/ecommerce-platform",
      liveLink: "https://your-ecommerce-demo.com",
      image: "/api/placeholder/300/200"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates and team collaboration features.",
      technologies: ["React", "Socket.io", "Express", "PostgreSQL"],
      githubLink: "https://github.com/yourusername/task-manager",
      liveLink: "https://your-task-manager.com",
      image: "/api/placeholder/300/200"
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather application with location-based forecasts and interactive charts.",
      technologies: ["React", "Chart.js", "OpenWeather API", "CSS3"],
      githubLink: "https://github.com/yourusername/weather-dashboard",
      liveLink: "https://your-weather-app.com",
      image: "/api/placeholder/300/200"
    },
    {
      title: "Blog Platform",
      description: "A modern blogging platform with markdown support, comments, and social sharing features.",
      technologies: ["Next.js", "Prisma", "PostgreSQL", "Tailwind CSS"],
      githubLink: "https://github.com/yourusername/blog-platform",
      liveLink: "https://your-blog-platform.com",
      image: "/api/placeholder/300/200"
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing projects and skills with smooth animations.",
      technologies: ["React", "CSS3", "Framer Motion"],
      githubLink: "https://github.com/yourusername/portfolio",
      liveLink: "https://your-portfolio.com",
      image: "/api/placeholder/300/200"
    },
    {
      title: "Chat Application",
      description: "Real-time chat application with multiple rooms, file sharing, and emoji support.",
      technologies: ["React", "Socket.io", "Node.js", "MongoDB"],
      githubLink: "https://github.com/yourusername/chat-app",
      liveLink: "https://your-chat-app.com",
      image: "/api/placeholder/300/200"
    }
  ];

  return (
    <div className="projects">
      <div className="container">
        <div className="projects-header">
          <h1>My Projects</h1>
          <p>Here are some of the projects I've worked on. Each project represents a unique challenge and learning experience.</p>
        </div>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
