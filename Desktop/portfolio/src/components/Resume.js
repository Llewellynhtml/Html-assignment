import React from 'react';
import styles from './Resume.module.css';

const Resume = () => {
  return (
    <section id="resume" className={styles.resumeSection}>
      <h2 className={styles.resumeTitle}>Resume</h2>
      <p>Download my resume below:</p>
      <a href="/My Resume (1).pdf" download className={styles.resumeLink}>Download Resume (PDF)</a>
    </section>
  );
};

export default Resume;
