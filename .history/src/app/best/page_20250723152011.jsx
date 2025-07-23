'use client';
import React, { useState } from 'react';
import AnnouncementBar from '@/components/ui/announcementBar';
import Header from '@/components/common/Header';
import Ending from '@/components/common/Ending';
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
    title: 'green Heel',
    src: '/green.svg',
    colors: ['bg-blue-300', 'bg-gray-400', 'bg-black', 'bg-red-500'],
  },
  {
    title: 'green Heel',
    src: '/green2.svg',
    colors: ['bg-blue-300', 'bg-gray-400', 'bg-black', 'bg-red-500'],
  },
];

export default function ProductsPage() {
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const Filters = () => (
    <div className="space-y-6 border p-4 rounded-md bg-gray-50">
      <div>
        <h3 className="text-lg font-semibold mb-2">Categories</h3>
        <ul className="space-y-1 text-sm">
          {['Heels', 'Sandals', 'Kolhapuri', 'Mules', 'Flats'].map((cat, i) => (
            <li key={i}>
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                {cat}
              </label>
            </li>
          ))}
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
            'bg-white border',
            'bg-purple-300'
            '',
          ].map((color, i) => (
            <div key={i} className={`w-8 h-8 rounded-full border ${color}`} />
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Size</h3>
        <div className="grid grid-cols-3 gap-2">
          {['36', '37', '38', '39', '40'].map((size, i) => (
            <button key={i} className="border px-2 py-1 text-sm hover:bg-black hover:text-white">
              {size}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative bg-white min-h-screen overflow-hidden">
      <AnnouncementBar
        message="Get early access on launches and offers."
        linkText="Sign Up For Texts"
        linkUrl="/signup"
      />
      <Header />

      <div className="lg:hidden p-4">
        <button
          onClick={() => setShowMobileFilters(!showMobileFilters)}
          className="border px-4 py-2 rounded-md bg-black text-white"
        >
          {showMobileFilters ? 'Hide Filters' : 'Show Filters'}
        </button>
        {showMobileFilters && (
          <div className="mt-4">
            <Filters />
          </div>
        )}
      </div>

      <div className="flex flex-col lg:flex-row bg-white p-4 lg:p-6 gap-6">
        <aside className="w-1/4 hidden lg:block">
          <Filters />
        </aside>

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

      <Ending />
    </div>
  );
}
