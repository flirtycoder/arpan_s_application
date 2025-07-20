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
        <h1 className="text-3xl md:text-4xl font-serif mb-2">Shipping Information</h1>
        <p className="text-center text-gray-500 mb-12">
          We deliver across India through trusted courier partners.
        </p>

        <div className="space-y-6 max-w-3xl">
          <div>
            <h2 className=" text-2xl">Order Processing:</h2>
            <p className='text-2xl'>All orders are processed and dispatched within 1–3 business days.</p>
          </div>

          <div>
            <h2 className="text-">Delivery Time:</h2>
            <p>
              Once shipped, orders usually arrive within 4–7 business days, depending on your
              location
            </p>
          </div>

          <div>
            <h2 className="font-semibold">Shipping Charges:</h2>
          </div>

          <div>
            <p>
              <strong>Prepaid Orders:</strong> Free shipping
            </p>
            <p>
              <strong>Cash on Delivery (COD):</strong> Nominal COD fee may apply
            </p>
          </div>

          <div>
            <h2 className="font-semibold">Order Tracking:</h2>
            <p>You'll receive a tracking link via SMS/email once your order is dispatched.</p>
          </div>
        </div>
      </div>
      <Ending />
    </div>
  );
};

export default page;
