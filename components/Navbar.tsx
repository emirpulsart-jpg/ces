'use client';

import React, { useState } from 'react';
import { KalibriumMark } from './Logo';

interface NavbarProps {
  onOpenContact: (universe?: string) => void;
  onNavigateToSection: (sectionId: string) => void;
  logoRef?: React.RefObject<HTMLDivElement | null>;
  showLogoMark?: boolean;
  activeUniverse?: 'particulier' | 'coach' | 'david-ai' | null;
  onSelectUniverse?: (universe: 'particulier' | 'coach' | 'david-ai' | null) => void;
}

export default function Navbar({
  onOpenContact,
  onNavigateToSection,
  logoRef,
  showLogoMark = true,
  activeUniverse = null,
  onSelectUniverse,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (id === 'particulier') {
      if (onSelectUniverse) {
        onSelectUniverse('particulier');
      }
    } else {
      if (activeUniverse !== null && onSelectUniverse) {
        onSelectUniverse(null);
      }
      onNavigateToSection(id);
    }
  };

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (onSelectUniverse) {
      onSelectUniverse(null);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-neutral-100 transition-colors">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between gap-8">
        
        {/* Zone 1: Logo & Brand */}
        <a
          href="#"
          onClick={handleHomeClick}
          className="flex items-center gap-3 shrink-0 group focus:outline-none"
        >
          {/* Target Logo Anchor for the intro flight */}
          <div ref={logoRef} className="flex items-center justify-center shrink-0 w-8 h-8">
            <div
              className={`transition-opacity duration-200 ${
                showLogoMark ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <KalibriumMark size={32} color="#000000" />
            </div>
          </div>

          <span
            className="font-semibold tracking-wider text-lg sm:text-xl uppercase select-none text-neutral-950"
            style={{ letterSpacing: '0.14em' }}
          >
            Kalibrium
          </span>
        </a>

        {/* Zone 2: Links */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10 text-sm font-medium text-neutral-600">
          <a
            href="#"
            onClick={handleHomeClick}
            className={`transition-colors whitespace-nowrap shrink-0 py-1 ${
              activeUniverse === null ? 'text-black font-semibold' : 'hover:text-black'
            }`}
          >
            Accueil
          </a>
          <a
            href="#particulier"
            onClick={(e) => handleLinkClick('particulier', e)}
            className={`transition-colors whitespace-nowrap shrink-0 py-1 ${
              activeUniverse === 'particulier' ? 'text-black font-semibold underline underline-offset-8' : 'hover:text-black'
            }`}
          >
            Particulier
          </a>
          <a
            href="#coach"
            onClick={(e) => handleLinkClick('coach', e)}
            className={`transition-colors whitespace-nowrap shrink-0 py-1 ${
              activeUniverse === 'coach' ? 'text-black font-semibold' : 'hover:text-black'
            }`}
          >
            Coach
          </a>
          <a
            href="#david-ai"
            onClick={(e) => handleLinkClick('david-ai', e)}
            className={`transition-colors whitespace-nowrap shrink-0 py-1 ${
              activeUniverse === 'david-ai' ? 'text-black font-semibold' : 'hover:text-black'
            }`}
          >
            David AI
          </a>
        </nav>

        {/* Zone 3: Primary Action - Rectangular black button */}
        <div className="hidden sm:flex items-center gap-4 shrink-0">
          <button
            onClick={() => onOpenContact()}
            className="px-6 py-2.5 text-sm font-medium text-white bg-black hover:bg-neutral-800 transition-colors whitespace-nowrap shrink-0 rounded-none cursor-pointer focus:outline-none"
          >
            Nous contacter
          </button>
        </div>

        {/* Mobile Hamburger toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => onOpenContact()}
            className="sm:hidden px-3.5 py-1.5 text-xs font-medium text-white bg-black rounded-none whitespace-nowrap shrink-0"
          >
            Contact
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Ouvrir le menu"
            className="p-2 text-neutral-900 focus:outline-none"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileMenuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-neutral-200 px-6 py-5 flex flex-col gap-4 animate-in fade-in slide-in-from-top-2 duration-200">
          <a
            href="#"
            onClick={handleHomeClick}
            className={`text-base font-medium py-1 ${activeUniverse === null ? 'text-black font-bold' : 'text-neutral-800'}`}
          >
            Accueil
          </a>
          <a
            href="#particulier"
            onClick={(e) => handleLinkClick('particulier', e)}
            className={`text-base font-medium py-1 ${activeUniverse === 'particulier' ? 'text-black font-bold' : 'text-neutral-800'}`}
          >
            Particulier
          </a>
          <a
            href="#coach"
            onClick={(e) => handleLinkClick('coach', e)}
            className="text-base font-medium text-neutral-800 py-1"
          >
            Coach
          </a>
          <a
            href="#david-ai"
            onClick={(e) => handleLinkClick('david-ai', e)}
            className="text-base font-medium text-neutral-800 py-1"
          >
            David AI
          </a>
          <div className="pt-2 border-t border-neutral-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-3 text-sm font-medium text-white bg-black hover:bg-neutral-800 transition-colors text-center rounded-none"
            >
              Nous contacter
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
