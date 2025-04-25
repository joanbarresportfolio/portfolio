import React from 'react';
import flutter from '../assets/flutter.png';
import laravel from '../assets/laravel.png';
import odoo from '../assets/odoo.png';

const Projects = () => {
  return (
    <section className="flex flex-col items-center justify-center px-6 lg:px-20 py-16 bg-purple-600 text-white">
      
      {/* Título */}
      <div className="text-center mb-12">
        <h1 className="text-4xl lg:text-5xl font-bold mb-4">My Recent Work</h1>
        <p className="text-lg text-white/80">
          Here are a few past projects I've worked on. Want to see more? <a href="mailto:your-email@example.com" className="underline text-white hover:text-gray-300">Email me</a>.
        </p>
      </div>

      {/* Grid de proyectos */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        <div className="bg-white rounded-lg overflow-hidden shadow-md flex items-center justify-center h-52">
          <img src={flutter} alt="Flutter Project" className="w-auto h-full object-contain p-6" />
        </div>
        <div className="bg-white rounded-lg overflow-hidden shadow-md flex items-center justify-center h-52">
          <img src={laravel} alt="Laravel Project" className="w-auto h-full object-contain p-6" />
        </div>
        <div className="bg-white rounded-lg overflow-hidden shadow-md flex items-center justify-center h-52">
          <img src={odoo} alt="Odoo Project" className="w-auto h-full object-contain p-6" />
        </div>
      </div>

    </section>
  );
};

export default Projects;
