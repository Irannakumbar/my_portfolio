import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-dark-950 text-slate-100 flex flex-col selection:bg-purple-500/30 selection:text-purple-200">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
