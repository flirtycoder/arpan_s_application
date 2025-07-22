'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function MeetTheGirl() {
  const [isVisible, setIsVisible] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) observer.unobserve(imageRef.current);
    };
  }, []);

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-white overflow-hidden px-4 sm:px-6 lg:px-20">
      {/* Background lines (hide on small screens) */}
      <div className="absolute inset-0 pointer-events-none z-0 hidden lg:block">
        <div className="absolute top-0 left-[20%] w-px h-full bg-gray-300" />
        <div className="absolute left-[10%] top-[90%] h-px w-1/2 bg-gray-300" />
      </div>

      {/* Content container */}
      <div className="relative w-full max-w-6xl flex flex-col lg:flex-row items-center lg:items-start gap-10">
        {/* Text Box */}
        <div className="relative bg-gray-300 rounded-lg p-6 sm:p-10 shadow-md w-full lg:w-[50%] lg:pl-24 lg:pt-16">
          <p className="text-2xl italic text-black leading-snug text-center lg:text-left">
            Meet The Girl
            <br />
            You're Helping
          </p>
          <div className="flex justify-center lg:justify-start">
            <button className="bg-gray-400 text-white py-2 px-6 rounded text-sm mt-8 hover:bg-gray-500 transition">
              KNOW MORE
            </button>
          </div>

          {/* Decorative circles (hide on small screens) */}
          <div className="hidden lg:block">
            <div className="absolute bottom-[-40px] left-[-20px] w-10 h-10 bg-gray-300 rounded-full z-10" />
            <div className="absolute bottom-[-30px] left-[20px] w-5 h-5 bg-gray-100 rounded-full z-0" />
          </div>
        </div>

        {/* Image */}
        <motion.div
          ref={imageRef}
          initial={{ opacity: 0, x: -100 }}
          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative z-20 w-full lg:w-[60%] h-[300px] sm:h-[400px] lg:h-[420px] overflow-hidden shadow-lg rounded-lg"
        >
          <img
            src="/girl.svg"
            alt="Girl"
            className="w-full h-full object-cover grayscale rounded-lg"
          />
        </motion.div>
      </div>
    </div>
  );
}
