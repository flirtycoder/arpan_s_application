// components/ProductShowcase.jsx

import Image from 'next/image';

export default function ProductShowcase() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <Image
        src="/Vector 2.svg" // The black/gold background you uploaded
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
      />

      {/* Cards Container */}
      <div className="absolute inset-0 flex justify-center items-center gap-6">
        {/* Card 1 */}
        <div className="relative w-60 h-[350px] rounded-xl overflow-hidden shadow-xl">
          <Image src="/card1.svg" alt="New Arrival" layout="fill" objectFit="cover" />
          <div className="absolute top-4 left-4 text-white text-sm font-semibold bg-black/40 px-2 py-1 rounded">
            NEW ARRIVAL
          </div>
          <button className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white text-black text-xs font-semibold py-2 px-4 rounded-full shadow-md hover:bg-gray-200">
            SHOP THE TREND
          </button>
        </div>

        {/* Card 2 */}
        <div className="relative w-60 h-[350px] rounded-xl overflow-hidden shadow-xl">
          <Image src="/card2.svg" alt="Best Seller" layout="fill" objectFit="cover" />
          <div className="absolute top-4 left-4 text-white text-sm font-semibold bg-black/40 px-2 py-1 rounded">
            BEST SELLER
          </div>
          <button className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white text-black text-xs font-semibold py-2 px-4 rounded-full shadow-md hover:bg-gray-200">
            SHOP THE BEST
          </button>
        </div>

        {/* Card 3 */}
        <div className="relative w-60 h-[350px] rounded-xl overflow-hidden shadow-xl">
          <Image
            src="/card3.svg"
            alt="Casual Wears"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute top-4 left-4 text-white text-sm font-semibold bg-black/40 px-2 py-1 rounded">
            CASUAL WEARS
          </div>
          <button className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white text-black text-xs font-semibold py-2 px-4 rounded-full shadow-md hover:bg-gray-200">
            SHOP THE BEST
          </button>
        </div>
      </div>
    </div>
  );
}
