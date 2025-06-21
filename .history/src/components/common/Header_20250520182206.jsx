'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, UserRound, ShoppingCart } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white backdrop-blur-sm text-black py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <button className="mr-4 md:hidden" onClick={toggleMenu} aria-label="Toggle menu">
            <Image src="/images/img_navbar_button.svg" alt="Menu" width={20} height={25} />
          </button>

          <Link href="/" className="mr-6">
            <Image
              src="/images/img_elore_logo_png_1.png"
              alt="Elore Logo"
              width={40}
              height={42}
              className="h-auto"
            />
          </Link>

          <nav
            className={`${isMenuOpen ? 'block absolute top-24 left-0 right-0 bg-black/90 p-4 z-50' : 'hidden'} md:block`}
          >
            <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
              <li>
                <Link
                  href="/best-seller"
                  className="text-sm uppercase tracking-wide hover:text-gray-300"
                >
                  Best seller
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm uppercase tracking-wide hover:text-gray-300">
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/elore-care"
                  className="text-sm uppercase tracking-wide hover:text-gray-300"
                >
                  Elore care
                </Link>
              </li>
              <li>
                <Link
                  href="/track-order"
                  className="text-sm uppercase tracking-wide hover:text-gray-300"
                >
                  Track Your Order
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex items-center space-x-6  ">
          <button aria-label="Search" className="text-black">
            <Search className="text-black" />
          </button>
          <button aria-label="Search" className="text-black">
            <UserRound className="text-black" />
          </button>
          <button aria-label="Search" className="text-black">
            <UserRound className="text-black" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
