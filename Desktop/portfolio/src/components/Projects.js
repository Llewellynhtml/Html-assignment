import React, { useEffect, useState } from 'react';
import styles from './Projects.module.css';


const techIcons = {
  HTML: '🌐',
  CSS: '🎨',
  JavaScript: '💻',
  React: '⚛️',
  Node: '🟩',
  MongoDB: '🍃',
  Firebase: '🔥',
  Python: '🐍',
  Java: '☕',
  PHP: '🐘',
  TypeScript: '🔧',
  SQL: '🗃️',
};

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    
    const fetchProjects = async () => {
      try {
        const response = await fetch('https://api.github.com/users/Llewellynhtml/repos');
        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }
        const data = await response.json();
        setProjects(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return <p>Loading projects...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  
  const renderTechStack = (techStack) => {
    return techStack.split(',').map((tech, index) => (
      <span key={index} className={styles.techIcon}>
        {techIcons[tech.trim()] || tech}
      </span>
    ));
  };

  return (
    
    <section id="individual-projects" className={styles.projectsSection}>
      
      <h2 className={styles.projectsTitle}>Individual Projects</h2>
      {projects.map((project) => (
        <div key={project.id} className={styles.project}>
          <h3>{project.name}</h3>
          <p><strong>Tech Stack:</strong> {renderTechStack(project.language || 'Not specified')}</p>

          <p><strong>Challenges Faced and Solutions:</strong> Highlight a problem and how you resolved it.</p>
          <a href={project.html_url} target="_blank" rel="noopener noreferrer" className={styles.githubLink}>GitHub Repo</a>
        </div>
      ))}
    </section>
  );
};

export default Projects;
