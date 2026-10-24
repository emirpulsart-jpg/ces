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
    <section id="univers" className="w-full py-28 sm:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Heading - Clean, airy, luxury */}
        <div className="text-center max-w-3xl mx-auto mb-20 sm:mb-24">
          <span className="text-sm uppercase tracking-widest text-neutral-400 font-semibold block mb-4">
            Trois Univers
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-950 mb-6 leading-tight">
            Un écosystème conçu pour chacun.
          </h2>
          <p className="text-xl sm:text-2xl text-neutral-500 font-light leading-relaxed">
            Que vous soyez athlète individuel, entraîneur de haut niveau ou à la recherche d’une intelligence dédiée.
          </p>
        </div>

        {/* 3 Distinct Large Visual Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* Card 1: Kalibrium Particulier */}
          <motion.div
            id="particulier"
            whileHover={{ y: -6 }}
            transition={{ duration: 0.25 }}
            className="flex flex-col justify-between bg-[#0a0a0c] text-white p-8 sm:p-10 rounded-2xl relative overflow-hidden border border-neutral-800 shadow-xl group"
          >
            {/* Ambient Subtle Green Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#1fe0a3]/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              {/* Universe tag */}
              <span className="text-xs uppercase tracking-widest text-[#1fe0a3] font-bold block mb-4">
                KALIBRIUM PARTICULIER
              </span>

              {/* Slogan */}
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 tracking-tight leading-snug">
                Ton entraînement. Guidé par la science.
              </h3>

              {/* Description */}
              <p className="text-base text-neutral-300 font-normal leading-relaxed mb-8">
                Un programme personnalisé qui évolue avec toi et ta progression.
              </p>

              {/* High-end minimalist progression visual */}
              <div className="h-44 w-full bg-neutral-950/80 rounded-xl p-5 border border-neutral-800/80 mb-8 flex flex-col justify-between">
                <div className="flex items-center justify-between text-xs text-neutral-400">
                  <span>Progression continue</span>
                  <span className="text-[#1fe0a3] font-medium">+ Adaptatif</span>
                </div>

                {/* SVG Curve */}
                <div className="h-24 w-full relative">
                  <svg viewBox="0 0 240 70" fill="none" className="w-full h-full overflow-visible">
                    <defs>
                      <linearGradient id="gradPart" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#1fe0a3" stopOpacity="0.28" />
                        <stop offset="100%" stopColor="#1fe0a3" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0 55 Q 60 50, 120 32 T 240 10 L 240 65 L 0 65 Z"
                      fill="url(#gradPart)"
                    />
                    <path
                      d="M0 55 Q 60 50, 120 32 T 240 10"
                      stroke="#1fe0a3"
                      strokeWidth="3"
                    />
                    <circle cx="240" cy="10" r="5" fill="#1fe0a3" />
                  </svg>
                </div>

                <div className="flex items-center justify-between text-[11px] text-neutral-500">
                  <span>Point de départ</span>
                  <span>Régulation de charge</span>
                  <span className="text-white font-medium">Pic actuel</span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div>
              <button
                onClick={() => onSelectUniverse('particulier')}
                className="w-full py-4 px-6 bg-white text-black hover:bg-[#1fe0a3] transition-colors text-sm font-semibold tracking-wide flex items-center justify-between rounded-xl cursor-pointer"
              >
                <span>Découvrir Particulier</span>
                <ArrowUpRight className="w-4 h-4 text-black" />
              </button>
            </div>
          </motion.div>

          {/* Card 2: Kalibrium Coach */}
          <motion.div
            id="coach"
            whileHover={{ y: -6 }}
            transition={{ duration: 0.25 }}
            className="flex flex-col justify-between bg-white text-neutral-900 p-8 sm:p-10 rounded-2xl relative overflow-hidden border border-neutral-200 shadow-xl group"
          >
            {/* Ambient Blue Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#0066ff]/8 rounded-full blur-3xl pointer-events-none" />

            <div>
              {/* Universe tag */}
              <span className="text-xs uppercase tracking-widest text-[#0066ff] font-bold block mb-4">
                KALIBRIUM COACH
              </span>

              {/* Slogan */}
              <h3 className="text-2xl sm:text-3xl font-bold text-neutral-950 mb-4 tracking-tight leading-snug">
                Le suivi de tes clients. Optimisé par la science.
              </h3>

              {/* Description */}
              <p className="text-base text-neutral-600 font-normal leading-relaxed mb-8">
                Programme, suis et adapte l&apos;entraînement de tes clients depuis un espace conçu pour les coachs.
              </p>

              {/* High-end coach monitoring preview */}
              <div className="h-44 w-full bg-neutral-50 rounded-xl p-5 border border-neutral-200/90 mb-8 flex flex-col justify-between">
                <div className="flex items-center justify-between text-xs text-neutral-500">
                  <span>Suivi multi-athlètes</span>
                  <span className="text-[#0066ff] font-medium">Périodisation active</span>
                </div>

                <div className="space-y-2.5">
                  {[
                    { name: 'Athlète 1 · Force', progress: 85 },
                    { name: 'Athlète 2 · Volume', progress: 68 },
                    { name: 'Athlète 3 · Récupération', progress: 40 },
                  ].map((ath, i) => (
                    <div key={i} className="space-y-1">
                      <div className="flex items-center justify-between text-xs text-neutral-700">
                        <span>{ath.name}</span>
                        <span className="font-semibold text-neutral-900">{ath.progress}%</span>
                      </div>
                      <div className="w-full h-2 bg-neutral-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[#0066ff] rounded-full"
                          style={{ width: `${ath.progress}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-[11px] text-neutral-400 flex items-center justify-between">
                  <span>Charge hebdomadaire</span>
                  <span className="text-neutral-900 font-medium">Synchronisé</span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div>
              <button
                onClick={() => onSelectUniverse('coach')}
                className="w-full py-4 px-6 bg-neutral-950 text-white hover:bg-[#0066ff] transition-colors text-sm font-semibold tracking-wide flex items-center justify-between rounded-xl cursor-pointer"
              >
                <span>Découvrir Coach</span>
                <ArrowUpRight className="w-4 h-4 text-white" />
              </button>
            </div>
          </motion.div>

          {/* Card 3: David AI - Dynamic Animated Core using User Attachment image_1aedb054.png */}
          <motion.div
            id="david-ai"
            whileHover={{ y: -6 }}
            transition={{ duration: 0.25 }}
            className="flex flex-col justify-between bg-[#07070a] text-white p-8 sm:p-10 rounded-2xl relative overflow-hidden border border-neutral-800 shadow-xl group"
          >
            {/* Ambient Violet Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#a855f7]/15 rounded-full blur-3xl pointer-events-none" />

            <div>
              {/* Universe tag */}
              <span className="text-xs uppercase tracking-widest text-[#a855f7] font-bold block mb-4">
                DAVID AI
              </span>

              {/* Slogan */}
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 tracking-tight leading-snug">
                L&apos;intelligence artificielle au service de l&apos;entraînement.
              </h3>

              {/* Description */}
              <p className="text-base text-neutral-300 font-normal leading-relaxed mb-8">
                Une intelligence conçue pour transformer les connaissances scientifiques en décisions d&apos;entraînement.
              </p>

              {/* Living Animated AI Core Visual using User's exact Attachment image_1aedb054.png */}
              <div className="h-44 w-full bg-black rounded-xl border border-neutral-800/80 mb-8 relative overflow-hidden flex items-center justify-center">
                
                {/* Background image animated with breathing & rotation */}
                <motion.div
                  animate={{
                    scale: [1, 1.08, 1],
                    rotate: [0, 4, -4, 0],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <Image
                    src="/assets/aistudio/image_1aedb054.png"
                    alt="David AI Core"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover opacity-90 scale-110"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>

                {/* Animated Pulsing Energy Rings over image */}
                <motion.div
                  animate={{
                    scale: [0.9, 1.25, 0.9],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute w-24 h-24 rounded-full border border-[#1fe0a3]/50 pointer-events-none"
                />

                <motion.div
                  animate={{
                    scale: [1.1, 1.45, 1.1],
                    opacity: [0.1, 0.5, 0.1],
                  }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 0.5,
                  }}
                  className="absolute w-32 h-32 rounded-full border border-[#a855f7]/40 pointer-events-none"
                />

                {/* Floating label overlay */}
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] text-white/80 backdrop-blur-md bg-black/40 px-3 py-1.5 rounded-lg border border-white/10">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1fe0a3] animate-pulse" />
                    <span>Moteur Actif</span>
                  </span>
                  <span className="text-[#a855f7] font-medium">David AI Core</span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div>
              <button
                onClick={() => onSelectUniverse('david-ai')}
                className="w-full py-4 px-6 bg-white text-black hover:bg-[#a855f7] hover:text-white transition-colors text-sm font-semibold tracking-wide flex items-center justify-between rounded-xl cursor-pointer"
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
