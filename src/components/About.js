import React from 'react';
import { motion } from 'framer-motion';
import './About.css';
import profileImage from '../assets/6J6A1716.jpg';
import linkedinImage from '../assets/logo-linkedin-icon-1536.png';
import githubImage from '../assets/github_PNG80.png';

function About() {
  return (
    <motion.section
      id="about"
      className="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2>À propos</h2>
      <div className="about-content">
        <img src={profileImage} alt="Profile" className="profile-image" />
        <div>
          <p>Bonjour ! Je m'appelle Albane, et je suis une développeuse web passionnée de 22 ans. J'ai découvert le monde du développement web il y'a maintenant 3 ans et j'ai tout de suite été fascinée par la possibilité de créer des sites web  en partant de zéro.
            J'ai commencé le développement web en apprenant les bases du HTML, du CSS et du JavaScript. Depuis, j'ai élargi mes compétences en travaillant avec des frameworks modernes comme React, Redux et Node.js.
            J'ai travaillé sur certains projets passionnants que vous pourrez découvrir dans la section Projets de ce portfolio.
            Ce qui me motive le plus dans le développement web, c'est la possibilité de résoudre des problèmes et de créer des solutions innovantes. J'aime l'évolution permanente de la technologies et améliorer constamment mes compétences. Mon objectif est de continuer à évoluer en tant que développeuse et de contribuer à des projets intéressant.</p>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/albane-stephant-510847199/" target="_blank" rel="noopener noreferrer">
              <img src={linkedinImage} alt="LinkedIn" />
            </a>
            <a href="https://github.com/albaneste" target="_blank" rel="noopener noreferrer">
              <img src={githubImage} alt="GitHub" />
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default About;