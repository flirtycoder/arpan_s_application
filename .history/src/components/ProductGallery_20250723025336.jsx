import Image from 'next/image';
import { Heart, ChevronRight } from 'lucide-react';

export default function ProductGallery() {
  const products = [{ image: '/card4.svg' }, { image: '/card5.svg' }, { image: '/card6.svg' }];

  return (
    <div className="relative py-10 bg-white">
      {/* Arrow Icon (optional future usage) */}
      <div className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400 text-4xl z-10 cursor-pointer hidden md:block">
        <ChevronRight />
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4 md:px-12">
        {products.map((product, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <div className="relative w-full max-w-[360px] h-[500px] sm:h-[600px] md:h-[640px] rounded-xl overflow-hidden shadow-md">
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
            <button className="bg-gray-800 text-white text-xs font-semibold px-6 py-2 mt-3 rounded-t-full shadow-sm text-center">
              VIEW <br /> PRODUCT
            </button>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="mt-10 border-t border-gray-300 w-4/5 md:w-1/2 mx-auto" />
    </div>
  );
}
