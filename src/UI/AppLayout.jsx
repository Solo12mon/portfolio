import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../UI/Navbar";
import Footer from "../UI/Footer";
import styles from "./AppLayout.module.css"; // Or your preferred styling method

function AppLayout() {
  return (
    <div className={styles.layoutContainer}>
      <header className={styles.header}>
        <Navbar /> {/* Your navigation bar */}
      </header>

      <main className={styles.mainContent}>
        <Outlet />
      </main>

      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
}

export default AppLayout;
