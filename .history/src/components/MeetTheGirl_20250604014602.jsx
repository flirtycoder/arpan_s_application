export default function MeetTheGirl() {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-white overflow-hidden">
      {/* Background Grid Lines */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Vertical Lines */}
        <div className="absolute top-0 left-[10%] w-px h-full bg-gray-300" />
        <div className="absolute top-0 left-[40%] w-px h-full bg-gray-300" />

        {/* Horizontal Lines */}
        <div className="absolute left-0 top-[60%] h-px w-full bg-gray-300" />
        <div className="absolute left-0 top-[80%] h-px w-full bg-gray-300" />
      </div>

      {/* Main Content Wrapper */}
      <div className="relative w-[80%] max-w-6xl flex items-start">
        {/* Text Box - BEHIND the image */}
        <div className="absolute left-[40%] top-[60px] bg-gray-100 rounded-bl-2xl p-10 pl-24 shadow-md w-[50%] z-10">
          <p className="text-2xl italic text-black mb-6 ml-36 leading-snug">
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

        {/* Foreground Image */}
        <div className="relative z-20 w-[60%] h-[420px] overflow-hidden shadow-lg">
          <img
            src="/girl.svg" // Replace with your image path
            alt="Group"
            className="w-full h-full object-cover grayscale"
          />
        </div>
      </div>
    </div>
  );
}
