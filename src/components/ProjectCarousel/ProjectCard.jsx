import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';


const ProjectCard = (props) => {
    const { project } = props;

    return (
        <section id="projects" className="flex justify-center m-2">
            {/* Project Card */}
            <div className="relative border-2 border-neutral-50 rounded-lg">
                <img className="rounded-md md:w-[600px] lg:w-[800px] h-[360px] md:h-[560px] object-fit" src={project.image} alt={`Screenshot of the ${project.name} project.`} />
                <div className="rounded-b-md absolute bottom-0 w-full bg-blue-950 bg-opacity-90 p-3">
                    <div className="flex flex-col items-center">
                        <div className="flex items-center">
                            <div>
                                <h5 className="mb-2 text-3xl font-bold text-neutral-50 mx-4">{project.name}</h5>
                            </div>
                            <div className="text-neutral-50 text-xl">
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="">
                                    {project.link && (<FontAwesomeIcon icon={faGlobe} className="mr-2" />)}
                                </a>
                                <a href={project.github}>
                                    <FontAwesomeIcon icon={faGithub} className="mr-2" />
                                </a>
                            </div>
                        </div>
                        <div>
                            <p className="mb-3 font-normal text-sm lg:text-lg text-neutral-200">{project.outline}</p>  
                        </div>
                        <div className="hidden md:flex md:justify-center md:flex-wrap">{project.languages.map((language, idx) => (<div key={idx} className="mx-2 my-2 py-2 px-4 rounded-full text-neutral-50 bg-cyan-600 text-sm lg:text-lg">{language}</div>
                        ))}</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectCard;