'use client';

import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const categories = [
    { name: 'Gifting', href: '/gifting' },
    { name: 'New Arrivals', href: '/new-arrivals' },
    { name: 'Best-Seller', href: '/best-seller' },
    { name: 'Footwears', href: '/footwears' },
    { name: 'Hand Bags', href: '/hand-bags' },
    { name: 'Perfumes', href: '/perfumes' },
    { name: 'Accessories', href: '/accessories' },
    { name: 'Wedding Collection', href: '/wedding-collection' },
    { name: 'Sale & offers', href: '/sale', highlight: true }
  ];

  return (
    <footer className="bg-white backdrop-blur-sm text-black py-4">
      <div className="container mx-auto px-4">
        <nav className="flex flex-wrap justify-center">
          {categories.map((category, index) => (
            <Link 
              key={index}
              href={category.href}
              className={`px-3 py-2 text-sm uppercase tracking-wide ${category.highlight ? 'text-red-400' : 'text-black'} hover:opacity-80`}
            >
              {category.name}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;