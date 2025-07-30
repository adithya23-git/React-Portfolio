import React from 'react';

import styles from './Styles/experience.module.css';
import Social from './UI/expsocial';
import { style } from 'framer-motion/client';
const Experience = () => {
    
    
      return (
        <div className={styles.expcontainer}>
          {/* Hero Section */}
          <div className={styles.herocontainer}>
           
              <h1 className={styles.heading}>Crafting Digital Experiences</h1>
              <p className={styles.description}>
              A full-stack developer passionate about building dynamic and innovative web solutions.
              </p>
           <div className={styles.sociallinks}>
             <Social/>
           </div>
          </div>

          {/* Services Section */}
          <div className={styles.service}>
            
              <h2 className={styles.servicetitle}>What I Do</h2>
              <div className={styles.services}>
                <div className={styles.ser1}>
                <img src = '/assets/experience/code.png' className={styles.webimage}></img>
                  <h3 className={styles.webtitle}>
                    Web Development
                  </h3>
                  <p className={styles.webdes}>
                    Creating responsive and performant web applications using
                    modern technologies
                  </p>
                </div>

                <div className={styles.ser2}>
                  <img src='assets/experience/ui.png'></img>
                  <h3 className={styles.uititle}>UI/UX Designer</h3>
                  <p className={styles.uides}>
                    Designing intuitive and beautiful user interfaces that
                    engage and delight
                  </p>
                </div>

              </div>
          
          </div>

          {/* Certificates Section */}       
    <div className={styles.certificatessection}>
        <h2 className={styles.certificatestitle}>Internship Certificates</h2>
        <div className={styles.certificatescontainer}>

            <div className={styles.certificatecard1}>
            <img src='assets/experience/aroma.png' alt='certificateimage'></img>
                <div className={styles.certificates1}>
                    <h3 className={styles.heading}>Frontend Developer Internship</h3>
                    <p className={styles.com}>Aroma Brand Solutions</p>
                    <p className={styles.duration}>Nov 2024 - Feb 2025</p>
                    <p className={styles.des}>Created user friendly and responsive web pages</p>
                    
                </div>
            </div>

            <div className={styles.certificatecard2}>
            <img src='assets/experience/bharath.png' alt='certificateimage'></img>
                <div className={styles.certificates2}>
                    <h3 className={styles.heading}>Web Development Internship</h3>
                    <p className={styles.com}>Bharath Intern</p>
                    <p className={styles.duration}>Mar 2024 - April 2024</p>
                    <p className={styles.des}>I specialize in building responsive websites that adapt seamlessly to all devices, ensuring an optimal user experience. </p>
                   
                </div>
            </div>
        </div>
    </div>



  </div>
      );
}

export default Experience