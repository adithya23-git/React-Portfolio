import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Home from './components/Home';
import Nav from './components/navbar';
import Projects from './components/Projects';
import Skills from './components/skills';

import Footer from './components/footer';

    function App() {
      return (
        <div className="app-container">
          <div className='header'>
             <Nav />
          </div>
        

          <div className='main'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path='/skills' element = {<Skills/>} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/certificates" element={<Certificates />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div> 
     
         <Footer/>
          
        </div>
      );
    }

    export default App;
