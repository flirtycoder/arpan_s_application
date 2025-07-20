import AnnouncementBar from '@/components/ui/announcementBar';
import Header from '@/components/common/Header';
import Ending from '@/components/common/Ending';
'use client';

import Image from 'next/image';

const productImages = [
  '/products/img1.jpg',
  '/products/img2.jpg',
  '/products/img3.jpg',
  '/products/img4.jpg',
  '/products/img5.jpg',
  '/products/img6.jpg',
  '/products/img7.jpg',
  '/products/img8.jpg',
  '/products/img9.jpg',
  '/products/img10.jpg',
  '/products/img11.jpg',
  '/products/img12.jpg',
];

const page = () => {
    return (
    
        <div className="relative bg-white min-h-screen px-4 sm:px-6 py-10 overflow-hidden">
            
          {/* Background SVG Placeholder */}
          <div className="absolute bottom-0 left-0 w-[926px] h-[969px] -z-10">
            {/* <Image src="/bg.svg" alt="Background" width={926} height={969} /> */}
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
        </div>
    
    );
}
 
export default page;