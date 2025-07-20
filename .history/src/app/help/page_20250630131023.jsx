import Image from 'next/image';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import HeroSection from '@/components/common/hero-section';
import AnnouncementBar from '@/components/ui/announcementBar';
import Ending from '@/components/common/Ending';

export default function HelpCenter() {
  return (
    <div className="relative bg-white text-gray-800 font-light mx-auto w-full   ">
      <AnnouncementBar
        message="Get early access on launches and offers."
        linkText="Sign Up For Texts"
        linkUrl="/signup"
      />
      <Header />
      <div className="flex-grow">
        <HeroSection />
      </div>
      <Footer />
      {/* Top-right Image */}
      

      {/* Main Content */}
      <div className="px-10 pt-14 w-full">
        <h1 className="text-6xl font-serif mb-6">Help Center</h1>
        <p className="mb-10 text-3xl">
          Welcome to the Elore Help Center! <br />
          Find answers to your questions <br />
          about orders, shipping, returns, <br />
          payments, and more.
        </p>

        <div className="mb-28">
          <h2 className="mb-2 font-medium text-gray-400 text-2xl">Quick Links:</h2>
          <ul className="space-y-2 text-gray-400 mr-12 ">
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

        <div className=" bottom-10 left-10 text-sm text-gray-600 text-right mt-56">
          <p className="mb-2 text-3xl">Still need help?</p>
          <p className="text-3xl">
            Reach out to us via email at <span className="text-black">support@elore.com</span>
          </p>
          <p className="text-3xl">or use our Contact Form.</p>
          <p className="text-3xl">We’re available Monday to Saturday, 10 AM – 6 PM.</p>
        </div>
      </div>
      <Ending/>
    </div>
  );
}
