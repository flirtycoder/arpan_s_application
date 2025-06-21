'use client';
import React from 'react';
import AnnouncementBar from '@/components/ui/announcementBar';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import HeroSection from '@/components/common/hero-section';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const categories = [
  { label: 'Heels', image: '/foot1.svg' },
  { label: 'Sandals', image: '/foot2.svg' },
  { label: 'Flats', image: '/foot3.svg' },
  { label: 'Wedges', image: '/foot4.svg' },
  { label: '& More', image: '/foot5.svg' },
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
      <Footer />

      <div className="text-center py-10">
        <div className="flex justify-center gap-16 flex-wrap">
          {categories.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-36 h-36 rounded-full border-4 border-gray-300 overflow-hidden flex items-center justify-center">
                <Image
                  src={item.image}
                  alt={item.label}
                  width={90}
                  height={90}
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

      {/* ✅ Swiper Full-Width Section */}
      <div className="w-full py-10">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000 }}
          className="w-full"
        >
          {/* 👇 Replace these images with your own */}
          <SwiperSlide>
            <div className="w-full h-620 bg-gray-200 flex items-center justify-center">
              <Image
                src="/frame1.svg"
                alt="Slide 1"
                width={1200}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-620 bg-gray-200 flex items-center justify-center">
              <Image
                src="/frame2.svg"
                alt="Slide 2"
                width={1200}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-620 bg-gray-200 flex items-center justify-center">
              <Image
                src="/frame3.svg"
                alt="Slide 3"
                width={1200}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="mt-12 text-center flect justify-center">
        <h2 className="text-3xl font-[cursive]">elore's Favourite</h2>
      </div>
    </main>
  );
}
