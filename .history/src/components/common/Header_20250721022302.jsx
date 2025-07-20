'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, UserRound, ShoppingCart } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="bg-grey backdrop-blur-sm text-black py-4 border relative z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          {/* Mobile menu toggle */}
          <button className="mr-4 md:hidden" onClick={toggleMenu} aria-label="Toggle menu">
            <Image src="/images/img_navbar_button.svg" alt="Menu" width={20} height={25} />
          </button>

          {/* Logo */}
          <Link href="/" className="mr-6">
            <Image
              src="/images/img_elore_logo_png_1.png"
              alt="Elore Logo"
              width={40}
              height={42}
              className="h-auto"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li>
                <Link
                  href="/best-seller"
                  className="text-sm uppercase tracking-wide hover:text-gray-500 transition"
                >
                  Best seller
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm uppercase tracking-wide hover:text-gray-500 transition"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/elore-care"
                  className="text-sm uppercase tracking-wide hover:text-gray-500 transition"
                >
                  Elore care
                </Link>
              </li>
              <li>
                <Link
                  href="/track-order"
                  className="text-sm uppercase tracking-wide hover:text-gray-500 transition"
                >
                  Track Your Order
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4 sm:space-x-6">
          <Link href="/search">
          <button aria-label="Search">
            <Search className="w-5 h-5 sm:w-6 sm:h-6" />
          </button><></>
          <button aria-label="User">
            <UserRound className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <button aria-label="Cart">
            <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black text-white p-6 z-40 shadow-md">
          <ul className="flex flex-col space-y-4 text-sm uppercase tracking-wide">
            <li>
              <Link href="/best-seller" onClick={() => setIsMenuOpen(false)}>
                Best seller
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link href="/elore-care" onClick={() => setIsMenuOpen(false)}>
                Elore care
              </Link>
            </li>
            <li>
              <Link href="/track-order" onClick={() => setIsMenuOpen(false)}>
                Track Your Order
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
