'use client';
import { Instagram, Facebook, Linkedin, ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  return (
    <div className="relative bg-[#e3e3e3] text-black px-6 md:px-20 py-16 overflow-hidden">
      {/* Main Footer Grid */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* ACCOUNT */}
        <div>
          <h4 className="font-semibold mb-4">ACCOUNT</h4>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>LOG IN/SIGN UP</li>
          </ul>
        </div>

        {/* COMPANY */}
        <div>
          <h4 className="font-semibold mb-4">COMPANY</h4>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>ABOUT</li>
            <li>ELORE CARE</li>
            <li>CORPORATE GIFTS</li>
          </ul>
        </div>

        {/* GET HELP */}
        <div>
          <h4 className="font-semibold mb-4">GET HELP</h4>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>HELP CENTER</li>
            <li>RETURN & REFUND POLICY</li>
            <li>CUSTOMER SUPPORT</li>
            <li>SHIPPING INFO</li>
          </ul>
        </div>

        {/* ABOUT US */}
        <div>
          <h4 className="font-semibold mb-4">ABOUT US</h4>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>PAYMENTS & DELIVERY POLICY</li>
            <li>CONTACT US</li>
            <li>TRACK YOUR ORDER</li>
            <li>FAQ's</li>
          </ul>
        </div>

        {/* Subscription */}
        <div className="md:col-span-1 flex flex-col gap-4">
          <div className="flex w-full">
            <input
              type="email"
              placeholder="EMAIL ADDRESS"
              className="w-full px-4 py-2 rounded-l-md bg-white text-sm text-gray-800 outline-none"
            />
            <button className="bg-black text-white px-4 py-2 rounded-r-md">
              <ArrowRight size={18} />
            </button>
          </div>
          <p className="text-sm text-gray-700 leading-6">
            Subscribe now to unlock exclusive offers, early access to new arrivals, and special
            updates! <br />
            Be the first to experience premium deals made just for you. <br />
            Don’t miss out – join our community today!
          </p>
        </div>
      </div>

      {/* Bottom Left Contact & Social */}
      <div className="mt-16 flex flex-col md:flex-row justify-between items-start gap-10 text-sm">
        {/* Contact Info */}
        <div>
          <p className="text-black font-semibold mb-1">Contact Us</p>
          <p className="text-gray-600">
            EMAIL: <br /> info@elorelifestyle.com
          </p>
          <p className="mt-4 text-gray-600">
            CONTACT HERE: <br /> +91 7507612364
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <Instagram className="text-black" size={20} />
            <Facebook className="text-black" size={20} />
            <Linkedin className="text-black" size={20} />
          </div>
        </div>
      </div>

      {/* Decorative BG swirl image (bottom left) */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] pointer-events-none">
        <Image
          src="/footer-swirl.svg" // Replace with your image
          alt="Decorative Swirl"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
}
