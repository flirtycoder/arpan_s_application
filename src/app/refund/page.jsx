import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import HeroSection from '@/components/common/hero-section';
import AnnouncementBar from '@/components/ui/announcementBar';
import Ending from '@/components/common/Ending';
const page = () => {
  return (
    <div>
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
      <div className="min-h-screen px-6 md:px-32 py-10 bg-white text-gray-800 font-light">
        <h1 className="text-3xl md:text-4xl font-serif mb-10">Return & Refund Policy</h1>

        {/* Return Policy Description */}
        <div className="mb-20 max-w-3xl">
          <p className="text-3xl ml-20">
            We want you to love your purchase! If you're not fully satisfied, you can request a
            return within 7 days of delivery.
            <br />
            To be eligible, items must be unused, in original condition, and with all tags intact.
          </p>
        </div>

        {/* Returns Process */}
        <h2 className="text-4xl font-serif mb-6">Returns Process:</h2>
        <div className="max-w-3xl mt-10">
          <p className="text-3xl ml-20">
            Email us at <span className="font-medium text-black">info@elorelifestyle.com</span> with
            your order ID and reason for return. Once approved, we’ll arrange a reverse pickup.
          </p>
        </div>
      </div>
      <Ending />
    </div>
  );
};

export default page;
