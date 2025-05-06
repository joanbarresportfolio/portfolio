import React from 'react';
import { motion } from 'framer-motion';
import {
  SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiTypescript,
  SiJavascript, SiMongodb, SiGit, SiGithub
} from "react-icons/si";

// Variantes de animación
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 }
  })
};

const About = () => {
  return (
    <section className="bg-white px-6 lg:px-20 py-16 text-gray-800">
      {/* Título principal */}
      <motion.div
        className="text-center mb-12"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h1 className="text-4xl lg:text-5xl font-bold mb-4">About Me</h1>
      </motion.div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* About Me */}
        <motion.div
          className="p-6 h-full"
          custom={1}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold mb-10 text-center">History</h2>
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
        </motion.div>

        {/* Education & Experience */}
        <motion.div
          className="p-6 h-full"
          custom={2}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold mb-10 text-center">Education & Experience</h2>
          <div className="mb-4">
            <p className="font-semibold">Senior Frontend Developer</p>
            <p className="text-sm text-gray-600">TechCorp Inc • 2020 - Present</p>
            <p className="text-sm">Leading frontend development and mentoring junior developers. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, itaque. Accusantium quos minima ea natus at molestias quidem magnam facilis.</p>
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
        </motion.div>

        {/* Skills */}
        <motion.div
          className="p-6 h-full"
          custom={3}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold mb-10 text-center">Skills</h2>
          {[
            { name: 'Frontend Development', percent: 95 },
            { name: 'Backend Development', percent: 85 },
            { name: 'UI/UX Design', percent: 80 },
            { name: 'Database Management', percent: 75 },
            { name: 'DevOps', percent: 70 },
          ].map((skill, index) => (
            <motion.div
              key={index}
              className="mb-4 w-full"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-between mb-1 text-sm">
                <span className="font-medium">{skill.name}</span>
                <span>{skill.percent}%</span>
              </div>
              <div className="w-full bg-gray-200 h-2 rounded">
                <div
                  className="h-2 bg-gray-600 rounded"
                  style={{ width: `${skill.percent}%` }}
                ></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tools & Technologies */}
        <motion.div
          className="p-6 h-full"
          custom={4}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold mb-16 text-center">Tools & Technologies</h2>
          <motion.div
            className="grid grid-cols-3 gap-6 justify-items-center items-center text-gray-700 "
            initial="hidden"
            whileInView="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
            viewport={{ once: true }}
          >
            {[
              { icon: <SiReact className="text-blue-500" />, label: 'React.js' },
              { icon: <SiNextdotjs className="text-black" />, label: 'Next.js' },
              { icon: <SiTailwindcss className="text-teal-400" />, label: 'Tailwind' },
              { icon: <SiNodedotjs className="text-green-600" />, label: 'Node.js' },
              { icon: <SiTypescript className="text-blue-700" />, label: 'TypeScript' },
              { icon: <SiJavascript className="text-yellow-400" />, label: 'JavaScript' },
              { icon: <SiMongodb className="text-green-700" />, label: 'MongoDB' },
              { icon: <SiGit className="text-orange-500" />, label: 'Git' },
              { icon: <SiGithub className="text-black" />, label: 'GitHub' },
            ].map((tool, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center"
                variants={fadeUp}
                custom={index * 0.1}
              >
                {tool.icon}
                <span className="mt-1 text-xs">{tool.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
