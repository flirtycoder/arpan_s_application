import Image from 'next/image';

export default function EloreComment() {
  return (
    <div className="relative bg-white overflow-hidden">
      {/* Background Shapes */}
      <div className="w-full">
        <Image
          src="/des1.svg"
          alt="Top Background"
          width={1460}
          height={1244}
          className="w-full h-auto -mt-48 sm:-mt-72 md:-mt-96"
        />
        <Image
          src="/des2.svg"
          alt="Bottom Background"
          width={1460}
          height={1237}
          className="w-full h-auto -mt-48 sm:-mt-72 md:-mt-96"
        />
      </div>

      {/* Foreground Content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 sm:px-6 py-12 sm:py-20 text-white">
        <div className="max-w-6xl w-full flex flex-col md:flex-row justify-between items-start gap-8 sm:gap-10 md:gap-20">
          {/* Left Side Text */}
          <div className="md:w-1/2 space-y-1 sm:space-y-2 text-left">
            <p className="text-lg sm:text-xl md:text-3xl tracking-wide text-gray-300">
              SEND YOUR PHOTO WITH ELORE
            </p>
            <p className="text-lg sm:text-xl md:text-3xl tracking-wide text-gray-300">
              PRODUCTS AND YOUR GENUINE
            </p>
            <p className="text-lg sm:text-xl md:text-3xl tracking-wide text-gray-300">
              REVIEW
            </p>
          </div>

          {/* Right Side Input */}
          <div className="md:w-1/2 w-full flex flex-col">
            <textarea
              placeholder="ADD YOUR COMMENT HERE!!!"
              className="w-full bg-gray-200 text-black px-4 py-6 sm:px-6 sm:py-10 rounded-xl text-base shadow-md resize-none focus:outline-none focus:ring-2 focus:ring-black border"
              rows={4}
            />
            <button className="mt-4 self-start md:self-end bg-black text-white px-6 py-2 sm:px-8 sm:py-3 rounded-lg hover:bg-gray-800 transition-all duration-200 shadow">
              POST
            </button>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 sm:mt-20 md:mt-32 w-full text-center md:text-right">
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-600">
            GET A CHANCE TO GET
          </p>
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-600">
            FEATURED ON ELORE
          </p>
        </div>
      </div>
    </div>
  );
}
