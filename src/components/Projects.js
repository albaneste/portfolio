import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import './Projects.css';
import omfimg from '../assets/jay-wennington-N_Y88TWmGwA-unsplash.jpg';
import kasaimg from '../assets/banner2.png';
import argentbankimg from '../assets/bank-tree.jpeg';

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
          <a href={project.codeLink} target="_blank" rel="noopener noreferrer">Voir le code sur GitHub</a>
        </div>
      )}
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "OhMyFood",
      description: "OhMyFood est un site permettant la réservation en ligne de plats gastronomiques.",
      image: omfimg,
      codeLink: "https://github.com/albaneste/projet4.git",
      technologies: ["Scss", "HTML"],
    },
    {
      title: "Kasa",
      description: "Kasa est un site de réservation d'appartements.",
      image: kasaimg,
      codeLink: "https://github.com/albaneste/p8.git",
      technologies: ["React"],
    },
    {
      title: "ArgentBank",
      description: "ArgentBank est un site où plusieurs contraintes sont demandés : authentification des utilisateurs, gérer les transactions avec swagger",
      image: argentbankimg,
      codeLink: "https://github.com/albaneste/argentbankfront.git",
      technologies: ["React", "Swagger", "Redux"],
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

