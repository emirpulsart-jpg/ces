'use client';

import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

interface UniversesSectionProps {
  onSelectUniverse: (universeKey: 'particulier' | 'coach' | 'david-ai') => void;
}

export default function UniversesSection({ onSelectUniverse }: UniversesSectionProps) {
  return (
    <section id="univers" className="w-full py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Heading - Clean, airy, luxury */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs uppercase tracking-widest text-neutral-400 font-semibold block mb-3">
            Trois Univers
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-950 mb-4 leading-tight">
            Un écosystème conçu pour chacun.
          </h2>
          <p className="text-lg sm:text-xl text-neutral-500 font-light leading-relaxed">
            Athlète individuel, entraîneur ou recherche d’une intelligence dédiée.
          </p>
        </div>

        {/* 3 Compact & Visually Rich Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          
          {/* Card 1: Kalibrium Particulier */}
          <motion.div
            id="particulier"
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col justify-between bg-[#0a0a0c] text-white p-7 sm:p-8 rounded-2xl relative overflow-hidden border border-neutral-800 shadow-xl group"
          >
            <div>
              {/* Universe tag */}
              <span className="text-xs uppercase tracking-widest text-[#1fe0a3] font-bold block mb-3">
                KALIBRIUM PARTICULIER
              </span>

              {/* Slogan */}
              <h3 className="text-2xl font-bold text-white mb-3 tracking-tight leading-snug">
                Ton entraînement. Guidé par la science.
              </h3>

              {/* Description */}
              <p className="text-sm text-neutral-300 font-normal leading-relaxed mb-6">
                Un programme personnalisé qui évolue avec toi et ta progression.
              </p>

              {/* Photo 1: Runner on futuristic treadmill (User Attachment image_ce07ce95.png) */}
              <div className="h-44 w-full bg-neutral-900 rounded-xl overflow-hidden relative mb-6 border border-neutral-800">
                <motion.div
                  layoutId="particulier-image"
                  className="w-full h-full relative"
                  transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Image
                    src="/assets/aistudio/image_ce07ce95.png"
                    alt="Kalibrium Particulier"
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>
              </div>
            </div>

            {/* CTA Button */}
            <div>
              <button
                onClick={() => onSelectUniverse('particulier')}
                className="w-full py-3.5 px-6 bg-white text-black hover:bg-[#1fe0a3] transition-colors text-sm font-semibold tracking-wide flex items-center justify-between rounded-xl cursor-pointer"
              >
                <span>Découvrir Particulier</span>
                <ArrowUpRight className="w-4 h-4 text-black" />
              </button>
            </div>
          </motion.div>

          {/* Card 2: Kalibrium Coach */}
          <motion.div
            id="coach"
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col justify-between bg-white text-neutral-900 p-7 sm:p-8 rounded-2xl relative overflow-hidden border border-neutral-200 shadow-xl group"
          >
            <div>
              {/* Universe tag */}
              <span className="text-xs uppercase tracking-widest text-[#0066ff] font-bold block mb-3">
                KALIBRIUM COACH
              </span>

              {/* Slogan */}
              <h3 className="text-2xl font-bold text-neutral-950 mb-3 tracking-tight leading-snug">
                Le suivi de tes clients. Optimisé par la science.
              </h3>

              {/* Description */}
              <p className="text-sm text-neutral-600 font-normal leading-relaxed mb-6">
                Programme, suis et adapte l&apos;entraînement de tes clients depuis un espace conçu pour les coachs.
              </p>

              {/* Photo 2: Coach holding tablet with athletes program (User Attachment image_21f9f513.png) */}
              <div className="h-44 w-full bg-neutral-100 rounded-xl overflow-hidden relative mb-6 border border-neutral-200">
                <Image
                  src="/assets/aistudio/image_21f9f513.png"
                  alt="Kalibrium Coach"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* CTA Button */}
            <div>
              <button
                onClick={() => onSelectUniverse('coach')}
                className="w-full py-3.5 px-6 bg-neutral-950 text-white hover:bg-[#0066ff] transition-colors text-sm font-semibold tracking-wide flex items-center justify-between rounded-xl cursor-pointer"
              >
                <span>Découvrir Coach</span>
                <ArrowUpRight className="w-4 h-4 text-white" />
              </button>
            </div>
          </motion.div>

          {/* Card 3: David AI */}
          <motion.div
            id="david-ai"
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col justify-between bg-[#07070a] text-white p-7 sm:p-8 rounded-2xl relative overflow-hidden border border-neutral-800 shadow-xl group"
          >
            <div>
              {/* Universe tag */}
              <span className="text-xs uppercase tracking-widest text-[#a855f7] font-bold block mb-3">
                DAVID AI
              </span>

              {/* Slogan */}
              <h3 className="text-2xl font-bold text-white mb-3 tracking-tight leading-snug">
                L&apos;intelligence artificielle au service de l&apos;entraînement.
              </h3>

              {/* Description */}
              <p className="text-sm text-neutral-300 font-normal leading-relaxed mb-6">
                Une intelligence conçue pour transformer les connaissances scientifiques en décisions d&apos;entraînement.
              </p>

              {/* Dynamic Animated Core using User Attachment image_1aedb054.png - CLEAN, NO OVERLAY LABELS */}
              <div className="h-44 w-full bg-black rounded-xl border border-neutral-800 overflow-hidden relative mb-6 flex items-center justify-center">
                <motion.div
                  animate={{
                    scale: [1, 1.06, 1],
                    rotate: [0, 3, -3, 0],
                  }}
                  transition={{
                    duration: 9,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <Image
                    src="/assets/aistudio/image_1aedb054.png"
                    alt="David AI"
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover opacity-95 scale-110"
                  />
                </motion.div>

                {/* Subtle soft pulse ring */}
                <motion.div
                  animate={{
                    scale: [0.95, 1.2, 0.95],
                    opacity: [0.2, 0.5, 0.2],
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute w-24 h-24 rounded-full border border-[#1fe0a3]/40 pointer-events-none"
                />
              </div>
            </div>

            {/* CTA Button */}
            <div>
              <button
                onClick={() => onSelectUniverse('david-ai')}
                className="w-full py-3.5 px-6 bg-white text-black hover:bg-[#a855f7] hover:text-white transition-colors text-sm font-semibold tracking-wide flex items-center justify-between rounded-xl cursor-pointer"
              >
                <span>Découvrir David AI</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
