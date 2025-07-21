import { Mail, Instagram, Facebook, Linkedin, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className="relative w-full bg-[#e0e0e0] text-black overflow-hidden  pt-10 pb-20">
      {/* Top Navigation Columns */}
      <div className="w-full max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-sm font-light">
        {/* ACCOUNT */}
        <div className="space-y-3 text-center md:text-left">
          <h3 className="font-semibold text-xl">ACCOUNT</h3>
          <ul className="space-y-3">
            <Link href="/login">
              <li className="hover:underline cursor-pointer">LOG IN / SIGN UP</li>
            </Link>
          </ul>
        </div>

        {/* COMPANY */}
        <div className="space-y-3 text-center md:text-left">
          <h3 className="font-semibold text-xl">COMPANY</h3>
          <ul className="space-y-3">
            <li className="hover:underline cursor-pointer">ABOUT</li>
            <li className="hover:underline cursor-pointer">ELORE CARE</li>
            <li className="hover:underline cursor-pointer">CORPORATE GIFTS</li>
          </ul>
        </div>

        {/* GET HELP */}
        <div className="space-y-3 text-center md:text-left">
          <h3 className="font-semibold text-xl">GET HELP</h3>
          <ul className="space-y-3">
            <Link href="/help">
              <li className="hover:underline cursor-pointer ">HELP CENTER</li>
            </Link>
            <Link href="/refund">
              <li className="hover:underline cursor-pointer mt-2">RETURN & REFUND POLICY</li>
            </Link>
            <li className="hover:underline cursor-pointer">CUSTOMER SUPPORT</li>
            <li className="hover:underline cursor-pointer">SHIPPING INFO</li>
          </ul>
        </div>

        {/* ABOUT US */}
        <div className="space-y-3 text-center md:text-left">
          <h3 className="font-semibold text-xl">ABOUT US</h3>
          <ul className="space-y-3">
            <Link href="/payment">
              <li className="hover:underline cursor-pointer">PAYMENTS & DELIVERY POLICY</li>
            </Link>
            <li className="hover:underline cursor-pointer">CONTACT US</li>
            <li className="hover:underline cursor-pointer">TRACK YOUR ORDER</li>
            <Link href="/faq">
              <li className="hover:underline cursor-pointer">FAQ’s</li>
            </Link>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full max-w-7xl mx-auto px-4 mt-16 flex flex-col md:flex-row justify-between items-start gap-10">
        {/* Contact Info */}
        <div className="space-y-6 text-sm w-full md:w-1/2">
          <div>
            <h4 className="font-semibold text-xl">Contact Us</h4>
            <p className="mt-4">EMAIL :</p>
            <p className="text-gray-600">info@elorelifestyle.com</p>
            <p className="mt-4">CONTACT HERE :</p>
            <p className="text-gray-600">+91 7507612364</p>
          </div>

          {/* Social Icons */}
          <div>
            <p className="mb-2">FOLLOW US ON</p>
            <div className="flex gap-4 justify-center md:justify-start">
              <Instagram className="w-5 h-5" />
              <Facebook className="w-5 h-5" />
              <Linkedin className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* Email Signup */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0">
          <div className="flex items-center border border-gray-400 bg-white rounded overflow-hidden shadow-md w-full">
            <input
              type="email"
              placeholder="EMAIL ADDRESS"
              className="flex-grow px-4 py-3 text-sm outline-none w-full bg-transparent"
            />
            <button className="bg-black px-4 py-3 text-white">
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <p className="mt-6 text-[15px] text-gray-700 leading-relaxed text-center md:text-left">
            Subscribe now to unlock exclusive offers, early access to new arrivals, and special
            updates! Be the first to experience premium deals made just for you. Don’t miss out —
            join our community today!
          </p>
        </div>
      </div>
    </div>
  );
}
