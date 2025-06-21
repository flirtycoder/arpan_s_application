export default function MeetTheGirl() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="relative flex items-start max-w-4xl">
        {/* Left: Image Placeholder */}
        <div className="w-[300px] h-[350px] bg-gray-300 overflow-hidden">
          {/* Replace this with your own image */}
          <img
            src="/" // <-- Replace this path with your own image
            alt="Group of Girls"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Section: Text and Button */}
        <div className="absolute left-[240px] top-[50px] bg-gray-100 rounded-bl-2xl p-8 pl-20 shadow-md">
          <p className="text-xl italic text-black mb-6">
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
