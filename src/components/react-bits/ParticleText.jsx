import React, { useRef, useEffect } from 'react';
import './ParticleText.css';

/**
 * ParticleText Component
 * Renders interactive canvas particles forming text with pointer repel & gather.
 * Accessible: uses aria-hidden; semantic text remains in DOM.
 * Respects prefers-reduced-motion.
 */
export default function ParticleText({
  text = "RAHUL KARTHIK",
  particleSize = 2,
  density = 4,
  scatter = 60,
  gatherDuration = 1000,
  pointerRepel = true,
  repelRadius = 70,
  idleDrift = true,
  glow = true,
  className = "",
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let particles = [];
    let mouse = { x: -9999, y: -9999, isHovered: false };

    const width = 640;
    const height = 110;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.scale(dpr, dpr);

    // Create offscreen canvas to sample text pixels
    const offCanvas = document.createElement('canvas');
    offCanvas.width = width;
    offCanvas.height = height;
    const offCtx = offCanvas.getContext('2d');
    if (!offCtx) return;

    offCtx.fillStyle = '#FFFFFF';
    offCtx.font = '800 58px Sora, sans-serif';
    offCtx.textAlign = 'left';
    offCtx.textBaseline = 'middle';
    offCtx.fillText(text, 10, height / 2);

    const imgData = offCtx.getImageData(0, 0, width, height).data;
    const step = Math.max(3, density);

    const newParticles = [];
    const startTime = performance.now();

    for (let y = 0; y < height; y += step) {
      for (let x = 0; x < width; x += step) {
        const index = (y * width + x) * 4;
        const alpha = imgData[index + 3];

        if (alpha > 128) {
          // Subtle color variation: mostly crisp white with occasional blue/emerald tints
          let color = '#FFFFFF';
          const rand = Math.random();
          if (rand > 0.85) color = '#60A5FA'; // soft blue
          else if (rand > 0.7) color = '#34D399'; // soft emerald

          const startX = x + (Math.random() - 0.5) * scatter * 2;
          const startY = y + (Math.random() - 0.5) * scatter * 2;

          newParticles.push({
            originX: x,
            originY: y,
            x: startX,
            y: startY,
            vx: 0,
            vy: 0,
            size: particleSize + (Math.random() * 0.8 - 0.4),
            color,
            alpha: 0.1,
            targetAlpha: 0.85 + Math.random() * 0.15,
            angle: Math.random() * Math.PI * 2,
            driftSpeed: 0.001 + Math.random() * 0.002
          });
        }
      }
    }

    particles = newParticles;

    const handlePointerMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = (e.clientX - rect.left) * (width / rect.width);
      mouse.y = (e.clientY - rect.top) * (height / rect.height);
      mouse.isHovered = true;
    };

    const handlePointerLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
      mouse.isHovered = false;
    };

    canvas.addEventListener('pointermove', handlePointerMove);
    canvas.addEventListener('pointerleave', handlePointerLeave);

    const render = (now) => {
      ctx.clearRect(0, 0, width, height);

      const elapsed = now - startTime;
      const gatherProgress = Math.min(1, elapsed / gatherDuration);
      // easeOutCubic
      const ease = 1 - Math.pow(1 - gatherProgress, 3);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Idle drift
        let targetX = p.originX;
        let targetY = p.originY;

        if (idleDrift) {
          p.angle += p.driftSpeed;
          targetX += Math.sin(p.angle) * 0.8;
          targetY += Math.cos(p.angle) * 0.8;
        }

        // Gather from scatter
        if (gatherProgress < 1) {
          p.x = p.x + (targetX - p.x) * (ease * 0.12);
          p.y = p.y + (targetY - p.y) * (ease * 0.12);
          p.alpha = 0.1 + ease * (p.targetAlpha - 0.1);
        } else {
          // Pointer repel logic
          if (pointerRepel && mouse.isHovered) {
            const dx = mouse.x - p.x;
            const dy = mouse.y - p.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < repelRadius && dist > 0) {
              const force = (1 - dist / repelRadius) * 12;
              const angle = Math.atan2(dy, dx);
              p.vx -= Math.cos(angle) * force * 0.3;
              p.vy -= Math.sin(angle) * force * 0.3;
            }
          }

          // Spring return to origin
          const spring = 0.08;
          const friction = 0.86;

          p.vx += (targetX - p.x) * spring;
          p.vy += (targetY - p.y) * spring;
          p.vx *= friction;
          p.vy *= friction;

          p.x += p.vx;
          p.y += p.vy;
          p.alpha = p.targetAlpha;
        }

        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalAlpha = 1.0;
      animationFrameId = requestAnimationFrame(render);
    };

    let isVisible = true;
    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
      if (isVisible) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = requestAnimationFrame(render);
      } else {
        cancelAnimationFrame(animationFrameId);
      }
    }, { threshold: 0.05 });
    observer.observe(canvas);

    animationFrameId = requestAnimationFrame(render);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
      canvas.removeEventListener('pointermove', handlePointerMove);
      canvas.removeEventListener('pointerleave', handlePointerLeave);
    };
  }, [text, particleSize, density, scatter, gatherDuration, pointerRepel, repelRadius, idleDrift, glow]);

  return (
    <div className={`particle-text-container ${className}`} aria-hidden="true">
      <canvas ref={canvasRef} className="particle-text-canvas" />
      <div className="particle-text-reduced-motion font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white">
        {text}
      </div>
    </div>
  );
}
