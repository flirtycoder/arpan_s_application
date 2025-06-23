import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import hero
import AnnouncementBar from '@/components/AnnouncementBar';

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
    </div>
  );
};

export default page;
