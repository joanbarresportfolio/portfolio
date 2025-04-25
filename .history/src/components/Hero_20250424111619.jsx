import React from 'react';
import portrait from '../assets/face_co.png';
const Hero = () => {
  return (
    <section className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 lg:px-20 lg:m-20 py-16 bg-white">
      {/* Text content */}
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
          Hi, I'm <span className="text-purple-600">Joan Barres</span>
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
          I’m a web developer who builds fast, clean, and responsive websites. Let’s bring your ideas to life.
        </p>
        <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg shadow-lg transition">
          View Projects
        </button>
      </div>

      {/* Image */}
      <div className="w-full lg:w-1/2 flex justify-center mb-10 lg:mb-0">
        <div className="rounded-full border-4 border-purple-600 p-1 shadow-xl">
          <img
            src={portrait}
            alt="Joan Barres"
            className="rounded-full w-48 h-48 sm:w-56 sm:h-56 object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
