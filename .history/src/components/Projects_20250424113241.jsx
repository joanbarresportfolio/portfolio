import React from 'react';

const Projects = () => {
  return (
    <section className="py-20 bg-purple-700 text-center px-6 lg:px-20 text-white">
      <h1 className="text-4xl lg:text-5xl font-bold mb-4">
        My <span className="text-white-300">Projects</span>
      </h1>
      <p className="text-lg text-purple-100 mb-6">
        Go to see all my projects
      </p>
      <button className="bg-white hover:bg-white text-black font-semibold px-6 py-3 rounded-xl shadow-md mb-10 transition">
        View Projects
      </button>

      {/* Slider de logos */}
      <div className="flex justify-center">
        <div className="flex gap-10 overflow-x-auto px-4 py-6 scrollbar-hide max-w-5xl w-full justify-center">
          <img
            src="/src/assets/logo1.png"
            alt="Project 1"
            className="w-60 h-60 object-contain bg-white p-2 rounded-xl shadow-lg"
          />
          <img
            src="/src/assets/logo2.png"
            alt="Project 2"
            className="w-60 h-60 object-contain bg-white p-2 rounded-xl shadow-lg"
          />
          <img
            src="/src/assets/logo3.png"
            alt="Project 3"
            className="w-60 h-60 object-contain bg-white p-2 rounded-xl shadow-lg"
          />
          {/* Agrega más logos si deseas */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
