export default function MeetTheGirl() {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-white">
      {/* Background Lines */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gray-300" />
        <div className="absolute left-1/2 top-0 h-full w-[1px] bg-gray-300" />
      </div>

      {/* Content Wrapper */}
      <div className="relative flex w-[80%] max-w-6xl z-10">
        {/* Image (Foreground) */}
        <div className="z-20 w-[55%] h-[400px] overflow-hidden shadow-lg">
          <img
            src="/girl.svg" // Replace with your actual image
            alt="Group of Girls"
            className="w-full h-full object-cover grayscale"
          />
        </div>

        {/* Text Section (Background Look) */}
        <div className="relative z-0 -ml-16 mt-12 bg-gray-100 rounded-bl-2xl p-10 pl-24 shadow-md w-[50%]">
          <p className="text-2xl italic text-black mb-6 leading-snug">
            Meet The Girl
            <br />
            You're Helping
          </p>
          <button className="bg-gray-400 text-white py-2 px-6 rounded-lg text-sm hover:bg-gray-500 transition">
            KNOW MORE
          </button>

          {/* Decorative Circles */}
          <div className="absolute bottom-[-20px] left-[-20px] w-10 h-10 bg-gray-300 rounded-full z-[-1]" />
          <div className="absolute bottom-[-30px] left-[20px] w-5 h-5 bg-gray-100 rounded-full z-[-2]" />
        </div>
      </div>
    </div>
  );
}
