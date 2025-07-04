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
      
      <Ending/>
    </div>
  );
};

export default page;
