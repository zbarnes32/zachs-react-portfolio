import React from 'react';
import { useState } from 'react';
import ProjectCard from './ProjectCard';
import projects from '../projects';
import ProjectAccordionCard from './ProjectAccordionCard.jsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';


const ProjectCarousel = () => {
    const [startIdx, setStartIdx] = useState(0);

    const projectCards = projects.slice(startIdx, startIdx + 1).map((project, idx) => (
        <ProjectCard project={project} key={idx}/>
    ));

    const accordionCards = projects.map((project, idx) => (
        <ProjectAccordionCard project={project} key={idx} />
    ))

    return (
    <div className="flex md:items-center items-start">
{/* Project Accordion List (Mobile view) */}
        <div className="md:hidden max-w-md mx-auto mt-10">
            {accordionCards}
        </div>

{/* Project Carousel (Medium screens and above) */}
        <div className="hidden md:flex md:items-center md:justify-center">
            <button 
                className="px-4 py-2 mx-4 rounded-full bg-neutral-100 text-2xl text-blue-950 hover:bg-neutral-300"
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
                className="px-4 py-2 mx-4 rounded-full bg-neutral-100 text-2xl text-blue-950 hover:bg-neutral-300"
                onClick={() => {
                    if (startIdx < projects.length - 1){
                        setStartIdx(startIdx + 1);
                    }
                }}
                >
                <FontAwesomeIcon icon={faChevronRight} />
            </button>   
        </div>
    </div>
    )
}

export default ProjectCarousel;