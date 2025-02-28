import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-gradient-to-r from-blue-900 to-blue-950 text-white w-full sm:py-4 sm:px-3 fixed z-10 top-0 left-0 md:h-20 shadow-md sm:flex sm:justify-between sm:items-center">
            <div className="flex justify-between items-center py-3 px-4 sm:p-0">
                <div>
                    <div className="text-3xl"><a className="border border-neutral-100 p-2 rounded-full hover:text-cyan-400 hover:border hover:border-cyan-400" href="#hero">ZB</a>
                    </div>
                    {/* Logo option: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7-AIH9dNQ3ykA0g59brD_We_LN69Osktg7qf8VRZB3XIEYlxYuAP3nCsGkXG4LNf86Lk&usqp=CAU */}
                </div>
                <div className="sm:hidden">
                    {isOpen ? <FontAwesomeIcon icon={faXmark} className="h-8" onClick={toggleNavbar} /> : <FontAwesomeIcon icon={faBars} className="h-8" onClick={toggleNavbar} />}
                </div>
            </div>
            <div className="container mx-4">
                <ul className={`${isOpen ? 'block' : 'hidden'} pt-4 pb-2 sm:flex justify-end`}>
                    <li className="block py-2 md: py-0 md:mx-2 font-bold"><a href="#about" className="hover:text-blue-200">About Me</a></li>
                    <li className="block py-2 md: py-0 md:mx-2 font-bold"><a href="#projects" className="hover:text-blue-200">My Projects</a></li>
                    <li className="block py-2 md:mx-2 py-0 md:hidden font-bold"><a href="#contact" className="hover:text-blue-200">Get In Touch</a></li>
                    {/* <li className="mx-2"><a href="#contact" className="hover:text-blue-200">Contact Me</a></li> */}
                </ul>
            <button className="hidden block bg-cyan-600 mx-8 px-4 py-2 rounded-full w-40 hover:bg-blue-950 hover:text-cyan-400 hover:border-2 hover:border-cyan-600"><a href="#contact">Get In Touch</a></button>
            </div>
        </nav>
    );
};

export default Navbar;