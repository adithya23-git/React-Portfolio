import React from 'react';
import styles from './Styles/projects.module.css';
import ProjectButton from './UI/projectbutton';
import Contact from './UI/projectcontact';
import ProjectView from './UI/projectviewproject';
import { Link } from 'react-router-dom'

    function Projects() {
      return (
        <div className={styles.projectcontainer}>
          
         
         <div className={styles.projectquote}>
            <h1 className={styles.quotehead}>Turning <span>Ideas</span> into <span className={styles.reality}>Reality</span></h1>
            <p className={styles.quotepara}>A showcase of my projects and creative work in web development, design, and more</p>
            <div className={styles.topbutton}>
                 <a href='#projectsection'><ProjectButton/></a>
                 <Link to="/contact"> <Contact/> </Link>
            </div>
         </div>
   

          {/* Project cards section*/}
          <div className={styles.cardscontainer} id='projectsection'>

          <h1 className={styles.projecttitle}>PROJECTS</h1>

          <div className={styles.cards}>
            
                        <div className={styles.project1card}>
                        <img src='assets/projects/mealmap.png' alt='Overview Image'></img>
                            <div className={styles.project1content}>
                                <h3 className={styles.heading}>MealMap</h3>
                                <p className={styles.des}>A modern web application that connects food donors with receivers to reduce 
                                food waste</p>
                                <div className={styles.spancon}>
                                 <span>HTML</span><span>CSS</span><span>JS</span>
                                 <span>Node.js</span>
                                 <span>MongoDB</span>
                                 <span>Express.js</span>
                                </div>
                                <div className={styles.viewproject}> 
                                <a href='https://github.com/adithya23-git/MealMap' target='blank'><ProjectView></ProjectView></a>
                                <a href='https://mealmap-1zd8.onrender.com' className={styles.tryit} target='blank'>Try It</a>
                                </div>
                            </div>
                        </div>
            
                        <div className={styles.project2card}>
                        <img src='assets/projects/hackathon.png' alt='Overview Image'></img>
                            <div className={styles.project2content}>
                                <h3 className={styles.heading}>Hackathon Platform</h3>
                                
                                <p className={styles.des}>The website features an organizer portal with sign-up/log-in and event 
                                management, and a Participant Portal for event discovery and registration. </p>
                                <span>HTML</span><span>CSS</span><span>JS</span>
                                <span>Node.js</span>
                                <span>MongoDB</span>
                                 <span>Express.js</span>
                                 <div className={styles.viewproject}> 
                                <a href='https://github.com/adithya23-git/Hackathon-Website' target='blank'><ProjectView></ProjectView></a>
                                 <a href='https://hackathon-website-kyyb.onrender.com/firstpage/' className={styles.tryit} target='blank'>Try It</a>
                                </div>
                            </div>
                        </div>

                        <div className={styles.project3card}>
                        <img src='assets/projects/events.png' alt='Overview Image'></img>
                            <div className={styles.project3content}>
                                <h3 className={styles.heading}>Event Webpage</h3>
                               
                                <p className={styles.des}>Designed a responsive event webpage using HTML, CSS, and JavaScript to showcase event details with an engaging user interface.</p>
                                <span>HTML</span><span>CSS</span><span>JS</span>
                                 <div className={styles.viewproject}> 
                                <a href='https://github.com/adithya23-git/Event-Webpage' target='blank'><ProjectView></ProjectView></a>
                                </div>
                               
                            </div>
                        </div>

                        <div className={styles.project4card}>
                        <img src='assets/projects/netflix.png' alt='Overview Image'></img>
                            <div className={styles.project4content}>
                                <h3 className={styles.heading}>Netflix Homepage</h3>
                               
                                <p className={styles.des}>Designed a responsive Netflix sign-up page using HTML, CSS, and JavaScript, replicating the original UI.</p>
                                <span>HTML</span><span>CSS</span><span>JS</span>

                                <div className={styles.viewproject}> 
                                <a href='https://github.com/adithya23-git/Netflix-logo' target='blank'><ProjectView></ProjectView></a>
                                </div>

                            </div>
                        </div>

                        <div className={styles.project5card}>
                        <img src='assets/projects/stock.png' alt='Overview Image'></img>
                            <div className={styles.project5content}>
                                <h3 className={styles.heading}>Stock Market</h3>
                
                                <p className={styles.des}>Created a responsive stock market dashboard frontend with interactive charts and real-time data visuals.</p>
                                <span>HTML</span><span>CSS</span><span>JS</span>  <span>Chart.js</span>

                                <div className={styles.viewproject}> 
                                <a href='https://github.com/adithya23-git/Stock-Market-Dashboard' target='blank'><ProjectView></ProjectView></a>
                                </div>
                            </div>
                        </div>


                        <div className={styles.project6card}>
                        <img src='assets/projects/calculator.png' alt='Overview Image'></img>
                            <div className={styles.project6content}>
                                <h3 className={styles.heading}>Calculator App</h3>
                                <p className={styles.des}>I built a fully functional calculator capable of performing basic arithmetic operations. It features a clean user interface for seamless user interaction.</p>
                                <span>HTML</span><span>CSS</span><span>JS</span>
                                <div className={styles.viewproject}> 
                                <a href='' target='blank'><ProjectView></ProjectView></a>
                                </div>
                            </div>
                        </div>
                  
                
                </div>

          </div>

        </div>
      );
    }

    export default Projects;
