import React from 'react';
import portrait from '../assets/face_co.png';

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center px-6 lg:px-20 py-16 bg-black text-center">
      
      {/* Imagen de perfil */}
      <div className="mb-10">
        <div className="rounded-full border-4 border-purple-600 p-1 shadow-xl">
          <img
            src={portrait}
            alt="Joan Barres"
            className="rounded-full w-40 h-40 sm:w-56 sm:h-56 object-cover"
          />
        </div>
      </div>

      {/* Texto de presentación */}
      <div className="max-w-3xl">
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6">
          Hi, I'm <span className="text-purple-600">Joan Barres</span>
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          I'm a passionate web developer focused on building fast, clean, and fully responsive websites and applications.
          I love transforming ideas into digital solutions, combining creativity with strong technical skills.
          Let's collaborate and create something amazing together!
        </p>
        <a 
          href="#projects"
          className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition-all duration-300"
        >
          View Projects
        </a>
      </div>

    </section>
  );
};

export default Hero;
