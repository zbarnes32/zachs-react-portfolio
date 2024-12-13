import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectCard from './components/ProjectCarousel/ProjectCard';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import ProjectCarousel from './components/ProjectCarousel';




function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutMe />
      <div className="flex flex-col h-screen items-center justify-center bg-gradient-to-r from-blue-900 to-blue-950">
        <div className="container mx-4">
          <h2 className="text-5xl text-center mt-2 mb-16 text-neutral-50">My Projects</h2>
          <ProjectCarousel />
        </div>
      </div>
      {/* <Contact /> */}
    </div>
  );
}

export default App;
