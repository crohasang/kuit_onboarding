'use client';

import React, { useEffect, useRef, useCallback } from 'react';

const Fireworks = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const createParticles = useCallback((x: number, y: number) => {
    const particles = [];
    const colors = ['#FFD700', '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4'];
    
    for (let i = 0; i < 12; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;
      particle.style.transform = `rotate(${i * 30}deg)`;
      particle.style.animation = 'spread 1s ease-out forwards';
      particles.push(particle);
    }
    return particles;
  }, []);

  const explode = useCallback((container: HTMLDivElement) => {
    const x = Math.random() * (container.offsetWidth - 100) + 50;
    const y = container.offsetHeight * 0.4;
    
    const firework = document.createElement('div');
    firework.className = 'firework-container';
    firework.style.left = `${x}px`;
    
    const particles = createParticles(x, y);
    particles.forEach(particle => {
      setTimeout(() => {
        if (containerRef.current) {
          containerRef.current.appendChild(particle);
          setTimeout(() => {
            if (particle.parentNode) {
              particle.parentNode.removeChild(particle);
            }
          }, 1000);
        }
      }, Math.random() * 100);
    });
  }, [createParticles]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const interval = setInterval(() => {
      explode(container);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [explode]);

  return <div ref={containerRef} className="firework-background" />;
};

export default Fireworks;
