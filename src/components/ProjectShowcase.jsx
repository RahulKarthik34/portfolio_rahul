import React, { useState } from 'react';
import { ThreeDImageRing } from './lightswind/3d-image-ring';
import { Sparkles, MoveHorizontal, ExternalLink, ArrowRight } from 'lucide-react';

export default function ProjectShowcase({ projects, onSelectProject }) {
  const [activeProjectIdx, setActiveProjectIdx] = useState(0);

  // Curated 3D Ring dataset showcasing Rahul's projects with rich imagery
  const showcaseItems = [
    {
      ...projects[0],
      image: "/images/projects/bus-attendance.jpg",
    },
    {
      ...projects[1],
      image: "/images/projects/movie-website.jpg",
    },
    {
      ...projects[2],
      image: "/images/projects/ai-mock-interview.jpg",
    },
    {
      ...projects[0],
      image: "/images/projects/bus-attendance.jpg",
    },
    {
      ...projects[1],
      image: "/images/projects/movie-website.jpg",
    },
    {
      ...projects[2],
      image: "/images/projects/ai-mock-interview.jpg",
    },
  ];

  const ringImages = showcaseItems.map((item) => item.image);

  const handleRingCardClick = (index) => {
    const item = showcaseItems[index % showcaseItems.length];
    setActiveProjectIdx(index % projects.length);
    if (onSelectProject) {
      onSelectProject(projects[index % projects.length]);
    }
  };

  return (
    <div className="mt-20 pt-16 border-t border-slate-200/80 dark:border-slate-800/80">
      
      {/* Section Subheader */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 border border-blue-300 dark:border-blue-700/40 text-xs font-mono text-blue-600 dark:text-blue-400 mb-3">
          <Sparkles className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />
          Interactive 3D Carousel
        </div>
        <h3 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
          3D Project Ring Showcase
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 flex items-center justify-center gap-1.5">
          <MoveHorizontal className="w-4 h-4 text-blue-500" />
          Click and drag horizontally to spin the ring • Click any slide to explore the full case study
        </p>
      </div>

      {/* 3D Image Ring Stage */}
      <div className="relative w-full h-[520px] sm:h-[580px] rounded-3xl overflow-hidden bg-slate-100/70 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800/80 shadow-2xl backdrop-blur-sm flex items-center justify-center">
        
        {/* Ambient background glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 dark:bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-emerald-500/10 dark:bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

        {/* Lightswind ThreeDImageRing */}
        <ThreeDImageRing
          images={ringImages}
          items={showcaseItems}
          width={290}
          perspective={2000}
          imageDistance={460}
          initialRotation={180}
          animationDuration={1.4}
          staggerDelay={0.08}
          hoverOpacity={0.6}
          draggable={true}
          ease="easeOut"
          mobileBreakpoint={768}
          mobileScaleFactor={0.72}
          inertiaPower={0.82}
          inertiaTimeConstant={320}
          inertiaVelocityMultiplier={22}
          onImageClick={handleRingCardClick}
          containerClassName="h-full"
        />

        {/* Bottom subtle drag helper badge */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium bg-white/90 dark:bg-slate-900/90 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/80 shadow-lg backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Drag left / right to spin
          </span>
        </div>
      </div>

      {/* Project Direct Quick-Launch Bar */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        {projects.map((proj, pIdx) => (
          <button
            key={proj.id}
            onClick={() => onSelectProject && onSelectProject(proj)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium bg-white dark:bg-slate-900/90 text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 border border-slate-200/90 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-500/50 shadow-sm transition-all duration-200 group"
          >
            <span className="w-2 h-2 rounded-full bg-blue-500 group-hover:scale-125 transition-transform" />
            <span className="font-heading font-semibold">{proj.name}</span>
            <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 group-hover:text-blue-500 transition-all" />
          </button>
        ))}
      </div>

    </div>
  );
}
