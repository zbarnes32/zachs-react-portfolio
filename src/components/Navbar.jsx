import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-gradient-to-r from-blue-900 to-blue-950 text-white py-4 w-full fixed top-0 left-0 flex justify-between items-center h-16 shadow-md">
            <div className="mx-4 justify-start">
                <div className="text-3xl"><a className="border border-neutral-100 p-2 rounded-full hover:text-cyan-400 hover:border hover:border-cyan-400" href="#hero">ZB</a></div>
                {/* Logo option: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7-AIH9dNQ3ykA0g59brD_We_LN69Osktg7qf8VRZB3XIEYlxYuAP3nCsGkXG4LNf86Lk&usqp=CAU */}
            </div>
            <div className="container mx-4 flex justify-end">
                <ul className="flex items-center space-x-4">
                    <li className="mx-2"><a href="#about" className="hover:text-blue-200">About Me</a></li>
                    <li className="mx-2"><a href="#projects" className="hover:text-blue-200">My Projects</a></li>
                    {/* <li className="mx-2"><a href="#contact" className="hover:text-blue-200">Contact Me</a></li> */}
                </ul>
            </div>
                    <button className="bg-cyan-600 mx-8 px-4 py-2 rounded-full w-40 hover:bg-blue-950 hover:text-cyan-400 hover:border-2 hover:border-cyan-600"><a href="#contact">Get In Touch</a></button>
        </nav>
    );
};

export default Navbar;