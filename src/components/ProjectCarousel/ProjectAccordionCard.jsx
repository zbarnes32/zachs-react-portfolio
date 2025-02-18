import React from 'react';
import {useState} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';


const ProjectAccordionCard = (props) => {
    const { project } = props;
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section id="projects" className="flex justify-center m-2">
    {/* Project Accordion Card */}
            <div className="">
                <button 
                    className={`flex justify-between items-center w-full p-4 bg-neutral-100 hover:bg-neutral-200 ${isOpen ? "rounded-t-lg" : "rounded-lg"}`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                        <h5 className="font-bold">{project.name}</h5>
                        <FontAwesomeIcon icon={faChevronDown} className={`transition-transform duration-200 ${isOpen ? "rotate-180" : "rotate-0"}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[360px] p-4 bg-neutral-200 rounded-b-lg" : "max-h-0"}`}>
                    <p>{project.outline}</p>
                    <div className="p-2">
                        <div className="flex justify-center flex-wrap">{project.languages.map((language, idx) => ( <div key={idx} className="mx-2 my-2 py-2 px-4 rounded-full text-neutral-50 bg-cyan-600 text-sm">{language}</div>
                    ))}</div>
                    </div>
            </div>
        </div>
        </section>
    );
};

export default ProjectAccordionCard;