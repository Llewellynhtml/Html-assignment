import React from 'react';
import styles from './Skills.module.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa'; 

const skillsData = [
  { name: 'HTML', level: 'Intermediate', logo: <FaHtml5 size={48} /> },
  { name: 'CSS', level: 'Advanced', logo: <FaCss3Alt size={48} /> },
  { name: 'JavaScript', level: 'Intermediate', logo: <FaJs size={48} /> },
  { name: 'React', level: 'Intermediate', logo: <FaReact size={48} /> },
  { name: 'Node.js', level: 'Intermediate', logo: <FaNodeJs size={48} /> },
  { name: 'MongoDB', level: 'Beginner', logo: <FaDatabase size={48} /> },
  { name: 'Firebase', level: 'Intermediate', logo: <FaDatabase size={48} /> },
];

const Skills = () => {
  return (
    <section id="skills-matrix" className={styles.skillsSection}>
      <h2 className={styles.skillsTitle}>Skills Matrix</h2>
      <div className={styles.skillsCards}>
        {skillsData.map((skill, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.cardLogo}>{skill.logo}</div>
            <div className={styles.cardText}>
              <h4>{skill.name}</h4>
              <p>{skill.level}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
