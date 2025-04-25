import React from 'react';
import logo1 from '../assets/logo1.jpg';
import logo2 from '../assets/logo2.png';
import logo3 from '../assets/logo3.png';

const Projects = () => {
  return (
    <section className="bg-purple-700 text-white py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        
        {/* Texto a la izquierda */}
        <div className="flex-1 text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-6xl font-bold mb-4">
            My <span className="text-white">Projects</span>
          </h1>
          <p className="text-lg mb-6 text-gray-200">
            Go to see all my projects
          </p>
          <button className="bg-white text-black font-semibold px-6 py-3 rounded-xl shadow-md transition hover:bg-gray-200">
            View Projects
          </button>
        </div>

        {/* Imágenes a la derecha */}
        <div className="flex-1 flex gap-8 justify-center md:justify-end">
          <img
            src={logo1}
            alt="Project 1"
            className="w-40 h-40 object-contain bg-white p-2 rounded-xl shadow-lg"
          />
          <img
            src={logo2}
            alt="Project 2"
            className="w-40 h-40 object-contain bg-white p-2 rounded-xl shadow-lg"
          />
          <img
            src={logo3}
            alt="Project 3"
            className="w-40 h-40 object-contain bg-white p-2 rounded-xl shadow-lg"
          />
        </div>

      </div>
    </section>
  );
};

export default Projects;
