import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-blue-800 text-white py-4">
            <div className="container mx-auto flex justify-end">
                <ul className="flex space-x-4">
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">My Projects</a></li>
                    <li><a href="#contact">Contact Me</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;