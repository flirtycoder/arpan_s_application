// app/components/Footer.jsx or .tsx

import { Mail, Instagram, Facebook, Linkedin, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className="relative w-full h-[1200px] bg-[#e0e0e0] text-black overflow-hidden mt-10">
      {/* Top Navigation Columns */}
      <div className="w-full max-w-7xl mx-auto pt-20 px-6 grid grid-cols-4 gap-8 text-sm font-light ">
        {/* ACCOUNT */}
        <div className="space-y-3">
          <h3 className="font-semibold text-xl mt-20">ACCOUNT</h3>
          <ul className="space-y-4 ">
            <li className="mt-20">LOG IN/SIGN UP</li>
          </ul>
        </div>

        {/* COMPANY */}
        <div className="space-y-3">
          <h3 className="font-semibold text-xl mt-20">COMPANY</h3>
          <ul className="space-y-4">
            <li className="mt-20">ABOUT</li>
            <li>ELORE CARE</li>
            <li>CORPORATE GIFTS</li>
          </ul>
        </div>

        {/* GET HELP */}
        <div className="space-y-3">
          <h3 className="font-semibold text-xl mt-20">GET HELP</h3>
          <ul className="space-y-4">
            <li className="mt-20">HELP CENTER</li>
            <Link href={}>
              <li>RETURN & REFUND POLICY</li>
            </Link>
            <li>CUSTOMER SUPPORT</li>
            <li>SHIPPING INFO</li>
          </ul>
        </div>

        {/* ABOUT US */}
        <div className="space-y-3">
          <h3 className="font-semibold text-xl mt-20">ABOUT US</h3>
          <ul className="space-y-4">
            <Link href="/payment">
              <li className="mt-20">PAYMENTS & DELIVERY POLICY</li>
            </Link>
            <li>CONTACT US</li>
            <li>TRACK YOUR ORDER</li>
            <li>FAQ’s</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full max-w-7xl mx-auto mt-32 px-6 flex flex-col md:flex-row justify-between items-start">
        {/* Left Column: Contact */}
        <div className="space-y-8 text-sm">
          <div className="mt-32">
            <h4 className="font-semibold text-xl">Contact Us</h4>
            <p className="mt-12">EMAIL :</p>
            <p className="text-gray-600">info@elorelifestyle.com</p>
            <p className="mt-12">CONTACT HERE :</p>
            <p className="text-gray-600">+91 7507612364</p>
          </div>

          {/* Socials */}
          <div>
            <p className="mb-2">FOLLOW US ON</p>
            <div className="flex gap-4 text-black">
              <Instagram className="w-5 h-5" />
              <Facebook className="w-5 h-5" />
              <Linkedin className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* Right Column: Email & Text */}
        {/* Right Column: Email & Text */}
        <div className="mt-10 md:mt-0 w-full max-w-md md:text-left">
          <div className="flex items-center border border-gray-400 bg-white rounded-sm overflow-hidden shadow-md mt-32 w-full">
            <input
              type="email"
              placeholder="EMAIL ADDRESS"
              className="flex-grow px-4 py-3 text-sm outline-none w-full bg-transparent"
            />
            <button className="bg-black px-4 py-3 text-white flex items-center justify-center">
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <p className="mt-6 text-[15px] text-gray-700 leading-relaxed text-center md:text-center">
            Subscribe now to unlock exclusive <br />
            offers, early access to new arrivals,
            <br />
            and special updates!
            <br />
            Be the first to experience premium
            <br />
            deals made just for you.
            <br />
            Don’t miss out — join our community
            <br />
            today!
          </p>
        </div>
      </div>

      {/* Bottom-Right Curve Background Placeholder */}
    </div>
  );
}
