'use client';

import React, { useState } from 'react';
import { Check } from 'lucide-react';

interface CorpusSectionProps {
  onOpenContact: (subject?: string) => void;
}

export default function CorpusSection({ onOpenContact }: CorpusSectionProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && email.includes('@')) {
      setSubscribed(true);
    }
  };

  return (
    <section className="w-full py-28 sm:py-36 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        
        {/* Main Framework Box */}
        <div className="bg-[#050507] text-white p-8 sm:p-14 lg:p-16 rounded-2xl relative overflow-hidden border border-neutral-800 shadow-2xl">
          
          <div className="relative z-10 max-w-3xl">
            
            <span className="text-sm uppercase tracking-widest text-neutral-400 font-semibold block mb-4">
              Fondations
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
              Le Corpus Scientifique.
            </h2>

            <p className="text-lg sm:text-xl text-neutral-300 font-light leading-relaxed mb-10">
              Chaque prescription générée par Kalibrium s&apos;appuie sur une cartographie rigoureuse de la littérature en physiologie et biomécanique de l&apos;effort.
              Ce corpus scientifique est en cours de structuration et sera partagé avec les chercheurs, coachs et pratiquants.
            </p>

            {/* Structured Volumes in Preparation */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 border-t border-b border-neutral-800/80 py-8">
              <div className="space-y-1.5">
                <span className="text-xs uppercase tracking-wider text-[#1fe0a3] font-semibold">Volume I</span>
                <h3 className="text-base font-semibold text-white">Biomécanique &amp; Anatomie</h3>
                <p className="text-sm text-neutral-400">Leviers, tensions articulaires et amplitudes utiles.</p>
              </div>

              <div className="space-y-1.5">
                <span className="text-xs uppercase tracking-wider text-[#1fe0a3] font-semibold">Volume II</span>
                <h3 className="text-base font-semibold text-white">Cinétique de Fatigue</h3>
                <p className="text-sm text-neutral-400">Modèles de récupération centrale et périphérique.</p>
              </div>

              <div className="space-y-1.5">
                <span className="text-xs uppercase tracking-wider text-[#1fe0a3] font-semibold">Volume III</span>
                <h3 className="text-base font-semibold text-white">Dosage &amp; Périodisation</h3>
                <p className="text-sm text-neutral-400">Pondération du volume effectif et auto-régulation.</p>
              </div>
            </div>

            {/* Newsletter / Notification Form for the Corpus */}
            <div className="max-w-xl">
              <span className="text-sm text-neutral-300 font-medium block mb-3">
                Restez informé de l&apos;ouverture du corpus
              </span>

              {subscribed ? (
                <div className="p-4 bg-neutral-900 rounded-xl border border-[#1fe0a3]/40 flex items-center gap-3 text-sm text-neutral-200">
                  <span className="w-5 h-5 bg-[#1fe0a3] text-black rounded-full flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </span>
                  <span>Votre demande a été enregistrée. Vous serez notifié dès l&apos;ouverture du corpus.</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-stretch gap-3">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Votre adresse email"
                    className="flex-1 px-4 py-3 bg-neutral-900 border border-neutral-700 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-white rounded-xl"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-white text-black hover:bg-neutral-200 transition-colors text-sm font-semibold tracking-wide whitespace-nowrap rounded-xl cursor-pointer focus:outline-none"
                  >
                    Être notifié
                  </button>
                </form>
              )}

              <div className="mt-4 flex items-center gap-2 text-xs text-neutral-400">
                <span>Vous êtes professionnel ou chercheur ?</span>
                <button
                  type="button"
                  onClick={() => onOpenContact('Corpus Scientifique')}
                  className="text-white underline hover:text-[#1fe0a3] transition-colors cursor-pointer"
                >
                  Contactez l&apos;équipe &rarr;
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
