import React, { useState } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/navbar'
import Home from './components/home-section'
import AboutMe from './components/about-section'
import Project from './components/projects'
import Contacts from './components/contacts'
import '@fontsource/montserrat'
import Links from './components/links';
import DropGrid from './components/anime';


function App() {
  return (
    <div style={{ fontFamily: 'Montserrat, sans-serif' }}>
      <div className='fixed z-20 right-1 h-screen flex justify-center items-end'><Links/></div>
    <Router>
    <Navbar />
    <section id="home-section">
      <Home />
    </section>
    <section id="about-section">
    <AboutMe/>
    </section>
    <section id="projects-section">
    <Project/>
    </section>
    <section id="contacts-section">
    <Contacts />
    </section>
    </Router>
    </div>
  )
}

export default App
