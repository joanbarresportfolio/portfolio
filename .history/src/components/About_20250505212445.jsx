import React from 'react';
import {
  SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiTypescript,
  SiJavascript, SiMongodb, SiGit, SiGithub
} from "react-icons/si";

const About = () => {
  return (
    <section className="bg-gray-100 px-6 lg:px-20 py-20 text-gray-800">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
        {/* About Me */}
        <div className="p-6 bg-white rounded-lg shadow-md h-full">
          <h2 className="text-2xl font-bold mb-10">About Me</h2>
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
        <div className=" p-6  h-full">
          <h2 className="text-2xl font-bold mb-10">Education & Experience</h2>
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
        <div className="p-6  h-full">
          <h2 className="text-2xl font-bold mb-10">Skills</h2>
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
        <div className="p-6  h-full">
          <h2 className="text-2xl font-bold mb-10 text-center">Tools & Technologies</h2>
          <div className="grid grid-cols-3 gap-6 justify-items-center items-center text-gray-700">
          
            {/* Each tech with icon and label */}
            <div className="flex flex-col items-center">
              <SiReact size={32} className="text-blue-500" />
              <span className="mt-2 text-sm">React.js</span>
            </div>
            <div className="flex flex-col items-center">
              <SiNextdotjs size={32} className="text-black" />
              <span className="mt-2 text-sm">Next.js</span>
            </div>
            <div className="flex flex-col items-center">
              <SiTailwindcss size={32} className="text-teal-400" />
              <span className="mt-2 text-sm">Tailwind CSS</span>
            </div>
            <div className="flex flex-col items-center">
              <SiNodedotjs size={32} className="text-green-600" />
              <span className="mt-2 text-sm">Node.js</span>
            </div>
            <div className="flex flex-col items-center">
              <SiTypescript size={32} className="text-blue-700" />
              <span className="mt-2 text-sm">TypeScript</span>
            </div>
            <div className="flex flex-col items-center">
              <SiJavascript size={32} className="text-yellow-400" />
              <span className="mt-2 text-sm">JavaScript</span>
            </div>
            <div className="flex flex-col items-center">
              <SiMongodb size={24} className="text-green-700" />
              <span className="mt-1 text-xs">MongoDB</span>
            </div>
            <div className="flex flex-col items-center">
              <SiGit size={24} className="text-orange-500" />
              <span className="mt-1 text-xs">Git</span>
            </div>
            <div className="flex flex-col items-center">
              <SiGithub size={24} className="text-black" />
              <span className="mt-1 text-xs">GitHub</span>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default About;
