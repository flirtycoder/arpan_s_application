import React from 'react';

export default function MeetTheGirl() {
  return (
    <div className="relative w-full max-w-6xl mx-auto bg-white overflow-hidden">
      {/* Background lines - behind everything */}
      <div className="absolute left-8 top-0 w-1 h-full bg-gray-600 z-0"></div>
      <div className="absolute bottom-0 left-16 w-96 h-1 bg-gray-600 z-0"></div>

      <div className="flex relative z-10">
        {/* Image Section */}
        <div className="w-1/2 relative bg-white">
          <div className="ml-16 mt-8 mb-8">
            <img
              src="/' width='400' height='350' viewBox='0 0 400 350'%3E%3Crect width='400' height='350' fill='%23000000'/%3E%3Cg fill='%23ffffff'%3E%3Ccircle cx='80' cy='120' r='25'/%3E%3Ccircle cx='150' cy='90' r='30'/%3E%3Ccircle cx='220' cy='110' r='28'/%3E%3Ccircle cx='300' cy='130' r='25'/%3E%3Ccircle cx='120' cy='180' r='20'/%3E%3Ccircle cx='260' cy='190' r='22'/%3E%3C/g%3E%3Ctext x='200' y='280' font-family='Arial' font-size='14' fill='%23888' text-anchor='middle'%3EChildren Photo Placeholder%3C/text%3E%3C/svg%3E"
              alt="Group of smiling children"
              className="w-full h-auto filter grayscale relative z-20"
            />
          </div>
        </div>

        {/* Right Section with Text and Button */}
        <div className="w-1/2 bg-gray-200 relative flex items-center min-h-[500px]">
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
