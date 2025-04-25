import React from "react";
import styles from "./About.module.css";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa"; // Import icons if needed
import { Link } from "react-router-dom";

function About() {
  return (
    <div className={styles.aboutPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>About Me</h1>
          <p className={styles.heroIntro}>
            Hi, I'm Solomon, a front-end developer deeply passionate about
            crafting engaging and user-friendly web experiences using React and
            Next.js. I believe in the power of clean code and thoughtful design
            to solve real-world problems.
          </p>
          {/* Optional: Add a link to your resume */}
          {/* <a href="/resume.pdf" className={styles.resumeLink} target="_blank">View My Resume</a> */}
        </div>
        <div className={styles.heroImage}>
          <img src="/solo.png.jpeg" alt="Solomon" />{" "}
          {/* Replace with your image */}
        </div>
      </section>

      {/* My Story/Journey Section */}
      <section className={styles.myStory}>
        <h2 className={styles.sectionTitle}>My Journey into Development</h2>
        <p>
          My journey into the world of web development began [when you first got
          interested]. Initially drawn by [what sparked your interest], I
          started exploring the fundamentals of HTML and CSS. It wasn't long
          before I discovered the dynamic capabilities of JavaScript, which
          truly ignited my passion for creating interactive web applications.
        </p>
        <p>
          As I delved deeper, I was particularly captivated by the
          component-based architecture and the rich ecosystem of React. The
          introduction of Next.js further expanded my horizons, allowing me to
          build performant and scalable full-stack applications. [Mention any
          key learning experiences, projects, or mentors that were significant].
        </p>
        <p>
          Today, I am driven by the desire to continuously learn and apply the
          latest front-end technologies to build innovative and user-centric
          solutions. I am always eager to take on new challenges and collaborate
          on impactful projects.
        </p>
      </section>

      {/* Skills and Expertise Section */}
      <section className={styles.skills}>
        <h2 className={styles.sectionTitle}>Skills & Expertise</h2>
        <div className={styles.skillsList}>
          <div className={styles.skillCategory}>
            <h3>Languages</h3>
            <ul>
              <li>JavaScript (ES6+)</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </div>
          <div className={styles.skillCategory}>
            <h3>Frameworks</h3>
            <ul>
              <li>React</li>
              <li>Next.js</li>
              {/* <li>Redux</li> */}
              {/* <li>Tailwind CSS</li> */}
              <li>CSS Modules</li>
              {/* Add other frameworks/libraries */}
            </ul>
          </div>
          <div className={styles.skillCategory}>
            <h3>Core Concepts</h3>
            <ul>
              <li>Component-Based Architecture</li>
              <li>State Management</li>
              <li>Responsive Design</li>
              <li>RESTful API Integration</li>
              <li>Asynchronous Programming</li>
              <li>JSX</li>
              <li>Routing</li>
            </ul>
          </div>
          <div className={styles.skillCategory}>
            <h3>Tools & Technologies</h3>
            <ul>
              <li>Git</li>
              <li>npm/yarn/pnpm</li>
              <li>VS Code</li>
              <li>Chrome DevTools</li>
              <li>Figma</li>
              {/* <li>Webpack/Babel</li> */}
              {/* Add other tools */}
            </ul>
          </div>
          <div className={styles.skillCategory}>
            <h3>Development Practices</h3>
            <ul>
              <li>Agile Methodologies</li>
              <li>Version Control</li>
              <li>Code Reviews</li>
              <li>Performance Optimization</li>
              <li>Accessibility (A11y)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Experience/Projects Section */}
      <section className={styles.experience}>
        <h2 className={styles.sectionTitle}>Experience & Projects</h2>
        <p>
          Throughout my journey, I've had the opportunity to contribute to a
          variety of projects, ranging from e-commerce platforms to portfolio
          websites. I am passionate about applying my skills to create
          user-centric and efficient web solutions. [Mention a brief overview of
          your experience or types of projects you've worked on].
        </p>
        <p>
          Some of my notable projects include [briefly mention 1-2 key projects
          and what you achieved in them]. You can explore more of my work on my
          projects page.
        </p>
        <Link to="/projects" className={styles.viewProjectsButton}>
          View My Projects
        </Link>
      </section>

      {/* Values and Approach Section */}
      <section className={styles.values}>
        <h2 className={styles.sectionTitle}>My Values & Approach</h2>
        <p>
          I believe in writing clean, maintainable, and well-documented code. My
          approach to development is user-centered, focusing on creating
          intuitive and accessible experiences. I value collaboration and
          effective communication within a team. I am also a strong advocate for
          continuous learning and staying up-to-date with the latest industry
          trends and best practices.
        </p>
        {/* Add more details about your values */}
      </section>

      {/* Interests Section (Optional) */}
      <section className={styles.interests}>
        <h2 className={styles.sectionTitle}>Outside of Code</h2>
        <p>
          When I'm not immersed in code, I enjoy reading, playing music, playing
          piano. These activities help me recharge and bring a fresh perspective
          to my work.
        </p>
      </section>

      {/* Contact Information and Call to Action */}
      <section className={styles.contact}>
        <h2 className={styles.sectionTitle}>Get in Touch</h2>
        <p>
          I'm always eager to connect with fellow developers, potential
          collaborators, and anyone interested in discussing web development.
          Feel free to reach out!
        </p>
        {/* Add a contact form or email link here */}
        <div className={styles.socialLinks}>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className={styles.socialIcon} />
          </a>
          <a
            href="https://github.com/Solo12mon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className={styles.socialIcon} />
          </a>
          <a href="mailto:robertsolomon313@gmail.com">
            <FaEnvelope className={styles.socialIcon} />
          </a>
        </div>
      </section>
    </div>
  );
}

export default About;
