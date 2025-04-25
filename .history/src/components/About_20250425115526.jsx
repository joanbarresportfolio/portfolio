import React from 'react';

const About = () => {
  return (
    <section className="flex flex-col items-center justify-center px-6 py-16 bg-white text-center">
      
      {/* Título principal */}
      <div className="max-w-5xl mb-12">
        <h1 className="text-5xl font-extrabold mb-4">
          How am I <span className="text-purple-500">About me</span>
        </h1>
        <p className="text-lg text-gray-600">
          Get to know my journey, skills, and passion for web development.
        </p>
      </div>

      {/* Grid de 3 columnas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full px-4">
        
        {/* Historia Personal */}
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold text-purple-600 mb-4">My Story</h2>
          <p className="text-gray-700 text-base">
            I discovered my love for technology at a young age, fascinated by how websites worked. 
            My curiosity led me to self-learn coding before officially studying it.
          </p>
        </div>

        {/* Formación y experiencia */}
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold text-purple-600 mb-4">Education & Experience</h2>
          <p className="text-gray-700 text-base">
            Degree in Computer Science and several bootcamps in Full Stack Development. 
            Built multiple freelance projects and personal web apps to gain real-world experience.
          </p>
        </div>

        {/* Habilidades principales */}
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold text-purple-600 mb-4">Skills</h2>
          <p className="text-gray-700 text-base mb-2">
            <strong>Frontend:</strong> React.js, HTML, CSS, Tailwind, JavaScript.
          </p>
          <p className="text-gray-700 text-base mb-2">
            <strong>Backend:</strong> Node.js, Express, MongoDB, MySQL.
          </p>
          <p className="text-gray-700 text-base">
            <strong>Soft Skills:</strong> Communication, teamwork, adaptability, and problem-solving.
          </p>
        </div>

      </div>

      {/* Botón abajo */}
      <div className="mt-12">
        <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-xl shadow-lg transition">
          Go to About Me
        </button>
      </div>

    </section>
  );
};

export default About;
