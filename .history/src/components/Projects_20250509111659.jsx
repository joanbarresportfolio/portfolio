import React from 'react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { motion } from 'framer-motion';
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
    github: 'https://github.com/joanbarresportfolio/pokedex_flutter.git',
    website: 'https://joanbarresportfolio.github.io/pokedex_flutter/'
  },
  {
    img: laravel,
    category: 'Web App',
    title: 'Laravel Website',
    description: 'A modern web application developed using Laravel.',
    tags: ['Laravel', 'PHP', 'MySQL'],
    github: 'https://github.com/youruser/laravel-project',
    website: 'https://your-laravel-site.com'
  },
  {
    img: odoo,
    category: 'ERP',
    title: 'Odoo Integration',
    description: 'Custom modules and integrations with Odoo ERP.',
    tags: ['Odoo', 'Python'],
    github: 'https://github.com/youruser/odoo-project',
    website: 'https://your-odoo-instance.com'
  },
  {
    img: node,
    category: 'Backend',
    title: 'Node Projects',
    description: 'Web server apps with Node.js.',
    tags: ['Node.js', 'Express'],
    github: 'https://github.com/youruser/node-project',
    website: 'https://your-node-app.com'
  },
  {
    img: hibernate,
    category: 'Database',
    title: 'Hibernate',
    description: 'Access data using Hibernate ORM.',
    tags: ['Hibernate', 'Java', 'SQL'],
    github: 'https://github.com/youruser/hibernate-project',
    website: 'https://your-hibernate-site.com'
  },
  {
    img: kotlin,
    category: 'Mobile',
    title: 'Kotlin App',
    description: 'Develop mobile software with Kotlin.',
    tags: ['Kotlin', 'Android'],
    github: 'https://github.com/youruser/kotlin-project',
    website: 'https://your-kotlin-app.com'
  }
];

const Projects = () => {
  return (
    <section className="flex flex-col items-center justify-center px-6 lg:px-20 py-16 bg-white text-gray-900">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h1 className="text-4xl lg:text-5xl font-bold mb-4">My Projects</h1>
        <p className="text-lg text-gray-600">Here's a selection of my recent work</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
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
              <div className="mt-4 flex gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-black text-lg"
                    aria-label="GitHub"
                  >
                    <FiGithub />
                  </a>
                )}
                {project.website && (
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-black text-lg"
                    aria-label="Website"
                  >
                    <FiExternalLink />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
