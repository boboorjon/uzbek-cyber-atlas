import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  originalX: number;
  originalY: number;
}

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationIdRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      const particles: Particle[] = [];
      // Increased density: more particles per area
      const particleCount = Math.floor((canvas.width * canvas.height) / 8000);
      
      // Create grid-based distribution for more uniform coverage
      const cols = Math.ceil(Math.sqrt(particleCount * (canvas.width / canvas.height)));
      const rows = Math.ceil(particleCount / cols);
      const cellWidth = canvas.width / cols;
      const cellHeight = canvas.height / rows;
      
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          if (particles.length >= particleCount) break;
          
          // Add some randomness within each grid cell
          const x = (i * cellWidth) + (Math.random() * cellWidth * 0.8) + (cellWidth * 0.1);
          const y = (j * cellHeight) + (Math.random() * cellHeight * 0.8) + (cellHeight * 0.1);
          
          particles.push({
            x,
            y,
            vx: (Math.random() - 0.5) * 0.3,
            vy: (Math.random() - 0.5) * 0.3,
            originalX: x,
            originalY: y,
          });
        }
      }
      
      particlesRef.current = particles;
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const particles = particlesRef.current;
      
      // Draw connections first (behind particles)
      ctx.strokeStyle = 'rgba(255, 215, 0, 0.08)';
      ctx.lineWidth = 0.5;
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          // Increased connection distance for better network effect
          if (distance < 150) {
            const opacity = (150 - distance) / 150 * 0.15;
            ctx.strokeStyle = `rgba(255, 215, 0, ${opacity})`;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      
      // Draw particles (smaller and more subtle)
      ctx.fillStyle = 'rgba(255, 215, 0, 0.4)';
      particles.forEach(particle => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, 1.5, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    const updateParticles = () => {
      const particles = particlesRef.current;
      const mouse = mouseRef.current;
      
      particles.forEach(particle => {
        // Mouse repulsion with gentler effect
        const dx = particle.x - mouse.x;
        const dy = particle.y - mouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 120) {
          const force = (120 - distance) / 120;
          particle.vx += (dx / distance) * force * 0.15;
          particle.vy += (dy / distance) * force * 0.15;
        }
        
        // Return to original position (gentler pull)
        const returnForce = 0.015;
        particle.vx += (particle.originalX - particle.x) * returnForce;
        particle.vy += (particle.originalY - particle.y) * returnForce;
        
        // Apply velocity
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Stronger damping for smoother movement
        particle.vx *= 0.92;
        particle.vy *= 0.92;
        
        // Boundary constraints (keep particles on screen)
        if (particle.x < 0) {
          particle.x = 0;
          particle.vx *= -0.3;
        }
        if (particle.x > canvas.width) {
          particle.x = canvas.width;
          particle.vx *= -0.3;
        }
        if (particle.y < 0) {
          particle.y = 0;
          particle.vy *= -0.3;
        }
        if (particle.y > canvas.height) {
          particle.y = canvas.height;
          particle.vy *= -0.3;
        }
      });
    };

    const animate = () => {
      updateParticles();
      drawParticles();
      animationIdRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY,
      };
    };

    const handleResize = () => {
      resizeCanvas();
      createParticles();
    };

    // Initialize
    resizeCanvas();
    createParticles();
    animate();

    // Event listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  );
};

export default ParticleBackground;
