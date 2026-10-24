'use client';

import React, { useState } from 'react';
import { X, Check } from 'lucide-react';
import { KalibriumMark } from './Logo';

interface UniversePreviewModalProps {
  universeKey: 'particulier' | 'coach' | 'david-ai' | null;
  onClose: () => void;
  onOpenContact: (subject: string) => void;
}

export default function UniversePreviewModal({
  universeKey,
  onClose,
  onOpenContact,
}: UniversePreviewModalProps) {
  const [email, setEmail] = useState('');
  const [registered, setRegistered] = useState(false);

  if (!universeKey) return null;

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && email.includes('@')) {
      setRegistered(true);
    }
  };

  const getUniverseDetails = () => {
    switch (universeKey) {
      case 'particulier':
        return {
          title: 'Kalibrium Particulier',
          tag: 'Univers Athlète',
          desc: 'Un programme personnalisé qui évolue avec toi et ta progression, calibré sur votre morphologie et vos retours de charge réels.',
          palette: {
            bg: 'bg-[#0a0a0c]',
            text: 'text-white',
            sub: 'text-neutral-300',
            accent: 'text-[#1fe0a3]',
            accentBg: 'bg-[#1fe0a3]',
            border: 'border-neutral-800',
          },
          features: [
            'Prescription de charge et de volume série par série sans approximation.',
            'Modélisation dynamique du RPE et de la vitesse de déplacement.',
            'Prévention des surcharges articulaires par auto-régulation continue.',
          ],
        };
      case 'coach':
        return {
          title: 'Kalibrium Coach',
          tag: 'Univers Professionnel',
          desc: 'Programme, suis et adapte l’entraînement de tes clients depuis un espace conçu pour les coachs exigeants.',
          palette: {
            bg: 'bg-white',
            text: 'text-neutral-950',
            sub: 'text-neutral-600',
            accent: 'text-[#0066ff]',
            accentBg: 'bg-[#0066ff]',
            border: 'border-neutral-200',
          },
          features: [
            'Supervision centralisée de la charge aiguë et chronique de vos athlètes.',
            'Matrices de périodisation en blocs avec alertes de surmenage.',
            'Export des protocoles et bilans d’adaptation biomécanique.',
          ],
        };
      case 'david-ai':
        return {
          title: 'David AI',
          tag: 'Intelligence Dédiée',
          desc: 'Une intelligence conçue pour transformer les connaissances scientifiques en décisions d’entraînement.',
          palette: {
            bg: 'bg-[#07070a]',
            text: 'text-white',
            sub: 'text-neutral-300',
            accent: 'text-[#a855f7]',
            accentBg: 'bg-[#a855f7]',
            border: 'border-neutral-800',
          },
          features: [
            'Raisonnement physiologique appliqué aux imprévus de séance.',
            'Ajustement des ratios volume/intensité en temps réel.',
            'Analyse contextuelle des sensations et de la fatigue perçue.',
          ],
        };
    }
  };

  const details = getUniverseDetails();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className={`w-full max-w-lg ${details.palette.bg} ${details.palette.text} border ${details.palette.border} shadow-2xl relative p-6 sm:p-10 rounded-2xl`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className={`absolute top-6 right-6 p-2 ${details.palette.sub} hover:${details.palette.text} transition-colors rounded-full focus:outline-none`}
          aria-label="Fermer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <KalibriumMark
            size={28}
            color={
              universeKey === 'particulier'
                ? '#1fe0a3'
                : universeKey === 'coach'
                ? '#0066ff'
                : '#a855f7'
            }
          />
          <span className={`text-xs uppercase tracking-wider font-semibold ${details.palette.accent}`}>
            {details.tag}
          </span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">
          {details.title}
        </h3>

        <div className="mb-6 p-3.5 bg-neutral-500/10 rounded-xl border border-neutral-500/20 text-xs">
          <span className="font-semibold">Accès en cours de finalisation :</span> Cet univers sera disponible prochainement. Vous pouvez vous inscrire pour un accès prioritaire.
        </div>

        <p className={`text-sm ${details.palette.sub} leading-relaxed mb-6`}>
          {details.desc}
        </p>

        {/* Feature bullets */}
        <div className="space-y-3 mb-8">
          {details.features.map((feat, idx) => (
            <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm">
              <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${details.palette.accentBg} shrink-0`} />
              <span className={details.palette.sub}>{feat}</span>
            </div>
          ))}
        </div>

        {/* Priority Access Capture */}
        {registered ? (
          <div className="p-4 bg-neutral-500/10 rounded-xl border border-[#1fe0a3]/40 flex items-center gap-3 text-xs mb-4">
            <span className="w-5 h-5 bg-[#1fe0a3] text-black rounded-full flex items-center justify-center shrink-0">
              <Check className="w-3.5 h-3.5 stroke-[3]" />
            </span>
            <span>Votre adresse a été enregistrée pour l&apos;accès prioritaire à {details.title}.</span>
          </div>
        ) : (
          <form onSubmit={handleRegister} className="space-y-3 mb-4">
            <label className={`block text-xs uppercase tracking-wider font-semibold ${details.palette.sub}`}>
              Accès prioritaire
            </label>
            <div className="flex items-stretch gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Votre adresse email"
                className={`flex-1 px-4 py-2.5 text-sm bg-neutral-500/10 border ${details.palette.border} focus:outline-none rounded-xl`}
              />
              <button
                type="submit"
                className={`px-5 py-2.5 text-xs font-semibold uppercase tracking-wider rounded-xl cursor-pointer ${
                  universeKey === 'coach' ? 'bg-black text-white hover:bg-neutral-800' : 'bg-white text-black hover:bg-neutral-200'
                }`}
              >
                Valider
              </button>
            </div>
          </form>
        )}

        <div className="pt-3 border-t border-neutral-500/20 flex items-center justify-between text-xs">
          <button
            type="button"
            onClick={() => {
              onClose();
              onOpenContact(details.title);
            }}
            className={`underline hover:${details.palette.accent} transition-colors cursor-pointer`}
          >
            Poser une question &rarr;
          </button>

          <button
            type="button"
            onClick={onClose}
            className={`${details.palette.sub} hover:${details.palette.text} cursor-pointer`}
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
}
