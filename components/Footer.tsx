'use client';

import React from 'react';
import Logo from './Logo';
import { RotateCcw } from 'lucide-react';

interface FooterProps {
  onOpenContact: (subject?: string) => void;
  onReplayIntro: () => void;
  onNavigateToSection: (id: string) => void;
}

export default function Footer({ onOpenContact, onReplayIntro, onNavigateToSection }: FooterProps) {
  return (
    <footer className="w-full bg-white border-t border-neutral-200 py-16 sm:py-20 text-neutral-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-neutral-200">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <Logo size={32} monochrome="black" showText={true} />
            <p className="text-sm text-neutral-600 max-w-sm leading-relaxed">
              L&apos;entraînement, guidé par la science. Un écosystème qui transforme les connaissances scientifiques en programmes d&apos;entraînement personnalisés.
            </p>
            <div className="pt-2">
              <button
                onClick={onReplayIntro}
                className="flex items-center gap-2 text-xs text-neutral-500 hover:text-black transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Rejouer l&apos;animation de marque</span>
              </button>
            </div>
          </div>

          {/* Navigation links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs uppercase tracking-wider font-semibold text-neutral-400">
              Navigation
            </div>
            <ul className="space-y-2.5 text-sm text-neutral-700">
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-black transition-colors"
                >
                  Accueil
                </a>
              </li>
              <li>
                <a
                  href="#particulier"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigateToSection('particulier');
                  }}
                  className="hover:text-black transition-colors"
                >
                  Kalibrium Particulier
                </a>
              </li>
              <li>
                <a
                  href="#coach"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigateToSection('coach');
                  }}
                  className="hover:text-black transition-colors"
                >
                  Kalibrium Coach
                </a>
              </li>
              <li>
                <a
                  href="#david-ai"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigateToSection('david-ai');
                  }}
                  className="hover:text-black transition-colors"
                >
                  David AI
                </a>
              </li>
            </ul>
          </div>

          {/* Methodology & Contact */}
          <div className="md:col-span-4 space-y-4">
            <div className="text-xs uppercase tracking-wider font-semibold text-neutral-400">
              Échanges &amp; Contact
            </div>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Pour toute question relative à l&apos;architecture méthodologique, aux collaborations de recherche ou aux accès en cours :
            </p>
            <div>
              <button
                onClick={() => onOpenContact()}
                className="px-6 py-3 bg-black text-white hover:bg-neutral-800 transition-colors text-sm font-semibold rounded-lg cursor-pointer"
              >
                Nous contacter
              </button>
            </div>
          </div>

        </div>

        {/* Bottom copyright and legal line */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            &copy; {new Date().getFullYear()} Kalibrium. Tous droits réservés.
          </div>
          <div className="flex items-center gap-4 text-neutral-400">
            <span>Science &amp; Performance</span>
            <span aria-hidden="true">·</span>
            <span>Paris, France</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
