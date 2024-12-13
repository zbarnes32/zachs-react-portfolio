import React from 'react';

const ProjectCard = (props) => {
    const { project } = props;

    return (
        <section id="projects" className="flex justify-center">
    {/* Project Card */}
            <div className="relative">
                <img className="border-2 border-neutral-50 rounded-lg h-[600px] w-[1200px] object-fit" src={project.image} alt={`Screenshot of the ${project.name} project.`} />
                <div className="rounded-b-lg absolute m-[2px] bottom-0 w-full bg-blue-950 bg-opacity-75 p-5">
                    <h5 className="mb-2 text-3xl font-bold text-neutral-50">{project.name}</h5>
                    <p className="mb-3 font-normal text-neutral-200">{project.outline}</p>
                    <div className="p-2">
                        <div className="flex justify-end">{project.languages.map((language, idx) => ( <div key={idx} className="mx-2 py-2 px-4 rounded-full text-blue-950 bg-cyan-100 text-sm">{language}</div>
                    ))}</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectCard;