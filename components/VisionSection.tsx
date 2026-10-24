'use client';

import React from 'react';
import Image from 'next/image';
import founderImg from '@/src/assets/images/founder_portrait_editorial_1792843300940.jpg';

export default function VisionSection() {
  return (
    <section className="w-full py-28 sm:py-36 bg-neutral-50/70 border-t border-neutral-200/80">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="text-sm uppercase tracking-widest text-neutral-400 font-semibold block mb-4">
            Vision &amp; Fondations
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-950 leading-tight">
            Rapprocher la recherche scientifique du terrain.
          </h2>
        </div>

        {/* 2-Column Balanced Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual / Founder Portrait Emplacement */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-neutral-900 border border-neutral-200">
              <div className="relative aspect-[3/4] w-full">
                <Image
                  src={founderImg}
                  alt="Portrait du fondateur David"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover grayscale contrast-110"
                  referrerPolicy="no-referrer"
                  priority
                />
              </div>

              <div className="p-4 bg-white border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-600">
                <span className="font-semibold text-neutral-900">David</span>
                <span>Fondateur de Kalibrium</span>
              </div>
            </div>
          </div>

          {/* Right Column: Authentic Vision Statement & Ambition */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            <div className="space-y-6 text-neutral-700 text-lg sm:text-xl font-normal leading-relaxed">
              <p className="font-semibold text-neutral-950 text-2xl sm:text-3xl leading-snug">
                « La majorité des approches oscillent entre le dogme empirique et la standardisation aveugle. »
              </p>

              <p>
                L&apos;ambition qui anime Kalibrium est claire : combler l&apos;écart qui sépare la rigueur de la recherche en sciences de l&apos;effort et la réalité quotidienne de la pratique.
              </p>

              <p>
                Il ne s&apos;agit ni de complexifier l&apos;entraînement avec du jargon superflu, ni d&apos;appliquer des recettes toutes faites. Le projet vise à établir un langage commun et rigoureux où chaque variable est calibrée sur des lois biologiques démontrées.
              </p>
            </div>

            {/* Signature & Role */}
            <div className="mt-8 pt-6 border-t border-neutral-200 flex items-center justify-between">
              <div>
                <div className="text-lg font-bold text-neutral-950">David</div>
                <div className="text-sm text-neutral-500">
                  Fondateur &amp; Concepteur du système Kalibrium
                </div>
              </div>
            </div>

            {/* 3 Core Pillars of the Vision */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8 pt-8 border-t border-neutral-200">
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-wider font-semibold text-neutral-400">01. Rigueur</span>
                <p className="text-sm text-neutral-800 font-medium">Rejet des dogmes et de la standardisation générique.</p>
              </div>
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-wider font-semibold text-neutral-400">02. Individualité</span>
                <p className="text-sm text-neutral-800 font-medium">Prise en compte de votre morphologie et de votre fatigue.</p>
              </div>
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-wider font-semibold text-neutral-400">03. Précision</span>
                <p className="text-sm text-neutral-800 font-medium">Une technologie au service direct de votre progression.</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
