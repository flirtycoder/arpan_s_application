'use client';

export default function TestimonialCard() {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden p-4 sm:p-6 lg:p-8 mt-20">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0">
        <img src="/bg1.svg" alt="Background pattern" className="w-full h-[1400px] object-cover" />
      </div>

      {/* Top swirl */}
      <img
        src="/swirl1.svg"
        alt="Top swirl"
        className="absolute top-0 right-0 w-[280px] sm:w-[350px] lg:w-[531px] h-auto z-10 object-contain"
      />

      {/* Bottom swirl */}
      <img
        src="/swirl2.svg"
        alt="Bottom swirl"
        className="absolute bottom-0 left-0 w-[300px] sm:w-[400px] lg:w-[636px] h-auto z-10 object-contain"
      />

      {/* Main Card */}
      <div className="relative z-20 flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap- max-w-6xl w-full px-4 sm:px-10">
        {/* Text Section */}
        <div className="flex flex-col items-center text-white text-center max-w-sm">
          {/* Stars */}
          <div className="mb-6 lg:mb-20">
            {Array(5)
              .fill('★')
              .map((star, index) => (
                <span key={index} className="text-white text-3xl sm:text-4xl lg:text-5xl">
                  {star}
                </span>
              ))}
          </div>

          {/* Name */}
          <h2 className="text-2xl sm:text-3xl font-bold tracking-wide">LUCI SHARMA</h2>

          {/* Quote */}
          <div className="text-xl sm:text-2xl font-light leading-relaxed mt-3 px-2">
            <p>“As a fashion influencer, I love</p>
            <p>the comfort and the elegant</p>
            <p>design Elore have in their catalog.</p>
            <p>MORE LOVE TO</p>
            <p>ELORE”</p>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative w-full sm:w-[420px] md:w-[500px] lg:w-[630px] h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] rounded-2xl overflow-hidden">
          <img src="/swirl3.svg" alt="Luci Sharma" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Dot Indicators */}
      <div className="absolute flex gap-2 z-20 bottom-6 lg:top-[98%] lg:left-[60%] justify-center lg:justify-start w-full">
        {[1, 2, 3, 4, 5].map((dot, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full ${index === 2 ? 'bg-white' : 'bg-gray-400'}`}
          />
        ))}
      </div>
    </div>
  );
}
