import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import HeroSection from '@/components/common/hero-section';
import AnnouncementBar from '@/components/ui/announcementBar';

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
        <h1 className="text-7xl  font-serif mb-10">Payment & Delivery Policy</h1>

        {/* Payment Section */}
        <div className="mb-12 space-y-4">
          <div>
            <h2 className=" text-3xl">Payment:</h2>
            <p className='text-3xl mt-'>
              We accept all major payment methods including credit/debit cards, UPI, net banking,
              and wallets.
              <br />
              All transactions are 100% secure and encrypted.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-4xl">Cash on Delivery (COD):</h2>
            <p>Available on select pin codes with an additional fee, if applicable.</p>
          </div>
        </div>

        {/* Delivery Section */}
        <div className="space-y-6 text-center">
          <h2 className="font-semibold">Delivery:</h2>
          <p>
            We ship across India. Orders are dispatched within 1–3 business days and typically{' '}
            <br />
            delivered within 4–7 business days, depending on your location.
          </p>
          <p>Once shipped, you’ll receive a tracking link via email/SMS to monitor your order.</p>
          <p className="text-sm">
            <strong>Note:</strong> Delivery timelines may vary during holidays or due to unforeseen
            circumstances.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
