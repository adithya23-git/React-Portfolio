import React from 'react'
import { Link } from 'react-router-dom'
import Cvbutton from './UI/Cvbutton'
import { useState } from 'react'

const Nav = () => {

  const [menuOpen,setMenuOpen] = useState(false);

  return (
    <div className='Nav'>
        <div className='navleft'>
          <img src='/assets/adhiprofile.jpg' alt='profile image' className='navimage'></img>
              <p className='navname'>ADHI</p>
        </div>

         <nav  className = 'menu'>

         <img className='menuBtn' src={menuOpen ? "/assets/Nav/closeIcon.png" : "/assets/Nav/menuIcon.png" } alt='menubtn'
          onClick={() => setMenuOpen(!menuOpen)}/>

              <ul   className={`menuitems ${menuOpen ? "menuOpen" : ""}`}   onClick={()=> setMenuOpen(false)}>
                <li><Link to="/"><button className="btn2"> <span class="spn2">Home</span></button></Link></li>
                <li><Link to="/skills"><button className="btn2"> <span class="spn2">Skills</span></button></Link></li>
                <li><Link to="/projects"><button className="btn2"> <span class="spn2">Projects</span></button></Link></li>
                <li><Link to="/experience"><button className="btn2"> <span class="spn2">Experience</span></button></Link></li>
                <li><Link to="/certificates"><button className="btn2"> <span class="spn2">Certificates</span></button></Link></li>
                <li><Link to="/contact"><button className="btn2"> <span class="spn2">Contact Me</span></button></Link></li>
                
                {/* download cv */}
                <li><a href='/assets/AdithyaResume.pdf' download="Resume.pdf"><Cvbutton/></a></li>
                
              </ul>
            </nav>
    </div>
  )
}

export default Nav


  
