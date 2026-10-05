import React from 'react';
import DepthCarousel from './react-bits/DepthCarousel';
import { Sparkles } from 'lucide-react';

export default function ProjectShowcase({ projects, onSelectProject }) {
  return (
    <div className="mt-20 pt-16 border-t border-slate-800/80">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-700/40 text-xs font-mono text-blue-400 mb-3">
          <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
          Interactive 3D Perspective
        </div>
        <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Project Showcase
        </h3>
        <p className="text-sm text-slate-400 mt-2">
          Navigate through the 3D perspective deck using controls, swipe, or keyboard arrow keys.
        </p>
      </div>

      <DepthCarousel
        items={projects}
        onSelectProject={onSelectProject}
        perspective={1400}
        spread={280}
        depth={-170}
        tilt={10}
      />
    </div>
  );
}
