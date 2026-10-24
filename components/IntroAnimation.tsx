'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { KalibriumMark } from './Logo';

export type IntroPhase = 'typing' | 'merging' | 'traveling' | 'done';

interface IntroAnimationProps {
  onComplete: () => void;
  onPhaseChange: (phase: IntroPhase) => void;
  targetRef: React.RefObject<HTMLDivElement | null>;
}

const LETTERS = ['K', 'A', 'L', 'I', 'B', 'R', 'I', 'U', 'M'];

export default function IntroAnimation({
  onComplete,
  onPhaseChange,
  targetRef,
}: IntroAnimationProps) {
  const [phase, setPhase] = useState<IntroPhase>('typing');
  const [targetOffset, setTargetOffset] = useState<{ x: number; y: number; scale: number }>({
    x: -300,
    y: -300,
    scale: 0.3,
  });

  // Calculate pixel-perfect coordinates to the navbar logo anchor
  const updateTargetCoordinates = React.useCallback(() => {
    if (targetRef && targetRef.current) {
      const rect = targetRef.current.getBoundingClientRect();
      const targetCenterX = rect.left + rect.width / 2;
      const targetCenterY = rect.top + rect.height / 2;
      const screenCenterX = window.innerWidth / 2;
      const screenCenterY = window.innerHeight / 2;

      const deltaX = targetCenterX - screenCenterX;
      const deltaY = targetCenterY - screenCenterY;
      const scale = rect.height / 110; // 110 is the base SVG dimension of the central logo

      setTargetOffset({
        x: deltaX,
        y: deltaY,
        scale: Math.max(0.24, Math.min(0.4, scale)),
      });
    }
  }, [targetRef]);

  useEffect(() => {
    updateTargetCoordinates();
    window.addEventListener('resize', updateTargetCoordinates);
    return () => window.removeEventListener('resize', updateTargetCoordinates);
  }, [updateTargetCoordinates]);

  useEffect(() => {
    onPhaseChange(phase);
  }, [phase, onPhaseChange]);

  useEffect(() => {
    // Phase 1: Letters appear -> start merging into logo
    const timer1 = setTimeout(() => {
      setPhase('merging');
    }, 1200);

    // Phase 2: Logo formed at center -> start traveling to navbar while site unblurs
    const timer2 = setTimeout(() => {
      updateTargetCoordinates();
      setPhase('traveling');
    }, 2200);

    // Phase 3: Logo arrived -> handoff cleanly to navbar
    const timer3 = setTimeout(() => {
      setPhase('done');
      onComplete();
    }, 3300);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete, updateTargetCoordinates]);

  const handleSkip = () => {
    setPhase('done');
    onComplete();
  };

  if (phase === 'done') {
    return null;
  }

  const isTraveling = phase === 'traveling';

  return (
    <div className="fixed inset-0 z-50 pointer-events-none select-none overflow-hidden">
      
      {/* Black Background Curtain: Fades smoothly to 0 when letters merge, revealing the blurred site already in place */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{
          opacity: phase === 'typing' ? 1 : 0,
        }}
        transition={{
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="absolute inset-0 bg-black pointer-events-auto"
      />

      {/* Central Choreography Canvas */}
      <div className="relative w-full h-full flex items-center justify-center">
        
        {/* Letters Group */}
        <AnimatePresence>
          {(phase === 'typing' || phase === 'merging') && (
            <motion.div
              key="letters"
              className="flex items-center gap-3 sm:gap-5 md:gap-7 pointer-events-none"
              initial={{ opacity: 1 }}
              animate={
                phase === 'merging'
                  ? {
                      scale: 0.3,
                      opacity: 0,
                      filter: 'blur(10px)',
                      transition: { duration: 0.7, ease: [0.32, 0.72, 0, 1] },
                    }
                  : { opacity: 1 }
              }
              exit={{ opacity: 0 }}
            >
              {LETTERS.map((letter, idx) => (
                <motion.span
                  key={`${letter}-${idx}`}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.1 + idx * 0.08,
                    duration: 0.3,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="font-bold text-3xl sm:text-5xl md:text-6xl text-white tracking-widest uppercase font-sans"
                >
                  {letter}
                </motion.span>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* The Exact Kalibrium Mark Forming and Traveling into the Navbar */}
        <AnimatePresence>
          {(phase === 'merging' || phase === 'traveling') && (
            <motion.div
              key="logo-mark"
              initial={{ scale: 0.2, opacity: 0, x: 0, y: 0 }}
              animate={
                isTraveling
                  ? {
                      x: targetOffset.x,
                      y: targetOffset.y,
                      scale: targetOffset.scale,
                      opacity: 1,
                    }
                  : {
                      scale: 1.15,
                      opacity: 1,
                      x: 0,
                      y: 0,
                    }
              }
              transition={
                isTraveling
                  ? {
                      x: { duration: 1.05, ease: [0.16, 1, 0.3, 1] },
                      y: { duration: 1.05, ease: [0.16, 1, 0.3, 1] },
                      scale: { duration: 1.05, ease: [0.16, 1, 0.3, 1] },
                    }
                  : {
                      duration: 0.65,
                      ease: [0.16, 1, 0.3, 1],
                    }
              }
              className="absolute z-40 flex items-center justify-center pointer-events-none"
            >
              <KalibriumMark
                size={110}
                color={isTraveling ? '#000000' : '#1fe0a3'}
              />
            </motion.div>
          )}
        </AnimatePresence>

      </div>

      {/* Skip Button */}
      <button
        onClick={handleSkip}
        className="pointer-events-auto absolute bottom-8 right-8 text-xs uppercase tracking-wider font-semibold text-neutral-400 hover:text-black transition-colors z-50 cursor-pointer"
      >
        Passer &rarr;
      </button>

    </div>
  );
}
