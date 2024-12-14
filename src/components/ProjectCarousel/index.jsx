import React from 'react';
import { useState } from 'react';
import ProjectCard from './ProjectCard';
import projects from '../projects';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';


const ProjectCarousel = () => {
    const [startIdx, setStartIdx] = useState(0);

    const projectCards = projects.slice(startIdx, startIdx + 1).map((project, idx) => (
        <ProjectCard project={project} key={idx}/>
    ));

    return (
        <div className="flex items-center">
            <button 
                className="px-4 py-2 rounded-full bg-neutral-100 text-2xl text-blue-950 hover:bg-neutral-300"
                onClick={() => {
                    if (startIdx > 0){
                        setStartIdx(startIdx - 1);
                    }
                 }}
            >
                <FontAwesomeIcon icon={faChevronLeft} /></button>
            <div className="rounded-lg w-full duration-1000 ease-in-out">
                {projectCards}   
            </div>
            <button 
                className="px-4 py-2 rounded-full bg-neutral-100 text-2xl text-blue-950 hover:bg-neutral-300"
                onClick={() => {
                    if (startIdx < projects.length - 1){
                        setStartIdx(startIdx + 1);
                    }
                }}
                >
                <FontAwesomeIcon icon={faChevronRight} />
            </button>
                
        </div>
    )
}

export default ProjectCarousel;