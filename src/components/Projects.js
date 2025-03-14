import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import './Projects.css';

const ProjectCard = ({ project }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDetails = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="project">
      <div className="project-preview" onClick={toggleDetails}>
        <img src={project.image} alt={project.title} />
        <h3>{project.title}</h3>
        <button>
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </button>
      </div>
      {isOpen && (
        <div className="project-details">
          <p>{project.description}</p>
          <p><strong>Technologies utilisées :</strong> {project.technologies.join(', ')}</p>
          <p><strong>Défis rencontrés :</strong> {project.challenges}</p>
          <p><strong>Solutions apportées :</strong> {project.solutions}</p>
          <a href={project.demoLink} target="_blank" rel="noopener noreferrer">Voir la démo</a>
          <a href={project.codeLink} target="_blank" rel="noopener noreferrer">Voir le code</a>
        </div>
      )}
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Booki",
      description: "Description du projet 1.",
      image: "url_de_l_image",
      demoLink: "url_de_la_demo",
      codeLink: "url_du_code",
      technologies: ["React", "Node.js", "CSS"],
      challenges: "Défis rencontrés et solutions apportées.",
      solutions: "Solutions apportées."
    },
    {
      title: "Kasa",
      description: "Description du projet 2.",
      image: "url_de_l_image",
      demoLink: "url_de_la_demo",
      codeLink: "url_du_code",
      technologies: ["React", "Node.js", "CSS"],
      challenges: "Défis rencontrés et solutions apportées.",
      solutions: "Solutions apportées."
    },
    {
      title: "ArgentBank",
      description: "Description du projet 3.",
      image: "url_de_l_image",
      demoLink: "url_de_la_demo",
      codeLink: "url_du_code",
      technologies: ["React", "Node.js", "CSS"],
      challenges: "Défis rencontrés et solutions apportées.",
      solutions: "Solutions apportées."
    }
  ];

  return (
    <section id="projects" className="projects">
      <h2>Mes Projets</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
