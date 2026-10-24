'use client';

import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import IntroAnimation, { IntroPhase } from '@/components/IntroAnimation';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PresentationSection from '@/components/PresentationSection';
import UniversesSection from '@/components/UniversesSection';
import VisionSection from '@/components/VisionSection';
import CorpusSection from '@/components/CorpusSection';
import Footer from '@/components/Footer';
import ContactModal from '@/components/ContactModal';
import UniversePreviewModal from '@/components/UniversePreviewModal';

export default function HomePage() {
  const [introCompleted, setIntroCompleted] = useState(false);
  const [introPhase, setIntroPhase] = useState<IntroPhase>('typing');
  const navbarLogoRef = useRef<HTMLDivElement | null>(null);

  // Modals state
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [contactInitialSubject, setContactInitialSubject] = useState('Général');
  const [selectedUniverse, setSelectedUniverse] = useState<'particulier' | 'coach' | 'david-ai' | null>(null);

  const handleOpenContact = (subject?: string) => {
    setContactInitialSubject(subject || 'Général');
    setContactModalOpen(true);
  };

  const handleSelectUniverse = (universeKey: 'particulier' | 'coach' | 'david-ai') => {
    setSelectedUniverse(universeKey);
  };

  const handleNavigateToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleReplayIntro = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIntroCompleted(false);
    setIntroPhase('typing');
  };

  return (
    <div className="relative min-h-screen bg-white text-neutral-900 flex flex-col font-sans selection:bg-[#1fe0a3] selection:text-black overflow-x-hidden">
      
      {/* 1. Fullscreen Opening Animation & Dynamic Docking */}
      {!introCompleted && (
        <IntroAnimation
          targetRef={navbarLogoRef}
          onPhaseChange={(phase) => setIntroPhase(phase)}
          onComplete={() => {
            setIntroCompleted(true);
            setIntroPhase('done');
          }}
        />
      )}

      {/* 2. The entire website exists already behind the intro. It unblurs progressively as the logo travels into place. */}
      <motion.div
        className="w-full flex-1 flex flex-col"
        animate={{
          filter:
            introCompleted || introPhase === 'done' || introPhase === 'traveling'
              ? 'blur(0px)'
              : introPhase === 'merging'
              ? 'blur(20px)'
              : 'blur(24px)',
          opacity: 1,
        }}
        transition={{
          filter: {
            duration: introPhase === 'traveling' ? 0.95 : 0.6,
            ease: [0.16, 1, 0.3, 1],
          },
        }}
      >
        {/* Top Navigation Bar */}
        <Navbar
          logoRef={navbarLogoRef}
          showLogoMark={introCompleted}
          onOpenContact={handleOpenContact}
          onNavigateToSection={handleNavigateToSection}
        />

        {/* Main Landing Flow */}
        <main className="flex-1">
          {/* Hero Section */}
          <Hero
            onExploreUniverses={() => handleNavigateToSection('univers')}
          />

          {/* Presentation Section (Black bg, white text, Apple-grade copy) */}
          <PresentationSection />

          {/* Three Universes Section */}
          <UniversesSection onSelectUniverse={handleSelectUniverse} />

          {/* Vision Section */}
          <VisionSection />

          {/* Final Corpus Section */}
          <CorpusSection onOpenContact={handleOpenContact} />
        </main>

        {/* Footer */}
        <Footer
          onOpenContact={handleOpenContact}
          onReplayIntro={handleReplayIntro}
          onNavigateToSection={handleNavigateToSection}
        />
      </motion.div>

      {/* Contact Modal */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        initialSubject={contactInitialSubject}
      />

      {/* Universe Preview Modal */}
      <UniversePreviewModal
        universeKey={selectedUniverse}
        onClose={() => setSelectedUniverse(null)}
        onOpenContact={handleOpenContact}
      />

    </div>
  );
}
