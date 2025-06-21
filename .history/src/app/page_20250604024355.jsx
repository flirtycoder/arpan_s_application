'use client';
import React from 'react';
import AnnouncementBar from '@/components/ui/announcementBar';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import HeroSection from '@/components/common/hero-section';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import ProductCards from '@/components/ProductCards';
import ProductGallery from '@/components/ProductGallery';
import MeetTheGirl from '@/components/MeetTheGirl';

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

      <div className="text-center py-10">
        <div className="flex justify-center gap-16 flex-wrap">
          {categories.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-36 h-36 rounded-full border-4 border-gray-300 overflow-hidden  flex items-center justify-center">
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

      <div className="mt-12 ml-20">
        <p className="text-6xl font-[cursive]">
          <u>elore's Favourite</u>
        </p>
      </div>
      <div className="ml-20">
        <p className="text-4xl font-[cursive]">TOP PICK FROM EVERY WEEK</p>
      </div>
      <div className="w-full bg-white py-8">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={10}
          slidesPerView={4}
          loop={true}
          autoplay={{ delay: 0, disableOnInteraction: true }}
          speed={4000}
          grabCursor={true}
          className="w-full"
        >
          {productImages.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="flex items-center justify-center h-64">
                <img src={src} alt={`Product ${index + 1}`} className="w-80 h-80 object-contain" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex flex-col items-center justify-center py-12 bg-white">
        {/* Heading */}
        <h2 className="text-center font-[cursive]  text-black leading-tight tracking-wide text-4xl">
          SEE WHAT EVERYONE <br /> LOVES
        </h2>

        {/* Button */}
        <button className="mt-4 px-10 py-5 bg-gray-300 text-black font-bold shadow-sm transition-all duration-200 rounded-lg ">
          CLICK HERE
        </button>

        {/* Horizontal Line */}
        <div className="mt-10 w-4/5 h-px bg-gray-400" />
      </div>
      <section
        className="w-full flex flex-col md:flex-row items-start justify-between bg-cover bg-center mt-20"
        style={{
          backgroundImage: "url('/Asset 1.svg')", // Replace with your actual background image path
        }}
      >
        {/* Left image block */}
        <div className="w-full md:w-1/2  flex justify-start items-start">
          <div className=" rounded-br-[60px] overflow-hidden shadow-lg">
            <Image
              src="/green1.svg" // Replace with your actual shoe image
              alt="Collection Shoe"
              width={637}
              height={500}
              className="object-cover"
            />
          </div>
        </div>

        {/* Right text block */}
        <div className="w-full md:w-1/2 p-6 text-white text-right space-y-10 flex flex-col justify-center items-end mr-28 mt-32">
          <h2 className="text-6xl font-[cursive]">elore&apos;s Collection</h2>
          <p className=" md:text-lg font-light leading-relaxed text-5xl">
            Here at <span className="font-[cursive] text-[#ccc]">elore</span>, we focus on <br />
            delivering comfort with <br />a balanced touched of trendy design.
          </p>

          <button className="bg-gray-100 text-gray-800 px-6 py-2 rounded-lg rounded-r-md font-semibold hover:bg-gray-200 transition-all duration-300">
            CHECKOUT COLLECTION
          </button>
        </div>
      </section>
      <main className="h-full w-full bg-white">
        <ProductCards />
      </main>
      <div className=" text-right mr-10 mt-2">
        <p className="text-5xl font-[cursive] ">Catch up Celebrities</p>
        <p className="text-2xl mt-5">"Follow the starts to be star"</p>
      </div>
      <main className="min-h-screen bg-white">
        <ProductGallery />
      </main>
      <div className="justify-center text-center ">
        <h1 className="text-8xl font-[cursive]"> Elore Care</h1>
        <h1 className="text-6xl font-[cursive] mt-12">With Every Purchase, You </h1>
        <h1 className="text-6xl font-[cursive] ">Change a Life </h1>
        <h1 className="text-3xl font-[cursive] mt-12">Elore sponsors girl's education with each</h1>
        <h1 className="text-3xl font-[cursive] ">order see how purchase is making </h1>
        <h1 className="text-3xl font-[cursive] ">an impact! </h1>
      </div>
      <main>
        <MeetTheGirl />
      </main>
      
    </main>
  );
}
