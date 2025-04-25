import React from 'react';
import portrait from '../assets/face_co.png';

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center px-6 py-16 bg-white text-center">
      
      {/* Imagen arriba */}
      <div className="mb-8">
        <div className="rounded-full border-4 border-purple-600 p-1 shadow-xl">
          <img
            src={portrait}
            alt="Joan Barres"
            className="rounded-full w-40 h-40 sm:w-56 sm:h-56 object-cover"
          />
        </div>
      </div>

      {/* Texto abajo */}
      <div className="max-w-2xl">
        <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight mb-6">
          Hi, I'm <span className="text-purple-600">Joan Barres</span>
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          I’m a web developer who builds fast, clean, and responsive websites. Let’s bring your ideas to life.
        </p>
        <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg shadow-lg transition">
          View Projects
        </button>
      </div>

    </section>
  );
};

export default Hero;
