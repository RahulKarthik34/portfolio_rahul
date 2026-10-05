import React, { useEffect } from 'react';
import { X, CheckCircle2, AlertCircle, Wrench, Sparkles, ExternalLink } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectCaseStudy({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] bg-[#0F172A] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col text-slate-200"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-800 bg-slate-900/90">
          <div>
            <span className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 bg-emerald-950/40 px-2.5 py-0.5 rounded border border-emerald-800/40 mb-1">
              <Sparkles className="w-3 h-3" />
              Full Case Study
            </span>
            <h3 id="case-study-title" className="text-xl sm:text-2xl font-heading font-bold text-white">
              {project.name}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700/80 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            aria-label="Close case study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body (Scrollable) */}
        <div className="px-6 py-6 overflow-y-auto space-y-7 focus:outline-none" tabIndex={0}>
          {/* Tech stack row */}
          <div>
            <span className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">Technologies Used</span>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-md text-xs font-medium bg-slate-800 text-blue-300 border border-blue-500/30"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Overview */}
          <div>
            <h4 className="text-sm font-mono uppercase tracking-wider text-blue-400 mb-2">Overview</h4>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed bg-slate-900/60 p-4 rounded-xl border border-slate-800">
              {project.overview}
            </p>
          </div>

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-red-950/20 border border-red-900/30">
              <div className="flex items-center gap-2 text-red-400 font-semibold text-sm mb-2">
                <AlertCircle className="w-4 h-4" />
                The Problem
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-900/30">
              <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm mb-2">
                <CheckCircle2 className="w-4 h-4" />
                The Solution
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div>
            <h4 className="text-sm font-mono uppercase tracking-wider text-blue-400 mb-3">Key Features</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.keyFeatures.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 bg-slate-900/40 p-3 rounded-lg border border-slate-800/80">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* My Contributions */}
          <div>
            <h4 className="text-sm font-mono uppercase tracking-wider text-emerald-400 mb-3">My Engineering Contributions</h4>
            <ul className="space-y-2">
              {project.myContributions.map((contrib, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 bg-slate-900/40 p-3 rounded-lg border border-slate-800/80">
                  <Wrench className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>{contrib}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Challenge & Learning */}
          <div className="p-4 rounded-xl bg-blue-950/30 border border-blue-900/40">
            <h4 className="text-xs font-mono uppercase tracking-wider text-blue-400 mb-2">
              Key Technical Challenge & Learning
            </h4>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed italic">
              "{project.challenge}"
            </p>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-slate-800 bg-slate-900/90 text-xs text-slate-400">
          <div className="flex items-center gap-3">
            <a
              href={project.github}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors"
              title="GitHub repository placeholder"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              Source Code
            </a>
            <a
              href={project.liveDemo}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors"
              title="Live demo placeholder"
            >
              <ExternalLink className="w-3.5 h-3.5 text-emerald-400" />
              Live Demo
            </a>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
