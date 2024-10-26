import React from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300 pt-20'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
            Skills
          </p>
          <p className='py-4'>// These are the technologies I've worked with</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          {[
            { src: HTML, alt: "HTML icon", name: "HTML" },
            { src: CSS, alt: "CSS icon", name: "CSS" },
            { src: JavaScript, alt: "JavaScript icon", name: "JavaScript" },
            { src: ReactImg, alt: "React icon", name: "React" },
            { src: GitHub, alt: "GitHub icon", name: "GitHub" },
            { src: Node, alt: "Node.js icon", name: "Node.js" },
            { src: Mongo, alt: "MongoDB icon", name: "MongoDB" },
            { src: Tailwind, alt: "Tailwind icon", name: "Tailwind" },
          ].map((skill, index) => (
            <div
              key={index}
              className='shadow-md shadow-[#040c16] transition-transform duration-500 hover:scale-110 transform hover:bg-pink-600 p-4 rounded-lg'
            >
              <img className='w-20 mx-auto transition duration-300 transform hover:scale-125' src={skill.src} alt={skill.alt} />
              <p className='my-4 text-lg font-semibold transition-colors duration-300 hover:text-white'>
                {skill.name.toUpperCase()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
