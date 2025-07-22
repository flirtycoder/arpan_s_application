'use client';
import Image from 'next/image';

export default function EloreComment() {
  return (
    <div className="relative bg-white overflow-hidden">
      {/* Background Images */}
      <div className="absolute top-0 left-0 w-full z-0">
        <Image
          src="/des1.svg"
          alt="Top Background"
          width={1460}
          height={1244}
          className="w-full h-auto object-cover"
        />
        <Image
          src="/des2.svg"
          alt="Bottom Background"
          width={1460}
          height={1237}
          className="w-full h-auto object-cover -mt-20"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-20 py-24 flex flex-col items-center justify-center text-white">
        <div className="w-full max-w-6xl flex flex-col md:flex-row justify-between items-center gap-10">
          {/* Left Text */}
          <div className="w-full md:w-1/2 space-y-2 text-center md:text-left">
            <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 font-medium">
              SEND YOUR PHOTO WITH ELORE
            </p>
            <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 font-medium">
              PRODUCTS AND YOUR GENUINE
            </p>
            <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 font-medium">REVIEW</p>
          </div>

          {/* Right Input */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-end gap-4">
            <textarea
              placeholder="ADD YOUR COMMENT HERE!!!"
              rows={4}
              className="w-full md:w-96 bg-gray-200 text-black px-6 py-4 rounded-xl shadow-md resize-none border focus:outline-none focus:ring-2 focus:ring-black"
            />
            <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
              POST
            </button>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-700">
            GET A CHANCE TO GET
          </p>
          <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-700">
            FEATURED ON ELORE
          </p>
        </div>
      </div>
    </div>
  );
}
