import React from 'react';

const About = () => {
  return (
    <section className="flex flex-col items-center justify-center px-6 lg:px-20 py-16 bg-black text-white">
      <div className="text-center mb-12">
        <h1 className="text-4xl lg:text-5xl font-bold mb-4">
          About <span className="text-purple-500">Me</span>
        </h1>
        <p className="text-lg text-gray-400">
          Know my experience working as a web developer.
        </p>
      </div>

      {/* Contenido en columnas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl w-full">

        {/* Historia Personal */}
        <div className="flex flex-col items-start text-left">
          <h2 className="text-2xl font-bold text-purple-500 mb-4">My Story</h2>
          <p className="text-gray-400 text-base">
            I discovered my passion for technology when I built my first website as a teenager.
          </p>
        </div>

        {/* Educación y experiencia */}
        <div className="flex flex-col items-start text-left">
          <h2 className="text-2xl font-bold text-purple-500 mb-4">Education & Experience</h2>
          <p className="text-gray-400 text-base mb-2">
            I studied Computer Science and worked on freelance projects and startups.
          </p>
          <p className="text-gray-400 text-base">
            These experiences built my frontend and backend development skills.
          </p>
        </div>

        {/* Skills */}
        <div className="flex flex-col items-start text-left">
          <h2 className="text-2xl font-bold text-purple-500 mb-4">Skills</h2>
          <p className="text-gray-400 text-base mb-2"><strong>Frontend:</strong> React.js, Tailwind CSS, Next.js</p>
          <p className="text-gray-400 text-base mb-2"><strong>Backend:</strong> Node.js, Express, MongoDB, MySQL</p>
          <p className="text-gray-400 text-base mb-2"><strong>Soft Skills:</strong> Communication, teamwork, adaptability</p>
        </div>

      </div>
    </section>
  );
};

export default About;
