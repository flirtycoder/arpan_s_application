'use client';
import React from 'react';
import Image from 'next/image';

const products = [
  {
    title: 'Purple Heel',
    src: '/purple.svg',
    colors: ['bg-purple-300', 'bg-pink-300', 'bg-brown-400', 'bg-red-500'],
  },
  {
    title: 'Denim Heel',
    src: '/denim.svg',
    colors: ['bg-blue-300', 'bg-gray-400', 'bg-black', 'bg-red-500'],
  },
  {
    title: 'Orange Heel',
    src: '/orange.svg',
    colors: ['bg-blue-300', 'bg-gray-400', 'bg-black', 'bg-red-500'],
  },
  {
    title: 'Pink Heel',
    src: '/pink.svg',
    colors: ['bg-blue-300', 'bg-gray-400', 'bg-black', 'bg-red-500'],
  },
  {
    title: 'Denim Heel',
    src: '/your-image-2.jpg',
    colors: ['bg-blue-300', 'bg-gray-400', 'bg-black', 'bg-red-500'],
  },
  {
    title: 'Denim Heel',
    src: '/your-image-2.jpg',
    colors: ['bg-blue-300', 'bg-gray-400', 'bg-black', 'bg-red-500'],
  },
  // Add more products below...
];

export default function ProductsPage() {
  return (
    <div className="flex min-h-screen bg-white p-6">
      {/* Left Sidebar */}
      <aside className="w-1/4 pr-8 hidden lg:block">
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Categories</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <input type="checkbox" /> Heels
              </li>
              <li>
                <input type="checkbox" /> Sandals
              </li>
              <li>
                <input type="checkbox" /> Kolhapuri
              </li>
              <li>
                <input type="checkbox" /> Mules
              </li>
              <li>
                <input type="checkbox" /> Flats
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Colors</h3>
            <div className="grid grid-cols-3 gap-2">
              {[
                'bg-red-500',
                'bg-black',
                'bg-gray-300',
                'bg-orange-400',
                'bg-pink-400',
                'bg-white',
                'bg-purple-300',
              ].map((color, i) => (
                <div key={i} className={`w-10 h-10 rounded-full border ${color}`} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Size</h3>
            <div className="grid grid-cols-3   gap-2">
              {['36', '37', '38', '39', '40'].map((size, i) => (
                <button
                  key={i}
                  className="border px-2 py-1 text-xs hover:bg-black hover:text-white"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        </div>
      </aside>

      {/* Product Grid */}
      <main className="w-full lg:w-3/4 grid grid-cols-2 sm:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div key={index} className="flex flex-col">
            <Image
              src={product.src}
              alt={product.title}
              width={300}
              height={300}
              className="rounded-md object-cover w-full h-auto"
            />
            <h3 className="text-sm mt-2">{product.title}</h3>
            <div className="flex gap-1 mt-1">
              {product.colors.map((color, i) => (
                <span key={i} className={`w-4 h-4 rounded-full ${color}`} />
              ))}
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}
