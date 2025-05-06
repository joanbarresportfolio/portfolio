import React from 'react';
import { motion } from 'framer-motion';
import { DiJava } from "react-icons/di";
import {
  SiReact, SiAngular, SiLaravel, SiPhp, SiFlutter, SiDart,
  SiHibernate, SiMongodb, SiMysql, SiPostgresql, SiSass, SiVite, SiOdoo,
  SiNodedotjs, SiTailwindcss, SiJavascript, SiGit, SiGithub
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

        {/* Historia */}
        <motion.div
          className="p-6 h-full"
          custom={1}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold mb-10 text-center">Historia</h2>
          <p className="text-base mb-4">
            Soy un desarrollador de aplicaciones web con experiencia en tecnologías modernas como HTML, CSS, JavaScript, React y Angular. Durante mi tiempo en Mahico SL, participé activamente en la creación de sitios web responsivos y funcionales, además de brindar soporte técnico en hardware y software.
          </p>
          <p className="text-base mb-4">
            He trabajado con bases de datos SQL y NoSQL, y tengo conocimientos sólidos en el desarrollo backend con PHP, Laravel y Node.js. También tengo experiencia desarrollando apps móviles con Flutter y Dart.
          </p>
          <p className="text-base">
            Actualmente estoy ampliando mi formación en ciberseguridad y desarrollo de aplicaciones multiplataforma. Me considero una persona curiosa, con pasión por la tecnología y en constante búsqueda de aprender y aplicar nuevas herramientas.
          </p>
        </motion.div>

        {/* Educación y experiencia */}
        <motion.div
          className="p-6 h-full"
          custom={2}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold mb-10 text-center">Educación y Experiencia</h2>
          <div className="mb-4">
            <p className="font-semibold">Grado Técnico Superior en Desarrollo de Aplicaciones Web</p>
            <p className="text-sm text-gray-600">IES Maria Enriquez II • 2022 – 2023</p>
          </div>
          <div className="mb-4">
            <p className="font-semibold">Curso Especialización de Ciberseguridad</p>
            <p className="text-sm text-gray-600">IES Jaume II el Just • 2023 – 2024</p>
          </div>
          <div className="mb-4">
            <p className="font-semibold">Grado Técnico Superior en Desarrollo de Aplicaciones Multiplataforma</p>
            <p className="text-sm text-gray-600">IES Maria Enriquez II • 2024 – 2025</p>
          </div>
          <div className="mb-4">
            <p className="font-semibold">Estudios de Ingeniería Informática (no finalizados)</p>
            <p className="text-sm text-gray-600">Universidad Politécnica de Valencia • 2020 – 2022</p>
          </div>
        </motion.div>

        {/* Habilidades */}
        <motion.div
          className="p-6 h-full"
          custom={3}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold mb-10 text-center">Habilidades</h2>
          {[
            { name: 'Frontend (HTML, CSS, JS, React, Angular)', percent: 90 },
            { name: 'Backend (PHP, Laravel, Node.js)', percent: 80 },
            { name: 'Bases de datos (SQL, NoSQL)', percent: 85 },
            { name: 'Desarrollo móvil (Flutter, Dart)', percent: 75 },
            { name: 'Ciberseguridad y sistemas', percent: 70 },
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

        {/* Herramientas y tecnologías */}
        <motion.div
          className="p-6 h-full"
          custom={4}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold mb-16 text-center">Tecnologías</h2>
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
