'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';

interface HeroProps {
  onExploreUniverses: () => void;
}

export default function Hero({ onExploreUniverses }: HeroProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Animated 3D particle globe inspired by attachment image_f8db711e.png
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 800);
    let height = (canvas.height = 420);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = Math.min(460, window.innerHeight * 0.45);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    // Generate sphere points (latitude / longitude rings)
    const points: { x: number; y: number; z: number; baseAlpha: number }[] = [];
    const numLat = 22;
    const numLon = 44;
    const radius = Math.min(width * 0.42, 260);

    for (let i = 0; i <= numLat; i++) {
      const theta = (i * Math.PI) / numLat;
      const sinTheta = Math.sin(theta);
      const cosTheta = Math.cos(theta);

      for (let j = 0; j < numLon; j++) {
        const phi = (j * 2 * Math.PI) / numLon;
        const x = radius * sinTheta * Math.cos(phi);
        const y = radius * cosTheta;
        const z = radius * sinTheta * Math.sin(phi);
        // Only keep upper hemisphere to look like the globe emerging from bottom
        if (y < radius * 0.6) {
          points.push({
            x,
            y,
            z,
            baseAlpha: Math.random() * 0.5 + 0.4,
          });
        }
      }
    }

    let rotationAngle = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      rotationAngle += 0.0035;
      const centerX = width / 2;
      const centerY = height + radius * 0.15; // Centered sphere rising from bottom

      // Ambient radial glow behind globe
      const glowGrad = ctx.createRadialGradient(
        centerX,
        centerY - radius * 0.6,
        10,
        centerX,
        centerY - radius * 0.5,
        radius * 1.3
      );
      glowGrad.addColorStop(0, 'rgba(31, 224, 163, 0.12)');
      glowGrad.addColorStop(0.5, 'rgba(255, 255, 255, 0.04)');
      glowGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = glowGrad;
      ctx.beginPath();
      ctx.arc(centerX, centerY - radius * 0.5, radius * 1.4, 0, Math.PI * 2);
      ctx.fill();

      // Render points sorted by depth
      const cosRot = Math.cos(rotationAngle);
      const sinRot = Math.sin(rotationAngle);

      // Slight tilt on X axis
      const tiltAngle = 0.28;
      const cosTilt = Math.cos(tiltAngle);
      const sinTilt = Math.sin(tiltAngle);

      const projectedPoints = points.map((p) => {
        // Rotate around Y
        const rx = p.x * cosRot - p.z * sinRot;
        const rz = p.x * sinRot + p.z * cosRot;

        // Tilt around X
        const ry = p.y * cosTilt - rz * sinTilt;
        const finalZ = p.y * sinTilt + rz * cosTilt;

        return {
          px: centerX + rx,
          py: centerY + ry,
          depth: finalZ,
          alpha: p.baseAlpha,
        };
      });

      projectedPoints.sort((a, b) => a.depth - b.depth);

      for (const p of projectedPoints) {
        if (p.py > height + 40) continue;

        // Depth scale and lighting
        const normZ = (p.depth + radius) / (2 * radius);
        const pointAlpha = Math.max(0.08, normZ * p.alpha);
        const pointSize = Math.max(1, normZ * 2.2);

        ctx.fillStyle = `rgba(255, 255, 255, ${pointAlpha})`;
        ctx.beginPath();
        ctx.arc(p.px, p.py, pointSize, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="relative w-full min-h-[85vh] lg:min-h-[90vh] bg-[#070709] text-white flex flex-col justify-between items-center pt-24 sm:pt-32 lg:pt-40 overflow-hidden">
      
      {/* Subtle ambient lighting vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_20%,rgba(40,40,48,0.6),rgba(7,7,9,1))] pointer-events-none" />

      {/* Main Content Centered */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
        
        {/* Main Headline - Centered, bold, high-end Apple aesthetic */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08] mb-6 max-w-3xl"
          style={{ textWrap: 'balance' }}
        >
          L&apos;entraînement, guidé par la science.
        </motion.h1>

        {/* Subtitle - Centered, airy, refined */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg sm:text-xl lg:text-2xl text-neutral-400 font-normal leading-relaxed max-w-2xl mb-10"
          style={{ textWrap: 'balance' }}
        >
          Un écosystème qui transforme les connaissances scientifiques en programmes d&apos;entraînement personnalisés.
        </motion.p>

        {/* EXACTLY ONE CTA AS REQUESTED: "En savoir plus", centered, redirects to 3 universes */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center"
        >
          <button
            onClick={onExploreUniverses}
            className="group px-8 py-3.5 bg-white text-black hover:bg-neutral-200 transition-all duration-200 text-sm font-semibold tracking-wide flex items-center justify-center gap-2 rounded-lg cursor-pointer shadow-lg hover:shadow-white/10 focus:outline-none"
          >
            <span>En savoir plus</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </button>
        </motion.div>

      </div>

      {/* 3D Dotted Globe Emerging from the bottom (like attachment image_f8db711e.png) */}
      <div className="relative w-full max-w-5xl h-[320px] sm:h-[400px] flex items-end justify-center pointer-events-none mt-4">
        <canvas ref={canvasRef} className="w-full h-full block" />
        {/* Soft bottom fade gradient */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#070709] to-transparent pointer-events-none" />
      </div>

    </section>
  );
}
