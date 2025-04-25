
import React from 'react';

const Projects = () => {
  return (
    <section className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 lg:px-20 py-12 gap-100 bd-white-100 border">
    <div className="w-full lg:w-1/2 text-center lg:text-left">
        <h1 className="text-4xl lg:text-5xl font-bold mb-4">
        My <span className="text-purple-500">Projects</span>
        </h1>
        <p className="text-lg text-gray-400 mb-6">
        Go to see all my projects
        </p>
        <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl shadow-md">
        View Projects
        </button>
    </div>

    </section>
  );
};

export default Projects;