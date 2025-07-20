'use client';
import Image from 'next/image';
import AnnouncementBar from '@/components/ui/announcementBar';
import Header from '@/components/common/Header';
import Ending from '@/components/common/Ending';
const AllAboutElore = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div>
        <AnnouncementBar
          message="Get early access on launches and offers."
          linkText="Sign Up For Texts"
          linkUrl="/signup"
        />
        <Header />
      </div>
      <div>
        <Image
          src="/about.svg"
          alt="All About Elore Background"
          layout="fill"
          objectFit="cover"
          priority
          className="z-0 mt-3"
        />

        {/* Overlay Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 text-center px-4">
          <h1 className="text-[72px] sm:text-[90px] md:text-[110px] lg:text-[130px] font-serif tracking-wide uppercase leading-tight">
            ALL ABOUT
          </h1>
          <h2 className="text-[90px] sm:text-[110px] md:text-[140px] lg:text-[160px] font-serif font-normal lowercase leading-none">
            elore
          </h2>
        </div>
      </div>
    </div>
  );
};

export default AllAboutElore;
