import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectCard from './components/ProjectCarousel/ProjectCard';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import ProjectCarousel from './components/ProjectCarousel';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutMe />
      <div className="flex flex-col h-[925px] md:h-screen items-center justify-start md:justify-center bg-gradient-to-r from-blue-900 to-blue-950">
        <div className="container md:mx-4">
          <h2 className="text-5xl text-center mt-8 md:mt-32 text-neutral-50">My Projects</h2>
        </div>
        <div className="p-4">
          <ProjectCarousel />
        </div>
      </div>
      {/* <Contact /> */}
    </div>
  );
}

export default App;
