import React from 'react';
import { ExternalLink, ArrowUpRight, Sparkles, Code } from 'lucide-react';
import { GithubIcon } from './Icons';
import BorderGlow from './react-bits/BorderGlow';

export default function ProjectCard({ project, onOpenCaseStudy }) {
  return (
    <BorderGlow
      glowColor="#2563EB"
      accentColor="#10B981"
      glowRadius={280}
      borderRadius="1.25rem"
      className="flex flex-col h-full bg-slate-900/85 border border-slate-800/90 rounded-2xl overflow-hidden shadow-xl hover:border-slate-700/80 transition-all duration-300"
    >
      {/* Project Graphic / Screenshot preview */}
      <div className="relative h-48 sm:h-52 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950/40 p-5 flex flex-col justify-between border-b border-slate-800/80 overflow-hidden">
        {/* Top Badges */}
        <div className="flex items-center justify-between z-10">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20">
            <Sparkles className="w-3 h-3 text-emerald-400" />
            {project.tag}
          </span>

          <div className="flex items-center gap-1.5">
            {/* GitHub Placeholder */}
            <a
              href={project.github}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700 border border-slate-700/60 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              title="GitHub Repository Placeholder"
              aria-label={`${project.name} GitHub Repository`}
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            {/* Live Demo Placeholder */}
            <a
              href={project.liveDemo}
              className="p-1.5 rounded-lg text-slate-400 hover:text-emerald-400 bg-slate-800/80 hover:bg-slate-700 border border-slate-700/60 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              title="Live Demo Placeholder"
              aria-label={`${project.name} Live Demo`}
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Ambient Glow Visual / Graphic placeholder */}
        <div className="absolute -right-8 -bottom-8 w-40 h-40 rounded-full bg-blue-600/10 blur-2xl pointer-events-none" />

        {/* Project Title inside preview */}
        <div className="relative z-10">
          <h3 className="font-heading text-lg sm:text-xl font-bold text-white tracking-tight leading-snug">
            {project.name}
          </h3>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 flex flex-col justify-between flex-grow">
        <div className="space-y-4 mb-6">
          {/* One line summary */}
          <p className="text-sm text-slate-300 leading-relaxed font-normal">
            {project.summary}
          </p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((t, i) => (
              <span
                key={i}
                className="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-800/90 text-slate-300 border border-slate-700/70"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Action Button: View Case Study */}
        <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
          <button
            type="button"
            onClick={() => onOpenCaseStudy(project)}
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-blue-600 text-slate-200 hover:text-white text-xs font-semibold uppercase tracking-wider transition-all duration-200 border border-slate-700/80 hover:border-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            <span>View Case Study</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </BorderGlow>
  );
}
