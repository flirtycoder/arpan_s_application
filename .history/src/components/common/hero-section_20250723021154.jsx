'use client';

import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className="relative w-full h-[calc(100vh-100px)] min-h-[600px] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/img_untitled_design_1.png"
          alt="Elore Brand Background"
          fill
          priority
          className="object-cover"
        />
      </div>
      
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <h1 className="text-white text-8xl md:text-9xl font-light" style={{ fontFamily: 'Michelia, serif' }}>
          elore
        </h1>
      </div>
      
      
    </div>
  );
};

export default HeroSection;