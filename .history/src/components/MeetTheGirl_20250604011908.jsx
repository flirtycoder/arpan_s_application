import React from 'react';

export default function MeetTheGirl() {
  return (
    <div className="relative w-full max-w-6xl mx-auto bg-white overflow-hidden mt-36">
      {/* Background lines - behind everything */}
      <div className="absolute left-24 top-0 w-1 h-full bg-black z-0"></div>
      <div className="absolute bottom-0 left-16 w-96 h-1 bg-black z-0"></div>

      <div className="">
        {/* Image Section */}
        <div className="w-full  bg-white">
          {/* Simple img tag - replace src with your image path */}
          <img
            src="/girl.svg"
            alt="Group of smiling children"
            className="w-full h-[812px] filter grayscale relative z-20"
          />
        </div>

        {/* Right Section with Text and Button */}
        <div className="w-full bg-gray-200 h-[662px] flex items-center ">
          <div className="pl-16 pr-8">
            <h1 className="text-5xl font-light text-gray-800 italic leading-tight mb-12">
              Meet The Girl
              <br />
              You're Helping
            </h1>

            <button className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-4 px-10 text-base tracking-widest transition-colors duration-300 uppercase">
              KNOW MORE
            </button>
          </div>

          {/* Decorative circles on the right */}
          <div className="absolute right-16 top-1/3">
            <div className="w-20 h-20 bg-gray-300 rounded-full opacity-80"></div>
          </div>
          <div className="absolute right-24 top-1/2">
            <div className="w-12 h-12 bg-gray-400 rounded-full opacity-60"></div>
          </div>
          <div className="absolute right-8 bottom-1/3">
            <div className="w-8 h-8 bg-gray-300 rounded-full opacity-70"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
