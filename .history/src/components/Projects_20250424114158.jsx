import React from 'react';
import logo1 from '../assets/logo1.jpg';
import logo2 from '../assets/logo2.png';
import logo3 from '../assets/logo3.png';

const Projects = () => {
  return (
    <section className="bg-purple-700 text-white py-12 text-center">
      <h1 className="text-6xl font-bold mb-2">My <span className="text-white">Projects</span></h1>
      <p className="text-lg mb-6 text-gray-200">Go to see all my projects</p>
      <button className="bg-white text-black font-semibold px-6 py-3 rounded-xl shadow-md mb-10 transition hover:bg-gray-200">
        View Projects
      </button>

      {/* Slider de logos */}
      <div className="flex justify-center">
        <div className="flex gap-10 overflow-x-auto px-4 py-6 scrollbar-hide max-w-6xl w-full justify-center">
          <img
            src={logo1}
            alt="Project 1"
            className="w-60 h-60 object-contain bg-white p-2 rounded-xl shadow-lg"
          />
          <img
            src={logo2}
            alt="Project 2"
            className="w-60 h-60 object-contain bg-white p-2 rounded-xl shadow-lg"
          />
          <img
            src={logo3}
            alt="Project 3"
            className="w-60 h-60 object-contain bg-white p-2 rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
