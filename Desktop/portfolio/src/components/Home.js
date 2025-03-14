import React, { useEffect, useState } from "react";
import Hero from "./hero";
import Skills from "./Skills";
import { Link } from "react-router-dom"; 
import './Home.css'; 
import Footer from "./Footer";

const Home = () => {
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

        const filteredProjects = data.filter(
          project => ['employee-front', 'Hotel-application', 'News-app'].includes(project.name)
        );

        setProjects(filteredProjects);
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

  return (
    <div>
      <Hero />
      <Skills />
      <section>
        <h2>Featured Projects</h2>
        <div className="projects-container">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <h3>{project.name}</h3>
              <p><strong>Tech Stack:</strong> {project.language || 'Not specified'}</p>
              <a href={project.html_url} target="_blank" rel="noopener noreferrer">
                GitHub Repo
              </a>
            </div>
          ))}
        </div>
        <Link to="/projects">
          <button>See All</button>
        </Link>
      </section>
      <Footer/>
    </div>
    
  );
};

export default Home;
