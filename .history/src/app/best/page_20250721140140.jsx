// app/page.tsx or app/catalogue/page.tsx (if using app router)

'use client';
import Image from 'next/image';

const colors = [
  'bg-red-600',
  'bg-black',
  'bg-white',
  'bg-gray-400',
  'bg-pink-300',
  'bg-orange-400',
  'bg-yellow-300',
  'bg-brown-600',
  'bg-green-400',
  'bg-purple-300',
];

const ProductCard = () => (
  <div className="flex flex-col items-start space-y-2">
    {/* Image Placeholder */}
    <div className="w-full h-60 bg-gray-200 rounded-lg shadow-sm" />

    {/* Title */}
    <p className="text-sm font-medium text-gray-800">Purple Heel</p>
    <p className="text-sm font-medium text-gray-800">Purple Heel</p>
    {/* Color dots */}
    <div className="flex space-x-2">
      {colors.slice(0, 5).map((color, i) => (
        <span key={i} className={`w-4 h-4 rounded-full ${color} border`} />
      ))}
    </div>
  </div>
);

const Page = () => {
  return (
    <div className="flex w-full min-h-screen bg-white p-6 space-x-6">
      {/* Sidebar */}
      <div className="w-60 flex-shrink-0 space-y-6">
        <div className="text-gray-900 font-semibold">786 Products</div>

        {/* Categories */}
        <div>
          <h2 className="text-sm font-medium mb-2">Categories</h2>
          <ul className="text-sm text-gray-700 space-y-1">
            {['Heels', 'Flats', 'Products', 'Kolhapuri', 'Slides', 'Mules', 'Juttis'].map((cat) => (
              <li key={cat}>
                <label className="inline-flex items-center">
                  <input type="checkbox" className="mr-2" />
                  {cat}
                </label>
              </li>
            ))}
          </ul>
        </div>

        {/* Colors */}
        <div>
          <h2 className="text-sm font-medium mb-2">Colors</h2>
          <div className="flex flex-wrap gap-2">
            {colors.map((color, i) => (
              <span key={i} className={`w-5 h-5 rounded-full ${color} border`} />
            ))}
          </div>
        </div>

        {/* Sizes */}
        <div>
          <h2 className="text-sm font-medium mb-2 mt-4">Size</h2>
          <div className="grid grid-cols-4 gap-2">
            {['35', '36', '37', '38', '39', '40'].map((size) => (
              <button
                key={size}
                className="w-8 h-8 text-xs border rounded text-gray-700 hover:bg-gray-100"
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 flex-grow">
        {Array.from({ length: 12 }).map((_, i) => (
          <ProductCard key={i} />
        ))}
      </div>
    </div>
  );
};

export default Page;
