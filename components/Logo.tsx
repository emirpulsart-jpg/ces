'use client';

import React from 'react';
import Image from 'next/image';

interface LogoProps {
  className?: string;
  size?: number;
  monochrome?: 'white' | 'black' | 'mint' | 'current';
  showText?: boolean;
  useImage?: boolean;
}

export function KalibriumMark({
  size = 32,
  color = '#1fe0a3',
}: {
  size?: number;
  color?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 transition-transform duration-300 group-hover:scale-105"
      aria-label="Logo Kalibrium"
    >
      {/* Central vertical stem with rounded ends */}
      <line
        x1="51.5"
        y1="21"
        x2="51.5"
        y2="83"
        stroke={color}
        strokeWidth="6"
        strokeLinecap="round"
      />

      {/* Right branch - upper diagonal */}
      <line
        x1="52"
        y1="49"
        x2="83"
        y2="23"
        stroke={color}
        strokeWidth="6"
        strokeLinecap="round"
      />

      {/* Right branch - lower diagonal */}
      <line
        x1="52"
        y1="55"
        x2="81"
        y2="82"
        stroke={color}
        strokeWidth="6"
        strokeLinecap="round"
      />

      {/* Left branch - upper diagonal: 2 dashed segments */}
      <line
        x1="22"
        y1="22"
        x2="32"
        y2="32"
        stroke={color}
        strokeWidth="6"
        strokeLinecap="round"
      />
      <line
        x1="38.5"
        y1="38.5"
        x2="45"
        y2="45"
        stroke={color}
        strokeWidth="6"
        strokeLinecap="round"
      />

      {/* Left branch - lower diagonal: 2 dashed segments */}
      <line
        x1="44"
        y1="59"
        x2="37.5"
        y2="65.5"
        stroke={color}
        strokeWidth="6"
        strokeLinecap="round"
      />
      <line
        x1="31"
        y1="72"
        x2="21"
        y2="81"
        stroke={color}
        strokeWidth="6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Logo({
  className = '',
  size = 32,
  monochrome = 'black',
  showText = true,
  useImage = false,
}: LogoProps) {
  const strokeColor =
    monochrome === 'white'
      ? '#ffffff'
      : monochrome === 'black'
      ? '#000000'
      : monochrome === 'mint'
      ? '#1fe0a3'
      : 'currentColor';

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {useImage ? (
        <div
          className="relative shrink-0 rounded-lg overflow-hidden flex items-center justify-center bg-black"
          style={{ width: size, height: size }}
        >
          <Image
            src="/assets/aistudio/image_16af22d4.png"
            alt="Kalibrium Logo"
            width={size}
            height={size}
            className="object-contain"
          />
        </div>
      ) : (
        <KalibriumMark size={size} color={strokeColor} />
      )}
      
      {showText && (
        <span
          className={`font-semibold tracking-wider text-lg sm:text-xl uppercase select-none transition-colors ${
            monochrome === 'white' ? 'text-white' : 'text-neutral-950'
          }`}
          style={{ letterSpacing: '0.14em' }}
        >
          Kalibrium
        </span>
      )}
    </div>
  );
}
