import React, { useRef, useEffect, useState } from 'react';
import './AeroShards.css';

/**
 * AeroShards Component
 * Atmospheric 3D shard streaming visual for hero section.
 * Progressive enhancement: gracefully falls back to ambient glow if WebGPU/WebGL unsupported or if onError fires.
 * Respects prefers-reduced-motion.
 */
export default function AeroShards({
  backgroundColor = "#0F172A",
  shardColor = "#2563EB",
  accentColor = "#10B981",
  placement = "right",
  flow = "stream",
  material = "pearl",
  detail = "balanced",
  effect = "none",
  scale = 1.0,
  spread = 1.0,
  depth = 1.0,
  speed = 0.7,
  interaction = "repel",
  density = 40,
  onError,
  className = "",
}) {
  const canvasRef = useRef(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    try {
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        throw new Error('Canvas 2D rendering context not supported');
      }

      let animationFrameId;
      let isVisible = true;
      let width = (canvas.width = canvas.parentElement.clientWidth || 800);
      let height = (canvas.height = canvas.parentElement.clientHeight || 700);
      let rect = canvas.getBoundingClientRect();

      // Mouse tracking for repel interaction
      const mouse = { x: -9999, y: -9999 };
      const handlePointerMove = (e) => {
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
      };

      window.addEventListener('pointermove', handlePointerMove, { passive: true });

      const handleResize = () => {
        if (!canvas || !canvas.parentElement) return;
        width = canvas.width = canvas.parentElement.clientWidth;
        height = canvas.height = canvas.parentElement.clientHeight;
        rect = canvas.getBoundingClientRect();
      };
      window.addEventListener('resize', handleResize, { passive: true });
      window.addEventListener('scroll', () => { rect = canvas.getBoundingClientRect(); }, { passive: true });

      // Generate shard particles
      const shardCount = Math.floor(density * spread);
      const shards = [];

      for (let i = 0; i < shardCount; i++) {
        // Bias shards to the right side if placement === 'right'
        const startX = placement === 'right' 
          ? width * 0.45 + Math.random() * (width * 0.55)
          : Math.random() * width;

        shards.push({
          x: startX,
          y: Math.random() * height,
          z: Math.random() * depth,
          size: (12 + Math.random() * 22) * scale,
          rotation: Math.random() * Math.PI * 2,
          rotSpeed: (Math.random() - 0.5) * 0.02,
          vy: (0.3 + Math.random() * 0.7) * (prefersReducedMotion ? 0 : speed),
          vx: (Math.random() - 0.4) * 0.3 * (prefersReducedMotion ? 0 : speed),
          isAccent: Math.random() > 0.75,
          alpha: 0.15 + Math.random() * 0.45,
        });
      }

      const drawShard = (shard) => {
        ctx.save();
        ctx.translate(shard.x, shard.y);
        ctx.rotate(shard.rotation);

        // Perspective scale based on z
        const pScale = 0.6 + shard.z * 0.4;
        ctx.scale(pScale, pScale);

        // Subtle gradient on shard
        const grad = ctx.createLinearGradient(-shard.size, -shard.size, shard.size, shard.size);
        if (shard.isAccent) {
          grad.addColorStop(0, accentColor);
          grad.addColorStop(1, 'rgba(16, 185, 129, 0.15)');
        } else {
          grad.addColorStop(0, shardColor);
          grad.addColorStop(1, 'rgba(37, 99, 235, 0.1)');
        }

        ctx.fillStyle = grad;
        ctx.globalAlpha = shard.alpha;

        // Polygon shard (gem / shard crystal shape)
        ctx.beginPath();
        ctx.moveTo(0, -shard.size * 0.9);
        ctx.lineTo(shard.size * 0.4, 0);
        ctx.lineTo(0, shard.size * 0.9);
        ctx.lineTo(-shard.size * 0.3, 0);
        ctx.closePath();
        ctx.fill();

        // Delicate outline for technical elegance
        ctx.strokeStyle = shard.isAccent ? 'rgba(52, 211, 153, 0.4)' : 'rgba(96, 165, 250, 0.3)';
        ctx.lineWidth = 1;
        ctx.stroke();

        ctx.restore();
      };

      const animate = () => {
        if (!isVisible) return;
        ctx.clearRect(0, 0, width, height);

        for (let i = 0; i < shards.length; i++) {
          const s = shards[i];

          if (!prefersReducedMotion) {
            s.y -= s.vy;
            s.x += s.vx;
            s.rotation += s.rotSpeed;

            // Repel interaction with mouse
            if (interaction === 'repel') {
              const dx = s.x - mouse.x;
              const dy = s.y - mouse.y;
              const dist = Math.sqrt(dx * dx + dy * dy);
              if (dist < 120 && dist > 0) {
                const force = (1 - dist / 120) * 3;
                s.x += (dx / dist) * force;
                s.y += (dy / dist) * force;
              }
            }

            // Loop shards around screen boundaries
            if (s.y < -50) s.y = height + 40;
            if (s.x > width + 50) s.x = width * 0.4;
            if (s.x < width * 0.35 && placement === 'right') s.x = width * 0.9;
          }

          drawShard(s);
        }

        animationFrameId = requestAnimationFrame(animate);
      };

      // Only animate when visible in viewport
      const observer = new IntersectionObserver(([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible) {
          cancelAnimationFrame(animationFrameId);
          animationFrameId = requestAnimationFrame(animate);
        } else {
          cancelAnimationFrame(animationFrameId);
        }
      }, { threshold: 0.05 });
      observer.observe(canvas);

      animationFrameId = requestAnimationFrame(animate);

      return () => {
        observer.disconnect();
        cancelAnimationFrame(animationFrameId);
        window.removeEventListener('pointermove', handlePointerMove);
        window.removeEventListener('resize', handleResize);
      };
    } catch (err) {
      console.warn('AeroShards fallback activated:', err);
      setHasError(true);
      if (onError) onError(err);
    }
  }, [backgroundColor, shardColor, accentColor, placement, flow, material, detail, effect, scale, spread, depth, speed, interaction, density, onError]);

  return (
    <div className={`aero-shards-container ${className}`} aria-hidden="true">
      {hasError ? (
        <div className="aero-shards-fallback" />
      ) : (
        <canvas ref={canvasRef} className="aero-shards-canvas" />
      )}
    </div>
  );
}
