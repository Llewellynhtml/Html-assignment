
import React from 'react';

import styles from "./About.module.css";
import heroImage from "./Images/full-stack.png";
const Hero = () => {
  return (
    <section id="about" className={styles.aboutSection}>
    <div className={styles.aboutContent}>
      <div className={styles.textContent}>
        <h2 className={styles.aboutTitle}>Hi There</h2>

        <h4 className={styles.subTitle}>I'm Lesego</h4> 
        <p>
          Hello! I'm Lesego Llewellyn, a passionate Junior Software Developer.<br></br>
          I have completed my training at CodeTribe, where I developed a strong foundation <br></br>in web development.
          My goal is to build innovative, user-friendly web applications <br></br>and contribute to open-source projects.<br></br>
          I love solving problems and learning new technologies.<br></br>
        </p>
        <p>
        </p>
        <hr></hr>


        <button className={styles.downloadButton}>Download</button> 
      </div>
      <div className={styles.heroImage}>
        <img src={heroImage} alt="Hero" />
      </div>
    </div>
  </section>
  );
};

export default Hero
