import React from 'react';
import portrait from '../assets/face_co.png';

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center px-6 lg:px-20 py-16 bg-white text-center">
      
      {/* Imagen de perfil */}
      <div className="mb-10">
        <div className="rounded-full border-4 border-gray-600 p-1 shadow-xl">
          <img
            src={portrait}
            alt="Joan Barres"
            className="rounded-full w-40 h-40 sm:w-56 sm:h-56 object-cover"
          />
        </div>
      </div>

      {/* Texto de presentación */}
      <div className="max-w-3xl">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-black leading-tight mb-6">
          Hi, I'm <span className="text-gray-500">Joan Barres</span>
        </h1>
        <p className="text-lg mt-3 text-base text-gray-600 text-gray-600 mb-6">
          I'm a passionate web developer focused on building fast, clean, and fully responsive websites and applications.
          I love transforming ideas into digital solutions, combining creativity with strong technical skills.
          Let's collaborate and create something amazing together!
        </p>
        <a 
          href="#projects"
          className="inline-block px-6 py-3 text-base border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700"
        >
          View Projects
        </a>
      </div>

    </section>
  );
};

export default Hero;
