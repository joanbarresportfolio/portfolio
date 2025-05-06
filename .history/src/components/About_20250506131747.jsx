import React from 'react';
import { motion } from 'framer-motion';
import { DiJava } from "react-icons/di";
import {
  SiReact, SiAngular, SiLaravel, SiPhp, SiFlutter, SiDart,
  SiHibernate, SiMongodb, SiMysql, SiPostgresql, SiSass, SiVite, SiOdoo,
  SiNodedotjs, SiTailwindcss, SiJavascript, SiGit, SiGithub
} from "react-icons/si";

// Animation variants
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
      {/* Section Title */}
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

        {/* Personal Background */}
        <motion.div
          className="p-6 h-full"
          custom={1}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold mb-10 text-center">Background</h2>
          <p className="text-base mb-4">
            I am a web application developer experienced in modern technologies such as HTML, CSS, JavaScript, React, and Angular. During my time at Mahico SL, I actively contributed to creating responsive and functional websites, as well as providing technical support for both hardware and software.
          </p>
          <p className="text-base mb-4">
            I’ve worked with SQL and NoSQL databases and have strong backend development knowledge using PHP, Laravel, and Node.js. I also have experience building mobile apps with Flutter and Dart.
          </p>
          <p className="text-base">
            I am currently expanding my knowledge in cybersecurity and cross-platform development. I consider myself a curious person with a passion for technology and a constant desire to learn and apply new tools.
          </p>
        </motion.div>

        {/* Education and Experience */}
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
            <p className="font-semibold">Computer Engineering Studies (unfinished)</p>
            <p className="text-sm text-gray-600">Polytechnic University of Valencia • 2020 – 2022</p>
          </div>
          <div className="mb-4">
            <p className="font-semibold">Higher Technician in Web Application Development</p>
            <p className="text-sm text-gray-600">IES Maria Enriquez II • 2022 – 2023</p>
          </div>
          <div className="mb-4">
            <p className="font-semibold">Cybersecurity Specialization Course</p>
            <p className="text-sm text-gray-600">IES Jaume II el Just • 2023 – 2024</p>
          </div>
          <div className="mb-4">
            <p className="font-semibold">Higher Technician in Cross-platform Application Development</p>
            <p className="text-sm text-gray-600">IES Maria Enriquez II • 2024 – 2025</p>
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
            { name: 'Frontend (HTML, CSS, JS, React, Angular)', percent: 90 },
            { name: 'Backend (PHP, Laravel, Node.js)', percent: 80 },
            { name: 'Databases (SQL, NoSQL)', percent: 85 },
            { name: 'Mobile Development (Flutter, Dart)', percent: 75 },
            { name: 'Cybersecurity & Systems', percent: 70 },
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
          <h2 className="text-2xl font-bold mb-16 text-center">Technologies</h2>
          <motion.div
            className="grid grid-cols-3 gap-6 justify-items-center items-center text-gray-700"
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
              { icon: <SiReact />, label: 'React' },
              { icon: <SiLaravel />, label: 'Laravel' },
              { icon: <SiPhp />, label: 'PHP' },
              { icon: <SiFlutter />, label: 'Flutter' },
              { icon: <SiHibernate />, label: 'Hibernate' },
              { icon: <SiMongodb />, label: 'MongoDB' },
              { icon: <SiMysql />, label: 'MySQL' },
              { icon: <SiOdoo />, label: 'Odoo' },
              { icon: <SiNodedotjs />, label: 'NodeJs' },
              { icon: <SiTailwindcss />, label: 'Tailwind' },
              { icon: <SiJavascript />, label: 'JavaScript' },
              { icon: <SiGithub />, label: 'GitHub' },
            ].map((tool, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center"
                variants={fadeUp}
                custom={index * 0.1}
              >
                {tool.icon}
                <span className="mt-1 text-xs text-center">{tool.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
