import Image from 'next/image';

export default function HelpCenter() {
  return (
    <div
      className="relative bg-white text-gray-800 font-light mx-auto"
      style={{ width: '1005px', height: '1044px' }}
    >
      {/* Top-right Image */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px]">
        <Image
          src="/" // ✅ Replace with your image path under `public/images/`
          alt="Help Center Decoration"
          layout="fill"
          objectFit="contain"
        />
      </div>

      {/* Main Content */}
      <div className="px-10 pt-14 max-w-[600px]">
        <h1 className="text-4xl font-serif mb-6">Help Center</h1>
        <p className="mb-10">
          Welcome to the Elore Help Center! <br />
          Find answers to your questions <br />
          about orders, shipping, returns, <br />
          payments, and more.
        </p>

        <div className="mb-12">
          <h2 className="mb-2 font-medium">Quick Links:</h2>
          <ul className="space-y-2 text-gray-600">
            <li>
              <a href="#" className="hover:underline">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Shipping Information
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Return & Refund Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Payment & Delivery Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact Support
              </a>
            </li>
          </ul>
        </div>

        <div className="absolute bottom-10 left-10 text-sm text-gray-600">
          <p className="mb-2">Still need help?</p>
          <p>
            Reach out to us via email at <span className="text-black">support@elore.com</span>
          </p>
          <p>or use our Contact Form.</p>
          <p>We’re available Monday to Saturday, 10 AM – 6 PM.</p>
        </div>
      </div>
    </div>
  );
}
