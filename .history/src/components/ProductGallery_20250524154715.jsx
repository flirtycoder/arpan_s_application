import Image from 'next/image';
import { Heart,ChevronRight } from 'lucide-react';

export default function ProductGallery() {
  const products = [
    { image: '/images/product1.jpg' },
    { image: '/images/product2.jpg' },
    { image: '/images/product3.jpg' },
  ];

  return (
    <div className="relative py-10 bg-white">
      {/* Left Arrow (not functional) */}
      <div className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400 text-4xl z-10 cursor-pointer">
        <ChevronRight/>
      </div>

      {/* Card Row */}
      <div className="flex justify-center gap-6 px-6">
        {products.map((product, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <div className="relative w-[200px] h-[320px] rounded-xl overflow-hidden shadow-md">
              <Image
                src={product.image}
                alt={`Product ${idx + 1}`}
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute top-2 left-2 text-white">
                <Heart size={16} />
              </div>
            </div>
            {/* Button */}
            <button className="bg-gray-800 text-white text-xs font-semibold px-6 py-2 mt-3 rounded-t-full shadow-sm">
              VIEW <br /> PRODUCT
            </button>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="mt-10 border-t border-gray-300 w-1/2 mx-auto"></div>
    </div>
  );
}
