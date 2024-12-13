import React from 'react';

const ProjectCard = (props) => {
    const [project] = props;

    return (
        <section id="projects" className="min-h-screen bg-neutral-50 flex flex-col items-center">
    {/* Project Card */}
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <img className="rounded-t-lg" src="https://images.unsplash.com/photo-1499673610122-01c7122c5dcb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
                <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Project 1</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Short description here</p>
                </div>
            </div>
        </section>
    );
};

export default ProjectCard;