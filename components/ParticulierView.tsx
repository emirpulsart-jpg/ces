'use client';

import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import { KalibriumMark } from './Logo';

interface ParticulierViewProps {
  onBack: () => void;
  onOpenContact: (subject?: string) => void;
  onSelectCoach?: () => void;
  onSelectDavidAI?: () => void;
}

export default function ParticulierView({
  onBack,
  onOpenContact,
  onSelectCoach,
  onSelectDavidAI,
}: ParticulierViewProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45 }}
      className="fixed inset-0 z-50 bg-[#070709] text-white overflow-y-auto selection:bg-[#1fe0a3] selection:text-black"
    >
      {/* Top Navbar inside the Particulier Universe - Delayed appearance to let the photo settle first */}
      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.65, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className="sticky top-0 z-40 w-full bg-[#070709]/90 backdrop-blur-md border-b border-neutral-800/80"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between gap-8">
          
          {/* Logo & Brand - Click returns to home */}
          <button
            onClick={onBack}
            className="flex items-center gap-3 shrink-0 group focus:outline-none cursor-pointer"
          >
            <div className="flex items-center justify-center shrink-0 w-8 h-8">
              <KalibriumMark size={32} color="#ffffff" />
            </div>
            <span
              className="font-semibold tracking-wider text-lg sm:text-xl uppercase select-none text-white"
              style={{ letterSpacing: '0.14em' }}
            >
              Kalibrium
            </span>
          </button>

          {/* Links with Particulier highlighted */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10 text-sm font-medium text-neutral-400">
            <button
              onClick={onBack}
              className="hover:text-white transition-colors whitespace-nowrap shrink-0 py-1 cursor-pointer"
            >
              Accueil
            </button>
            <span className="text-[#1fe0a3] font-semibold underline underline-offset-8 whitespace-nowrap shrink-0 py-1 cursor-default">
              Particulier
            </span>
            <button
              onClick={() => {
                onBack();
                if (onSelectCoach) onSelectCoach();
              }}
              className="hover:text-white transition-colors whitespace-nowrap shrink-0 py-1 cursor-pointer"
            >
              Coach
            </button>
            <button
              onClick={() => {
                onBack();
                if (onSelectDavidAI) onSelectDavidAI();
              }}
              className="hover:text-white transition-colors whitespace-nowrap shrink-0 py-1 cursor-pointer"
            >
              David AI
            </button>
          </nav>

          {/* Right Action */}
          <div className="flex items-center gap-4 shrink-0">
            <button
              onClick={() => onOpenContact('Kalibrium Particulier')}
              className="px-6 py-2.5 text-sm font-medium text-black bg-white hover:bg-neutral-200 transition-colors whitespace-nowrap shrink-0 rounded-none cursor-pointer focus:outline-none"
            >
              Nous contacter
            </button>
          </div>
        </div>
      </motion.header>

      {/* Main Content Area */}
      <div className="max-w-5xl mx-auto px-6 lg:px-8 pt-8 pb-28">
        
        {/* Subtle Back Button - Delayed */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.65, duration: 0.4 }}
          className="mb-8"
        >
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-neutral-400 hover:text-white transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Retour à l&apos;accueil</span>
          </button>
        </motion.div>

        {/* Section Header: Matching Attachment 3 (Delayed so the photo arrives first) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4 leading-[1.14]">
            L&apos;entraînement.
            <br />
            <span className="font-bold">Guidé par la science.</span>
          </h1>

          <p className="text-lg sm:text-xl text-neutral-400 font-normal mb-8">
            Un programme qui évolue avec toi.
          </p>

          <div className="flex justify-center">
            <button
              onClick={() => onOpenContact('Kalibrium Particulier')}
              className="px-8 py-3 bg-white text-black hover:bg-neutral-200 transition-colors text-sm font-medium rounded-full shadow-lg hover:shadow-white/10 cursor-pointer"
            >
              Découvrir Kalibrium
            </button>
          </div>
        </motion.div>

        {/* The Hero Image: Expands first with layoutId to anchor the transition */}
        <motion.div
          layoutId="particulier-image"
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="w-full relative aspect-[16/10] sm:aspect-[16/9] rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.8)] bg-black border border-neutral-800 mb-16"
        >
          <Image
            src="/assets/aistudio/image_ce07ce95.png"
            alt="Kalibrium Particulier - Coureur sur tapis futuriste"
            fill
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="object-cover object-center"
            priority
          />
        </motion.div>

        {/* Detailed Program Principles - Delayed appearance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          <div className="bg-neutral-900/90 p-8 rounded-2xl border border-neutral-800 shadow-sm space-y-3">
            <span className="text-xs uppercase tracking-wider font-semibold text-[#1fe0a3]">
              01 · Morpho-Anatomie
            </span>
            <h3 className="text-xl font-bold text-white">
              Calibré sur vos leviers
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Vos segments corporels, vos amplitudes utiles et vos mobilités déterminent la sélection précise des exercices. Finies les postures inadaptées.
            </p>
          </div>

          <div className="bg-neutral-900/90 p-8 rounded-2xl border border-neutral-800 shadow-sm space-y-3">
            <span className="text-xs uppercase tracking-wider font-semibold text-[#1fe0a3]">
              02 · Auto-Régulation
            </span>
            <h3 className="text-xl font-bold text-white">
              Adapté à votre fatigue
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Une nuit écourtée ou un stress accru ? La charge de travail et le volume effectif s&apos;ajustent en temps réel pour préserver vos tissus tout en stimulant vos gains.
            </p>
          </div>

          <div className="bg-neutral-900/90 p-8 rounded-2xl border border-neutral-800 shadow-sm space-y-3">
            <span className="text-xs uppercase tracking-wider font-semibold text-[#1fe0a3]">
              03 · Pérennité
            </span>
            <h3 className="text-xl font-bold text-white">
              Progression sans blessure
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Pas de sur-sollicitation articulaire aveugle. Une courbe d&apos;effort mesurée pour construire une force et une composition corporelle durables.
            </p>
          </div>
        </motion.div>

        {/* Bottom Action Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          className="bg-neutral-900 border border-neutral-800 text-white p-8 sm:p-12 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div>
            <h4 className="text-2xl font-bold mb-2">Prêt à faire évoluer votre entraînement ?</h4>
            <p className="text-sm text-neutral-400">
              Inscrivez-vous pour obtenir un accès anticipé exclusif à l&apos;application Kalibrium Particulier.
            </p>
          </div>
          <button
            onClick={() => onOpenContact('Kalibrium Particulier')}
            className="px-8 py-3.5 bg-white text-black hover:bg-neutral-200 transition-colors text-sm font-semibold rounded-xl whitespace-nowrap cursor-pointer shrink-0"
          >
            Rejoindre l&apos;accès prioritaire
          </button>
        </motion.div>

      </div>
    </motion.div>
  );
}
