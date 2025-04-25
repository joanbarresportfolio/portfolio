import React from 'react';

const Projects = () => {
  return (
    <section className="py-20 bg-white text-center px-6 lg:px-20">
      <h1 className="text-4xl lg:text-5xl font-bold mb-4">
        My <span className="text-purple-500">Projects</span>
      </h1>
      <p className="text-lg text-gray-400 mb-6">
        Go to see all my projects
      </p>
      <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl shadow-md mb-10">
        View Projects
      </button>

      {/* Slider de logos */}
      <div className="overflow-x-auto whitespace-nowrap flex gap-6 px-2 py-4 scrollbar-hide">
        <img
          src="/src/assets/logo1.png"
          alt="Project 1"
          className="inline-block w-24 h-24 object-contain rounded-xl shadow-md"
        />
        <img
          src="/src/assets/logo2.png"
          alt="Project 2"
          className="inline-block w-24 h-24 object-contain rounded-xl shadow-md"
        />
        <img
          src="/src/assets/logo3.png"
          alt="Project 3"
          className="inline-block w-24 h-24 object-contain rounded-xl shadow-md"
        />
        {/* Agrega más logos según necesites */}
      </div>
    </section>
  );
};

export default Projects;
