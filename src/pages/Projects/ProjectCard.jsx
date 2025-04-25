import React from "react";
import styles from "./ProjectCard.module.css";

function ProjectCard({ project }) {
  return (
    <div className={styles.projectCard}>
      <div className={styles.projectImageContainer}>
        <img
          src={project.image}
          alt={project.title}
          className={styles.projectImage}
        />
      </div>
      <div className={styles.projectDetails}>
        <h3 className={styles.projectTitle}>{project.title}</h3>
        <p className={styles.projectDescription}>{project.description}</p>
        <ul className={styles.projectTechList}>
          {project.tech &&
            project.tech.map((tech, index) => (
              <li key={index} className={styles.projectTechItem}>
                {tech}
              </li>
            ))}
        </ul>
        <div className={styles.projectLinks}>
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.projectLink}
            >
              Live Demo
            </a>
          )}
          {project.githubRepo && (
            <a
              href={project.githubRepo}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.projectLink}
            >
              GitHub Repo
            </a>
          )}
          <button className={styles.viewMoreButton}>View More</button>{" "}
          {/* For a dedicated project page */}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
