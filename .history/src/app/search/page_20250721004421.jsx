import AnnouncementBar from '@/components/ui/announcementBar';
const page = () => {
    return ( 
        <div></div>
        <AnnouncementBar
          message="Get early access on launches and offers."
          linkText="Sign Up For Texts"
          linkUrl="/signup"
        />
        <Header />
        
      );
}
 
export default page;