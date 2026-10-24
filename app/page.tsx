'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import IntroAnimation, { IntroPhase } from '@/components/IntroAnimation';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PresentationSection from '@/components/PresentationSection';
import UniversesSection from '@/components/UniversesSection';
import ParticulierView from '@/components/ParticulierView';
import VisionSection from '@/components/VisionSection';
import CorpusSection from '@/components/CorpusSection';
import Footer from '@/components/Footer';
import ContactModal from '@/components/ContactModal';
import UniversePreviewModal from '@/components/UniversePreviewModal';

export default function HomePage() {
  const [introCompleted, setIntroCompleted] = useState(false);
  const [introPhase, setIntroPhase] = useState<IntroPhase>('typing');
  const navbarLogoRef = useRef<HTMLDivElement | null>(null);

  // Active Universe View state ('particulier' opens the dedicated universe interface)
  const [activeUniverse, setActiveUniverse] = useState<'particulier' | null>(null);

  // Modals state
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [contactInitialSubject, setContactInitialSubject] = useState('Général');
  const [previewUniverse, setPreviewUniverse] = useState<'coach' | 'david-ai' | null>(null);

  const handleOpenContact = (subject?: string) => {
    setContactInitialSubject(subject || 'Général');
    setContactModalOpen(true);
  };

  const handleSelectUniverse = (universeKey: 'particulier' | 'coach' | 'david-ai' | null) => {
    if (universeKey === 'particulier') {
      // DO NOT SCROLL: Stay in place so the new universe constructs itself around the photo directly in front of the user
      setActiveUniverse('particulier');
    } else if (universeKey === 'coach' || universeKey === 'david-ai') {
      setPreviewUniverse(universeKey);
    } else {
      setActiveUniverse(null);
    }
  };

  const handleNavigateToSection = (sectionId: string) => {
    if (activeUniverse !== null) {
      setActiveUniverse(null);
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleReplayIntro = () => {
    setActiveUniverse(null);
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

      {/* 2. Top Navigation Bar (Always visible and functional) */}
      <Navbar
        logoRef={navbarLogoRef}
        showLogoMark={introCompleted}
        activeUniverse={activeUniverse}
        onSelectUniverse={handleSelectUniverse}
        onOpenContact={handleOpenContact}
        onNavigateToSection={handleNavigateToSection}
      />

      {/* 3. Main Content Container with unblurring during intro */}
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
        {/* Hero Section on pure white */}
        <Hero
          onExploreUniverses={() => handleNavigateToSection('univers')}
        />

        {/* Presentation Section (Black bg, Apple-style copywriting) */}
        <PresentationSection />

        {/* Three Universes Section with updated photos and compact cards */}
        <UniversesSection onSelectUniverse={handleSelectUniverse} />

        {/* Vision Section */}
        <VisionSection />

        {/* Final Corpus Section */}
        <CorpusSection onOpenContact={handleOpenContact} />

        {/* Footer */}
        <Footer
          onOpenContact={handleOpenContact}
          onReplayIntro={handleReplayIntro}
          onNavigateToSection={handleNavigateToSection}
        />
      </motion.div>

      {/* 4. Immersive Particulier Universe View: Builds in place around the photo */}
      <AnimatePresence>
        {activeUniverse === 'particulier' && (
          <ParticulierView
            onBack={() => setActiveUniverse(null)}
            onOpenContact={handleOpenContact}
            onSelectCoach={() => setPreviewUniverse('coach')}
            onSelectDavidAI={() => setPreviewUniverse('david-ai')}
          />
        )}
      </AnimatePresence>

      {/* Contact Modal */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        initialSubject={contactInitialSubject}
      />

      {/* Universe Preview Modal for Coach & David AI */}
      <UniversePreviewModal
        universeKey={previewUniverse}
        onClose={() => setPreviewUniverse(null)}
        onOpenContact={handleOpenContact}
      />

    </div>
  );
}
