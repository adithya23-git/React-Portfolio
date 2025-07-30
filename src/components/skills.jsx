import React from "react";
import style from "./Styles/skills.module.css";
import Skillsbutton from "./UI/skillsbutton";

const skills = () => {
  return (
    <>
   <div className={style.maincontainer}>  

   <div className={style.skilltop}>
    <p className={style.mainquote}>Bridging <span>Logic</span> and <span>Design</span></p>
    <p className={style.miniquote}>A display of technical proficiencies in full-stack development, highlighting core strengths in building robust, scalable, and user-focused web applications.</p>
    <a href="#skillscontainer" className={style.skillbtn}><Skillsbutton/></a>
   </div>
  
   <div className={style.minicon}  id="skillscontainer">
    <h1 className={style.skillheading}>SKILLS</h1>
    <div className={style.skillscontainer}>

   
      <div className={style.frontend}>
        <p className={style.frontendtitle}>Frontend Skills</p>
        <div className={style.html}>
          <img src="./assets/skills/html.jpg" alt="htmlimage"></img>
        </div>
        <div className={style.css}>
          <img src="./assets/skills/css.png" alt="cssimage"></img>
        </div>
        <div className={style.bootstrap}>
          <img src="./assets/skills/bootstrap.jpg" alt="htmlimage"></img>
        </div>
        <div className={style.js}>
          <img src="./assets/skills/js.png" alt="jsimage"></img>
        </div>
        <div className={style.react}>
          <img src="./assets/skills/react.jpg" alt="htmlimage"></img>
        </div>
      </div>

      <div className={style.backend}>
        <p className={style.backendtitle}>Backend Skills</p>
        <div className={style.nodejs}>
          <img src="./assets/skills/node.png" alt="htmlimage"></img>
        </div>
        <div className={style.expressjs}>
          <img src="./assets/skills/expressjs.png" alt="htmlimage"></img>
        </div>
      </div>

      <div className={style.database}>
        <p className={style.databasetitle}>Database Skills</p>
        <div className={style.mongodb}>
          <img src="./assets/skills/mongodb.png" alt="htmlimage"></img>
        </div>
        <div className={style.sql}>
          <img src="./assets/skills/sql.png" alt="htmlimage"></img>
        </div>
      </div>

      <div className={style.programminglanguages}>
        <p className={style.programmingtitle}>Programming Languages</p>
        <div className={style.java}>
          <img src="./assets/skills/java.jpg" alt="htmlimage"></img>
        </div>
        <div className={style.python}>
          <img src="./assets/skills/python.png" alt="htmlimage"></img>
        </div>
        <div className={style.c}>
          <img src="./assets/skills/c.png" alt="htmlimage"></img>
        </div>
      </div>
    </div>
    </div>

    </div> 
    </>


  );
};

export default skills;
