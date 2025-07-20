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
  '/search12.svg',
  '/search6.svg',
];

const Page = () => {
  return (
    <div className="relative bg-white min-h-screen   overflow-hidden">
      {/* Background SVG – fully visible and behind */}
      

      {/* Announcement Bar & Header */}
      <AnnouncementBar
        message="Get early access on launches and offers."
        linkText="Sign Up For Texts"
        linkUrl="/signup"
      />
      <Header />

      {/* Search Bar */}
      <div className="flex justify-center my-10 relative z-10">
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

      {/* Masonry Layout */}
      <div className="columns-2 sm:columns-3 md:columns-4 gap-4 space-y-4 p-20 relative ">
        {productImages.map((src, index) => (
          <div key={index} className="break-inside-avoid overflow-hidden rounded-lg shadow-sm">
            <img
              src={src}
              alt={`Product ${index + 1}`}
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
        ))}
      </div>
       <div className="hidden sm:block absolute right-0 bottom-0 lg:top-80 top-80 sm:top-96 pointer-events-none z-0">
                <Image
                  src="/faq.svg"
                  alt="FAQ Art"
                  width={617}
                  height={641}
                  priority
                  className="w-[300px] sm:w-[400px] lg:w-[617px] h-auto"
                />
              </div>

      <Ending />
    </div>
  );
};

export default Page;
