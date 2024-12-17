"use client";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.iconsContainer}>
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/emiliano-de-biasi-92b202236/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin className={styles.icon} />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/Emilianowav"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub className={styles.icon} />
        </a>

        {/* Correo */}
        <a
          href="mailto:emidbiasi@gmail.com"
          aria-label="Correo Electrónico"
        >
          <FaEnvelope className={styles.icon} />
        </a>
      </div>

      <p className={styles.footerText}>
        © {new Date().getFullYear()} - Diseñado y desarrollado por Emiliano Di Biasi
      </p>
    </footer>
  );
};

export default Footer;
