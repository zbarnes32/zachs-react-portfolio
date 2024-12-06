import React from 'react';

const Hero = () => {
    return (
        <section id="about" className="bg-blue-950 text-white py-10 flex justify-between">
            <div className="p-8 basis-3/4">
                <h1 className="text-6xl font-bold py-2">Zachary Barnes</h1>
                <h2 className="text-3xl">Full Stack Developer</h2>
                <p className="text-neutral-200 py-4">I'm a software developer who enjoys turning ideas into functional, user-friendly web experiences. I'm passionate about learning new technologies and constantly improving my skills to become a better programmer. When I'm not coding, you'll most likely find me playing board or video games, spending quality time with family and friends, or on the golf course.</p>
            </div>
            <div className="basis-1/4 m-8">
                <img src="https://images.template.net/84867/free-coding-illustration-v6mdj.jpg" className="w-60 h-60 object-fit rounded-full" alt="coding illustration"/>
            </div>
        </section>
    );
};

export default Hero;