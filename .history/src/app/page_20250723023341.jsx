'use client';
import React from 'react';
import AnnouncementBar from '@/components/ui/announcementBar';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import HeroSection from '@/components/common/hero-section';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper'; // ✅ Added
import { Autoplay } from 'swiper/modules';
SwiperCore.use([Autoplay]); // ✅ Register Autoplay

import 'swiper/css';

import ProductCards from '@/components/ProductCards';
import ProductGallery from '@/components/ProductGallery';
import MeetTheGirl from '@/components/MeetTheGirl';
import TestimonialCard from '@/components/TestimonialCard';
import EloreComment from '@/components/EloreComment';
import Ending from '@/components/common/Ending';

const categories = [
  { label: 'Heels', image: '/foot1.svg' },
  { label: 'Sandals', image: '/foot2.svg' },
  { label: 'Flats', image: '/foot3.svg' },
  { label: 'Wedges', image: '/foot4.svg' },
  { label: '& More', image: '/foot5.svg' },
];

export default function Home() {
  const productImages = [
    '/swipe1.svg',
    '/swipe2.svg',
    '/swipe3.svg',
    '/swipe4.svg',
    '/swipe5.svg',
    '/swipe6.svg',
    '/swipe7.svg',
    '/swipe8.svg',
  ];

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

      {/* Categories */}
      <div className="text-center py-10 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center gap-10 md:gap-16 flex-wrap">
          {categories.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-24 h-24 md:w-36 md:h-36 rounded-full border-4 border-gray-300 overflow-hidden flex items-center justify-center">
                <Image
                  src={item.image}
                  alt={item.label}
                  width={90}
                  height={90}
                  className="object-contain"
                />
              </div>
              <p className="mt-2 font-medium text-black text-sm md:text-base">{item.label}</p>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <div className="w-24 md:w-32 h-px bg-gray-400 mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-[cursive]">Shop By Categories</h2>
        </div>
      </div>

      {/* Swiper */}
      <div className="w-full py-10">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000 }}
          className="w-full"
        >
          {[1, 2, 3].map((num) => (
            <SwiperSlide key={num}>
              <div className="w-full h-64 md:h-[620px] bg-gray-200 flex items-center justify-center">
                <Image
                  src={`/frame${num}.svg`}
                  alt={`Slide ${num}`}
                  width={1200}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Elore's Favourite */}
      <div className="px-4 md:ml-20">
        <p className="text-4xl md:text-6xl font-[cursive] underline">elore's Favourite</p>
        <p className="text-2xl md:text-4xl font-[cursive]">TOP PICK FROM EVERY WEEK</p>
      </div>

      {/* Product Swiper */}
      <div className="w-full bg-white py-8 px-2">
        <Swiper
          spaceBetween={10}
          slidesPerView={2}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          loop={true}
          autoplay={{ delay: 0, disableOnInteraction: true }}
          speed={4000}
          grabCursor={true}
          className="w-full"
        >
          {productImages.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="flex items-center justify-center h-48 md:h-64">
                <img
                  src={src}
                  alt={`Product ${index + 1}`}
                  className="w-48 h-48 md:w-80 h-auto object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* CTA */}
      <div className="flex flex-col items-center justify-center py-12 bg-white text-center px-4">
        <h2 className="font-[cursive] text-black text-3xl md:text-4xl leading-tight tracking-wide">
          SEE WHAT EVERYONE <br /> LOVES
        </h2>
        <button className="mt-4 px-6 py-3 md:px-10 md:py-5 bg-gray-300 text-black font-bold shadow-sm transition-all duration-200 rounded-lg">
          CLICK HERE
        </button>
        <div className="mt-10 w-full max-w-xs md:max-w-md h-px bg-gray-400" />
      </div>

      {/* Elore's Collection Section */}
      <section
        className="w-full flex flex-col md:flex-row items-center md:items-start justify-between bg-cover bg-center mt-20 px-4 md:px-0"
        style={{ backgroundImage: "url('/Asset 1.svg')" }}
      >
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <div className="rounded-br-[60px] overflow-hidden shadow-lg">
            <Image
              src="/green1.svg"
              alt="Collection Shoe"
              width={637}
              height={500}
              className="object-cover"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 p-6 text-white text-center md:text-right space-y-6 md:space-y-10 flex flex-col justify-center items-center md:items-end mt-8 md:mt-32">
          <h2 className="text-4xl md:text-6xl font-[cursive]">elore's Collection</h2>
          <p className="text-lg md:text-5xl font-light leading-relaxed">
            Here at <span className="font-[cursive] text-[#ccc]">elore</span>, we focus on
            <br />
            delivering comfort with
            <br />a balanced touch of trendy design.
          </p>
          <button className="bg-gray-100 text-gray-800 px-6 py-2 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300">
            CHECKOUT COLLECTION
          </button>
        </div>
      </section>

      <main className="h-full w-full bg-white">
        <ProductCards />
      </main>

      {/* Celebrities */}
      <div className="text-center md:text-right px-4 md:mr-10 mt-6">
        <p className="text-3xl md:text-5xl font-[cursive]">Catch up Celebrities</p>
        <p className="text-xl md:text-2xl mt-2">"Follow the stars to be star"</p>
      </div>

      <main className="min-h-screen bg-white">
        <ProductGallery />
      </main>

      {/* Elore Care */}
      <div className="text-center px-4">
        <h1 className="text-5xl md:text-8xl font-[cursive]">Elore Care</h1>
        <h1 className="text-4xl md:text-6xl font-[cursive] mt-8">With Every Purchase, You</h1>
        <h1 className="text-4xl md:text-6xl font-[cursive]">Change a Life</h1>
        <h1 className="text-xl md:text-3xl font-[cursive] mt-8">
          Elore sponsors girl's education with each
        </h1>
        <h1 className="text-xl md:text-3xl font-[cursive]">
          order. See how your purchase is making
        </h1>
        <h1 className="text-xl md:text-3xl font-[cursive]">an impact!</h1>
      </div>

      <main>
        <MeetTheGirl />
      </main>

      {/* Testimonials */}
      <div className="text-center md:text-right mt-6 px-4 md:mr-20">
        <p className="text-4xl md:text-6xl font-[cursive]">Elore's Happy</p>
        <p className="text-4xl md:text-6xl font-[cursive]">Family</p>
        <p className="text-xl md:text-3xl text-left md:text-left ml-0 md:ml-16">
          See what our Happy
        </p>
        <p className="text-xl md:text-3xl text-left md:text-left ml-0 md:ml-16">
          Customers Have To Say
        </p>
      </div>

      <main>
        <TestimonialCard />
      </main>

      <main>
        <EloreComment />
      </main>

      <main>
        <Ending />
        <div className="relative w-full h-[200px] md:absolute md:w-[600px] md:h-[600px]">
          <Image src="/golswerl.svg" alt="Decorative Curve" fill />
        </div>
      </main>
    </main>
  );
}
