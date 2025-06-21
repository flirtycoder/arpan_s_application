'use client';
import React from 'react';
import AnnouncementBar from '@/components/ui/announcementBar';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import HeroSection from '@/components/common/hero-section';
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

        <div className="bg-gray-400 rounded-full p-1 overflow-hidden w-[149px] h-[149px]">
          <div className="bg-gray-400 rounded-full overflow-hidden w-full h-full flex items-center justify-center">
            <Image
              src="/images/img_good_objects_zara_crossover_leather_sandals.png"
              alt="Leather Sandals"
              width={133}
              height={128}
              className="rounded-full object-cover"
            />
          </div>
        </div>

        <div className="bg-gray-400 rounded-full p-1 overflow-hidden w-[149px] h-[149px]">
          <div className="bg-gray-400 rounded-full overflow-hidden w-full h-full flex items-center justify-center">
            <Image
              src="/images/img_download.png"
              alt="Fashion Item"
              width={133}
              height={128}
              className="rounded-full object-cover"
            />
          </div>
        </div>

        <div className="bg-gray-400 rounded-full p-1 overflow-hidden w-[149px] h-[149px]">
          <div className="bg-gray-400 rounded-full overflow-hidden w-full h-full flex items-center justify-center">
            <Image
              src="/images/img_9822e62d1ccd4c91b6830a365ecc0030.png"
              alt="Fashion Collection"
              width={133}
              height={128}
              className="rounded-full object-cover"
            />
          </div>
        </div>

        <div className="bg-gray-400 rounded-full p-1 overflow-hidden w-[149px] h-[149px]">
          <div className="bg-gray-400 rounded-full overflow-hidden w-full h-full flex items-center justify-center">
            <Image
              src="/images/img_bil_donovan_1.png"
              alt="Fashion Design"
              width={134}
              height={132}
              className="rounded-full object-cover"
            />
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
