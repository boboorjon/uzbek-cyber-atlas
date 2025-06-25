import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  z: number; // 3D depth
  vx: number;
  vy: number;
  vz: number; // 3D velocity
  originalX: number;
  originalY: number;
  originalZ: number;
  size: number;
  baseSize: number;
  opacity: number;
  hue: number; // For color variation
  rotationSpeed: number;
  rotation: number;
  colorType: number; // 0 = gold, 1 = white, 2 = gray
}

const Enhanced3DParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationIdRef = useRef<number>();
  const timeRef = useRef(0);

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
      // Increased particle count for more immersive effect
      const particleCount = Math.floor((canvas.width * canvas.height) / 3000);

      for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const z = Math.random() * 1000 + 100; // Depth from 100 to 1100
        const baseSize = Math.random() * 2 + 1;

        particles.push({
          x,
          y,
          z,
          vx: (Math.random() - 0.5) * 0.8,
          vy: (Math.random() - 0.5) * 0.8,
          vz: (Math.random() - 0.5) * 0.3,
          originalX: x,
          originalY: y,
          originalZ: z,
          size: baseSize,
          baseSize,
          opacity: Math.random() * 0.6 + 0.4,
          hue: 0, // Not used anymore, keeping for compatibility
          rotationSpeed: (Math.random() - 0.5) * 0.03,
          rotation: Math.random() * Math.PI * 2,
          colorType: Math.floor(Math.random() * 3), // Random color type
        });
      }

      particlesRef.current = particles;
    };

    const get3DProjection = (particle: Particle) => {
      // Simple 3D to 2D projection
      const perspective = 800;
      const scale = perspective / (perspective + particle.z);
      return {
        x: particle.x,
        y: particle.y,
        scale,
        size: particle.baseSize * scale,
        opacity: particle.opacity * scale
      };
    };

    const getParticleColors = (colorType: number, baseOpacity: number) => {
      switch (colorType) {
        case 0: // Gold
          return {
            outer: `rgba(255, 215, 0, ${baseOpacity})`,
            middle: `rgba(255, 193, 7, ${baseOpacity * 0.8})`,
            inner: `rgba(255, 140, 0, ${baseOpacity * 0.6})`,
            core: `rgba(184, 134, 11, ${baseOpacity * 0.4})`
          };
        case 1: // White
          return {
            outer: `rgba(255, 255, 255, ${baseOpacity})`,
            middle: `rgba(248, 250, 252, ${baseOpacity * 0.8})`,
            inner: `rgba(241, 245, 249, ${baseOpacity * 0.6})`,
            core: `rgba(203, 213, 225, ${baseOpacity * 0.4})`
          };
        case 2: // Gray
        default:
          return {
            outer: `rgba(156, 163, 175, ${baseOpacity})`,
            middle: `rgba(107, 114, 128, ${baseOpacity * 0.8})`,
            inner: `rgba(75, 85, 99, ${baseOpacity * 0.6})`,
            core: `rgba(55, 65, 81, ${baseOpacity * 0.4})`
          };
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const particles = particlesRef.current;
      const time = timeRef.current;

      // Sort particles by depth (furthest first)
      const sortedParticles = [...particles].sort((a, b) => b.z - a.z);

      // Draw connections first with softer colors
      ctx.lineWidth = 0.5;

      for (let i = 0; i < sortedParticles.length; i++) {
        const particleA = sortedParticles[i];
        const projA = get3DProjection(particleA);

        for (let j = i + 1; j < sortedParticles.length; j++) {
          const particleB = sortedParticles[j];
          const projB = get3DProjection(particleB);

          const dx = projA.x - projB.x;
          const dy = projA.y - projB.y;
          const dz = Math.abs(particleA.z - particleB.z);
          const distance = Math.sqrt(dx * dx + dy * dy + dz * 0.1);

          const maxDistance = 120;

          if (distance < maxDistance) {
            const opacity = (maxDistance - distance) / maxDistance * 0.15 * (projA.scale + projB.scale) * 0.5;
            // Soft connection lines with subtle gold tint
            ctx.strokeStyle = `rgba(156, 163, 175, ${opacity})`;
            ctx.beginPath();
            ctx.moveTo(projA.x, projA.y);
            ctx.lineTo(projB.x, projB.y);
            ctx.stroke();
          }
        }
      }

      // Draw particles with beautiful colors
      sortedParticles.forEach(particle => {
        const proj = get3DProjection(particle);
        const pulse = Math.sin(time * 0.002 + particle.rotation) * 0.2 + 1;
        const baseOpacity = proj.opacity * pulse * 0.9;

        const colors = getParticleColors(particle.colorType, baseOpacity);

        // Create gradient for 3D sphere effect
        const gradient = ctx.createRadialGradient(
            proj.x - proj.size * 0.3,
            proj.y - proj.size * 0.3,
            0,
            proj.x,
            proj.y,
            proj.size * 1.2
        );

        gradient.addColorStop(0, colors.outer);
        gradient.addColorStop(0.3, colors.middle);
        gradient.addColorStop(0.7, colors.inner);
        gradient.addColorStop(1, colors.core);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(proj.x, proj.y, proj.size * pulse, 0, Math.PI * 2);
        ctx.fill();

        // Add subtle glow effect
        ctx.shadowColor = colors.outer;
        ctx.shadowBlur = proj.size * 2;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;

        ctx.fillStyle = colors.inner;
        ctx.beginPath();
        ctx.arc(proj.x, proj.y, proj.size * pulse * 0.6, 0, Math.PI * 2);
        ctx.fill();

        // Reset shadow
        ctx.shadowBlur = 0;

        // Update particle rotation
        particle.rotation += particle.rotationSpeed;
      });
    };

    const updateParticles = () => {
      const particles = particlesRef.current;
      const mouse = mouseRef.current;
      const time = timeRef.current;

      particles.forEach(particle => {
        // Enhanced 3D mouse repulsion
        const proj = get3DProjection(particle);
        const dx = proj.x - mouse.x;
        const dy = proj.y - mouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        const repulsionRadius = 120 + particle.size * 30;

        if (distance < repulsionRadius && distance > 0) {
          const force = (repulsionRadius - distance) / repulsionRadius;
          const repulsionStrength = 0.4 * proj.scale;
          const forceX = (dx / distance) * force * repulsionStrength;
          const forceY = (dy / distance) * force * repulsionStrength;

          particle.vx += forceX;
          particle.vy += forceY;
          particle.vz += force * 0.1; // Push away in 3D space
        }

        // Gentle drift back to original position in 3D
        const returnForce = 0.008;
        particle.vx += (particle.originalX - particle.x) * returnForce;
        particle.vy += (particle.originalY - particle.y) * returnForce;
        particle.vz += (particle.originalZ - particle.z) * returnForce * 0.5;

        // Enhanced chaotic movement
        const chaosX = (Math.random() - 0.5) * 0.3;
        const chaosY = (Math.random() - 0.5) * 0.3;
        const chaosZ = (Math.random() - 0.5) * 0.15;

        particle.vx += chaosX;
        particle.vy += chaosY;
        particle.vz += chaosZ;

        // Natural floating motion with stronger time-based waves
        const waveX = Math.sin(time * 0.003 + particle.originalX * 0.01) * 0.25;
        const waveY = Math.cos(time * 0.0035 + particle.originalY * 0.01) * 0.25;
        const waveZ = Math.sin(time * 0.002 + particle.originalZ * 0.01) * 0.12;

        particle.vx += waveX;
        particle.vy += waveY;
        particle.vz += waveZ;

        // Apply velocity
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.z += particle.vz;

        // 3D damping (slightly reduced for more movement)
        const damping = 0.92;
        particle.vx *= damping;
        particle.vy *= damping;
        particle.vz *= damping;

        // Boundary wrapping for seamless effect
        if (particle.x < -50) particle.x = canvas.width + 50;
        if (particle.x > canvas.width + 50) particle.x = -50;
        if (particle.y < -50) particle.y = canvas.height + 50;
        if (particle.y > canvas.height + 50) particle.y = -50;
        if (particle.z < 50) particle.z = 1150;
        if (particle.z > 1150) particle.z = 50;
      });

      timeRef.current += 1;
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
      <div className="fixed inset-0 overflow-hidden">
        {/* Dark soft background with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800"></div>

        <canvas
            ref={canvasRef}
            className="absolute inset-0 pointer-events-none z-10"
            style={{ background: 'transparent' }}
        />
      </div>
  );
};

export default Enhanced3DParticleBackground;