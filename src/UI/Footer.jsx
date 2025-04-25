import React from "react";
import styles from "./Footer.module.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"; // Import social icons
import { Link } from "react-router-dom"; // If you're using React Router for navigation

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.copyright}>
          <p>&copy; {currentYear} Solomon. All Rights Reserved.</p>
        </div>

        <nav className={styles.footerNav}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <div className={styles.socialLinks}>
          <a
            href="https://github.com/solo12mon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className={styles.socialIcon} />
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className={styles.socialIcon} />
          </a>
          <a href="mailto: robertsolomon313@gmail.com">
            <FaEnvelope className={styles.socialIcon} />
          </a>
        </div>

        <div className={styles.contactInfo}>
          <p>Email: robertsolomon313@gmail.com</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
