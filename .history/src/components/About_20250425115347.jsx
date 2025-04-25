import React from 'react';

const About = () => {
  return (
    <section className="flex flex-col items-center justify-center px-6 py-16 bg-white text-center">
      
      {/* Título */}
      <div className="max-w-3xl">
        <h1 className="text-5xl font-extrabold mb-4">
          How am I <span className="text-purple-500">About me</span>
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Get to know my journey, skills, and passion for web development.
        </p>

        {/* Historia Personal */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-purple-600 mb-2">My Story</h2>
          <p className="text-gray-700">
            I discovered my love for technology at a young age, fascinated by how websites were built. I started learning web development on my own before officially studying it.
            My curiosity and drive to create brought me into the world of programming.
          </p>
        </div>

        {/* Formación y experiencia */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-purple-600 mb-2">Education & Experience</h2>
          <p className="text-gray-700 mb-2">
            I hold a degree in Computer Science and completed intensive bootcamps focused on full-stack development. 
          </p>
          <p className="text-gray-700">
            Throughout my journey, I’ve built multiple personal projects and worked on freelance websites, gaining hands-on experience in real-world development.
          </p>
        </div>

        {/* Habilidades principales */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-purple-600 mb-2">Skills</h2>
          <p className="text-gray-700 mb-2">
            <strong>Frontend:</strong> React.js, HTML, CSS, Tailwind, JavaScript.
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Backend:</strong> Node.js, Express, MongoDB, MySQL.
          </p>
          <p className="text-gray-700">
            <strong>Soft Skills:</strong> Strong communication, teamwork, adaptability, and problem-solving abilities.
          </p>
        </div>

        {/* Botón */}
        <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-xl shadow-lg transition">
          Go to About Me
        </button>

      </div>
    </section>
  );
};

export default About;
