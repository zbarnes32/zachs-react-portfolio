import React from 'react';
import skills from './skills';

const AboutMe = () => {
    const skillList = skills.map((skill, idx) => <img src={skill.icon} alt={`${skill.name}`} title={`${skill.name}`}className="rounded-lg w-12 h-12 md:w-24 md:h-24 lg:h-28 lg:w-28 xl:w-32 xl:h-32 m-2" />);


    return (
        <section id="about" className="px-10 py-10 md:px-20 bg-neutral-100 text-blue-950 block xl:flex xl:justify-between">
            <div className="container md:my-8 mx-auto text-center xl:basis-2/3 md:text-xl lg:text-2xl">
                <h2 className="text-5xl mb-8">About Me</h2>
                <p>During my time at Codeworks, I had the opportunity to immerse myself in full-stack software development, where I honed my skills in JavaScript, React, Node.js, and other modern technologies. The intensive, hands-on curriculum helped me develop a strong foundation in both front-end and back-end development, as well as learn essential tools like Git, SQL, and test-driven development (TDD). The collaborative nature of the program, along with the real-world projects I worked on, strengthened my problem-solving abilities and prepared me for the fast-paced challenges of the tech industry.</p>
                <br />

                <p>Before transitioning into software development, I worked in banking, where I gained experience in customer service, problem solving, working within a team. My background in banking taught me the importance of teamwork, being detailed-oriented, and adaptability. This experience has been quite valuable when transitioning into software development, as it has given me a unique perspective on approaching problems, working with cross-functional teams, and staying focused on delivering results.</p>
                <br />

                <p className="mb-8 md:mb-10">Outside of coding, I enjoy playing board or video games, playing and watching sports, and spending quality time with family and friends. I believe in maintaining a balanced lifestyle, and I enjoy exploring new hobbies and pushing myself outside my comfort zone. Whether it’s learning new technologies, traveling to new places, or experimenting with new recipes, I’m always eager to expand my horizons and make the most of my personal time.</p>
            </div>
            <div className="xl:basis-1/3 flex flex-col md:my-8">
                <h2 className="text-5xl text-center mb-4 xl:mb-16">My Toolkit</h2>
                <div className="flex justify-center">
                    <div className="flex flex-wrap justify-center mx-4 xl:aspect-square">{skillList}</div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;