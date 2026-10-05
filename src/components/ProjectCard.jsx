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
      className="flex flex-col h-full bg-white dark:bg-slate-900/85 border border-slate-200/90 dark:border-slate-800/90 rounded-2xl overflow-hidden shadow-lg dark:shadow-xl hover:border-blue-400/50 dark:hover:border-slate-700/80 transition-all duration-300"
    >
      {/* Project Graphic / Screenshot preview */}
      <div className="relative h-48 sm:h-52 bg-slate-900 border-b border-slate-200/80 dark:border-slate-800/80 overflow-hidden group">
        {project.screenshot && (
          <img
            src={project.screenshot}
            alt={project.name}
            className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        )}

        {/* Dynamic vignette gradient to ensure top badges and title remain perfectly readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-slate-950/60 p-5 flex flex-col justify-between z-10">
          {/* Top Badges */}
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-md bg-blue-600/90 text-white shadow-sm border border-blue-400/30">
              <Sparkles className="w-3 h-3 text-emerald-300" />
              {project.tag}
            </span>

            <div className="flex items-center gap-1.5">
              {/* GitHub Placeholder */}
              <a
                href={project.github}
                className="p-1.5 rounded-lg text-white/90 hover:text-white bg-black/50 hover:bg-black/80 backdrop-blur-md border border-white/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                title="GitHub Repository Placeholder"
                aria-label={`${project.name} GitHub Repository`}
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              {/* Live Demo Placeholder */}
              <a
                href={project.liveDemo}
                className="p-1.5 rounded-lg text-white/90 hover:text-emerald-400 bg-black/50 hover:bg-black/80 backdrop-blur-md border border-white/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                title="Live Demo Placeholder"
                aria-label={`${project.name} Live Demo`}
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Project Title inside preview */}
          <div>
            <h3 className="font-heading text-lg sm:text-xl font-bold text-white tracking-tight leading-snug drop-shadow-md">
              {project.name}
            </h3>
          </div>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 flex flex-col justify-between flex-grow">
        <div className="space-y-4 mb-6">
          {/* One line summary */}
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            {project.summary}
          </p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((t, i) => (
              <span
                key={i}
                className="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/70"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Action Button: View Case Study */}
        <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800/80 flex items-center justify-between">
          <button
            type="button"
            onClick={() => onOpenCaseStudy(project)}
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-blue-600 dark:hover:bg-blue-600 text-slate-800 dark:text-slate-200 hover:text-white dark:hover:text-white text-xs font-semibold uppercase tracking-wider transition-all duration-200 border border-slate-200 dark:border-slate-700/80 hover:border-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            <span>View Case Study</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </BorderGlow>
  );
}
