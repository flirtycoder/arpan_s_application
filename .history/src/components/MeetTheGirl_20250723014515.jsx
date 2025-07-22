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
    <div className="relative flex items-center justify-center min-h-screen bg-white overflow-hidden px-4 lg:px-20">
      {/* Background lines only for lg and above */}
      <div className="absolute inset-0 pointer-events-none z-0 hidden lg:block">
        <div className="absolute top-0 left-[20%] w-px h-full bg-gray-300" />
        <div className="absolute left-[10%] top-[90%] h-px w-1/2 bg-gray-300" />
      </div>

      <div className="relative w-full max-w-6xl flex flex-col lg:flex-row items-center lg:items-start gap-10">
        {/* Image first on sm/md, second on lg */}
        <motion.div
          ref={imageRef}
          initial={{ opacity: 0, x: -100 }}
          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative z-20 w-full lg:w-[60%] h-[300px] sm:h-[400px] lg:h-[420px] overflow-hidden shadow-lg rounded-lg order-1 lg:order-2"
        >
          <img
            src="/girl.svg"
            alt="Girl"
            className="w-full h-full object-cover grayscale rounded-lg"
          />
        </motion.div>

        {/* Text Box */}
       
      </div>
    </div>
  );
}
