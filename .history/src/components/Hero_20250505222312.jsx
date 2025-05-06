import React from 'react';
import { motion } from 'framer-motion';
import portrait from '../assets/face_co.png';

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center px-6 lg:px-20 py-16 bg-white text-center mt-10">
      
      {/* Imagen de perfil con animación */}
      <motion.div
        className="mb-10"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="rounded-full border-4 border-gray-600 p-1 shadow-xl">
          <img
            src={portrait}
            alt="Joan Barres"
            className="rounded-full w-40 h-40 sm:w-56 sm:h-56 object-cover"
          />
        </div>
      </motion.div>

      {/* Texto de presentación con animación */}
      <motion.div
        className="max-w-3xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold text-black leading-tight mb-6">
          Hi, I'm Joan Barres
        </h1>
        <p className="text-lg mt-3 text-base text-gray-600 mb-6">
          I'm a passionate web developer focused on building fast, clean, and fully responsive websites and applications.
          I love transforming ideas into digital solutions, combining creativity with strong technical skills.
          Let's collaborate and create something amazing together!
        </p>
        <a 
          href="#projects"
          className="inline-block bg-white border border-gray-300 hover:bg-gray-600 hover:text-white text-black font-semibold px-8 py-3 rounded-lg shadow-lg transition-all duration-300"
        >
          Contact me
        </a>
      </motion.div>

    </section>
  );
};

export default Hero;
