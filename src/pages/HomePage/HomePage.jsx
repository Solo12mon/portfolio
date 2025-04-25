import React from "react";
import styles from "./HomePage.module.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import ProjectCard from "../../UI/ProjectCard";
import { Link } from "react-router-dom";

function HomePage() {
  const featuredProjects = [
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
      image: "/events.jpg", // Replace with an appropriate image path
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
      ], // Assuming potential tech
      liveDemo: "https://the-wild-oasis-solo.netlify.app/",
      githubRepo: "https://github.com/Solo12mon?tab=repositories", // Update repo name
    },
  ];

  const skills = {
    Languages: ["JavaScript (ES6+)"],
    "Frameworks/Libraries": ["React", "Next.js"],
    CoreConcepts: [
      "JSX",
      "Component-Based Architecture",
      "State Management (useState, useEffect, Context API, Redux - if applicable)",
      "Routing",
      "API Integration",
    ],
    Tools: ["Git", "npm/yarn/pnpm", "VS Code", "Chrome DevTools"],
    "Development Practices": [
      "Responsive Design",
      "Modular CSS (CSS Modules, Styled Components)",
      "Version Control",
    ],
  };

  const testimonials = [
    {
      quote:
        "Solomon's expertise in React and Next.js was instrumental in the success of our project. His attention to detail and problem-solving skills are truly impressive.",
      name: "Aisha shola",
      title: "CEO, Tech Solutions Inc.",
      image: "/aisha.jpg", // Replace with actual image path
    },
    {
      quote:
        "We were extremely pleased with the website Solomon developed for us. It's modern, fast, and has significantly improved our online presence. Highly recommended!",
      name: "David ishola",
      title: "Marketing Manager, Global Events Ltd.",
      image: "/micheal.jpg", // Replace with actual image path
    },
    {
      quote:
        "Solomon is a reliable and talented developer. He was always responsive to our feedback and delivered high-quality work within the agreed timeframe.",
      name: "Priya gift",
      title: "Founder, Creative Agency",
      image: "/gal.jpg", // Replace with actual image path
    },
    {
      quote:
        "Working with Solomon was a fantastic experience. He has a deep understanding of front-end technologies and a great ability to translate ideas into functional and beautiful web applications.",
      name: "Ben William",
      title: "CTO, Software Startup",
      image: "/abi.jpg", // Replace with actual image path
    },
    {
      quote:
        "Solomon's contribution to our team was invaluable. He is not only a skilled developer but also a great team player with excellent communication skills.",
      name: "S.O.J",
      title: "Project Lead, Innovation Labs",
      image: "/sss.jpg", // Replace with actual image path
    },
  ];

  return (
    <div className={styles.homePage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Hi, I'm Solomon</h1>
          <p className={styles.heroSubtitle}>
            A Front-End Developer Specializing in React and Next.js.
          </p>
          <div className={styles.heroButtons}>
            <Link to="/projects" className={styles.primaryButton}>
              View My Projects
            </Link>
            <Link to="/about" className={styles.secondaryButton}>
              Learn More About Me
            </Link>
          </div>
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
            <a href="mailto:robertsolomon313@gmail.com">
              <FaEnvelope className={styles.socialIcon} />
            </a>
          </div>
        </div>

        <div className={styles.heroImage}>
          <img src="/solo.png.jpeg" alt="Your image" />
        </div>
      </section>

      <section className={styles.featuredProjects}>
        <h2 className={styles.sectionTitle}>Featured Projects</h2>
        <div className={styles.projectsGrid}>
          {featuredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
        <Link to="/projects" className={styles.viewAllButton}>
          View All Projects
        </Link>
      </section>

      {/* Skills and Technologies Section */}
      <section className={styles.skills}>
        <h2 className={styles.sectionTitle}>Skills & Technologies</h2>
        <div className={styles.skillsGrid}>
          {Object.keys(skills).map((category) => (
            <div key={category} className={styles.skillCategory}>
              <h3>{category}</h3>
              <ul className={styles.skillList}>
                {skills[category].map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={styles.testimonials}>
        <h2 className={styles.sectionTitle}>Testimonials</h2>
        <div className={styles.testimonialsGrid}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={styles.testimonialCard}>
              <p className={styles.testimonialQuote}>"{testimonial.quote}"</p>
              <div className={styles.testimonialInfo}>
                {testimonial.image && (
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className={styles.testimonialImage}
                  />
                )}
                <p className={styles.testimonialName}>- {testimonial.name}</p>
                {testimonial.title && (
                  <p className={styles.testimonialTitle}>{testimonial.title}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomePage;
