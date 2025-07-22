'use client';
import React from 'react';

export default function EloreComment() {
  return (
    <div className="bg-white py-20 px-4 sm:px-8 md:px-16">
      {/* Foreground Content */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
        {/* Left Side Text */}
        <div className="md:w-1/2 space-y-2 text-left">
          <p className="text-2xl sm:text-3xl tracking-wider text-gray-700">
            SEND YOUR PHOTO WITH ELORE
          </p>
          <p className="text-2xl sm:text-3xl tracking-wider text-gray-700">
            PRODUCTS AND YOUR GENUINE
          </p>
          <p className="text-2xl sm:text-3xl tracking-wider text-gray-700">REVIEW</p>
        </div>

        {/* Right Side Input */}
        <div className="md:w-1/2 w-full flex flex-col items-start md:items-end">
          <textarea
            rows={6}
            placeholder="ADD YOUR COMMENT HERE!!!"
            className="w-full md:w-96 bg-gray-200 text-black px-6 py-6 rounded-xl text-base shadow-md resize-none focus:outline-none focus:ring-2 focus:ring-black border"
          />
          <button className="mt-4 bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-all duration-200 shadow">
            POST
          </button>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-20 md:mt-32 text-center md:text-right">
        <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-600">
          GET A CHANCE TO GET
        </p>
        <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-600">
          FEATURED ON ELORE
        </p>
      </div>
    </div>
  );
}
