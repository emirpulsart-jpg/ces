'use client';

import React, { useEffect, useState, useRef } from 'react';
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
    scale: 0.29,
  });

  // Keep callback refs stable to prevent any re-render loops or timer resets
  const onCompleteRef = useRef(onComplete);
  const onPhaseChangeRef = useRef(onPhaseChange);

  useEffect(() => {
    onCompleteRef.current = onComplete;
    onPhaseChangeRef.current = onPhaseChange;
  });

  // Calculate pixel-perfect coordinates to the navbar logo anchor
  const calculateTarget = React.useCallback(() => {
    if (targetRef && targetRef.current) {
      const rect = targetRef.current.getBoundingClientRect();
      if (rect.width > 0 && rect.height > 0) {
        const targetCenterX = rect.left + rect.width / 2;
        const targetCenterY = rect.top + rect.height / 2;
        const screenCenterX = window.innerWidth / 2;
        const screenCenterY = window.innerHeight / 2;

        return {
          x: targetCenterX - screenCenterX,
          y: targetCenterY - screenCenterY,
          scale: rect.height / 110,
        };
      }
    }

    // High-precision geometric fallback based on navbar geometry
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const paddingLeft = isMobile
      ? 24
      : Math.max(24, ((typeof window !== 'undefined' ? window.innerWidth : 1280) - 1280) / 2 + 48);
    const targetX = paddingLeft + 16;
    const targetY = 40; // 80px navbar height centered
    const screenCenterX = (typeof window !== 'undefined' ? window.innerWidth : 1280) / 2;
    const screenCenterY = (typeof window !== 'undefined' ? window.innerHeight : 800) / 2;

    return {
      x: targetX - screenCenterX,
      y: targetY - screenCenterY,
      scale: 32 / 110,
    };
  }, [targetRef]);

  // Sync phase change to parent without triggering timer resets
  useEffect(() => {
    onPhaseChangeRef.current(phase);
  }, [phase]);

  // Single deterministic timer lifecycle: guaranteed to execute once and terminate cleanly
  useEffect(() => {
    // Phase 1: Letters appear -> start merging into logo
    const timer1 = setTimeout(() => {
      setPhase('merging');
    }, 1100);

    // Phase 2: Logo formed at center -> measure target and start traveling
    const timer2 = setTimeout(() => {
      const target = calculateTarget();
      setTargetOffset(target);
      setPhase('traveling');
    }, 2000);

    // Phase 3: Logo arrived at navbar -> complete and unmount
    const timer3 = setTimeout(() => {
      setPhase('done');
      onCompleteRef.current();
    }, 3100);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [calculateTarget]);

  const handleSkip = () => {
    setPhase('done');
    onCompleteRef.current();
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
          duration: 0.75,
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
                      transition: { duration: 0.65, ease: [0.32, 0.72, 0, 1] },
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
                    delay: 0.08 + idx * 0.07,
                    duration: 0.28,
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
                      x: { duration: 0.95, ease: [0.16, 1, 0.3, 1] },
                      y: { duration: 0.95, ease: [0.16, 1, 0.3, 1] },
                      scale: { duration: 0.95, ease: [0.16, 1, 0.3, 1] },
                    }
                  : {
                      duration: 0.6,
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
