import React from 'react';

const About = () => {
  return (
    <section className="bg-gray-100 px-6 lg:px-20 py-20 text-gray-800">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* About Me */}
        <div className="bg-white p-6 rounded-lg shadow-md h-full">
          <h2 className="text-2xl font-bold mb-4">About Me</h2>
          <p className="text-base mb-4">
            I'm a passionate full-stack developer with 5+ years of experience building web applications. 
            I specialize in JavaScript-based technologies and have a strong background in creating responsive, accessible, and performant web experiences.
          </p>
          <p className="text-base mb-4">
            After graduating with a degree in Computer Science, I started my career at a startup where I developed a passion for clean code and user-centered design. 
            I've worked with companies of all sizes, from startups to large enterprises, helping them build products users love.
          </p>
          <p className="text-base">
            I believe in continuous learning. When I'm not coding, I enjoy hiking, reading tech blogs, or contributing to open-source projects.
          </p>
        </div>

        {/* Education & Experience */}
        <div className="bg-white p-6 rounded-lg shadow-md h-full">
          <h2 className="text-2xl font-bold mb-4">Education & Experience</h2>
          <div className="mb-4">
            <p className="font-semibold">Senior Frontend Developer</p>
            <p className="text-sm text-gray-600">TechCorp Inc • 2020 - Present</p>
            <p className="text-sm">Leading frontend development and mentoring junior developers.</p>
          </div>
          <div className="mb-4">
            <p className="font-semibold">Web Developer</p>
            <p className="text-sm text-gray-600">Innovative Solutions • 2018 - 2020</p>
            <p className="text-sm">Worked on React, Node.js and MongoDB-based applications.</p>
          </div>
          <div>
            <p className="font-semibold">BSc in Computer Science</p>
            <p className="text-sm text-gray-600">Tech University • 2014 - 2018</p>
            <p className="text-sm">Graduated with honors in web technologies and software engineering.</p>
          </div>
        </div>

        {/* Skills */}
        <div className="bg-white p-6 rounded-lg shadow-md h-full">
          <h2 className="text-2xl font-bold mb-6">Skills</h2>
          {[
            { name: 'Frontend Development', percent: 95 },
            { name: 'Backend Development', percent: 85 },
            { name: 'UI/UX Design', percent: 80 },
            { name: 'Database Management', percent: 75 },
            { name: 'DevOps', percent: 70 },
          ].map((skill, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between mb-1">
                <span className="font-medium">{skill.name}</span>
                <span className="text-sm">{skill.percent}%</span>
              </div>
              <div className="w-full bg-gray-200 h-2 rounded">
                <div
                  className="h-2 bg-indigo-500 rounded"
                  style={{ width: `${skill.percent}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Tools & Technologies */}
        <div className="bg-white p-6 rounded-lg shadow-md h-full">
          <h2 className="text-2xl font-bold mb-6">Tools & Technologies</h2>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <p>🔹 React.js</p>
            <p>🔹 Node.js</p>
            <p>🔹 TypeScript</p>
            <p>🔹 MongoDB</p>
            <p>🔹 Git / GitHub</p>
            <p>🔹 Docker</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
