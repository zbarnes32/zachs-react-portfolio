import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-blue-950 text-white py-4 w-full fixed top-0 left-0">
            <div className="container mx-auto flex justify-end">
                <ul className="flex space-x-4 mr-4">
                    <li className="mx-2"><a href="#about" className="hover:text-blue-200">About</a></li>
                    <li className="mx-2"><a href="#projects" className="hover:text-blue-200">My Projects</a></li>
                    <li className="mx-2"><a href="#contact" className="hover:text-blue-200">Contact Me</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;