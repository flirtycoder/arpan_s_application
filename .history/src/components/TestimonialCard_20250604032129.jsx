'use client';

export default function TestimonialCard() {
  return (
    <div className="relative w-full min-h-screen bg-black flex items-center justify-center overflow-hidden p-8">
      {/* Background pattern image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/bg1.svg" // ← Replace with your background image URL
          alt="Background pattern"
          className="w-full h-full object-cover opacity-100"
        />
      </div>

      {/* Top swirl graphic */}
      <img
        src="/swirl1.svg" // ← Replace with top swirl/frame image
        alt="Top swirl"
        className="absolute top-0 right-0 w-[531.22px] h-[570px] z-10 object-contain"
      />

      {/* Bottom swirl graphic */}
      <img
        src="/swirl2.svg" // ← Replace with bottom swirl/frame image
        alt="Bottom swirl"
        className="absolute bottom-0 left-0 w-[636.15px] h-[772px] z-10 object-contain"
      />

      {/* Main Card */}
      <div className="relative z-20 flex items-center gap-8 max-w-4xl p-6">
        {/* Left: Text and stars */}
        <div className="flex flex-col items-center text-white text-center max-w-sm">
          <div className=" text-3xl mb-20 text-left">
            {/* Stars */}
            {Array(5)
              .fill('★')
              .map((star, index) => (
                <span key={index} className="text-white text-sm">
                  {star}
                </span>
              ))}
          </div>
          <h2 className="text-lg font-bold tracking-wide">LUCI SHARMA</h2>
          <p className="text-sm mt-3 font-light leading-relaxed px-2 text-right">
            “As a fashion{' '}
            <p className="text-sm font-light leading-relaxed px-2 text-right">influencer, I love</p>{' '}
            <p className="text-sm font-light leading-relaxed px-2 text-right">the comfort and </p>
            <p className="text-sm font-light leading-relaxed px-2 text-right">the elegant</p>{' '}
            <p className="text-sm font-light leading-relaxed px-2 text-right">design Elore have</p>
            <p className="text-sm font-light leading-relaxed px-2 text-right"> in their catalog.</p>
            <p className="text-sm font-light leading-relaxed px-2 text-right"> MORE LOVE TO </p>
            <p className="text-right">ELORE”</p>
          </p>
        </div>

        {/* Right: Image section */}
        <div className="relative w-[300px] h-[400px] rounded-2xl overflow-hidden">
          <img
            src="/swirl3.svg" // ← Replace with person/product image
            alt="Luci Sharma"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-10 flex gap-2 z-20">
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
