import React, { useRef, useState, useCallback } from 'react';
import './BorderGlow.css';

/**
 * BorderGlow Component
 * Subtle pointer-responsive glowing card border.
 * Features:
 * - Pointer proximity detection for desktop
 * - Static subtle border fallback for touch/mobile
 * - Respects prefers-reduced-motion
 * - Completely accessible and keyboard navigable
 */
export default function BorderGlow({
  children,
  className = '',
  glowColor = '#2563EB',
  accentColor = '#10B981',
  glowRadius = 300,
  borderRadius = '1rem',
  intensity = 0.5,
  as: Component = 'div',
  ...rest
}) {
  const cardRef = useRef(null);
  const [opacity, setOpacity] = useState(0);

  const handlePointerMove = useCallback((e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);
    setOpacity(intensity);
  }, [intensity]);

  const handlePointerEnter = useCallback(() => {
    setOpacity(intensity);
  }, [intensity]);

  const handlePointerLeave = useCallback(() => {
    setOpacity(0);
  }, []);

  return (
    <Component
      ref={cardRef}
      onPointerMove={handlePointerMove}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      className={`border-glow-wrapper relative transition-all duration-300 ${className}`}
      style={{
        borderRadius,
        '--glow-radius': `${glowRadius}px`,
        '--glow-color-1': glowColor,
        '--glow-color-2': accentColor,
        '--glow-opacity': opacity,
      }}
      {...rest}
    >
      <div className="border-glow-overlay" style={{ borderRadius }} aria-hidden="true" />
      {children}
    </Component>
  );
}
