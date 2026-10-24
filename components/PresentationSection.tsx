'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Cpu, Activity, ArrowRight } from 'lucide-react';

interface Phase {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  highlight: string;
}

const PHASES: Phase[] = [
  {
    id: 'corpus',
    number: '01',
    title: 'Corpus Scientifique',
    subtitle: 'La rigueur de la recherche',
    description:
      'Extraction des lois fondamentales de la biomécanique, du recrutement musculaire et de la cinétique de récupération.',
    highlight: 'Comprendre précisément comment le corps réagit à chaque stimulus.',
  },
  {
    id: 'moteur',
    number: '02',
    title: 'Moteur de Calibration',
    subtitle: 'La précision algorithmique',
    description:
      'Modélisation mathématique du profil athlétique pour doser le volume effectif, l’intensité relative et la fréquence optimale.',
    highlight: 'Ajuster en continu les charges selon vos capacités réelles du moment.',
  },
  {
    id: 'application',
    number: '03',
    title: 'Application Concrète',
    subtitle: 'La performance sur le terrain',
    description:
      'Des séances individualisées, prescrites au répétition près, garantissant une progression pérenne sans surmenage.',
    highlight: 'Transformer les données en résultats mesurables à chaque entraînement.',
  },
];

export default function PresentationSection() {
  const [activePhaseId, setActivePhaseId] = useState<string>('moteur');
  const activePhase = PHASES.find((p) => p.id === activePhaseId) || PHASES[1];

  return (
    <section id="systeme" className="w-full py-28 sm:py-36 bg-[#000000] text-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        
        {/* Apple-grade Centered Header: Large, bold, airy */}
        <div className="text-center max-w-3xl mx-auto mb-20 sm:mb-24">
          <span className="text-sm uppercase tracking-widest text-neutral-400 font-medium block mb-4">
            Architecture Fondamentale
          </span>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-8 leading-[1.12]">
            Toute la science de l&apos;entraînement.{' '}
            <span className="text-neutral-400 font-normal">Un seul système.</span>
          </h2>

          <p className="text-xl sm:text-2xl text-neutral-300 font-light leading-relaxed">
            La recherche n&apos;a jamais été aussi féconde. Pourtant, elle reste souvent inaccessible ou inappliquée.
            Kalibrium unifie ces connaissances pour concevoir des programmes d&apos;entraînement rigoureusement calibrés pour vous.
          </p>
        </div>

        {/* 3 Large, Spacious, Premium Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {PHASES.map((phase) => {
            const isActive = phase.id === activePhaseId;
            return (
              <button
                key={phase.id}
                onClick={() => setActivePhaseId(phase.id)}
                className={`text-left p-8 sm:p-10 rounded-2xl transition-all duration-300 cursor-pointer flex flex-col justify-between relative border ${
                  isActive
                    ? 'bg-neutral-900/90 border-white/30 shadow-2xl scale-[1.02]'
                    : 'bg-neutral-950 border-neutral-800/80 hover:border-neutral-700 hover:bg-neutral-900/40 opacity-70 hover:opacity-100'
                }`}
              >
                <div>
                  <span className="text-sm font-semibold text-neutral-400 block mb-6">
                    {phase.number}
                  </span>

                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 tracking-tight">
                    {phase.title}
                  </h3>

                  <p className="text-base text-neutral-300 font-normal leading-relaxed">
                    {phase.description}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider text-neutral-400">
                    {phase.subtitle}
                  </span>
                  <div
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${
                      isActive ? 'bg-[#1fe0a3]' : 'bg-neutral-700'
                    }`}
                  />
                </div>
              </button>
            );
          })}
        </div>

        {/* Highlight Banner - Apple-style Focus Block */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activePhase.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="p-8 sm:p-12 rounded-2xl bg-gradient-to-b from-neutral-900 to-neutral-950 border border-neutral-800 text-center max-w-3xl mx-auto"
          >
            <span className="text-xs uppercase tracking-widest text-[#1fe0a3] font-semibold block mb-3">
              L&apos;objectif {activePhase.title}
            </span>
            <p className="text-2xl sm:text-3xl text-white font-medium leading-snug">
              « {activePhase.highlight} »
            </p>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
