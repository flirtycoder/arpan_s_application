'use client';

import { Instagram, Facebook, Linkedin, ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="relative bg-[#e3e3e3] text-black px-6 md:px-20 py-20 overflow-hidden">
      {/* Top Footer Grid */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10 text-sm text-gray-700 mb-16">
        {/* ACCOUNT */}
        <div className="space-y-4">
          <h4 className="font-bold text-black text-sm">ACCOUNT</h4>
          <ul className="space-y-1">
            <li>LOG IN/SIGN UP</li>
          </ul>
        </div>

        {/* COMPANY */}
        <div className="space-y-4">
          <h4 className="font-bold text-black text-sm">COMPANY</h4>
          <ul className="space-y-1">
            <li>ABOUT</li>
            <li>ELORE CARE</li>
            <li>CORPORATE GIFTS</li>
          </ul>
        </div>

        {/* GET HELP */}
        <div className="space-y-4">
          <h4 className="font-bold text-black text-sm">GET HELP</h4>
          <ul className="space-y-1">
            <li>HELP CENTER</li>
            <li>RETURN & REFUND POLICY</li>
            <li>CUSTOMER SUPPORT</li>
            <li>SHIPPING INFO</li>
          </ul>
        </div>

        {/* ABOUT US */}
        <div className="space-y-4">
          <h4 className="font-bold text-black text-sm">ABOUT US</h4>
          <ul className="space-y-1">
            <li>PAYMENTS & DELIVERY POLICY</li>
            <li>CONTACT US</li>
            <li>TRACK YOUR ORDER</li>
            <li>FAQ's</li>
          </ul>
        </div>

        {/* Subscribe */}
        <div className="flex flex-col gap-4">
          <div className="flex w-full">
            <input
              type="email"
              placeholder="EMAIL ADDRESS"
              className="w-full px-4 py-2 rounded-l-sm bg-white text-sm text-gray-700 outline-none"
            />
            <button className="bg-black text-white px-4 py-2 rounded-r-sm flex items-center justify-center">
              <ArrowRight size={16} />
            </button>
          </div>
          <p className="text-xs leading-5 text-gray-700">
            Subscribe now to unlock exclusive offers, early access to new arrivals, and special
            updates! <br />
            Be the first to experience premium deals made just for you. <br />
            Don’t miss out – join our community today!
          </p>
        </div>
      </div>

      {/* Bottom Section - Contact & Socials */}
      <div className="flex flex-col md:flex-row justify-between text-sm text-gray-700 gap-10 z-10">
        {/* Left: Contact Info */}
        <div className="space-y-3">
          <p className="font-semibold text-black">Contact Us</p>
          <p>
            EMAIL: <br />
            info@elorelifestyle.com
          </p>
          <p>
            CONTACT HERE: <br />
            +91 7507612364
          </p>
          {/* Social Icons */}
          <div className="flex gap-4 pt-2">
            <Instagram className="text-black" size={18} />
            <Facebook className="text-black" size={18} />
            <Linkedin className="text-black" size={18} />
          </div>
        </div>
      </div>

      {/* Decorative Gold Swirl Image Placeholder */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] pointer-events-none z-0">
        {/* You can replace this src */}
        <Image src="/golswerl.svg" alt="Golden Swirl" fill className="object-contain" />
      </div>
    </footer>
  );
}
