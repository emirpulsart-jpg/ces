'use client';

import React, { useState, useEffect } from 'react';
import { X, Check } from 'lucide-react';
import Logo from './Logo';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSubject?: string;
}

export default function ContactModal({ isOpen, onClose, initialSubject = 'Général' }: ContactModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [userSelectedSubject, setUserSelectedSubject] = useState<string | null>(null);
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const currentSubject = userSelectedSubject ?? initialSubject;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError('Veuillez renseigner tous les champs obligatoires.');
      return;
    }
    if (!email.includes('@') || !email.includes('.')) {
      setError('Veuillez saisir une adresse email valide.');
      return;
    }

    setError('');
    setSubmitted(true);
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setUserSelectedSubject(null);
    setMessage('');
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="w-full max-w-xl bg-white border border-neutral-200 shadow-2xl relative p-6 sm:p-10 rounded-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-neutral-400 hover:text-black transition-colors rounded-full focus:outline-none"
          aria-label="Fermer la boîte de dialogue"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-12 h-12 bg-black text-[#1fe0a3] rounded-full flex items-center justify-center mx-auto">
              <Check className="w-6 h-6 stroke-[3]" />
            </div>
            <h3 className="text-2xl font-bold text-neutral-900 tracking-tight">
              Message transmis avec succès
            </h3>
            <p className="text-sm text-neutral-600 max-w-md mx-auto leading-relaxed">
              Merci {name}. Votre demande concernant <span className="font-semibold text-neutral-900">{currentSubject}</span> a été enregistrée par l&apos;équipe Kalibrium. Nous vous répondrons dans les meilleurs délais.
            </p>
            <div className="pt-4">
              <button
                onClick={handleReset}
                className="px-8 py-3 bg-black text-white hover:bg-neutral-800 transition-colors text-sm font-semibold rounded-xl"
              >
                Fermer
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Logo size={28} monochrome="black" showText={false} />
              <span className="text-xs uppercase tracking-wider font-semibold text-neutral-400">
                Contact direct
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-neutral-950 tracking-tight mb-2">
              Nous contacter
            </h3>
            <p className="text-sm text-neutral-600 mb-6">
              Particulier, entraîneur, chercheur ou partenaire : échangez directement avec les concepteurs de Kalibrium.
            </p>

            {error && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-neutral-600 mb-1.5">
                    Nom &amp; Prénom *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Alexandre Martin"
                    className="w-full px-4 py-3 bg-neutral-50 border border-neutral-300 text-sm text-neutral-900 focus:outline-none focus:border-black rounded-xl"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-neutral-600 mb-1.5">
                    Adresse Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="nom@exemple.com"
                    className="w-full px-4 py-3 bg-neutral-50 border border-neutral-300 text-sm text-neutral-900 focus:outline-none focus:border-black rounded-xl"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-neutral-600 mb-1.5">
                  Objet de l&apos;échange
                </label>
                <select
                  value={currentSubject}
                  onChange={(e) => setUserSelectedSubject(e.target.value)}
                  className="w-full px-4 py-3 bg-neutral-50 border border-neutral-300 text-sm text-neutral-900 focus:outline-none focus:border-black rounded-xl"
                >
                  <option value="Général">Renseignements généraux</option>
                  <option value="Kalibrium Particulier">Kalibrium Particulier (Accès athlète)</option>
                  <option value="Kalibrium Coach">Kalibrium Coach (Programmation &amp; Suivi)</option>
                  <option value="David AI">David AI (Intelligence artificielle dédiée)</option>
                  <option value="Corpus Scientifique">Corpus Scientifique &amp; Recherche</option>
                  <option value="Partenariat">Partenariat &amp; Institution</option>
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-neutral-600 mb-1.5">
                  Message *
                </label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Précisez votre contexte, vos questions ou votre pratique..."
                  className="w-full px-4 py-3 bg-neutral-50 border border-neutral-300 text-sm text-neutral-900 focus:outline-none focus:border-black rounded-xl resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-black text-white hover:bg-neutral-800 transition-colors text-sm font-semibold tracking-wide rounded-xl cursor-pointer focus:outline-none"
                >
                  Envoyer le message
                </button>
              </div>

              <p className="text-xs text-neutral-400 text-center">
                Réponse sous 24 à 48 heures · Confidentialité garantie.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
