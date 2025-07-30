import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import styles from './Styles/footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footermain}>
      <div >
        <p >
          © {new Date().getFullYear()} Adithya | All rights reserved.
        </p>
        <div >
          <a
            href="https://www.linkedin.com/in/n-d-adithya-4959a0282/"
            target="_blank"
            rel="noopener noreferrer"
     
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/adithya23-git"
            target="_blank"
            rel="noopener noreferrer"
         
          >
            <FaGithub />
          </a>
          <a
            href="mailto:adithya02030@example.com"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
