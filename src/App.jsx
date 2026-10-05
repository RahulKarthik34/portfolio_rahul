import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { projects } from './data/projects';
import { GridPulse } from './components/ui/grid-pulse';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#0F172A] text-[#F1F5F9] transition-colors duration-300">
      {/* Interactive GridPulse Background across the entire page */}
      <GridPulse
        className="fixed inset-0 z-0 pointer-events-none opacity-45 [mask-image:none]"
        cell={28}
        ambient={3}
      />

      {/* Sticky Navigation Bar */}
      <div className="relative z-20">
        <Navbar />
      </div>

      {/* Main Semantic Content Area */}
      <main id="main-content" className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects projects={projects} />
        <Certifications />
        <Resume />
        <Contact />
      </main>

      {/* Semantic Footer */}
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
