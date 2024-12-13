import React from 'react';
import { useState } from 'react';
import ProjectCard from './ProjectCard';
import projects from '../projects';

const ProjectCarousel = () => {
    const [startIdx, setStartIdx] = useState(0);

    const projectCards = projects.slice(startIdx, startIdx + 1).map((project, idx) => (
        <ProjectCard project={project} key={idx}/>
    ));

    return (
        <div className="rounded-lg w-full">
           {projectCards}   
        </div>
    )
}

export default ProjectCarousel;