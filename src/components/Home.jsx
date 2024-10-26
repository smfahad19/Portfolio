import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import MyPicture from '../assets/projects/my pic.png'; // Import your picture here

const Home = () => {
  return (
    <div
      name='home'
      className='w-full h-screen bg-gradient-to-r from-[#0a192f] to-[#1a253a] flex justify-center items-center transition-all duration-1000 ease-in-out animate-bgPulse'
    >
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#ff7b72] animate-fadeIn transition duration-700 ease-in-out transform hover:-translate-y-1'>
          Hi, my name is
        </p>
        
        {/* Flex container for name and image */}
        <div className='flex items-center justify-between'>
          <h1 className='text-4xl sm:text-7xl font-bold animate-typewriter overflow-hidden whitespace-nowrap'>
            <span className='bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent'>
              Syed Muhammad Fahad
            </span>
          </h1>

          {/* Larger, Beautiful Image on the Right Side */}
          <div className='relative w-60 h-60 overflow-hidden ml-8 rounded-full shadow-lg'>
            <img
              src={MyPicture}
              alt="My Picture"
              className='w-full h-full object-cover rounded-full transform transition-transform duration-500 hover:scale-105'
            />
            <div className='absolute top-0 left-0 w-full h-full bg-white opacity-20 transform scale-y-[-1]'></div>
          </div>
        </div>

        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0] transition-all duration-700 ease-in-out hover:text-[#ff7b72] hover:scale-110'>
          I'm a MERN Stack Developer.
        </h2>
        
        <p className='text-[#8892b0] py-4 max-w-[700px] transition duration-500 ease-in-out hover:text-[#ccd6f6]'>
          I’m a Mern-stack developer specializing in building (and occasionally designing)
          exceptional digital experiences. Currently, I’m focused on building responsive Mern-stack web applications.
        </p>
        
        {/* Animated Button */}
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center transition duration-500 ease-in-out bg-gradient-to-r from-[#ff7b72] to-[#e85d9e] hover:from-[#e85d9e] hover:to-[#ff7b72] hover:border-[#ff7b72]'>
            View Work
            <span className='group-hover:rotate-90 transition duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
