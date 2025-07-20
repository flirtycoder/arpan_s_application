import AnnouncementBar from '@/components/ui/announcementBar';
const page = () => {
    return ( 
        <div></div>
        <div className="relative">
        <AnnouncementBar
          message="Get early access on launches and offers."
          linkText="Sign Up For Texts"
          linkUrl="/signup"
        />
        <Header />
        </div>
      );
}
 
export default page;