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
    <div className="relative min-h-screen bg-[#F8FAFC] dark:bg-[#000000] text-slate-900 dark:text-[#F8FAFC] transition-colors duration-300 overflow-x-hidden selection:bg-blue-600 selection:text-white">
      {/* Glossy Ambient Shine Layers */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Base background */}
        <div className="absolute inset-0 bg-[#F8FAFC] dark:bg-[#000000] transition-colors duration-300" />

        {/* Top radial spotlight gloss (tuned for both light and dark mode) */}
        <div className="absolute -top-36 left-1/2 -translate-x-1/2 w-[1300px] h-[680px] bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(59,130,246,0.14),rgba(16,185,129,0.06)_45%,transparent_75%)] dark:bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(59,130,246,0.24),rgba(16,185,129,0.08)_45%,transparent_75%)] blur-3xl opacity-80 dark:opacity-90" />

        {/* Gloss accent glow mid-right */}
        <div className="absolute top-[35%] -right-48 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.08),transparent_65%)] dark:bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.12),transparent_65%)] blur-3xl" />

        {/* Gloss accent glow mid-left */}
        <div className="absolute top-[65%] -left-48 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.06),transparent_65%)] dark:bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.10),transparent_65%)] blur-3xl" />

        {/* Top glossy glass sheen */}
        <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-black/[0.02] dark:from-white/[0.05] via-transparent to-transparent" />
      </div>

      {/* Interactive GridPulse Background across the entire page */}
      <GridPulse
        className="fixed inset-0 z-0 pointer-events-none opacity-40 dark:opacity-50 [mask-image:none]"
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
