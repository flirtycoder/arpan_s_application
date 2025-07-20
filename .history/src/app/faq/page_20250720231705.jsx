"use client";
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import HeroSection from '@/components/common/hero-section';
import AnnouncementBar from '@/components/ui/announcementBar';
import Ending from '@/components/common/Ending';
import Image from 'next/image';
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
      <div className="relative bg-white text-gray-800 font-light mx-auto px-10 py-14">
        {/* Bottom-right decorative image */}
        <div className="absolute bottom-0 right-0 w-[617px] h-[641px] pointer-events-none">
          <Image
            src="faq." // ✅ Replace with your image path
            alt="FAQ Art"
            layout="fill"
            objectFit="contain"
          />
        </div>

        {/* FAQs content */}
        <div className="max-w-3xl">
          <h1 className="text-4xl font-serif mb-10">FAQs</h1>

          <ol className="space-y-6 list-decimal ml-4">
            <li>
              <p className="font-medium">How can I place an order?</p>
              <p>
                Just select your size, add the product to cart, and follow the checkout process.
                It’s quick and easy!
              </p>
            </li>

            <li>
              <p className="font-medium">What payment methods do you accept?</p>
              <p>
                We accept UPI, credit/debit cards, net banking, and wallets. COD is available on
                select pin codes.
              </p>
            </li>

            <li>
              <p className="font-medium">How long will delivery take?</p>
              <p>Orders are usually delivered within 4–7 business days after dispatch.</p>
            </li>

            <li>
              <p className="font-medium">Can I return a product?</p>
              <p>
                Yes, you can request a return within 7 days of delivery. The product must be unused
                and in original condition.
              </p>
            </li>

            <li>
              <p className="font-medium">When will I get my refund?</p>
              <p>
                Refunds are processed within 7 business days after we receive and inspect the
                returned product.
              </p>
            </li>

            <li>
              <p className="font-medium">Do you offer international shipping?</p>
              <p>Currently, we only ship within India. International shipping is coming soon!</p>
            </li>

            <li>
              <p className="font-medium">How do I track my order?</p>
              <p>Once your order is shipped, you’ll receive a tracking link via email or SMS.</p>
            </li>
          </ol>
        </div>
      </div>
      <Ending />
    </div>
  );
};

export default page;
