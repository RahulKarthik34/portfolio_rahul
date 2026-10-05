import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectCaseStudy from './ProjectCaseStudy';
import ProjectShowcase from './ProjectShowcase';

export default function Projects({ projects }) {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 bg-transparent relative border-t border-slate-800/60" aria-labelledby="projects-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-3 text-xs font-mono tracking-widest text-blue-400 uppercase mb-3">
            <span>03 / PROJECTS</span>
            <div className="h-px w-12 bg-blue-500/40" />
          </div>
          <h2 id="projects-title" className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight mb-3">
            Featured Projects
          </h2>
          <p className="text-slate-300 max-w-2xl text-base sm:text-lg">
            Projects I've built to solve practical problems across full-stack development, APIs, databases, and AI-powered workflows.
          </p>
        </div>

        {/* 3 Main Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenCaseStudy={(proj) => setSelectedProject(proj)}
            />
          ))}
        </div>

        {/* DepthCarousel 3D Project Showcase Deck */}
        <ProjectShowcase
          projects={projects}
          onSelectProject={(proj) => setSelectedProject(proj)}
        />

        {/* Full Case Study Modal Dialog */}
        {selectedProject && (
          <ProjectCaseStudy
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}

      </div>
    </section>
  );
}
