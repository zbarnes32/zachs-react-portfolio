import React from 'react';

const Projects = () => {
    return (
        <section id="projects" className="py-10 bg-neutral-50 flex justify-center">
            <div className="container mx-4">
                <h2 className="text-5xl text-center mt-2 mb-16 text-blue-950">My Projects</h2>
                <div className="flex justify-between grid grid-cols-3 gap-6">
                    {/* Project Card */}
                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <img className="rounded-t-lg" src="https://images.unsplash.com/photo-1499673610122-01c7122c5dcb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
                        <div className="p-5">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Project 1</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Short description here</p>
                        </div>
                    </div>
                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <img className="rounded-t-lg" src="https://images.unsplash.com/photo-1499673610122-01c7122c5dcb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
                        <div className="p-5">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Project 2</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Short description here</p>
                        </div>
                    </div>
                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <img className="rounded-t-lg" src="https://images.unsplash.com/photo-1499673610122-01c7122c5dcb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
                        <div className="p-5">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Project 3</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Short description here</p>
                        </div>
                    </div>
                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <img className="rounded-t-lg" src="https://images.unsplash.com/photo-1499673610122-01c7122c5dcb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
                        <div className="p-5">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Project 4</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Short description here</p>
                        </div>
                    </div>
                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <img className="rounded-t-lg" src="https://images.unsplash.com/photo-1499673610122-01c7122c5dcb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
                        <div className="p-5">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Project 5</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Short description here</p>
                        </div>
                    </div>
                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <img className="rounded-t-lg" src="https://images.unsplash.com/photo-1499673610122-01c7122c5dcb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
                        <div className="p-5">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Project 6</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Short description here</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;