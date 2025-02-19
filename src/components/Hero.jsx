import React from 'react';

const Hero = () => {
    return (
        <section id="hero" className="bg-gradient-to-r from-blue-900 to-blue-950 text-white h-screen px-6 md:px-20 flex justify-between items-center">
            <div className="md:mx-8 md:basis-1/2">
                <h1 className="text-6xl font-bold pt-4 pb-2">Zachary Barnes</h1>
                <h2 className="text-3xl py-2 md:py-0">Full Stack Developer</h2>
                <p className="text-neutral-200 pt-6 md:text-xl lg:text-2xl">I'm a software developer who enjoys turning ideas into functional, user-friendly web experiences. I'm passionate about learning new technologies and constantly improving my skills to become a better programmer. When I'm not coding, you'll most likely find me playing board or video games, spending quality time with family and friends, or on the golf course.</p>
            </div>
            <div className="hidden md:block md:basis-1/3">
                <img src="https://images.template.net/84867/free-coding-illustration-v6mdj.jpg" className="xl:w-80 xl:h-80 object-fit rounded-full" alt="coding illustration"/>
            </div>
        </section>
    );
};

export default Hero;