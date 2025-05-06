import React from 'react';
import { FiExternalLink } from 'react-icons/fi'; // Ícono de enlace
import flutter from '../assets/1.jpg';
import laravel from '../assets/2.jpg';
import odoo from '../assets/3.jpg';
import node from '../assets/4.jpg';
import hibernate from '../assets/5.jpg';
import kotlin from '../assets/6.jpg';

const projects = [
  {
    img: flutter,
    category: 'Mobile App',
    title: 'Flutter App',
    description: 'A cross-platform mobile app built with Flutter.',
    tags: ['Flutter', 'Dart'],
    link: '#'
  },
  {
    img: laravel,
    category: 'Web App',
    title: 'Laravel Website',
    description: 'A modern web application developed using Laravel.',
    tags: ['Laravel', 'PHP', 'MySQL'],
    link: '#'
  },
  {
    img: odoo,
    category: 'ERP',
    title: 'Odoo Integration',
    description: 'Custom modules and integrations with Odoo ERP.',
    tags: ['Odoo', 'Python'],
    link: '#'
  },
  {
    img: node,
    category: 'Backend',
    title: 'Node Projects',
    description: 'Web server apps with Node.js.',
    tags: ['Node.js', 'Express'],
    link: '#'
  },
  {
    img: hibernate,
    category: 'Database',
    title: 'Hibernate',
    description: 'Access data using Hibernate ORM.',
    tags: ['Hibernate', 'Java', 'SQL'],
    link: '#'
  },
  {
    img: kotlin,
    category: 'Mobile',
    title: 'Kotlin App',
    description: 'Develop mobile software with Kotlin.',
    tags: ['Kotlin', 'Android'],
    link: '#'
  }
];

const Projects = () => {
  return (
    <section className="flex flex-col items-center justify-center px-6 lg:px-20 py-16 bg-white text-gray-900">
      {/* Título */}
      <div className="text-center mb-12">
        <h1 className="text-4xl lg:text-5xl font-bold mb-4">My Projects</h1>
        <p className="text-lg text-gray-600">
          Here's a selection of my recent work
        </p>
      </div>

      {/* Grid de proyectos */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition duration-300"
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 flex flex-col gap-4">
              <div className="text-sm font-medium text-gray-500">{project.category}</div>
              <h2 className="text-xl font-semibold text-gray-900">{project.title}</h2>
              <p className="text-gray-600 text-sm">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                className="mt-4 inline-flex items-center justify-center border-1 border-gray-600 bg-white-600 text-black text-sm font-medium px-4 py-2 rounded hover:bg-gray-600 hover:text-white transition"
              >
                View Project <FiExternalLink className="ml-2" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
