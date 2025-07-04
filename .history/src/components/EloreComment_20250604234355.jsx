import Image from 'next/image';

export default function EloreComment() {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      {/* Top Background Shape */}
      <div className="absolute top-0 left-0 w-full h-[827px] z-0">
        <Image
          src="/des1.svg" // Replace with your top background image
          alt="Top Background"
          layout="fill"
          objectFit="cover"
          className="pointer-events-none"
        />
      </div>

      {/* Bottom Background Shape */}
      <div className="absolute bottom-0 left-0 w-full h-[827px] z-0 mt-20">
        <Image
          src="/des2.svg" // Replace with your bottom background image
          alt="Bottom Background"
          layout="fill"
          objectFit="cover"
          className="pointer-events-none"
        />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-10 text-white">
        <div className="max-w-3xl w-full text-center space-y-6">
          {/* Review Text */}
          <p className="text-sm tracking-wider text-gray-300">
            SEND YOUR PHOTO WITH ELORE PRODUCTS AND YOUR GENUINE REVIEW
          </p>

          {/* Comment Box */}
          <div className="flex items-center justify-center gap-2 mt-4">
            <input
              type="text"
              placeholder="ADD YOUR COMMENT HERE"
              className="px-4 py-3 w-96 rounded-xl text-black text-sm focus:outline-none"
            />
            <button className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800">
              POST
            </button>
          </div>

          {/* CTA */}
          <p className="mt-10 text-lg font-bold text-white">
            GET A CHANCE TO GET FEATURED ON ELORE
          </p>
        </div>
      </div>
    </div>
  );
}
