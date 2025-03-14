
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css'; 

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>Logo</div>
      <ul className={styles.navList}>
        <li><Link to="/" className={styles.navItem}>Home</Link></li>
        <li><Link to="/projects" className={styles.navItem}>Projects</Link></li>
        <li><Link to="/contact" className={styles.navItem}>Contact</Link></li>
        <li><Link to="/resume" className={styles.navItem}>Resume</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
