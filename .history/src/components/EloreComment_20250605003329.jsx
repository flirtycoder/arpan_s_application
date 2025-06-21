import Image from 'next/image';

export default function EloreComment() {
  return (
    <div className="relative bg-white overflow-hidden">
      {/* Background Shapes */}
      <div className="w-full">
        {/* Top Background Shape */}
        <Image
          src="/des1.svg"
          alt="Top Background"
          width={1460}
          height={1244}
          className="w-full h-auto -mt-96"
        />

        {/* Bottom Background Shape */}
        <Image
          src="/des2.svg"
          alt="Bottom Background"
          width={1460}
          height={1237}
          className="w-full h-auto -mt-34"
        />
      </div>

      {/* Foreground Content */}
      <div className="absolute top-0 left-0 w-full h-full z-10 flex flex-col items-center justify-center px-4 py-20 text-white">
        <div className="max-w-6xl w-full flex flex-col md:flex-row justify-between items-start space-y-10 md:space-y-0">
          {/* Left Side Text */}
          <div className="md:w-1/2 space-y-2 text-left">
            <p className="text-3xl tracking-wider text-gray-300">SEND YOUR PHOTO WITH ELORE</p>
            <p className="text-3xl tracking-wider text-gray-300">PRODUCTS AND YOUR GENUINE</p>
            <p className="text-3xl tracking-wider text-gray-300">REVIEW</p>
          </div>

          {/* Right Side Input */}
          <div className="md:w-1/2 flex flex-col items-end">
            <textarea
              rows="6"
              placeholder="ADD YOUR COMMENT HERE"
              className="w-full md:w-96 bg-white text-black px-6 py-4 rounded-xl text-base shadow-md resize-none focus:outline-none focus:ring-2 focus:ring-black"
            />
            <button className="mt-4 bg-black text-white px-8 py-3 rounded-xl hover:bg-gray-800 transition-all duration-200 shadow">
              POST
            </button>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-3xl font-bold text-gray-600">GET A CHANCE TO GET</p>
          <p className="text-3xl font-bold text-gray-600">FEATURED ON ELORE</p>
        </div>
      </div>
    </div>
  );
}
