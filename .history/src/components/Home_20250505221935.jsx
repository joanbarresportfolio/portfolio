
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
const Home = () => {
  return (
    <div>
    <Navbar/>
    <Hero />
    <Projects/>
    <About/>
    <Contact/>
    <Footer/>
    </div>
  );
};

export default Home;
