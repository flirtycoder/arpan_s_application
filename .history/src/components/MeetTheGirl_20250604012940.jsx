export default function MeetTheGirl() {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-white overflow-hidden">
      {/* Main container (80% width) */}
      <div className="relative w-[80%] max-w-6xl flex">
        {/* Background Gray Box (Text Section) */}
        <div className="bg-gray-100 rounded-bl-2xl p-10 pl-24 shadow-md w-[60%] relative z-0 mt-16">
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

        {/* Foreground Image with Lines */}
        <div className="relative z-10 -ml-20 w-[50%] h-[400px]">
          {/* Vertical Line on Left */}
          <div className="absolute left-0 top-0 h-full w-[1px] bg-gray-300 z-0" />
          {/* Horizontal Line at Bottom */}
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gray-300 z-0" />

          {/* Image */}
          <img
            src="/girl.svg" // Replace with your image path
            alt="Group"
            className="w-full h-full object-cover grayscale relative z-10"
          />
        </div>
      </div>
    </div>
  );
}
