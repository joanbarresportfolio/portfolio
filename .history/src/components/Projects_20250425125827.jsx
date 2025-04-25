import React from 'react';
import flutter from '../assets/flutter.jpg';
import laravel from '../assets/laravel.png';
import odoo from '../assets/odoo.png';

const projects = [
  { img: flutter, title: 'Flutter App', description: 'Cross-platform app.', link: '#' },
  { img: laravel, title: 'Laravel Website', description: 'Modern web application.', link: '#' },
  { img: odoo, title: 'Odoo ERP', description: 'Custom Odoo modules.', link: '#' }
];

const Projects = () => {
  return (
    <section id="projects" className="flex flex-col items-center justify-center px-6 lg:px-20 py-20 bg-black text-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl lg:text-5xl font-bold mb-4">Projects</h2>
        <p className="text-lg text-gray-400">Some projects I've built recently.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-900 rounded-lg overflow-hidden shadow-md p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
            <img src={project.img} alt={project.title} className="w-full h-40 object-contain mb-4" />
            <h3 className="text-2xl text-purple-500 mb-2">{project.title}</h3>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <a href={project.link} className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded transition">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
