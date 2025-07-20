import Header from '@/components/common/Header';
import AnnouncementBar from '@/components/ui/announcementBar';
import Ending from '@/components/common/Ending';
import Image from 'next/image';

const page = () => {
  return (
    <div className="relative">
      <AnnouncementBar
        message="Get early access on launches and offers."
        linkText="Sign Up For Texts"
        linkUrl="/signup"
      />
      <Header />

      <div className="flex-grow" />

      {/* FAQ Section */}
      <div className="relative bg-white text-gray-800 font-light mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-12 lg:py-16">
        {/* FAQs content */}
        <div className="max-w-3xl z-10 relative">
          <h1 className="text-3xl sm:text-4xl font-serif mb-8 sm:mb-10">FAQs</h1>

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

        {/* Bottom-right Decorative Image (Hidden on small screens) */}
        <div className="hidden sm:block absolute right-0 bottom-0 lg:top-80 top- sm:top-96 pointer-events-none z-0">
          <Image
            src="/faq.svg"
            alt="FAQ Art"
            width={617}
            height={641}
            priority
            className="w-[300px] sm:w-[400px] lg:w-[617px] h-auto"
          />
        </div>
      </div>

      {/* Ending Section */}
      <Ending />
    </div>
  );
};

export default page;
