'use client';
import React from 'react';
import AnnouncementBar from '@/components/ui/announcementBar';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import HeroSection from '@/components/common/hero-section';
import Image from 'next/image';
const categories = [
  { label: 'Heels', image: '/foot1.svg' },
  { label: 'Sandals', image: '/images/sandals.svg' },
  { label: 'Flats', image: '/images/flats.png' },
  { label: 'Wedges', image: '/images/wedges.png' },
  { label: '& More', image: '/images/more.png' },
];
export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <AnnouncementBar
        message="Get early access on launches and offers."
        linkText="Sign Up For Texts"
        linkUrl="/signup"
      />
      <Header />
      <div className="flex-grow">
        <HeroSection />
      </div>
      <div className="text-center py-10">
        <div className="flex justify-center gap-10 flex-wrap">
          {categories.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full border-4 border-gray-300 overflow-hidden flex items-center justify-center">
                {/* 👇 Replace src with your actual image paths */}
                <Image
                  src={item.image}
                  alt={item.label}
                  width={70}
                  height={70}
                  className="object-contain"
                />
              </div>
              <p className="mt-2 font-medium text-black">{item.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <div className="w-32 h-px bg-gray-400 mx-auto mb-4" />
          <h2 className="text-3xl font-[cursive]">Shop By Categories</h2>
        </div>
      </div>

      <Footer />
    </main>
  );
}
