'use client';
import Image from 'next/image';

const  = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <Image
        src="/your-image.svg" // Replace with the actual SVG path
        alt="All About Elore Background"
        layout="fill"
        objectFit="cover"
        priority
        className="z-0"
      />

      {/* Overlay Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
        <h1 className="text-[40px] sm:text-[50px] md:text-[60px] font-serif tracking-wide uppercase">
          ALL ABOUT
        </h1>
        <h2 className="text-[60px] sm:text-[80px] md:text-[100px] font-serif font-normal lowercase leading-none">
          elore
        </h2>
      </div>
    </div>
  );
};

export default AllAboutElore;
