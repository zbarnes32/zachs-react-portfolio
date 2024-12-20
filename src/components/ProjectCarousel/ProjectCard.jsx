import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';


const ProjectCard = (props) => {
    const { project } = props;

    return (
        <section id="projects" className="flex justify-center">
    {/* Project Card */}
            <div className="relative">
                <img className="border-2 border-neutral-50 rounded-lg h-[600px] w-[1200px] object-fit" src={project.image} alt={`Screenshot of the ${project.name} project.`} />
                <div className="flex justify-between items-center rounded-b-lg absolute m-[2px] bottom-0 w-full bg-blue-950 bg-opacity-75 p-3">
                    <div className="flex flex-row basis-3/4">
                        <div className="flex flex-col">
                            <h5 className="mb-2 text-3xl font-bold text-neutral-50">{project.name}</h5>
                            <p className="mb-3 font-normal text-neutral-200">{project.outline}</p>
                                <div className="text-neutral-50 text-xl">
                                    <a href="">
                                        <FontAwesomeIcon icon={faGlobe} className="mr-2" />
                                    </a>
                                    <a href={project.github}>
                                        <FontAwesomeIcon icon={faGithub} className="mr-2"/>
                                    </a>
                                </div>
                        </div>
                    </div>
                    <div className="p-2">
                        <div className="flex justify-center flex-wrap basis-1/4">{project.languages.map((language, idx) => ( <div key={idx} className="mx-2 my-2 py-2 px-4 rounded-full text-neutral-50 bg-cyan-700 text-sm">{language}</div>
                    ))}</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectCard;