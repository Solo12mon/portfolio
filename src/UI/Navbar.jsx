import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import {
  FaHome,
  FaInfoCircle,
  FaBriefcase,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navItems = [
    { to: "/homepage", label: "Home", icon: <FaHome /> },
    { to: "/about", label: "About", icon: <FaInfoCircle /> },
    { to: "/projects", label: "Projects", icon: <FaBriefcase /> },
    { to: "/contact-us", label: "Contact", icon: <FaEnvelope /> },
  ];

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/homepage" className={styles.logoLink}>
          <FaHome className={styles.logoIcon} />{" "}
          <span className={styles.logoName}>Solomon Best</span>
        </Link>
      </div>

      {/* Desktop Navigation */}
      <ul className={styles.desktopNavList}>
        {navItems.map((item, i) => (
          <li key={i} className={styles.desktopNavItem}>
            <NavLink
              to={item.to}
              className={({ isActive }) =>
                `${styles.desktopNavLink} ${isActive ? styles.active : ""}`
              }
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Icon */}
      <button className={styles.mobileNavToggle} onClick={toggleMenu}>
        {isOpen ? (
          <FaTimes className={styles.menuIcon} />
        ) : (
          <FaBars className={styles.menuIcon} />
        )}
      </button>

      {/* Background Overlay */}
      <div
        className={`${styles.overlay} ${isOpen ? styles.overlayVisible : ""}`}
        onClick={closeMenu}
      ></div>

      {/* Sliding Mobile Menu */}
      <div className={`${styles.slideMenu} ${isOpen ? styles.open : ""}`}>
        <ul className={styles.overlayNavList}>
          {navItems.map((item, i) => (
            <li key={i} className={styles.overlayNavItem}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `${styles.overlayNavLink} ${isActive ? styles.active : ""}`
                }
                onClick={closeMenu}
              >
                {item.icon} {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
