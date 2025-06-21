import Image from 'next/image';

export default function EloreComment() {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      {/* Top Background Shape */}
      <div className="absolute -top-[60%] left-0 w-full z-0">
        <Image
          src="/des1.svg"
          alt="Top Background"
          width={1460} // or your actual image width
          height={1244} // your actual image height
          className="w-full h-auto "
        />
      </div>

      {/* Bottom Background Shape */}
      <div className="absolute bottom-[-98%] left-0 w-full z-0">
        <Image
          src="/des2.svg"
          alt="Bottom Background"
          width={1460}
          height={1237}
          className="w-full h-auto"
        />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-10 text-white">
        <div className="max-w-full w-full text-center space-y-6">
          {/* Review Text */}
          <p className="text-3xl tracking-wider text-left text-gray-300 mt-44">
            SEND YOUR PHOTO WITH ELORE
          </p>
          <p className="text-3xl tracking-wider text-left text-gray-300">
            {' '}
            PRODUCTS AND YOUR GENUINE
          </p>
          <p className="text-3xl tracking-wider text-left text-gray-300"> REVIEW</p>

          {/* Comment Box */}
          <div className="flex items-center justify-center gap-2 mt-4">
            <input
              type="text"
              placeholder="ADD YOUR COMMENT HERE"
              className="px-10 py-20 w-96 rounded-xl text-black text-sm focus:outline-none"
            />
          </div>
          <button className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800">
            POST
          </button>
          {/* CTA */}
          <p className=" text-3xl font-bold text-gray-600">GET A CHANCE TO GET</p>
          <p className="text-3xl font-bold text-gray-600"> FEATURED ON ELORE</p>
        </div>
      </div>
    </div>
  );
}