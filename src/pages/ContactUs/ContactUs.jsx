import React from "react";
import styles from "./ContactUs.module.css";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa"; // Example icons

function ContactUs() {
  return (
    <div className={styles.contactUsPage}>
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>Contact Me</h1>
        <p className={styles.heroIntro}>
          I'm always open to new connections and opportunities! Whether you have
          a project in mind, a question, or just want to say hello, please feel
          free to reach out through the following channels.
        </p>
      </section>

      <section className={styles.contactInfo}>
        <h2>Get in Touch</h2>
        <div className={styles.infoGrid}>
          <div className={styles.infoItem}>
            <FaEnvelope className={styles.icon} />
            <p>Email: robertsolomon313@gmail.com</p>
          </div>
          <div className={styles.infoItem}>
            <FaPhone className={styles.icon} />
            <p>Phone: +234 7012467021</p>
          </div>
          <div className={styles.infoItem}>
            <FaLinkedin className={styles.icon} />
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
          <div className={styles.infoItem}>
            <FaGithub className={styles.icon} />
            <a
              href="https://github.com/solo12mon"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
          {/* Optional: Add other contact methods */}
        </div>
      </section>

      <section className={styles.callToAction}>
        <h2>Let's Connect!</h2>
        <p>
          I'm particularly interested in discussing exciting front-end
          development projects, collaborations, and opportunities to contribute
          my skills in React and Next.js. Don't hesitate to send me an email or
          connect on LinkedIn. I look forward to hearing from you!
        </p>

        <a
          href="mailto:robertsolomon313@gmail.com"
          className={styles.emailButton}
        >
          Send an Email
        </a>
      </section>
    </div>
  );
}

export default ContactUs;
