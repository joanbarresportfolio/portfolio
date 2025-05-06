import React from 'react';

const About = () => {
  return (
    <section className="flex flex-col items-center justify-center px-6 lg:px-20 py-16 bg-gray-100">
      <div className="text-center mb-12">
        <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-white">
          How am I <span className="text-purple-500">About me</span>
        </h1>
        <p className="text-lg text-white">
          Know my experience working as a web developer
        </p>
      </div>

      {/* Contenido en columnas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl w-full">
        
        {/* Historia Personal */}
        <div className="flex flex-col items-start text-left">
          <h2 className="text-2xl font-bold text-purple-600 mb-4">My Story</h2>
          <p className="text-white text-base">
            I discovered my passion for technology when I built my first website as a teenager. 
            The creativity and logic behind coding immediately hooked me, leading me to dive deeper into web development.
          </p>
        </div>

        {/* Formación y experiencia */}
        <div className="flex flex-col items-start text-left">
          <h2 className="text-2xl font-bold text-purple-600 mb-4">Education & Experience</h2>
          <p className="text-white text-base mb-2">
            I have studied two years of a university degree and completed two higher education degrees. 
            Additionally, I have taken multiple online specialization courses focused on web development and cybersecurity.
          </p>
          <p className="text-white text-base">
            This diverse training has provided me with a strong technical foundation and a versatile skill set for tackling modern digital challenges.
          </p>
        </div>

        {/* Habilidades principales */}
        <div className="flex flex-col items-start text-left">
          <h2 className="text-2xl font-bold text-purple-600 mb-4">Skills</h2>
          <p className="text-white text-base mb-2">
            <strong>Frontend:</strong> React.js, Tailwind CSS, Next.js
          </p>
          <p className="text-white text-base mb-2">
            <strong>Backend:</strong> Node.js, Express, MongoDB, MySQL
          </p>
          <p className="text-white text-base mb-2">
            <strong>Soft Skills:</strong> Communication, teamwork, adaptability, and problem-solving
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;
