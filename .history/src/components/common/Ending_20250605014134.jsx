// app/components/Footer.jsx or .tsx

import { Mail, Instagram, Facebook, Linkedin, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <div className="relative w-full h-[1200px] bg-[#e0e0e0] text-black overflow-hidden mt-10">
      {/* Top Navigation Columns */}
      <div className="w-full max-w-7xl mx-auto pt-20 px-6 grid grid-cols-4 gap-8 text-sm font-light ">
        {/* ACCOUNT */}
        <div className="space-y-3">
          <h3 className="font-semibold text-xs mt-20">ACCOUNT</h3>
          <ul className="space-y-2 ">
            <li className="mt-16" >LOG IN/SIGN UP</li>
          </ul>
        </div>

        {/* COMPANY */}
        <div className="space-y-3">
          <h3 className="font-semibold text-xs mt-20">COMPANY</h3>
          <ul className="space-y-2">
            <li className='mt-16'>ABOUT</li>
            <li>ELORE CARE</li>
            <li>CORPORATE GIFTS</li>
          </ul>
        </div>

        {/* GET HELP */}
        <div className="space-y-3">
          <h3 className="font-semibold text-xs mt-20">GET HELP</h3>
          <ul className="space-y-2">
            <li className='mt-16'>HELP CENTER</li>
            <li>RETURN & REFUND POLICY</li>
            <li>CUSTOMER SUPPORT</li>
            <li>SHIPPING INFO</li>
          </ul>
        </div>

        {/* ABOUT US */}
        <div className="space-y-3">
          <h3 className="font-semibold text-xs mt-20">ABOUT US</h3>
          <ul className="space-y-2">
            <li className='mt-16'>PAYMENTS & DELIVERY POLICY</li>
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
          <div>
            <h4 className="font-medium">Contact Us</h4>
            <p className="mt-2">EMAIL :</p>
            <p className="text-gray-600">info@elorelifestyle.com</p>
            <p className="mt-4">CONTACT HERE :</p>
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
        <div className="mt-10 md:mt-0 w-full max-w-md text-center md:text-left">
          <div className="flex items-center border border-gray-400 bg-white rounded-sm overflow-hidden shadow-md">
            <input
              type="email"
              placeholder="EMAIL ADDRESS"
              className="flex-1 px-4 py-3 text-sm outline-none"
            />
            <button className="bg-black px-4 py-3 text-white">
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <p className="mt-6 text-sm text-gray-700 leading-relaxed">
            Subscribe now to unlock exclusive offers, early access to new arrivals, and special
            updates!
            <br />
            Be the first to experience premium deals made just for you.
            <br />
            Don’t miss out — join our community today!
          </p>
        </div>
      </div>

      {/* Bottom-Right Curve Background Placeholder */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px]">
        {/* Add your image src here */}
        {/* <Image src="/your-curve.svg" alt="Decorative Curve" fill /> */}
      </div>
    </div>
  );
}
