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
        <h1
          className="text-white text-8xl md:text-9xl font-light"
          style={{ fontFamily: 'Michelia, serif' }}
        >
          elore
        </h1>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-20 flex justify-center space-x-8 pb-12">
        <div className="bg-gray-400 rounded-full p-1 overflow-hidden w-[149px] h-[149px]">
          <div className="bg-gray-400 rounded-full overflow-hidden w-full h-full flex items-center justify-center">
            <Image
              src="/images/img_essential_shoesfootwear_for_every_woman_must_have_in_your_shoe_rack.png"
              alt="Footwear Collection"
              width={133}
              height={128}
              className="rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
