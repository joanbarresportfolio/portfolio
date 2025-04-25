import React from 'react';
import flutter from '../assets/flutter.jpg';
import laravel from '../assets/laravel.png';
import odoo from '../assets/odoo.png';
import node from '../assets/node.jpg';
import hibernate from '../assets/hibernate.jpg';
import kotlin from '../assets/kotlin.jpg'

const projects = [
  {
    img: flutter,
    title: 'Flutter App',
    description: 'A cross-platform mobile app built with Flutter.',
    link: '#'
  },
  {
    img: laravel,
    title: 'Laravel Website',
    description: 'A modern web application developed using Laravel.',
    link: '#'
  },
  {
    img: odoo,
    title: 'Odoo Integration',
    description: 'Custom modules and integrations with Odoo ERP.',
    link: '#'
  },
  {
    img: node,
    title: 'Node projects',
    description: 'Web server apps with nodejs',
    link: '#'
  },
  {
    img: hibernate,
    title: 'Hibernate',
    description: 'Accdes Data with hibernate',
    link: '#'
  },
  {
    img: kotlin,
    title: 'Kotlin',
    description: 'Develop mobile software with kotlin',
    link: '#'
  }
];

const Projects = () => {
  return (
    <section className="flex flex-col items-center justify-center px-6 lg:px-20 py-16 bg-purple-900 text-white">
      
      {/* Título */}
      <div className="text-center mb-12">
        <h1 className="text-4xl lg:text-5xl font-bold mb-4">My Recent Work</h1>
        <p className="text-lg text-white/80">
          Here are a few past projects I've worked on. Want to see more?{' '}
          <a href="mailto:your-email@example.com" className="underline text-white hover:text-gray-300">Email me</a>.
        </p>
      </div>

      {/* Grid de proyectos */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-900 rounded-lg overflow-hidden shadow-md flex flex-col items-center text-center p-6">
            <img src={project.img} alt={project.title} className="w-full h-40 object-contain mb-4" />
            <h2 className="text-xl font-semibold text-purple-700 mb-2">{project.title}</h2>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <a href={project.link} className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition">
              View Project
            </a>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Projects;
