'use client';
import AnnouncementBar from '@/components/ui/announcementBar';
import Header from '@/components/common/Header';
import Ending from '@/components/common/Ending';

import Image from 'next/image';

const productImages = [
  '/search2.svg',
  '/search3.svg',
  '/search4.svg',
  '/search5.svg',
  '/search6.svg',
  '/search7.svg',
  '/search8.svg',
  '/search9.svg',
  '/search10.svg',
  '/search11.svg',
  '/search2.svg',
  '/search2.svg',
];

const page = () => {
  return (
    <div className="relative bg-white min-h-screen px-4 sm:px-6 py-10 overflow-hidden">
      <div>
        <AnnouncementBar
          message="Get early access on launches and offers."
          linkText="Sign Up For Texts"
          linkUrl="/signup"
        />
      </div>
      <div>
        <Header />
      </div>
      {/* Background SVG Placeholder */}
      <div className="absolute bottom-0 left-0 w-[926px] h-[969px] -z-10">
        <Image src="/search.svg" alt="Background" width={926} height={969} />
      </div>

      {/* Search Bar */}
      <div className="flex justify-center mb-10 z-10 relative">
        <div className="flex items-center w-full max-w-2xl bg-[#F6F6F6] border border-gray-300 rounded-md px-4 py-2">
          <input
            type="text"
            placeholder="Search"
            className="flex-grow bg-transparent outline-none text-sm text-gray-700 placeholder-gray-500"
          />
          <button>
            <svg width="20" height="20" fill="none" stroke="gray" strokeWidth="1.5">
              <circle cx="9" cy="9" r="6" />
              <line x1="14" y1="14" x2="19" y2="19" />
            </svg>
          </button>
        </div>
      </div>

      {/* Masonry Style Layout */}
      <div className="columns-2 sm:columns-3 md:columns-4 gap-4 space-y-4">
        {productImages.map((src, index) => (
          <div key={index} className="break-inside-avoid overflow-hidden rounded-md">
            <Image
              src={src}
              alt={`Product ${index + 1}`}
              width={500}
              height={500}
              layout="responsive"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
        ))}
      </div>
      <Ending />
    </div>
  );
};

export default page;
