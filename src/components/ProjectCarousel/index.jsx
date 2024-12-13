import React from 'react';
import { useState } from 'react';
import ProjectCard from './ProjectCard';
import projects from '../projects';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';


const ProjectCarousel = () => {
    const [startIdx, setStartIdx] = useState(0);

    const projectCards = projects.slice(startIdx, startIdx + 1).map((project, idx) => (
        <ProjectCard project={project} key={idx}/>
    ));

    return (
        <div className="flex items-center">
            <button className="p-4 rounded-full bg-neutral-100"><FontAwesomeIcon icon={faChevronLeft} /></button>
            <div className="rounded-lg w-full">
                {projectCards}   
            </div>
            <button className="p-4 rounded-full bg-neutral-100"><i className="fa-solid fa-left-long"></i></button>
            <i className="fa-solid fa-left-long"></i>
        </div>
    )
}

export default ProjectCarousel;