import Header from '@/components/common/Header';
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

      <div className="flex-grow"></div>

      {/* FAQ Section */}
      <div className="relative bg-white text-gray-800 font-light mx-auto px-10 py-14 overflow-hidden">
        {/* Optional: Top-right decorative image placeholder */}
        {/* Uncomment and replace /top-gold.svg if needed */}
        {/*
        <div className="absolute top-0 right-0 w-[250px] h-[250px] pointer-events-none">
          <Image
            src="/top-gold.svg"
            alt="Top Decoration"
            fill
            className="object-contain"
          />
        </div>
        */}

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

        {/* Bottom-right decorative image */}
        <div className="absolute -bottom-4 right-0 w-[300px] h-[300px] pointer-events-none">
          <Image src="/faq.svg" alt="FAQ Art" fill className="object-contain" />
        </div>
      </div>

      <Ending />
    </div>
  );
};

export default page;
