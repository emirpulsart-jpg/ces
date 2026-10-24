'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';

interface HeroProps {
  onExploreUniverses: () => void;
}

export default function Hero({ onExploreUniverses }: HeroProps) {
  return (
    <section className="relative w-full bg-white text-neutral-950 flex flex-col justify-center items-center pt-24 sm:pt-32 lg:pt-36 pb-20 sm:pb-28 overflow-hidden">
      
      {/* Main Content Centered on Pure White */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
        
        {/* Main Headline - Centered, bold, high-end Apple aesthetic */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-neutral-950 leading-[1.08] mb-6 max-w-3xl"
          style={{ textWrap: 'balance' }}
        >
          L&apos;entraînement, guidé par la science.
        </motion.h1>

        {/* Subtitle - Centered, airy, refined */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg sm:text-xl lg:text-2xl text-neutral-500 font-normal leading-relaxed max-w-2xl mb-10"
          style={{ textWrap: 'balance' }}
        >
          Un écosystème qui transforme les connaissances scientifiques en programmes d&apos;entraînement personnalisés.
        </motion.p>

        {/* ONE Centered CTA: "En savoir plus" */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center"
        >
          <button
            onClick={onExploreUniverses}
            className="group px-8 py-3.5 bg-black text-white hover:bg-neutral-800 transition-all duration-200 text-sm font-semibold tracking-wide flex items-center justify-center gap-2 rounded-xl cursor-pointer shadow-md hover:shadow-lg focus:outline-none"
          >
            <span>En savoir plus</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </button>
        </motion.div>

      </div>

    </section>
  );
}
