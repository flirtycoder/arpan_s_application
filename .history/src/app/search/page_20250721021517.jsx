'use client';
import AnnouncementBar from '@/components/ui/announcementBar';
import Header from '@/components/common/Header';
import Ending from '@/components/common/Ending';
import Image from 'next/image';

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

      {/* Background Image Bottom Left */}
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

      {/* Manually Arranged Image Layout */}
      <div className="flex flex-col items-center gap-6 px-6 pb-20 relative z-10">
        {/* Row 1 */}
        <div className="flex gap-4">
          <img
            src="/search2.svg"
            alt="Product 1"
            className="w-[200px] h-[300px] rounded-lg object-cover"
          />
          <img
            src="/search3.svg"
            alt="Product 2"
            className="w-[126px] h-[200px] rounded-lg object-cover"
          />
          <img
            src="/search4.svg"
            alt="Product 3"
            className="w-[228px] h-[300px] rounded-lg object-cover"
          />
        </div>

        {/* Row 2 */}
        <div className="flex gap-4">
          <img
            src="/search5.svg"
            alt="Product 4"
            className="w-[341px] h-[228px] rounded-lg object-cover"
          />
          <img
            src="/search6.svg"
            alt="Product 5"
            className="w-[228px] h-[300px] rounded-lg object-cover"
          />
        </div>

        {/* Row 3 */}
        <div className="flex gap-4">
          <img
            src="/search7.svg"
            alt="Product 6"
            className="w-[200px] h-[300px] rounded-lg object-cover"
          />
          <img
            src="/search8.svg"
            alt="Product 7"
            className="w-[200px] h-[28px] rounded-lg object-cover"
          />
          <img
            src="/search9.svg"
            alt="Product 8"
            className="w-[126px] h-[200px] rounded-lg object-cover"
          />
        </div>

        {/* Row 4 */}
        <div className="flex gap-4">
          <img
            src="/search10.svg"
            alt="Product 9"
            className="w-[126px] h-[80px] rounded-lg object-cover"
          />
          <img
            src="/search11.svg"
            alt="Product 10"
            className="w-[200px] h-[300px] rounded-lg object-cover"
          />
          <img
            src="/search12.svg"
            alt="Product 11"
            className="w-[200px] h-[300px] rounded-lg object-cover"
          />
        </div>
      </div>

      <Ending />
    </div>
  );
};

export default Page;
