import React from 'react';

const About = () => {
  return (
    <section className="bg-gray-100 px-6 lg:px-20 py-20 text-gray-800">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        
        {/* LEFT SIDE – About Me + Education & Experience */}
        <div>
          <h2 className="text-4xl font-bold mb-6">About Me</h2>
          <p className="text-lg mb-6">
            I'm a passionate full-stack developer with 5+ years of experience building web applications. 
            I specialize in JavaScript-based technologies and have a strong background in creating responsive, accessible, and performant web experiences.
          </p>
          <p className="text-base mb-6">
            After graduating with a degree in Computer Science, I started my career at a startup where I developed a passion for clean code and user-centered design. 
            I've since worked with companies of all sizes, helping them build digital products that their users love.
          </p>
          <p className="text-base mb-10">
            I believe in continuous learning and staying up-to-date with the latest trends. When I'm not coding, you can find me hiking, reading tech blogs, or contributing to open-source projects.
          </p>

          {/* Education & Experience */}
          <h3 className="text-2xl font-semibold mb-4">Education & Experience</h3>
          <div className="mb-6">
            <p className="font-semibold">Senior Frontend Developer</p>
            <p className="text-sm text-gray-600">TechCorp Inc • 2020 - Present</p>
            <p className="text-sm">Leading frontend development for multiple applications and mentoring junior developers.</p>
          </div>
          <div className="mb-6">
            <p className="font-semibold">Web Developer</p>
            <p className="text-sm text-gray-600">Innovative Solutions • 2018 - 2020</p>
            <p className="text-sm">Maintained web applications using React, Node.js, and MongoDB.</p>
          </div>
          <div>
            <p className="font-semibold">BSc in Computer Science</p>
            <p className="text-sm text-gray-600">Tech University • 2014 - 2018</p>
            <p className="text-sm">Graduated with honors, specializing in web technologies.</p>
          </div>
        </div>

        {/* RIGHT SIDE – Skills */}
        <div>
          <h3 className="text-2xl font-semibold mb-6">Skills</h3>
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

          {/* Tools & Technologies */}
          <h3 className="text-2xl font-semibold mt-10 mb-4">Tools & Technologies</h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <p>🔹 React.js</p>
            <p>🔹 Node.js</p>
            <p>🔹 TypeScript</p>
            <p>🔹 MongoDB</p>
            <p>🔹 Git/GitHub</p>
            <p>🔹 Docker</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
