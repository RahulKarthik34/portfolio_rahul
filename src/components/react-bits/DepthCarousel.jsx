import React, { useState, useEffect, useRef, useCallback } from 'react';
import gsap from 'gsap';
import { ChevronLeft, ChevronRight, ExternalLink, Sparkles } from 'lucide-react';
import './DepthCarousel.css';

/**
 * DepthCarousel Component
 * 3D perspective carousel powered by GSAP.
 * Features:
 * - 3D depth, spread, tilt, and perspective
 * - Keyboard navigation (Left/Right arrows)
 * - Mouse drag & touch swipe
 * - Accessible controls & indicators
 */
export default function DepthCarousel({
  items = [],
  perspective = 1400,
  spread = 260,
  depth = -180,
  tilt = 12,
  onSelectProject,
  className = "",
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const stageRef = useRef(null);
  const cardRefs = useRef([]);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const dragDistance = useRef(0);

  const total = items.length;

  const getPositionOffset = (index) => {
    let offset = (index - activeIndex) % total;
    if (offset > Math.floor(total / 2)) {
      offset -= total;
    } else if (offset < -Math.floor(total / 2)) {
      offset += total;
    }
    return offset;
  };

  const updateCardTransforms = useCallback((animate = true) => {
    if (!stageRef.current) return;

    cardRefs.current.forEach((el, i) => {
      if (!el) return;
      const offset = getPositionOffset(i);
      const isCenter = offset === 0;
      const isVisible = Math.abs(offset) <= 1;

      // Transform calculations
      const xPos = offset * spread;
      const zPos = isCenter ? 0 : depth;
      const rotY = offset * -tilt;
      const scale = isCenter ? 1 : 0.85;
      const opacity = isVisible ? (isCenter ? 1 : 0.6) : 0;
      const zIndex = 20 - Math.abs(offset) * 5;

      if (animate) {
        gsap.to(el, {
          x: xPos,
          z: zPos,
          rotationY: rotY,
          scale: scale,
          opacity: opacity,
          duration: 0.55,
          ease: "power2.out",
          zIndex: zIndex,
          pointerEvents: isCenter ? 'auto' : 'none',
        });
      } else {
        gsap.set(el, {
          x: xPos,
          z: zPos,
          rotationY: rotY,
          scale: scale,
          opacity: opacity,
          zIndex: zIndex,
          pointerEvents: isCenter ? 'auto' : 'none',
        });
      }
    });
  }, [activeIndex, total, spread, depth, tilt]);

  useEffect(() => {
    updateCardTransforms(true);
  }, [activeIndex, updateCardTransforms]);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight') {
      nextSlide();
    } else if (e.key === 'ArrowLeft') {
      prevSlide();
    }
  };

  // Touch and pointer dragging
  const handlePointerDown = (e) => {
    isDragging.current = true;
    startX.current = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    dragDistance.current = 0;
  };

  const handlePointerMove = (e) => {
    if (!isDragging.current) return;
    const currentX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    dragDistance.current = currentX - startX.current;
  };

  const handlePointerUp = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    if (dragDistance.current < -50) {
      nextSlide();
    } else if (dragDistance.current > 50) {
      prevSlide();
    }
  };

  return (
    <div
      className={`depth-carousel-wrapper ${className}`}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-roledescription="carousel"
      aria-label="Featured Projects 3D Showcase"
    >
      <div
        ref={stageRef}
        className="depth-carousel-stage"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        {items.map((item, idx) => {
          const isActive = idx === activeIndex;
          return (
            <div
              key={item.id || idx}
              ref={(el) => (cardRefs.current[idx] = el)}
              className={`depth-carousel-card border border-slate-700/60 dark:bg-slate-900 bg-white ${
                isActive ? 'is-active' : ''
              }`}
              aria-hidden={!isActive}
            >
              {/* Card visual showcase */}
              <div className="relative h-48 sm:h-56 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-950 overflow-hidden flex flex-col justify-between p-6">
                {/* Tech Badges */}
                <div className="flex items-center justify-between z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30">
                    <Sparkles className="w-3 h-3 text-emerald-400" />
                    {item.tag || "Featured Project"}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    0{idx + 1} / 0{total}
                  </span>
                </div>

                {/* Visual Graphics / Screenshot Mockup */}
                <div className="absolute inset-0 opacity-20 pointer-events-none flex items-center justify-center">
                  <div className="w-96 h-96 rounded-full bg-gradient-to-tr from-blue-600 to-emerald-500 blur-3xl" />
                </div>

                <div className="relative z-10">
                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mb-1">
                    {item.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 line-clamp-1">
                    {item.summary}
                  </p>
                </div>
              </div>

              {/* Card Details & Actions */}
              <div className="p-5 sm:p-6 bg-slate-800/80 dark:bg-slate-900/90 flex flex-col justify-between h-[calc(100%-12rem)] sm:h-[calc(100%-14rem)]">
                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {item.tech.slice(0, 4).map((t, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-0.5 text-xs font-medium rounded-md bg-slate-800 text-slate-300 border border-slate-700/80"
                    >
                      {t}
                    </span>
                  ))}
                  {item.tech.length > 4 && (
                    <span className="px-2 py-0.5 text-xs font-medium text-slate-400">
                      +{item.tech.length - 4} more
                    </span>
                  )}
                </div>

                {/* Action button */}
                <div className="flex items-center justify-between pt-2 border-t border-slate-700/50">
                  <button
                    type="button"
                    onClick={() => onSelectProject && onSelectProject(item)}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md py-1 px-2"
                  >
                    View Case Study
                    <ChevronRight className="w-4 h-4" />
                  </button>

                  <div className="flex items-center gap-2">
                    <span className="text-xs text-emerald-400 font-mono bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/20">
                      Verified Architecture
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Controls & Indicators */}
      <div className="flex items-center justify-center gap-6 mt-6">
        <button
          type="button"
          onClick={prevSlide}
          className="depth-carousel-nav-btn p-2.5 rounded-full bg-slate-800/90 border border-slate-700 text-slate-200 hover:text-white hover:border-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          aria-label="Previous project slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Indicators */}
        <div className="flex items-center gap-2">
          {items.map((_, dotIdx) => (
            <button
              key={dotIdx}
              type="button"
              onClick={() => setActiveIndex(dotIdx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                dotIdx === activeIndex
                  ? 'w-8 bg-blue-600'
                  : 'w-2.5 bg-slate-700 hover:bg-slate-600'
              }`}
              aria-label={`Go to slide ${dotIdx + 1}`}
              aria-current={dotIdx === activeIndex}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={nextSlide}
          className="depth-carousel-nav-btn p-2.5 rounded-full bg-slate-800/90 border border-slate-700 text-slate-200 hover:text-white hover:border-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          aria-label="Next project slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
