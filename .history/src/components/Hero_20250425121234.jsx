import React from 'react';
import profileImage from '../assets/profile.png'; // Asegúrate que este sea el correcto

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center px-6 lg:px-20 py-16 bg-white text-center">
      
      {/* Imagen de perfil */}
      <div className="mb-8">
        <img 
          src={profileImage} 
          alt="Joan Barres" 
          className="w-40 h-40 rounded-full border-4 border-purple-600 shadow-lg object-cover"
        />
      </div>

      {/* Título */}
      <h1 className="text-4xl lg:text-5xl font-bold mb-4">
        Hi, I'm <span className="text-purple-600">Joan Barres</span>
      </h1>

      {/* Subtítulo */}
      <p className="text-lg text-gray-600 max-w-2xl mb-8">
        I'm a passionate web developer who builds fast, clean, and responsive websites. 
        With a deep love for technology and design, I specialize in turning ideas into real-world digital experiences.
        Let's work together and bring your next project to life!
      </p>

      {/* Botón */}
      <a 
        href="#projects" 
        className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-300"
      >
        View Projects
      </a>

    </section>
  );
};

export default Hero;
