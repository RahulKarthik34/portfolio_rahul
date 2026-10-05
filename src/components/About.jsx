import React from 'react';
import { Layers, Server, Database, Terminal, GraduationCap, MapPin } from 'lucide-react';
import BorderGlow from './react-bits/BorderGlow';

export default function About() {
  const strengths = [
    {
      title: "Full-Stack Development",
      description: "Translating application ideas into fully functioning web architectures using React.js, modern JavaScript, and clean component hierarchies.",
      icon: Layers,
      highlight: "React.js · JavaScript (ES6+)"
    },
    {
      title: "Backend & APIs",
      description: "Designing RESTful services, routing, validation middleware, and business logic with Python, Django, and Django REST Framework.",
      icon: Server,
      highlight: "Python · Django · REST APIs"
    },
    {
      title: "Database Design",
      description: "Structuring normalized schemas, managing relational integrity in MySQL, and utilizing MongoDB for flexible document workflows.",
      icon: Database,
      highlight: "MySQL · MongoDB"
    },
    {
      title: "Python & Architecture",
      description: "Writing clean object-oriented Python, building robust API integrations, and querying data systems with structured SQL.",
      icon: Terminal,
      highlight: "Python · SQL · OOP"
    }
  ];

  return (
    <section id="about" className="py-24 bg-transparent relative border-t border-slate-800/60" aria-labelledby="about-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header with Polished Divider */}
        <div className="mb-14">
          <div className="flex items-center gap-3 text-xs font-mono tracking-widest text-blue-400 uppercase mb-3">
            <span>01 / ABOUT</span>
            <div className="h-px w-12 bg-blue-500/40" />
          </div>
          <h2 id="about-title" className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight">
            About Me
          </h2>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Column: Authentic Bio */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-8 rounded-2xl bg-slate-900/80 border border-slate-800/90 backdrop-blur-sm shadow-xl">
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal mb-6">
Hi, I’m Rahul Karthik Mugachintala, an aspiring AI/Full-Stack Developer with a B.Tech in Information Technology. I work with Python, Django, Django REST Framework, React.js, JavaScript, SQL, MySQL, and MongoDB. I’m interested in building web applications, REST APIs, and AI-integrated solutions.

My projects include **Intervexa**, a 3D AI interview platform using React, Three.js, Django, and Ollama, and a **Smart Bus Attendance System** using Django REST Framework, MySQL, and JavaScript with QR/barcode scanning and real-time validation. I also have software development internship experience in Python, REST APIs, data processing, debugging, and Git-based development.              </p>

              {/* Quick Info Badges */}
              <div className="pt-6 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <GraduationCap className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs font-mono text-slate-400">Education</span>
                    <span className="text-sm font-medium text-slate-200">B.Tech Information Technology</span>
                    <span className="block text-xs text-slate-400">N.B.K.R Institute of Sci & Tech</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs font-mono text-slate-400">Location</span>
                    <span className="text-sm font-medium text-slate-200">Nellore, Andhra Pradesh</span>
                    <span className="block text-xs text-slate-400">India (Open to Relocation/Remote)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Strength Cards with subtle BorderGlow */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {strengths.map((item, idx) => {
              const Icon = item.icon;
              return (
                <BorderGlow
                  key={idx}
                  glowColor="#2563EB"
                  accentColor="#10B981"
                  glowRadius={220}
                  className="p-5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700/80 transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-lg bg-slate-800/90 border border-slate-700 flex items-center justify-center text-blue-400 mb-3.5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading text-base font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <span className="text-[11px] font-mono text-emerald-400/90 bg-emerald-950/40 px-2 py-1 rounded border border-emerald-800/30 inline-block">
                    {item.highlight}
                  </span>
                </BorderGlow>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
