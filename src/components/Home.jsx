import React, { useEffect, useState } from "react";
import styles from "./Styles/hero.module.css";
import SocialLinks from "./UI/SocialLinks";

function Home() {
  const roles = ["MERN Fullstack Developer", "ServiceNow Developer"];
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const speed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (isDeleting) {
        setText(currentRole.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      } else {
        setText(currentRole.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }

      // Switch to next role after deleting
      if (!isDeleting && charIndex === currentRole.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex, roles]);

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Adithya</h1>
        <p className={styles.description}>I'm a <span className={styles.typing}>{text}</span></p>
        <div className={styles.sociallinks}>
          <SocialLinks />
        </div>
      </div>

      <div className={styles.imgcontainer}>
        <img
          src="/assets/adhi.jpg"
          alt="Profile"
          className={styles.heroimg}
        />
      </div>
    </section>
  );
}

export default Home;
