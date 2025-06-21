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
    <div className="relative flex items-center justify-center min-h-screen ml-20 bg-white overflow-hidden">
      {/* Background Grid Lines */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Vertical Line */}
        <div className="absolute top-0 left-[20%] w-px h-full bg-gray-300" />

        {/* Horizontal Line */}
        <div className="absolute left-[10%] top-[90%] h-px w-1/2 bg-gray-300" />
      </div>

      {/* Main Content Wrapper */}
      <div className="relative w-[80%] max-w-6xl flex items-start">
        {/* Text Box - BEHIND the image */}
        <div className="absolute left-[40%] top-[50px] h-3/4 bg-gray-300 rounded-lg p-10 pl-24 shadow-md w-[50%] z-10">
          <p className="text-2xl italic text-black mt-12 ml-48 leading-snug">
            Meet The Girl
            <br />
            You're Helping
          </p>
          <button className="bg-gray-400 text-white py-2 px-6 rounded text-sm mt-10 hover:bg-gray-500 ml-48 transition">
            KNOW MORE
          </button>

          {/* Decorative Circles */}
          <div className="absolute bottom-[-40px] left-[-20px] w-10 h-10 bg-gray-300 rounded-full z-10" />
          <div className="absolute bottom-[-30px] left-[20px] w-5 h-5 bg-gray-100 rounded-full z-0" />
        </div>

        {/* Foreground Image with Scroll Animation */}
        <motion.div
          ref={imageRef}
          initial={{ opacity: 0, x: -100 }}
          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative z-20 w-[60%] h-[420px] overflow-hidden shadow-lg"
        >
          <img
            src="/girl.svg"
            alt="Group"
            className="w-full h-full object-cover grayscale rounded-lg"
          />
        </motion.div>
      </div>
    </div>
  );
}
