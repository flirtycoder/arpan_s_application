'use client';
import AnnouncementBar from '@/components/ui/announcementBar';
import Header from '@/components/common/Header';
import Ending from '@/components/common/Ending';
import Image from 'next/image';

const productImages = [
  { src: '/search2.svg', width: 200, height: 30 },
  { src: '/search3.svg', width: 126, height: 200 },
  { src: '/search4.svg', width: 228, height: 300 },
  { src: '/search5.svg', width: 341, height: 228 },
  { src: '/search6.svg', width: 228, height: 300 },
  { src: '/search7.svg', width: 200, height: 300 },
  { src: '/search8.svg', width: 200, height: 28 },
  { src: '/search9.svg', width: 126, height: 200 },
  { src: '/search10.svg', width: 126, height: 80 },
  { src: '/search11.svg', width: 200, height: 300 },
  { src: '/search12.svg', width: 200, height: 300 },
];

const Page = () => {
  return (
    <div className="relative bg-white min-h-screen overflow-hidden">
      {/* Announcement and Header */}
      <AnnouncementBar
        message="Get early access on launches and offers."
        linkText="Sign Up For Texts"
        linkUrl="/signup"
      />
      <Header />

      {/* Background Image */}
      <div className="absolute left-0 bottom-0 -z-10">
        <Image
          src="/search1.svg"
          alt="Background Art"
          width={927}
          height={960}
          priority
          className="w-[927px] h-[960px] object-contain"
        />
      </div>

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

      {/* Custom Layout Images */}
      <div className="flex flex-wrap justify-center gap-8 px-4 pb-20 relative z-10">
        {productImages.map((img, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg shadow-sm"
            style={{ width: `${img.width}px`, height: `${img.height}px` }}
          >
            <img
              src={img.src}
              alt={`Product ${index + 1}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>

      <Ending />
    </div>
  );
};

export default Page;
