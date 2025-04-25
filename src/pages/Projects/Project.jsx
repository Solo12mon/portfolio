import React from "react";
import styles from "./Project.module.css";
import ProjectCard from "../../UI/ProjectCard";

function Project() {
  const projects = [
    {
      title: "Wears for female",
      description:
        "An online boutique showcasing a diverse collection of stylish wears for women, featuring categories and product details.",
      image: "/women.jpg", // Replace with an appropriate image path
      tech: ["Next.js", "React", "JavaScript", "CSS Modules"], // Assuming potential tech
      liveDemo: "https://lisafolawiyo.com",
      githubRepo: "https://github.com/Solo12mon?tab=repositories", // Update repo name
    },
    {
      title: "Events and drink",
      description:
        "A platform listing upcoming events and potentially featuring drink vendors or related services for event attendees.",
      image: "/cocktail.png", // Replace with an appropriate image path
      tech: ["React", "JavaScript", "API Integration", "CSS Modules"], // Assuming potential tech
      liveDemo: "https://www.eventfulnigeria.com/",
      githubRepo: "https://github.com/Solo12mon?tab=repositories", // Update repo name
    },
    {
      title: "Wedding Gown",
      description:
        "An online shop specializing in a beautiful selection of wedding gowns with detailed product information and purchasing options.",
      image: "/bride.jpg", // Replace with an appropriate image path
      tech: ["React", "JavaScript", "API Integration", "CSS Modules"], // Assuming potential tech
      liveDemo: "https://aprilbykunbi.com/shop",
      githubRepo: "https://github.com/Solo12mon?tab=repositories", // Update repo name
    },
    {
      title: "Events Planning",
      description:
        "A platform for finding and connecting with event planners and related services for various types of events.",
      image: "events.jpg", // Replace with an appropriate image path
      tech: ["React", "JavaScript", "API Integration", "CSS Modules"], // Assuming potential tech
      liveDemo: "https://myeventigo.com/",
      githubRepo: "https://github.com/Solo12mon?tab=repositories", // Update repo name
    },
    {
      title: "Hotel Staffs",
      description:
        "A web application designed for managing hotel staff, potentially including features for booking management, staff scheduling, and guest interactions.",
      image: "/hotel.jpg", // Replace with an appropriate image path
      tech: [
        "React",
        "JavaScript",
        "State Management",
        "API Integration",
        "CSS Modules",
      ],
      liveDemo: "https://the-wild-oasis-solo.netlify.app/",
      githubRepo: "https://github.com/Solo12mon?tab=repositories", // Update repo name
    },
  ];

  return (
    <div className={styles.projectsPage}>
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>My Projects</h1>
        <p className={styles.heroIntro}>
          A showcase of my web development projects, highlighting my skills and
          experience in building modern and user-friendly applications. Explore
          my portfolio below to see some of the work I'm most proud of.
        </p>
      </section>

      <section className={styles.projectsGrid}>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </section>
    </div>
  );
}

export default Project;
