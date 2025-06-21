export default function MeetTheGirl() {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-white overflow-hidden">
      {/* Grid Line Pattern (BG lines behind everything) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Vertical Lines */}
        <div className="absolute top-0 left-[5%] w-px h-full bg-gray-300" />
        <div className="absolute top-0 left-[30%] w-px h-full bg-gray-300" />

        {/* Horizontal Lines */}
        <div className="absolute left-0 top-[20%] h-px w-full bg-gray-300" />
        <div className="absolute left-0 top-[80%] h-px w-full bg-gray-300" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 flex w-[80%] max-w-6xl">
        {/* Image on Left */}
        <div className="w-[60%] h-[420px] overflow-hidden">
          <img
            src="/girl.svg" // Replace with your actual image path
            alt="Group"
            className="w-full h-full object-cover grayscale object"
          />
        </div>

        {/* Text Box Overlapping into Image */}
        <div className="relative -ml-20 mt-20 bg-gray-100 rounded-bl-2xl p-10 pl-24 shadow-md w-[50%] z-20">
          <p className="text-2xl italic text-black mb-6 leading-snug">
            Meet The Girl
            <br />
            You're Helping
          </p>
          <button className="bg-gray-400 text-white py-2 px-6 rounded-lg text-sm hover:bg-gray-500 transition">
            KNOW MORE
          </button>

          {/* Decorative Circles */}
          <div className="absolute bottom-[-20px] left-[-20px] w-10 h-10 bg-gray-300 rounded-full z-10" />
          <div className="absolute bottom-[-30px] left-[20px] w-5 h-5 bg-gray-100 rounded-full z-0" />
        </div>
      </div>
    </div>
  );
}
